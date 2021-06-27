import React from 'react';
import { Provider } from 'react-redux';

import store from "./services/store";
import history from "./services/history";
import { AppContainer } from "./AppContainer";
import "./shared/styles/main.scss";

import {ThemeProvider} from "@material-ui/core/styles";
import { theme } from './thema';
import { CssBaseline } from '@material-ui/core';
import {QueryClientProvider} from "react-query";
import queryClient from './services/queryClient';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <CssBaseline/> 
      <AppContainer
        history={history}
      />
      </QueryClientProvider>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
