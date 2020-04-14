const slider = document.getElementById('price_toggle');
const prices = document.querySelectorAll('.price');
const priceMonthly = [];


slider.addEventListener('click', () => {
  prices.forEach(price => priceMonthly.push(+price.innerText));

  if (slider.checked) {
    prices.forEach((price, index) => {
      let decimal_part = price.innerText.split('.')[0]
      price.innerText = decimal_part + '9.99';
    });
  } else {
    prices.forEach((price, index) => {
      price.innerText = priceMonthly[index];
    });
  }
});
