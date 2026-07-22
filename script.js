const filter = document.querySelector("#filter");
const productGrid = document.querySelector("#productGrid");

filter.addEventListener("change", () => {
  const selectedValue = filter.value;
  const products = Array.from(document.querySelectorAll(".card")];

  if (selectedValue === "low-high") {
    products
      .sort((a, b) => 
 {
      return Number(a.dataset.price) - Number(b.dataset.price);
    });
    products.forEach(product => {
      product.style.display = "block";   
      productGrid.appendChild(product);
    });

    return;
  }

  products.forEach(product => {
    if (category === selectedValue) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
