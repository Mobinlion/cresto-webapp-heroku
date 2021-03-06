import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default () => (
  <Container center padding role="region" aria-labelledby="learn">
    <div className="container">
      <hr className="beautiful-line" />
    </div>

    <div className="campaign no-drag no-tap-highlight">
      <br />
      <br />
      <h1 className="fw3">SECURITY TOKEN OFFERING</h1>
      <br />
      <br />
    </div>
    <div className="learn-intro">
      <div className="overlay" />
      <style jsx>{`
        .container {
          height: 300px;
          width: 50%px;
          margin: 10px auto;
          padding-top: 100px;
        }
        .beautiful-line {
          border-top: 1px solid #999;
          width: 90%;
        }
        .divided {
          background: linear-gradient(
            transparent 45%,
            black 45%,
            black 55%,
            transparent 55%
          );
        }

        .divided span {
          background: white;
          padding: 0 5px;
        }

        .divided span:last-of-type {
          float: right;
        }
        .learn-intro {
          position: relative;
          height: 510px;
          max-width: 1024px;
          margin: auto;
          background: url(/static/images/roadmap.png);
          background-size: 100% auto;
          //background-color: #f0f3f5;
          background-position: 0 2rem;
          background-repeat: no-repeat;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 90%,
            rgba(255, 255, 255, 1) 90%
          );
          pointer-events: none;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 720px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 360px;
          }
        }
        @media screen and (max-width: 420px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 240px;
          }
        }
        @media screen and (min-width: 960px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 600px;
          }
        }
      `}</style>
    </div>
  </Container>
);
