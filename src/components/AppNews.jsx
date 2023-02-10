

import useNews from "../hooks/useNews"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import Overlay from "./Overlay"

const AppNews = () => {
    const {clicked} = useNews()
    return (
        <>
            <Header />
            <Main />
            <Footer />
            {clicked && <Overlay />}
        </>
    )
}

export default AppNews