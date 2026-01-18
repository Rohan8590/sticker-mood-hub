import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ReactGA from 'react-ga4';

createRoot(document.getElementById("root")!).render(<App />);
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
