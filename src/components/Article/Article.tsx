import React from "react";
// STYLE
import style from "./Article.module.scss";

// COMPONENTS
import ArticleUser from "../ArticleUser/ArticleUser";

// RESOURCES
import imageArticleUser from "../../images/avatar-michelle.jpg";

interface Props {
  title: string;
  paragraph: string;
  image: string;
}

const App: React.FC<Props> = ({ title, paragraph, image }) => {
  return (
    <div className={style.container}>
      <div className={style.div__image}>
        <img src={image} alt="ArticleImage" />
      </div>
      <div className={style.div__info}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <ArticleUser image={imageArticleUser} />
      </div>
    </div>
  );
};

export default React.memo(App);
