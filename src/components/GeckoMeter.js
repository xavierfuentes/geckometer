import React, { PropTypes } from 'react';
import './GeckoMeter.css';

const dataTurns = (max, val) => -.5 + .5 * val / max;

const GeckoMeter = ({ min, max, value, unit}) => {
  return(
    <article className="gom--wrapper">
      <section className="gom--container">
        <section className="gom--background"></section>
        <section className="gom--center"></section>
        <section className="gom--data" style={
          {transform: `rotate(${dataTurns(max, value)}turn)`}
        }></section>
      </section>
    </article>
  )
}

GeckoMeter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 200,
  value: 150,
  unit: null,
}

export default GeckoMeter;
