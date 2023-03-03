import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateDetective } from '../features/detectivesSlice';

const DetectiveDetails = () => {
    const { state } = useLocation();
    const [detective, setDetective] = useState(state);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateDetective(detective));
    }

    const handleChange = (event) => {
        setDetective(prevState => ({...prevState, [event.target.name]: event.target.value}));
    }

    return (
        <section>
            <h2>Detective's Personal Info</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="id">ID:</label>
                    <input type="text" name='id' value={detective.id} disabled />
                </div>
                <div className="form-row">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name='name' value={detective.name} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <p>Some other information</p>
                </div>
                <button type='submit'>Edit Profile</button>
            </form>
        </section>
    )
}

export default DetectiveDetails