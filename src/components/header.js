import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SmallLogo from "./small-logo"
import tw from 'tailwind.macro'

import { css } from 'emotion';
const nav = css(tw`font-sans text-center flex flex-row-reverse justify-between my-4 mx-auto container overflow-hidden`);
const logoLink = css(tw`hidden md:block`);
const Header = ({ siteTitle }) => (
  <header>
    <nav
      className={nav}
    >
      <a
        href="https://secure.cardknox.com/kolleltiferesavrohom"
        className={logoLink}
      >
        <SmallLogo/>
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
