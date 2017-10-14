import React from 'react';
import { connect } from 'react-redux';

class Check extends React.Component {
    render() {
        return (
            <div>
                <h1>1~100까지의 수 중 찾아보세요.</h1>
                <h2>{ this.props.confirm }</h2>
                <h3>시도 횟수 : { this.props.count_value }</h3>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        confirm: state.counter.confirm,
        count_value: state.counter.count_value
    };
}

Check = connect(mapStateToProps)(Check);

export default Check;
