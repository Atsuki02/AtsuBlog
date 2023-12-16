export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  posts: Post[];
  likes: Like[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface Post {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  image: string;
  category: string;
  date: Date;
  user?: User;
  userId?: number | null;
  likes: Like[];
  comments: Comment[];
}

export interface Like {
  id: number;
  post: Post;
  postId: number;
  user: User;
  userId: number;
  createdAt: Date;
}

export interface Comment {
  id: number;
  content: string;
  post: Post;
  postId: number;
  user: User;
  userId: number;
  createdAt: Date;
}

export type PostFields = {
  title: string;
  subTitle: string;
  image: File | null;
  category: string;
  content: string;
};

export type PostFormState = {
  message: string;
  errors: Record<keyof PostFields, string> | undefined;
  fieldValues: PostFields;
};
