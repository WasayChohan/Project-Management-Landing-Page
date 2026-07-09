// import "./Trusted.css";
import "./Trusted.css";

const Trusted = () => {
  return (
    <section className="trusted">
      <p className="trusted-title">
        Trusted by <span>10,000+</span> teams worldwide
      </p>

      <div className="trusted-logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
      </div>
    </section>
  );
};

export default Trusted;
