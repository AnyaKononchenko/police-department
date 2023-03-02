import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCase } from '../features/departmentSlice';
import { v4 as uuidv4 } from 'uuid';

const NewCase = () => {
    const { detectives } = useSelector(state => state.departmentR);
    const dispatch = useDispatch();

    const initialCaseState = {
        id: '',
        name: '',
        status: 'registered',
        details: '',
        assigned: 'no one'
    }

    const [newCase, setNewCase] = useState(initialCaseState)

    const handleChange = (event) => {
        setNewCase((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentCase = {...newCase, id: uuidv4()}
        dispatch(createCase(currentCase));
        setNewCase(initialCaseState);
    }

    const availableDetectives = detectives.map((detective, index) => {
        return (<option value={detective.id} key={index}>{detective.name}</option>)
    })

    return (
        <section className='new-case'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Specify a name for a new case:</label>
                    <input type="text" name="name" id="name" value={newCase.name} required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label htmlFor="details">Provide additional information:</label>
                    <textarea name="details" id="details" value={newCase.details} required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label htmlFor="assigned">Who is going to lead this case?</label>
                    <select name="assigned" id="assigned" value={newCase.assigned} onChange={handleChange}>
                        {availableDetectives}
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default NewCase;