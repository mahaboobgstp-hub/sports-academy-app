import { useState } from "react";

/* Users */
import UsersTable from "../components/users/UsersTable";
import CreateUserModal from "../components/users/CreateUserModal";
import EditUserModal from "../components/users/EditUserModal";

/* Roles */
import RolesTable from "../components/roles/RolesTable";
import CreateRoleModal from "../components/roles/CreateRoleModal";
import EditRoleModal from "../components/roles/EditRoleModal";

/* Layout */
import PageHeader from "../../../components/layout/PageHeader";
import SectionCard from "../../../components/layout/SectionCard";

export default function UsersRolesPage() {
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [openCreateRole, setOpenCreateRole] = useState(false);
  const [openEditRole, setOpenEditRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <PageHeader
        title="Users & Roles"
        subtitle="Manage system users and role-based access control"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* USERS SECTION */}
        <SectionCard
          title="Users"
          actionLabel="+ Add User"
          onAction={() => setOpenCreateUser(true)}
        >
          <UsersTable
            onEdit={(user) => {
              setSelectedUser(user);
              setOpenEditUser(true);
            }}
          />
        </SectionCard>

        {/* ROLES SECTION */}
        <SectionCard
          title="Roles"
          actionLabel="+ Create Role"
          onAction={() => setOpenCreateRole(true)}
        >
          <RolesTable
            onEdit={(role) => {
              setSelectedRole(role);
              setOpenEditRole(true);
            }}
          />
        </SectionCard>
      </div>

      {/* USER MODALS */}
      {openCreateUser && (
        <CreateUserModal onClose={() => setOpenCreateUser(false)} />
      )}

      {openEditUser && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setOpenEditUser(false)}
        />
      )}

      {/* ROLE MODALS */}
      {openCreateRole && (
        <CreateRoleModal onClose={() => setOpenCreateRole(false)} />
      )}

      {openEditRole && selectedRole && (
        <EditRoleModal
          role={selectedRole}
          onClose={() => setOpenEditRole(false)}
        />
      )}
    </div>
  );
            }
