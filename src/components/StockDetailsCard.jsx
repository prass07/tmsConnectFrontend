import React, { useState } from "react";

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { LocalMall } from "@mui/icons-material";
import ReactThreeToggle from "react-three-toggle";

const clientNames = [
  {
    label: "Hari Khadka",
    id: 1,
  },
  {
    label: "Elon Musk",
    id: 2,
  },
  {
    label: "Prachanda",
    id: 3,
  },
];

const orderTypes = [
  {
    label: "Target",
    id: 1,
  },
  {
    label: "Market",
    id: 2,
  },
];

const StockDetailsCard = () => {
  const [sellOrBuy, setSellOrBuy] = useState();
  const [orderType, setOrderType] = useState("");

  const handleToggleChange = (value) => setSellOrBuy(value);

  const handleOrderTypeChange = (event) => setOrderType(event.target.value);

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" gap="5px">
          <LocalMall color="#0A2D50" />
          <Typography variant="span" fontSize="20px" color="#0A2D50">
            Order Details
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <FormControl>
            <InputLabel>Order Type</InputLabel>
            <Select value={orderType} onChange={handleOrderTypeChange}>
              {orderTypes?.map((type) => {
                return <MenuItem value={type?.label}>{type?.labe}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <Autocomplete
            options={clientNames.map((option) => option.label)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={"Client Name/Code"}
                size="small"
                fullWidth
              />
            )}
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={"2em"} marginTop="2em">
            <Autocomplete
              options={clientNames.map((option) => option.label)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Stock Symbol/Code"}
                  size="small"
                  fullWidth
                />
              )}
            />
            <TextField
              label={"Qty."}
              sx={{ width: "7em" }}
              size="small"
              type={"number"}
            />
            <TextField
              label={"Target Price"}
              size="small"
              sx={{ width: "10em" }}
            />
            <TextField
              label={"Target Duration (Minutes)"}
              size="small"
              value={60}
              sx={{ width: "10em" }}
              type={"number"}
            />
          </Box>
          <Box display="flex" alignItems="center" gap="5px">
            <Typography variant="span">Sell</Typography>
            <ReactThreeToggle
              values={["sell", "null", "buy"]}
              initialValue="null"
              onChange={handleToggleChange}
            />
            <Typography variant="span">Buy</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="span" fontSize="12px">
            LTP :{" "}
          </Typography>
          <Typography variant="span" fontSize="12px">
            100
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap="10px"
          justifyContent={"flex-end"}
          marginTop="1em"
        >
          <Button variant="contained" sx={{ backgroundColor: "#808080" }}>
            Clear
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#0A2D50" }}>
            Order
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockDetailsCard;
