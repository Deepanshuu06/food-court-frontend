import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <h1>{title}</h1>
      {isVisible ? (
        <div>
        <button onClick={() => setIsVisible(false)}>Hide</button>
        <p>{description}</p>
        </div>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
    
    </>
  );
};
const InstaMart = () => {
  const [VisibleSection, SetVisibleSection] = useState();

  return (
    <>
      <h1>Swiggy Instamart Page</h1>
      <Section
        title={"About Us Section for Instamart"}
        description={"This is the passed description"}
        isVisible={VisibleSection ==="about"}
        setIsVisible={() =>  {
            if(VisibleSection === "about"){
                SetVisibleSection("")
            }else{
                SetVisibleSection("about")
            }
        }}
      />
      <Section
        title={"Product of the Instamart"}
        description={"Product description of the Instamart"}
        isVisible={VisibleSection ==="product"}        
        setIsVisible={() =>  {
            if(VisibleSection === "product"){
                SetVisibleSection("")
            }else{
                SetVisibleSection("product")
            }
        }}
      />
      <Section
        title={"Electronic Product of the Instamart"}
        description={"Electronic product description"}
        isVisible={VisibleSection ==="electronics"}
        setIsVisible={() =>  {
            if(VisibleSection === "electronics"){
                SetVisibleSection("")
            }else{
                SetVisibleSection("electronics")
            }
        }}
      />
    </>
  );
};

export default InstaMart;
