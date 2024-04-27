import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

interface Route {
  path: string;
  breadcrumb: string;
}

interface BreadcrumbProps {
  routes: Route[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbItems = pathnames.map((pathname, index) => {
    const route = routes.find(
      (route) =>
        route.path ===
        `/${pathname}${index === pathnames.length - 1 ? '' : '/'}`
    );
    return route ? (
      <li className={styles.li} key={route.path}>
        <Link className={styles.a} to={route.path}>
          {route.breadcrumb}
        </Link>
      </li>
    ) : null;
  });
  return (
    <nav className={styles.nav}>
      <ol className={styles.ol}>{breadcrumbItems}</ol>
    </nav>
  );
};

export default Breadcrumb;
