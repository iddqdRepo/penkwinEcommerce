import styles from "./titleHeaderComponent..module.css";

function TitleHeaderComponent({
  title,
  description,
}: {
  title: String;
  description: String;
}) {
  return (
    <>
      <div className={styles.headerTitle}>{title}</div>

      {description ? (
        <div className={styles.headerDescription}>{description}</div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TitleHeaderComponent;
