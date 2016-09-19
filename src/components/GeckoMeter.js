import React, { Component, PropTypes } from 'react';
import './GeckoMeter.css';

const width = 240; // in px
const height = width / 2;
const needle = 3;

// Deals with the dynamic style properties
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
    width: width * 2 - 50,
  }
};

// turns a value into a locale currency string
export const toCurrency = (val = 0, unit = null) => {
  let opts = {};
  if (unit) opts = {
    style: 'currency',
    currency: unit,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
  return val.toLocaleString('en-US', opts);
};

// deals with the spinning necessary for the gauge data layer and needle
export const rotation = (min, max, val) => {
  let degrees;
  if (val <= min) return -180; // sets the rotation to "0%"
  if (val >= max) return 0; // sets the rotation to "100%"
  return (val - min) / (max - min) * -180;
};

const GeckoMeter = ({ min, max, value, unit}) => {
  return(
    <article style={styles.wrapper} className="gom--wrapper">
      <h1 className="gom--labels_value">{toCurrency(value, unit)}</h1>

      <section style={styles.container} className="gom--container">
        <section style={styles.background} className="gom--background"></section>
        <section style={styles.center} className="gom--center"></section>
        <section className="gom--data" style={
          Object.assign({}, styles.data, {
            transform: `rotate(${rotation(min, max, value)}deg)`
          })
        }></section>
        <section className="gom--needle" style={
          Object.assign({}, styles.needle, {
            transform: `rotate(${rotation(min, max, value)}deg)`
          })
        }></section>
      </section>

      <section style={styles.labels} className="gom--labels">
        <h3 className="gom--labels_min">{toCurrency(min, unit)}</h3>
        <h3 className="gom--labels_max">{toCurrency(max, unit)}</h3>
      </section>
    </article>
  )
}

GeckoMeter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  format: PropTypes.string,
  unit: PropTypes.string,
}

GeckoMeter.defaultProps = {
  min: 0,
  max: 0,
  value: 0,
  format: null,
  unit: null,
}

export default GeckoMeter;

// todo: unit testing for rotation
// todo: unit testing for toCurrency
// todo: improve:
//   - handle when max is lte min
//   - handle other formats
//   - E2E testing
//   - use of color theming to change all the style
