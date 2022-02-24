import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles/styles.scss";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient({
  staleTime: 60 * 1000 * 10,
  refetchOnMount: false,
  refetchOnWindowFocus: false
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
       <App />
     </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
