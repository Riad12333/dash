import "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    role?: string;
    randomKey?: string;
  }

  interface Session extends DefaultSession {
    user: User | null;
    expires_in: string;
    role?: string;
    error: string;
  }
}
