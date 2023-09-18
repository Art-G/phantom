import { Dispatch, SetStateAction, createContext } from "react";
import { IPhantoms } from "../types/phantoms";
import data from "../data/phantoms.json";

const phantoms = data as IPhantoms;

interface PhantomState {
  phantoms: IPhantoms;
}

const initialState = {
  phantoms: phantoms,
};

export const MyContext = createContext({
  state: initialState as PhantomState,
  setState: {} as Dispatch<SetStateAction<PhantomState>>,
});
