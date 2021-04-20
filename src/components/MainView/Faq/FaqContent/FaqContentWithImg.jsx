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
        let answer1;
        let answer2;
        let answer3;
        let imgPath1;
        let imgPath2;
        if (this.state.isOpened) {
            answer1 = this.props.answer1;
            answer2 = this.props.answer2;
            answer3 = this.props.answer3;
            imgPath1=this.props.imgSrc1;
            imgPath2=this.props.imgSrc2;
        }

        return (
            <div onClick={this.toggleState.bind(this)} className={s.question}>
                {this.props.question}
                <div className={s.answer}>
                    {answer1}
                    <img src={imgPath1} />
                    {answer2}
                    <img src={imgPath2} />
                    {answer3}
                </div>
            </div>
        )
    }
}

export default FaqContent;