import RestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import CreateReview from '../../utils/create-review';

const Detail = {
  async render() {
    return `
    <div tabindex="0" class="main">
      <h2 tabindex="0" class="explore-restaurant__label">Detail Menus Restaurant</h2>
      <section id="detail-rest"></section>
      <div class="like" id="likeButtonContainer"></div>
    </div>

    <div class="form-review">
      <form id="review-form">
        <div class="mb-3">
          <label for="inputName" class="form-label">Name</label>
          <input name="inputName" type="text" class="form-control" id="inputName">
        </div>
        <div class="mb-3">
          <label for="inputReview" class="form-label">Review</label>
          <input name="inputReview" type="text" class="form-control" id="inputReview">
        </div>
        <button id="submit-review" type="submit" class="btn">Submit</button>
      </form>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });

    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      await CreateReview();

      // Re-fetch the restaurant details to update the review list
      const updatedRestaurant = await RestaurantSource.restaurantDetail(url.id);
      const reviewContainer = document.querySelector('.detail-review');
      reviewContainer.innerHTML = createRestaurantDetailTemplate(updatedRestaurant.restaurant).querySelector('.detail-review').innerHTML;
    });
  },
};

export default Detail;
