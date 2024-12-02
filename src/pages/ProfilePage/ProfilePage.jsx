import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../LoginPage/LoginPage";
import { Responses404 } from "@consta/uikit/Responses404";
import { Button } from "@consta/uikit/Button";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./ProfileSlice";
import { Loader } from "@consta/uikit/Loader";
import "./ProfilePage.css";


const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const profileFromState = useSelector((state) => state.profile.value);

  const [userData, setUserData] = useState(null);
  const [IDFromStorage, setIDFromStorage] = useState(
    parseInt(localStorage.getItem("id"))
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = getToken();
    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    if (profileFromState) {
      setUserData(profileFromState);
      setIsLoading(false);
      return;
    }

    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.clear();
          setIDFromStorage(null);
          throw new Error("Invalid token");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("id", data.id);
        setUserData(data);
        dispatch(set(data));
      })
      .catch((error) => {
        console.error("Error fetching the user data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, profileFromState]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="m" />
      </div>
    );
  }

  return (
    <div className="profile-page">
      {userData && parseInt(id) === IDFromStorage ? (
        <div className="profile-card">
          <img
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="profile-avatar"
          />
          <h3 className="profile-name">
            {userData.firstName} {userData.lastName}
          </h3>
          <div className="profile-info">
            <div className="bank-info">
              Номер карты: <b>{userData.bank.cardNumber}</b>
            </div>
            <div className="bank-info">
              Валюта: <b>{userData.bank.currency}</b>
            </div>
          </div>
        </div>
      ) : IDFromStorage === parseInt(id) ? (
        <div></div>
      ) : (
        <Responses404
          actions={
            <Button
              onClick={() => (window.location.href = "/")}
              size="m"
              view="ghost"
              label="На главную"
            />
          }
        />
      )}
    </div>
  );
};

export default Profile;
