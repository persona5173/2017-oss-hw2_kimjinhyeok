import React from 'react';
import { connect } from 'react-redux';
import { confirm } from '../actions';

class Buttons extends React.Component {
    render() {
        return (
                <button type="button"
                        onClick={ this.props.onConfirm }>
                    확인
                </button>

        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onConfirm: () => dispatch(confirm())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
