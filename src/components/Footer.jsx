

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__section">
                <picture>
                    <source srcSet="images/image-retro-pcs.avif" type="image/avif" />
                    <source srcSet="images/image-retro-pcs.webp" type="image/webp" />
                    <img className="footer__image"
                        src="images/image-retro-pcs.jpg"
                        alt="retro image"
                        width="200" 
                        height="254"  />
                </picture>
                <div className="footer__content">
                    <h3 className="footer__number">01</h3>
                    <a href="#" className="footer__title">Reviving Retro PCs</a>
                    <p className="footer__text">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="footer__section">
                <picture>
                    <source srcSet="images/image-top-laptops.avif" type="image/avif" />
                    <source srcSet="images/image-top-laptops.webp" type="image/webp" />
                    <img className="footer__image"
                        src="images/image-top-laptops.jpg"
                        alt="laptops image"
                        width="200" 
                        height="254" />
                </picture>
                <div className="footer__content">
                    <h3 className="footer__number">02</h3>
                    <a href="#" className="footer__title">Top 10 Laptops of 2022</a>
                    <p className="footer__text">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="footer__section">
                <picture>
                    <source srcSet="images/image-gaming-growth.avif" type="image/avif" />
                    <source srcSet="images/image-gaming-growth.webp" type="image/webp" />
                    <img className="footer__image"
                        src="images/image-gaming-growth.jpg"
                        alt="gaming image"
                        width="200" 
                        height="254" />
                </picture>
                <div className="footer__content">
                    <h3 className="footer__number">03</h3>
                    <a href="#" className="footer__title">The Growth of Gaming</a>
                    <p className="footer__text">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer