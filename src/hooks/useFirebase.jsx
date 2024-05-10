import { useContext } from "react";
import { FirebaseContext } from "../contexts/FirebaseContextProvider";

const useFirebase = () => {
  const firebaseUser = useContext(FirebaseContext);
  return firebaseUser;
};

export default useFirebase;
