const products = [
    {
      name: "Leche",
      price: 75000,
      amount: 2,
      id: 1,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/212749-200-200?v=637814234744770000&width=200&height=200&aspect=true",
    },
    {
      name: "Cereal",
      price: 85300,
      amount: 3,
      id: 2,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/224943-200-200?v=637816534862230000&width=200&height=200&aspect=true",
    },
    {
      name: "Huevos",
      price: 75000,
      amount: 12,
      id: 3,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/213201-200-200?v=637814237437900000&width=200&height=200&aspect=true",
    },
    {
      name: "Carne",
      price: 85300,
      amount: 21,
      id: 4,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/203441-200-200?v=637814194526200000&width=200&height=200&aspect=true",
    },
    {
      name: "Queso",
      price: 75000,
      amount: 8,
      id: 5,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/198336-200-200?v=637814137437130000&width=200&height=200&aspect=true",
    },
    {
      name: "Arroz",
      price: 85300,
      amount: 9,
      id: 6,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/284381-200-200?v=637836567402130000&width=200&height=200&aspect=true",
    },
    {
      name: "Frijoles",
      price: 85300,
      amount: 32,
      id: 7,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/201387-200-200?v=637814152619330000&width=200&height=200&aspect=true",
    },
    {
      name: "Lentejas",
      price: 175000,
      amount: 42,
      id: 8,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/201385-200-200?v=637814152606970000&width=200&height=200&aspect=true",
    },
    {
      name: "Avena",
      price: 85300,
      amount: 56,
      id: 9,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/220934-200-200?v=637816524820800000&width=200&height=200&aspect=true",
    },
    {
      name: "Pollo",
      price: 375000,
      amount: 23,
      id: 10,
      urlImage:
        "https://jumbocolombiaio.vtexassets.com/arquivos/ids/221522-200-200?v=637816526229070000&width=200&height=200&aspect=true",
    }
];

export const getProducts = async () => {
  // const apiUrl = "https://cjeid33qj4.api.quickmocker.com";
  // try {
  //   const response = await fetch(apiUrl);
  //   const products = await response.json();
  //   return products.products;
  // } catch (error) {
  //   throw new Error("Request Error on get products");
  // }
  return products;
};
