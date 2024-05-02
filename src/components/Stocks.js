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

const Stocks = () => {
  const [data, setData] = useState({
    top_gainers: [],
    stocks_in_loss: [],
    most_bought: [],
  });
  const [cart, setCart] = useState([]); // State to store selected stocks
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar state

  // Calculate totalStocks directly from cart state within the component
  const totalStocks = cart.length;

  useEffect(() => {
    const storedStocks = localStorage.getItem('stock');
    let cartFromStorage = [];
    if (storedStocks) {
      cartFromStorage = JSON.parse(storedStocks);
    }

    // Update cart state based on localStorage
    setCart(cartFromStorage);

    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    async function fetchData() {
      try {
        const response = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
        setData({
          top_gainers: response.data.top_gainers || [],
          stocks_in_loss: response.data.top_losers || [],
          most_bought: response.data.most_bought || [],
        });
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData(); // Initial fetch

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleAddToCart = (stock) => {
    const { ticker, price } = stock;
    const newStock = { ticker, price };

    // Update cart state directly (using spread operator)
    setCart((prevCart) => [...prevCart, newStock]);

    // Update cart data in localStorage
    localStorage.setItem('stock', JSON.stringify([...cart, newStock]));

    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const removeFromCart = (stock) => {
    const updatedCart = cart.filter((item) => item.ticker !== stock.ticker);
    setCart(updatedCart);
    localStorage.setItem('stock', JSON.stringify(updatedCart));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFFFF4' }}>
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
        <Typography variant="h6" component="h6">
    Total Stocks in Cart: {totalStocks}
  </Typography>
  {cart.map((stock, index) => (
  <TableRow key={index}>
    <StyledTableCell component="th" scope="row">
      {stock.ticker}
    </StyledTableCell>
    <StyledTableCell>{stock.price}</StyledTableCell>
    <StyledTableCell>
      <Button variant="contained" size="small" color="error" onClick={() => removeFromCart(stock)}>
        Remove
      </Button>
    </StyledTableCell>
  </TableRow>
))}
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
};
export default Stocks;