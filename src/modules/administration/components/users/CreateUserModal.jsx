export default function CreateUserModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="text-lg font-semibold mb-4">Create User</h3>

        <div className="space-y-3">
          <input placeholder="Full Name" className="input" />
          <input placeholder="Email" className="input" />
          <select className="input">
            <option>Admin</option>
            <option>Coach</option>
            <option>Sales</option>
            <option>Finance</option>
          </select>
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button className="btn-primary">Create</button>
        </div>
      </div>
    </div>
  );
}

