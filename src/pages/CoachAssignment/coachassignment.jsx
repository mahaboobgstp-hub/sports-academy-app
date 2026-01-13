import { useState } from "react";

export default function CoachAssignment() {
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      date: "12-May",
      time: "6:00–7:00 PM",
      program: "Basketball",
      level: "Beginner",
      location: "Center A",
      court: "Court 1",
      duration: 1,
      coach: null,
      coachRate: 600,
      courtRate: 400,
    },
    {
      id: 2,
      date: "12-May",
      time: "7:00–8:00 PM",
      program: "Football",
      level: "Advanced",
      location: "Center A",
      court: "Court 2",
      duration: 1,
      coach: "Rahul",
      coachRate: 700,
      courtRate: 400,
    },
  ];

  const openDrawer = (cls) => setSelectedClass(cls);
  const closeDrawer = () => setSelectedClass(null);

  return (
    <div className="coach-assign-page">
      <div className="page-title">Coach Assignment</div>

      {/* FILTERS */}
      <div className="ca-filters">
        <div className="ca-filter">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="ca-filter">
          <label>Location</label>
          <select>
            <option>All</option>
            <option>Center A</option>
          </select>
        </div>
        <div className="ca-filter">
          <label>Assignment</label>
          <select>
            <option>All</option>
            <option>Unassigned</option>
            <option>Assigned</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="ca-table-wrapper">
        <table className="ca-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Program</th>
              <th>Level</th>
              <th>Location</th>
              <th>Court</th>
              <th>Coach</th>
              <th>Total Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => {
              const totalCost =
                cls.duration * (cls.coachRate + cls.courtRate);

              return (
                <tr
                  key={cls.id}
                  className={!cls.coach ? "unassigned" : ""}
                >
                  <td>{cls.date}</td>
                  <td>{cls.time}</td>
                  <td>{cls.program}</td>
                  <td>{cls.level}</td>
                  <td>{cls.location}</td>
                  <td>{cls.court}</td>
                  <td
                    className={
                      cls.coach ? "status-assigned" : "status-unassigned"
                    }
                  >
                    {cls.coach || "Unassigned"}
                  </td>
                  <td>₹{totalCost}</td>
                  <td>
                    <button
                      className="assign-btn"
                      onClick={() => openDrawer(cls)}
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* DRAWER */}
      {selectedClass && (
        <div className="ca-drawer">
          <div className="drawer-title">Assign Coach</div>

          <div className="drawer-section">
            <div className="drawer-label">Class</div>
            <div className="drawer-value">
              {selectedClass.program} ({selectedClass.time})
            </div>
          </div>

          <div className="drawer-section">
            <div className="drawer-label">Coach</div>
            <select className="drawer-input">
              <option>Rahul</option>
              <option>Anita</option>
              <option>Vikram</option>
            </select>
          </div>

          <div className="drawer-section">
            <div className="drawer-label">Coach Rate / Hr</div>
            <input
              className="drawer-input"
              value={selectedClass.coachRate}
              readOnly
            />
          </div>

          <div className="drawer-section">
            <div className="drawer-label">Court Rate / Hr</div>
            <input
              className="drawer-input"
              value={selectedClass.courtRate}
              readOnly
            />
          </div>

          <div className="cost-preview">
            <div className="cost-row">
              <span>Coach Cost</span>
              <span>₹{selectedClass.coachRate}</span>
            </div>
            <div className="cost-row">
              <span>Court Cost</span>
              <span>₹{selectedClass.courtRate}</span>
            </div>
            <div className="cost-row cost-total">
              <span>Total</span>
              <span>
                ₹{selectedClass.coachRate + selectedClass.courtRate}
              </span>
            </div>
          </div>

          <div className="drawer-actions">
            <button className="btn-secondary" onClick={closeDrawer}>
              Cancel
            </button>
            <button className="btn-primary">Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
