import { Grid } from "@mui/material";
import React from "react";
import Acheivment from "../../components/Admin_Components/Acheivment";
import MonthlyOverview from "../../components/Admin_Components/MonthlyOverview";
import OrderTableView from "../../components/Admin_Components/OrderTableView";
import Products_Table from "./Products_Table";
import ProductsTableView from "../../components/Admin_Components/ProductsTableView";

const AdminDasborad = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Acheivment />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrderTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDasborad;
