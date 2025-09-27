// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'


//  import { ClerkProvider } from "@clerk/clerk-react";


// import { AppProvider } from './context/AppContext.js'



// // Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key')
// }







// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <BrowserRouter>
//         <AppProvider>
//           <App />
//         </AppProvider>
//       </BrowserRouter>
//     </ClerkProvider>
//   </StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { AppProvider } from "./context/AppContext.jsx";
import App from "./App.jsx";
import "./index.css"; // Tailwind or global styles

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key!");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/* BrowserRouter MUST wrap AppProvider to avoid useLocation errors */}
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
