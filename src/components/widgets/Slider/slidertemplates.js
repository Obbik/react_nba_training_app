import React from "react";
import Slider from "react-slick";

import style from "./slider.css";
import { Link } from "react-router-dom";

const Slidertemplates = (props) => {
  let template = null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    SlideToScroll: 1,
  };

  switch (props.type) {
    case "bad":
      template = props.news.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div
                className={style.featured_image}
                style={{ background: `url(../images/articles/${item.image})` }}
              ></div>
              <Link to={`/articles/${item.id}`}>
                <div className={style.featued_caption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slider {...settings}>{template}</Slider>;
};

export default Slidertemplates;
