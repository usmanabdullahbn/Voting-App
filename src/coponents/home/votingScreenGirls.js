import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const VotingScreenGirls = () => {
  const [selectedValueFI, setSelectedValueFI] = useState(null);
  const [selectedValueEC, setSelectedValueEC] = useState(null);
  const [selectedValueSH, setSelectedValueSH] = useState(null);
  const [selectedValueLH, setSelectedValueLH] = useState(null);
  const [selectedValueSpH, setSelectedValueSpH] = useState(null);
  const [selectedValueSDH1, setSelectedValueSDH1] = useState(null);
  // const [selectedValueSDH2, setSelectedValueSDH2] = useState(null);
  const [selectedValueLDH1, setSelectedValueLDH1] = useState(null);
  const [selectedValueSpDH1, setSelectedValueSpDH1] = useState(null);
  // const [selectedValueSpDH2, setSelectedValueSpDH2] = useState(null);
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueGr, setInputValueGr] = useState("");
  const [cloneData, setCloneData] = useState({
    userData: [],
  });


  const navigate = useNavigate();

  const [cloneVotesData, setCloneVotesData] = useState(() => {
    // Load vote data from local storage if it exists, or initialize it
    const savedVotesData = localStorage.getItem("VotesDataGirls");
    return savedVotesData
      ? JSON.parse(savedVotesData)
      : {
          financeManager: {
            HamnaArif: 0,
            JaveriaNabi: 0,
            
          },
          eventCoordinator: {
            Hanna: 0,
            Ruhma: 0,
            Rafia: 0,
          },
          stemHead: {
            Sukoon: 0,
            Fatima: 0,
           
          },
          literaryHead: {
            Zeenia: 0,
            Aizah: 0,
          },
          sportHead: {
            Noor: 0,
            Amna: 0,
          },
          stemDeputyHead: {
            SaraFatima: 0,
            Rumaisa: 0,
          },
          // stemDeputyHead2: {
          //   I: 0,
          //   J: 0,
          //   K: 0,
          //   L: 0,
          // },
          literaryDeputyHead: {
            Saudah: 0,
            Hajra: 0,
          },
          sportDeputyHead: {
            Rameen: 0,
            Shanzay: 0,
          },
          // sportDeputyHead2: {
          //   PQ: 0,
          //   RS: 0,
          //   TU: 0,
          //   VW: 0,
          // },
        };
  });

  const handleChangeFI = (value) => {
    setSelectedValueFI(value);
  };
  const handleChangeEC = (value) => {
    setSelectedValueEC(value);
  };
  const handleChangeSH = (value) => {
    setSelectedValueSH(value);
  };
  const handleChangeLH = (value) => {
    setSelectedValueLH(value);
  };
  const handleChangeSpH = (value) => {
    setSelectedValueSpH(value);
  };
  const handleChangeSDH1 = (value) => {
    setSelectedValueSDH1(value);
  };
  // const handleChangeSDH2 = (value) => {
  //   setSelectedValueSDH2(value);
  // };
  const handleChangeLDH1 = (value) => {
    setSelectedValueLDH1(value);
  };
  const handleChangeSpDH1 = (value) => {
    setSelectedValueSpDH1(value);
  };
  // const handleChangeSpDH2 = (value) => {
  //   setSelectedValueSpDH2(value);
  // };

  const CheckboxFI = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueFI === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeFI(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueFI}
            onChange={() => handleChangeFI(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  const CheckboxEC = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueEC === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeEC(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueEC}
            onChange={() => handleChangeEC(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  const CheckboxSH = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueSH === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeSH(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueSH}
            onChange={() => handleChangeSH(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  const CheckboxLH = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueLH === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeLH(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueLH}
            onChange={() => handleChangeLH(value)}
          />
          {label}
        </label>
      </div>
    );
  };
  const CheckboxSpH = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueSpH === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeSpH(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueSpH}
            onChange={() => handleChangeSpH(value)}
          />
          {label}
        </label>
      </div>
    );
  };
  const CheckboxSDH1 = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueSDH1 === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeSDH1(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueSDH1}
            onChange={() => handleChangeSDH1(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  // const CheckboxSDH2 = ({ label, value,  }) => {
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: selectedValueSDH2 === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
  //         border: "1px solid #ccc", // Border
  //         width: "300px", // Width
  //         display: "flex", // Flex display for content alignment
  //         alignItems: "center", // Center align content vertically
  //         padding: "10px", // Padding
  //         transition: "background-color 0.3s ease", // Hover transition
  //       }}
  //       onClick={() => handleChangeSDH2(value)}
  //     >
  //       <label style={{ flex: 1, marginRight: "10px" }}>
  //         <input
  //           type="checkbox"
  //           checked={value === selectedValueSDH2}
  //           onChange={() => handleChangeSDH2(value)}
  //         />
  //         {label}
  //       </label>
  //         //     </div>
  //   );
  // };

  const CheckboxLDH1 = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueLDH1 === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeLDH1(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueLDH1}
            onChange={() => handleChangeLDH1(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  const CheckboxSpDH1 = ({ label, value,  }) => {
    return (
      <div
        style={{
          backgroundColor: selectedValueSpDH1 === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
          border: "1px solid #ccc", // Border
          width: "300px", // Width
          display: "flex", // Flex display for content alignment
          alignItems: "center", // Center align content vertically
          padding: "10px", // Padding
          transition: "background-color 0.3s ease", // Hover transition
        }}
        onClick={() => handleChangeSpDH1(value)}
      >
        <label style={{ flex: 1, marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={value === selectedValueSpDH1}
            onChange={() => handleChangeSpDH1(value)}
          />
          {label}
        </label>
      </div>
    );
  };

  // const CheckboxSpDH2 = ({ label, value,  }) => {
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: selectedValueSpDH2 === value ? "#DB94D6" : "#FDCD4B", // Background color based on checked state
  //         border: "1px solid #ccc", // Border
  //         width: "300px", // Width
  //         display: "flex", // Flex display for content alignment
  //         alignItems: "center", // Center align content vertically
  //         padding: "10px", // Padding
  //         transition: "background-color 0.3s ease", // Hover transition
  //       }}
  //       onClick={() => handleChangeSpDH2(value)}
  //     >
  //       <label style={{ flex: 1, marginRight: "10px" }}>
  //         <input
  //           type="checkbox"
  //           checked={value === selectedValueSpDH2}
  //           onChange={() => handleChangeSpDH2(value)}
  //         />
  //         {label}
  //       </label>
  //         //     </div>
  //   );
  // };

  const submitHandler = () => {
    if (
      inputValueName.length > 0 &&
      inputValueGr.length > 0 &&
      selectedValueFI &&
      selectedValueEC &&
      selectedValueSH &&
      selectedValueLH &&
      selectedValueSpH &&
      selectedValueSDH1 &&
      selectedValueLDH1 &&
      selectedValueSpDH1
    ) {
      let data = {
        name: inputValueName,
        gr: inputValueGr,
        financeManager: selectedValueFI,
        eventCoordinator: selectedValueEC,
        stemHead: selectedValueSH,
        literaryHead: selectedValueLH,
        sportHead: selectedValueSpH,
        stemDeputyHead1: selectedValueSDH1,
        // stemDeputyHead2: selectedValueSDH2,
        literaryDeputyHead1: selectedValueLDH1,
        sportDeputyHead1: selectedValueSpDH1,
        // sportDeputyHead2: selectedValueSpDH2,
      };

      let userDataClone = cloneData.userData.slice(0);
      userDataClone.push(data);
      setCloneData({
        userData: userDataClone,
      });

      // Update candidate vote count
      const updatedVotesData = { ...cloneVotesData };

      updatedVotesData.financeManager[selectedValueFI]++;
      updatedVotesData.eventCoordinator[selectedValueEC]++;
      updatedVotesData.stemHead[selectedValueSH]++;
      updatedVotesData.literaryHead[selectedValueLH]++;
      updatedVotesData.sportHead[selectedValueSpH]++;
      updatedVotesData.stemDeputyHead[selectedValueSDH1]++;
      //  updatedVotesData.stemDeputyHead2[selectedValueSDH2]++;
      updatedVotesData.literaryDeputyHead[selectedValueLDH1]++;
      updatedVotesData.sportDeputyHead[selectedValueSpDH1]++;
      //  updatedVotesData.sportDeputyHead2[selectedValueSpDH2]++;
      localStorage.setItem("VotesDataGirls", JSON.stringify(updatedVotesData));

      setCloneVotesData(updatedVotesData);

      const updatedUserData = [...userDataClone];
      localStorage.setItem("userDataGirls", JSON.stringify(updatedUserData));

      navigate("/")
    } else {
      // alert("Fill in all input fields and select all checkboxes!");

      toast.error("Fill in all input fields and select all checkboxes!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  

  useEffect(() => {
    if (localStorage.getItem("userDataGirls") != null) {
      let fetchUserData = localStorage.getItem("userDataGirls");
      fetchUserData = JSON.parse(fetchUserData);
      if (fetchUserData) {
        setCloneData({
          userData: fetchUserData,
        });
      }
    } else {
      localStorage.setItem("userDataGirls", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (cloneData.userData.length > 0) {
      let userActualData = cloneData.userData.slice(0);
      localStorage.setItem("userDataGirls", JSON.stringify(userActualData));
    }
  }, [cloneData.userData]);

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);

    toast.success("You have successfully voted for the boys candidates. Let's vote for the girls!", {
      position: "top-center",
      autoClose: 3000, // Auto close the toast after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return (
    <>
      <div style={{ width: "75%", margin: "0 auto", paddingTop: "100px" }}>
      <h1 style={{ textAlign: "center"}}>Girls Candidates</h1>
        {/* Section 1 */}
        <div className="row">
          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Finance Manager</h4>
            <CheckboxFI label="Hamna Arif - Razi/Ruqaiya" value={"HamnaArif"} />
            <br />
            <CheckboxFI label="Javeria Nabi- Rumi" value={"JaveriaNabi"} />
          </div>

          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Stem Deputy Head </h4>
            <CheckboxSDH1 label="Sarah Fatima - Ayesha" value={"SaraFatima"} />
            <br/>
            <CheckboxSDH1 label="Rumaisa Nabi- Ayesha" value={"Rumaisa"} />
          </div>
        </div>

        {/* Section 2 */}
        <div className="row">
          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Event Coordinator</h4>
            <CheckboxEC label="Hana faisal haq - Razi/Ruqaiya" value={"Hanna"} />
            <br />
            <CheckboxEC label="Rohma Yousuf - Ibn e Rushd" value={"Ruhma"} />
            <br />
            <CheckboxEC label="Rafia Tariq- Rabia " value={"Rafia"} />
          </div>
          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Sport Head</h4>
            <CheckboxSpH label="Noor ul Huda- Ibn e Rushd" value={"Noor"} />
            <br />
            <CheckboxSpH label="Amna Khalid - Rumi" value={"Amna"} />
          </div>
        </div>

        {/* Section 3 - Continue the same pattern */}

        <div className="row">
          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Literary Head</h4>
            <CheckboxLH label="Zeenia Jamal - Ibn e Rushd" value={"Zeenia"} />
            <br />
            <CheckboxLH label="Aiza Ghanny - Ibn e Rushd" value={"Aizah"} />

          </div>

          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Literary Deputy Head</h4>
            <CheckboxLDH1 label="Sawda Osama - Sauda" value={"Saudah"} />
            <br />
            <CheckboxLDH1 label="Hajra Arshad- Sauda" value={"Hajra"} />
          </div>
        </div>
        {/* Section 4 - Continue the same pattern */}
        <div className="row">
          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Stem Head</h4>
            <CheckboxSH label="Sukoon Fatima - Ibn e Rushd" value={"Sukoon"} />
            <br />
            <CheckboxSH label="Fatima Faisal - Ibn e Rushd" value={"Fatima"} />
          </div>

          <div
            className="col-md-6"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              paddingLeft: "20px",
            }}
          >
            <h4>Sport Deputy Head</h4>
            <CheckboxSpDH1 label="Rameen Asif - Sauda" value={"Rameen"} />
            <br />
            <CheckboxSpDH1 label="Shanzay Shakeel - Ayesha" value={"Shanzay"} />
          </div>
        </div>
        {/* Section 5 - Continue the same pattern */}
        <div className="row"></div>
      </div>

      <MDBNavbar
        expand="lg"
        light
        style={{ backgroundColor: "whitesmoke", padding: 0 }}
      >
        <MDBContainer style={{ padding: "10px" }}>
          <div style={{ margin: "0 auto" }}>
            <input
              type="text"
              placeholder="Full Name"
              value={inputValueName}
              onChange={(e) => {
                setInputValueName(e.target.value);
              }}
              style={{
                borderRadius: 5,
                margin: 10,
              }}
            />

            <input
              type="text"
              placeholder="Gr #"
              value={inputValueGr}
              onChange={(e) => {
                setInputValueGr(e.target.value);
              }}
              style={{
                borderRadius: 5,
                margin: 10,
              }}
            />

            <button
              onClick={submitHandler}
              style={{
                borderRadius: 5,
                margin: 10,
                backgroundColor: "#333333",
                color: "white",
                width: "50px",
              }}
            >
              Vote
            </button>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <ToastContainer />
    </>
  );
};

export default VotingScreenGirls;
