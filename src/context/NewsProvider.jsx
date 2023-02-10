import { createContext, useState } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [clicked, setClicked] = useState(false)
    const [overlayMounted, setOverlayMounted] = useState(false)
    return (
        <NewsContext.Provider 
            value={{
                clicked,
                setClicked,
                overlayMounted,
                setOverlayMounted
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext