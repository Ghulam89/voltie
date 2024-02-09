'use client'
import React, { createContext, useContext, useState } from 'react';

const SliderContext = createContext();

export function useSlider() {
  return useContext(SliderContext);
}

export function SliderProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <SliderContext.Provider value={{ selectedItem, selectItem }}>
      {children}
    </SliderContext.Provider>
  );
}
