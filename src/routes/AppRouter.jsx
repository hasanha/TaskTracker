import React from "react";
import { Route, Routes } from "react-router-dom";
import Unauthorized from "../components/Unauthorized";
import { useSelector } from "react-redux";
import { AddTask, Login, TaskList, TaskListUser } from "../components";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
const AppRouter = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = user.role;

  console.log(userRole, "userapp");
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauth" element={<Unauthorized />} />
      <Route
        path="/alltasks"
        element={
          userRole === "admin" ? (
            <PrivateRoute userRoles={userRole}>
              <TaskList />
            </PrivateRoute>
          ) : (
            <PrivateRoute userRoles={userRole}>
              <TaskListUser />
            </PrivateRoute>
          )
        }
      />
      <Route
        path="/addtask"
        element={
          <AdminRoute userRoles={userRole}>
            <AddTask />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
