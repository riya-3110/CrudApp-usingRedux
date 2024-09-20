import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
    navigate(0);
  };

  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <h2>Crud App Using Redux</h2>
      <Link
        to="/create"
        className="btn btn-success ny-3"
        style={{ marginTop: "12px" }}
      >
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/update/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <Link
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
