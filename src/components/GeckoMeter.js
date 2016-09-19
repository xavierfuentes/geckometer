import React, { PropTypes } from 'react';
import './GeckoMeter.css';

const width = 240;
const height = width / 2;
const needle = 3;

const styles = {
  wrapper: {},
  container: { width, height },
  background: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  center: {
    width: width * .80,
    height: height * .80,
    top: height * .20,
    marginLeft: height * .20,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  data: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  needle: {
    left: height,
    top: height - needle,
    width: height,
    height: needle,
  },
  labels: {
    width: width + 10,
  }
};

const toCurrency = (val, format, unit) => val.toLocaleString('en-GB', { style: format, currency: unit })
const dataTurns = (min, max, val) => {
  let turns;
  if (val <= min) return -.5;
  if (val >= max) return 0;
  turns = -.5 + .5 * val / max;
  return turns;
};

const GeckoMeter = ({ min, max, value}) => {
  return(
    <article style={styles.wrapper} className="gom--wrapper">
      <section>{toCurrency(value)}</section>

      <section style={styles.container} className="gom--container">
        <section style={styles.background} className="gom--background"></section>
        <section style={styles.center} className="gom--center"></section>
        <section className="gom--data" style={
          Object.assign({}, styles.data, {
            transform: `rotate(${dataTurns(min, max, value)}turn)`
          })
        }></section>
        <section className="gom--needle" style={
          Object.assign({}, styles.needle, {
            transform: `rotate(${dataTurns(min, max, value)}turn)`
          })
        }></section>
      </section>

      <section style={styles.labels} className="gom--labels">
        <article className="gom--labels_min">{toCurrency(min)}</article>
        <article className="gom--labels_max">{toCurrency(max)}</article>
      </section>
    </article>
  )
}

GeckoMeter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 0,
  value: 0,
}

export default GeckoMeter;

// todo: edge cases handler:
//   - when max is lte min
// todo: improve the turn calculator for a better use of min
// todo: unit testing for dataTurns
