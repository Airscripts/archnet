/**
 * Importing components from libraries.
 */
import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * Importing actions and AppState from Redux Store.
 */
import { loadRoot } from "../store/actions/rootActions";
import { AppState } from "../store/store";

/**
 * Defining the AppProps interface.
 */
interface AppProps {
  root: any,
  loadRoot: Function,
}

/**
 * Defining the IState interface.
 */
interface IState {

}


/**
 * Root Component that will be represented when the user
 * hits the / endpoint.
 */
class Root extends Component<AppProps, IState> {
  async componentDidMount() {
    console.log(1);
    await this.props.loadRoot();
    console.log(3);
    this.test(this.props.root.root);
  }

  test(a: any) {
    console.log(a);
  }

  render() {
    if (this.props.root.error) {
      return (
        <p>An error as occured.</p>
      )
    }

    if (this.props.root.loading) {
      return (
        <p>Loading.</p>
      );
    }

    else {
      return (
        <React.Fragment>
          <p>{this.props.root.root}</p>
          <p>I'm Reacting.</p>
      </React.Fragment>
      );
    }
  }
}

/**
 * Mapping redux store state to component props.
 * 
 * @param state
 */
const mapStateToProps = (state: AppState) => {
  return {
      root: state.root,
  }
};

/**
* Exporting Dashboard and connecting it to the redux store.
*/
export default connect(mapStateToProps, { loadRoot })(Root);