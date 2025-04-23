import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">📈 Hair Growth Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Manage your journey to healthier hair 🌿</p>
      </header>

      <section className="dashboard-cards">
        <div className="dashboard-card">
          <span className="emoji">👤</span>
          <h3>Profile</h3>
          <p>Manage your personal information and preferences.</p>
          <button>View Profile</button>
        </div>

        <div className="dashboard-card">
          <span className="emoji">📊</span>
          <h3>Progress</h3>
          <p>Track your hair growth with weekly stats and photos.</p>
          <button>View Progress</button>
        </div>

        <div className="dashboard-card">
          <span className="emoji">🎯</span>
          <h3>Goals</h3>
          <p>Set your hair care milestones and stay motivated.</p>
          <button>Set Goals</button>
        </div>

        <div className="dashboard-card">
          <span className="emoji">🤝</span>
          <h3>Community</h3>
          <p>Connect with others and share tips and stories.</p>
          <button>Join Community</button>
        </div>

        <div className="dashboard-card">
          <span className="emoji">📸</span>
          <h3>Photo Diary</h3>
          <p>Upload your hair pictures and watch the transformation.</p>
          <button>Upload Photo</button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
