/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function AdminDashboardComponent(props: any) {
  const [toggleSelected, setToggleSelected] = useState();

  useEffect(() => {
    setToggleSelected(props.highlighted);
  }, [props]);

  return (
    <div className="flex flex-row min-h-screen ">
      <div className="flex flex-col items-center w-20 min-h-screen md:w-56 bg-slate-600">
        <div className="flex flex-col items-center py-6 text-base font-extrabold">
          <Link href={"/dashboard"}>
            <a>
              <img
                className="hidden md:flex md:w-auto md:h-16"
                src="https://cdn.shopify.com/s/files/1/1225/6296/files/logo-transparent_180x.png?v=1530418234"
                alt=""
              />
            </a>
          </Link>
        </div>

        <div
          className={
            toggleSelected === "Dashboard"
              ? " flex flex-col items-center justify-center py-3 mt-6 text-base rounded-lg w-4/5 bg-[#388087] hover:cursor-pointer hover:rounded-md"
              : "flex flex-col items-center justify-center py-3 mt-6 text-base rounded-sm w-4/5 hover:cursor-pointer"
          }
        >
          <Link href={"/dashboard"}>
            <div className="flex flex-row justify-center w-3/5 md:justify-start">
              <Icon
                className="w-auto h-6 text-blue-300 group-hover:text-white"
                icon="bxs:dashboard"
              />
              <span className="hidden md:pl-2 md:text-bold md:flex ">
                Dashboard
              </span>
            </div>
          </Link>
        </div>

        <div
          className={
            toggleSelected === "Products"
              ? " flex flex-col items-center justify-center py-3 text-base rounded-lg w-4/5 bg-[#388087] hover:cursor-pointer hover:rounded-md"
              : "flex flex-col items-center justify-center py-3 text-base rounded-sm w-4/5 hover:cursor-pointer"
          }
        >
          <Link href={"/dashboard/products"}>
            <div className="flex flex-row justify-center w-3/5 md:justify-start">
              <Icon
                className="w-auto h-6 text-blue-300 group-hover:text-white"
                icon="icon-park-outline:ad-product"
              />
              <span className="hidden md:pl-2 md:text-bold md:flex ">
                Products
              </span>
            </div>
          </Link>
        </div>
        <div
          className={
            toggleSelected === "Categories"
              ? " flex flex-col items-center justify-center py-3 text-base rounded-lg w-4/5 bg-[#388087] hover:cursor-pointer hover:rounded-md   "
              : "flex flex-col items-center justify-center py-3 text-base rounded-sm w-4/5 hover:cursor-pointer"
          }
        >
          <Link href={"/dashboard/categories"}>
            <div className="flex flex-row justify-center w-3/5 md:justify-start">
              <Icon
                className="w-auto h-6 text-blue-300 group-hover:text-white"
                icon="ic:baseline-category"
              />
              <span className="hidden md:pl-2 md:text-bold md:flex ">
                Categories
              </span>
            </div>
          </Link>
        </div>
        <div
          className={
            toggleSelected === "Users"
              ? " flex flex-col items-center justify-center py-3 text-base rounded-lg w-4/5 bg-[#388087] hover:cursor-pointer    "
              : "flex flex-col items-center justify-center py-3 text-base rounded-sm w-4/5 hover:cursor-pointer"
          }
        >
          <Link href={"/dashboard/users"}>
            <div className="flex flex-row justify-center w-3/5 md:justify-start">
              <Icon
                className="w-auto h-6 text-blue-300 group-hover:text-white"
                icon="ant-design:user-outlined"
              />
              <span className="hidden md:pl-2 md:text-bold md:flex ">
                Users
              </span>
            </div>
          </Link>
        </div>
      </div>
      {props.children}
    </div>
    // <div className="relative min-h-screen md:flex">
    //   <div className="pt-6 text-gray-100 bg-gray-800 md:w-64 md:relative md:translate-x-0 md:flex md:flex-col md:justify-between">
    //     <div className="flex flex-col space-y-6">
    //       <a href="#" className="flex items-center px-4 space-x-2 text-white">
    //         <span className="text-2xl font-extrabold truncate whitespace-nowrap">
    //           Penkwin
    //         </span>
    //       </a>

    //       <nav>
    //         <a
    //           href="#"
    //           className="flex items-center px-4 py-2 space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white"
    //         >
    //           <span className="ml-6">Without Icon</span>
    //         </a>
    //       </nav>
    //     </div>
    //   </div>
    //   {props.children}
    // </div>
  );
}

export default AdminDashboardComponent;
