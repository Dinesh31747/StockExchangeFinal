import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Snackbar, Alert } from '@mui/material';

import { styled } from '@mui/material/styles';
import NavAfter from './NavAfterLogin';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey.contrastText : theme.palette.text.primary,
  fontWeight: 'bold',
  fontSize: 14,
  borderBottom: 'none',
}));

export default function Stock() {
  const [data, setData] = useState({
    top_gainers: [],
    stocks_in_loss: [],
    most_bought: [],
  });
  useEffect(()=>{
    localStorage.setItem('stock',JSON.stringify(data))
  },[items]);

  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AppBar position="static" color="primary">
        <NavAfter />
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
          View Your Stocks (Real-time)
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 4, backgroundColor: 'background.paper' }}>
          <Table sx={{ '& thead th': { backgroundColor: 'background.default', color: 'text.primary' } }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Ticker</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Change (%)</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.top_gainers.map((stock, index) => (
                <TableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {stock.ticker}
                  </StyledTableCell>
                  <StyledTableCell>{stock.price}</StyledTableCell>
                  <StyledTableCell>{stock.change_percentage}</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained" size="small" onClick={() => handleAddToCart(stock)}>
                      Add to Cart
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
}
