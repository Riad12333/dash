import "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    role?: string;
    randomKey?: string;
    section_id?: number;
  }

  interface Session extends DefaultSession {
    user: User | null;
    expires_in: string;
    role?: string;
    error: string;
  }
}
