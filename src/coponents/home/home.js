import React, { useEffect, useState } from "react";

import VotingScreen from "./votingScreen";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";


const Home = () => {
  let password = "1234";
  const navigate = useNavigate();

  const [inputValuePass, setInputValuePass] = useState("");
  const [massage, setMassage] = useState("");
  const [voter, setVoter] = useState(false);

  const passwordHandler = () => {
    if (password === inputValuePass) {
      setVoter(true);
    } else {
      setMassage("Incorrect Password");
    }
  };
  useEffect(() => {
    localStorage.setItem("Voter", voter);
  }, [voter]);

  return (
    <>
      {voter == true ? (
        <>
        <VotingScreen />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "100vh", // Optional: Set the container height to the viewport height
          }}
        >
          <form>
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Code"
              value={inputValuePass}
              onChange={(e) => {
                setInputValuePass(e.target.value);
              }}
              style={{
                width: "250px",
              }}
            />
            <p
              style={{
                color: "red",
              }}
            >
              {massage}
            </p>

            <MDBBtn
              onClick={passwordHandler}
              style={{
                backgroundColor: "green",
                width: "250px",
              }}
            >
              New Vote
            </MDBBtn>
            <br />
            <a
              style={{
                cursor: "pointer",
                color: "blueviolet",
                display: "flex",
                marginTop: "10px"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = 'underline'; // Add underline on hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = 'none'; // Remove underline on mouse out
              }}
              onClick={() => navigate("/results")}
            >
              {" "}
              Show Results
            </a>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;

{
  /* <div>
          <input
            type="password"
            placeholder="Password"
            value={inputValuePass}
            onChange={(e) => {
              setInputValuePass(e.target.value);
            }}
          />
          <p style={{
            color: "red"
          }}>{massage}</p>
          <button onClick={passwordHandler}>New Voter</button>
        </div> */
}
