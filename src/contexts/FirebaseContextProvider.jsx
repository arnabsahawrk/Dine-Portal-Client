import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
//Firebase Storage
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import useAxiosSecure from "../hooks/Axios/useAxiosSecure";

export const FirebaseContext = createContext(null);
const FirebaseContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LogIn User
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut User
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Update Profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: url || user?.photoURL,
    });
  };

  //Google Log In
  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Observer On User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);

      //Set or clear cookie token
      if (currentUser) {
        axiosSecure.post("/jwt", loggedUser);
      } else {
        axiosSecure.post("/logout", loggedUser);
      }
    });

    return () => unsubscribe();
  }, [user, axiosSecure]);

  const firebaseStorage = async (imageFile, fileName) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profile_images/${fileName}`);
    const uploadTask = uploadBytes(storageRef, imageFile);
    try {
      await uploadTask;
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.log("Firebase Storage Failed:", error);
    }
  };

  //Firebase User Data
  const firebaseUser = {
    user,
    loading,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    updateUserProfile,
    logInWithGoogle,
    firebaseStorage,
  };
  return (
    <FirebaseContext.Provider value={firebaseUser}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseContextProvider;
