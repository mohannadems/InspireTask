import React from "react";
import "../styles/style.css";
import Logo from "../assets/images/Logo.png";
import Avatar from "../assets/images/Avatar.png";
import { LuBellRing } from "react-icons/lu";
import { TbWorldCheck } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { PiSquaresFourBold } from "react-icons/pi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function Home() {
  const services = [
    {
      id: 1,
      icon: "bank",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 2,
      icon: "document",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 3,
      icon: "card",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 4,
      icon: "bank",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 5,
      icon: "card",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 6,
      icon: "bank",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 7,
      icon: "document",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 8,
      icon: "card",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 9,
      icon: "document",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 10,
      icon: "card",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 11,
      icon: "bank",
      title: "Service Catalog",
      category: "Category Name",
    },
    {
      id: 12,
      icon: "document",
      title: "Service Catalog",
      category: "Category Name",
    },
  ];

  return (
    <div className="mainContainer">
      <div className="leftFlex">
        <div className="logo">
          <img src={Logo} alt="Bank AlJazira logo" />
        </div>
        <div className="avatarPlusName">
          <img src={Avatar} alt="User avatar" />
          <p>Mike AlSaudi</p>
          <p>Service Agent</p>
        </div>
        <div className="navigationMenu">
          <div className="menuItem active">
            <i className="icon-services"></i>
            <span>Services Catalog</span>
          </div>
          <div className="menuItem">
            <i className="icon-users"></i>
            <span>Users</span>
          </div>
          <div className="menuItem">
            <i className="icon-roles"></i>
            <span>Roles & Permissions</span>
          </div>
          <div className="menuItem">
            <i className="icon-settings"></i>
            <span>Settings</span>
          </div>
        </div>
      </div>
      <div className="rightFlex">
        <div className="navHeader">
          <div className="logo-area"></div>
          <div className="icons-container">
            <div className="iconsContainer">
              <LuBellRing />
            </div>
            <div className="iconsContainer">
              <TbWorldCheck />
            </div>
            <div className="iconsContainer">
              <RxAvatar />
            </div>
          </div>
        </div>
        <div className="header">
          <div className="pageTitle">
            <h2>Services Catalog</h2>
            <p>Use this page to manage and add new services</p>
          </div>
          <button className="primaryButton">Add Service Catalog</button>
        </div>
        <div className="searchAndFilter">
          <div className="searchBox">
            <input type="text" placeholder="Search catalog..." />
            <span className="searchIcon">🔍</span>
          </div>
        </div>
        <div className="beforeTheCardsSeciton">
          <div className="ourservice">
            <p>Our Services</p>
          </div>
          <div className="iconss">
            <span>
              <PiSquaresFourBold />
            </span>
            <span>
              <HiOutlineSquares2X2 />
            </span>
          </div>
        </div>

        <div className="servicesGrid">
          {services.map((service) => (
            <div key={service.id} className="serviceCard">
              <div className="cardOptions">
                <button className="optionsButton">⋮</button>
              </div>
              <div className="serviceIcon">
                {service.icon === "bank" && <i className="icon-bank"></i>}
                {service.icon === "document" && (
                  <i className="icon-document"></i>
                )}
                {service.icon === "card" && <i className="icon-card"></i>}
              </div>
              <h3>{service.title}</h3>
              <p className="categoryName">{service.category}</p>
              <p className="serviceDescription">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
