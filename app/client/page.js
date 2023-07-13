"use client";

import {useSession} from "next-auth/react"
import {redirect} from "next/navigation"

const page = () => {

 const {data:session} = useSession({
    required: true,
    onUnauthenticated(){
        redirect("/signin?callbackUrl=/client")
    },
 })

  return (
    <div>
   <h1>
    
    Client page{" "}

   </h1>
   {session?.user?.name}
   </div>
  )
}

export default page