"use strict";

const useEffect = React.useEffect;
const useState = React.useState;
const useRef = React.useRef;
const Box = MaterialUI.Box;
const Button = MaterialUI.Button;
const Typography = MaterialUI.Typography;
const Tab = MaterialUI.Tab;
const Tabs = MaterialUI.Tabs;
const Grow = MaterialUI.Grow;
const FormControl = MaterialUI.FormControl;
const InputLabel = MaterialUI.InputLabel;
const Select = MaterialUI.Select;
const MenuItem = MaterialUI.MenuItem;
const Menu = MaterialUI.Menu;
const ThemeProvider = MaterialUI.ThemeProvider;
const createTheme = MaterialUI.createTheme;
const ResponsiveAppBar = spt.react.app.ResponsiveAppBar;
const store = spt.react.redux.store;
const CRM = props => {

  useEffect(() => {}, []);
  const theme = createTheme({
    status: {
    },
    palette: {
      primary: {
        main: '#114e8a'
      },

      seconday: {
        main: "#e86c20"
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff'
      }
    }
  });
  const get_app = () => {
    return React.createElement("div", null, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, React.createElement("div", {
      style: {
        fontSize: "1.5rem",
        fontWeight: "500",
        marginBottom: "10px"
      }
    }, "Customer Resource Manager"), React.createElement("div", {
      style: {
        display: "flex",
        marginLeft: "auto",
        marginBottom: "0px",
        alignItems: "center",
        gap: "30px"
      }
    })));
  };
  return React.createElement("div", {
    style: {
      background: "#F9F9F9",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      zIndex: 100
    }
  }, React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(ResponsiveAppBar, props), React.createElement("br", null), React.createElement("div", {
    style: {
      margin: "0px 5px"
    }
  }, get_app())));
};

spt.react.CRM = CRM;