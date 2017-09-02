import React from 'react';
import Overview from './Components/Overview/Overview';
import boatData from './data';

const Hej = <div>Hello World</div>;

class App extends React.Component {
    render() {
        return (
            <div>
                <Hej /> This is Former Yugos League!
                <Overview data={boatData}/>
            </div>
        );
    }
}

export default App;