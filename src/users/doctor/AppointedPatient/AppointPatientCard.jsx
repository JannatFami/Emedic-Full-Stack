/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AppointPatientCard = (props) => {
  const { _id, Doctor, Name, Email, apdate, aptime, detail, apstatus, url } =
    props.props;
  return (
    <div className="rounded-2xl">
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
                Patient Name :<button className="btn">{Name} </button>
              </p>
              <p>Patient Contact : {Email}</p>
              <p>Appointed Date : {apdate}</p>
              <p>Appointed Time : {aptime}</p>
              <p class="py-6">{detail}</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointPatientCard;
