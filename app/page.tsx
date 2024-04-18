"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthenticationComponent() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn("github");
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="text-center mt-10">
      <h1>User Authentication</h1>
      {session ? (
        <div>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
          <button onClick={handleSignIn}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  );
}
