import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        setResults(response.data[0]);
    }
function handlePexels(response){
   setPhotos(response.data.photos);
}
    

     function search(event) {
          event.preventDefault();
          let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
          axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001eb92792241874864803dfa5831472961";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then
    (handlePexels);
}


function handleKeywordChange(event) {
    setKeyword(event.target.value);
}
    return (
        <div>
        <div className="structure">
          <p className="subHeader">look me up!</p>
          <form onSubmit={search}>
               <input type="search" 
               placeholder="e.g. sunrise"
               autoFocus={true}
               onChange={handleKeywordChange}
               />
                 </form>
        </div>
        <div className="dictionary">
           <Results results={results} />
           <Photos  photos={photos} />
           </div>
    </div>
                 
    );
}