import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return ( 
        <div className="Results">
            <br/>
            
        <div className="classAndPhonetic">
            <h2>{props.results.word}</h2>
            <hr />
          {props.results.phonetics.map(function(phonetic, index) {
              return (
                  <div key={index}>
                      <Phonetic phonetic={phonetic}/>
                  </div>
              );
          })}
           </div>
            {props.results.meanings.map(function(meaning, index) {
            return (
            <section key={index}> 
            <Meaning meaning={meaning}/>
            </section>
            );
          })}
        </div>
        );
        
 } else {
     return null;
 }
}