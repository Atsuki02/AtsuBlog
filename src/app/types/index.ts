export interface User {
  id: string;
  email: string;
  emailVerified?: string;
  image?: string;
  name: string;
  password: string;
  posts: Post[];
  likes: Like[];
  comments: Comment[];
  accounts: Account[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
}

export interface Post {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  image: string;
  category: string;
  date: Date;
  user?: User;
  userId?: string | null;
  likes: Like[];
  comments: Comment[];
}

export interface Like {
  id: string;
  post: Post;
  postId: string;
  user: User;
  userId: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  post: Post;
  postId: string;
  user: User;
  userId: string;
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

export type SigninFields = {
  email: string;
  password: string;
  rememberMe: string;
};

export type SigninFormState = {
  message: string;
  errors: Record<keyof SigninFields, string> | undefined;
  fieldValues: SigninFields;
};

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};
