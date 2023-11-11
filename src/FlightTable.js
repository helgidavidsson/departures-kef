import { useState, useEffect } from "react";

function FlightTable() {
    const [ flights, setFlights ] = useState([])
    
    useEffect(() => {
        fetch('https://apis.is/flight?language=en&type=departures')
          .then(response => response.json())
          .then(data => {

            setFlights(data.results || []); 
            console.log(data)

          })
          .catch(error => console.error('Error:', error));
      }, []);

      const extractText = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || "";
      };


    return(
        <div>
        <h1>Departures-KEF</h1>
            <table className="tafla">
                <thead>
                  <tr>
                    <th>Brottför</th>
                    <th>Áfangastaður</th>
                    <th>Flugnúmer</th>
                    {/* Add more headers as needed */}
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight, index) => (
                    <tr key={index}>
                      <td>{extractText(flight.date)}</td>
                      <td>{extractText(flight.flightNumber)}</td>
                      <td>{extractText(flight.airline)}</td>
                      {/* Add more data cells as needed */}
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    )
}
export default FlightTable;