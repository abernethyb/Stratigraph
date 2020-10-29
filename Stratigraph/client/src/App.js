import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import './App.css';
import Header from './components/Header';
import { ReportProvider } from './providers/ReportProvider';
import { StructureProvider } from './providers/StructureProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ReportProvider>
          <StructureProvider>
            <Header />
            <ApplicationViews />
          </StructureProvider>
        </ReportProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
