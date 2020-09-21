import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: --sans-serif;
          }

          h2 {
            color: #25282d;
            display: block;
            text-align: center;
            font-size: 28px;
          }

          p {
            /* margin: 0px 99px 24px; */
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-size: 16px;
          }
        `}
      />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
