const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    // find all user with emails end @email.com
    // Live in street "Palmares"
    // find techs starts with "React"

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: { [Op.like]: "%@email.com" },
      },
      include: [
        {
          association: "addresses",
          attributes: [],
          where: {
            street: "Palmares",
          },
        }, //adress
        {
          association: "techs",
          required: false,
          attributes: ["name"],
          where: {
            name: {
              [Op.like]: "React%",
            },
          },
          through: { attributes: [] },
        }, // tech
      ],
    });

    return res.json(users);
  },
};
