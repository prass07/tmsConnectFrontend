import { Logout } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import StockDetailsCard from "../components/StockDetailsCard";
import StockStatusDetails from "../components/StockStatusDetails";

const DashboardPage = () => {
  return (
    <Box display="flex" flexDirection="column" gap="3em" margin="1em 3em">
      <Box display="flex" justifyContent="flex-end">
        <Tooltip title="Logout">
          <IconButton>
            <Logout sx={{ color: "#0A2D50" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <StockDetailsCard />
      <StockStatusDetails />
    </Box>
  );
};

export default DashboardPage;
