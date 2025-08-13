import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'Resume Analyzer | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="modern-auth-page">
            <div className="modern-auth-card">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1>Welcome to Resume Analyzer</h1>
                    {auth.isAuthenticated ? (
                        <h2>You are currently signed in</h2>
                    ) : (
                        <h2>Sign in to access your resume analysis dashboard</h2>
                    )}
                </div>
                <div>
                    {isLoading ? (
                        <button className="modern-auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <div className="flex flex-col gap-4">
                                    <button className="modern-auth-button" onClick={auth.signOut}>
                                        <p>Sign Out</p>
                                    </button>
                                    <p className="modern-auth-footer">
                                        Click sign out to securely log out of your account
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <button className="modern-auth-button" onClick={auth.signIn}>
                                        <p>Sign In with Puter</p>
                                    </button>
                                    <p className="modern-auth-footer">
                                        Secure authentication powered by Puter.js
                                    </p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Auth
