import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const { useState } = React;
  // STEP 1：取出 useState 這個方法
const SpeedConverter = () => {
  // STEP 2: 定義 state，取得預設值為 0 的 inputValue 和修改該狀態的 setInputValue 方法
  const [inputValue, setInputValue] = useState(0);
  
  // STEP 3: 定義事件處理器
  const handleInputChange = (event) => {
    
    // STEP 3-1: 取出使用者輸入的值
    const value = event.target.value;
    
    // STEP 3-2: 將這個值設定到 state 中
    setInputValue(value);
   
  };

  const UnitControl = () => (
    <div className="unit-control">
      <div className="unit">Mbps</div>
      <span className="exchange-icon fa-fw fa-stack">
        <i className="far fa-circle fa-stack-2x" />
        <i className="fas fa-exchange-alt fa-stack-1x" />
      </span>
      <div className="unit">MB/s</div>
    </div>
    
  );

  
  const CardFooter = (props) => {

    const { inputValue } = props;

    // let apple = props;
    // let inputValue = apple.inputValue;

    let criteria;

    if (!inputValue) {
      criteria = {
        title: '---',
        backgroundColor: '#d3d8e2',
      };
    } else if (inputValue < 15) {
      criteria = {
        title: 'SLOW',
        backgroundColor: '#ee362d',
      };
    } else if (inputValue < 40) {
      criteria = {
        title: 'GOOD',
        backgroundColor: '#1b82f1',
      };
    } else if (inputValue >= 100) {
      criteria = {
        title: 'FAST',
        backgroundColor: '#13d569',
      };
    }
    return (
  <div className="card-footer" style={{backgroundColor: criteria.backgroundColor,}}>
    {criteria.title}
  </div>
);
  };
  
  return (
    <div className="container">
      <div className="card-header">網速單位轉換器</div>
      <div className="card-body">
        <UnitControl/>
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">轉換前</div>
            <input 
            type="number" 
            onChange={handleInputChange}
            value={inputValue}
            className="input-number" 
            min="0" />
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
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SpeedConverter/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
