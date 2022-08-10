/* eslint-disable @next/next/no-img-element */

import { Icon } from "@iconify/react";
// import styles from "./navbarComponent.module.css";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

// //TODO Fix key string nonsense below
function NavbarComponent() {
  const [productsActive, setProductsActive] = useState(false);
  const [materialsActive, setMaterialsActive] = useState(false);

  const [categories, setCategories] = useState([]);

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

  return (
    <>
      <div className="flex flex-row justify-center bg-[#388087]">
        <div className="flex items-center justify-center">
          <img
            className="w-auto h-20"
            src="https://cdn.shopify.com/s/files/1/1225/6296/files/logo-transparent_180x.png?v=1530418234"
            alt=""
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-2/3">
          <Link href={"/"}>
            <a className="p-3 text-lg font-normal leading-6 text-white rounded hover:text-black hover:bg-white">
              Home
            </a>
          </Link>
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
          <Link href={"/instructions"}>
            <a className="p-3 text-lg font-normal leading-6 text-white rounded hover:text-black hover:bg-white">
              Instructions
            </a>
          </Link>

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
                <Link href="/products/polycarbonates">
                  <a
                    className="block w-full px-4 py-2 font-normal text-gray-700 bg-transparent text-bse dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                  >
                    PC (Polycarbonates)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products/polyurethane">
                  <a
                    className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                  >
                    PU (Polyurethanes)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products/sebs">
                  <a
                    className="block w-full px-4 py-2 text-base font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                  >
                    SEBS
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <Link href={"/about"}>
            <a className="p-3 text-lg font-normal leading-6 text-white rounded hover:text-black hover:bg-white">
              About Us
            </a>
          </Link>
          {/* <div className="navItem}>Contact</div> */}
          {/* <Link href={"/contact"}>
            <a className="navItem}>Contact</a>
          </Link> */}
        </div>

        <div className="flex flex-row items-center">
          <div className="px-1">
            <Icon
              className="w-6 h-6"
              icon="ant-design:search-outlined"
              color="white"
            />
          </div>
          <div className="px-1">
            <Icon className="w-6 h-6" icon="bi:person-circle" color="white" />
          </div>
          <div className="px-1">
            <Icon
              className="w-6 h-6"
              icon="akar-icons:shopping-bag"
              color="white"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;

{
  /* <>
      <div className={styles.navbarContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.logoImage}
            src="https://cdn.shopify.com/s/files/1/1225/6296/files/logo-transparent_180x.png?v=1530418234"
            alt=""
          />
        </div>
        <div className={styles.linksContainer}>
          <Link href={"/"}>
            <a className={styles.navItem}>Home</a>
          </Link>
          <div className={styles.navItem}>
            Products
            <Icon
              className={styles.chevron}
              icon="akar-icons:chevron-down"
              width="15"
              height="15"
              inline={true}
            />
            {categories ? (
              <ul className={styles.ulDropdownList}>
                {categories.map((navItem: String) => {
                  return (
                    <li key={navItem as Key} className={styles.liDropdownItem}>
                      <Link href={"/products/" + navItem.replace(/ /g, "")}>
                        <a className={styles.dropdownLink}>{navItem}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
          <Link href={"/instructions"}>
            <a className={styles.navItem}>Instructions</a>
          </Link>
          <div className={styles.navItem}>
            Materials
            <Icon
              className={styles.chevron}
              icon="akar-icons:chevron-down"
              width="15"
              height="15"
              inline={true}
            />
            <ul className={styles.ulDropdownList}>
              <li className={styles.liDropdownItem}>
                <Link href="/polycarbonates">
                  <a className={styles.dropdownLink}>PC (Polycarbonates)</a>
                </Link>
              </li>
              <li className={styles.liDropdownItem}>
                <Link href="/polyurethane">
                  <a className={styles.dropdownLink}>PU (Polyurethanes)</a>
                </Link>
              </li>
              <li className={styles.liDropdownItem}>
                <Link href="/sebs">
                  <a className={styles.dropdownLink}>SEBS</a>
                </Link>
              </li>
            </ul>
          </div>

          <Link href={"/about"}>
            <a className={styles.navItem}>About Us</a>
          </Link>
          {/* <div className={styles.navItem}>Contact</div> */
}
{
  /* <Link href={"/contact"}>
            <a className={styles.navItem}>Contact</a>
          </Link> 
        </div>

        <div className={styles.iconContainer}>
          <div>
            <Icon
              className={styles.icon}
              icon="ant-design:search-outlined"
              color="white"
              width="50px"
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="bi:person-circle"
              color="white"
              width="50px"
            />
          </div>
          <div>
            <Icon
              className={styles.icon}
              icon="akar-icons:shopping-bag"
              color="white"
              width="50px"
            />
          </div>
        </div>
      </div>
    </> */
}

//   return (
//     <div className="flex justify-center">
//       <div>
//         <div className="relative dropdown">
//           <a
//             onClick={() => setActive(!active)}
//             className="
// dropdown-toggle
// px-6
// py-2.5
// bg-blue-600
// text-white
// font-medium
// text-xs
// leading-tight
// uppercase
// rounded
// shadow-md
// hover:bg-blue-700 hover:shadow-lg
// focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
// active:bg-blue-800 active:shadow-lg active:text-white
// transition
// duration-150
// ease-in-out
// flex
// items-center
// whitespace-nowrap
// "
//             href="#"
//             type="button"
//             id="dropdownMenuButton2"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown link
//             <svg
//               aria-hidden="true"
//               focusable="false"
//               data-prefix="fas"
//               data-icon="caret-down"
//               className="w-2 ml-2"
//               role="img"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 320 512"
//             >
//               <path
//                 fill="currentColor"
//                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
//               ></path>
//             </svg>
//           </a>
//           <ul
//             className={
//               active
//                 ? "absolute z-50 float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
//                 : "absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
//             }
//             aria-labelledby="dropdownMenuButton2"
//           >
//             <li>
//               <a
//                 className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
//                 href="#"
//               >
//                 Action
//               </a>
//             </li>
//             <li>
//               <a
//                 className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
//                 href="#"
//               >
//                 Another action
//               </a>
//             </li>
//             <li>
//               <a
//                 className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
//                 href="#"
//               >
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
