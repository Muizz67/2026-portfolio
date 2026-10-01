import { useEffect, useRef, useState } from 'react';

/**
 * Types `phrases` out one character at a time, holds, then either stops or
 * loops. Used by the Home hero.
 *
 * Accessibility notes:
 *  - Respects prefers-reduced-motion: renders the final phrase immediately
 *    and never animates. Vestibular triggers make a looping typewriter a
 *    genuine problem, not a cosmetic one.
 *  - The full text is exposed to screen readers via aria-label, so assistive
 *    tech announces the complete headline rather than a half-typed fragment.
 *  - All timeouts are cleared on unmount and on phrase change, which matters
 *    because a leaked interval would keep mutating state after teardown.
 *
 * @param {string[]} phrases  phrases to type in order
 * @param {object}   options
 * @param {number}   options.typeSpeed    ms per character while typing
 * @param {number}   options.deleteSpeed  ms per character while deleting
 * @param {number}   options.holdTime     ms to pause on a completed phrase
 * @param {boolean}  options.loop         restart after the last phrase
 * @param {boolean}  options.startPaused  delay before typing begins
 * @param {string}   options.separator    inserted between phrases (append mode)
 * @param {boolean}  options.append       build phrases into one string instead
 *                                        of deleting between them
 */
export default function useTypewriter(phrases, options = {}) {
  const {
    typeSpeed = 75,
    deleteSpeed = 35,
    holdTime = 1800,
    loop = false,
    startPaused = false,
    separator = ' ',
    append = false
  } = options;

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);

  // Keep timers in refs so the effect can clear them without re-subscribing.
  const timerRef = useRef(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reduced motion: show the final phrase, stop the loop, touch nothing.
  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases.join(separator));
      setDone(true);
    }
  }, [prefersReducedMotion, phrases, separator]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    // A single stable phrase string avoids re-running on every render.
    const current = phrases[phraseIndex % phrases.length];
    const isLast = phraseIndex === phrases.length - 1;

    // In append mode the target grows by one phrase at a time rather than
    // character by character, so `text` is compared against everything
    // typed so far and never deletes.
    const prefix = append
      ? phrases.slice(0, phraseIndex).join(separator)
      : '';
    const target = append
      ? prefix ? `${prefix}${separator}${current}` : current
      : current;

    const tick = () => {
      if (append) {
        if (text.length >= target.length) return;

        const next = target.slice(0, text.length + 1);
        setText(next);

        if (next === target) {
          if (isLast) {
            setDone(true);
            return;
          }
          setPhraseIndex((i) => i + 1);
          return;
        }
        timerRef.current = setTimeout(tick, typeSpeed);
        return;
      }

      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          // Finished this phrase: hold, then delete unless we're the last one.
          if (isLast && !loop) {
            setDone(true);
            return;
          }
          setIsDeleting(true);
          timerRef.current = setTimeout(tick, holdTime);
          return;
        }
        timerRef.current = setTimeout(tick, typeSpeed);
        return;
      }

      const next = current.slice(0, Math.max(0, text.length - 1));
      setText(next);

      if (next === '') {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
        return;
      }
      timerRef.current = setTimeout(tick, deleteSpeed);
    };

    if (startPaused && text === '' && phraseIndex === 0) {
      timerRef.current = setTimeout(tick, 700);
    } else {
      timerRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timerRef.current);
    // `text` and `isDeleting` drive the next tick, so they are dependencies.
  }, [text, isDeleting, phraseIndex, prefersReducedMotion, typeSpeed, deleteSpeed, holdTime, loop, startPaused, separator, append, phrases]);

  // Clear on unmount so no interval outlives the component.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return {
    text,
    done,
    // The complete headline for assistive tech and for no-JS/fast renders.
    fullText: phrases.join(separator)
  };
}