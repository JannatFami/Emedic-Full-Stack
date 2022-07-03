import { BiLogOut } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logout, admin, doctor } = useAuth();
  console.log(user);
  return (
    <div>
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
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
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
                </a>
                <ul class="p-2">
                  <li as={Link} to="/home">
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Medicine</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Doctors</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">
            <img
              src="https://x-tention.com/sites/default/files/2022-02/icon_umgebung_gr%C3%BCn.png"
              alt=""
              width="50px"
              height="50px"
            />
            <h2 className="ml-3">EMEDIC</h2>
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/sprd">Medicine</a>
            </li>
            <li className="dropdown">
              <label tabindex="0" class="">
                Patient
              </label>
              <ul
                tabindex="0"
                class=" menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64"
              >
                <li>
                  <a href="/doctors/chest">Chest</a>
                </li>
                <li>
                  <a href="/doctors/Medicine">Medicine</a>
                </li>
                <li>
                  <a href="/doctors/Eye">Eye</a>
                </li>
                <li>
                  <a href="/doctors/Dermatology">Dermatology</a>
                </li>
                <li>
                  <a href="/doctors/Psychaiatry">Psychaiatry</a>
                </li>
                <li>
                  <a href="/doctors/General Physician">General Physician</a>
                </li>
                <li>
                  <a href="/doctors/Diabetes">Diabetes</a>
                </li>
                <li>
                  <a href="/doctors/Neuromedicine">Neuromedicine</a>
                </li>
                <li>
                  <a href="/doctors/Gynaecology">Gynaecology</a>
                </li>
                <li>
                  <a href="/doctors/Nutritionest">Nutritionest</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {Object.keys(user).length != 0 ? (
            <div class="dropdown">
              <label tabindex="0" class="">
                <div class="avatar">
                  <div class=" animate-pulse w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </label>
              <ul
                tabindex="0"
                class="mt-3 dropdown-content menu p-2 shadow bg-base-100 w-52 ml-[-170px]"
              >
                <li>
                  <h2 for="my-modal" className="">
                    <FcBusinessman />
                    {user.displayName}
                  </h2>
                </li>
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
            <a href="/login" className="btn mr-4">
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
