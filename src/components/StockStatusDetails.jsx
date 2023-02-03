import React from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Summarize } from "@mui/icons-material";

const StockStatusDetails = () => {
  const columns = [
    {
      field: "status",
      headerName: "Status",
      width: 100,
      //   renderCell: (params) => {
      //     return (
      //       <Box>
      //         <Typography variant="span">{params?.row?.status}</Typography>
      //       </Box>
      //     );
      //   },
    },
    {
      field: "client",
      headerName: "Client",
      width: 250,
    },
    {
      field: "symbol",
      headerName: "Symbol",
      width: 90,
    },
    {
      field: "orderTime",
      headerName: "Order Time",
      width: 190,
    },
    {
      field: "orderType",
      headerName: "Buy/Sell",
      width: 70,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "orderQty",
      headerName: "Order Qty.",
      width: 100,
    },
    {
      field: "remainingQty",
      headerName: "Remaining Qty.",
      width: 120,
    },
    {
      field: "value",
      headerName: "Value",
      width: 100,
    },
    {
      field: "targetTime",
      headerName: "Target Time(Min.)",
      width: 150,
    },
  ];

  const rows = [
    {
      id: 1,
      status: "completed",
      client: "Praful Thapa(20210539161)",
      symbol: "UPPER",
      orderTime: "2023-02-02 14:45:03",
      orderType: "Sell",
      price: "497",
      orderQty: "514",
      remainingQty: "0",
      value: "255,458.00",
      targetTime: "60",
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" gap="5px">
          <Summarize color="#0A2D50" />
          <Typography variant="span" fontSize="20px" color="#0A2D50">
            Order Status
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            height: "33vh",
            maxHeight: "60vh",
            marginTop: "2em",
          }}
        >
          <Box style={{ flexGrow: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(rows) => rows["id"]}
              pageSize={15}
              rowsPerPageOptions={[15]}
              disableColumnSelector
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockStatusDetails;
