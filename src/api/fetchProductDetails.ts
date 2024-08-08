type QueryFunction = {
  queryKey: Array<string | undefined>;
}

const api = process.env.REACT_APP_API_PATH;

async function fetchProductDetails({ queryKey }: QueryFunction) {
  const id = queryKey ? queryKey[1] : "";

  const res = await fetch(`${api}/products/${id}`);

  if(!res.ok) {
    throw new Error("Error while fetching list of products");
  }

  return res.json();
};

export default fetchProductDetails;

