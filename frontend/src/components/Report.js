import React, { useState } from "react";
import { Chrono } from "react-chrono";
import '../style/report.css';

function Report() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const reportId = localStorage.getItem('reportId')
    console.log(reportId);


    const items = [{
        title: "10/9/2022",
        cardTitle: "Project Status",
        cardSubtitle: "Task Added",
        cardDetailedText: ""
    },
    {
        title: "11/9/2022",
        cardTitle: "Project Status",
        cardSubtitle: "Task Status: Not Completed",
        cardDetailedText: ""
    },
    {
        title: "12/9/2022",
        cardTitle: "Project Status",
        cardSubtitle: "Task Status: Not Completed",
        cardDetailedText: ""
    },
    ];
    return (
        <div className='background'>
            <h2><span className="heading">PROJECT REPORT:</span><span className="heading-name">Project1</span></h2>
            <div className="m-1">
                <span className="fs-4 text-black">Start Date: </span><span><input className="w-25" type='date' /></span>&nbsp;  &nbsp;
                <span className="fs-4">End Date: </span><span><input className="w-25" type='date' /></span>
            </div>
            <div style={{ width: '100%', height: '100%', color: 'red' }}>
                <Chrono items={items}
                    theme={{
                        height: '100px',
                        primary: 'blue',
                        secondary: 'wheat',
                        titleColor: 'blue',
                        titleColorActive: 'green',
                    }}
                    mode="VERTICAL" />
            </div>
        </div>
    )
}

export default Report