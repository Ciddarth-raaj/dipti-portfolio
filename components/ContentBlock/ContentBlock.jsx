import styles from "./ContentBlock.module.css";

import Section from "./Section";

import { ABOUT_ME } from "../../constants/content";

export default () => {
  return (
    <div>
      <Section title={"About Me"}>
        <p>{ABOUT_ME}</p>
      </Section>

      <Section title={"Projects"}></Section>
    </div>
  );
};
