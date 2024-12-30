import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

// Sample data
const rows = [
  { id: 1, name: "Aadit Yadav ", age: "2+", project: "Angular Admin" , projectcost:'$14,500', Payment:'Done'},
  { id: 2, name: "Pramit Bakhrel", age: "3+", project: "Angular Admin" ,projectcost:'$24,500',Payment:'Done'},
  { id: 3, name: "Avash Tharu", age: "8+", project: "One page html Admin	" ,projectcost:'$12,500',Payment:'Pending'},
  { id: 4, name: "Nischal Mianali", age:"7+", project: "Wordpress One page	",projectcost:'$3,500' ,Payment:'Done'},
  { id: 5, name: "Biplov Katel", age: "3+", project: "VueJs Application	",projectcost:'$41,500',Payment:'Pending' },
];



export default function DashboardTable() {
  return (
    <>
      <Paper elevation={3} style={{ margin: "15px", padding: "15px" }}>
      <Typography variant="h6" gutterBottom>
         Project Summary :
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>CLIENT NAME </TableCell>
              <TableCell>TEAM	</TableCell>
              <TableCell>PROJECT </TableCell>
              <TableCell>PROJECT COST</TableCell>
              <TableCell>PAYMENT</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.projectcost}</TableCell>
                <TableCell>{row.Payment}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </>
  )
}
