const axios = require("axios");

// const getIp = async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.ipify.org/?format=json`, {});

//     return res.json(response.data);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ status: 500, msg: "Server error" });
//   }
// };

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const created = await User.create({ ...req.body });
    return res.json({ status: 200, msg: "Ok" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error" });
  }
}

module.exports = {
  getIp,
  store,
};
