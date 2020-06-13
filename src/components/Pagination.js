import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu container">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev" className="button is-primary is-medium">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next" className="button is-primary is-medium">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
