import { useEffect } from "react"

export const Contacts=()=>{


    useEffect(()=>{
        const eh=setInterval(()=>{
            console.log("Shiva_Codes");
        },1000)

        console.log("Component Timer Set")


        return()=>{
            clearInterval(eh);

            console.log("component Cleared")
        }

    },[])

    return(

        <div>
            <h1>
                Contact us at 6307665983
            </h1>
        </div>

    )
}