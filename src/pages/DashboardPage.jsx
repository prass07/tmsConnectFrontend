import { Box } from "@mui/material";
import React from "react";
import StockDetailsCard from "../components/StockDetailsCard";
import StockStatusDetails from "../components/StockStatusDetails";

const DashboardPage = () => {
  return (
    <Box display="flex" flexDirection="column" gap="3em" margin={"3em"}>
      <StockDetailsCard />
      <StockStatusDetails />
    </Box>
  );
};

export default DashboardPage;
