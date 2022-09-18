// import { PrismaClient, Prisma } from "@prisma/client";
// const prisma = new PrismaClient();

// import { RequestHandler } from "express";

// export const createPost: RequestHandler = async (req, res) => {
//   const { title, content, authorId } = req.body;
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         authorId,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// };

// export const getPost: RequestHandler = async (req, res) => {
//   const posts = await prisma.post.findMany();
//   return res.json(posts);
// };

// export const updatePost: RequestHandler = async (req, res) => {
//   const id = +req.params.id;
//   const { title, content } = req.body;
//   try {
//     const post = await prisma.post.update({
//       where: {
//         id,
//       },
//       data: {
//         title,
//         content,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// };

// export const deletePost: RequestHandler = async (req, res) => {
//   const id = +req.params.id;
//   try {
//     const post = await prisma.post.delete({
//       where: {
//         id,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// };
