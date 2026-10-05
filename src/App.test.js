import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// react-router-dom 7 imports 'react-router/dom', which CRA's Jest resolver
// cannot map from the jsdom environment. Mocking the module lets the component
// tree render without pulling in the real router internals.
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <>{children}</>,
  MemoryRouter: ({ children }) => <>{children}</>,
  Link: ({ children }) => <a href="/">{children}</a>,
  useLocation: () => ({ pathname: '/' }),
  Routes: ({ children }) => <>{children}</>,
  Route: () => null
}));

test('renders the site shell with navigation and footer', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Navbar and Footer each render a <nav>, so there are two by design.
  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
