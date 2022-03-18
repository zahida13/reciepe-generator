// Initial Ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1,
};

const starTotal = 5;
let productSelect = document.querySelector("#product-select");
let ratingControl = document.querySelector("#rating-control");

let product;

productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  if (rating > 5) {
    alert("please add eqal to or less than five");
  }
  ratings[product] = rating;
  getRtings();
});

let getRtings = () => {
  for (let rating in ratings) {
    const starPercent = (ratings[rating] / starTotal) * 100;
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = `${starPercent}%`;
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
};

document.addEventListener("DOMContentLoaded", getRtings);
