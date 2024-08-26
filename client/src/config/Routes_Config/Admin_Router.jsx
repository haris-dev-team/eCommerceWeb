import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../pages/Admin/Admin";

const Admin_Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default Admin_Router;
