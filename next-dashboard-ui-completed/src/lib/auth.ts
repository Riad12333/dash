import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import prisma from "./prisma.js";
import { User } from "next-auth";
import bcrypt from "bcrypt";

// Function to convert an object to URL-encoded form data

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@usthb.dz",
          value: "administrator",
        },
        password: { label: "Password", type: "password", value: "admin" },
        role: { type: "string" },
      },

      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        if (credentials.role == "admin") {
          const user = await prisma.admins.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (
            !user ||
            !(await bcrypt.compare(credentials.password, user.password_hash))
          ) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            randomKey: "Some random Key",
          };
        }
        return {
          id: 10,
          email: "",
          name: "",
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
