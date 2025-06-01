import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Features from "../components/pages/Features";
import HitungKalori from "../components/pages/HitungKalori";
import BmiCalculator from "../components/pages/BmiCalculator";
import CatatanKalori from "../components/pages/CatatanKalori";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import IntroductionUser from "../components/pages/IntroductionUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/hitungkalori",
    element: <HitungKalori />,
  },
  {
    path: "/bmicalculator",
    element: <BmiCalculator />,
  },
  {
    path: "/catatankalori",
    element: <CatatanKalori />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "tellyourself",
    element: <IntroductionUser />,
  },
]);
