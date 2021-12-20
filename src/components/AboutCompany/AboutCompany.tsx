import React from "react"
import { AboutUs } from "./AboutUs/AboutUs"
import { FeedBack } from "./FeedBack/FeedBack"

export const AboutCompany = ():JSX.Element => {
    return (
        <React.Fragment>
            <FeedBack />
            <AboutUs />
        </React.Fragment>
    )
}