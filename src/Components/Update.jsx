import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/UserReducer";

export const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.find((user) => user.id == id);
  const [uname, setUname] = useState(existingUser ? existingUser.name : "");
  const [uEmail, setUEmail] = useState(existingUser ? existingUser.email : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uEmail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-items-center mt-5">
      <div className="w-50 border bg-primary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={uname}
              className="form-control"
              placeholder="Enter name"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={uEmail}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};
