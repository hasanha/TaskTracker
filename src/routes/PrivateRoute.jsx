import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children, userRoles }) => {
  if (!userRoles) {
    return <Navigate to="/unauth" />;
  }
  return children;
};
export default PrivateRoute;
