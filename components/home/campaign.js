import Container from '../container';
import WordSlider from '../word-slider';

export default () => (
  <div className="slider-container">
    <WordSlider duration={1800}>
      <span>dasdas</span>
      {/*<span>Lower Cost</span>
      <span>Efficiency</span>
      <span>Liquidity</span>
      <span>Transparency</span>
      <span>Lower Risk</span>*/}
    </WordSlider>
    <style jsx>{`
      .slider-container {
        margin: auto;
        margin-top: 0;
        margin-bottom: -1rem;
        line-height: 1.4em;
        white-space: nowrap;
      }
    `}</style>
  </div>
);
