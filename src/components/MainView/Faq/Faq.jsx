import React from 'react';
import s from './FaqContent/FaqContent.module.css';
import FaqContent from "./FaqContent/FaqContent";
import FaqContentWithImg from "./FaqContent/FaqContentWithImg";
import sun from '../../../assets/icons/darkMode/sun.svg'
import moon from '../../../assets/icons/darkMode/moon.svg'

const Faq = () => {
    return (
        <div className={s.faqWrapper}>
            <FaqContent
                question='За сколько нужно оформить заказ?'
                answer='Заказ нужно оформить за 24 часа'
            />
            <FaqContent
                question='Сколько стоит доставка?'
                answer='Зависит от километража.
                                до 10км=200р
                                до 20км=300р'
            />
            <FaqContentWithImg
                question='Change the theme?'
                answer1='For change theme u should click on sun '
                imgSrc1={sun}
                answer2=' or moon '
                imgSrc2={moon}
                answer3=' icon on sidebar'
                imgAlt='icon'
            />
        </div>
    )
}

export default Faq;