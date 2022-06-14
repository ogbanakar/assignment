import React, { useEffect } from "react";
import { listUser } from "../action/listUser";
import { getUser } from "../action/getUser";
import { useDispatch, useSelector } from "react-redux";

const ListUserScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser());
  }, []);
  const usersList = useSelector((state) => state.usersList);
  const { loading, error, users, page,  } = usersList;
  const getUserReducer = useSelector((state) => state.getUserReducer);
  const { user } = getUserReducer;

  return (
    <div className="main-container">
      <div className="userdetails">{console.log(user)}</div>
      <div className="buttoncontainer">
        {users.map((item, index) => {
          return (
            <button
              className="userButton"
              onClick={() => dispatch(getUser(item.id))}
              key={index}
            >
              {item.id}
            </button>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
export default ListUserScreen;
