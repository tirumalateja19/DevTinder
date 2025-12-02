import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, gender, about, photoUrl, skills, age } = user;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {firstName + " " + lastName + ", " + age}
        </h2>
        {gender && <p>{gender}</p>}
        {skills && <p>{skills}</p>}
        <p>{about}</p>
        <div className="card-actions justify-between mt-3">
          <button className="btn btn-sm btn-secondary">Ignore</button>
          <button className="btn btn-sm btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
