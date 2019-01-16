import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';

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
          <h1 className="fw3">SECURITY TOKEN OFFERING</h1>
          <h3 className="fw2">
            Security tokens are digital securities fully compliant with
            financial regulations and run on the blockchain. Security Token
            Offering is a novel way for real estate owners to raise capital they
            can securitize real estate assets by issuing digital shares -
            security tokens and selling them publicly.
          </h3>
          <br />
          <br />
          <h3 className="fw6">
            Security tokens are intrinsically different from Utility tokens
            (issued during ICO)
          </h3>
          <br />
          <br />
        </div>
        <div className="row">
          <div className="column pullup">
            <h3 className="title-1 f2 fw5">SECURITY TOKENS</h3>
            <br />
            <br />
            <img src="/static/STO/icon-1-full.png" align="middle" />
            <br />
            <br />
            <img src="/static/STO/icon-2-full.png" align="middle" />
            <br />
            <br />
            <img src="/static/STO/icon-3-full.png" align="middle" />
          </div>
          <div className="column vspullup">
            <img
              className="hideMobile hideImage"
              src="/static/STO/divider.png"
            />
            <img
              className="showMobile hideImage"
              src="/static/STO/dividerMobile.png"
            />
          </div>
          <div className="column">
            <h3 className="title-1 f2 fw5">UTILITY TOKENS</h3>
            <br />
            <br />
            <img src="/static/STO/icon-4-full.png" />
            <br />
            <br />
            <img src="/static/STO/icon-5-full.png" />
            <br />
            <br />
            <img src="/static/STO/icon-6-full.png" />
          </div>
        </div>
        <style jsx>{`
          .column {
            text-align: center;
            width: 100%;
            padding: 1.5rem 0;
            max-width: 500px;
            margin-left: 25px;
            margin-right: 25px;
          }
          .pullup {
            margin-bottom: 20px;
          }
          .vspullup {
            margin-bottom: 10px;
          }
          .container {
            height: 300px;
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
            .learn-intro {
              background-position: 0 3.5rem;
              background-size: 100% auto;
              height: 360px;
            }
          }
        `}</style>
      </div>
    </Container>
    {/*<CompanySlider />*/}
  </Container>
);
