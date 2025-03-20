import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { TestProvider, useTest } from './context/TestContext'
import Introduction from './components/Introduction'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import ExplanationScreen from './components/ExplanationScreen'

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
    secondary: {
      main: '#e74c3c',
    },
    background: {
      default: '#f8f9fa'
    }
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

// Main test component that handles which screen to show
const TestApp = () => {
  const { state } = useTest();
  
  return (
    <>
      {state.stage === 'intro' && <Introduction />}
      {state.stage === 'explanation' && <ExplanationScreen />}
      {state.stage === 'testing' && <QuestionScreen />}
      {state.stage === 'results' && <ResultScreen />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TestProvider>
        <TestApp />
      </TestProvider>
    </ThemeProvider>
  );
}

export default App
