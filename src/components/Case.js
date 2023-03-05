import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalPolice } from 'react-icons/md';

const Case = (props) => {
    const { id, name, details, status, assigned } = props.case;
    const detective = props.detective;

    return (
        <article className='case'>
            <div id="case-id">{id}</div>
            <div className='case-clip'></div>
            <div className="case__header flex-centered">
                <MdOutlineLocalPolice className='case__icon'></MdOutlineLocalPolice>
                <p>Investigation Department</p>
                <p>Case File</p>
            </div>

            <div className="case__body">
                <p>Name:</p>
                <p className='case-name'>{name}</p>
                <p>Assigned to:</p>
                <Link to='/detective' state={detective}>{assigned}</Link>
            </div>
            <div className='case-status'><p>Current status:</p><p>{status}</p></div>
            <div className="case-details-link">
                <Link to='/edit-case' state={props.case}>To details..</Link>
            </div>
            {/* <div className="case__footer">
                <button>Case was solved</button>
            </div> */}
        </article>
    )
}

export default Case