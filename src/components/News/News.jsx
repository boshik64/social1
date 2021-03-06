import React from "react";
import classes from  './News.module.css';

const News = (props) => {
    return (
        <div className={classes.news}>
            <div class="article__text"><strong>МОСКВА, 30 июн — РИА Новости, Софья Мельничук.</strong> Заболеваемость в мире снижается, объявили во Всемирной организации здравоохранения. Новость оптимистичная, но опасность не отступает. Пока темпы вакцинации на Западе растут, а страны снимают ограничения, по планете распространяется новый вариант инфекции, куда более агрессивный. И непонятно, справятся ли с ним разработанные препараты.</div>
        </div>
    )
}

export default News;