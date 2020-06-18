import React from "react";

function Shopwithid({ match }) {
  const func = () => {
    alert("rr");
    console.log(match);
  };
  return (
    <div>
      {" "}
      {func} this is page with specific {match.params.id}
    </div>
  );
}
export default Shopwithid;
