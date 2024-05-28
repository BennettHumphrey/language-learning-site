import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
require('dotenv').config()

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    })
  ]
};

export const handler = NextAuth(authOptions) as never; //Yes, I realize this is a crime.

export { handler as GET, handler as POST };