
import styles from "./table.module.css";

function CvTable({ cvs, onShow, onDelete }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div>
          <h2>My CVs</h2>
          <p>Manage your created resumes</p>
        </div>

        <span className={styles.count}>{cvs.length} CVs</span>
      </div>

      {cvs.length === 0 ? (
        <div className={styles.emptyState}>
          <p>You haven't created any CV yet.</p>
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {cvs.map((cv) => (
                <tr key={cv.id}>
                  <td>{cv.fullName}</td>
                  <td>{cv.jobTitle}</td>
                  <td>{cv.email}</td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.showBtn}
                        onClick={() => onShow(cv)}
                      >
                        Show CV
                      </button>

                      <button
                        className={styles.deleteBtn}
                        onClick={() => onDelete(cv.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CvTable;
