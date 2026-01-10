import Modal from "../../../../components/ui/Modal";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";

export default function EditUserModal({ user, onClose }) {
  return (
    <Modal title="Edit User" onClose={onClose}>
      <div className="space-y-4">
        <Input label="Full Name" defaultValue={user.name} />
        <Input label="Email" defaultValue={user.email} />

        <div>
          <label className="block text-sm mb-1">Role</label>
          <select
            defaultValue={user.role}
            className="w-full border rounded px-3 py-2"
          >
            <option>Admin</option>
            <option>Coach</option>
            <option>Sales</option>
            <option>Finance</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Status</label>
          <select
            defaultValue={user.status}
            className="w-full border rounded px-3 py-2"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="danger">Deactivate</Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

