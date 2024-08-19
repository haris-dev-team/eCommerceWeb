import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const onsubmitHandle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={onsubmitHandle}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155fd] w-full"
              type="submit"
              variant="contained"
              sx={{ padding: "0.8rem 0", bgColor: "#9155fd" }}
              size="large"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>if you have already account?</p>
          <Button
            className="ml-5"
            size="small"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
