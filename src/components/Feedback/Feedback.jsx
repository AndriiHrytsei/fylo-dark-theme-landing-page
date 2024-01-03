import css from "./Feedback.module.css";
import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";

const Feedback = () => {
  return (
    <section className={css.feedback}>
      <ul className={css.feedbackList}>
        <li className={css.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={css.userInfo}>
            <img src={profile1} alt="" className={css.userImage}/>
            <p className={css.userName}>Satish Patel</p>
            <p className={css.userDescription}>Founder & CEO, Huddle</p>
          </div>
        </li>
        <li className={css.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={css.userInfo}>
            <img src={profile2} alt="" className={css.userImage}/>
            <p className={css.userName}>Bruce McKenzie</p>
            <p className={css.userDescription}>Founder & CEO, Huddle</p>
          </div>
        </li>
        <li className={css.comment}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={css.userInfo}>
            <img src={profile3} alt="" className={css.userImage}/>
            <p className={css.userName}>Iva Boyd</p>
            <p className={css.userDescription}>Founder & CEO, Huddle</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Feedback;
