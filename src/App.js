import React from 'react';
import AppRouter from './pages/Route/routes';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css'

function App() {
    return (
        <>
            <div className="App">
                    <AppRouter />
            </div>
        </>
    );
}

export default App;
