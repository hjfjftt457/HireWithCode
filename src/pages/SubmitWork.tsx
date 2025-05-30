import React, { useState } from 'react';
import './SubmitWork.css';

const SubmitWork: React.FC = () => {
  const [githubUrl, setGithubUrl] = useState('');
  const [vercelUrl, setVercelUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 处理表单提交
    alert('提交成功！');
  };

  return (
    <div className="submit-container">
      <div className="form-container">
        <h1>提交作品</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="githubUrl">GitHub 仓库 URL</label>
            <input
              type="url"
              id="githubUrl"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vercelUrl">Vercel 在线体验地址</label>
            <input
              type="url"
              id="vercelUrl"
              value={vercelUrl}
              onChange={(e) => setVercelUrl(e.target.value)}
              placeholder="https://your-project.vercel.app"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            提交作品
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitWork; 