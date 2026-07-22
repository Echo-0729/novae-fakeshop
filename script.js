const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const filter = document.querySelector("#filter");
const productGrid = document.querySelector("#productGrid");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

filter.addEventListener("change", () => {
  const selectedValue = filter.value;
  const products = [...document.querySelectorAll(".card")];

  if (selectedValue === "low-high") {
    products
      .sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price))
      .forEach(product => productGrid.appendChild(product));

    products.forEach(product => {
      product.style.display = "block";
    });

    return;
  }

  products.forEach(product => {
    const category = product.dataset.category;
    product.style.display =
      category === selectedValue ? "block" : "none";
  });
});
