import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">
          <div className="logo-icon">✨</div>
          <div>
            <h4>ReThink</h4>
            <p>Gamified Retrospectives</p>
          </div>
        </div>

        <div className="user-info">
          <div className="user-text">
            <strong>Niraj Kumar Dewangan</strong>
            <span>niraj.dewangan1608@gmail.com</span>
          </div>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <h1>Welcome back, Niraj!</h1>
        <p>Ready to run engaging retrospectives?</p>
      </section>

      {/* Teams Section */}
      <section className="teams">
        <div className="teams-header">
          <h2>👥 Your Teams</h2>
          <div className="actions">
            <button className="primary-btn">+ Create Team</button>
            <button className="secondary-btn">Join Team</button>
          </div>
        </div>

        {/* Empty State */}
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <h3>No teams yet</h3>
          <p>
            Create your first team or join an existing one to get started with
            gamified retrospectives
          </p>
          <div className="empty-actions">
            <button className="primary-btn">+ Create Team</button>
            <button className="secondary-btn">Join Team</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
