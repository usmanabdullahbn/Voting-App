import React, { useEffect, useState } from "react";
import ResultsTable from "./resultsTable";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Votes from "./votes";
import ResultsTableGirls from "./resultsTableGirls";
import VotesGirls from "./votesGirls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  let password = "1234";
  let userName = "admin";

  const [inputValueUser, setInputValueUser] = useState("");
  const [inputValuePass, setInputValuePass] = useState("");
  const [massage, setMassage] = useState("");
  const [result, setResult] = useState(false);
  const [dataShown, setDataShown] = useState(true);
  const [voteShown, setVoteShown] = useState(false);

  const passwordHandler = () => {
    if (password === inputValuePass && userName === inputValueUser) {
      setResult(true);
    } else {
      setMassage("Incorrect Password");
    }
  };
  useEffect(() => {
    localStorage.setItem("result", result);
  }, [result]);
  
  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  
    toast.success("Well come to results of Student Council 2023-2024, Let's check the results!", {
      position: "top-center",
      autoClose: 3000, // Auto close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
})

  return (
    <>
      {result == true ? (
        <>
          <h1 style={{ textAlign: "center", paddingTop: "100px" }}>Results</h1>
          {/* Container for the arrows */}
          <div
            onClick={() => {
              setDataShown(true);
              setVoteShown(false);
            }}
            style={{
              position: "fixed",
              top: "250px",
              left: "30px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Left Arrow */}
            <div
              style={{
                fontSize: "16px",
                margin: "0 10px",
                cursor: "pointer",
                border: "1px solid #ccc", // Add border
                padding: "8px", // Add padding
                borderRadius: "4px", // Add border radius
                transition: "background-color 0.3s", // Add hover effect transition
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")} // Change background on hover
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              } // Restore background on hover out
            >
              <MDBIcon fas icon="arrow-left" />
            </div>
          </div>

          <div
            style={{
              position: "fixed",
              top: "250px",
              right: "30px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Right Arrow */}
            <div
              onClick={() => {
                setDataShown(false);
              setVoteShown(true);
              }}
              style={{
                fontSize: "16px",
                margin: "0 10px",
                cursor: "pointer",
                border: "1px solid #ccc", // Add border
                padding: "8px", // Add padding
                borderRadius: "4px", // Add border radius
                transition: "background-color 0.3s", // Add hover effect transition
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")} // Change background on hover
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              } // Restore background on hover out
            >
              <MDBIcon fas icon="arrow-right" />
            </div>
          </div>
           <div style={{display: dataShown? "block" :"none"}}> 
           <>
           <h1 style={{ textAlign: "center"}}>Boys Candidates</h1>
           <ResultsTable />
           <h1 style={{ textAlign: "center"}}>Girls Candidates</h1>
           <ResultsTableGirls />
           
           </>
            </div>
        <div style={{display: voteShown? "block" :"none"}}>
          <>
           <h1 style={{ textAlign: "center"}}>Boys Candidates</h1>
           <Votes />
           <h1 style={{ textAlign: "center"}}>Girls Candidates</h1>
           <VotesGirls />
           </>
           </div>  
           <ToastContainer />
         
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
              type="text"
              id="form1Example1"
              label="Username"
              value={inputValueUser}
              onChange={(e) => {
                setInputValueUser(e.target.value);
              }}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Password"
              value={inputValuePass}
              onChange={(e) => {
                setInputValuePass(e.target.value);
              }}
            />

            {/* <MDBRow className="mb-4">
              <MDBCol className="d-flex justify-content-center">
                <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked /> 
              </MDBCol>
              <MDBCol>
                <a href="#!">Forgot password?</a>
              </MDBCol>
            </MDBRow> */}
            <p
              style={{
                color: "red",
              }}
            >
              {massage}
            </p>

            <MDBBtn onClick={passwordHandler}>Show Results</MDBBtn>
          </form>
        </div>
      )}
    </>
  );
};

export default Home;

// <div>
// <input
//   type="text"
//   placeholder="Username"
//   value={inputValueUser}
//   onChange={(e) => {
//     setInputValueUser(e.target.value);
//   }}
// />
// <input
//   type="password"
//   placeholder="Password"
//   value={inputValuePass}
//   onChange={(e) => {
//     setInputValuePass(e.target.value);
//   }}
// />
// <p style={{
//   color: "red"
// }}>{massage}</p>
// <button onClick={passwordHandler}>Show Result</button>
// </div>
