import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import AboutProvider from './providers/AboutProvider';
import EventProvider from './providers/EventProvider';
import ProgramProvider from './providers/ProgramProvider';
import InstructorProvider from './providers/InstructorProvider';
import ContactProvider from './providers/ContactProvider';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import WalkinProvider from './providers/WalkinProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <AboutProvider>
      <EventProvider>
        <ProgramProvider>
          <ContactProvider>
            <WalkinProvider>
            <InstructorProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </InstructorProvider>
            </WalkinProvider>
          </ContactProvider>
        </ProgramProvider>
      </EventProvider>
    </AboutProvider>
  </AuthProvider>
  , document.getElementById('Bima'));
