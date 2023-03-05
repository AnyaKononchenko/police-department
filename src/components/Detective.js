import React from 'react'
import { Link } from 'react-router-dom';


const Detective = (props) => {
    const { detective, cases } = props;

    return (
        <article className='detective'>
            <div className="detective__header">
                <img src="https://cdn-icons-png.flaticon.com/512/1022/1022381.png" alt="Detective Profile" />
                <h3>{detective.name}</h3>
            </div>
            <div className="detective__body">
                <p>Amount of cases: {cases.length}</p>
                <p>Age: </p>
                <p>Biography: </p>
            </div>
            <div className="detective__footer">
                <Link to='/detective' state={detective}>
                    <button>Reveal more details</button>
                </Link>
            </div>
        </article>
    )
}

export default Detective