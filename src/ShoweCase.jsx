import React from 'react';

const ShoweCase = (props) => {
  return (
    <div className="showcase">
      <div className="container--sm flex">
        <div className="showecase__flex">
          <div className="showecase__img-box">
            <img
              src={`${props.item.coverImage}`}
              alt="coverImage"
              className="images"
            />
          </div>
          <div className="showecase__tex-box">
            <div className="showecase__text-container">
              <div className="showecase__header--sm">
                <div className="icon--pin">{props.item.mapPin}</div>
                <div className="showecase__country">{props.item.country}</div>
                <div className="showecase__google-map">
                  <a className="links" href="https">
                    {props.item.googleView}
                  </a>
                </div>
              </div>
              <div className="showecase__text">
                <h1 className="header--lg">{props.item.header}</h1>
                <h5 className="header--date">{props.item.date}</h5>
                <p className="lead">{props.item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container--sm">
        <hr />
      </div>
    </div>
  );
};

export default ShoweCase;
