import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <SectionHeader
        id="features"
        title="Why CRESTO"
        description="The world’s leading companies use and love Cresto"
      />
      <div className="row">
        <div className="column">
          <h3 className="f3 fw6">Lower Cost & Efficiency</h3>
          <p>
            Lower transaction cost and fees than in traditional financing. Fast
            and easy transaction process.
          </p>
          <Button href="/learn">Learn more...</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Liquidity & Transparency</h3>
          <p>
            24/7 Access to world markets. Transparent flow of information,
            possible to eliminate middleman.
          </p>
          <Button href="/docs">View Full Documentation</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Lower Risk</h3>
          <p>
            Automated transaction distribution, lower operational, credit and
            default risk.
          </p>
          <Button href="/showcase">View Showcase</Button>
        </div>
      </div>
      <style jsx>{`
        .column {
          text-align: left;
        }
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
    </Container>
    <CompanySlider />
  </Container>
);
