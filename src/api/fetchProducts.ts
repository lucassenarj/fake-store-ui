const api = process.env.REACT_APP_API_PATH;

async function fetchProducts() {
  const res = await fetch(`${api}/products`);

  if(!res.ok) {
    throw new Error("Error while fetching list of products");
  }

  return res.json();
}

export default fetchProducts;

