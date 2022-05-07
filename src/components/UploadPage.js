import { useState } from "react";
import axios from 'axios';
function UploadPage(){

    const [challengesFile, setChallengesFile] = useState(null);
    const [learningsFile, setLearningsFile] = useState(null);

    const fileChange = (e) => {
        if(e.target.id === "file1"){
            setChallengesFile(e.target.files[0]);
        }
        if(e.target.id === "file2"){
            setLearningsFile(e.target.files[0]);
        }
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log("Submitting");
        const formData = new FormData();
        if(challengesFile === null || learningsFile === null) return;
        formData.append("file1", challengesFile);
        formData.append("file2", learningsFile);
        const res = await axios.post("http://localhost:5000/", formData);
        return await res;
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e).then(res => console.log(res))}>
                <label> Challenges :  </label> 
                <input type="file" name="file1" id="file1" onChange = {(e)=>fileChange(e)} />
                <label> Learning Outcomes :  </label> 
                <input type="file" name="file2" id="file2" onChange = {(e)=>fileChange(e)} />
                <input type="submit"/>
            </form>
        </div>
    )
}
export default UploadPage;