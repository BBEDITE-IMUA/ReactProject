import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "@consta/uikit/Loader";
import "./ServiceDetailsPage.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUserID = localStorage.getItem("id");
    if (currentUserID) {
      setIsLoading(true);
      setIsAuthenticated(true);
      fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data !== "Not found") {
            setService(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching the service:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="m" />
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {!isAuthenticated ? (
        <div className="auth-message">Вы должны войти в аккаунт</div>
      ) : service ? (
        <div className="service-card">
          <img src={service.image} alt={service.name} />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ) : (
        <div className="error-message">Услуга не найдена</div>
      )}
    </div>
  );
};

export default ServiceDetail;
