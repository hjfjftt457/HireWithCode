import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Guide.css';

const Guide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="guide-container">
      <div className="guide-content">
        <h1>面试流程说明</h1>
        <div className="markdown-content">
          <h2>欢迎参加我们的线上面试</h2>
          <p>本次面试采用在线编程挑战的形式，请按照以下步骤完成：</p>
          <ol>
            <li>在下一页输入你的 GitHub ID 和邮箱</li>
            <li>完成编程挑战</li>
            <li>提交你的作品链接</li>
          </ol>
          <p>准备好开始了吗？</p>
        </div>
        <button 
          className="start-button"
          onClick={() => navigate('/accept')}
        >
          开始挑战
        </button>
      </div>
    </div>
  );
};

export default Guide; 