import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContext>
        <ChatProvider>
            <App />
        </ChatProvider>
    </AuthContext>
);

