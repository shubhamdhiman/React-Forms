import React, { useState } from "react";

const FormComponent = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    password: "",
    isActive: false,
  });
  const onHandleChangeInput = (e) => {
    //setUserInfo({ ...userInfo, [key]: e.target.value });
    // we can do one more thing, we can use the name attribute of <input> tag.
    // We will have to put a check over here when we use checkbox
    e.target.type === "checkbox"
      ? setUserInfo({ ...userInfo, [e.target.name]: e.target.checked })
      : setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2 className="my-4 ">React Form</h2>
      <form className="d-flex flex-column align-items-center">
        <input
          name="firstName"
          onChange={(e) => onHandleChangeInput(e)}
          type="text"
          className="form-control w-50 my-2"
          value={userInfo.firstName}
        ></input>
        <input
          name="lastName"
          onChange={(e) => onHandleChangeInput(e)}
          type="text"
          className="form-control w-50 my-2"
          value={userInfo.lastName}
        ></input>
        <input
          name="password"
          // If not using name attribute, we can pass argument
          //   onChange={(e) => onHandleChangeInput(e,"password")}
          // else, we will use e.target.name as we are passing event already
          onChange={(e) => onHandleChangeInput(e)}
          type="password"
          className="form-control w-50 my-2"
          value={userInfo.password}
        ></input>
        <div className="form-check text-left mb-4 mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value={userInfo.isActive}
            onChange={(e) => onHandleChangeInput(e)}
            id="flexCheckDefault"
            name="isActive"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </form>
      <div className="text-center">
        <span>
          First Name is:<strong>{userInfo.firstName}</strong>{" "}
        </span>
        <br />
        <span>
          Last Name is: <strong>{userInfo.lastName}</strong>
        </span>
        <br />
        <span>
          Password is: <strong>{userInfo.password}</strong>
        </span>
      </div>
    </div>
  );
};

export default FormComponent;
