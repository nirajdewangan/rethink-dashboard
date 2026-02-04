import React from "react";
import "../styles/teamCard.css";

export default function TeamCard({ team, onView }) {
  return (
    <div className="team-card">
      <div className="team-card-top">
        <div className="team-badge">👥</div>

        <div className="team-info">
          <h3 className="team-name">{team.name}</h3>
          <div className="invite-row">
            <span className="invite-label">Invite Code:</span>
            <span className="invite-code">{team.inviteCode}</span>
          </div>
        </div>

        <button className="team-arrow" onClick={() => onView(team)}>
          →
        </button>
      </div>

      <button className="view-team-btn" onClick={() => onView(team)}>
        View Team
      </button>
    </div>
  );
}
