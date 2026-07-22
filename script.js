document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById("filter");
  const productGrid = document.getElementById("productGrid");
  const products = Array.from(productGrid.querySelectorAll(".card"));

  filter.addEventListener("change", function () {
    const selectedValue = filter.value;

    // Sort products by price
    if (selectedValue === "low-high") {
      products
        .sort(function (a, b) {
          return Number(a.dataset.price) - Number(b.dataset.price);
        })
        .forEach(function (product) {
          product.style.display = "";
          productGrid.appendChild(product);
        });

      return;
    }

    // Show only products in the selected category
    products.forEach(function (product) {
      const categories = product.dataset.category.split(" ");

      if (categories.includes(selectedValue)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
