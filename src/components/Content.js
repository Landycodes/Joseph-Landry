import React, { useState } from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Books from "./pages/Books";
import Contact from "./pages/Contact";

export default function Content() {
  const [currentPage, setPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Podcast":
        return <Podcast />;
      case "Books":
        return <Books />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const changePage = (page) => setPage(page);

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      {renderPage()}
    </div>
  );
}
