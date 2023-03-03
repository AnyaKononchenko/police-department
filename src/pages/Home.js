import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const { records } = useSelector((state) => state.records);
    const { detectives } = useSelector((state) => state.detectives);
    return (
        <section className="department">
            <h1>This is our department</h1>
            <p>Currently we have: {detectives.length} detectives</p>
            <p>Amount of cases: {records.length} cases</p>
            <p>Solved cases: {records.filter((item) => item.status === 'closed').length}</p>
            <p>Opened cases: {records.filter((item) => item.status === 'opened').length}</p>
            <p>Newly registered cases: {records.filter((item) => item.status === 'registered').length}</p>

            
            <Link to='/add-detective'>Want to join our team?</Link>
        </section>
    )
}

export default Home