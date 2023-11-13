import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const DateTestComp = () => {
    const [date, setDate] = useState({
        image: "",
        date: ""
    });

    const getDate = (event) => {
        event.preventDefault();
        console.log(date);
        axios.post("http://localhost:8888/test", date)
            .then(() => {
                window.alert("Date Added Successfully");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const inputHandler = (event) => {
        setDate({ ...date, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <label>Date:</label>
            <input
                type="date"
                name="date"
                value={date.date}
                onChange={inputHandler}
            />
            <br />
            <label>Image:</label>
            <input
                type="text"
                name="image"
                value={date.image}
                onChange={inputHandler}
            />
            <br />
            <button onClick={getDate}>Save Date</button>
        </div>
    );
}

export default DateTestComp;
