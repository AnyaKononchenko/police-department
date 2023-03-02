import React from 'react'
import { useSelector } from 'react-redux';
import { Detective } from '../components';

const Team = () => {
    const { cases, detectives } = useSelector((state) => state.departmentR);

    const detectivesElement = detectives.map((detective) => {
        const foundCases = cases.filter(item => item.assigned === detective.id);
        return <Detective key={detective.id} detective={detective} cases={foundCases} />
    })

    return (
        <section className="team">
            {detectivesElement}
        </section>
    )
}

export default Team