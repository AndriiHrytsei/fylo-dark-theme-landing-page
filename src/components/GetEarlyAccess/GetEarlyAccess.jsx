import { useState } from "react";
import css from "./GetEarlyAccess.module.css";

const GetEarlyAccess = () => {
  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(true)

  const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emailIsValid = (e) => {
    e.preventDefault()
    console.log(email.match(EMAIL_REGEX));
    return email.match(EMAIL_REGEX)
      ? setValidEmail(true)
      : setValidEmail(false)
  }

  return (
    <section className={css.getEarlyAccess}>
      <div className={css.getEarlyAccessForm}>
        <h3>Get early access today</h3>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form onSubmit={emailIsValid}>
          <input type="text" name="email" id="email" placeholder="email@example.com" onChange={(e) => setEmail(e.currentTarget.value)} value={email}/>
          <button type="submit">Get Started For Free</button>
          {!validEmail && <p className={css.invalidEmailMsg}>Please enter a valid email adress</p>}
        </form>
      </div>
    </section>
  );
};

export default GetEarlyAccess;
