import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteDetective, updateDetective } from '../features/detectivesSlice';
import { addDischarged } from '../features/dischargedSlice';
import { updateAssigned, updateCase } from '../features/recordsSlice';

const DetectiveDetails = () => {
    const { state } = useLocation();
    const { records } = useSelector((state) => state.records);
    const { discharged } = useSelector((state) => state.discharged)

    const [detective, setDetective] = useState(state);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateDetective(detective));
    }

    const handleChange = (event) => {
        setDetective(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const handleDelete = (event, detective) => {
        event.stopPropagation();
        const assignedRecords = records.filter((record) => record.assigned === detective.id);
        console.log('found records: ', assignedRecords);
        assignedRecords.forEach((record) => {
            dispatch(updateAssigned(detective.id))
        });
        console.log('updated records:', records);
        dispatch(addDischarged(detective))
        dispatch(deleteDetective(detective.id));
        navigate('/team');
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
            <button onClick={((event) => handleDelete(event, detective))}>Discharge this detective</button>
        </section>
    )
}

export default DetectiveDetails