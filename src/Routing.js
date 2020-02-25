import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation
} from "react-router-dom";
import { Column } from "simple-flexbox";
import MenuItemComponent from "./Components/sidebar/MenusItemComponent";
import IconOverview from "./assets/icon-overview";
import IconIdeas from "./assets/icon-ideas";
import IconContacts from "./assets/icon-contacts";
import IconAgents from "./assets/icon-agents";
import IconArticles from "./assets/icon-articles";
import LogoComponent from "./Components/sidebar/LogoComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import $ from "jquery";
import App from "./App";

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Events"
    };
  }
  render() {
    let styleSide = {
      height: "100vh",
      background: "#363740",
      float: "left"
    };
    let styleSwitch = {
      float: "right",
      background: "darkgrey",
      overflow: "scroll"
    };

    return (
      <Column>
        <Router className="Container">
          <div className="row">
            <div
              className="content-align-left justify-content-left col-3"
              style={styleSide}
            >
              <Link
                to="/"
                className="row justify-content-center brand link"
                onClick={() => this.setState(state => ({ title: "Event APP" }))}
              >
                <LogoComponent />
              </Link>
              <Link
                to="/"
                id="Create Event"
                className="row justify-content-left link"
                onClick={() =>
                  this.setState(state => ({ title: "Create Event" }))
                }
              >
                <MenuItemComponent icon={IconOverview} title="Create Event" />
              </Link>
              <Link
                to="/details"
                className="row justify-content-left link"
                onClick={() => this.setState(state => ({ title: "Details" }))}
              >
                <MenuItemComponent title="Details" icon={IconIdeas} />
              </Link>
              <Link
                to="/attendees"
                className="row link justify-content-left"
                onClick={() => this.setState(state => ({ title: "Attendees" }))}
              >
                <MenuItemComponent title="Attendees" icon={IconContacts} />
              </Link>
              <Link
                to="/agents"
                className="row link justify-content-left"
                onClick={() => this.setState(state => ({ title: "Agents" }))}
              >
                <MenuItemComponent title="Agents" icon={IconAgents} />
              </Link>
              <Link
                to="/articles"
                className="row link justify-content-left"
                onClick={() => this.setState(state => ({ title: "Articles" }))}
              >
                <MenuItemComponent title="Articles" icon={IconArticles} />
              </Link>
              <Link to="/theoldapp" className="row link justify-content-left">
                <MenuItemComponent title="TheOldapp" icon={IconArticles} />
              </Link>
            </div>
            <div style={styleSwitch} className="col-9">
              <h3 className="title">{this.state.title}</h3>
              <Switch>
                <Route exact path="/">
                  <div>
                    <Home />
                  </div>
                </Route>
                <Route path="/create-event">
                  <div>
                    <CreateEvent />
                  </div>
                </Route>
                <Route path="/details">
                  <div>
                    <Details />
                  </div>
                </Route>
                <Route path="/attendees">
                  <div>
                    <Attendees />
                  </div>
                </Route>
                <Route path="/agents">
                  <div>
                    <Agents />
                  </div>
                </Route>
                <Route path="/articles">
                  <div>
                    <Articles />
                  </div>
                </Route>
                <Route path="/theoldapp">
                  <div>
                    <App />
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Column>
    );
  }
}
class Home extends React.Component {
  render() {
    return <div>Welcome</div>;
  }
}
class CreateEvent extends React.Component {
  render() {
    return <div>The journey begins with one step</div>;
  }
}
class Details extends React.Component {
  render() {
    return <div>The devil in the details</div>;
  }
}
class Attendees extends React.Component {
  render() {
    return <div>Folks and fox are attending</div>;
  }
}
class Agents extends React.Component {
  render() {
    return <div>Agents are here. Get in touch</div>;
  }
}
class Articles extends React.Component {
  render() {
    return <div>Read our blog</div>;
  }
}
export default Routing;
