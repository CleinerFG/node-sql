const User = require("../models/User");
const Address = require("../models/Address");

module.exports = {
  async index(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: { association: "addresses" },
    });

    if (!user) {
      return res.status.json({ error: "User not found" });
    }
    return res.json(user);
  },

  async store(req, res) {
    const { userId } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status.json({ error: "User not found" });
    }

    const address = await Address.create({ zipcode, street, number, userId });

    return res.json(address);
  },
};
