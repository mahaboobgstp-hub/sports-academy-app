import { useLocation } from "react-router-dom";
import "./StudentProfile.css";
import StudentOverview from "./StudentOverview";
import SkillsPanel from "./SkillsPanel";
import AttendancePanel from "./AttendancePanel";
import CoachNotes from "./CoachNotes";
import CurriculumPanel from "./CurriculumPanel";
import DrillsPanel from "./DrillsPanel";
import QuestionsPanel from "./QuestionsPanel";




export default function StudentProfile() {
  const location = useLocation();
const isCoach = new URLSearchParams(location.search).get("mode") === "coach";
  return (
    <div className="student-profile-page">
      <StudentOverview isCoach={isCoach} />
      <SkillsPanel isCoach={isCoach} />
      <CurriculumPanel />
      <DrillsPanel isCoach={isCoach} />
      <AttendancePanel isCoach={isCoach} />
      <CoachNotes isCoach={isCoach} />
      <QuestionsPanel isCoach={isCoach} />
    </div>
  );
}
