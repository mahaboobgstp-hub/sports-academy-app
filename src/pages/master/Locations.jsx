import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

<div className="time-grid">
  {TIME_SLOTS.map((slot, idx) => (
    <div
      key={idx}
      className={`time-slot ${isSelected ? "selected" : ""}`}
      title={`Court: ${court.name}
Day: ${day}
Time: ${slot.label}`}
      onClick={() => toggleSlot(court.id, day, slot.from)}
    />
  ))}
</div>


const START_HOUR = 5;   // 5 AM
const END_HOUR = 23;   // 11 PM

const TIME_SLOTS = Array.from(
  { length: END_HOUR - START_HOUR },
  (_, i) => {
    const from = START_HOUR + i;
    const to = from + 1;
    return {
      from,
      to,
      label: `${String(from).padStart(2, "0")}:00 - ${String(to).padStart(2, "0")}:00`
    };
  }
);


export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [courts, setCourts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    city: "",
    status: "ACTIVE",
    address: "",
    timezone: "",
    max_capacity: "",
    contact_name: "",
    contact_role: "",
    contact_phone: "",
    contact_email: "",
    vendor_name: "",
    vendor_type: "",
    vendor_company: "",
    vendor_phone: "",
    vendor_email: "",
    contract_start: "",
    contract_end: "",
    notes: ""
  });

  // ===== CONTRACT UI STATE =====
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

const [showContract, setShowContract] = useState(false);

const [contractForm, setContractForm] = useState({
  name: "",
  season: "",
  start_date: "",
  end_date: "",
  status: "ACTIVE"
});

const [selectedCourts, setSelectedCourts] = useState([]);
const [contractGrid, setContractGrid] = useState({});

// ===== HELPERS =====
function toggleCourt(courtId) {
  if (selectedCourts.includes(courtId)) {
    setSelectedCourts(selectedCourts.filter(id => id !== courtId));
  } else {
    setSelectedCourts([...selectedCourts, courtId]);
  }
}

function toggleHour(courtId, day, hour) {
  const key = `${courtId}-${day}-${hour}`;
  setContractGrid(prev => ({
    ...prev,
    [key]: !prev[key]
  }));
}


  useEffect(() => {
    loadLocations();
  }, []);

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function loadLocations() {
    const { data } = await supabase
      .from("locations")
      .select("*, courts(*)")
      .order("created_at", { ascending: false });

    setLocations(data || []);
  }

  function addCourt() {
    setCourts([
      ...courts,
      { name: "", code: "", seats: "", type: "Indoor" }
    ]);
  }

  function updateCourt(index, field, value) {
    const updated = [...courts];
    updated[index][field] = value;
    setCourts(updated);
  }

