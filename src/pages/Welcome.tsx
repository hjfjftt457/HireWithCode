import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import logo from '../pages/logo.png'; // Import the logo image

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    console.log('Welcome component mounted');
    
    // 添加倒计时效果
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          navigate('/guide'); // 当倒计时到0时直接导航
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      console.log('Cleaning up timers');
      clearInterval(countdownTimer);
    };
  }, [navigate]);

  return (
    <div className="welcome-container">
      {/* Use the imported logo variable in the src attribute */}
      <img src={logo} alt="Logo" className="logo" />
      <h1>欢迎来到 infist 线上面试环节，期待你的加入！</h1>
      <p>将在 {countdown} 秒后跳转...</p>
    </div>
  );
};

export default Welcome;