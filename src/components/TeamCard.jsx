import { useNavigate } from "react-router-dom";
import "../styles/teamCard.css";

export default function TeamCard({ team }) {
  const navigate = useNavigate();

  return (
    <div className="team-card">
      <div className="team-card-top">
        <div className="team-badge">👥</div>

        <div className="team-info">
          <h3 className="team-name">{team.name}</h3>
          <div className="invite-row">
            <span>Invite Code:</span>
            <span className="invite-code">{team.inviteCode}</span>
          </div>
        </div>

        <button
          className="team-arrow"
          onClick={() => navigate(`/teams/${team.id}`, { state: team })}
        >
          →
        </button>
      </div>

      <button
        className="view-team-btn"
        onClick={() => navigate(`/teams/${team.id}`, { state: team })}
      >
        View Team
      </button>
    </div>
  );
}
