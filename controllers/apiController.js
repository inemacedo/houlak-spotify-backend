const axios = require("axios");

async function getToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const serialize = function (obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  };

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    serialize({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      },
    },
  );
  return response.data.access_token;
}

const getArtistId = async (token, artistName) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=artist:${artistName}&type=artist`,
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );

  return response.data.artists.items[0].id;
};

const getAlbums = async (req, res) => {
  try {
    const token = await getToken();
    const artistId = await getArtistId(token, req.query.artistName);
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res.json({ albums: response.data.items });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
};

module.exports = {
  getAlbums,
};
