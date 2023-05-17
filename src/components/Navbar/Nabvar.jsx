import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { useEffect, useState } from "react";
import decode from "jwt-decode";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";

const Nabvar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const {
    appBar,
    heading,
    image,
    brandContainer,
    toolbar,
    profile,
    purple,
    userName,
    logout,
  } = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const signout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) signout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={appBar} position="static" color="inherit">
      <div className={brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={image} src={memories} alt="memories" />
      </div>
      <Toolbar className={toolbar}>
        {user?.userInfo ? (
          <div className={profile}>
            <Avatar
              className={purple}
              alt={user?.userInfo.name}
              src={user?.userInfo.imageUrl}
            >
              {user?.userInfo.name.charAt(0)}
            </Avatar>
            <Typography className={userName} variant="h6">
              {user?.userInfo.name}
            </Typography>
            <Button
              variant="contained"
              className={logout}
              color="secondary"
              onClick={signout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nabvar;
