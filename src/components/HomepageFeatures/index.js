import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/1.svg").default,
    description: (
      <>
        Provide easy-to-understand documentation for all ThePartner developers
        and users, offering a comprehensive knowledge base encompassing
        tutorials on software development, architecture, business, and more, all
        available completely free of charge, ensuring accessibility and
        empowerment for all.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>
        Learn principles, good practices, technology, and business, everything
        that really matters, at no cost, to empower yourself with the knowledge
        and skills necessary for personal and professional growth, without
        financial barriers hindering your educational journey.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
