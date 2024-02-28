import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react'; 
import Form from '../Form/form'

function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Form/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;