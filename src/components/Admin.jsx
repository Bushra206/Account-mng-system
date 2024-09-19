import React from "react";
import { allCompaniesCustomHook } from "./context/AllCompaniesDetailProvider";
import { NavLink } from "react-router-dom";

function Admin() {

  const {
    allcompaniesdetailstate,
    setAllCompaniesDetailState,
    addcompanyname,
    setaddcompanyname,
    addcompanyceo, setaddcompanyceo
  } = allCompaniesCustomHook();
  //console.log("allcompaniesdetailstate", allcompaniesdetailstate);
  function handleAddCompany(e) {
    e.preventDefault();
    setaddcompanyname(addcompanyname);
    setaddcompanyceo(addcompanyceo);
  //localStorage.setItem("allcompaniesdetailstateali",JSON.stringify(allcompaniesdetailstate))

    var addcompanyobject = {
      id: Math.random(),
      company_name: addcompanyname,
      company_ceo: addcompanyceo
    };
    setAllCompaniesDetailState([...allcompaniesdetailstate,addcompanyobject]);
    // setaddcompanyname("");
    // setaddcompanyceo("");

  }
   console.log("allcompaniesdetailstate", allcompaniesdetailstate);
 //console.log(JSON.parse(localStorage.getItem("allcompaniesdetailstateali")));

 // console.log(allcompaniesdetailstateali);

  return (
    <div className="w-[80vw] h-[100vh] mx-auto flex flex-col gap-4 justify-center ">
      <h2 className="font-bold">Admin Page</h2>
      <h3> Please add a company ....company name and id should be unique</h3>
      <form action="" className="flex gap-2 justify-center" onSubmit={handleAddCompany}>
        <input
          type="text"
          className=" border-2"
          value={addcompanyname}
          onChange={(e) => setaddcompanyname(e.target.value)}
          placeholder="write company name"
        />
         <input
          type="text"
          className=" border-2"
          value={addcompanyceo}
          onChange={(e) => setaddcompanyceo(e.target.value)}
          placeholder="write company ceo"
        />
        <button>Add</button>
      </form>
      {/* <NavLink  to="/Company-page">
           See your Companies
      </NavLink> */}
      <button className="bg-orange-500" > <a href="/Company-page"> See your Companies</a></button>
    </div>
  );
}

export default Admin;
