import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default () => (
  <Container center role="region" aria-labelledby="learn">
    <Container center>
      {' '}
      {/*fix padding which adds extra white space*/}
      <div className="container">
        <hr id="How" className="beautiful-line" />
      </div>
      <br />
      <br />
      <div className="campaign no-drag no-tap-highlight">
        <h1 className="fw3">HOW IT WORKS</h1>
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
          height: 1024px;
          max-width: 1024px;
          margin: auto;
          background: url(/static/howitworks/Diagram.png);
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
        @media screen and (max-width: 960px) {
            .learn-intro {
              background-position: 0 3.5rem;
              background-size: 100% auto;
              height: 940px;
            }
          }
          @media screen and (max-width: 820px) {
            .learn-intro {
              background-position: 0 3.5rem;
              background-size: 100% auto;
              height: 800px;
            }
          }
        @media screen and (max-width: 720px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 700px;
          }
        }
        @media screen and (max-width: 560px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 580px;
          }
        }
        @media screen and (max-width: 420px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 440px;
          }
        }
        @media screen and (max-width: 360px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 100% auto;
            height: 380px;
          }
        }
        
          
        }
      `}</style>
      </div>
      {/*<div className="container">
      <hr className="beautiful-line" />
    </div>*/}
    </Container>
  </Container>
);
