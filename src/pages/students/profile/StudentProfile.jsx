import StudentOverview from "./StudentOverview";
import SkillsPanel from "./SkillsPanel";
import AttendancePanel from "./AttendancePanel";
import CoachNotes from "./CoachNotes";
import MessagePanel from "./MessagePanel";

export default function StudentProfile() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Student Profile</h2>
      <StudentOverview />
      <SkillsPanel />
      <AttendancePanel />
      <CoachNotes />
      <MessagePanel />
    </div>
  );
}

