import './App.css';
import MedicalForm from "./MedicalForm";
import SummaryPage from "./SummaryPage";
import { useState } from "react";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import {Route, Routes, useNavigate} from "react-router-dom";

function App() {
    const [formData, setFormData] = useState(null);
    const [bills, setBills] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [loginUI, setLoginUI] = useState(null);
    const history = useNavigate();

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    const handleSubmit = () => {
        setBills((prevBills) => [...prevBills, formData]);
        setFormData(null);
        history('/')
    };

    const handleAddBill = () => {
        setFormData({});
        history('/upload');
    };

    const handleSignup = (email, password) => {
        // Check if the user with the provided email already exists
        const existingUser = users.find((user) => user.email === email);

        if (existingUser) {
            console.log('User already exists');
            return;
        }

        // Create a new user object
        const newUser = {
            email,
            password,
        };

        // Save the new user to the users array
        setUsers([...users, newUser]);
        alert("Sign Up Successful Please LoginPage");
        setLoginUI(true);
        console.log('User signed up successfully');
    };

    const handleLogin = (email, password) => {
        // Find the user with the provided email and password
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            console.log('User logged in successfully');
            setUser(user);
        } else {
            console.log('Invalid email or password');
        }
    };

    const handleUserLogin = () => {
        setLoginUI(true);
    };

    return (
        <div>
            <div className="App-header"> Truffle Health Medical Portal</div>
            <div className="App-body">
                {/* Home Page */}
                <Routes>
                        <Route exact path="/" element={ (
                            user ? <HomePage bills={bills} onAddBill={handleAddBill} /> : (
                                loginUI ? (
                                    <LoginPage onLogin={handleLogin} />
                                ) : (
                                    <>
                                        <SignupPage onSignup={handleSignup} />
                                        <button onClick={handleUserLogin} style={{ background: "transparent", border: '0px', color: "#4185F6", fontFamily: "sans-serif", fontWeight: "bold", cursor: "pointer" }}>Already have an account?</button>
                                    </>
                                )
                            )
                        )} />
                        {/* Summary Page */}
                        <Route path="/summary" element={ (
                            user && formData && formData.patientName ? (
                                <SummaryPage data={formData} onEdit={() => {
                                        history('/upload');
                                }} onSubmit={handleSubmit} />
                            ) : (
                                <HomePage bills={bills} onAddBill={handleAddBill} />
                            )
                        )} />
                        {/* Upload Page */}
                        <Route path="/upload" element={ (
                            user && formData ? (
                                <MedicalForm initialData={formData} onSubmit={handleFormSubmit} />
                            ) : (
                                <HomePage bills={bills} onAddBill={handleAddBill} />
                            )
                        )} />
                    </Routes>
            </div>
        </div>
    );
}

export default App;
