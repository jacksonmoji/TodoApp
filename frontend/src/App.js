import Container from "@mui/material/Container";
import NewToDoForm from "./components/newTodoForm";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TodoList from "./components/todoList";
import Header from "./components/header";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TodoFilterNav from "./components/todoFilterNav";

const theme = createTheme({
  pallete: { primary: { main: "3F7EFD" } },
  typography: {
    fontFamily: "Josefin Sans",
    fontWeightBold: "400, 700",
    fontSize: "15",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container
        component="main"
        maxWidth="sm"
        style={{ position: "relative", zIndex: 2 }}
      >
        <Box sx={{ marginTop: -25 }}>
          <Grid container>
            <Grid item xs>
              <Typography color={"white"} component="h1" variant="h4">
                TODO
              </Typography>
            </Grid>
            <Grid item>
              <DarkModeIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <NewToDoForm />
          <TodoList />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <TodoFilterNav />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
