import React, { useState } from "react";

/* IMAGES */
import Logo from "../Assets/Logos/LogoCasaPreto.png";

/* LIBS */

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* ICONS */

import { IconContext } from "react-icons";
import { GrSystem } from "react-icons/gr";
import { FaCalendarCheck } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeIcon from "@mui/icons-material/Home";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Clínicas",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <MdMedicalServices />
        </IconContext.Provider>
      ),
      link: "#about",
    },
    {
      text: "Faça seu Orçamento",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <PhoneRoundedIcon />
        </IconContext.Provider>
      ),
      link: "#services-section",
    },
    {
      text: "Locais de Atendimento",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <FaLocationDot />
        </IconContext.Provider>
      ),
      link: "#contact-section",
    },
    {
      text: "Agende seu exame",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <FaCalendarCheck />
        </IconContext.Provider>
      ),
      link: "https://asoonline.com.br/sistema/hub.asp",
    },
    {
      text: "Acesse o Sistema",
      icon: (
        <IconContext.Provider value={{ size: "25px" }}>
          <GrSystem />
        </IconContext.Provider>
      ),
      link: "https://www.agendatecnica.com.br/v2/login.asp",
    },
  ];
  return (
    <>
      <div className="top-menu">
        <div className="top-menu-social-media">
          <a
            href="https://www.facebook.com/Ammarhesconsultoria/"
            aria-label="https://www.facebook.com/Ammarhesconsultoria/"
            target="_blank"
          >
            <IconContext.Provider value={{ size: "15px", color: "#fff" }}>
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.linkedin.com/in/ammarhesconsultoria/"
            aria-label="https://www.linkedin.com/in/ammarhesconsultoria/"
            target="_blank"
          >
            <IconContext.Provider value={{ size: "15px", color: "#fff" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.instagram.com/ammarhesconsultoria/"
            aria-label="https://www.instagram.com/ammarhesconsultoria/"
            target="_blank"
          >
            <IconContext.Provider value={{ size: "15px", color: "#fff" }}>
              <FaInstagram />
            </IconContext.Provider>
          </a>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <span className="text-top-menu-span">PABX: </span>
              <a href="tel:+552122629752">(21)2262-9752</a>
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <a href="tel:+552120260011">(21)2026-0011</a>
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <a href="tel:+5521985096408">(21)98509-6408</a>
            </p>
          </div>
        </div>
        <div className="top-menu-itens">
          <div className="text-top-menu">
            <p>
              <a href="mailto:atendimento@casaocupacional.com.br">
                atendimento@casaocupacional.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav-logo-container">
          <a href="#">
            <img src={Logo} alt="Logo Ammarhes" className="nav-logo" />
          </a>
        </div>
        <div className="navbar-links-container">
          <a href="#about">Clínicas</a>
          <a href="#services-section">Faça seu Orçamento</a>
          <a href="#contact-section">Locais de Atendimento</a>
          <a
            href="https://www.agendatecnica.com.br/v2/login.asp"
            target="_blank"
          >
            Acesso ao sistema
          </a>
          <a
            href="https://asoonline.com.br/sistema/hub.asp"
            id="agende"
            target="_blank"
          >
            Agende seu exame
          </a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <a href={item.link} className="navbar-menu-link">
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
            <hr />
            <div className="infos-mobile">
              <div className="text-top-menu-mobile">
                <p>
                  <span className="text-top-menu-span">PABX: </span>
                  <a href="tel:+552122629752">
                    <PhoneRoundedIcon id="phone-menu-icon" />
                     (21)2262-9752
                  </a>
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <a href="tel:+552120260011">
                    <PhoneRoundedIcon id="phone-menu-icon" />
                     (21)2026-0011
                  </a>
                </p>
              </div>
              <div className="text-top-menu-mobile">
                <p>
                  <a href="tel:+5521985096408">
                    <PhoneRoundedIcon id="phone-menu-icon" />
                     (21)98509-6408
                  </a>
                </p>
              </div>{" "}
              <div className="text-top-menu-mobile">
                <p>
                  <a href="mailto:atendimento@casaocupacional.com.br">
                    atendimento@
                    <br />
                    casaocupacional.com.br
                  </a>
                </p>
              </div>
            </div>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
