import React from 'react';
import { Link } from 'react-router-dom';

const Case = (props) => {
    const {id, name, details, status, assigned} = props.case;
    return (
        <article className='case'>
            <div className="case__header">
                <h3 className='case-name'>{name}</h3>
                <p className="case-id">{id}</p>
            </div>
            <div className="case-details">
                <Link to='/edit-case' state={props.case}>To details</Link>
            </div>
            <div className="case__body">
                <p>Assigned to: {assigned}</p>
                <p>Current status: {status}</p>
                <p>Details: {details}</p>
            </div>
            <div className="case__footer">
                <button>Case was solved</button>
            </div>
        </article>
    )
}

export default Case