import { useState } from "react";

export default function Locations() {
  const [courts, setCourts] = useState([]);

  function addCourt() {
    setCourts([
      ...courts,
      {
        name: "",
        code: "",
        seats: "",
        type: "Indoor"
      }
    ]);
  }

  function updateCourt(index, field, value) {
    const updated = [...courts];
    updated[index][field] = value;
    setCourts(updated);
  }

  return (
    <div>
      <h3>Locations</h3>

      {/* Location Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 16
        }}
      >
        <input placeholder="Location Name" />
        <input placeholder="Location Code" />
        <input placeholder="City" />

        <select>
          <option>Status: Active</option>
          <option>Status: Inactive</option>
        </select>

        <input
          placeholder="Full Address"
          style={{ gridColumn: "span 4" }}
        />

        <input placeholder="Contact Person Name" />
        <input placeholder="Contact Phone" />
        <input placeholder="Contact Email" />

        <input type="number" placeholder="Max Capacity" />

        <input
          placeholder="Notes"
          style={{ gridColumn: "span 3" }}
        />

        <button style={{ gridColumn: "span 1" }}>
          Add Location
        </button>
      </div>

      {/* Courts Section */}
      <h4>Courts</h4>

      {courts.map((court, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginBottom: 8,
            padding: 8,
            border: "1px solid #ddd"
          }}
        >
          <input
            placeholder="Court Name"
            value={court.name}
            onChange={(e) =>
              updateCourt(index, "name", e.target.value)
            }
          />

          <input
            placeholder="Court Code"
            value={court.code}
            onChange={(e) =>
              updateCourt(index, "code", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Max Seats"
            value={court.seats}
            onChange={(e) =>
              updateCourt(index, "seats", e.target.value)
            }
          />

          <select
            value={court.type}
            onChange={(e) =>
              updateCourt(index, "type", e.target.value)
            }
          >
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
        </div>
      ))}

      <button onClick={addCourt}>+ Add Court</button>
    </div>
  );
}
