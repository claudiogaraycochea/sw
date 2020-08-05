/* Pages */
import Error404 from '../pages/error404/Error404';
import Home from '../pages/private/home/Home';
import StyleGuide from '../ui/styleGuide/StyleGuide';

/* Layouts */
import DashboardLayout from '../layouts/dashboard/DashboardLayoutContainer';

export const routes = [
  {
    id: 4,
    exact: true,
    path: '/styleGuide',
    Component: StyleGuide,
    Layout: DashboardLayout,
    Access: 'Public',
  },
  {
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: DashboardLayout,
    Access: 'Public',
  },
  {
    id: 0,
    exact: true,
    path: '*',
    Component: Error404,
    Layout: DashboardLayout,
    Access: 'Public',
  },
];