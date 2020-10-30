import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import './App.css';
import Header from './components/Header';
import { ReportProvider } from './providers/ReportProvider';
import { StructureProvider } from './providers/StructureProvider';
import { SampleProvider } from './providers/SampleProvider';
import { StratigraphyProvider } from './providers/StratigraphyProvider';
import { LayerProvider } from './providers/LayerProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <ReportProvider>
          <StructureProvider>
            <SampleProvider>
              <StratigraphyProvider>
                <LayerProvider>
                  <Header />
                  <ApplicationViews />
                </LayerProvider>
              </StratigraphyProvider>
            </SampleProvider>
          </StructureProvider>
        </ReportProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
