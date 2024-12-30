import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section>
          <p>Copyright © 2020 Aadityadav.</p>
        </section>

        <section>
          <div>
            <a href="/">
              <p>Documentation</p>
            </a>
          </div>

          <div>
            <p>FAQ</p>
          </div>

          <div>
            <button style={{ padding: "5px" }}>Buy Now</button>
          </div>
        </section>
      </footer>
    </>
  );
}
