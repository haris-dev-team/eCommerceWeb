import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../State/Auth/Action";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "CUSTOMER", // default role
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mobile"
            name="mobile"
            label="Mobile"
            fullWidth
            value={formData.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <FormControlLabel
              value="CUSTOMER"
              control={<Radio />}
              label="Customer"
            />
            <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Button
            className="bg-[#9155fd] w-full"
            type="submit"
            variant="contained"
            sx={{ padding: "0.8rem 0" }}
            size="large"
          >
            Register
          </Button>
        </Grid>
      </Grid>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you don't have account?</p>
          <Button
            className="ml-5"
            size="small"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Register;
