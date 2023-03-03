import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { updateCase } from '../features/recordsSlice';

const CaseDetails = () => {
    const { detectives } = useSelector(state => state.detectives);

    const { state } = useLocation();
    const [currentCase, setCurrentCase] = useState(state);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateCase({
            ...currentCase,
            assigned:  detectives.find((detective) => detective.name === currentCase.assigned).id
        }
        ));
    }

    const handleChange = (event) => {
        setCurrentCase(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const availableDetectives = detectives.map((detective, index) => {
        return (<option value={detective.id} key={index}>{detective.name}</option>)
    })

    return (
        <section className='case-details'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Specify a name for a new case:</label>
                    <input type="text" name="name" id="name" value={currentCase.name} required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label htmlFor="details">Provide additional information:</label>
                    <textarea name="details" id="details" value={currentCase.details} required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label htmlFor="assigned">Who is going to lead this case?</label>
                    <select name="assigned" id="assigned" value={currentCase.assigned} onChange={handleChange}>
                        {availableDetectives}
                    </select>
                </div>
                <div className="form-row">
                    <label htmlFor="status">Current status:</label>
                    <input type="text" name="status" id="status" value={currentCase.status} required onChange={handleChange} />
                </div>
                <button>Edit</button>
            </form>
        </section>
    )
}

export default CaseDetails