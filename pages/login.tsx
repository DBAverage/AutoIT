import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();

    if (session) {
        return (
          <div>
                <p className="text-lg text-secondary">                    
                    Welcome, {session.user.name}!
            </p>
            <button className="btn" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        );
    } else {
        return (
          <div>
            <p className="text-lg text-secondary">You are not signed in.</p>
            <button className="btn" onClick={() => signIn()}>
              Sign in
            </button>
          </div>
        );
    }
}
DbPloy