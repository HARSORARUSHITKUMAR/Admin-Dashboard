import React from "react";
import "./Tab.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Tab = () => {
  // function createData(name, calories, fat, carbs, protein) {
  //     return { name, calories, fat, carbs, protein };
  // }

  const rows = [
    {
      id: 123456,
      product: "Hp Laptop",
      customer: "Jaimeen Makwana",
      date: "1 March",
      amount: 35000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 456231,
      product: "washing Machine",
      customer: "Pratipal Chauhan",
      date: "15 april",
      amount: 25000,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 789564,
      product: "keyboard",
      customer: "Arman Sumra",
      date: "18 may",
      amount: 1500,
      method: "Online",
      status: "Approved",
    },
    {
      id: 458659,
      product: "ASUS ROG Strix",
      customer: "Harold Carol",
      date: "1 March",
      amount: 25000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 785412,
      product: "Playstation 5",
      customer: "John Smith",
      date: "15 april",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 158987,
      product: "Acer Nitro 5",
      customer: "Michael Doe",
      date: "18 may",
      amount: 900,
      method: "Online",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.id}
            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell >{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tab;
