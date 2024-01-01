import { ReactComponent as AccessAnything } from "../../images/icon-access-anywhere.svg";
import { ReactComponent as AnyFile } from "../../images/icon-any-file.svg";
import { ReactComponent as Collaboration } from "../../images/icon-collaboration.svg";
import { ReactComponent as Security } from "../../images/icon-security.svg";
import css from "./Features.module.css";

const Features = () => (
  <section className={css.features}>
    <ul className={css.featureslist}>
      <li className={css.featuresItem}>
        <AccessAnything />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </li>
      <li className={css.featuresItem}>
        <Security />
        <h2>Security you can trust</h2>
        <p>
          2-tactor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure vour files.
        </p>
      </li>
      <li className={css.featuresItem}>
        <Collaboration />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required
        </p>
      </li>
      <li className={css.featuresItem}>
        <AnyFile />
        <h2>Store any type of file</h2>
        <p>
          Whether you&apos;re sharing holidays photos or work documents, Fylo
          has you covered allowing for all file tvoes to be securely stored and
          shared.
        </p>
      </li>
    </ul>
  </section>
);

export default Features;
