import { useContext } from "react";
import { MobileSearchContext } from "../context/MobileSearchContext";

export function useMobileInputContext() {
    return useContext(MobileSearchContext);
  }