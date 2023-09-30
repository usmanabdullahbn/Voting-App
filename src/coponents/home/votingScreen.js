import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const VotingScreen = () => {
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
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);
  const [cloneData, setCloneData] = useState({
    userData: [],
  });
  const navigate = useNavigate();

  const [cloneVotesData, setCloneVotesData] = useState(() => {
    // Load vote data from local storage if it exists, or initialize it
    const savedVotesData = localStorage.getItem("VotesData");
    return savedVotesData
      ? JSON.parse(savedVotesData)
      : {
          financeManager: {
            Hammad: 0,
            AliMehdi: 0,
            MuhammadSarib: 0,
          },
          eventCoordinator: {
            Houd: 0,
            Sudaim: 0,
            IbrahimZain: 0,
            Hamza: 0,
          },
          stemHead: {
            Hunzala: 0,
            Ehaan: 0,
          },
          literaryHead: {
            Zaid: 0,
            Muhib: 0,
          },
          sportHead: {
            HuzaifaArif: 0,
            YahyaBin: 0,
            Essa: 0,
            AbdurRehman: 0,
          },
          stemDeputyHead: {
            Ahzem: 0,
            Ibrahim: 0,
            Huzaifa: 0,
          },
          // stemDeputyHead2: {
          //   I: 0,
          //   J: 0,
          //   K: 0,
          //   L: 0,
          // },
          literaryDeputyHead: {
            Asad: 0,
            AbdullahSaleem: 0,
          },
          sportDeputyHead: {
            AbdurRehmanNabi: 0,
            ErzhumHassan: 0,
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

  const CheckboxFI = ({ label, value }) => {
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

  const CheckboxEC = ({ label, value }) => {
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

  const CheckboxSH = ({ label, value }) => {
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

  const CheckboxLH = ({ label, value }) => {
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
  const CheckboxSpH = ({ label, value }) => {
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
  const CheckboxSDH1 = ({ label, value }) => {
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

  const CheckboxLDH1 = ({ label, value }) => {
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

  const CheckboxSpDH1 = ({ label, value }) => {
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
      localStorage.setItem("VotesData", JSON.stringify(updatedVotesData));

      setCloneVotesData(updatedVotesData);

      const updatedUserData = [...userDataClone];
      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      // alert(
      //   "You have Sucessfully gives the to boys candidates, let's vote the girls!"
      // );
     
      navigate("/girlsabc1234321");
    } else {
      // alert("Fill in all input fields and select all checkboxes!");
    
      toast.error("Fill in all input fields and select all checkboxes!", {
        position: "top-left",
        autoClose: 3000,
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
    if (localStorage.getItem("userData") != null) {
      let fetchUserData = localStorage.getItem("userData");
      fetchUserData = JSON.parse(fetchUserData);
      if (fetchUserData) {
        setCloneData({
          userData: fetchUserData,
        });
      }
    } else {
      // Use the correct key when saving data
      localStorage.setItem("userData", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (cloneData.userData.length > 0) {
      let userActualData = cloneData.userData.slice(0);
      localStorage.setItem("userData", JSON.stringify(userActualData));
    }
  }, [cloneData.userData]);
  
  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0);
  
    toast.success("Well come to Student Council 2023-2024, Let's vote for the Boys!", {
      position: "top-center",
      autoClose: 3000, // Auto close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    

    console.log("componet is mount");
  }, []);
  
  

  return (
    <>
      <div style={{ width: "75%", margin: "0 auto", paddingTop: "100px" }}>
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
          Boys Candidates
        </h1>
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
            <CheckboxFI label="Hammad Rehman - Ibn e Rushd" value={"Hammad"} />
            <br />
            <CheckboxFI
              label="Ali Mehdi Askari - Ibn e Rushd"
              value={"AliMehdi"}
            />
            <br />
            <CheckboxFI
              label="Muhammad Sarib Shakeel - Ghazali"
              value={"MuhammadSarib"}
            />
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
            <CheckboxSDH1 label="Ahzem Bin Naveed - Shibli" value={"Ahzem"} />
            <br />
            <CheckboxSDH1 label="Ibrahim Lateef - Shafaee" value={"Ibrahim"} />
            <br />
            <CheckboxSDH1 label="Huzaifa Rehman - Shafaee" value={"Huzaifa"} />
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
            <CheckboxEC label="Houd Faisal - Ghazali" value={"Houd"} />
            <br />
            <CheckboxEC label="Sudaim Adeel - Rumi" value={"Sudaim"} />
            <br />
            <CheckboxEC
              label="Ibrahim Bin Zain - Razi "
              value={"IbrahimZain"}
            />
            <br />
            <CheckboxEC label="Hamza Bilal - Ibe rushd" value={"Hamza"} />
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
            <CheckboxSpH label="Huzaifa Arif - Rumi" value={"HuzaifaArif"} />
            <br />
            <CheckboxSpH label="Yahya Bin Zain -Rumi" value={"YahyaBin"} />
            <br />
            <CheckboxSpH label="Essa - Rumi" value={"Essa"} />
            <br />
            <CheckboxSpH
              label="Abdur Rehman Tayyab - Ibn e Rushd"
              value={"AbdurRehman"}
            />
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
            <CheckboxLH label="Zaid Bin Harris - Rumi" value={"Zaid"} />
            <br />
            <CheckboxLH label="Muhib Ellahi - Rumi" value={"Muhib"} />
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
            <CheckboxLDH1 label="Asad Lateef - Shibli" value={"Asad"} />
            <br />
            <CheckboxLDH1
              label="Abdullah Saleem- Shibli"
              value={"AbdullahSaleem"}
            />
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
            <CheckboxSH label="Hanza Qutub - Rumi " value={"Hunzala"} />
            <br />
            <CheckboxSH label="Ehaan Thara - Rumi" value={"Ehaan"} />
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
            <CheckboxSpDH1
              label="Abdur Rehman Nabi  - Shibli"
              value={"AbdurRehmanNabi"}
            />
            <br />
            <CheckboxSpDH1
              label="Erzham Hasan - Shibli"
              value={"ErzhumHassan"}
            />
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

export default VotingScreen;
