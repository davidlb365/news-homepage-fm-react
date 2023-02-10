import useNews from '../hooks/useNews'

const ButtonMobile = () => {
    const {setClicked, setOverlayMounted} = useNews()
    return (
        <button className="header__button" id="menu-button" onClick={() => {
            setOverlayMounted(true)
            setClicked(true)
        }}>
            <img src="images/icon-menu.svg" alt="menu icon" className="header__imgmenu" />
        </button>
    )
}

export default ButtonMobile