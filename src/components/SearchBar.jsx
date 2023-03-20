import React from "react";

const SearchBar = ({keyword, onChange, placeholder}) => {
  const BarStyle = {
  width:"20rem", 
  margin: "20px" ,
  padding:"0.5rem", 
  border: "2px solid #f1f1f1", 
  borderRadius: "10px",
  justifyContent: "flex-end"
};
  return (
    <input 
     style={BarStyle}
     key="search-bar"
     value={keyword}
     placeholder={placeholder}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;