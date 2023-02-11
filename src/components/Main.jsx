

const Main = () => {
    return (
        <main>
            <div className="grid" >
                <picture className="grid__picture">
                    <source media="(max-width: 767px)" srcSet="images/image-web-3-mobile.avif" width="686" height="600" type="image/avif" />
                    <source media="(min-width: 768px)" srcSet="images/image-web-3-desktop.avif" width="1460" height="600" type="image/avif" />
                    <source media="(max-width: 767px)" srcSet="images/image-web-3-mobile.webp" width="686" height="600"  type="image/webp" />
                    <source media="(min-width: 768px)" srcSet="images/image-web-3-desktop.webp" width="1460" height="600"  type="image/webp" />
                    <source media="(min-width: 768px)" srcSet="images/image-web-3-desktop.jpg" width="1460" height="600" />
                    <img className="grid__image"
                        src="images/image-web-3-mobile.jpg"
                        alt="image web 3"
                        width="686"
                        height="600" />
                </picture>
                <h2 className="grid__title">The Bright Future of Web 3.0?</h2>
                <div className="grid__more">
                    <p className="grid__text">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <a href="#" className="grid__link">READ MORE</a>
                </div>
                <div className="new">
                    <h3 className="new__title">New</h3>
                    <div className="section">
                        <a href="#" className="section__title">Hydrogen VS Electric Cars</a>
                        <p className="section__text">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="section">
                        <a href="#" className="section__title">The Downsides of AI Artistry</a>
                        <p className="section__text">What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="section">
                        <a href="#" className="section__title">Is VC Funding Drying Up?</a>
                        <p className="section__text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main