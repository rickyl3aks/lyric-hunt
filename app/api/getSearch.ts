const getQuery = async (query: string) => {
  try {
    const res = await fetch(
      `${process.env.GENIUS_QUERY_URL}${query}&access_token=${process.env.GENIUS_KEY_QUERY}`
    );

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }

    const data = await res.json();
    const {
      response: { hits },
    } = data;
    return { data: hits };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export default getQuery;
