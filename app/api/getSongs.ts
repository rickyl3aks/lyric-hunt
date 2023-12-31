const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.GENIUS_KEY_QUERY);

export const getQuery = async (query: string) => {
  try {
    const searches = await Client.songs.search(query);
    return { res: searches };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const getLyrics = async (query: string, endpoint: string) => {
  try {
    const searches = await Client.songs.search(query);
    const targetEndpoint = endpoint;
    let foundSong = null;
    for (const song of searches) {
      if (song.endpoint === targetEndpoint) {
        foundSong = song;
        break;
      }
    }
    if (foundSong) {
      const lyrics = await foundSong.lyrics();
      return lyrics;
    } else {
      throw new Error("Lyrics not found");
    }
  } catch (error) {
    return "😨 Oops!\nNo lyrics were found for this song.\nPlease verify your query and try again.";
  }
};
