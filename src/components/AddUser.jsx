import { useState } from "react";


const AddUser = ({ data }) => {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        data(name)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="formulaire">
                    <form 
                        action="#" 
                        className="form-group" 
                    >
                        <input 
                            type="text" 
                            placeholder="Search a GitHub User"
                            className="form-control w-50"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button 
                            className="btn btn-outline-success"
                            onClick={handleSubmit}
                        >
                            add user
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser
