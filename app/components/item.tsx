"use client";

import { Fragment, FunctionComponent, useContext } from "react";

import { Menu, Transition } from "@headlessui/react";
import { IPhantom } from "../types/phantoms";
import { MyContext } from "../contexts/stateContext";

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

type ItemProps = {
  child: IPhantom;
  index: number;
};

const renderCategories = (categories: string[]) =>
  categories.map((category) => {
    switch (category) {
      case "instagram":
        return (
          <li key={category}>
            <svg
              viewBox="0 0 132 132"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <defs>
                <linearGradient id="insta_gradient_b">
                  <stop offset="0" stopColor="#3771c8"></stop>
                  <stop stopColor="#3771c8" offset="0.128"></stop>
                  <stop offset="1" stopColor="#60f" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient id="insta_gradient_a">
                  <stop offset="0" stopColor="#fd5"></stop>
                  <stop offset="0.1" stopColor="#fd5"></stop>
                  <stop offset="0.5" stopColor="#ff543e"></stop>
                  <stop offset="1" stopColor="#c837ab"></stop>
                </linearGradient>
                <radialGradient
                  id="insta_gradient_c"
                  cx="158.429"
                  cy="578.088"
                  r="65"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
                  fx="158.429"
                  fy="578.088"
                ></radialGradient>
                <radialGradient
                  id="insta_gradient_d"
                  cx="147.694"
                  cy="473.455"
                  r="65"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
                  fx="147.694"
                  fy="473.455"
                ></radialGradient>
              </defs>
              <path
                fill="url(#insta_gradient_c)"
                d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                transform="translate(1.004 1)"
              ></path>
              <path
                fill="url(#insta_gradient_d)"
                d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                transform="translate(1.004 1)"
              ></path>
              <path
                fill="#fff"
                d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
              ></path>
            </svg>
          </li>
        );
      case "salesNavigator":
        return (
          <li key={category}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M10.9219 10.9688C10.3125 11.5312 10.3125 12.5156 10.9219 13.0781C11.4844 13.6875 12.4688 13.6875 13.0312 13.0781C13.6406 12.5156 13.6406 11.5312 13.0312 10.9688C12.4688 10.3594 11.4844 10.3594 10.9219 10.9688ZM12 0.375C5.57812 0.375 0.375 5.625 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.375 23.625 23.625 18.4219 23.625 12C23.625 5.625 18.375 0.375 12 0.375ZM17.9062 7.35938L14.8125 14.1094C14.625 14.4375 14.3906 14.6719 14.0625 14.8594L7.3125 17.9531C6.51562 18.2812 5.71875 17.4844 6.04688 16.6875L9.14062 9.9375C9.32812 9.60938 9.5625 9.375 9.89062 9.1875L16.6406 6.09375C17.4375 5.76562 18.2344 6.5625 17.9062 7.35938Z"
                fill="#0A66C2"
              ></path>
            </svg>
          </li>
        );
      case "linkedin":
        return (
          <li key={category}>
            <svg
              className="mr-4 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              width="24"
              height="24"
            >
              <path
                d="M20.45 20.45h-3.557v-5.57c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.447-2.135 2.94v5.666H9.352V8.997h3.414v1.565h.048a3.742 3.742 0 013.368-1.85c3.604 0 4.269 2.37 4.269 5.455l-.002 6.283zM5.34 7.43a2.064 2.064 0 11-.001-4.127 2.064 2.064 0 010 4.127zm1.778 13.02h-3.56V8.997h3.56V20.45zM22.222.002H1.771A1.751 1.751 0 000 1.732v20.536A1.753 1.753 0 001.771 24h20.451A1.756 1.756 0 0024 22.268V1.73A1.755 1.755 0 0022.222 0"
                fill="#0A66C2"
              ></path>
            </svg>
          </li>
        );
      case "mail":
        return (
          <li key={category}>
            <svg
              className="mr-4 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14c-.338 0-.755-.156-1.25-.469-.286-.157-.69-.442-1.21-.859l-.39-.274C5.945 10.055 3.77 8.44 2.624 7.555l-.273-.195A.892.892 0 012 6.617v-.741c0-.52.183-.965.547-1.328A1.81 1.81 0 013.875 4h16.25c.52 0 .964.183 1.328.548.365.363.547.807.547 1.328v.741a.89.89 0 01-.351.743l-.196.155c-1.12.887-3.32 2.514-6.6 4.883l-.391.274c-.521.417-.925.702-1.212.86-.495.312-.911.468-1.25.468zm9.61-5.039c.077-.078.162-.09.253-.038.09.052.137.13.137.234v7.968c0 .521-.183.964-.547 1.327a1.805 1.805 0 01-1.328.548H3.875c-.52 0-.964-.182-1.328-.548A1.804 1.804 0 012 17.125V9.157c0-.104.046-.176.136-.214a.252.252 0 01.255.018c.859.651 2.864 2.123 6.015 4.413l.39.352c.626.47 1.12.809 1.485 1.016.625.339 1.198.508 1.719.508.52 0 1.094-.183 1.719-.546.39-.209.885-.548 1.484-1.016l.39-.314c3.073-2.212 5.079-3.684 6.016-4.413z"
                fill="#5273E8"
              ></path>
            </svg>
          </li>
        );
      case "workflow":
        return (
          <li key={category}>
            <svg
              className="mr-4 w-5 h-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="sitemap"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M320 64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H304 272 256c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h64zM256 192h16v48H112c-26.5 0-48 21.5-48 48v32H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H96V288c0-8.8 7.2-16 16-16H272v48H256c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H304V272H464c8.8 0 16 7.2 16 16v32H464c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288c0-26.5-21.5-48-48-48H304V192h16c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H256c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48zM48 352h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm208 0h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm208 0h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16z"
              ></path>
            </svg>
          </li>
        );
      default:
        return (
          <li key={category} className="mr-4">
            {category}
          </li>
        );
    }
  });

export const Item: FunctionComponent<ItemProps> = (itemProps) => {
  const {
    child: { name, manifest, script },
    index,
  } = itemProps;

  const { state, setState } = useContext(MyContext);

  return (
    <li
      key={index}
      className="flex flex-col rounded-md shadow-md p-6 bg-white {display}"
    >
      <div className="flex items-center justify-between">
        <ul className="flex flex-row">
          {renderCategories(manifest.tags.categories)}
        </ul>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold text-gray-900 rounded-full hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <span
                      onClick={() => null}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Rename
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      onClick={() => null}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Duplicate
                    </span>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span
                      onClick={() => {
                        const p = state.phantoms;
                        p.splice(index, 1);

                        setState({ phantoms: p });
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Delete
                    </span>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <p className="text-gray-400">{script}</p>
      <div className="flex flex-row justify-between content-center">
        <p>{name}</p>
      </div>
      <input
        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
        type="checkbox"
        role="switch"
        id={"switch-" + index}
      ></input>
    </li>
  );
};
