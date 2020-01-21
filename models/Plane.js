const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Plane = sequelize.define("plane", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  come_from: {
    type: DataTypes.STRING
  },
  come_to: {
      type: DataTypes.STRING
  },
  avia_company: {
      type: DataTypes.STRING
  },
  speed: {
    type: DataTypes.INTEGER
  },
  registration_info: {
      type: DataTypes.STRING
  },
  flight_distance: {
    type: DataTypes.INTEGER
  }
});

module.exports = Plane;

// CREATE TABLE `plane` (
//     `id` int(11) NOT NULL,
//     `name` varchar(200) NOT NULL,
//     `come_from` varchar(200) NOT NULL,
//     `come_to` varchar(200) NOT NULL,
//     `avia_company` varchar(200) NOT NULL,
//     `speed` int(11) NOT NULL,
//     `registration_info` varchar(200) NOT NULL,
//     `flight_distance` int(11) NOT NULL,
// );
//
// ALTER TABLE `plane` ADD PRIMARY KEY (`id`);