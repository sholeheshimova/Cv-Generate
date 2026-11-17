import { useCallback, useMemo, useState } from "react";

export function useCVs() {
  const [cvs, setCvs] = useState([]);
  const [selectedCV, setSelectedCV] = useState(null);

  const handleCreateCV = useCallback((values) => {
    const newCV = {
      id: Date.now(),
      ...values,
    };

    setCvs((prev) => [...prev, newCV]);
    setSelectedCV(newCV);
  },[])

  const handleShowCV = useCallback((cv) => {
    setSelectedCV(cv);
  },[]);

  const handleDeleteCV = useCallback((id) => {
    const updatedCVs = cvs.filter((cv) => cv.id !== id);

    setCvs(updatedCVs);

    if (selectedCV?.id === id) {
      setSelectedCV(updatedCVs[0] || null);
    }
  },[cvs,selectedCV])


  const totalCVs = useMemo(() => {
    return cvs.length
  },[cvs])


  return {
    cvs,
    selectedCV,
    totalCVs,
    handleCreateCV,
    handleShowCV,
    handleDeleteCV,
  };
}
