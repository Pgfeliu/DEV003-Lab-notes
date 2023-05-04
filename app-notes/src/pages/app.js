// import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Notes } from './notes';
import { AuthProvider }from '../context';

function App() {
    return (
        <div className="bg-slate-300 h-screen text-white flex">
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/notes" element={<Notes />} />
            </Routes >
                </AuthProvider>
        </div>
    );
}