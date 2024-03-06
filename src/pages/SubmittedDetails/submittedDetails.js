import React, { useEffect, useState } from 'react';
import API from '../Services/BaseService'
import { useNavigate } from "react-router-dom";
import Pagination from 'reactjs-hooks-pagination';
import { Modal } from 'react-bootstrap';
import Loading from '../Loading/Loading';

const pageLimit = 5;
const SubmittedDetails = () => {

    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState("");
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageErr, setMessageErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const openPopup = () => {
        setMessage(true);
    }

    const closePopup = () => {
        setMessage(false);
    }


    useEffect(() => {
        formDetails();
    }, [])

    const formDetails = () => {
        API.get('/form/list').then((response) => {
          
            if (response.data.data) {
                setDataSource(response.data?.data);
                setDataSource(response.data?.data)
                setTotalRecords(response.data?.data.length);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else {
                setTimeout(() => {
                    setErrorMessage(response.data?.error);
                    setLoading(false);
                }, 100);
                
            }

        });

    }

    const deleteDetails = (data) => {

        API.delete(`/form/delete-details/${data}`).then((response) => {
            setMessageErr(response.data?.message)
            openPopup();
            formDetails();
        });

    }

    return (
        <div className="container-fluid mt-5">
            <div className='d-flex justify-content-end'>
                <button className='btn submit-btn' onClick={() => navigate('/')}>Add Form</button>
            </div>
            {loading ? <Loading /> :
                <>
                    <h1 className="text-center">Submitted Details</h1>
                    {dataSource.length > 0 ? dataSource.sort((a, b) => b.admin_id - a.admin_id).slice(currentPage == 1 ? 0 : (currentPage - 1) * pageLimit, (currentPage == 1 ? currentPage * pageLimit : currentPage * pageLimit))
                        .map((dataSource) =>
                            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                                <div className='d-flex justify-content-end'>
                                    <button className='btn delete-btn' onClick={() => deleteDetails(dataSource.form_id)}>Delete</button>
                                </div>
                                <div className="mb-3">
                                    <p><b>First Name :</b> {dataSource.first_name}</p>
                                    <p><b>Middle Name :</b> {dataSource.middle_name}</p>
                                    <p><b>Last Name :</b> {dataSource.last_name}</p>
                                    <p><b>Address :</b> {dataSource.address},  {dataSource.country},  {dataSource.state},  {dataSource.city},  {dataSource.zip_code}</p>
                                    <p><b>Email :</b> {dataSource.email}, <b> Phone Number :</b> {dataSource.phone_number}</p>
                                    <p><b>Height : </b> {dataSource.height} {dataSource.height_type},<b> Weight :</b> {dataSource.weight} kgs</p>
                                    <hr />
                                </div>
                            </div>) : <div colSpan="20" className='text-center'  ><p className="mandatry">{errorMessage ? errorMessage : "No Data Found"}</p> </div>}

                    <ul className="pagination">
                        <Pagination className=""
                            totalRecords={totalRecords}
                            pageLimit={pageLimit}
                            pageRangeDisplayed={1}
                            onChangePage={setCurrentPage}
                        />
                    </ul>
                </>}
            <Modal size={"wrapper modal-dialog-centered modal-md"} show={message} onHide={closePopup}>
                <Modal.Body>
                    <div className="alert_box">
                        <div className="icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <header>{messageErr}</header>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn delete-btn" onClick={closePopup} >Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SubmittedDetails;