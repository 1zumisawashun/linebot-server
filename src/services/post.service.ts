import { PrismaClient, Post } from "@prisma/client";
const prisma = new PrismaClient();

type CreatePost = {
  title: string;
  content: string;
  authorId: number;
};

type UpdatePost = {
  id: number;
  title: string;
  content: string;
};

export class TodoService {
  constructor() {}

  async createPost(params: CreatePost): Promise<Post> {
    const { title, content, authorId } = params;
    return prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
  }

  async getPost(): Promise<Post[]> {
    return prisma.post.findMany();
  }

  async updatePost(params: UpdatePost): Promise<Post> {
    const { title, content, id } = params;
    return prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
  }

  async deletePost(id: number): Promise<Post> {
    return prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
