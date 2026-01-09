export default function RequirePermission({ allowed, children }) {
  // later: read from AuthContext
  const hasAccess = true;
  return hasAccess ? children : null;
}
