import React from 'react';

function Card(props) {
  const {data} = props;
  let preview = data.about_preview.replace(/&nbsp;/g, " ");
  console.log(data)
  return (
    <div className="card card-detail">
      <div className="card-body">
        <div className="row">
          <div className="col-4 text-center">
            <img
              className="profile-picture"
              src={data.photo.url}
              alt={data.name}
            />
          </div>
          <div className="col-8">
            <div className="m-2">
              <b>{data.name}</b>
            </div>
            <div className="m-2">
              <p>
                <small>
                  {data.hospital[0].name} - {data.overview}
                </small>
              </p>
            </div>
            <div className="m-2">
              <p>{preview.substring(0, 100)}..</p>
            </div>
            <div className="m-2">
              <p
                className="text-end text-danger

"
              >
                <b>{data.price.formatted}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;