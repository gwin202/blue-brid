"use client"

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";


export default async function AuthButtonClient({session}: {
    session: Session | null
}){
    const supabase = createClientComponentClient()
    const router = useRouter()
    const handelSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: "http://localhost:3000/auth/v1/callback",
            },
        }); 
      }
      const handelSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
      }
      
      

      return session ? (

            <button onClick={handelSignOut}>Logout </button>
            
     
      ):(
        <button onClick={handelSignIn}>Login</button>

      )

}