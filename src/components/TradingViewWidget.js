// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import NavAfterLogin from './NavAfterLogin';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "1000",
          "height": "600",
          "symbol": "NASDAQ:AAPL",
          "timezone": "Asia/Kolkata",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <>
    <NavAfterLogin/>
    <div className="tradingview-widget-container" ref={container} style={{ margin: '0 auto' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noreferrer" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
    </>
  );
}

export default memo(TradingViewWidget);
