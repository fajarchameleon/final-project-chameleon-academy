import React, { useState, useEffect } from "react";
import { DoctorFinder } from "../../organism";
import api from "@api";

function home() {
  const [listOfDoctor, setListDoctor] = useState([]);
  useEffect(() => {
    // consume api untuk mendapatkan list doktor
    api
      .get("/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc", {
        params: {},
        data: {},
      })
      .then((res) => {
        setListDoctor(res.data.data);
      });
  }, []);

  return <DoctorFinder listOfDoctor={listOfDoctor} />;
}

export default home;