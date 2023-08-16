const getArtist = async (query: string, endpoint: string) => {
  try {
    const res = await fetch(
      `${process.env.GENIUS_QUERY_URL}${query}&access_token=${process.env.GENIUS_KEY_QUERY}`
    );

    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }
    const targetEndpoint = endpoint;
    let foundArtist = null;
    const data = await res.json();
    const {
      response: { hits },
    } = data;
    for (const song of hits) {
      if (song.result.api_path === targetEndpoint) {
        foundArtist = song;
        break;
      }
    }
    if (foundArtist) {
      return foundArtist;
    } else {
      return "Artist not found, please try again with another query";
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export default getArtist;
