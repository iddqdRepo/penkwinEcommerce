/* eslint-disable @next/next/no-img-element */

import { Icon } from "@iconify/react";
// import styles from "./navbarComponent.module.css";
import Link from "next/link";
import { Key, useEffect, useState, useRef } from "react";

// //TODO Fix key string nonsense below
function NavbarComponent() {
  const [productsActive, setProductsActive] = useState(false);
  const [materialsActive, setMaterialsActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const defaultNavRef = useRef<null | HTMLUListElement>(null);
  const productNavRef = useRef<null | HTMLUListElement>(null);
  const materialNavRef = useRef<null | HTMLUListElement>(null);
  const mobileNavDropdownRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/api/categories");
      const data = await res.json();
      const tempCategories = data.map(
        (item: { _id: String; category: String }) => {
          return item.category;
        }
      );
      setCategories(tempCategories);
    };

    getCategories();
  }, []);
  const hideMobileNav = () => {
    if (mobileNavDropdownRef.current !== null) {
      mobileNavDropdownRef.current.classList.toggle("hidden");
    }
  };

  const hideMainNavShowExtras = (type: string) => {
    if (type === "products") {
      defaultNavRef.current!.classList.toggle("hidden");
      productNavRef.current!.classList.toggle("hidden");
    }

    if (type === "materials") {
      defaultNavRef.current!.classList.toggle("hidden");
      materialNavRef.current!.classList.toggle("hidden");
    }
  };

  const MakeLink = ({
    textName,
    type,
    clNameCustom,
    linkHRef,
  }: {
    textName: string;
    type: string;
    clNameCustom: string;
    linkHRef: string;
  }) => {
    let clName = "";

    if (type === "dropdown") {
      clName =
        "block w-full px-4 py-2 font-normal text-gray-700 bg-transparent text-bse dropdown-item whitespace-nowrap hover:bg-gray-100";
    }
    if (type === "navItem") {
      clName =
        "p-3 text-lg font-normal leading-6 text-white rounded hover:text-black hover:bg-white";
    }
    if (type === "mobileItem") {
      clName = "text-lg font-normal leading-6 text-white";
    }
    if (type === "mobileCentered") {
      clName = "text-lg font-normal leading-6 text-white";
    }

    return (
      <Link href={`/${linkHRef}`}>
        <a className={clNameCustom ? clNameCustom : clName} href="#">
          {textName}
        </a>
      </Link>
    );
  };

  return (
    <>
      <div className="flex flex-row justify-between px-10 bg-[#388087] md:flex md:items-center md:justify-center">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <a>
              <img
                className="w-auto h-16"
                src="https://cdn.shopify.com/s/files/1/1225/6296/files/logo-transparent_180x.png?v=1530418234"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="flex-row flex-wrap items-center justify-center hidden w-2/3 md:flex">
          <MakeLink
            textName="Home"
            type="navItem"
            clNameCustom=""
            linkHRef=""
          />
          <div
            onMouseEnter={() => setProductsActive(!productsActive)}
            onMouseLeave={() => setProductsActive(!productsActive)}
            className="relative "
          >
            <span
              className={
                productsActive
                  ? "flex flex-row p-3 text-lg font-normal rounded leading-6 text-black bg-white"
                  : "flex flex-row p-3 text-lg font-normal rounded leading-6 text-white hover:text-black hover:bg-white"
              }
            >
              Products
              <Icon className="h-6 pl-1" icon="akar-icons:chevron-down" />
            </span>
            <ul
              onMouseLeave={() => setProductsActive(!productsActive)}
              className={
                productsActive
                  ? "absolute py-2 m-0 bg-white border-none rounded-sm shadow-lg"
                  : "hidden"
              }
              aria-labelledby="dropdownMenuButton2"
            >
              {categories ? (
                categories.map((navItem: String) => {
                  return (
                    <li key={navItem as Key}>
                      <Link href={"/products/" + navItem.replace(/ /g, "")}>
                        <a
                          className="block w-full px-4 py-2 font-normal text-gray-700 bg-transparent text-m dropdown-item whitespace-nowrap hover:bg-gray-100"
                          href="#"
                        >
                          {navItem}
                        </a>
                      </Link>
                    </li>
                  );
                })
              ) : (
                <></>
              )}
            </ul>
          </div>

          <MakeLink
            textName="Instructions"
            type="navItem"
            clNameCustom=""
            linkHRef="instructions"
          />

          <div
            onMouseEnter={() => setMaterialsActive(!materialsActive)}
            onMouseLeave={() => setMaterialsActive(!materialsActive)}
            className="relative "
          >
            <span
              className={
                materialsActive
                  ? "flex flex-row p-3 text-lg font-normal leading-6 text-black bg-white"
                  : "flex flex-row p-3 text-lg font-normal leading-6 text-white hover:text-black hover:bg-white"
              }
            >
              Materials
              <Icon className="h-6 pl-1" icon="akar-icons:chevron-down" />
            </span>
            <ul
              onMouseLeave={() => setMaterialsActive(!materialsActive)}
              className={
                materialsActive
                  ? "absolute py-2 m-0 bg-white border-none rounded-sm shadow-lg"
                  : "hidden"
              }
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <MakeLink
                  textName="PC (Polycarbonates)"
                  type="dropdown"
                  clNameCustom=""
                  linkHRef="polycarbonates"
                />
              </li>
              <li>
                <MakeLink
                  textName="PU (Polyurethanes)"
                  type="dropdown"
                  clNameCustom=""
                  linkHRef="polyurethane"
                />
              </li>
              <li>
                <MakeLink
                  textName="SEBS"
                  type="dropdown"
                  clNameCustom=""
                  linkHRef="sebs"
                />
              </li>
            </ul>
          </div>

          <MakeLink
            textName="About Us"
            type="navItem"
            clNameCustom=""
            linkHRef="about"
          />
        </div>

        <div className="flex-row items-center hidden md:flex">
          <div className="px-2">
            <Icon className="w-6 h-6" icon="bi:person-circle" color="white" />
          </div>
          <div className="px-2">
            <Icon
              className="w-6 h-6"
              icon="akar-icons:shopping-bag"
              color="white"
            />
          </div>
        </div>

        {/* <---------------------  MOBILE NAV */}

        <div onClick={hideMobileNav} className="flex ml-10 md:hidden">
          <button>
            <Icon icon="fontisto:nav-icon" color="white" />
          </button>
        </div>
      </div>
      <div
        ref={mobileNavDropdownRef}
        className="absolute hidden flex-col bg-[#388087] w-full md:hidden"
      >
        <ul ref={defaultNavRef} className="">
          <li
            className="flex py-4 mx-4 text-lg font-normal text-white justify-left"
            onClick={hideMobileNav}
          >
            <MakeLink
              textName="Home"
              type="mobileItem"
              clNameCustom=""
              linkHRef=""
            />
          </li>
          <li
            onClick={() => hideMainNavShowExtras("products")}
            className="flex py-4 mx-4 text-lg font-normal text-white justify-left"
          >
            <span className="flex flex-row">
              <span>Products</span>
              <Icon
                className="h-8"
                icon="ic:outline-navigate-next"
                color="white"
              />
            </span>
          </li>
          <li className="flex py-4 mx-4 text-lg font-normal text-white justify-left">
            <MakeLink
              textName="Instructions"
              type="mobileItem"
              clNameCustom=""
              linkHRef="instructions"
            />
          </li>
          <li
            onClick={() => hideMainNavShowExtras("materials")}
            className="flex py-4 mx-4 text-lg font-normal text-white justify-left"
          >
            <span className="flex flex-row">
              <span>Materials</span>
              <Icon
                className="h-8"
                icon="ic:outline-navigate-next"
                color="white"
              />
            </span>
          </li>
        </ul>

        <ul ref={productNavRef} className="hidden">
          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="Medical Cushions"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="products/MedicalCushions"
            />
          </li>

          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="Bunion Care"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="products/BunionCare"
            />
          </li>
          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="Arthritis Treatment"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="products/ArthritisTreatment"
            />
          </li>
          <li
            onClick={() => hideMainNavShowExtras("products")}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <span className="flex flex-row">
              <Icon
                className="h-8"
                icon="ic:outline-navigate-before"
                color="white"
              />
              Back
            </span>
          </li>
        </ul>

        <ul ref={materialNavRef} className="hidden">
          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="PC (Polycarbonates)"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="polycarbonates"
            />
          </li>

          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="PU (Polyurethanes)"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="polyurethane"
            />
          </li>
          <li
            onClick={hideMobileNav}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <MakeLink
              textName="SEBS"
              type="mobileCentered"
              clNameCustom=""
              linkHRef="sebs"
            />
          </li>
          <li
            onClick={() => hideMainNavShowExtras("materials")}
            className="flex justify-center py-4 text-lg font-normal text-white"
          >
            <span className="flex flex-row">
              <Icon
                className="h-8"
                icon="ic:outline-navigate-before"
                color="white"
              />
              Back
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarComponent;
