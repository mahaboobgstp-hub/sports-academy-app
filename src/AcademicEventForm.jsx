import { useState } from "react";
import {
  SPORTS, SEASONS, EMIRATES, LOCATIONS
} from "./data";
import LocationMetricsModal from "./LocationMetricsModal";
import "./styles.css";

export default function AcademicEventForm() {
  const [modalLocation, setModalLocation] = useState(null);

  return (
    <div className="container">
      <h2>Create Academic Event</h2>

      <label>Sport</label>
      <select>
        {SPORTS.map(s => <option key={s}>{s}</option>)}
      </select>

      <label>Year</label>
      <input placeholder="2025-26" />

      <label>Season</label>
      <select>
        {SEASONS.map(s => <option key={s}>{s}</option>)}
      </select>

      <label>Season Period</label>
      <div className="row">
        <input type="date" />
        <input type="date" />
      </div>

      <label>Emirate</label>
      <select>
        {EMIRATES.map(e => <option key={e}>{e}</option>)}
      </select>

      <label>Locations</label>
      <div className="locations">
        {LOCATIONS.map(loc => (
          <div key={loc.id} className="location-row">
            <input type="checkbox" />
            <span>{loc.name}</span>
            <button onClick={() => setModalLocation(loc)}>
              More Metrics
            </button>
          </div>
        ))}
      </div>

      {modalLocation && (
        <LocationMetricsModal
          location={modalLocation}
          onClose={() => setModalLocation(null)}
        />
      )}

      <button className="submit-btn">Create Event</button>
    </div>
  );
}
