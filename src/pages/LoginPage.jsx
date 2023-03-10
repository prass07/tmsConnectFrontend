import { VpnKey } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import instance from "../../config/axios-config";
// import { getCaptcha, login } from "../../utils/apiUrls";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
    userCaptcha: "",
    captchaIdentifier: "",
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(credentials);
  };

  // const {data:captchaData} = useQuery(['getCaptcha'],() => instance.get(getCaptcha.getCaptcha))

  // const { data: loginData, mutate, isLoading, error } = useMutation(() => instance.post(login.login));

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Card
          sx={{
            width: "30em",
            padding: "20px",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" gap="10px" alignItems="center">
                <VpnKey />
                <Typography
                  variant="span"
                  fontSize="2em"
                  fontWeight="600"
                  color="#0A2D50"
                >
                  Login
                </Typography>
              </Box>
              <Typography variant="span" fontSize="1em" color="#808080">
                Please enter your credentials below
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              margin="40px 0"
            >
              <Box display="flex" gap="5px" width="100%">
                <TextField
                  label="User Name"
                  sx={{ width: "75%" }}
                  value={credentials.userName}
                  name="userName"
                  onChange={handleChange}
                />
                <TextField
                  label="Broker Id"
                  sx={{ width: "25%" }}
                  value={credentials.password}
                  name="password"
                  onChange={handleChange}
                />
              </Box>
              <TextField label="Password" type={"password"} />
              <Box display="flex" alignItems="center" gap="10px">
                <TextField
                  fullWidth
                  label="Enter Captcha"
                  value={credentials.userCaptcha}
                  name="userCaptcha"
                  onChange={handleChange}
                />
                <img
                  alt="captcha"
                  height="59px"
                  src="data:image/jpeg;base64,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"
                />
              </Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#0A2D50" }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoginPage;
