"use client";

import { useEffect, useState } from "react";

import { Header } from "./components/header";
import { List } from "./components/list";
import { Search } from "./components/search";

import { IPhantoms } from "./types/phantoms";

import data from "./data/phantoms.json";
import { MyContext } from "./contexts/stateContext";

const phantoms = data as IPhantoms;

const initialState = {
  phantoms: phantoms,
};

const filters = [
  { name: "All", key: "" },
  { name: "LinkedIn", key: "linkedin" },
  { name: "Mail", key: "mail" },
  { name: "Workflow", key: "workflow" },
  { name: "Sales Navigator", key: "salesNavigator" },
];

export default function Home() {
  const [state, setState] = useState(initialState);
  const [category, setCategory] = useState('');

  // Need useEffect here so the window element is only called client side
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    setCategory(queryParameters.get("category") || '');
  }, [])

  const contextValue = { state, setState };

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col justify-between p-12">
        <div className="flex flex-row">
          <div className="pl-5 pr-5 mr-10">
            <p className="font-bold mb-5">Categories</p>
            <ul>
              {filters.map((solution) => (
                <li
                  key={solution.key}
                  className="text-sm mb-2 cursor-pointer"
                >
                  <a href={solution.key === '' ? '/' : `/?category=${solution.key}`}>
                  {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <MyContext.Provider value={contextValue}>
              <Search />
              <List filter={category} />
            </MyContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}
