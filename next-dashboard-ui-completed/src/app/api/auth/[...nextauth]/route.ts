import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import prisma from "../../../../lib/prisma.js";
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
          type: "email",
        },
        password: { type: "password" },
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
          // console.log("user 00000: ", user);
          if (!user) return null;

          const passwordHash = await bcrypt.compare(
            credentials.password,
            user.password_hash
          );
          if (!passwordHash) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: credentials.role,
          };
        }
        if (credentials.role == "student") {
          const user = await prisma.students.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // console.log("user : ", user);
          if (!user) return null;

          const passwordHash = await bcrypt.compare(
            credentials.password,
            user.password_hash
          );
          if (!passwordHash) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: credentials.role,
          };
        }
        if (credentials.role == "teacher") {
          const user = await prisma.professors.findUnique({
            where: {
              email: credentials.email,
            },
          });
          // console.log("user : ", user);

          if (!user) return null;

          const passwordHash = await bcrypt.compare(
            credentials.password,
            user.password_hash
          );
          if (!passwordHash) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: credentials.role,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session: ({ session, token }) => {
      // console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role, // ✅ ADD THIS
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      //   console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
          role: u.role,
        };
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
