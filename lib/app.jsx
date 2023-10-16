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



const App = (props) => {

    //let access = new SecurityAccess(props.access);

    useEffect( () => {
    }, [] );


    const theme = createTheme({
      status: {
        //danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: '#114e8a',
          //darker: '#053e85',
        },
        seconday: {
          main: "#e86c20",
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
      },
    });


    const get_app = () => {
        return (
        <div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    marginBottom: "10px",
                }}
                >Customer Resource Manager</div>

                <div style={{display: "flex", marginLeft: "auto", marginBottom: "0px", alignItems: "center", gap: "30px"}}>
                </div>
            </div>
        </div>
        )
    }


    return (
    <div style={{background: "#F9F9F9", position: "fixed", top: "0px", left: "0px", width: "100%", height: "100%", zIndex: 100}}>
        <ThemeProvider theme={theme}>
            <ResponsiveAppBar {...props}/>
            <br/>
            <div style={{margin: "0px 5px"}}>
            { get_app() }
            </div>
        </ThemeProvider>
    </div>
    )

}



//export { App };

// Store this
spt.react.App = App;



