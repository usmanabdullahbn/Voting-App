import React, { useEffect, useState } from "react";

const ResultsTable = () => {
  const [data, setData] = useState({
    userData: [],
  });
  // console.log(data);
  useEffect(() => {
    if (localStorage.getItem("userData") != null) {
      let fetchUserData = localStorage.getItem("userData");
      fetchUserData = JSON.parse(fetchUserData);
      if (fetchUserData) {
        setData({
          userData: fetchUserData,
        });
      }
    }
  }, []);
  return (
    <>
      <div style={{ width: "75%", margin: "0 auto", textAlign: "center",paddingTop: "10px", }}>
        <h1 style={{ textAlign: "center" }}>Voters Data</h1>

        <div style={{paddingTop: "20px",}}>
          <h3>Managers & Coordinator</h3>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th style={{ border: "1px solid #dee2e6" }}>Name</th>
                <th style={{ border: "1px solid #dee2e6" }}>Gr#</th>
                <th style={{ border: "1px solid #dee2e6" }}>Finance Manager</th>
                <th style={{ border: "1px solid #dee2e6" }}>Event Coordinator</th>
              </tr>
            </thead>
            <tbody>
              {data.userData.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.name}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.gr}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.financeManager}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.eventCoordinator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{paddingTop: "20px",}}>
          <h3>Sport's Positions</h3>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th style={{ border: "1px solid #dee2e6" }}>Name</th>
                <th style={{ border: "1px solid #dee2e6" }}>Gr#</th>
                <th style={{ border: "1px solid #dee2e6" }}>Head</th>
                <th style={{ border: "1px solid #dee2e6" }}>Deputy Head 1</th>
                {/* <th style={{ border: "1px solid #dee2e6" }}>Deputy Head 2</th> */}
              </tr>
            </thead>
            <tbody>
              {data.userData.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.name}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.gr}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.sportHead}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.sportDeputyHead1}</td>
                  {/* <td style={{ border: "1px solid #dee2e6" }}>{user.sportDeputyHead2}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{paddingTop: "20px",}}>
          <h3>Literary's Positions</h3>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th style={{ border: "1px solid #dee2e6" }}>Name</th>
                <th style={{ border: "1px solid #dee2e6" }}>Gr#</th>
                <th style={{ border: "1px solid #dee2e6" }}>Head</th>
                <th style={{ border: "1px solid #dee2e6" }}>Deputy Head 1</th>
              </tr>
            </thead>
            <tbody>
              {data.userData.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.name}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.gr}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.literaryHead}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.literaryDeputyHead1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{paddingTop: "20px",}}>
          <h3>Stem's Positions</h3>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th style={{ border: "1px solid #dee2e6" }}>Name</th>
                <th style={{ border: "1px solid #dee2e6" }}>Gr#</th>
                <th style={{ border: "1px solid #dee2e6" }}>Head</th>
                <th style={{ border: "1px solid #dee2e6" }}>Deputy Head 1</th>
                {/* <th style={{ border: "1px solid #dee2e6" }}>Deputy Head 2</th> */}
              </tr>
            </thead>
            <tbody>
              {data.userData.map((user, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.name}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.gr}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.stemHead}</td>
                  <td style={{ border: "1px solid #dee2e6" }}>{user.stemDeputyHead1}</td>
                  {/* <td style={{ border: "1px solid #dee2e6" }}>{user.stemDeputyHead2}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ResultsTable;

{
  /* <div >
      <h1>Results</h1>
      <div>
        <h3>Managers & Coordinator</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gr#</th>
              <th>Finance Manager</th>
              <th>Event Coordinator</th>
            </tr>
          </thead>
          <tbody>
            {data.userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gr}</td>
                <td>{user.financeManager}</td>
                <td>{user.eventCoordinator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Sport's Positions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gr#</th>
              <th>Head</th>
              <th>Deputy Head 1</th>
              <th>Deputy Head 2</th>
            </tr>
          </thead>
          <tbody>
            {data.userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gr}</td>
                <td>{user.sportHead}</td>
                <td>{user.sportDeputyHead1}</td>
                <td>{user.sportDeputyHead2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Literary's Positions</h3>
        <table>
          <thead>
            <tr>
            <th>Name</th>
              <th>Gr#</th>
              <th>Head</th>
              <th>Deputy Head 1</th>
            </tr>
          </thead>
          <tbody>
            {data.userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gr}</td>
                <td>{user.literaryHead}</td>
                <td>{user.literaryDeputyHead1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Stem's Positions</h3>
        <table>
          <thead>
            <tr>
            <th>Name</th>
              <th>Gr#</th>
              <th>Head</th>
              <th>Deputy Head 1</th>
              <th>Deputy Head 2</th>
            </tr>
          </thead>
          <tbody>
            {data.userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.gr}</td>
                <td>{user.stemHead}</td>
                <td>{user.stemDeputyHead1}</td>
                <td>{user.stemDeputyHead2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
     */
}
