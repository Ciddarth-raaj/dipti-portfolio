import styles from "./ContentBlock.module.css";

import Section from "./Section";

import { ABOUT_ME } from "../../constants/content";
import Image from "next/image";

export default function CustomBlock() {
  return (
    <div>
      <Section title={"Education"}>
        {/* <p>{ABOUT_ME}</p> */}
        <ul>
          <li>
            Master of Science in Biomedical Engineering at Columbia University
            23&apos;
          </li>
          <li>
            Bachelors of Engineering in Biomedical Engineering at Anna
            University 22&apos;
          </li>
        </ul>
      </Section>

      <Section title={"Projects"}>
        <>
          <h4>{"Little Fork"}</h4>
          <p>
            The assignment was to create a fix for a maternal issue. Our group
            identified issues we thought moms faced, categorized them based on
            similarities, and came up with the category: of empty nesters (
            mothers with children who left for college). We conducted interviews
            with people to learn about their needs and desires, which helped us
            gain an understanding of the main issue: the communication and
            emotional gap that a mother encounters when her child leaves for
            college. Based on preliminary prototype assessments, we came up with
            ideas and focused on LITTLE FORK.
          </p>
          <br></br>
          <p>
            <b>Tools Used : </b> Miro Board, Figma
          </p>
          <br></br>

          <p style={{ marginBottom: "10px" }}>
            <b>Features</b>
          </p>
          <ul>
            <li>
              <p>
                <b>Saving Recipes</b>
              </p>
              <p>
                Mom can choose from gourmet recipes or input family recipes that
                she misses preparing for her beloved children with the digital
                cookbook feature.
              </p>
            </li>

            <li>
              <p>
                <b>Ordering Ingredients</b>
              </p>
              <p>
                The service will deliver the exact ingredients of child&apos;s
                favorite meal to their door steps after just a click of a
                button.
              </p>
            </li>

            <li>
              <p>
                <b>Video Call</b>
              </p>
              <p>
                Now it&apos;s time to cook. Enjoy the calls within the app and
                begin your shared experience!
              </p>
            </li>
          </ul>

          <button className={styles.button}>
            <a
              href="https://drive.google.com/file/d/1HS4U9fkGt50B69iTpLp5Q4nnq8Gx4HxV/view"
              target="_blank"
              rel="noreferrer"
            >
              <b>Watch Video</b>
            </a>
          </button>

          <br></br>

          <Image
            src="/screenshot.png"
            alt="Picture of the author"
            width={500}
            height={380}
            style={{ marginTop: "20px", objectFit: "contain" }}
          />
        </>
      </Section>
    </div>
  );
}
