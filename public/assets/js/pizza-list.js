const $pizzaList = document.querySelector('#pizza-list');

const getPizzaList = async () => {
  try {
    const res = await fetch('/api/pizzas')
    const resJson = await res.json()

    resJson.forEach(printPizza)
  }
  catch (err) {
    console.log(err)
  }
}

const listToppings = (toppings) => {
  console.log(toppings)
  return `${toppings.map(topping => `<li>${topping}</li>`)}`
}

// console.log(listToppings())

const printPizza = ({ _id, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${pizzaName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Size: ${size}
          <h5 class="text-dark">Toppings</h5>
          <ul>
          ${toppings
      .map(topping => {
        return `<li>${topping}</li>`;
      })
      .join('')}
        </ul>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};

getPizzaList()