async function saveLocation() {
  if (!form.name || !form.code) {
    alert("Location name and code are required");
    return;
  }

  const payload = {
    name: form.name,
    code: form.code,
    city: form.city,
    status: form.status,
    address: form.address,
    timezone: form.timezone,
    max_capacity: form.max_capacity ? Number(form.max_capacity) : null,

    contact_name: form.contact_name,
    contact_role: form.contact_role,
    contact_phone: form.contact_phone,
    contact_email: form.contact_email,

    vendor_name: form.vendor_name,
    vendor_type: form.vendor_type,
    vendor_company: form.vendor_company,
    vendor_phone: form.vendor_phone,
    vendor_email: form.vendor_email,

    // 🔥 THIS IS THE FIX
    contract_start: form.contract_start && form.contract_start !== "" 
      ? form.contract_start 
      : null,

    contract_end: form.contract_end && form.contract_end !== "" 
      ? form.contract_end 
      : null,

    notes: form.notes
  };

  const { data: location, error } = await supabase
    .from("locations")
    .insert([payload])
    .select()
    .single();

  if (error) {
    alert(error.message);
    return;
  }

  if (courts.length > 0) {
    const courtRows = courts.map(c => ({
      location_id: location.id,
      name: c.name,
      code: c.code,
      max_seats: c.seats ? Number(c.seats) : null,
      type: c.type
    }));

    const { error: courtError } = await supabase
      .from("courts")
      .insert(courtRows);

    if (courtError) {
      alert(courtError.message);
      return;
    }
  }

  alert("Location saved successfully");



    setForm({
      name: "",
      code: "",
      city: "",
      status: "ACTIVE",
      address: "",
      timezone: "",
      max_capacity: "",
      contact_name: "",
      contact_role: "",
      contact_phone: "",
      contact_email: "",
      vendor_name: "",
      vendor_type: "",
      vendor_company: "",
      vendor_phone: "",
      vendor_email: "",
      contract_start: "",
      contract_end: "",
      notes: ""
    });

    setCourts([]);
    loadLocations();
  }

  return (
    <div>
      <h3>Locations</h3>

      <div className="form-grid">
        <input placeholder="Location Name" value={form.name} onChange={e => updateField("name", e.target.value)} />
        <input placeholder="Location Code" value={form.code} onChange={e => updateField("code", e.target.value)} />
        <input placeholder="City" value={form.city} onChange={e => updateField("city", e.target.value)} />

        <select value={form.status} onChange={e => updateField("status", e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <input placeholder="Full Address" value={form.address} onChange={e => updateField("address", e.target.value)} />
        <input placeholder="Timezone" value={form.timezone} onChange={e => updateField("timezone", e.target.value)} />
        <input type="number" placeholder="Max Capacity" value={form.max_capacity} onChange={e => updateField("max_capacity", e.target.value)} />

        <h4>Contact Person</h4>
        <input placeholder="Name" value={form.contact_name} onChange={e => updateField("contact_name", e.target.value)} />
        <input placeholder="Role" value={form.contact_role} onChange={e => updateField("contact_role", e.target.value)} />
        <input placeholder="Phone" value={form.contact_phone} onChange={e => updateField("contact_phone", e.target.value)} />
        <input placeholder="Email" value={form.contact_email} onChange={e => updateField("contact_email", e.target.value)} />

        <h4>Vendor / Contractor</h4>
        <input placeholder="Vendor Name" value={form.vendor_name} onChange={e => updateField("vendor_name", e.target.value)} />
        <input placeholder="Vendor Type" value={form.vendor_type} onChange={e => updateField("vendor_type", e.target.value)} />
        <input placeholder="Company" value={form.vendor_company} onChange={e => updateField("vendor_company", e.target.value)} />
        <input placeholder="Phone" value={form.vendor_phone} onChange={e => updateField("vendor_phone", e.target.value)} />
        <input placeholder="Email" value={form.vendor_email} onChange={e => updateField("vendor_email", e.target.value)} />
        <input type="date" value={form.contract_start} onChange={e => updateField("contract_start", e.target.value)} />
        <input type="date" value={form.contract_end} onChange={e => updateField("contract_end", e.target.value)} />
        <input placeholder="Notes" value={form.notes} onChange={e => updateField("notes", e.target.value)} />

        <h4>Courts</h4>

        {courts.map((c, i) => (
          <div key={i}>
            <input placeholder="Court Name" value={c.name} onChange={e => updateCourt(i, "name", e.target.value)} />
            <input placeholder="Court Code" value={c.code} onChange={e => updateCourt(i, "code", e.target.value)} />
            <input type="number" placeholder="Seats" value={c.seats} onChange={e => updateCourt(i, "seats", e.target.value)} />
            <select value={c.type} onChange={e => updateCourt(i, "type", e.target.value)}>
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
          </div>
        ))}

        <button onClick={addCourt}>+ Add Court</button>\
        <button onClick={saveLocation}>Save Location</button>
      </div>

      {/* ================= CONTRACTS ================= */}
<h3>Contracts</h3>

<button onClick={() => setShowContract(true)}>
  + Add Contract
</button>

{showContract && (
  <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
    
    <h4>Contract Details</h4>

    <div className="form-grid">
      <input
        placeholder="Contract Name"
        value={contractForm.name}
        onChange={e => setContractForm({ ...contractForm, name: e.target.value })}
      />

      <select
        value={contractForm.season}
        onChange={e => setContractForm({ ...contractForm, season: e.target.value })}
      >
        <option value="">Select Season</option>
        <option>2025-26</option>
        <option>2026-27</option>
      </select>

      <input
        type="date"
        value={contractForm.start_date}
        onChange={e => setContractForm({ ...contractForm, start_date: e.target.value })}
      />

      <input
        type="date"
        value={contractForm.end_date}
        onChange={e => setContractForm({ ...contractForm, end_date: e.target.value })}
      />

      <select
        value={contractForm.status}
        onChange={e => setContractForm({ ...contractForm, status: e.target.value })}
      >
        <option value="ACTIVE">Active</option>
        <option value="DRAFT">Draft</option>
      </select>
    </div>

    {/* COURT SELECTION */}
    <h4>Select Courts</h4>
    {courts.map((c, i) => (
      <label key={i} style={{ marginRight: 12 }}>
        <input
          type="checkbox"
          checked={selectedCourts.includes(i)}
          onChange={() => toggleCourt(i)}
        />{" "}
        {c.name || `Court ${i + 1}`}
      </label>
    ))}

    {/* WEEK GRID */}
    {selectedCourts.length > 0 && (
      <>
        <h4>Weekly Contracted Hours</h4>

        <div style={{ overflowX: "auto" }}>
          <table border="1" cellPadding="4">
            <thead>
              <tr>
                <th>Court</th>
                {DAYS.map(d => (
                  <th key={d}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedCourts.map(courtId => (
                <tr key={courtId}>
                  <td>{courts[courtId]?.name || "Court"}</td>
                  {DAYS.map(day => (
                    <td key={day}>
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {HOURS.map(hour => {
                          const key = `${courtId}-${day}-${hour}`;
                          const active = contractGrid[key];
                          return (
                            <div
                              key={hour}
                              onClick={() => toggleHour(courtId, day, hour)}
                              style={{
                                width: 16,
                                height: 16,
                                margin: 1,
                                cursor: "pointer",
                                background: active ? "#4caf50" : "#eee"
                              }}
                              title={`${hour}:00`}
                            />
                          );
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}

    {/* ACTIONS */}
    <div style={{ marginTop: 12 }}>
      <button disabled>Save Contract</button>
      <button onClick={() => setShowContract(false)}>Cancel</button>
    </div>

  </div>
)}


      <h3>Existing Locations</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Courts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(l => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.code}</td>
              <td>{l.city}</td>
              <td>{l.courts?.length || 0}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
