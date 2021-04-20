import React from 'react';
import s from './FaqContent/FaqContent.module.css';
import FaqContent from "./FaqContent/FaqContent";
import img from '../../../assets/images/mount.jpg'

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
            <FaqContent
                question='Сколько стоит доставка?'
                answer={img}
            />
        </div>
    )
}

export default Faq;