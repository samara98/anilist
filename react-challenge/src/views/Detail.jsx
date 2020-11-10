import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Detail.scss';

import Loader from '../components/common/Loader';
import { clearDetailed, getDetailed } from '../stores/actions/animeAction';

function Detail(props) {
  const {
    match: { params },
  } = props;

  const dispatch = useDispatch();

  const animeDetailed = useSelector((state) => state.anime.detailed);

  useEffect(
    () => {
      dispatch(getDetailed({ ...params }));
      return () => {
        dispatch(clearDetailed());
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="page-content">
      {!animeDetailed.title ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="detail">
          <h1 className="detail--title">
            {animeDetailed.title}
            <span className="detail--title--type">{animeDetailed.type}</span>
          </h1>
          <div className="detail--main-content">
            <img
              src={animeDetailed.image_url}
              alt={`${animeDetailed.title} poster`}
              className="media-poster"
            />
            <div className="detail--main-content--synopsis">
              <div>
                <strong>Synopsis:</strong>
                <span className="detail--main-content--synopsis--content">
                  {animeDetailed.synopsis}
                </span>
              </div>
              <div className="detail--main-content--genres">
                <strong>Genres: </strong>
                {animeDetailed.genres.map((genre) => (
                  <span key={genre.name} className="detail--main-content--genre">
                    {genre.name},
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="detail--secondary-content">
            {params.type === 'anime' && (
              <div className="trailer--container">
                <div className="trailer--title">trailer:</div>
                <div
                  className="trailer--content"
                  style={{ overflow: 'hidden', position: 'relative' }}
                >
                  <iframe
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    height="480"
                    itemType="text/html"
                    src={animeDetailed.trailer_url}
                    title={animeDetailed.title}
                  ></iframe>
                </div>
              </div>
            )}

            {/* <div>
              {params.type === 'anime' && (
                <div>
                  <strong>Release/end date:</strong>
                  {animeDetailed.aired.string}
                </div>
              )}
              <div>
                <strong>Status:</strong>
                {animeDetailed.airing ? 'Airing' : 'Released'}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
