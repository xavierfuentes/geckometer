import React from 'react';
import ReactDOM from 'react-dom';
import GeckoMeter, { toCurrency, rotation } from './GeckoMeter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GeckoMeter />, div);
});

it('transforms a number into a local currency value', () => {
  expect(toCurrency(1, 'USD')).toEqual('$1');
  expect(toCurrency(1, 'GBP')).toEqual('£1');
  expect(toCurrency(1, 'EUR')).toEqual('€1');
  expect(toCurrency(1, 'CHF')).toEqual('CHF1'); // no symbol
  expect(toCurrency(1000)).toEqual('1,000'); // deals with decimal marks
  expect(toCurrency(1.5, 'GBP')).toEqual('£1.5');
  expect(toCurrency(1.50, 'GBP')).toEqual('£1.5');
  expect(toCurrency(1.55, 'GBP')).toEqual('£1.55');
  expect(toCurrency(1.556, 'GBP')).toEqual('£1.56'); // rounds when 2 decimals
});

it('calculates the rotation for the needle and the data mask', () => {
  expect(rotation(0, 100, 0)).toEqual(-180); // 100% completed
  expect(rotation(0, 100, 25)).toEqual(-135); // 25% completed
  expect(rotation(0, 100, 50)).toEqual(-90); // 50% completed
  expect(rotation(0, 100, 100)).toEqual(0); // 0% completed
  expect(rotation(4, 6, 5)).toEqual(-90);
  expect(rotation(1, 5, 2)).toEqual(-135);
  expect(rotation(0, 100, 100)).toEqual(0); // 0% completed
  expect(rotation(100, 1000, 10)).toEqual(-180); // value is lesser than min
  expect(rotation(100, 1000, 10000)).toEqual(0); // value is greater than max
});
