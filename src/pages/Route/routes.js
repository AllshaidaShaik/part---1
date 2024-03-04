import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react'; 
import Form from '../Form/form'
import SubmittedDetails from "../SubmittedDetails/submittedDetails";

function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Form/>}  />
                    <Route exact path="/submittedDetails" element={<SubmittedDetails/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;