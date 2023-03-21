import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const SpeedConverter = () => {
  return (
    <div className="container">
      <div className="card-header">網速單位轉換器</div>
      <div className="card-body">
        <div className="unit-control">
          <div className="unit">Mbps</div>
          <span className="exchange-icon fa-fw fa-stack">
            <i className="far fa-circle fa-stack-2x" />
            <i className="fas fa-exchange-alt fa-stack-1x" />
          </span>
          <div className="unit">MB/s</div>
        </div>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">轉換前</div>
            <input type="number" className="input-number" min="0" />
          </div>
          <span
            className="angle-icon fa-2x"
            style={{
              marginTop: 30,
            }}
          >
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">轉換後</div>
            <input
              className="input-number text-right"
              type="text"
              value="125"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="card-footer">快速的</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpeedConverter/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
