import css from "./Footer.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";

const Footer = () => (
  <footer className={css.footer}>
    <Logo className={css.footerLogo}/>
    <div className={css.footerContent}>
      <ul className={css.contactUs}>
        <li>
          Lorem ipsum dolor sit amet, consectetur aaleiscing elle, sea do
          elusmoe tempor incididunt ut labore et dolore magna aliqua
        </li>
        <li>+1-543-123-4567</li>
        <li>example@fylo.com</li>
      </ul>
      <ul className={css.aboutUs}>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>
      <ul className={css.termsAndPrivacy}>
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
      <ul className={css.socialMedia}>
        <li>
          <Facebook className={css.facebook} />
        </li>
        <li>
          <Twitter className={css.twitter} />
        </li>
        <li>
          <Instagram className={css.instagram} />
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
