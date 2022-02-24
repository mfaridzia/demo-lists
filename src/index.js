import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import App from "./App";
import queryObject from "constant/query";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss";

const queryClient = new QueryClient(queryObject);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
       <App />
       <Toaster position="top-right" />
     </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
