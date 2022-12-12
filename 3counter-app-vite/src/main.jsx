import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./counterApp";
// import { Example } from "./example";
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Example 
            name='Luisa'
            userName={123}
            valor={3}
        />, */}
        <CounterApp
            value = {0}
        />
    
    </React.StrictMode>
)