import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Error404 from '../../screens/Error404';
import Home from '../../screens/Home';
import Faq from '../../screens/Faq';
import Contact from '../../screens/Contact';
import Privacy from '../../screens/Privacy';
import Terms from '../../screens/Terms';

class RouterManager extends Component {
    /**
     *
     */
    componentWillMount() {
        // scroll to top (for mobile)
        this.scrollToTop();
    }

    /**
     *
     */
    scrollToTop() {
        window.scrollTo(0, 0);
    }

    /**
     *
     */
    render() {
        return (
            <Switch>
                <Route
                    key={1}
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    key={2}
                    path="/faq"
                    exact
                    component={Faq}
                />
                <Route
                    key={3}
                    path="/contact"
                    exact
                    component={Contact}
                />
                <Route
                    key={4}
                    path="/privacy"
                    exact
                    component={Privacy}
                />
                <Route
                    key={5}
                    path="/terms"
                    exact
                    component={Terms}
                />
                <Route component={Error404} />
            </Switch>
        );
    }
}

export default withRouter(RouterManager);
