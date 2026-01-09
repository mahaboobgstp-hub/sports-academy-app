import "./StudentProfile.css";
import StudentOverview from "./StudentOverview";
import SkillsPanel from "./SkillsPanel";
import AttendancePanel from "./AttendancePanel";
import CoachNotes from "./CoachNotes";
import CurriculumPanel from "./CurriculumPanel";
import DrillsPanel from "./DrillsPanel";


export default function StudentProfile() {
  return (
    <div className="student-profile-page">
      <StudentOverview />
      <SkillsPanel />
      <CurriculumPanel />
      <DrillsPanel />
      <AttendancePanel />
      <CoachNotes />
    </div>
  );
}
