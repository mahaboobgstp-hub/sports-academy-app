import { useState } from "react";

export default function QuestionsPanel({ isCoach }) {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([
    {
      text: "What should my child practice at home?",
      date: "12 Apr",
      reply: ""
    }
  ]);

  function submitQuestion() {
    if (!question.trim()) return;

    setQuestions([
      ...questions,
      {
        text: question,
        date: new Date().toLocaleDateString(),
        reply: ""
      }
    ]);

    setQuestion("");
    setShowForm(false);
  }

  return (
    <div className="card">
      <h3>Questions</h3>

      {/* ✅ 1. ASK QUESTION BUTTON — PASTE HERE */}
      {!isCoach && (
        <button onClick={() => setShowForm(true)}>
          Ask a Question
        </button>
      )}

      {/* Parent question form */}
      {!isCoach && showForm && (
        <div style={{ marginTop: 12 }}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            maxLength={100}
            rows={3}
            placeholder="Type your question (max 100 words)"
            style={{ width: "100%", padding: 8 }}
          />
          <button
            style={{ marginTop: 8 }}
            onClick={submitQuestion}
          >
            Submit
          </button>
        </div>
      )}

      {/* Questions list */}
      <div style={{ marginTop: 16 }}>
        {questions.map((q, index) => (
          <div key={index} className="question-item">

            {/* Question text */}
            <div>
              <strong>Parent:</strong> {q.text}
            </div>
            <small>{q.date}</small>

            {/* ✅ 2. COACH REPLY TEXTAREA — PASTE HERE */}
            {isCoach && (
              <textarea
                placeholder="Type reply..."
                rows={2}
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: 8
                }}
              />
            )}

            {/* Existing reply (parent sees this later) */}
            {q.reply && (
              <div style={{ marginTop: 8 }}>
                <strong>Coach:</strong> {q.reply}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
