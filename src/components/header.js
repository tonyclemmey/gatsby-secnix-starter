import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ReactNavbar from "./navbar"

const Header = ({ siteTitle }) => (
<section>
  <ReactNavbar/>
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
      marginTop: `56px`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
</section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
