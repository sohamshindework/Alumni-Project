import React from "react";
import Data from "../API/AlumniDataAPI";
import { useState } from "react";
import "./Find.css";

const Find = () => {
  const [find, setFind] = useState({
    name: "",
    byYear: "",
    location: "",
    branch: ""
  });
  const [findName, setFindName] = useState("");
  const [findYear, setFindYear] = useState("");
  const [findLocation, setFindLocation] = useState("");
  const [findBranch, setFindBranch] = useState("");

  const searchForName = (e) => {
    const data = e.target.value;
    setFindName(data);
  };
  const searchForYear = (e) => {
    const data = e.target.value;
    setFindYear(data);
  };
  const searchForLocation = (e) => {
    const data = e.target.value;
    setFindLocation(data);
  };
  const searchForBranch = (e) => {
    const data = e.target.value;
    setFindBranch(data);
  };
  const clear = (e) => {
    e.preventDefault();
    setFindName("");
    setFindYear("");
    setFindLocation("");
    setFindBranch("");
    setFind({
      name: "",
      byYear: "",
      location: "",
      branch: ""
    });
  };
  const findAlumni = (e) => {
    e.preventDefault();
    const nv = {
      name: findName,
      byYear: findYear,
      location: findLocation,
      branch: findBranch
    };
    setFind(nv);
  };
  const fBY = Data.filter((alumni) => {
    return (
      (find.name == "" ? true : find.name == alumni.Name_of_theAlumni) &&
      (find.byYear == ""
        ? true
        : find.byYear == Number(alumni.Year_of_passing)) &&
      (find.location == "" ? true : find.location == alumni.Current_Location) &&
      (find.branch == "" ? true : find.branch == alumni.Department)
    );
  });
  // console.log(fBY);
  return (
    <>
      <div className="search-box">
        <input
          className="input-1 inputs"
          onChange={searchForName}
          value={findName}
          type="text"
          // name="name"
          placeholder="Search By Name"
        />
        <input
          className="input-2 inputs"
          onChange={searchForYear}
          type="text"
          value={findYear}
          // name="byYear"
          placeholder="Search By Year"
        />
        <input
          className="input-3 inputs"
          onChange={searchForBranch}
          type="text"
          value={findBranch}
          // name="branch"
          placeholder="Search By Branch"
        />
        <input
          className="input-4 inputs"
          onChange={searchForLocation}
          type="text"
          value={findLocation}
          // name="location"
          placeholder="Search By Location"
        />

        <button className="inputs" onClick={findAlumni}>
          Search
        </button>
        <button className="inputs" onClick={clear}>
          Clear Filter
        </button>
      </div>
      <div className="find-container">
        {fBY.map((alumni) => {
          return (
            <div className="card" key={alumni._id.$oid}>
              <div className="header">
                <div className="card-img">
                  <img
                    src="https://lh3.googleusercontent.com/7OTyGBE_JY0hXxeLkhsLKoxguMfNFUfjoo8vYGzcEpYswc1KDpw6xn4Mvz5z2-5fYafnZg=s85"
                    alt="img"
                  />
                </div>
                <div className="position">
                  <p>
                    <h4>{alumni.Name_of_theAlumni}</h4>
                  </p>
                  <p>
                    <h6>{alumni.Current_Position}</h6>
                  </p>
                </div>
              </div>

              <div className="card-info">
                <p>{`Hi, I am ${
                  alumni.Name_of_theAlumni.split(" ")[0]
                }. Currenty I am working for ${
                  alumni.Current_Organisation
                } and i have ${
                  alumni.work_experience
                } of experience. I am currently located in ${
                  alumni.Current_Location
                }. And my passout year is ${
                  alumni.Year_of_passing
                } And my branch was ${alumni.Department}`}</p>
                <button className="btn">Click Here</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Find;
