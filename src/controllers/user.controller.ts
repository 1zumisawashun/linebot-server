import { RequestHandler } from "express";
import { UserService } from "../services/user.service";

export const createUser: RequestHandler = async (req, res) => {
  const { name, email } = req.body;
  const userService = new UserService();
  try {
    const result = await userService.createUser({ name, email });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getUsers: RequestHandler = async (req, res) => {
  const userService = new UserService();
  try {
    const result = await userService.getUsers();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const userService = new UserService();
  try {
    const result = await userService.getUser(id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateUser: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const { name } = req.body;
  const userService = new UserService();
  try {
    const result = await userService.updateUser({ name, id });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const userService = new UserService();
  try {
    const result = await userService.deleteUser(id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};
