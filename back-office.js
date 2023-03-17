const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

window.onload = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2NzkwNjAzMDksImV4cCI6MTY4MDI2OTkwOX0",
    },
  });
  const product = await response.json();
};

async function FormSubmit(event) {
  event.preventDefault();

  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: document.querySelector("#product-imageUrl").value,
    price: document.querySelector("#product-price").value,
  };

  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzFhOWY4MWI0MjAwMTM5YjI3ZWIiLCJpYXQiOjE2NzkwNDUwMzMsImV4cCI6MTY4MDI1NDYzM30.6HZs2L6am4a5ZZmcPVkMq7ujZqoYKnkbnbBwI2qMlMU",
      },
    });

    if (response.ok) {
      alert("creazione avvenuta");
    } else {
      throw new Error("ERROR!");
    }
  } catch (error) {
    console.error(error);
  }
}

function resetForm() {
  let reset = document.getElementById("reset-button");
  reset.onclick = function () {
    document.getElementById("product-name").value = "";
    document.getElementById("product-description").value = "";
    document.getElementById("product-brand").value = "";
    document.getElementById("product-imageUrl").value = "";
    document.getElementById("product-price").value = "";
  };
}
resetForm();
