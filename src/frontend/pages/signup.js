import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [creds, setcreds] = useState({ name: "", email: "hahahah", password: "", geoLocation: "" })
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: creds.name, password: creds.password, email: creds.email, location: creds.geoLocation })
        })
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Creds")
        }
    }
    const onChange = (event) => {
        setcreds({ ...creds, [event.target.name]: event.target.value })
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3" >
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={creds.name} id="exampleInputPassword1" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={creds.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={creds.password} onChange={onChange} id="exampleInputPassword2" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword3" className="form-label">Location</label>
                    <input type="text" className="form-control" name='geoLocation' value={creds.geoLocation} onChange={onChange} id="exampleInputPassword3" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/login" className='m-3 btn btn-primary'> Already a User?</Link>
            </form>
        </div>
    )
}
