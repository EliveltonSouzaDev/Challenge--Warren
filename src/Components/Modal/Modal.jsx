import React, { useContext } from "react";

//icons
import { IconContext } from "react-icons/lib";
import { RiCloseCircleLine } from "react-icons/ri";

//styles
import Container from "./Modal.styles";

//components
import ProgressBar from "../ProgressBar/ProgressBar";

//context
import { GlobalContext } from "../../Contexts/GlobalStorage";

export const Modal = ({ dataFrom, dataTo, dataStatus, dataTitle }) => {
  const global = useContext(GlobalContext);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      return global.onclose();
    }
  };
  return (
    <Container id="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="button">
          <h1> {dataTitle} </h1>
          <button onClick={() => global.handleModal()}>
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <RiCloseCircleLine />
            </IconContext.Provider>
          </button>
        </div>
        {dataStatus === "processing" ? (
          <ProgressBar done="50%" />
        ) : dataStatus === "created" ? (
          <ProgressBar done="10%" />
        ) : (
          <ProgressBar done="100%" />
        )}

        <div>
          <h2>Transferindo de</h2>
          <hr />
          <p>{dataFrom}</p>
          <h2>Para</h2>
          <hr />
          <p>{dataTo}</p>
        </div>
      </div>
    </Container>
  );
};
