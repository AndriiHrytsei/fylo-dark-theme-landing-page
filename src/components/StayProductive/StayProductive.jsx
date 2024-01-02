import css from "./StayProductive.module.css";
import StayProductiveImg from "../../images/illustration-stay-productive.png";
import { ReactComponent as ArrowRight } from "../../images/icon-arrow.svg";

const StayProductive = () => (
  <section className={css.stayProductive}>
    <img src={StayProductiveImg} alt="Image" className={css.stayProductiveImg}/>
    <article className={css.stayProductiveText}>
      <h2>Stay productive, wherever you are</h2>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs. 
        <br />
        <br />
        Securely share files and
        folders with friends, family and colleagues for live collaboration. No
        email attachments required.
      </p>
      <span className={css.howFyloWorks}>
        <p>See how Fylo works</p>
        <ArrowRight className={css.arrow}/>
      </span>
    </article>
  </section>
);

export default StayProductive;
