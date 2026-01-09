import { useState } from "react";

export default function CoachNotes({ isCoach }) {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([
    {
      text: "Good improvement in ball control.",
      date: "10 Apr"
    },
    {
      text: "Needs to work on defensive stance.",
      date: "02 Apr"
    }
  ]);

  function addNote() {
    if (!note.trim()) return;

    setNotes([
      {
        text: note,
        date: new Date().toLocaleDateString()
      },
      ...notes
    ]);

    setNote("");
  }

  return (
    <div className="card">
      <h3>Coach Notes</h3>

      {/* ✅ COACH INPUT — PLACE IT HERE */}
      {isCoach && (
        <div style={{ marginBottom: 12 }}>
          <textarea
            placeholder="Add coach note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            style={{ width: "100%", padding: 8 }}
          />
          <button
            style={{ marginTop: 6 }}
            onClick={addNote}
          >
            Add Note
          </button>
        </div>
      )}

      {/* Notes list — visible to both */}
      {notes.map((n, index) => (
        <div key={index} className="note">
          <div>{n.text}</div>
          <small>{n.date}</small>
        </div>
      ))}
    </div>
  );
}
