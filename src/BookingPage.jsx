import "./BookingPage.css";


export default function BookingPage() {
  return (
    
      <h2>Book Seat</h2>

      <label>Academy</label><br />
      <select>
        <option>Summer 2025 Basketball</option>
        <option>Season 1 Badminton</option>
      </select>

      <br /><br />

      <label>Emirate</label><br />
      <select>
        <option>Abu Dhabi</option>
        <option>Dubai</option>
        <option>Sharjah</option>
      </select>

      <br /><br />

      <label>Location</label><br />
      <select>
        <option>School Location 1</option>
        <option>School Location 2</option>
      </select>

      <br /><br />

      <label>Program</label><br />
      <select>
        <option>ballsnbabies</option>
        <option>midlevel</option>
        <option>jr</option>
        <option>all boys</option>
      </select>

      <br /><br />

      <label>Hour</label><br />
      <select>
        <option>6:00 AM</option>
        <option>7:00 AM</option>
        <option>8:00 AM</option>
      </select>

      <br /><br />

      <label>Court</label><br />
      <select>
        <option>Court 1</option>
        <option>Court 2</option>
      </select>

      <br /><br />

      <div>
        <input value="Total Seats: 20" readOnly /><br />
        <input value="Seats Sold: 8" readOnly /><br />
        <input value="Seats Available: 10" readOnly /><br />
        <input value="Seats Expired: 2" readOnly />
      </div>

      <br />

      <button>Book Seat</button>
      <br /><br />
      <button>Pay Now</button>
    </div>
  );
}
