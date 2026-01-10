export default function PermissionMatrix({ permissions }) {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr>
          <th>Module</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(permissions).map(([module, actions]) => (
          <tr key={module}>
            <td>{module}</td>
            <td>
              {actions.map(a => (
                <label key={a} className="mr-3">
                  <input type="checkbox" /> {a}
                </label>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

