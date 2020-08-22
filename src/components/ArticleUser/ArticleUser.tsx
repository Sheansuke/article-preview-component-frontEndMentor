import React from "react";

// STYLE
import style from "./ArticleUser.module.scss";

// COMPONENTS
import Share from "../Share/Share";

interface Props {
  userName?: string;
  date?: string;
  image?: string;
}

const App: React.FC<Props> = ({ userName, date, image }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="userImage" />
      <div className={style.div__info}>
        <h5>Michelle Appleton</h5>
        <p>28 Jun 2020</p>
      </div>

      <Share />
    </div>
  );
};

export default React.memo(App);
