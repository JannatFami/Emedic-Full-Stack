/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const MyAppointmentCard = (props) => {
  const { _id, Doctor, Name, Email, apdate, aptime, detail, apstatus, url } =
    props.data;

  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to cancel appointment ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/users-info/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <div className="rounded-2xl mt-10 overflow-hidden">
      <div className="w-[50rem]">
        <div class=" min-h-6 bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={url || "https://placeimg.com/400/225/arch"}
              class="w-52 h-52 rounded shadow-2xl"
              alt="a"
            />
            <div>
              <h1 class="text-2xl font-bold">Appointed Doctor : {Doctor}</h1>
              <p className="text-xl font-mono">
                Patient Name :<button className="">{Name} </button>
              </p>
              <p>Patient Contact : {Email}</p>
              <p>Appointed Date : {apdate}</p>
              <p>Appointed Time : {aptime}</p>
              <p class="py-6">{detail}</p>
              <button onClick={() => handleDelete(_id)} class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointmentCard;
