import { Link } from "react-router-dom";

export const DoctorTypeCard = (data) => {
  const {
    _id,
    name,
    Mail,
    chember,
    degree,
    department,
    experience,
    fee,
    img,
    speciality,
    time,
  } = data.data;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <img src={img} alt="Shoes" />
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{speciality}</p>
          <p className="card-title">{department}</p>
          <div class="card-actions justify-end">
            <Link className="t-n" to={`/appointment/${_id}`}>
              <button class="btn btn-primary">Get Appoinment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
