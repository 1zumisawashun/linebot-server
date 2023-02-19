import { PrismaClient, User, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

type CreateUser = {
  name: string;
  email: string;
};

type UpdateUser = {
  id: number;
  name: string;
};

const errorMessage =
  "There is a unique constraint violation, a new user cannot be created with this email";

export class UserService {
  constructor() {}

  async createUser(params: CreateUser): Promise<User | void> {
    const { name, email } = params;
    try {
      return prisma.user.create({
        data: {
          name,
          email,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          console.log(errorMessage);
        }
      }
    }
  }

  async getUsers(): Promise<User[]> {
    return prisma.user.findMany({
      include: { posts: true },
    });
  }

  async getUser(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateUser(params: UpdateUser): Promise<User> {
    const { name, id } = params;
    return prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  async deleteUser(id: number): Promise<User> {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
