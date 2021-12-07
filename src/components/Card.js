export default function Card({
  title,
  description,
  thumbnail,
  github,
  website,
}) {
  return (
    <div className="container">
      <div className="content">
        <section className="img-section">
          <img src={thumbnail} alt={title} className="thumbnail" />
        </section>
        <section className="info">
          <p>{description}</p>
          <div className="links">
            <a href={github} target="_blank" rel="noreferrer">
              <img src="./images/github.svg" alt="github" />
              <p>Github repo</p>
            </a>

            <a href={website} target="_blank" rel="noreferrer">
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
