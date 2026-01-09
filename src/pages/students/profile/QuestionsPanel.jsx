import { useState } from "react";

export default function QuestionsPanel() {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  function handleSubmit() {
    if (!question.trim()) return;

    setQuestions([
      ...questions,
      {
        text: question,
        date: new Date().toLocaleDateString()
      }
    ]);

    setQuestion("");
    setShowForm(false);
  }

  return (
    <div className="card">
      <h3>Questions</h3>

      {/* Ask button */}
      <button onClick={() => setShowForm(!showForm)}>
        Ask a Question
      </button>

      {/* Question form */}
      {showForm && (
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}

      {/* Posted questions */}
      {questions.length > 0 && (
        <div style={{ marginTop: 16 }}>
          {questions.map((q, i) => (
            <div key={i} className="question-item">
              <div>{q.text}</div>
              <small>{q.date}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
