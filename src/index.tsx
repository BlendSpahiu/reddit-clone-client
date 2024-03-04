import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/AuthContext";
import { ToastrProvider } from "./context/ToastrContext";
import { client } from "./graphql/client/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <ToastrProvider>
            <App />
          </ToastrProvider>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
