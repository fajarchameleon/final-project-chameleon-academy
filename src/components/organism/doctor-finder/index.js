import React from "react";
import { Card } from "../../molecules";

function DoctorFinder(props) {
  const { listOfDoctor } = props;

  const listOfItems = listOfDoctor.map((item, index) => (
    <Card key={index} data={item} />
  ));

  return (
    <>
      <div className="
        d-flex 
        align-items-center 
        justify-content-center 
        align-content-around 
        flex-wrap">
        {listOfItems}
      </div>
    </>
  );
}

export default DoctorFinder;
