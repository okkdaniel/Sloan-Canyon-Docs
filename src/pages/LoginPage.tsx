import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LoginPage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const correctPassword = 'your-secret-password';

    if (password === correctPassword) {
      localStorage.setItem('authToken', 'logged-in');
      window.location.href = '/';
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <Layout title={`Login to ${siteConfig.title}`} description="Login page">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--4 col--offset-4">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="margin-bottom--sm">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="button button--primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;