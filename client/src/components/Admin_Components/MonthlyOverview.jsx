import {
  AccountCircleOutlined,
  AttachMoney,
  MoreVert,
  SettingsCell,
  TrendingUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const salesData = [
  {
    status: "56.4k",
    title: "Customers",
    color: "#e6d689",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "12.5K",
    title: "Sales",
    color: "#22CB5C",
    icon: <AccountCircleOutlined sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "1.54K",
    title: "Products",
    color: "#DE4839",
    icon: <SettingsCell sx={{ fontSize: "1.75rem" }} />,
  },
  {
    status: "88K",
    title: "Revenue",
    color: "#12B0E8",
    icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStatus = () => {
  return salesData.map((item, index) => {
    return (
      <Grid item xs={12} sm={3} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "white",
              background: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.status}</Typography>
          </Box>
        </Box>
      </Grid>
    );
  });
};

const MonthlyOverview = () => {
  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600, ml: 2 }}>
              Total 48.5% growth
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStatus()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
