import React, { useState } from "react";
import "./generalInfo.css";

function GeneralInfo() {
    const [editMode, setEditMode] = useState(true);
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Ensure all fields are filled before switching to view mode
        if (info.name && info.email && info.phone) {
            setEditMode(false);
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="general-info-container">
            {!editMode && (
                <div className="cv-preview">
                    <h2>{info.name}</h2>
                    <p className="contact-info">
                        {info.email} <span className="divider">|</span> {info.phone}
                    </p>
                </div>
            )}
            <div className="input-section">
    {editMode ? (
        <form>
            <h3>Contact Information</h3>
            <hr />
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={info.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
            </div>

            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
    )}
</div>

        </div>
    );
}

export default GeneralInfo;
