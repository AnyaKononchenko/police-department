import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addDetective } from '../features/detectivesSlice';
import { v4 as uuidv4 } from 'uuid';


const NewDetective = () => {
    const dispatch = useDispatch();

    const initialDetective = {
        id: '',
        name: ''
    }

    const [newDetective, setNewDetective] = useState(initialDetective)

    const handleChange = (event) => {
        setNewDetective((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentCase = { ...newDetective, id: uuidv4() }
        dispatch(addDetective(currentCase));
        setNewDetective(initialDetective);
    }

    return (
        <section className='new-detective'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Name of a new detective:</label>
                    <input type="text" name="name" id="name" value={newDetective.name} required onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default NewDetective