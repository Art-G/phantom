"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

import { Header } from "./components/header";
import { List } from "./components/list";
import { Search } from "./components/search";

import { IPhantoms } from "./types/phantoms";

import data from "./data/phantoms.json";

const phantoms = data as IPhantoms;

interface PhantomState {
  phantoms: IPhantoms;
}

export const initialState = {
  phantoms: phantoms,
};

export const MyContext = createContext({
  state: initialState as PhantomState,
  setState: {} as Dispatch<SetStateAction<PhantomState>>,
});

const filters = [
  { name: "all", key: "" },
  { name: "LinkedIn", key: "linkedin" },
  { name: "Mail", key: "mail" },
  { name: "Workflow", key: "workflow" },
  { name: "Sales Navigator", key: "salesNavigator" },
];

export default function Home() {
  const [filter, setFilter] = useState("");
  const [state, setState] = useState(initialState);

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
                  onClick={() => setFilter(solution.key)}
                >
                  {solution.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <MyContext.Provider value={contextValue}>
              <Search />
              <List filter={filter} />
            </MyContext.Provider>
          </div>
        </div>
      </main>
    </>
  );
}
