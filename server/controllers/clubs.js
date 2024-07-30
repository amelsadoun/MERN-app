import Club from "../models/club.js";

// @desc get club info
// @route /clubs/:id
export const getClub = async (req, res) => {
  const id = req.params.id;
  try {
    const club = await Club.findOne({ _id: id });
    if (club) {
      // ana hiya cyber security
      club.password = "El walo";
    }
    res.status(200).json(club);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
