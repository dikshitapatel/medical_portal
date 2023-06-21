import React, { useState } from 'react';
import './HomePage.css';

function HomePage({ bills, onAddBill, onEditBill }) {
    return (
        <div className="homepage-container">
            <h2>Welcome to Truffle Health Medical Application Portal to keep track of your health bills and records!</h2>
            <h3>Uploaded Bills</h3>
            {bills.length === 0 ? (
                <p>No bills uploaded yet.</p>
            ) : (
                <div className="bill-list">
                <ol>
                    {bills.map((bill, index) => (
                        <li key={index}>
                            <p>Patient Name: {bill.patientName}</p>
                            <p>Address: {bill.address}</p>
                            <p>Hospital Name: {bill.hospitalName}</p>
                            <p>Date of Service: {bill.dateOfService}</p>
                            <p>Bill Amount: {bill.billAmount}</p>
                            {bill.billPicture && (
                                <div>
                                    <p>Bill Picture:</p>
                                    <img src={URL.createObjectURL(bill.billPicture)} alt="Bill" />
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
                </div>
            )}
            <button className="add-bill-button" onClick={onAddBill}>Add New Bill</button>
        </div>
    );
}
export default HomePage;