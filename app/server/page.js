import { redirect} from "next/navigation"
import { getServerSession} from "next-auth"
import {authOptions} from "../api/auth/[...nextauth]/route"


const Serverpage = async () => {

    const session = await getServerSession(authOptions)
   
   if(!session){
    redirect('/signin?callbackUrl=/server')
   }
   

  return (
    <div>
        Esta pagina tem segurança {" "}
        <p>Server Session</p>
        {session?.user?.name}
    </div>
  )
}

export default Serverpage