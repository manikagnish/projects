export default function Card() {
  return (
    <div className="container">
      <div className="content">
        <section className="img-section">
          <img
            src="./images/hivecoin.png"
            alt="hivecoin"
            className="thumbnail"
          />
        </section>
        <section className="info">
          <p>
            UI for a crypto wallet, hivecoin, using react js, scss, reactstrap
            and react router.
          </p>
          <div className="links">
            <a
              href="https://github.com/manikagnish/hivecoin"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./images/github.svg" alt="github" />
              <p>Github repo</p>
            </a>

            <a
              href="https://manikagnish.com/hivecoin/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./images/external-link.svg" alt="link to website" />
              <p>live website</p>
            </a>
          </div>
        </section>
      </div>
      <div className="cursor"></div>
    </div>
  );
}
