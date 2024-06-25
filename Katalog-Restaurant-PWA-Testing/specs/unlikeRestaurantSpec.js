import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });

    const likedButton = document.getElementById('likeButton');
    likedButton.dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
  });
});
