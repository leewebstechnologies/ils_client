import styles from './admission.module.css';
const Admission = () => {
  return (
    <div className={styles.admissionContainer}>
      <div className={styles.admission}>
        <h1 className={styles.admissionTitle}>Admission Procedure</h1>
        <p className={styles.intro}>
          Welcome to Imperial Legacy School. We’re delighted you’re considering
          joining our community!
        </p>

        <div className={styles.steps}>
          <div className={styles.step}>
            <h2>1. Inquiry</h2>
            <p>
              Visit our school or contact us via phone/email to express interest
              and gather information.
            </p>
          </div>

          <div className={styles.step}>
            <h2>2. Application Form</h2>
            <p>
              Collect and submit the completed admission form with required
              documents.
            </p>
          </div>

          <div className={styles.step}>
            <h2>3. Interaction Session</h2>
            <p>
              We invite the child and parents for an informal interaction with
              the school staff.
            </p>
          </div>

          <div className={styles.step}>
            <h2>4. Confirmation</h2>
            <p>
              Selected candidates will receive an admission confirmation call or
              email.
            </p>
          </div>

          <div className={styles.step}>
            <h2>5. Fee Payment</h2>
            <p>
              Complete the fee payment to secure the seat and receive the
              welcome kit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admission