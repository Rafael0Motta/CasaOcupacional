import React from "react";

import ReCAPTCHA from "react-google-recaptcha";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Clinicas = () => {

  /* FORMS */

  

  const exames = [
    "Audiometria",
    "Visual",
    "laboratoriais",
    "Eletrocardiograma",
    "Eletroencefalograma",
    "Raio-X",
    "Espirometria",
  ];

  return (
    <>
      <section className="novaAmerica"></section>
      <section className="centro"></section>
      <section className="barra"></section>
    </>
  );
};

export default Clinicas;
