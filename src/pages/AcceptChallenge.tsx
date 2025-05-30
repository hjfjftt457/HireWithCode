import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AcceptChallenge.css';

const AcceptChallenge: React.FC = () => {
  const navigate = useNavigate();
  const [githubId, setGithubId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 处理表单提交
    navigate('/submit');
  };

  return (
    <div className="accept-container">
      <div className="form-container">
        <h1>接受挑战</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="githubId">GitHub ID</label>
            <input
              type="text"
              id="githubId"
              value={githubId}
              onChange={(e) => setGithubId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">邮箱</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            接受挑战
          </button>
        </form>
      </div>
    </div>
  );
};

export default AcceptChallenge; 