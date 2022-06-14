import { useState } from "react";

function Railway() {
  const [name, setName] = useState("Koleje ");
  const [rent, setRent] = useState("");
  const [mortgage, setMortgage] = useState("");

  return (
    <div className="form">
      <label>Nazwa stacji</label>
      <input
        type="text"
        name="title"
        value={name}
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Czynsz</label>
      <input
        type="text"
        min="0"
        name="rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        className="form-control"
      />
      <label>Koszt hipoteki</label>
      <input
        type="text"
        min="0"
        name="morgage"
        value={mortgage}
        onChange={(e) => setMortgage(e.target.value)}
        className="form-control"
      />

      <div className="railwayCard">
        <div style={{ fontSize: 50, textAlign: "center" }}>{name}</div>
        <div>
          <div>Czynsz</div>
          <div>{rent !== "" && rent + " $"}</div>
        </div>
        <div>
          <div>Czynsz za 2 </div>
          <div>{rent !== "" && rent * 2 + " $"}</div>
        </div>
        <div>
          <div>Czynsz za wszystkie </div>
          <div>{rent !== "" && rent * 4 + " $"}</div>
        </div>
        <div>
          <div>Koszt hipoteki</div>
          <div>{mortgage !== "" && mortgage + " $"}</div>
        </div>
      </div>
    </div>
  );
}

export default Railway;
