import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    
    return (
        <div className="Phonetic">
          /{props.phonetic.text}/
          <br/>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
        </div>
    )
}