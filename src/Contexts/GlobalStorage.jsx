import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    axios
      .get("https://warren-transactions-api.herokuapp.com/api/transactions")
      .then((response) => setResult(response.data));
  }, []);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onclose = () => {
    setIsModalVisible(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        result,
        isModalVisible,
        setIsModalVisible,
        handleModal,
        onclose,
        searchTerm,
        setSearchTerm,
        option,
        setOption,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;
