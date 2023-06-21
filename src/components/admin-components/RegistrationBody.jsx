import React from "react";
import TeacherForm from "../../components/form/TeacherForm";
import StudentForm from "../../components/form/StudentForm";
import { useState } from "react";

const RegistrationBody = ( ) => {
  const [userType, setUserType] = useState("student");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <div className="m-4" style={{ minHeight: "670px" }}>
        <h4> ⚡ Choose who you want to register as a teacher or a student !</h4>
        <div className="form-switch">
          <label>
            <h5>
              <input
                className="m-1"
                type="radio"
                name="user-type"
                value="student"
                checked={userType === "student"}
                onChange={handleUserTypeChange}
              />
              Student
            </h5>
          </label>
          <label className="m-2">
            <h5>
              <input
                className="m-1"
                type="radio"
                name="user-type"
                value="teacher"
                checked={userType === "teacher"}
                onChange={handleUserTypeChange}
              />
              Teacher
            </h5>
          </label>
        </div>
        <hr className="rounded" />

        {userType === "teacher" && (
          <TeacherForm  />
        )}
        {userType === "student" && <StudentForm />}
      </div>
    </div>
  );
};

export default RegistrationBody;
