import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';

function PasswordProtection() {
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth === 'true') {
      history.replace('/');
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '74177') {
      localStorage.setItem('isAuthenticated', 'true');
      history.replace('/');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <Layout title="Password Protection">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default PasswordProtection;