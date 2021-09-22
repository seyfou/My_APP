import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { getCards } from "../../js/actions/card";
import "./card.css";
import { CardActions } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import CardEvt from "./CardEvt";
import AddCard from "./AddCard";
import AddCard3 from "./AddCard3";


 interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
 
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 700,
    width: 1300,
    "&$disabled": {
      textTransform: "uppercase !important",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "18%",
  },
  disabled: {
    textTransform: "uppercase",
  },
}));

export default function Activités() {
  const cards = useSelector((state) => state.cardReducer.cards);
  const dispatch = useDispatch();

  const loadCard = useSelector((state) => state.cardReducer.loadCard);
  useEffect(() => {
    dispatch(getCards());
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          style={{ marginTop: "80px", fontSize: "6" }}
        >
          <Tab
            label="Vente des nouveaux voiture"
            {...a11yProps(0)}
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Vente des voitures occasion"
            {...a11yProps(1)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Pièces de rechange"
            {...a11yProps(2)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Service de réparation"
            {...a11yProps(3)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="vidange des voitures"
            {...a11yProps(4)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Lavage des voitures"
            {...a11yProps(5)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Diagnostique des voitures"
            {...a11yProps(6)}
            tyle={{
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(15, 15, 15)",
              fontWeight: "400",
            }}
          />
          
        </Tabs>
        <div className="containerrr">
          <AddCard3 />
         
          <div className="small">
            <TabPanel className="tabp" value={value} index={0}>
             <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Vente des nouveaux voitures")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={1}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Vente des voitures occasion")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={2}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Pièces de rechange")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={3}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Service de réparation")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={4}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "vidange des voitures")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={5}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Lavage des voitures")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

          <div className="small">
            <TabPanel className="tabp" value={value} index={6}>
              <div className="card-list">
                {cards
                  .filter((el) => el.titleCard === "Diagnostique des voitures")
                  .map((el) => (
                    <CardEvt card={el} />
                  ))}
              </div>
            </TabPanel>
          </div>

         
        </div>
      </div>
    </div>
  );
}
