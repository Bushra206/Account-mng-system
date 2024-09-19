import React, { createContext, useContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
const allcompaniescontextcreate = createContext();
export const allCompaniesCustomHook = () => {
  const allcompaniescontextuse = useContext(allcompaniescontextcreate);
  return allcompaniescontextuse;
};

function AllCompaniesDetailProvider(props) {
  function getLocalCompaniesData() {
    let localcompaniesdata = localStorage.getItem(
      "allcompaniesdetaillocalStorage"
    );
    if (localcompaniesdata?.length === 0) {
      return [];
    } else {
      return JSON.parse(localcompaniesdata);
    }
  }
  // function getLocalCompaniesData() {
  //   let localcompaniesdata = localStorage.getItem(
  //     "allcompaniesdetaillocalstorage"
  //   );

  //     return [];

  // }
  // function getLocalCompaniesData() {
  //   let localcompaniesdata = localStorage.getItem(
  //     "allcompaniesdetaillocalstorage"
  //   );
  //   return localcompaniesdata ? JSON.parse(localcompaniesdata) : [];
  // }

  let allcompaniesdetail = getLocalCompaniesData();
  // function AllCompaniesDetailProvider(props) {
  //   const [allcompaniesdetailstate, setAllCompaniesDetailState] = useState(
  //     getLocalCompaniesData()
  //   );

  // ...

  // const [allcompaniesdetailstate, setAllCompaniesDetailState] =
  //   useState(allcompaniesdetail);
  const [allcompaniesdetailstate, setAllCompaniesDetailState] =
    useState(allcompaniesdetail || []);
  const [addcompanyname, setaddcompanyname] = useState();
  const [addcompanyceo, setaddcompanyceo] = useState();
  const [addcompanyincome, setaddcompanyincome] = useState();
  const [addcompanyexpense, setaddcompanyexpense] = useState();
  // useEffect(() => {
  //   localStorage.setItem(
  //     "allcompaniesdetaillocalstorage",
  //     JSON.stringify(allcompaniesdetail)
  //   );
  // }, [allcompaniesdetail]);
  useEffect(() => {
    localStorage.setItem(
      "allcompaniesdetaillocalStorage",
      JSON.stringify(allcompaniesdetailstate)
    );
  }, [allcompaniesdetailstate]);

  return (
    <div>
      <allcompaniescontextcreate.Provider
        value={{
          allcompaniesdetailstate,
          setAllCompaniesDetailState,
          addcompanyname,
          setaddcompanyname,
          addcompanyceo, setaddcompanyceo,
          addcompanyincome, setaddcompanyincome,
          addcompanyexpense, setaddcompanyexpense
        }}
      >
        {props.children}
      </allcompaniescontextcreate.Provider>
    </div>
  );
}

export default AllCompaniesDetailProvider;
