import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const DEMO_NEXTAUTH_SECRET = "demo-secret-very-long-random-string";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const client = await clientPromise;
        const db = client.db("Blogs");
        const admin = await db.collection("admin_auth").findOne({
          username: credentials?.username,
        });

        if (!admin) return null;

        const valid = await bcrypt.compare(
          credentials!.password,
          admin.password
        );
        if (!valid) return null;

        return {
          id: admin._id.toString(),
          role: admin.role,
        } as User;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
  secret: DEMO_NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id!;
        session.user.role = token.role!;
      }
      return session;
    },
    async redirect() {
      return "/blogs";
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
