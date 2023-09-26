import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function CombinedForm(props) {
    const [value, setValue] = useState("1");

    const handleClick = (event) => {
        const value = event.target.value;
        if (value == "1"){
            setValue(value);
            props.func("/landarea0.png")
        }
        else if(value == "2"){
            setValue(value);
            props.func("/landarea2.png")
        }
        else if(value == "3"){
            setValue(value);
            props.func("/landarea0.png")
        }
    };
    if (value == '1'){
        return (
        <div>
        <button value="2"
        onClick={handleClick} className="btnstyle" title="To Cut Section From Field">Land Area Form2</button>
        <button value="3"
        onClick={handleClick} className="btnstyle" title="To Calculate Area Of Land">Land Area Form3</button>
        <button value="1"
        onClick={handleClick} className="btnstyle" title="Home">Home</button>
        <Form1 func={props.func} />
        </div>
    );
    }
    else if (value == '2'){
        return (
        <div>
        <button value="1"
        onClick={handleClick} className="btnstyle" title="To Divide In Equal Part">Land Area Form1</button>
        <button value="3"
        onClick={handleClick} className="btnstyle" title="To Calculate Area Of Land">Land Area Form3</button>
        <button value="1"
        onClick={handleClick} className="btnstyle" title="Home">Home</button>
        <Form2 func={props.func} />
        </div>
    );
    }
    else if (value == '3'){
        return (
        <div>
        <button value="1"
        onClick={handleClick} className="btnstyle" title="To Divide In Equal Part">Land Area Form1</button>
        <button value="2"
        onClick={handleClick} className="btnstyle" title="To Calculate Area Of Land">Land Area Form2</button>
        <button value="1"
        onClick={handleClick} className="btnstyle" title="Home">Home</button>
        <Form3 func={props.func} />
        </div>
    );
    }
    }