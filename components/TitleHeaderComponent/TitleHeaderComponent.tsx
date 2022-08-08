import styles from "./titleHeaderComponent..module.css";

export function TitleHeaderComponent({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <>
      <div className={styles.titleDescContainer}>
        <div className={styles.headerTitle}>{title}</div>
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : <></>}
        {description ? (
          <div className={styles.headerDescription}>{description}</div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default TitleHeaderComponent;
