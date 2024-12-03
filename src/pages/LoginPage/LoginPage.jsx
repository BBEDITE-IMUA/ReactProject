import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import './LoginPage.css';
import { useDispatch } from "react-redux";
import { set as setUser } from "../ProfilePage/ProfileSlice";

const AUTH_TOKEN_KEY_NAME = "sber-access_token";
const REFRESH_TOKEN_KEY_NAME = "sber-refresh_token";

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? "";
};

export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY_NAME, refreshToken);
};

export const saveProfileData = (userData) => {
  localStorage.setItem("id", userData.id);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

const LoginPage = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [invalidInput, setInvalidInput] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setInvalidInput(true);
      return;
    }

    setInvalidInput(false);

    try {
      const resp = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          expiresInMins: 100,
        }),
      });

      if (!resp.ok) {
        setError("Ошибка аутентификации");
        return;
      }

      const loginData = await resp.json();
      const { accessToken, refreshToken } = loginData;

      saveTokens(accessToken, refreshToken);

      const getMeResp = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const userData = await getMeResp.json();
      dispatch(setUser(userData));
      saveProfileData(userData);

      navigate(`/user/${userData.id}`);
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h1 className="login-header">Вход</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <input
              type="text"
              name="username"
              placeholder="Логин"
              value={formData.username}
              onChange={updateFormData}
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={updateFormData}
            />
          </div>
          <button className="login-button" type="submit">
            Войти
          </button>
          {invalidInput && <Text className="error-message">Заполните поля</Text>}
          {error && <Text className="error-message">{error}</Text>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
