const express = require("express");
const router = express.Router();

const Plane = require("./models/Plane");

router.get("/", async (req, res) => {
  try {
    const planes = await Plane.findAll({ order: [["id", "DESC"]] });

    res.json({ planes });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      come_from,
      come_to,
      avia_company,
      speed,
      registration_info,
      flight_distance
    } = req.body;

    const plane = {
        name,
        come_from,
        come_to,
        avia_company,
        speed,
        registration_info,
        flight_distance
    };

    const newPlane = await Plane.create(plane);

    res.json({ newPlane });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
        name,
        come_from,
        come_to,
        avia_company,
        speed,
        registration_info,
        flight_distance
    } = req.body;
    const plane = {
        name,
        come_from,
        come_to,
        avia_company,
        speed,
        registration_info,
        flight_distance
    };

    const updatedPlane = await Plane.update(plane, {
      where: { id }
    });

    res.json({ updatedPlane });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Plane.destroy({
      where: { id }
    });

    res.json({ message: "Panel was deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
