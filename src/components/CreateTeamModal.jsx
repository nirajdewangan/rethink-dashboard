import React, { useEffect, useState } from "react";
import "../styles/createTeamModal.css";

export default function CreateTeamModal({ isOpen, onClose, onCreate }) {
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    setTeamName("");

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    const name = teamName.trim();
    if (!name) return;
    onCreate(name);
  };

  const closeOnBackdrop = (e) => {
    if (e.target.classList.contains("modal-backdrop")) onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={closeOnBackdrop}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <div className="modal-header">
          <div>
            <h3>Create New Team</h3>
            <p>Give your team a name to get started</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form onSubmit={submit}>
          <label className="modal-label">Team Name</label>
          <input
            className="modal-input"
            placeholder="e.g., Engineering Team"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={!teamName.trim()}>
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
