import { Request, Response } from "express";

import { User } from "../models/User.js";

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();

    res.json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);

      res.status(500).json({
        message: "Failed to create a User.",
      });
    }
  }
}
