import React from 'react'
import NavAfter from './NavAfterLogin'

function Heatmap() {
    const handleButtonClick = () => {
        // Redirect to the desired website when the button is clicked
        window.location.href = 'https://in.tradingview.com/markets/stocks-india/market-movers-all-stocks/';
      };
    
      return (
        <div>
          {/* Button to trigger the redirection */}
        <NavAfter/>
          <button onClick={handleButtonClick}>Go to Website</button>
        </div>
      );
}

export default Heatmap
