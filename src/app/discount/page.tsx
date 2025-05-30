import styles from "./discount.module.css";

const Discount = () => {
  return (
    <>
      <div className={styles.discount}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>📚 School Discounts & Offers</h1>
            <p>
              We believe every child deserves access to quality education.
              Explore our range of discount opportunities tailored to families'
              diverse needs.
            </p>
          </div>
        </div>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>🎯 Academic Merit</h2>
            <p>
              Students who excel academically (A grade or above) in their
              previous school year may receive up to <strong>50% off</strong>{" "}
              annual tuition fees.
            </p>
            <ul>
              <li>Requires report cards from last year</li>
              <li>Subject to annual review</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>👨‍👩‍👧 Sibling Discount</h2>
            <p>
              We offer <strong>10% off</strong> for each additional sibling
              enrolled at Little Star. It’s our way of supporting growing
              families!
            </p>
            <ul>
              <li>Automatically applied for the second child onward</li>
              <li>Applies to tuition only</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>⏰ Early Bird Registration</h2>
            <p>
              Enroll before <strong>June 1st</strong> and enjoy a{" "}
              <strong>15% discount</strong> on the first term's tuition fees.
            </p>
            <ul>
              <li>Valid only for new enrollments</li>
              <li>Non-refundable deposit required</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>🤝 Referral Program</h2>
            <p>
              Refer another parent to our school and both of you receive a{" "}
              <strong>5% discount</strong> off your next tuition bill.
            </p>
            <ul>
              <li>Discount applied after successful admission</li>
              <li>No referral limit</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>💼 Financial Aid Options</h2>
            <p>
              We offer need-based discounts for qualifying families. All
              information is confidential and reviewed by our scholarship
              committee.
            </p>
            <ul>
              <li>Submit income proof</li>
              <li>Flexible payment plans available</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};
export default Discount;
