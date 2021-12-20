import React from "react"
import { BottomHeader } from "./BottomHeader/BottomHeader"
import { MediumHeader } from "./MeduimHeader/MediumHeader"
import { TopHeader } from "./TopHeader/TopHeader"

export const Header = ():JSX.Element => {
    return (
        <React.Fragment>
            <TopHeader />
            <MediumHeader />
            <BottomHeader />
        </React.Fragment>
    )
}