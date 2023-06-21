import React, { useState } from 'react';
import './MedicalForm.css';
import {useNavigate} from "react-router-dom"; // Import the CSS file

{/* Medical form to input patient details and billing information */}

function MedicalForm({ initialData, onSubmit }) {
    const [formData, setFormData] = useState(initialData || {});
    const history = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            billPicture: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        history('/summary');
    };

    return (
        <div className="form-container">
            <h2>Medical Bill Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Patient Name:</label>
                <input
                    type="text"
                    name="patientName"
                    value={formData.patientName || ''}
                    onChange={handleChange}
                    required
                />
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address || ''}
                    onChange={handleChange}
                    required
                />
                <label>Hospital Name:</label>
                <input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName || ''}
                    onChange={handleChange}
                    required
                />
                <label>Date of Service:</label>
                <input
                    type="date"
                    name="dateOfService"
                    value={formData.dateOfService || ''}
                    onChange={handleChange}
                    required
                />
                <label>Bill Amount:</label>
                <input
                    type="number"
                    name="billAmount"
                    value={formData.billAmount || ''}
                    onChange={handleChange}
                    required
                />
                <label>Bill Picture:</label>
                <input
                    type="file"
                    name="billPicture"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default MedicalForm;


