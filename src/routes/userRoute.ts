import jsonServer from "json-server";
const server = jsonServer.create();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

server.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

export default server;
