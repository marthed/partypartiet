import React from 'react';
import './overview.css';

function Overview( props ) {
    const data = props.data;
    console.log(data);
        return <div>
            <h1> Overview </h1>
            <div className="data-flex-container">
            <ul>
                { data.map((d, idx) => <div className="data-flex-item"><li key={idx}>
                    {d.date.toDateString()} {d.bridge} {d.boats}
                    </li> </div>)}
            </ul>
            </div>
        </div>;
}

export default Overview;