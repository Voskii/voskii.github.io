import React, { useState } from "react";


export default function ScreenShot(){
    const [src, setSrc] = useState("");

    const handleChange = (event) => {
        console.log(event.target.files[0])
        try {
        // Get the uploaded file
        const file = event.target.files[0];

        // Transform file into blob URL
        setSrc(URL.createObjectURL(file));
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <>
        <video src={src} controls width="100%">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <input type="file" onChange={handleChange} />
        </>
    );
};