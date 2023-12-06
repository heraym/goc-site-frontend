import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mundo from './components/Mundo';
import Equipos from './components/Equipos';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

  root.render(
    <StrictMode> <BrowserRouter>
         <Routes>
             <Route path="/" element={<App />} />
             <Route path="mundo" element={<Mundo />} />
	     <Route path="equipos" element={<Equipos />} />
           </Routes>
       </BrowserRouter></StrictMode>

  );

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
