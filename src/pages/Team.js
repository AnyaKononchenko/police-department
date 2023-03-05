import React from 'react'
import { useSelector } from 'react-redux';
import { Detective } from '../components';
import { useDispatch } from 'react-redux';
import { deleteDetective } from '../features/detectivesSlice';

const Team = () => {
    const { detectives } = useSelector((state) => state.detectives);
    const { records } = useSelector((state) => state.records);
    console.log(records);
    console.log(detectives);
    const dispatch = useDispatch();

    const handleDeleteDetective = (id) => {
        dispatch(deleteDetective(id));
    }

    const detectivesElement = detectives.map((detective, index) => {
        if(index !== 0) {
            const foundCases = records.filter(item => item.assigned === detective.id);
            return <Detective key={detective.id} detective={detective} cases={foundCases} onDelete={handleDeleteDetective} />
        }
    })

    return (
        <section className="team">
            {detectivesElement}
        </section>
    )
}

export default Team;