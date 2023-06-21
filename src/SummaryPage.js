import React  from 'react';
import './SummaryPage.css';

{/* Summary Page to show preview of the entered patient details */}

function SummaryPage({ data, onEdit, onSubmit }) {
    return (
        <div className="summary-page">
            <h2>Summary</h2>
            <h3>Verify the below entered details before submitting the form:</h3>
            <p><label>Patient Name:</label> {data.patientName}</p>
            <p><label>Address:</label> {data.address}</p>
            <p><label>Hospital Name:</label> {data.hospitalName}</p>
            <p><label>Date of Service:</label> {data.dateOfService}</p>
            <p><label>Bill Amount:</label> {data.billAmount}</p>
            {data.billPicture && (
                <div>
                    <p><label>Bill Picture:</label></p>
                    <img  style={{width:'50%',height:'50%'}} src={URL.createObjectURL(data.billPicture)} alt="Bill" />
                </div>
            )}
            <div className="buttons-container">
            <button onClick={onEdit}>Edit Information</button>
            <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default SummaryPage;