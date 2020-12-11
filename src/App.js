import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import BackOfficeNav from "./components/BackOfficeNav";
import BackOffice from "./components/BackOffice";
import { Container } from "react-bootstrap";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="App">
      <BackOfficeNav />
      <Container>
        <Route
          exact
          path="/admin"
          render={(props) => <BackOffice {...props} />}
        />

        <Route
          exact
          path="/product-form/:id"
          render={(props) => <ProductForm {...props} />}
        />
      </Container>
    </div>
  );
}

export default App;
