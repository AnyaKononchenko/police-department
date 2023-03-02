import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const { cases, detectives } = useSelector((state) => state.departmentR);
    return (
        <section className="department">
            <h1>This is our department</h1>
            <p>Currently we have: {detectives.length} detectives</p>
            <p>Amount of cases: {cases.length} cases</p>
            <p>Solved cases: {cases.filter((item) => item.status === 'closed').length}</p>
            <p>Opened cases: {cases.filter((item) => item.status === 'opened').length}</p>
            <p>Newly registered cases: {cases.filter((item) => item.status === 'registered').length}</p>
        </section>
    )
}

export default Home