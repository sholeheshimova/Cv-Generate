import styles from "./form.module.css";
import { useFormik } from "formik";

function CvForm({onSubmit}) {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    education: "",
    skills: "",
    experience: "",
    image: "",
  };

  const formik = useFormik({
    initialValues: initialValues,

    validate: (values) => {
      const errors = {};

      if (!/^[a-zA-ZəöğüşçıİƏÖĞÜŞÇ\s]{5,30}$/.test(values.fullName.trim())) {
        errors.fullName = "Name must be 5-30 characters";
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Enter a valid email";
      }

      if (!/^\+?[0-9\s()-]{7,20}$/.test(values.phone.trim())) {
        errors.phone = "Enter a valid phone number";
      }

      if (!/^[a-zA-ZəöğüşçıİƏÖĞÜŞÇ\s]{2,40}$/.test(values.jobTitle.trim())) {
        errors.jobTitle = "Enter a valid job title";
      }

      if (values.education.trim().length < 3) {
        errors.education = "Education is required";
      }

      if (values.skills.trim().length < 2) {
        errors.skills = "Skills are required";
      }

      if (values.experience.trim().length < 5) {
        errors.experience = "Experience must be at least 5 characters";
      }

      if (values.image) {
        try {
          const imageUrl = new URL(values.image);

          if (imageUrl.protocol !== "http:" && imageUrl.protocol !== "https:") {
            errors.image = "Enter a valid image URL";
          }
        } catch {
          errors.image = "Enter a valid image URL";
        }
      }

      return errors;
    },

    onSubmit: (values) => {
      onSubmit(values)
    },
  });
  return (
    <>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Create Your CV</h2>

        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className={styles.error}>{formik.errors.fullName}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className={styles.error}>{formik.errors.phone}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter your job title"
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.jobTitle && formik.errors.jobTitle && (
              <p className={styles.error}>{formik.errors.jobTitle}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Education</label>
            <input
              type="text"
              name="education"
              placeholder="Enter your education"
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.education && formik.errors.education && (
              <p className={styles.error}>{formik.errors.education}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="Enter your skills"
              value={formik.values.skills}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.skills && formik.errors.skills && (
              <p className={styles.error}>{formik.errors.skills}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Experience</label>
            <textarea
              name="experience"
              placeholder="Describe your experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.experience && formik.errors.experience && (
              <p className={styles.error}>{formik.errors.experience}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Profile Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL (optional)"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image && (
              <p className={styles.error}>{formik.errors.image}</p>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Create CV
          </button>
        </form>
      </div>
    </>
  );
}

export default CvForm;
