import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import './App.css';
import Header from './components/Header';
import { ReportProvider } from './providers/ReportProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ReportProvider>
          <Header />
          <ApplicationViews />
        </ReportProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
