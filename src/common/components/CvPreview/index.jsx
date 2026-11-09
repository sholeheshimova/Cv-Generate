import styles from "./preview.module.css"
import { usePDF } from 'react-to-pdf';

function CvPreview({cvData}) {
  const { toPDF, targetRef } = usePDF({
    filename: "my-cv.pdf",
    page: {
      format: "A4",
      orientation: "portrait",
    },
    resolution: 2,
  });

  const skills = cvData?.skills
    ? cvData.skills.split(",").map((skill) => skill.trim())
    : [];
  return (
    <>
       <div className={styles.previewContainer}>
      <div className={styles.previewHeader}>
        <div>
          <h2>CV Preview</h2>
          <p>Your professional resume</p>
        </div>

        <button
          className={styles.downloadBtn}
          onClick={() => toPDF()}
          disabled={!cvData}
        >
          <span>↓</span> Download CV
        </button>
      </div>

      <div className={styles.paperWrapper}>
        <div className={styles.cvPaper} ref={targetRef}>
          {!cvData ? (
            <div className={styles.emptyPreview}>
              <div className={styles.emptyIcon}>CV</div>
              <h3>Your CV will appear here</h3>
              <p>Fill in the form to create your professional CV.</p>
            </div>
          ) : (
            <>
              <div className={styles.cvHeader}>
                <div className={styles.profileInfo}>
                  <h1>{cvData.fullName}</h1>
                  <h2>{cvData.jobTitle}</h2>
                </div>

                {cvData.image && (
                  <img
                    src={cvData.image}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                )}
              </div>

              <div className={styles.cvBody}>
                <aside className={styles.sidebar}>
                  <section className={styles.cvSection}>
                    <h3>CONTACT</h3>
                    <p>{cvData.email}</p>
                    <p>{cvData.phone}</p>
                  </section>

                  <section className={styles.cvSection}>
                    <h3>SKILLS</h3>
                    <ul>
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </section>
                </aside>

                <main className={styles.mainContent}>
                  <section className={styles.cvSection}>
                    <h3>EDUCATION</h3>
                    <p>{cvData.education}</p>
                  </section>

                  <section className={styles.cvSection}>
                    <h3>EXPERIENCE</h3>
                    <p className={styles.experience}>
                      {cvData.experience}
                    </p>
                  </section>
                </main>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default CvPreview;
