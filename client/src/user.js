import React from "react";

function User(props) {
  let danas = new Date();
  return (
    <div>
      {props.datum > danas ? (
        <h2>
          Vaša članarina traje do: {props.datum.getDate()}.
          {props.datum.getMonth() + 1}.{props.datum.getFullYear()}
        </h2>
      ) : (
        <h2>
          Vaša članarina je istekla: {props.datum.getDate()}.
          {props.datum.getMonth() + 1}.{props.datum.getFullYear()}
        </h2>
      )}
    </div>
  );
}

export default User;
