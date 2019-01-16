import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <div className="container">
        <hr className="beautiful-line" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <div className="campaign no-drag no-tap-highlight">
          <h1 className="fw3">ADVANTAGES</h1>
          <br />
          <br />
        </div>
        <div className="row">
          <div className="column">
            <img
              className="imgTwo"
              src="/static/STO/advantages/advantage-1.png"
            />
          </div>
          <div className="column">
            <img
              className="imgOne"
              src="/static/STO/advantages/advantage-2.png"
            />
          </div>
          <div className="column">
            <img
              className="imgOne"
              src="/static/STO/advantages/advantage-3.png"
            />
          </div>
          <div className="column">
            <img
              className="imgTwo"
              src="/static/STO/advantages/advantage-4.png"
            />
          </div>
          <div className="column">
            <img src="/static/STO/advantages/advantage-5.png" />
          </div>
        </div>
        <style jsx>{`
          .column {
            text-align: center;
            width: 100%;
            padding: 2rem 0;
            max-width: 600px;
            margin-left: 20px;
          }
          .imgOne {
            margin-bottom: 10px;
          }
          .imgTwo {
            margin-bottom: 5px;
          }
          .container {
            height: 300x;
            width: 50%px;
            margin: 10px auto;
            padding-top: 100px;
          }
          .beautiful-line {
            border-top: 1px solid #999;
            width: 100%;
          }
          .title-1 {
            font-size: 1.102032470703125em;
            color: #ff7200;
            letter-spacing: 2px;
          }
          .title-2 {
            font-size: 2.887rem;
            margin-top: -4.2rem;
            margin-bottom: 0;
          }
          .justify {
            text-align: center;
          }

          //added by Mobin to hide images on mobile and pc
          .hideImage {
            display: none;
          }

          @media screen and (min-width: 960px) {
            .hideMobile {
              display: inline !important;
            }
          }

          @media screen and (max-width: 960px) {
            .showMobile {
              display: inline !important;
            }
          }
          //added by Mobin to hide images on mobile and pc {end}
          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            .row {
              flex-direction: column;
              margin: -1.5rem 0;
            }
            .column {
              width: 100%;
              padding: 1.5rem 0;
              text-align: center;
              max-width: 350px;
            }
          }
        `}</style>
      </div>
    </Container>
  </Container>
);
