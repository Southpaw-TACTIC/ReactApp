
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


const ResponsiveAppBar = (props) => {

    let user = props.user;

    let display_name = user?.display_name || user?.login;

    let modules = [];
    if (props.modules && props.modules.length > 1) {
        modules = props.modules;
    }
    const settings = [];


    const [current, set_current] = useState("");

    store.subscribe( () => {
        let state = store.getState();
        set_current( state.app.tab_mode );
    } )


    const sign_out = () => {
        let ok = function() {
          let server = TacticServerStub.get();
          //let cmd_key = bvr.kwargs.cmd_key;
          //server.execute_cmd(cmd_key);
          let cmd = "SignOutCmd";
          server.execute_cmd(cmd);
          let href = document.location.href;
          let parts = href.split("#");

          window.location.href=parts[0];
        }
        spt.confirm("Are you sure you wish to sign out?", ok )
    }



    const set_tab_mode = (mode) => {
        set_current(mode);
        store.dispatch( redux_set_tab_mode(mode) );
    }


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
   
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
   
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
   
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


   
    return (
      <AppBar position="static" color="primary">
        <Container maxWidth={false}>
          <Toolbar disableGutters variant="dense">
            <div style={{marginLeft: "-30px", marginRight: "50px"}}>
                <img style={{marginLeft: "10px", width: "120"}} src="/context/logo/tactic_logo_white.svg"/>
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <i className="fas fa-bars"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {modules.map((module, index) => (
                  <MenuItem key={module, index} onClick={ e => {
                      handleCloseNavMenu();
                      set_tab_mode(module);
                  }}>
                    <Typography textAlign="center">{module}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <div>
                  <img style={{marginLeft: "10px", width: "120px"}} src="/context/logo/tactic_logo_white.svg"/>
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {modules.map((module, index) => (
                <Button
                  key={index}
                  onClick={ e => {
                      set_tab_mode(module);
                      set_current(module);
                      handleCloseNavMenu()
                  } }
                  sx={{   my: 3,
                          color: 'white',
                          opacity: module == current ? 1.0 : 0.7,
                          borderBottom: module == current ? "solid 2px #FFF" : "solid 2px transparent",
                          borderRadius: "0px",
                          display: 'block',
                          padding: "3px 15px",
                          margin: "5px 10px 5px 10px",
                          top: "4px",
                  }}
                >
                  {module}
                </Button>
              ))}
            </Box>
   
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={display_name}
                    style={{background: "black", width: "32px", height: "32px"}}
                  >
                    <i className="fas fa-user"/>
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={ e => {
                      handleCloseUserMenu();
                     }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}


                <MenuItem key={"display_name"}
                    style={{
                        background: "#DDD",
                        borderBottom: "#999",
                        display: "flex",
                        flexDirection: "column",

                    }}
                    onClick={ e => {
                    }
                }>
                  <div style={{fontSize: "0.6rem", opacity: 0.7}}>LOGGED IN AS: </div>
                  <div style={{marginTop: "-5px"}}>{display_name}</div>
                </MenuItem>



                <MenuItem key={"sign_out"} onClick={ e => {
                    handleCloseUserMenu();
                    sign_out();
                   }}>
                  <Typography>Sign Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}


if (!spt.react.app) { spt.react.app = {}; }
spt.react.app.ResponsiveAppBar = ResponsiveAppBar;

