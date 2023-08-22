import { Navigate } from "react-router-dom";
const AdminRoute = ({ children, userRoles }) => {
  if (userRoles !== "admin") {
    return <Navigate to="/unauth" />;
  }
  return children;
};

export default AdminRoute;
