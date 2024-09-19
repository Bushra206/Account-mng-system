import React from "react";
import { allCompaniesCustomHook } from "./context/AllCompaniesDetailProvider";
import { useParams } from "react-router-dom";

function CompaniesPage() {

    const {
        allcompaniesdetailstate,
        setAllCompaniesDetailState,
        addcompanyname,
        setaddcompanyname,
        addcompanyceo, setaddcompanyceo,
        addcompanyincome, setaddcompanyincome,
        addcompanyexpense, setaddcompanyexpense
      } = allCompaniesCustomHook();
  console.log(" allcompaniesdetailstate,", allcompaniesdetailstate,);

  return (
    <div className="flex flex-col gap-">
      <h1 className="font-bold">Companies Page</h1>
      <div className="flex flex-col gap-5">
        {allcompaniesdetailstate &&
          allcompaniesdetailstate.map(
            (singlecompany, singlecompany_index) => {
              return(
               <div className="flex justify-center gap-[20px] w-[90vw] mx-auto">
                   <p>Company name: {singlecompany.company_name}</p>
                   {/* <p>Company CEO: {singlecompany.company_ceo}</p> */}
                   <button className="bg-slate-600 rounded-sm text-white"><a  href={`/singlecompany/${singlecompany.id}`}>See detail of this company</a></button>
               </div>
              )
            }
          )}
      </div>
    </div>
  );
}

export default CompaniesPage;
