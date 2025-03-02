import { useRoutes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import AboutMe from '@/pages/about-me';
import { PointerWrapper } from './components/magicui/pointer';
import Business from '@/pages/business';

const AppRoutes = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <Business />
    },
    {
      path: '/about-me',
      element: <AboutMe />,
    },
    {
      path: "*",
      element: <Navigate to="/about-me" />
    }
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <PointerWrapper>
        <AppRoutes />
      </PointerWrapper>
    </Router>
  );
};

export default App;