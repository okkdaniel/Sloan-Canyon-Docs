import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../components/protectedroute';
import HomePage from './index'; // Your home page component
import LoginPage from './loginpage'; // Your login page component

import styles from './index.module.css';
import  { Redirect } from 'react-router-dom';

// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/" component={HomePage} />
        {/* Add more protected routes as needed */}
      </Switch>
    </Router>
  );
};

export default function Home() {
  return <Redirect to='/login'/>;
}