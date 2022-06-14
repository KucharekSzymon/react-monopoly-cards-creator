import React, { useState } from "react";

function Street() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#fcba03");
  const [rent, setRent] = useState([0, 0, 0, 0, 0, 0]);
  const [cabinCost, setCabinCost] = useState(0);
  const [hotelCost, setHotelCost] = useState(0);

  const changeRent = (event) => {
    let temp_state = [...rent];
    let index = parseInt(event.target.name);
    let temp_element = { ...temp_state[index] };
    temp_element = event.target.value;
    temp_state[index] = temp_element;
    setRent(temp_state);
  };

  return (
    <div className="form">
      <label>Nazwa</label>
      <div class="input-group mb-3">
        <input
          type="text"
          name="title"
          value={name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <input
            type="color"
            name="title"
            value={color}
            style={{width: "50px", height: "100%"}}
            className="form-control"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>

      <label>Czynsz</label>
      <input
        type="text"
        min="0"
        name="0"
        value={rent[0]}
        onChange={changeRent}
        className="form-control"
      />
      <br />

      <div className="flex subInput">
        <label>1 dom</label>
        <input
          type="text"
          min="0"
          name="1"
          value={rent[1]}
          onChange={changeRent}
          className="form-control"
        />
        <label>2 dom</label>
        <input
          type="text"
          min="0"
          name="2"
          value={rent[2]}
          onChange={changeRent}
          className="form-control"
        />
        <label>3 dom</label>
        <input
          type="text"
          min="0"
          name="3"
          value={rent[3]}
          onChange={changeRent}
          className="form-control"
        />
        <label>4 dom</label>
        <input
          type="text"
          min="0"
          name="4"
          value={rent[4]}
          onChange={changeRent}
          className="form-control"
        />
        <label>Hotel</label>
        <input
          type="text"
          min="0"
          name="5"
          value={rent[5]}
          onChange={changeRent}
          className="form-control"
        />
      </div>
      <label>Zakup</label>
      <div className="flex subInput2">
        <label>dom</label>
        <input
          type="text"
          min="0"
          name="cabin"
          value={cabinCost}
          onChange={(e) => setCabinCost(e.target.value)}
          className="form-control"
        />
        <label>Hotel </label>
        <input
          type="text"
          min="0"
          name="hotel"
          value={hotelCost}
          onChange={(e) => setHotelCost(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="railwayCard">
        <br />
        <div className="Name" style={{ backgroundColor: color, width: "90%" }}>
          <div style={{ fontSize: 50, textAlign: "center" }}>
            {name !== "" ? name : "Miasto"}
          </div>
        </div>
        <div className="w-full flex pt-5 px-5">
          <div className="w-2/3">Czynsz</div>
          <div className="w-1/3 text-right">
            {rent[0] !== "" && rent[0] + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz przy pełnym kolorze</div>
          <div className="w-1/5 text-right">
            {rent[0] !== "" && rent[0] * 2 + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz z 1 dom</div>
          <div className="w-1/5 text-right">
            {rent[1] !== "" && rent[1] + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz z 2 dom</div>
          <div className="w-1/5 text-right">
            {rent[2] !== "" && rent[2] + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz z 3 dom</div>
          <div className="w-1/5 text-right">
            {rent[3] !== "" && rent[3] + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz z 4 dom</div>
          <div className="w-1/5 text-right">
            {rent[4] !== "" && rent[4] + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Czynsz z hotelem</div>
          <div className="w-1/5 text-right">
            {rent[5] !== "" && rent[5] + " $"}
          </div>
        </div>
        <hr style={{ width: "100%", color: "black" }} />
        <div className="w-full flex px-5">
          <div className="w-4/5">Koszt domu</div>
          <div className="w-1/5 text-right">
            {cabinCost !== "" && cabinCost + " $"}
          </div>
        </div>
        <div className="w-full flex px-5">
          <div className="w-4/5">Koszt hotelu</div>
          <div className="w-1/5 text-right">
            {hotelCost !== "" && hotelCost + " $"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Street;
