import React from 'react';

type Props = {
  currentPage: "projects" | "about" | "contact";
};


const Contact: React.FC<Props>  = ({currentPage}) => {

  console.log(currentPage);

 return (
    <div className="contact">
     <h1>Contact</h1>
    </div>
  );
};

export default Contact;