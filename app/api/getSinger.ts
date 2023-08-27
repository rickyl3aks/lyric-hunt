const Genius = require("genius-lyrics");
const Client = new Genius.Client(process.env.GENIUS_KEY_QUERY);

export const getSinger = async (number: number) => {
  try {
    const searches = await Client.artists.get(number);
    return searches;
  } catch (error) {
    return "😨 Oops!\nNo Artist were found.\nPlease verify your query and try again.";
  }
};
