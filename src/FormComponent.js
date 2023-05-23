import React, { useState } from "react";

const FormComponent = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    password: "",
    isActive: false,
    selectedRadio:"Male",
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
      <div className="text-center"><h1 className="my-4 ">React Form</h1></div>
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
        <div className="form-check text-left mb-2 mt-2">
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

        {/* Radio */}
        <div class="d-flex mb-4 ">
          <label>
            <input
              type="radio"
              value="Male"
              name="selectedRadio"
              checked={userInfo.selectedRadio === "Male"}
              onChange={(e) => onHandleChangeInput(e)}
            />
            {" "}Male
          </label>
          <br />
          <label class="mx-4">
            <input
              type="radio"
              value="Female"
              name="selectedRadio"
              checked={userInfo.selectedRadio === "Female"}
              onChange={(e) => onHandleChangeInput(e)}
            />
            {" "} Female
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="other"
              name="selectedRadio"
              checked={userInfo.selectedRadio === "other"}
              onChange={(e) => onHandleChangeInput(e)}
            />
            {" "} Other
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
