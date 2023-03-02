import React from 'react';
import { useSelector } from 'react-redux';
import Case from './Case';

const FilteredCases = ({ active }) => {
    const {cases, detectives } = useSelector((state) => state.departmentR);
    const filtered = active.toLowerCase() === 'all' ? cases : cases.filter((item) => item.status === active.toLowerCase());
    return (
        <>
            {filtered.map((item) => {
                const detective = detectives.find(detective => detective.id === item.assigned);
                return <Case key={item.id} case={{ ...item, assigned: detective.name }} />
            })}
        </>
    )
}

export default FilteredCases;