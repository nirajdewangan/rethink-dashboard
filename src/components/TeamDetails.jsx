import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles/teamDetails.css";

export default function TeamDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { teamId } = useParams();

  // fallback if refreshed
  const team = state || {
    id: teamId,
    name: "Alpha1",
    inviteCode: "29YR9Q",
  };

  return (
    <div className="team-details">
      {/* Header */}
      <div className="team-details-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Dashboard
        </button>

        <div className="brand">✨ ReThink</div>
      </div>

      {/* Team Title */}
      <div className="team-title">
        <div className="team-icon">👥</div>
        <div>
          <h1>{team.name}</h1>
          <p>
            Invite Code: <span className="invite-pill">{team.inviteCode}</span>
          </p>
        </div>

        <button className="add-member-btn">+ Add Team Members</button>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card blue">
          <h2>0</h2>
          <p>Retrospectives</p>
        </div>

        <div className="stat-card green">
          <h2>0 / 0</h2>
          <p>Actions Done</p>
        </div>

        <div className="stat-card orange">
          <h2>0</h2>
          <p>Completed Retros</p>
        </div>
      </div>

      {/* Action Items + Leaderboard */}
      <div className="content-row">
        <div className="panel">
          <h3>Action Items (0)</h3>
          <div className="empty-box">
            No action items yet
          </div>
        </div>

        <div className="panel">
          <h3>🏆 Leaderboard</h3>
          <div className="empty-box">
            No points earned yet
          </div>
        </div>
      </div>

      {/* Retrospectives */}
      <div className="panel">
        <h3>Retrospectives</h3>
        <div className="empty-box large">
          No retrospectives yet
        </div>
      </div>
    </div>
  );
}
