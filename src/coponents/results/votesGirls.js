import React, { useEffect, useState } from "react";

const VotesGirls = () => {
  const [data, setData] = useState({
    userData: {},
  });
  //   console.log(data);
  useEffect(() => {
    if (localStorage.getItem("VotesDataGirls") != null) {
      let fetchUserData = localStorage.getItem("VotesDataGirls");
      fetchUserData = JSON.parse(fetchUserData);
      //   console.log(fetchUserData);
      if (fetchUserData) {
        setData({
          userData: fetchUserData,
        });
      }
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "75%",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Votes Counts</h1>
        {Object.entries(data.userData).map(([category, votes]) => (
          <div key={category}>
            <h2>{category}'s Votes</h2>
            <form>
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th style={{ border: "1px solid #dee2e6" }}>Candidate</th>
                    <th style={{ border: "1px solid #dee2e6" }}>Totals Votes</th>
                 
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(votes).map(([candidate, count]) => (
                    <tr key={candidate}>
                      <td style={{ border: "1px solid #dee2e6" }}>{candidate}</td>
                      <td style={{ border: "1px solid #dee2e6" }}>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default VotesGirls;

//    <div style={{ width: "75%", margin: "0 auto", textAlign: "center",paddingTop: "100px", }}>
//     <h1 style={{ textAlign: "center" }}>Votes Counts</h1>

//       <table className="table">
//         <thead className="table-dark">
//         <tr>
//           <th style={{ border: "1px solid #dee2e6" }}>Candidate</th>
//           <th style={{ border: "1px solid #dee2e6" }}>One</th>
//           <th style={{ border: "1px solid #dee2e6" }}>Two</th>
//           <th style={{ border: "1px solid #dee2e6" }}>Three</th>
//           <th style={{ border: "1px solid #dee2e6" }}>Four</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Object.entries(data.userData).map(([user, votes]) => (
//             console.log(user, votes)
//         //   <tr key={user}>
//         //     <td style={{ border: "1px solid #dee2e6" }}>{user}</td>
//         //     <td style={{ border: "1px solid #dee2e6" }}>{votes.One}</td>
//         //     <td style={{ border: "1px solid #dee2e6" }}>{votes.Two}</td>
//         //     <td style={{ border: "1px solid #dee2e6" }}>{votes.Three}</td>
//         //     <td style={{ border: "1px solid #dee2e6" }}>{votes.Four}</td>
//         //   </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
