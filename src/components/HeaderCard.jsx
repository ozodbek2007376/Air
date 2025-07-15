import React from "react";

export default function HeaderCard({ imgName, sarlavha, nom }) {
  return (
    <div className={`row align-items-center mb-5 ${nom}`}>
      <div className="col-md-6">
        <img src={imgName} alt="" className="img-rounded" />
      </div>
      <div className="col-md-6 text-box">
        <h5>{sarlavha}</h5>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors.
        </p>
      </div>
    </div>
  );
}
