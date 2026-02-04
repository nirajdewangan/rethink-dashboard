import React, { useMemo, useState } from "react";
import "../styles/dashboard.css";
import CreateTeamModal from "./CreateTeamModal";
import TeamCard from "./TeamCard";

// helper for mock invite codes
function generateInviteCode(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // avoid confusing 0/O/1/I
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default function Dashboard() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // ✅ MOCK DATA (initial team)
  const [teams, setTeams] = useState([
    {
      id: "team-1",
      name: "Alpha1",
      inviteCode: "29YR9Q",
      createdAt: Date.now(),
    },
  ]);

  const hasTeams = useMemo(() => teams.length > 0, [teams]);

  const handleCreateTeam = (name) => {
    const newTeam = {
      id: `team-${Date.now()}`,
      name,
      inviteCode: generateInviteCode(),
      createdAt: Date.now(),
    };

    // ✅ Add to top so newest appears first
    setTeams((prev) => [newTeam, ...prev]);
    setIsCreateOpen(false);
  };

  const handleViewTeam = (team) => {
    alert(`Viewing team: ${team.name} (${team.inviteCode})`);
    // later: navigate(`/teams/${team.id}`)
  };

  return (
    <div className="dashboard">
      {/* HEADER + WELCOME (keep your existing UI) */}
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

      <section className="welcome">
        <h1>Welcome back, Niraj!</h1>
        <p>Ready to run engaging retrospectives?</p>
      </section>

      {/* TEAMS */}
      <section className="teams">
        <div className="teams-header">
          <h2>👥 Your Teams</h2>
          <div className="actions">
            <button className="primary-btn" onClick={() => setIsCreateOpen(true)}>
              + Create Team
            </button>
            <button className="secondary-btn">Join Team</button>
          </div>
        </div>

        {/* ✅ Render teams as cards */}
        {hasTeams ? (
          <div className="team-cards-row">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} onView={handleViewTeam} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <h3>No teams yet</h3>
            <p>
              Create your first team or join an existing one to get started with
              gamified retrospectives
            </p>
            <div className="empty-actions">
              <button className="primary-btn" onClick={() => setIsCreateOpen(true)}>
                + Create Team
              </button>
              <button className="secondary-btn">Join Team</button>
            </div>
          </div>
        )}
      </section>

      {/* MODAL */}
      <CreateTeamModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={handleCreateTeam}
      />
    </div>
  );
}
