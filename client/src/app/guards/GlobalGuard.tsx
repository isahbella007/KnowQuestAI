import { ReactNode } from "react"

type Props ={ 
    children: ReactNode
}

export default function GlobalGuard({children}: Props){ 
    console.log('this is a guard to handle redirect and other things ')
    return <>{children}</>
}