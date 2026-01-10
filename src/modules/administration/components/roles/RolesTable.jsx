import { useState } from "react";
import CreateRoleModal from "./CreateRoleModal";

const roles = ["Admin", "Coach", "Sales", "Finance"];

export default function RolesTable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-lg">Roles</h2>
        <button onClick={() => setOpen(true)} className="btn-primary">+ Create Role</button>
      </div>

      <ul className="space-y-2">
        {roles.map(r => (
          <li key={r} className="flex justify-between border-b py-2">
            <span>{r}</span>
            <button className="text-blue-600">Edit</button>
          </li>
        ))}
      </ul>

      {open && <CreateRoleModal onClose={() => setOpen(false)} />}
    </div>
  );
}

