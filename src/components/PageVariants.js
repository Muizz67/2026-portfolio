/**
 * Shared page-reveal animation variants.
 *
 * The page components used to duplicate these variants with slightly different
 * values (stagger timing, vertical offset). Keeping them in one module is the
 * single source of truth while still letting each page choose its timing/
 * offset.
 */
export function makePageVariants(containerDelay = 0.2, containerStagger = 0.1, itemY = 30) {
  return {
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delayChildren: containerDelay, staggerChildren: containerStagger }
      }
    },
    itemVariants: {
      hidden: { y: itemY, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    }
  };
}
