import * as React from "react";
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import Nav from "./Nav";
import NotFound from "./NotFound";
import GroupTeamMembers from "./GroupTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Employees />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <GroupTeamMembers />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;