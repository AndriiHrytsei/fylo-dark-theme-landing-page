import hero from "../../images/illustration-intro.png";
import curv from "../../images/bg-curvy-mobile.svg";
import css from "./Hero.module.css"

const Hero = () => (
  <section className={css.hero}>
    <img src={hero} alt="intro image" className={css.heroBgImg} />
    {/* <Curv className={css.curv}/> */}
    <img src={curv} alt="A beautiful curv" className={css.curv}/>
    <div className={css.descriptionBox}>
      <h1 className={css.descriptionHeading}>
        All your files in one secure location, accessible anywhere
      </h1>
      <p className={css.description}>
        Fylo stores all your most important files on one secure
        location. Access them anywhere you need share and collaborate
        with friends, family and co-workers.
      </p>
      <button type="button" className={css.getStartedBtn}>Get started</button>
    </div>
  </section>
);

export default Hero;
