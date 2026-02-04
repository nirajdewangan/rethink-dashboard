import React, { useEffect, useRef } from "react";
import "../styles/createTeamModal.css";

export default function CreateTeamModal({ isOpen, onClose, onCreate }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus input when modal opens
    const t = setTimeout(() => inputRef.current?.focus(), 0);

    // Close on ESC
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamName = inputRef.current?.value?.trim() || "";
    if (!teamName) return;
    onCreate(teamName);
  };

  const handleBackdropClick = (e) => {
    // close only if clicked on backdrop, not inside modal
    if (e.target.classList.contains("modal-backdrop")) onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdropClick}>
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

        <form onSubmit={handleSubmit}>
          <label className="modal-label">Team Name</label>
          <input
            ref={inputRef}
            className="modal-input"
            placeholder="e.g., Engineering Team"
            type="text"
          />

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
