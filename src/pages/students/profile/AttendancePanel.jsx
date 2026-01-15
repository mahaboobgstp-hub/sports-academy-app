/*import { useState } from "react";

const attendanceData = [
  { day: "01", status: "P" },
  { day: "02", status: "P" },
  { day: "03", status: "A" },
  { day: "04", status: "P" },
  { day: "05", status: "P" },
  { day: "06", status: "H" },
  { day: "07", status: "P" },
  { day: "08", status: "P" },
  { day: "09", status: "P" },
  { day: "10", status: "A" },
  { day: "11", status: "P" },
  { day: "12", status: "P" },
  { day: "13", status: "P" },
  { day: "14", status: "H" },
  { day: "15", status: "P" },
  { day: "16", status: "A" },
  { day: "17", status: "P" },
  { day: "18", status: "P" },
  { day: "19", status: "P" },
  { day: "20", status: "P" }
];

// P = Present, A = Absent, H = Holiday

export default function AttendancePanel({ isCoach }) {

  return (
    <div className="card">
      <h3>Attendance</h3>

      <div className="attendance-summary">
        <div>Total Classes: 24</div>
        <div>Attendance: 83%</div>
      </div>

      {isCoach ? <CoachAttendanceView /> : <ParentAttendanceGrid />}

           <div className="attendance-grid">
  {attendanceData.map((item, index) => (
    <div
      key={index}
      className={`attendance-cell ${item.status}`}
      title={
        item.status === "P"
          ? "Present"
          : item.status === "A"
          ? "Absent"
          : "Holiday"
      }
    >
      <span className="attendance-date">{item.day}</span>
    </div>
  ))}
</div>


      <div className="attendance-legend">
        <span><i className="present" /> Present</span>
        <span><i className="absent" /> Absent</span>
        <span><i className="holiday" /> Holiday</span>
      </div>
    </div>
  );
}

function CoachAttendanceView() {
  return <div>Coach Attendance View</div>;
}

function ParentAttendanceGrid() {
  return <div>Parent Attendance Grid</div>;
}
*/
import { useState } from "react";
import generateMockAttendance from "../mock/mockAttendance";

const STATUS_COLORS = {
  none: "#e5e7eb",
  present: "#22c55e",
  absent: "#ef4444",
  holiday: "#f59e0b",
  cancelled: "#7f1d1d",
};

export default function AttendancePanel({ isCoach }) {
  const [attendance, setAttendance] = useState(generateMockAttendance());
  const [selectedDay, setSelectedDay] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
  const [cancelEligibility, setCancelEligibility] = useState({
  refund: false,
  makeup: false,
  noRefund: false,
});


  const updateStatus = (status) => {
    setAttendance((prev) =>
      prev.map((d) =>
        d.day === selectedDay ? { ...d, status } : d
      )
    );
    setSelectedDay(null);
  };

  return (
    <div className="card">
      <h3>Attendance</h3>

      <div className="attendance-summary">
        <div>Total Classes: 24</div>
        <div>Attendance: 83%</div>
      </div>

      {/* 90-day grid */}
      <div className="attendance-wrapper">
  {[0, 30, 60].map((start) => (
    <div className="attendance-row" key={start}>
      {attendance.slice(start, start + 30).map((d) => (
        <div
          key={d.day}
          className="attendance-box"
          style={{ backgroundColor: STATUS_COLORS[d.status] }}
          title={d.date}
          onClick={(e) => {
            if (!isCoach) return;
            setSelectedDay(d.day);
            setPopupPos({
              x: e.clientX,
              y: e.clientY,
            });
          }}
        />
      ))}
    </div>
  ))}
</div>

{/* Coach popup */}
{isCoach && selectedDay && (
  <div
    className="attendance-popup"
    style={{
      top: popupPos.y + 10,
      left: popupPos.x + 10,
    }}
  >
    {["present", "absent", "holiday", "cancelled"].map((s) => (
      <button key={s} onClick={() => updateStatus(s)}>
        {s}
      </button>
    ))}
  </div>
)}

{/* 👇 ONLY WRAPPING FOR ALIGNMENT – NOTHING REMOVED */}
<div className="attendance-bottom">

  <div className="attendance-left-bottom">
    <div className="attendance-legend">
      <span><i style={{ background: "#22c55e" }} /> Present</span>
      <span><i style={{ background: "#ef4444" }} /> Absent</span>
      <span><i style={{ background: "#f59e0b" }} /> Holiday</span>
      <span><i style={{ background: "#7f1d1d" }} /> Cancelled</span>
    </div>
  </div>

  <div className="attendance-right-bottom">
    <div className="cancel-eligibility">
      <h4>Cancelled Classes Eligibility</h4>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={cancelEligibility.refund}
          onChange={(e) =>
            setCancelEligibility({
              ...cancelEligibility,
              refund: e.target.checked,
            })
          }
        />
        <span>Eligible for Refund</span>
      </label>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={cancelEligibility.makeup}
          onChange={(e) =>
            setCancelEligibility({
              ...cancelEligibility,
              makeup: e.target.checked,
            })
          }
        />
        <span>Eligible for Make up Classes</span>
      </label>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={cancelEligibility.noRefund}
          onChange={(e) =>
            setCancelEligibility({
              ...cancelEligibility,
              noRefund: e.target.checked,
            })
          }
        />
        <span>Not Eligible for Refund</span>
      </label>
    </div>
  </div>

</div>

      
