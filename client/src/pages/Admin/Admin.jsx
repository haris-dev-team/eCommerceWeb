import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SvgImage from "../../assets/order.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccountCricleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Create_PRoduct_Form from "./Create_PRoduct_Form";
import Products_Table from "./Products_Table";
import Orders_Table from "./Orders_Table";
import Customers_Tables from "./Customers_Tables";
import AdminDasborad from "./Dashboard";
import {
  AddShoppingCart,
  AssignmentInd,
  ShoppingCart,
} from "@mui/icons-material";
import { FaProductHunt } from "react-icons/fa6";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "Products",
    path: "/admin/products",
    icon: <FaProductHunt size={25} />,
  },
  { name: "Customers", path: "/admin/customers", icon: <AssignmentInd /> },
  { name: "Orders", path: "/admin/orders", icon: <img src={SvgImage} className="h-[25px]" /> },
  {
    name: "AddProduct",
    path: "/admin/createProduct",
    icon: <AddShoppingCart />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "1px solid blue",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => {
            return (
              <ListItem
                key={index}
                disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCricleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex h-dvh relative ">
      <CssBaseline />
      <div className="w-[15%] border border-r-gray-300 h-full fixed top-0 ">
        {drawer}
      </div>
      <div className="w-[85%] ml-[15%] h-full">
        <Routes>
          <Route path="/" element={<AdminDasborad />} />
          <Route path="/createProduct" element={<Create_PRoduct_Form />} />
          <Route path="/products" element={<Products_Table />} />
          <Route path="/orders" element={<Orders_Table />} />
          <Route path="/cutomers" element={<Customers_Tables />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
