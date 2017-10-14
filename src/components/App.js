import React from 'react';
import Check from './Check';
import Buttons from './Buttons';
import Select from './Select';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Check/>
                <Select/>
                <Buttons/>
            </div>
        );
    }

}

export default App;

