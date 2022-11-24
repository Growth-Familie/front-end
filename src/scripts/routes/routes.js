import Account from '../views/pages/account';
import AddArticle from '../views/pages/add-article';
import Dashboard from '../views/pages/dashboard';
import Detail from '../views/pages/detail';
import EditArticle from '../views/pages/edit-article';
import Home from '../views/pages/home';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/login': Login,
  '/article': Detail,
  '/dashboard': Dashboard,
  '/dashboard/add-article': AddArticle,
  '/dashboard/edit-article': EditArticle,
  '/dashboard/account': Account,
};

export default routes;
