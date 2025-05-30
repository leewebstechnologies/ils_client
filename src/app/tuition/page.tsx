import Link from "next/link";
import "./tuition.css";
import Image from "next/image";

const Tuition = () => {
  return (
    <>
      <div className="tuition">
        <div className="tuition-container">
          <h1>Tuition & Payment</h1>
          <section className="section">
            <h2>Tuition Fees (2025)</h2>
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Annual Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kindergarten</td>
                  <td>#4,000</td>
                </tr>
                <tr>
                  <td>Grades 1–3</td>
                  <td>#4,500</td>
                </tr>
                <tr>
                  <td>Grades 4–6</td>
                  <td>#5,000</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="section">
            <h2>Payment Options</h2>
            <ul>
              <li>💳 Credit/Debit Card (online or in-person)</li>
              <li>🏦 Bank Transfer</li>
              <li>💵 Cash (in-person only)</li>
            </ul>
          </section>

          <section className="section">
            <h2>Payment Schedule</h2>
            <p>
              You may pay annually, per semester, or monthly. Discounts are
              available for full-year prepayment.
            </p>
          </section>

          <section className="section contact-box">
            <h3>Questions?</h3>
            <p>
              Contact our admin office:
              <br />
              <strong>Email:</strong> info@imperiallegacy.com
              <br />
              <strong>Phone:</strong> 08139604432
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Tuition;
