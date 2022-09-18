import { Router } from "express";
const router = Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  console.log(name, email, "name, email");
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return res.json(user);
});

export default router;
