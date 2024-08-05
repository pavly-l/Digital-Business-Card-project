import React from "react"

export default function Info() {
    return (
        <div className="info">
        <img src="../AI-Profile-Picture.jpg"></img>
        <h1>Laura Smith</h1>
        <h3>Frontend Developer</h3>
        <h4>laurasmith.website</h4>
        <div className="btn-container">
        <button className="btn"><i className="fa fa-envelope"></i> Email</button>
        <button className="btn-linkedin"><i className="fa fa-linkedin"></i> LinkedIn</button>
        </div>
        </div>
    )
}