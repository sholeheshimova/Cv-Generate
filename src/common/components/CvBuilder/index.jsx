
import { useState } from "react";

import styles from "./builder.module.css";
import CvTable from "../CvTable";
import CvForm from "../CvForm";
import CvPreview from "../CvPreview";

function CvBuilder() {
  const [cvs, setCvs] = useState([]);
  const [selectedCV, setSelectedCV] = useState(null);

  const handleCreateCV = (values) => {
    const newCV = {
      id: Date.now(),
      ...values,
    };

    setCvs((prev) => [...prev, newCV]);
    setSelectedCV(newCV);
  };

  const handleShowCV = (cv) => {
    setSelectedCV(cv);
  };

  const handleDeleteCV = (id) => {
    setCvs((prev) => {
      const updatedCVs = prev.filter((cv) => cv.id !== id);

      if (selectedCV?.id === id) {
        setSelectedCV(updatedCVs[0] || null);
      }

      return updatedCVs;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <CvForm onSubmit={handleCreateCV} />

        <CvTable
          cvs={cvs}
          onShow={handleShowCV}
          onDelete={handleDeleteCV}
        />
      </div>

      <CvPreview cvData={selectedCV} />
    </div>
  );
}

export default CvBuilder;
