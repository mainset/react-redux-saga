import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import reduxStore from "./redux-store";

const MAIN = (
  <Provider store={reduxStore}>
    <div>Hello world</div>
  </Provider>
);

ReactDOM.render(MAIN, document.getElementById('react-ethereal-boilerplate'));
