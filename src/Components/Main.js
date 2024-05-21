import Button from "react-bootstrap/Button";
import StudentModal from "./StudentModal";
import { useState } from "react";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  return (
    <>
      <div>
        <h2>Student Management System</h2>
        <h4>Student Count :</h4>
        <Button onClick={handleShow}>Add New Student</Button>
        <h4>Student Table</h4>
      </div>
      <StudentModal show={modalShow} handleClose={handleClose} />
    </>
  );
};

export default Main;
