import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import Club from "../models/club.js";

const jwtSecret = process.env.JWT_SECRET;
console.log(jwtSecret);

// @desc middleware for club sign up/registration
// @route /signup
export const signUpClub = async (req, res, next) => {
  const { name, email, password, description, imageURL } = req.body;
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
      return res
        .status(400)
        .json({ message: "No club exists with this email address" });
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
      club: { id: club._id, name: club.name, email: club.email, imageURL: club.imageURL, description: club.description},
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc middleware for updating club profile
// @route /updateProfile/:id
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { name, email, description, imageURL } = req.body;

  try {
    const club = await Club.findById(id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    // Update club details
    club.name = name || club.name;
    club.email = email || club.email;
    club.description = description || club.description;
    club.imageURL = imageURL || club.imageURL;

    await club.save();

    res.status(200).json({
      message: "Profile updated successfully",
      club: {
        id: club._id,
        name: club.name,
        email: club.email,
        description: club.description,
        imageURL: club.imageURL,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc middleware for changing club password
// @route /changePassword/:id
export const changePassword = async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  try {
    const club = await Club.findById(id);
    if (!club) {
      return res.status(404).json({ message: "Club not found" });
    }

    // Check if old password is correct
    const isMatch = await bcrypt.compare(oldPassword, club.password);
    if (!isMatch) {
      return res.status(400).json({ message: "The old password is incorrect" });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    club.password = hashedNewPassword;

    await club.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
