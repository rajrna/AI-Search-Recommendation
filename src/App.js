import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import AdminProfile from "./components/AdminProfile";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "#f2f2f2",
      footer_bg: "rgb(39, 51, 51)",
      btn: "rgb(44, 55, 61)",
      border: "rgba(54, 54, 54, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Layout />
      </Router>
    </ThemeProvider>
  );
};

const Layout = () => {
  const location = useLocation();

  // Hide Header and Footer on login and signup pages
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Header />}
      <main>
        {hideNavFooter ? (
          <CenteredWrapper>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </CenteredWrapper>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminProfile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </main>
      {!hideNavFooter && <Footer />}
    </>
  );
};

// Center content vertically and horizontally
const CenteredWrapper = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      padding: "1rem",
      backgroundColor: "#f2f2f2", // optional background for form pages
    }}
  >
    {children}
  </div>
);

export default App;
