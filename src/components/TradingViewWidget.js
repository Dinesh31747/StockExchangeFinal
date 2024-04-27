import React, { useEffect, useRef, memo } from 'react';
import NavAfter from './NavAfterLogin';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": false, // Disable autosize for manual control
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com",
        "width": "100%", // Set chart width to 100% of container
        "height": "600px" // Set chart height to a specific value or adjust as needed
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <>
      <NavAfter />
      <div ref={container} style={{ width: "100%", height:"80%" }}>
        <div className="tradingview-widget-container__widget" style={{ width: "100%" }}></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" target="_blank" rel="noreferrer"><span className="blue-text">Track all markets on TradingView</span></a></div>
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
