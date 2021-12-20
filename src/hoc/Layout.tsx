import React from "react"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"

type Props = {
    children : JSX.Element
}

export const Layout:React.FC<Props> = ({children}:Props) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}