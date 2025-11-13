import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const quickLinks = ['Vegetables', 'Fruits', 'Grains & Pulses', 'Snacks & Staples']

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h3 className="site-footer__title">GreenCart</h3>
            <p className="site-footer__description">
              Curated organic groceries delivered straight from local farms to your kitchen
              table within hours.
            </p>
            <div className="site-footer__social">
              {[FiInstagram, FiFacebook, FiTwitter, FiYoutube].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social link">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="site-footer__subtitle">Top Categories</h4>
            <ul className="site-footer__list">
              {quickLinks.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__subtitle">Support</h4>
            <ul className="site-footer__list">
              <li>
                <a href="#products">How ordering works</a>
              </li>
              <li>
                <a href="#products">Refunds & returns</a>
              </li>
              <li>
                <a href="#products">Sourcing standards</a>
              </li>
              <li>
                <a href="mailto:hello@greencart.com">Contact us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="site-footer__subtitle">Visit</h4>
            <ul className="site-footer__list">
              <li>120 Market Street, Suite 08</li>
              <li>San Francisco, CA 94105</li>
              <li>Open 7 AM – 9 PM daily</li>
              <li>
                <a href="mailto:hello@greencart.com">hello@greencart.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} GreenCart. All rights reserved.</span>
          <div className="site-footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

