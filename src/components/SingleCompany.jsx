import React from "react";
import { allCompaniesCustomHook } from "./context/AllCompaniesDetailProvider";
import { useParams } from "react-router-dom";
function SingleCompany() {
  const {
    allcompaniesdetailstate,
    setAllCompaniesDetailState,
    addcompanyname,
    setaddcompanyname,
    addcompanyceo,
    setaddcompanyceo,
    addcompanyincome, setaddcompanyincome,
    addcompanyexpense, setaddcompanyexpense
  } = allCompaniesCustomHook();
  const { id } = useParams();

  const matchById = allcompaniesdetailstate.filter((elem) => {
    return Number(elem.id) == Number(id);
  });
  console.log(matchById);

  return(
   <div className="flex flex-col gap-7">
          <p>Company name: {matchById[0].company_name}</p>
          <h3>Company ID: {matchById[0].id}</h3>
          <p>Company CEO: {matchById[0].company_ceo}</p>

          <div className="flex flex-col  gap-4">


          <div className="flex gap-3">
            <input type="text" placeholder="Add income" className="border-2" />
            <button className="bg-orange-400 p-2">Add </button>
            <button className="bg-orange-400 p-2">Edit </button>
            <button className="bg-orange-400 p-2">Delete </button>
            <p className="bg-teal-600 bg-2 text-white">valuejmkfjitjvrtiitbb</p>
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="Add expense" className="border-2" />
            <button className="bg-orange-400 p-2">Add </button>
            <button className="bg-orange-400 p-2">Edit </button>
            <button className="bg-orange-400 p-2">Delete </button>
            <p className="bg-teal-600 bg-2 text-white">valuejmkfjitjvrtiitbb</p>
          </div>

          </div>

   </div>

  )
}

export default SingleCompany;
