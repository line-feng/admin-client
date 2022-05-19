export interface fromNorm {
  username: string | null;
  password: string | null;
}

//从fromNorm中取出 username 和 password
export type loginNorm = Pick<fromNorm, "username" | "password">;
