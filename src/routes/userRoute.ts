import { Router } from "express";
const router = Router();

import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient({ rejectOnNotFound: true });
/**
 * findFirst
 * upsert
 * createMany
 */

const errorMessage =
  "There is a unique constraint violation, a new user cannot be created with this email";

router.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { Posts: true },
  });
  return res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const id = +req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return res.json(user);
});

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return res.json(user);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log(errorMessage);
      }
    }
    return res.status(400).json(error);
  }
});

router.put("/users/:id", async (req, res) => {
  const id = +req.params.id;
  const { name } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  const id = +req.params.id;

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

export default router;
