import React from 'react'
import { Link } from 'react-router'

const Card = ({title,desc,source,url,image}) => {
  return (
    <>
        <div className="card mt-3">
            <img src={image} className="card-img-top" height='180px' alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,60)}...</h5>
                <p className="card-text">{desc.slice(0,69)}...</p>
                <h6 className="card-text font-bold">{source}</h6>
                <Link to={url} className="btn btn-primary btn-sm " target='_blank'>View More</Link>
            </div>
        </div>
    </>
  )
}

export default Card
