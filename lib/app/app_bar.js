"use strict";

const useEffect = React.useEffect;
const useState = React.useState;
const useRef = React.useRef;
const useReducer = React.useReducer;
const store = spt.react.redux.store;
const redux_set_tab_mode = spt.react.redux.app.set_tab_mode;
const AppBar = MaterialUI.AppBar;
const Box = MaterialUI.Box;
const Button = MaterialUI.Button;
const Toolbar = MaterialUI.Toolbar;
const IconButton = MaterialUI.IconButton;
const Typography = MaterialUI.Typography;
const Menu = MaterialUI.Menu;
const MenuIcon = MaterialUI.MenuIcon;
const Container = MaterialUI.Container;
const Avatar = MaterialUI.Avatar;
const Tooltip = MaterialUI.Tooltip;
const MenuItem = MaterialUI.MenuItem;
const ResponsiveAppBar = props => {
  let user = props.user;
  let display_name = user?.display_name || "Remko NoteboomXXX";

  let modules = [];
  if (props.modules && props.modules.length > 1) {
    modules = props.modules;
  }
  const settings = [];
  const [current, set_current] = useState("");
  store.subscribe(() => {
    let state = store.getState();
    set_current(state.app.tab_mode);
  });
  const sign_out = () => {
    let ok = function () {
      let server = TacticServerStub.get();
      let cmd = "SignOutCmd";
      server.execute_cmd(cmd);
      let href = document.location.href;
      let parts = href.split("#");
      window.location.href = parts[0];
    };
    spt.confirm("Are you sure you wish to sign out?", ok);
  };
  const set_tab_mode = mode => {
    set_current(mode);
    store.dispatch(redux_set_tab_mode(mode));
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return React.createElement(AppBar, {
    position: "static",
    color: "primary"
  }, React.createElement(Container, {
    maxWidth: false
  }, React.createElement(Toolbar, {
    disableGutters: true,
    variant: "dense"
  }, React.createElement("div", {
    style: {
      marginLeft: "-30px",
      marginRight: "50px"
    }
  }, React.createElement("img", {
    style: {
      width: "250px"
    },
    src: "/plugins/spt/modules/workflow/apps/Resource/media/tactic_resource_white.png"
  })), React.createElement(Box, {
    sx: {
      flexGrow: 1,
      display: {
        xs: 'flex',
        md: 'none'
      }
    }
  }, React.createElement(IconButton, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, React.createElement("i", {
    className: "fas fa-bars"
  })), React.createElement(Menu, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: 'block',
        md: 'none'
      }
    }
  }, modules.map(module => React.createElement(MenuItem, {
    key: module,
    onClick: e => {
      handleCloseNavMenu();
      set_tab_mode(module);
    }
  }, React.createElement(Typography, {
    textAlign: "center"
  }, module))))), React.createElement(Typography, {
    variant: "h5",
    noWrap: true,
    component: "a",
    href: "",
    sx: {
      mr: 2,
      display: {
        xs: 'flex',
        md: 'none'
      },
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, React.createElement("div", null, React.createElement("img", {
    style: {
      width: "200px"
    },
    src: "/plugins/spt/modules/workflow/project_management/media/2020/TACTIC_logo_project_white.svg"
  }))), React.createElement(Box, {
    sx: {
      flexGrow: 1,
      display: {
        xs: 'none',
        md: 'flex'
      }
    }
  }, modules.map(module => React.createElement(Button, {
    key: module,
    onClick: e => {
      set_tab_mode(module);
      set_current(module);
      handleCloseNavMenu();
    },
    sx: {
      my: 3,
      color: 'white',
      opacity: module == current ? 1.0 : 0.7,
      borderBottom: module == current ? "solid 2px #FFF" : "solid 2px transparent",
      borderRadius: "0px",
      display: 'block',
      padding: "3px 15px",
      margin: "5px 10px 5px 10px",
      top: "4px"
    }
  }, module))), React.createElement(Box, {
    sx: {
      flexGrow: 0
    }
  }, React.createElement(Tooltip, {
    title: "Open settings"
  }, React.createElement(IconButton, {
    onClick: handleOpenUserMenu,
    sx: {
      p: 0
    }
  }, React.createElement(Avatar, {
    alt: display_name,
    style: {
      background: "black",
      width: "32px",
      height: "32px"
    }
  }, React.createElement("i", {
    className: "fas fa-user"
  })))), React.createElement(Menu, {
    sx: {
      mt: '45px'
    },
    id: "menu-appbar",
    anchorEl: anchorElUser,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: Boolean(anchorElUser),
    onClose: handleCloseUserMenu
  }, settings.map(setting => React.createElement(MenuItem, {
    key: setting,
    onClick: e => {
      handleCloseUserMenu();
    }
  }, React.createElement(Typography, {
    textAlign: "center"
  }, setting))), React.createElement(MenuItem, {
    key: "display_name",
    style: {
      background: "#DDD",
      borderBottom: "#999",
      display: "flex",
      flexDirection: "column"
    },
    onClick: e => {}
  }, React.createElement("div", {
    style: {
      fontSize: "0.6rem",
      opacity: 0.7
    }
  }, "LOGGED IN AS: "), React.createElement("div", {
    style: {
      marginTop: "-5px"
    }
  }, display_name)), React.createElement(MenuItem, {
    key: "sign_out",
    onClick: e => {
      handleCloseUserMenu();
      sign_out();
    }
  }, React.createElement(Typography, null, "Sign Out")))))));
};
if (!spt.react.app) {
  spt.react.app = {};
}
spt.react.app.ResponsiveAppBar = ResponsiveAppBar;