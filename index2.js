// const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
// const a = {
//   headers: {
//     Authorization:
//       "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2NzkwNjAzMDksImV4cCI6MTY4MDI2OTkwOX0.d4QTbGcZHATHanH_5rVhS3osWFUCxFsyczVVUE7seV0",
//   },
// };

// fetch(apiURL, a)
//   .then((response) => response.json())
//   .then((products) => {
//     const grid = document.getElementById("list");
//     grid.firstElementChild.remove();

//     products.forEach((product) => {
//       const grid = document.getElementById("list");
//       const main = document.createElement("div");
//       const cardBody = document.createElement("div");
//       const img = document.createElement("img");
//       const h4 = document.createElement("h5");
//       const p = document.createElement("p");
//       const divDispalyFlex = document.createElement("div");
//       const price = document.createElement("p");
//       const btnEdit = document.createElement("button");

//       main.style.width = "18rem";
//       h4.style.textAlign = "center";

//       main.classList.add("card", "m-3");
//       divDispalyFlex.classList.add("d-flex", "justify-content-between", "align-items-baseline");
//       btnEdit.classList.add("btn", "btn-primary");
//       cardBody.className = "card-body";
//       img.className = "card-img-top";

//       img.src = product.imageUrl;
//       h4.innerText = product.name;
//       p.innerText = product.description;
//       price.innerText = product.price + "$";
//       btnEdit.innerText = "Edit";

//       grid.append(main);
//       main.append(img, cardBody);
//       cardBody.append(h4, p, divDispalyFlex);
//       divDispalyFlex.append(price, btnEdit);
//     });
//   });
const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const a = {
  headers: {
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2NzkwNjAzMDksImV4cCI6MTY4MDI2OTkwOX0.d4QTbGcZHATHanH_5rVhS3osWFUCxFsyczVVUE7seV0",
  },
};

fetch(apiURL, a)
  .then((r) => r.json())
  .then((products) => {
    const grid = document.getElementById("crudazon-list");
    grid.firstElementChild.remove();

    products.forEach((product) => {
      console.log(product);
      const divMain = document.createElement("div");
      const cardBody = document.createElement("div");
      const img = document.createElement("img");
      const h5 = document.createElement("h5");
      const p = document.createElement("p");
      const divFlex = document.createElement("div");
      const price = document.createElement("p");
      const btnEdit = document.createElement("button");
      const details = document.createElement("a");

      divMain.style.width = "18rem";
      h5.style.textAlign = "center";

      divMain.classList.add("card", "m-3");
      divFlex.classList.add("d-flex", "justify-content-between", "align-items-baseline");
      btnEdit.classList.add("btn", "btn-primary");
      cardBody.className = "card-body";
      img.className = "card-img-top";

      img.src = product.imageUrl;
      h5.innerText = product.name;
      p.innerText = product.description;
      price.innerText = product.price + "$";
      btnEdit.innerText = "Edit";
      details.innerText = "Scopri di più";
      details.href = `./details.html?_id=${product._id}`;

      grid.append(divMain);
      divMain.append(img, cardBody);
      cardBody.append(h5, p, divFlex);
      divFlex.append(price, details, btnEdit);
    });
  });
