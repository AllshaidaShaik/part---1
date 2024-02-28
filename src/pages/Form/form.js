import React, { useState, useMemo } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import PhoneInput, { isValidPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Form = () => {

    const options = useMemo(() => countryList().getData(), [])
    const stateOptions = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'Alaska', label: 'Alaska' },
        { value: 'American Samoa', label: 'American Samoa' },
        { value: 'Arizona', label: 'Arizona' },
        { value: 'Arkansas', label: 'Arkansas' },
        { value: 'Armed Forces Americas', label: 'Armed Forces Americas' },
        { value: 'Armed Forces Europe', label: 'Armed Forces Europe' },
        { value: 'Armed Forces Pacific', label: 'Armed Forces Pacific' },
        { value: 'California', label: 'California' },
        { value: 'Colorado', label: 'Colorado' },
        { value: 'Connecticut', label: 'Connecticut' },
        { value: 'Delaware', label: 'Delaware' },
        { value: 'District of Columbia', label: 'District of Columbia' },
        { value: 'Federated States of Micronesia', label: 'Federated States of Micronesia' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Guam', label: 'Guam' },
        { value: 'Hawaii', label: 'Hawaii' },
        { value: 'Idaho', label: 'Idaho' },
        { value: 'Illinois', label: 'Illinois' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Iowa', label: 'Iowa' },
        { value: 'Kansas', label: 'Kansas' },
        { value: 'Kentucky', label: 'Kentucky' },
        { value: 'Louisiana', label: 'Louisiana' },
        { value: 'Maine', label: 'Maine' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Maryland', label: 'Maryland' },
        { value: 'Massachusetts', label: 'Massachusetts' },
        { value: 'Michigan', label: 'Michigan' },
        { value: 'Minnesota', label: 'Minnesota' },
        { value: 'Mississippi', label: 'Mississippi' },
        { value: 'Missouri', label: 'Missouri' },
        { value: 'Montana', label: 'Montana' },
        { value: 'Nebraska', label: 'Nebraska' },
        { value: 'Nevada', label: 'Nevada' },
        { value: 'New Hampshire', label: 'New Hampshire' },
        { value: 'New Jersey', label: 'New Jersey' },
        { value: 'New Mexico', label: 'New Mexico' },
        { value: 'New York', label: 'New York' },
        { value: 'North Carolina', label: 'North Carolina' },
        { value: 'North Dakota', label: 'North Dakota' },
        { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
        { value: 'Ohio', label: 'Ohio' },
        { value: 'Oklahoma', label: 'Oklahoma' },
        { value: 'Oregon', label: 'Oregon' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Pennsylvania', label: 'Pennsylvania' },
        { value: 'Puerto Rico', label: 'Puerto Rico' },
        { value: 'Rhode Island', label: 'Rhode Island' },
        { value: 'South Carolina', label: 'South Carolina' },
        { value: 'South Dakota', label: 'South Dakota' },
        { value: 'Tennessee', label: 'Tennessee' },
        { value: 'Texas', label: 'Texas' },
        { value: 'Utah', label: 'Utah' },
        { value: 'Vermont', label: 'Vermont' },
        { value: 'Virgin Islands', label: 'Virgin Islands' },
        { value: 'Virginia', label: 'Virginia' },
        { value: 'Washington', label: 'Washington' },
        { value: 'West Virginia', label: 'West Virginia' },
        { value: 'Wisconsin', label: 'Wisconsin' },
        { value: 'Wyoming', label: 'Wyoming' }
    ];

    const heightOptions = [
        { value: 'Inches', label: 'Inches' },
        { value: 'Feets', label: 'Feets' }
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        address: '',
        state: '',
        city: '',
        zipCode: '',
        email: '',
        phoneNumber: '',
        height: '',
        weight: ''
    });
    const [errorsFirstName, setErrorsFirstName] = useState("");
    const [errorsLastName, setErrorsLastName] = useState("");
    const [errorsMiddleName, setErrorsMiddleName] = useState("");
    const [errorsAddress, setErrorsAddress] = useState("");
    const [errorsCountry, setErrorsCountry] = useState("");
    const [errorsState, setErrorsState] = useState("");
    const [errorsCity, setErrorsCity] = useState("");
    const [errorsZipCode, setErrorsZipCode] = useState("");
    const [errorsEmail, setErrorsEmail] = useState("");
    const [errorsPhoneNumber, setErrorsPhoneNumber] = useState("");
    const [errorsHeight, setErrorsHeight] = useState("");
    const [errorsWeight, setErrorsWeight] = useState("");
    const [errorsFt, setErrorsFt] = useState("");
    const [displayedData, setDisplayedData] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'zipCode' && !/^\d*$/.test(value)) {
            return;
        }
        else if (name === 'height' && !/^\d*\.?\d*$/.test(value)) {
            return;
        }
        else if (name === 'weight' && !/^\d*$/.test(value)) {
            return;
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [value, setValue] = useState('')
    const changeHandler = value => {
        setValue(value.label)
    }

    const [valueState, setValueState] = useState('')
    const changeHandlerState = value => {
        setValueState(value.label)
    }

    const [valueHeight, setValueHeight] = useState('')
    console.log(valueHeight, "value");
    const changeHandlerHeight = value => {
        setValueHeight(value.label)
    }

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChangePhoneNumber = (value) => {
        setPhoneNumber(value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorsFirstName("");
        setErrorsMiddleName("");
        setErrorsLastName("");
        setErrorsAddress("");
        setErrorsCountry("");
        setErrorsState("");
        setErrorsCity("");
        setErrorsZipCode("");
        setErrorsEmail("");
        setErrorsPhoneNumber("");
        setErrorsHeight("");
        setErrorsFt("");
        setErrorsWeight("");

        if (!formData.firstName) {
            setErrorsFirstName('First Name is required');
            return;
        }
        if (!formData.middleName) {
            setErrorsMiddleName('Middle Name is required');
            return;
        }
        if (!formData.lastName) {
            setErrorsLastName('Last Name is required');
            return;
        }
        if (!formData.address) {
            setErrorsAddress('Address is required');
            return;
        }
        if (!value) {
            setErrorsCountry('Country is required');
            return;
        }
        if (value == "United States") {
            if (!valueState) {
                setErrorsState('State is required');
                return;
            }
        } else {
            if (!formData.state) {
                setErrorsState('State is required');
                return;
            }
        }
        if (!formData.city) {
            setErrorsCity('City is required');
            return;
        }
        if (!formData.zipCode) {
            setErrorsZipCode('Zip Code is required');
            return;
        }
        if (!formData.email) {
            setErrorsEmail('Email is required');
            return;
        }
        if (formData.email && !new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(formData.email)) {
            setErrorsEmail("Email Must match the format")
            return;
        }
        if (!phoneNumber) {
            setErrorsPhoneNumber('PhoneNumber is required');
            return;
        }
        if (!isValidPhoneNumber(phoneNumber)) {
            setErrorsPhoneNumber('');
            return;
        }
        if (!formData.height) {
            setErrorsHeight('Height is required');
            return;
        }
        if (!valueHeight) {
            setErrorsFt('Feeta OR Inches is required');
            return;
        }
        if (!formData.weight) {
            setErrorsWeight('Weight is required');
            return;
        }

        const formattedData = {
            FirstName: formData.firstName,
            LastName: formData.lastName,
            MiddleName: formData.middleName,
            Address: `${formData.address}, ${value}, ${value == "United States" ? valueState : formData.state}, ${formData.city}, ${formData.zipCode}`,
            Email: formData.email,
            PhoneNumber: phoneNumber,
            Height: `${formData.height} (${valueHeight})`,
            Weight: formData.weight + " " +  "(kgs)"
        };
        setDisplayedData(formattedData);
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center">Add Form</h1>
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                <form>
                    <div className="row">
                        <div className=" col-lg-4 mb-3">
                            <label for="exampleInputEmail1" className="form-label"><span className="mandatry">* </span> First Name</label>
                            <input type="text" name='firstName' className="form-control " value={formData.firstName} onChange={handleChange} />
                            <p className='form_validating'>{errorsFirstName}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Middle Name</label>
                            <input type="text" name='middleName' className="form-control " value={formData.middleName} onChange={handleChange} />
                            <p className='form_validating'>{errorsMiddleName}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Last Name</label>
                            <input type="text" name='lastName' className="form-control " value={formData.lastName} onChange={handleChange} />
                            <p className='form_validating'>{errorsLastName}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Address</label>
                            <input type="text" name='address' className="form-control " value={formData.address} onChange={handleChange} />
                            <p className='form_validating'>{errorsAddress}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Country</label>
                            <Select options={options} value={value.label} onChange={changeHandler} />
                            <p className='form_validating'>{errorsCountry}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> State</label>
                            {value == "United States" ?
                                <Select options={stateOptions} value={valueState.label} onChange={changeHandlerState} /> :
                                <input type="state" name='state' className="form-control" value={formData.state} onChange={handleChange} />}
                            <p className='form_validating'>{errorsState}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> City</label>
                            <input type="text" name='city' className="form-control" value={formData.city} onChange={handleChange} />
                            <p className='form_validating'>{errorsCity}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Zip Code</label>
                            <input type="text" name='zipCode' className="form-control" value={formData.zipCode} onChange={handleChange} />
                            <p className='form_validating'>{errorsZipCode}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Email</label>
                            <input type="text" name='email' className="form-control" value={formData.email} onChange={handleChange} />
                            <p className='form_validating'>{errorsEmail}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Phone Number</label>
                            <PhoneInput
                                id="phoneNumber"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handleChangePhoneNumber}
                                error={phoneNumber ? (isValidPhoneNumber(phoneNumber) ? undefined : 'Invalid phone number') : 'Phone number required'}
                            />
                            {phoneNumber &&
                            <>
                            <div className='mandatry'>
                             {phoneNumber && isValidPhoneNumber(phoneNumber) ? undefined : 'Invalid phone number'}
                             </div>
                             </>}
                            <p className='form_validating'>{errorsPhoneNumber}</p>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Height</label>
                            <input type="text" name='height' className="form-control" value={formData.height} onChange={handleChange} />
                            <p className='form_validating'>{errorsHeight}</p>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> Ft/inches</label>
                            <Select options={heightOptions} value={valueHeight.label} onChange={changeHandlerHeight} />
                            <p className='form_validating'>{errorsFt}</p>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label for="exampleInputPassword1" className="form-label"><span className="mandatry">* </span> weight (kgs)</label>
                            <input type="text" name='weight' className="form-control" value={formData.weight} onChange={handleChange} />
                            <p className='form_validating'>{errorsWeight}</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn save-btn" onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
            {displayedData &&
                <>
                    <h1 className="text-center">Submitted Details</h1>
                    <div className="container shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="mb-3">
                            <p><b>First Name :</b> {displayedData.FirstName}</p>
                            <p><b>Middle Name :</b> {displayedData.MiddleName}</p>
                            <p><b>Last Name :</b> {displayedData.LastName}</p>
                            <p><b>Address :</b> {displayedData.Address}</p>
                            <p><b>Email :</b> {displayedData.Email},<b> Phone Number :</b> {displayedData.PhoneNumber}</p>
                            <p><b>Height : </b> {displayedData.Height},<b> Weight :</b> {displayedData.Weight}</p>
                            <hr />
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default Form;