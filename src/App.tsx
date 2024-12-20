import { BrowserRouter } from "react-router-dom";
import { UrlShortener } from "./components/url-shortener/UrlShortener";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UrlShortener />
      </BrowserRouter>
    </div>
  );
}

export default App;
