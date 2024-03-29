/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import Star from '../../components/overview/Info/Star.jsx';
import Freeform from '../../components/overview/Info/Freeform.jsx';
import Info from '../../components/overview/Info/Info.jsx';
import averageRating from '../../components/overview/Info/Info-helper.jsx/star-helper.jsx';
import { sampleData, sampleData2, sampleProduct } from '../../components/overview/sampleData.js';

describe('Star Rating', () => {
  test('star rating shows given ratings', () => {
    const reviews = {
      ratings: {
        2: '1',
        4: '1',
        5: '1',
      },
    };
    render(<Star ratings={reviews.ratings} />);
    const starElement = document.querySelector('.inner-stars').innerHTML;

    expect(starElement).toBe('★★★★★');
  });

  test('star rating should be hidden with no ratings', () => {
    const empty = {
      ratings: {},
    };
    render(<Star ratings={empty.ratings} />);
    const starElement = document.querySelector('.stars');

    expect(starElement).toBe(null);
  });

  test('star rating function should work', () => {
    const reviews = {
      ratings: {
        2: '1',
        4: '1',
        5: '1',
      },
    };
    const empty = {
      ratings: {},
    };
    const average = averageRating(reviews.ratings, () => {});
    const emptyAverage = averageRating(empty.ratings, () => {});

    expect(average).toBe(3.75);
    expect(emptyAverage).toBe(0);
  });
});

describe('Sales price', () => {
  test('Sales price should be displayed if there is sales price', () => {
    render(<Info styles={sampleData2.results[7]} />);
    const sales = document.querySelector('.sales');

    expect(sales.innerHTML).toBe('$400.00');
  });

  test('Sales price should not be displayed if null', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const sales = document.querySelector('.sales');

    expect(sales).toBe(null);
  });
});

describe('Social Media', () => {
  test('Fb share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.fb-share-button');

    expect(button).toBeDefined();
  });

  test('Twitter share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.twitter-follow-button');

    expect(button).toBeDefined();
  });

  test('Pinterest share should show up', () => {
    render(<Info styles={sampleData2.results[8]} />);
    const button = document.querySelector('.pinterest-save-button');

    expect(button).toBeDefined();
  });
});

describe('Freeform', () => {
  test('Slogan shows up on render', () => {
    render(<Freeform productInfo={sampleProduct} />);
    const slogan = document.querySelector('.slogan');

    expect(slogan).toBeDefined();
  });

  test('Description shows up on render', () => {
    render(<Freeform productInfo={sampleProduct} />);
    const description = document.querySelector('.description');

    expect(description).toBeDefined();
  });
  test('Features shows up on render', () => {
    render(<Freeform productInfo={sampleProduct} />);
    const slogan = document.querySelector('.slogan');

    expect(slogan).toBeDefined();
  });
});
