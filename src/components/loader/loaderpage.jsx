import 'animate.css';
import React from 'react'
import Loader from './loader'
import HomePage from '../homePage/homePage';
import './loader.css'

class LoaderPage extends React.Component {
  // Preloader
  state = {
    loading: true
  };
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Loader loading={this.state.loading} />
        <HomePage></HomePage>
      </>
    )
  }
}

export default LoaderPage

