import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  });

  it('should not add a restaurant again when it is already liked', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    await new Promise(resolve => setTimeout(resolve, 500));

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    expect(restaurants.length).toBe(1);
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    await new Promise(resolve => setTimeout(resolve, 500));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
  });
});
