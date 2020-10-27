import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
//import { QuoteProvider } from "./providers/QuoteProvider";
//import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import logo from './logo.svg';
import './App.css';
//import { Router } from 'react-router-dom';
//import { UserProfileProvider } from './providers/UserProfileProvider';
//import ApplicationViews from './components/ApplicationViews';

function App() {
  return (
    // <Router>
    //   <UserProfileProvider>
    //     <QuoteProvider>
    //       <Header />
    //       <ApplicationViews />
    //     </QuoteProvider>
    //   </UserProfileProvider>
    // </Router>
    <Router>
      <UserProfileProvider>
        <ApplicationViews />
      </UserProfileProvider>
    </Router>
  );
}

export default App;
