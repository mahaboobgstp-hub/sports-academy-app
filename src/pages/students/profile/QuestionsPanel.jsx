import { useState } from "react";

export default function QuestionsPanel() {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  function submitQuestion() {
    if (!question.trim()) return;

    setQuestions([
      ...questions,
      { text: question, date: new Date().toLocaleDateString() }
    ]);
    setQuestion("");
  }

  return (
    <div className="card">
      <h3>Ask Any Question</h3>

      <textarea
        value={question}
        onChange={e => setQuestion(e.target.value)}
        maxLength={100}
        placeholder="Type your question (max 100 words)"
        rows={3}
        style={{ width: "100%", padding: 8 }}
      />

      <button
        style={{ marginTop: 8 }}
        onClick={submitQuestion}
      >
        Submit
      </button>

      {questions.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h4>Questions</h4>
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
