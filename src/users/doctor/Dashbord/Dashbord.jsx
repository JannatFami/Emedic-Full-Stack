/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Dashbord = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const hndlogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className=" bg-gray-50 mt-20">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <div className="flex  items-center  space-x-4">
                  <img
                    src={
                      user.img ||
                      "https://source.unsplash.com/100x100/?portrait"
                    }
                    alt=""
                    className="w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">
                      {user.displayName}
                    </h2>
                    <span className="flex items-center space-x-1">
                      <a
                        alt="this is"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-400"
                      >
                        View profile
                      </a>
                    </span>
                  </div>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="doctor/dashbord/appointed-patient"
                icon={HiChartPie}
              >
                Appointed Patient
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Preview
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Preview
              </Sidebar.Item>
              <Sidebar.Item onClick={hndlogout} href="#" icon={BiBuoy}>
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};
