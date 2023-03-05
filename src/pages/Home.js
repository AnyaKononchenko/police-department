import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NOT_ASSIGNED } from '../data/data';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import '../styles/main.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
    const { records } = useSelector((state) => state.records);
    const { detectives } = useSelector((state) => state.detectives);

    const data = {
        labels: [
            'Solved cases',
            'Opened cases',
            'Newly registered cases',
            'Not assigned cases',
        ],
        datasets: [
            {
                label: 'Records',
                data: [
                    records.filter((item) => item.status === 'closed').length,
                    records.filter((item) => item.status === 'opened').length,
                    records.filter((item) => item.status === 'registered').length,
                    records.filter((item) => item.assigned === NOT_ASSIGNED).length,
                ],
                backgroundColor: [
                    'rgba(73, 72, 80, 0.8)',
                    'rgba(151, 136, 151, 0.8)',
                    'rgba(177, 143, 207, 0.8)',
                    'rgba(216, 216, 246, 0.8)',
                ],
                borderColor: [
                    'black',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    color: "white",
                    font: {
                        size: 20,
                        family: "'Labrada', serif",
                    },
                },
            }
        }
    }

    return (
        <section className="department">
            <div className="department__header flex-centered">
                <h1>Private Bureau of Investigation</h1>
            </div>
            <div className="department__body flex-centered">
                <div className="department-stats">
                    <p>Currently we have: {detectives.length - 1} detectives</p>
                    <p>Amount of cases: {records.length}</p>
                </div>
                <div className="department-chart">
                    <Pie className="pie-chart" data={data} options={options}></Pie>
                </div>
            </div>
        </section>
    )
}

export default Home