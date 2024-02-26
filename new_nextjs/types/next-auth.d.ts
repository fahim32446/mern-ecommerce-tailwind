import 'next-auth';
declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      createdAt: string;
      updatedAt: string;
      __v: 0;
      accessToken: string;
    };
  }
}
