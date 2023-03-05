import React from 'react';
import { useSelector } from 'react-redux';
import Case from './Case';

const FilteredCases = ({ active }) => {
    const { records } = useSelector((state) => state.records);
    const { detectives } = useSelector((state) => state.detectives);
    const { discharged } = useSelector((state) => state.discharged);

    const filtered = active.toLowerCase() === 'all' ? records : records.filter((record) => record.status === active.toLowerCase());
    return (
        <>
            {filtered.map((item) => {
                let detective = detectives.find(detective => detective.id === item.assigned);
                if (!detective) {
                    detective = discharged.find(detective => detective.id === item.assigned);
                }
                return <Case key={item.id} case={{ ...item, assigned: detective.name }} detective={detective}/>
            })}
        </>
    )
}

export default FilteredCases;