import React,{useState} from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const [creds, setcreds] = useState({email: "", password: ""})
  let navigate=useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: creds.password, email: creds.email })
        })
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Creds")
        }
        if (json.success) {
          navigate("/")
      }
    }
    const onChange = (event) => {
        setcreds({ ...creds, [event.target.name]: event.target.value })
    }
  return (
    <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={creds.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={creds.password} onChange={onChange} id="exampleInputPassword2" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/signup" className='m-3 btn btn-primary'> i am a new User?</Link>
            </form>
        </div>
  )
}
