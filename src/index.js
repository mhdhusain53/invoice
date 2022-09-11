import React from "react";
import App from "./Components/App"
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.querySelector("#root");
const root = createRoot(container); 
root.render(<App tab="home" />);
