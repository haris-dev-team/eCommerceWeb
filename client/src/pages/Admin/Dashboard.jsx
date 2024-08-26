import { Grid } from "@mui/material";
import React from "react";
import Acheivment from "../../components/Admin_Components/Acheivment";
import MonthlyOverview from "../../components/Admin_Components/MonthlyOverview";

const AdminDasborad = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Acheivment />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
                
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDasborad;
