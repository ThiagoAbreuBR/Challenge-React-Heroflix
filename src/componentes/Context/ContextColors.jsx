import React, { createContext, useContext, useState, useEffect } from 'react';
import endpointAPI from '../axios/config';

const EditorasContext = createContext();

export function EditorasProvider({ children }) {
  const [colors, setColors] = useState([]);


  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await endpointAPI.get("/colors/");
        setColors(response.data);
      } catch (error) {
        console.log("Erro na Requisição de API:", error);
      }
    };
    fetchingData();
  }, []);

  return (
    <EditorasContext.Provider value={colors}>
      {children}
    </EditorasContext.Provider>
  );
}

export function useEditoras() {
  const context = useContext(EditorasContext);
  if (context === undefined) {
    throw new Error("useEditoras deve ser usado dentro de um EditorasProvider");
  }
  return context;
}