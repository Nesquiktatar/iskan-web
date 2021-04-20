import React, {Component} from 'react';
import s from './FaqContent.module.css';

class FaqContent extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false}
    }

    toggleState() {
        this.setState({isOpened: !this.state.isOpened})
    }

    render() {
        let answer;
        if (this.state.isOpened) {
            answer = this.props.answer;
        }

        return (
            <div onClick={this.toggleState.bind(this)} className={s.question}>
                {this.props.question}
                <div className={s.answer}>{answer}</div>
            </div>
        )
    }
}

export default FaqContent;