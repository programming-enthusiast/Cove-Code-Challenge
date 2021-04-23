import React from 'react'

export default function ListingCard({ name, imageUrl, onClick }) {
  return (
    <div className="room-list__listing-card" onClick={() => onClick()}>
      <div className="room-list__listing-card__img-aspect-ratio-box">
        <img className="room-list__listing-card__image" src={imageUrl} />
      </div>
      <div className="room-list__listing-card-info-section">
        <div className="room-list__listing-card-info-section__room-name">
          {name}
        </div>
      </div>
    </div>
  )
}
