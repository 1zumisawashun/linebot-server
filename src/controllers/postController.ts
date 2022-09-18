import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient({ rejectOnNotFound: true });
import { RequestHandler } from "express";

export const createPost: RequestHandler = async (req, res) => {
  const { title, content, authorId } = req.body;
  console.log(title, content, authorId, "title, content, authorId ");
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return res.json(post);
  } catch (e) {
    console.log("エラーです。");
    return res.status(400).json(e);
  }
};

// export const getTodos: RequestHandler = (req, res) => {
//   res.json({ todos: TODOS });
// };

// export const updateTodo: RequestHandler = (req, res) => {
//   const todoId = req.params.id;
//   const updateText = (req.body as { text: string }).text;

//   const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
//   if (todoIndex < 0) {
//     throw new Error("対象のTODOが見つかりませんでした。");
//   }
//   TODOS[todoIndex] = new Todo(todoId, updateText);

//   res.json({ message: "TODOを更新しました。", updatedTodo: TODOS[todoIndex] });
// };

// export const deleteTodo: RequestHandler = (req, res) => {
//   const todoId = req.params.id;
//   const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

//   if (todoIndex < 0) {
//     throw new Error("対象のTODOが見つかりませんでした。");
//   }

//   TODOS.splice(todoIndex, 1);
//   res.json({ message: "TODOを削除しました。" });
// };
