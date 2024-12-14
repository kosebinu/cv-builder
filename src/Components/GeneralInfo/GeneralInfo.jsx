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
                        <input
                            type="text"
                            name="name"
                            value={info.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={info.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={info.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
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
