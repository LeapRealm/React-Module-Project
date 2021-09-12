import React from "react";
import "./Modal.css";
import "./Navbar.css"

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <div className="button"><button onClick={close}>&times;</button></div>
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
