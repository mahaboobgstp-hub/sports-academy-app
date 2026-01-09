import { useState } from "react";

export default function CoachQuestionReply() {
  const [threads, setThreads] = useState([
    {
      id: 1,
      student: "Arjun Kumar",
      question: "What should my child practice at home this week?",
      date: "12 Apr",
      reply: ""
    },
    {
      id: 2,
      student: "Rohan Singh",
      question: "Is my child ready for intermediate level?",
      date: "10 Apr",
      reply: "He is improving well. We will reassess in two weeks."
    }
  ]);

  function updateReply(id, value) {
    setThreads(
      threads.map((t) =>
        t.id === id ? { ...t, reply: value } : t
      )
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Parent Questions</h2>

      <div style={{ marginTop: 16 }}>
        {threads.map((t) => (
          <QuestionCard
            key={t.id}
            thread={t}
            onReply={updateReply}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- CARD ---------- */

function QuestionCard({ thread, onReply }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        background: "#fff"
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <strong>{thread.student}</strong>
        <span style={{ marginLeft: 8, color: "#777", fontSize: 12 }}>
          {thread.date}
        </span>
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Question:</strong>
        <div>{thread.question}</div>
      </div>

      <div>
        <strong>Reply:</strong>
        <textarea
          rows={2}
          value={thread.reply}
          onChange={(e) => onReply(thread.id, e.target.value)}
          placeholder="Type your reply"
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </div>

      <button style={{ marginTop: 8 }}>
        Save Reply
      </button>
    </div>
  );
}
