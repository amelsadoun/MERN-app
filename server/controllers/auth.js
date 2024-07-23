import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import Club from "../models/club.js";

const jwtSecret = process.env.JWT_SECRET;
console.log(jwtSecret);

// @desc middleware for club sign up/registration
// @route /signup
export const signUpClub = async (req, res, next) => {
  const { name, email, password, description, imageURL } =
    req.body;
  // console.log(req.body);
  try {
    // Check if club already exists
    const existingClub = await Club.findOne({ $or: [{ email }, { name }] });
    if (existingClub) {
      return res.status(400).json({ message: "Club already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new Club
    const newClub = new Club({
      name,
      email,
      description,
      password: hashedPassword,
      imageURL,
    });
    await newClub.save();

    // Create JWT token
    const token = jwt.sign({ id: newClub._id }, jwtSecret, { expiresIn: "1h" });

    res.status(201).json({
      token,
      club: {
        id: newClub._id,
        name: newClub.name,
        email: newClub.email,
        description: newClub.description,
        imageURL: newClub.imageURL,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc middleware for club login
// @route /login
export const loginClub = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body)
  try {
    const club = await Club.findOne({ email });
    //check if club exists
    if (!club) {
      return res.status(400).json({ message: "No club exists with this email address" });
    }

    //check if password is correct
    const isMatch = await bcrypt.compare(password, club.password);
    if (!isMatch) {
      return res.status(400).json({ message: "The password is incorrect" });
    }
    // Create JWT token
    const token = jwt.sign({ id: club._id }, jwtSecret, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      club: { id: club._id, name: club.name, email: club.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
