import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";



const AuthButton = () => {

    const { data: session } = useSession();

    useEffect(() => {
        console.log('useEffect trigger in AuthButton, session:', session)
    }, [session])

    if(session) {
        return (
            <div className='text-center'>
                <img src={session.user?.image ?? ''}
                    className="rounded-full w-10 m-auto"
                /> <br/>
                <button onClick={() => signOut()} >Sign Out</button>
                <br/>
                <button onClick={() => console.log(session)} >
                </button>
            </div>
        )
    }
    return (
        <>
            Not signed in <br/>
            <button onClick={() => signIn()} >Sign In</button>
        </>
      )
    }


    export default AuthButton