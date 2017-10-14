import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';
import {setInput} from "../actions/index";

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            init_num: '1'
        }


        this.onChangeNum = this.onChangeNum.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" value={ this.state.init_num } onChange={this.onChangeNum}></input>
            </div>
        );
    }

    onChangeNum(e) {

        if(isNaN(e.target.value))
            return;

        this.setState({ init_num: e.target.value });

        if(e.target.value=='') {
            this.setState({ init_num: '0' });
        }

        this.props.onUpdateNum(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateNum: (value) => dispatch(setInput(value))
    };
}

Select = connect(undefined, mapDispatchToProps)(Select);

export default Select;
