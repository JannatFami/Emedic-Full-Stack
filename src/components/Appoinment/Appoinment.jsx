import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import storage from "../../firebase/firebase.storage.config";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { format } from "date-fns";
import { Label, FileInput } from "flowbite-react";

export const Appoinment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
  }, [endDate]);

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
  }, [startDate]);

  const { user } = useAuth();
  const { pakId } = useParams();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [presUrl, setPresUrl] = useState("");
  const { register, handleSubmit } = useForm();
  const notify = () => toast.success("Submitted Successfully ");
  const serverUrl = `https://ruseable.onrender.com/doctorlist/${pakId}`;
  useEffect(() => {
    fetch(serverUrl)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  });
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = ref(storage, `/files/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPresUrl(url);
        });
      }
    );
  };
  const sendDataToServer = (data) => {
    axios.post("https://ruseable.onrender.com/users-info", data);
  };
  const onSubmit = (data) => {
    data.Name = user.displayName;
    data.Email = user.email;
    data.Doctor = appointments.name;
    data.url = presUrl;
    data.bmdc = appointments.bmdc;
    data.apdate = startDate;
    console.log(data);
    setTimeout(sendDataToServer(data), 5000);
    notify();
    setTimeout(() => {
      navigate("/my-appoinments");
    }, 1500);
  };

  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div className=" max-w-xs  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <div class="card h-[40rem] w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={appointments.img}
                  alt="doc-img"
                  className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
              </figure>
              <div class="card-body">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                  {appointments.bmdc}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                  {appointments.name}
                </h2>
                <p className="dark:text-gray-100">{appointments.speciality}</p>
                <p className="dark:text-gray-100">{appointments.degree}</p>

                <div class="card-actions justify-end">
                  <div class="badge badge-outline"> {appointments.time}</div>
                  <div class="badge badge-outline">{appointments.chember}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-12">
            <h1 class="text-5xl font-bold ml-20">Personal Inormation</h1>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
              <form
                onSubmit={handleSubmit(onSubmit)}
                novalidate=""
                action=""
                className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
              >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                  <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium"></p>
                    <p className="text-xs">
                      Please fill your personal information carefully,once
                      submit can not be reverted.
                    </p>
                  </div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                      <label for="firstname" className="text-sm">
                        Appointed Doctor Name
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        placeholder="Doctor"
                        defaultValue={appointments.name}
                        className="input w-full max-w-xs"
                        {...register("Doctor", {})}
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label for="lastname" className="text-sm">
                        Patient Name
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="Name"
                        {...register("Name", {})}
                        className="input w-full max-w-xs"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label for="email" className="text-sm">
                        Email
                      </label>
                      <input
                        id="email"
                        placeholder="Email"
                        defaultValue={user.email}
                        {...register("Email", {})}
                        className="input w-full max-w-xs"
                      />
                    </div>
                    <div className="col-span-3">
                      <label for="address" className="text-sm">
                        Patient Age
                      </label>
                      <input
                        id="address"
                        type="number"
                        placeholder="Age"
                        {...register("Age", {})}
                        className="input w-full max-w-xs"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label for="city" className="text-sm">
                        Select Date
                      </label>
                      <DatePicker
                        selected={startDate}
                        {...register("apdate", {})}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-left"
                        customInput={<ButtonInput />}
                        renderCustomHeader={({
                          date,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <div className="flex items-center justify-between px-2 py-2">
                            <span className="text-lg text-gray-700">
                              {format(date, "MMMM yyyy")}
                            </span>

                            <div className="space-x-2">
                              <button
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${
                                              prevMonthButtonDisabled &&
                                              "cursor-not-allowed opacity-50"
                                            }
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                              >
                                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                              </button>

                              <button
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                                type="button"
                                className={`
                                            ${
                                              nextMonthButtonDisabled &&
                                              "cursor-not-allowed opacity-50"
                                            }
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
                              >
                                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        )}
                      />
                    </div>

                    <div className="col-span-full sm:col-span-2">
                      <label for="state" className="text-sm">
                        Time
                      </label>
                      <input
                        id="state"
                        type="time"
                        placeholder=""
                        className="input w-full max-w-xs"
                        {...register("aptime", {})}
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label for="zip" className="text-sm">
                        Select Gender
                      </label>
                      <br />
                      <select
                        className="select w-full max-w-xs"
                        id="cars"
                        name="cars"
                        {...register("gender")}
                      >
                        <option clasName="" value="Man">
                          Man
                        </option>
                        <option value="Women">Woman</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                  <div className="space-y-2 col-span-full lg:col-span-1"></div>
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full">
                      <label for="bio" className="text-sm">
                        Problem in detail
                      </label>
                      <textarea
                        id="bio"
                        placeholder=""
                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                        {...register("detail", {})}
                      ></textarea>
                    </div>
                    <div className="col-span-full">
                      <label for="bio" className="text-sm"></label>
                      <div className="flex items-center space-x-2">
                        <div id="fileUpload">
                          <div className="mb-2 block">
                            <Label htmlFor="file" value="Upload Prescription" />
                          </div>
                          <FileInput
                            id="file"
                            type="file"
                            accept="images/*"
                            onChangeCapture={() => handleChange()}
                            helperText="Upload your previous prescription or any kind of digital document"
                          />
                        </div>
                      </div>
                      <button className="btn mt-5 w-48 btn-square btn-primary">
                        Get Appoinment
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
const ButtonInput = forwardRef(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    type="button"
    className="inline-flex justify-start w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
  >
    {format(new Date(value), "dd MMMM yyyy")}
  </button>
));
