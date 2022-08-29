import { connectStorageEmulator } from "firebase/storage";
import { BiLogOut } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logout, admin, doctor } = useAuth();

  return (
    <div className="fixed w-full z-50">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Item 1</Link>
              </li>
              <li tabindex="0">
                <Link to="/home" class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul class="p-2">
                  <li as={Link} to="/home">
                    <Link to="home">Home</Link>
                  </li>
                  <li>
                    <Link to="medicine">Medicine</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="doctorlist">Doctors</Link>
              </li>
            </ul>
          </div>

          <Link to="/home" class="btn btn-ghost normal-case text-xl">
            <img
              src="https://x-tention.com/sites/default/files/2022-02/icon_umgebung_gr%C3%BCn.png"
              alt=""
              width="50px"
              height="50px"
            />
            <h2 className="ml-3">EMEDIC</h2>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/sprd">Medicine</Link>
            </li>
            <li className="dropdown">
              <label tabindex="0" class="">
                Doctors
              </label>
              <ul
                tabindex="0"
                class=" menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64"
              >
                <li>
                  <Link to="/doctors/Chest">Chest</Link>
                </li>
                <li>
                  <Link to="/doctors/Medicine">Medicine</Link>
                </li>
                <li>
                  <Link to="/doctors/Eye">Eye</Link>
                </li>
                <li>
                  <Link to="/doctors/Dermatology">Dermatology</Link>
                </li>
                <li>
                  <Link to="/doctors/Psychiatry">Psychaiatry</Link>
                </li>
                <li>
                  <Link to="/doctors/General Physician">General Physician</Link>
                </li>
                <li>
                  <Link to="/doctors/Diabetes">Diabetes</Link>
                </li>
                <li>
                  <Link to="/doctors/Neuromedicine">Neuromedicine</Link>
                </li>
                <li>
                  <Link to="/doctors/Gynaecology">Gynaecology</Link>
                </li>
                <li>
                  <Link to="/doctors/Nutritionest">Nutritionest</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/login">Contact us</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {Object.keys(user).length !== 0 ? (
            <div class="dropdown">
              <label tabindex="0" class="">
                <div class="avatar">
                  <div class=" animate-pulse w-10 rounded-full">
                    <img src={user.photoURL} alt="profile" />
                  </div>
                </div>
              </label>
              <ul
                tabindex="0"
                class="mt-3 dropdown-content menu p-2 shadow bg-base-100 w-72 ml-[-250px]"
              >
                <li>
                  <h2 for="my-modal" className="">
                    <FcBusinessman />
                    {user.displayName}
                  </h2>
                </li>

                {Object.keys(admin).length !== 0 ? (
                  <>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        Add Docotrs
                      </h2>
                    </li>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        Manage Doctor
                      </h2>
                    </li>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        Manage Admin
                      </h2>
                    </li>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        Patient Details
                      </h2>
                    </li>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        User Profile
                      </h2>
                    </li>
                  </>
                ) : null}
                {Object.keys(doctor).length !== 0 ? (
                  <>
                    <li>
                      <Link to="doctor/dashbord">
                        <h2 for="my-modal" className="">
                          <FcBusinessman /> Dashbord
                        </h2>
                      </Link>
                    </li>
                  </>
                ) : null}
                {Object.keys(doctor).length === 0 &&
                Object.keys(admin).length === 0 ? (
                  <>
                    <li>
                      <Link to="my-appoinments">
                        <h2 for="my-modal" className="">
                          <FcBusinessman />
                          My Appoinment
                        </h2>
                      </Link>
                    </li>
                    <li>
                      <h2 for="my-modal" className="">
                        <FcBusinessman />
                        My Prescription
                      </h2>
                    </li>
                  </>
                ) : null}
                <li>
                  <label
                    for="my-modal"
                    className="text-rose-600 modal-button"
                    onClick={() => logout()}
                  >
                    <BiLogOut />
                    Logout
                  </label>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn mr-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
