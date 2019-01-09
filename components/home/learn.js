import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default () => (
  <Container center padding wide role="region" aria-labelledby="learn">
    <SectionHeader id="learn" title="Learn How to..." />
    <div className="learn-intro">
      <p>
        Tutorials, examples and quizzes. <br className="display-mobile" />
        Learn Cresto Plarform step-by-step and earn points ✨.
      </p>
      <div className="overlay" />
      <style jsx>{`
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
            background-size: 160% auto;
          }
        }
      `}</style>
    </div>
    {/*<div>
      <Button href="/learn" invert>
        Get Started
      </Button>
    </div>*/}
  </Container>
);
