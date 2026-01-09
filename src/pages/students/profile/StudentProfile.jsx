import "./StudentProfile.css";
import StudentOverview from "./StudentOverview";
import SkillsPanel from "./SkillsPanel";
import AttendancePanel from "./AttendancePanel";
import CoachNotes from "./CoachNotes";

export default function StudentProfile() {
  return (
    <div className="student-profile-page">
      <StudentOverview />
      <SkillsPanel />
      <AttendancePanel />
      <CoachNotes />
    </div>
  );
}
