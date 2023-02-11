import useNews from "../hooks/useNews"


const Overlay = () => {
    const {setClicked, overlayMounted, setOverlayMounted} = useNews()

    const handleAnimationEnd = () => {
        if(!overlayMounted) setClicked(false)
    }
    return (
        <div className={`overlay ${overlayMounted ? 'fadeinOpacity' : 'fadeoutOpacity'}`}>
            <div className={`popup__div ${overlayMounted ? 'fadein' : 'fadeout'}`} id="popup-div" onAnimationEnd={handleAnimationEnd}>
                <div className="popup__close">
                    <button className="popup__button" id="popup-button" onClick={() => {
                        setOverlayMounted(false)
                    }}>
                        <img src="images/icon-menu-close.svg" alt="close image" className="popup__image" />
                    </button>
                </div>
                <nav className="popup__navigation">
                    <a href="#" className="popup__link">Home</a>
                    <a href="#" className="popup__link">New</a>
                    <a href="#" className="popup__link">Popular</a>
                    <a href="#" className="popup__link">Trending</a>
                    <a href="#" className="popup__link">Categories</a>
                </nav>
            </div>
        </div>
    )
}

export default Overlay