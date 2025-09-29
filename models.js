// https://car-rental-api.up.railway.app/car

async function fetchModels() {
  try {
    const response = await fetch("https://car-rental-api.up.railway.app/car");
    const json = await response.json();
    const data = json.data;
    return data;
  } catch (e) {
    console.log("COULDNT FETCH DATA");
    console.log(`error: ${e}`);
    alert(e)
  }
}

async function renderModels() {
  try {
    //loading state
    const modelsList = document.querySelector("#models-list");
    modelsList.innerHTML = `<i class="fa-solid fa-circle-notch models__list__spinner"></i>`;

    // actually manipulating data
    const sortValue = document.querySelector(".models__header__sort").value;
    console.log(sortValue);

    let models = await fetchModels();

    if (sortValue === "LOW_TO_HIGH") {
      models.sort((a, b) => a.per_day_price - b.per_day_price);
    } else if (sortValue === "HIGH_TO_LOW") {
      models.sort((a, b) => b.per_day_price - a.per_day_price);
    } else if (sortValue === "RATING") {
      models.sort((a, b) => b.rating - a.rating);
    }

    const modelsHTML = models
      .map((model) => {
        return `              <div class="model">
                <img src="https://car-rental-api.up.railway.app/${
                  model.image
                }" alt="" class="model__img" />
                <div class="model__details model__details-1">
                  <h3 class="model__details__name">${model.make} ${
          model.model
        }</h3>
                  <h4 class="model__details__price">
                    $${Math.floor(
                      model.per_day_price
                    )} <span class="model__details__price__span">per day</span>
                  </h4>
                </div>
                <div class="model__details model__details-2">
                  <div class="model__detail model__detail__rating">
                    <i class="model__detail__icon fa-solid fa-star"></i>
                    <span class="model__detail__text">${model.rating} / 5</span>
                  </div>
                  <div class="model__detail model__detail-right">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">2023</span>
                  </div>
                  <div class="model__detail">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">${model.make}</span>
                  </div>
                  <div class="model__detail model__detail-right">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">${
                      model.transmission
                    }</span>
                  </div>
                </div>
                <button class="model__btn">
                  <span class="model__btn__span">Book Ride</span>
                  <i class="fa-regular fa-circle-check model__btn__icon"></i>
                </button>
              </div>`;
      })
      .join("");

    modelsList.innerHTML = modelsHTML;
  } catch (e) {
    alert(e);
  }
}

renderModels();

let abc = `              <div class="model">
                <img src="assets/model-img.png" alt="" class="model__img" />
                <div class="model__details model__details-1">
                  <h3 class="model__details__name">Toyota Camry</h3>
                  <h4 class="model__details__price">
                    $25 <span class="model__details__price__span">per day</span>
                  </h4>
                </div>
                <div class="model__details model__details-2">
                  <div class="model__detail model__detail__rating">
                    <i class="model__detail__icon fa-solid fa-star"></i>
                    <span class="model__detail__text">4.5 / 5</span>
                  </div>
                  <div class="model__detail model__detail-right">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">2023</span>
                  </div>
                  <div class="model__detail">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">Toyota</span>
                  </div>
                  <div class="model__detail model__detail-right">
                    <i class="model__detail__icon fa-solid fa-car"></i>
                    <span class="model__detail__text">Manual</span>
                  </div>
                </div>
                <button class="model__btn">
                  <span class="model__btn__span">Book Ride</span>
                  <i class="fa-regular fa-circle-check model__btn__icon"></i>
                </button>
              </div>`;
