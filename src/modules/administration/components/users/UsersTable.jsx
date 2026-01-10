import { useState } from "react";
import CreateUserModal from "./CreateUserModal";

const users = [
  { id: 1, name: "Admin User", email: "admin@academy.com", role: "Admin", status: "Active" },
  { id: 2, name: "Coach Rahul", email: "rahul@academy.com", role: "Coach", status: "Active" }
];

export default function UsersTable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-lg">Users</h2>
        <button onClick={() => setOpen(true)} className="btn-primary">+ Add User</button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && <CreateUserModal onClose={() => setOpen(false)} />}
    </div>
  );
}

