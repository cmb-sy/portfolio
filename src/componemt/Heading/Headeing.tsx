import styles from "./Heading.module.css";

export type Props = {
  headingTitle: string;
  description?: string;
};

function CommonHeading(props: Props) {
  return (
    <div>
      <div className={styles.heading}>
        <h1 className={styles.title}>{props.headingTitle}</h1>
      </div>

      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

export default CommonHeading;
