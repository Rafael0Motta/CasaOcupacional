import React from "react";

/* LIBS */
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/* ICONS */

import AL from "../Assets/Icons/AL.png";
import BA from "../Assets/Icons/BA.png";
import CE from "../Assets/Icons/CE.png";
import DF from "../Assets/Icons/DF.png";
import ES from "../Assets/Icons/ES.png";
import GO from "../Assets/Icons/GO.png";
import MG from "../Assets/Icons/MG.png";
import MT from "../Assets/Icons/MT.png";
import PA from "../Assets/Icons/PA.png";
import PB from "../Assets/Icons/PB.png";
import PE from "../Assets/Icons/PE.png";
import PI from "../Assets/Icons/PI.png";
import PR from "../Assets/Icons/PR.png";
import RJ from "../Assets/Icons/RJ.png";
import RN from "../Assets/Icons/RN.png";
import SP from "../Assets/Icons/SP.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsExames() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const tabsContent = [
    {
      title: "Rio de Janeiro",
      icon: <img src={RJ} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes nas seguintes cidades do Rio de Janeiro:",
      listItem: [
        "Centro",
        "Campo Grande",
        "Nova América",
        "Barra da Tijuca",
        "Duque de Caxias",
        "Campos",
        "Cabo Frio",
        "Barra Mansa",
        "Volta Redonda",
        "Três Rios",
        "Niterói",
        "Campos dos Goytacazes",
        "Teresópolis",
        "Nova Iguaçu",
        "Macaé",
        "Nova Friburgo",
        "Angra dos Reis",
        "Resende",
        "Itaperuna",
      ],
    },
    {
      title: "São Paulo",
      icon: <img src={SP} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes nas seguintes cidades de São Paulo:",
      listItem: [
        "Centro",
        "Campinas",
        "Lapa",
        "Santo Amaro",
        "Vila Clementino",
        "Sumaré",
        "São José do Rio Preto",
        "Bauru",
        "Jundiaí",
        "Ribeirão Preto",
        "Presidente Prudente",
      ],
    },
    {
      title: "Espírito Santo",
      icon: <img src={ES} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Espírito Santo:",
      listItem: ["Vitória"],
    },
    {
      title: "Distrito Federal",
      icon: <img src={DF} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Distrito Federal:",
      listItem: ["Brasília"],
    },
    {
      title: "Mato Grosso",
      icon: <img src={MT} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade de Mato Grosso:",
      listItem: ["Cuiabá"],
    },
    {
      title: "Goiás",
      icon: <img src={GO} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade de Goiás:",
      listItem: ["Rio Verde", "Catalão", "Caldas Novas"],
    },
    {
      title: "Pernambuco",
      icon: <img src={PE} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes nas seguintes cidades de Pernambuco:",
      listItem: ["Recife", "Cabo de Santo Agostinho"],
    },
    {
      title: "Bahia",
      icon: <img src={BA} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade da Bahia:",
      listItem: ["Salvador"],
    },
    {
      title: "Piauí",
      icon: <img src={PI} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Piauí",
      listItem: ["Piauí"],
    },
    {
      title: "Alagoas",
      icon: <img src={AL} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade de Alagoas",
      listItem: ["Maceió"],
    },
    {
      title: "Paraiba",
      icon: <img src={PB} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidadeda Paraiba",
      listItem: ["Jõao Pessoa"],
    },
    {
      title: "Rio Grande do Norte",
      icon: <img src={RN} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidadedo Rio Grande Do Norte",
      listItem: ["Rio Grande Do Norte"],
    },
    {
      title: "Minas Gerais",
      icon: <img src={MG} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Minas Gerais",
      listItem: ["Belo Horizonte", "Lavras"],
    },
    {
      title: "Ceara",
      icon: <img src={CE} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidadedo Ceara",
      listItem: ["Fortaleza", "Crateus", "Sobral"],
    },
    {
      title: "Parana",
      icon: <img src={PR} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Parana",
      listItem: ["Curitiba", "Parana"],
    },
    {
      title: "Para",
      icon: <img src={PA} />,
      paragraph:
        "Nosso objetivo é garantir acesso fácil e conveniente aos nossos serviços em toda a região. Visando sempre o melhor atendimento e comodidade, estamos presentes na seguinte cidade do Para",
      listItem: ["Belém"],
    },
  ];

  return (
    <>
      <section className="section-exams" id="exames">
        <h1>Locais de Atendimento</h1>
        <Box sx={{ width: "60%", margin: "50px auto" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {tabsContent.map((item, i) => (
                <Tab
                  icon={item.icon}
                  {...a11yProps(i)}
                  label={item.title}
                  key={i}
                  id="tab-icon"
                />
              ))}
            </Tabs>
          </Box>

          {tabsContent.map((item, i) => (
            <div className="tabs-container">
              <CustomTabPanel value={value} index={i} key={i}>
                <p className="title-tabs">{item.title}</p>
                <p className="paragraph-tabs">{item.paragraph}</p>
                <p className="paragraph-tabs-2">{item.paragraphSeccond}</p>
                <ul className="list-tabs" id="tabs-citys">
                  {Object.values(item.listItem).map((listItem, index) => (
                    <li
                      key={index}
                      className="list-tabs-item"
                      id="tabs-item-city"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </CustomTabPanel>
            </div>
          ))}
        </Box>
      </section>
    </>
  );
}
