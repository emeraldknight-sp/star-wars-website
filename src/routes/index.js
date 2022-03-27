import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
    </Switch>
  )
}

export default Routes;