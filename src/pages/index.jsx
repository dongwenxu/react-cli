import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.scss';
import Routers from './routes';
import * as serviceWorker from '../serviceWorker';

function renderReactApp(){
  ReactDom.render(
    <Provider store={store}> 
    <Routers/> 
    </Provider>,
    document.getElementById('root')
  );
}
renderReactApp();

serviceWorker.unregister();
