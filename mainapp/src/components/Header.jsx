// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// component used for feedpage to add button for showing the create a post form

import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="header">
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "#24bc89"}
        text={showAdd ? "Cancel & Close" : "Create a Post"}
        className="create-post-btn"
      />
    </div>
  );
};

export default Header;
