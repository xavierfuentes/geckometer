import React, { PropTypes } from 'react';
import './GeckoMeter.css';

const width = 240;
const height = width / 2;

const styles = {
  wrapper: { height },
  container: { width, height },
  background: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  center: {
    width: width * .85,
    height: height * .85,
    top: height * .15,
    marginLeft: height * .15,
    borderRadius: `${width}px ${width}px 0 0`,
  },
  data: {
    width,
    height,
    borderRadius: `${width}px ${width}px 0 0`,
  },
};
const dataTurns = (min, max, val) => -.5 + .5 * val / (max - min);

const GeckoMeter = ({ min, max, value, unit}) => {
  return(
    <article style={styles.wrapper} className="gom--wrapper">
      <section style={styles.container} className="gom--container">
        <section style={styles.background} className="gom--background"></section>
        <section style={styles.center} className="gom--center"></section>
        <section className="gom--data" style={
          Object.assign({}, styles.data, {
            transform: `rotate(${dataTurns(min, max, value)}turn)`
          })
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
