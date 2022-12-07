import "./new.scss"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    return (
        <>
            <div className="newTop">
                <h1 className="newTitle">{title}</h1>
            </div>
            <div className="newBottom">
                <div className="newLeft">
                    <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SnnL8QnWk64-DZPF9swvDa7EYspVMwrHaCjpPb9Z631oQTrw&s"} alt="" className="newImage" />
                </div>
                <div className="newRight">
                    <form>
                        <div className="newFormInput">
                            <label htmlFor="file">Image: <DriveFolderUploadIcon className="newIcon" /></label>
                            <input id="file" type="file" onChange={e => (setFile(e.target.files[0]))} style={{ display: "none" }} accept="image/png, image/gif, image/jpeg" />
                        </div>
                        {inputs.map((input) => (
                            <div className="newFormInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                            </div>
                        ))}
                        <div className="newFormInput">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default New