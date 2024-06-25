/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  I.waitForElement('.resto-item_content', 10);
  I.seeElement('.resto-item_content');

  const firstRestaurant = locate('.resto-item_content').first();
  I.click(firstRestaurant);

  I.waitForElement('.form-review form', 10);
  I.seeElement('.form-review form');

  I.fillField('inputName', 'test review');
  I.fillField('inputReview', 'testing');

  I.click('#submit-review');

  I.waitForElement('.detail-review-item', 10);
  const lastReview = locate('.detail-review-item').last();

  const reviewText = await I.grabTextFrom(lastReview.find('.body-review'));

  assert.strictEqual(reviewText.trim(), 'testing');
});
