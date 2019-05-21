const mapEntitiesToRenderArray = require('./../src');
const smallText = require('../dummy-data/raw-text-small');
const smallLabels = require('../dummy-data/labels-small.js');

const largeText = require('../dummy-data/raw-text');
const largeLabels = require('../dummy-data/labels.js');

describe('mapEntitiesToRenderArray', () => {
  test('adds empty label tags to from raw text to highligh array on small version', () => {
    const result = mapEntitiesToRenderArray(smallText, smallLabels);
    expect(result).toMatchSnapshot();
  });

  // test.skip('adds empty label tags to from raw text to highligh array on large version', () => {
  //   const result = mapEntitiesToRenderArray(largeText, largeLabels);
  //   expect(result).toMatchSnapshot();
  // });

  test('expects each odd entity to be labeled and each even entity to be unlabeled', () => {
    const result = mapEntitiesToRenderArray(largeText, largeLabels);

    const labeled = result.filter((_, ii) => ii % 2);
    const unlabeled = result.filter((_, ii) => ii % 2 === 0);

    labeled.forEach(entity => {
      expect(entity.isEntity).toBeTruthy();
    });

    unlabeled.forEach(entity => {
      expect(entity.isEntity).not.toBeTruthy();
    });
  });
});
