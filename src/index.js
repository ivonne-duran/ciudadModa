import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LineaRecta from './componentes/LineaRecta/LineaRecta';
import { Container } from 'reactstrap';
import Acelerada from './componentes/Acelerada/Acelerada';
import PorUso from './componentes/PorUso/PorUso';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LineaRecta />
  },
  {
    path: "/lineaRecta",
    element: <LineaRecta />
  },
  {
    path: "/acelerada",
    element: <Acelerada />
  },
  {
    path: "/porUso",
    element: <PorUso />
  }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
