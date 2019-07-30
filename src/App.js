import React from 'react';
import YouTube from 'react-youtube';
import MyMap from './components/MyMap/MyMap';
import './App.scss';
import { ReactComponent as Loading } from './icons/loading.svg';

class App extends React.Component {
  state = {
    city: null,
    youtube: null,
    loading: false,
    zoom: 6,
  };

  onClick = ({ city, youtube }) => this.setState({ city, youtube, loading: true, zoom: 8 });

  onClose = () => this.setState({ city: null, youtube: null, zoom: 6 });

  onReady = () => this.setState({ loading: false });

  setZoom = value => this.setState({ zoom: value });

  render() {
    const { city, youtube, loading, zoom } = this.state;
    const opts = {
      width: '80%',
      height: '40%',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <React.Fragment>
        <MyMap onClick={this.onClick} zoom={zoom} />

        {city && (
          <div className="youtube-wrapper">
            <YouTube videoId={youtube} opts={opts} className="youtube-player" onReady={this.onReady} />
            {loading ? (
              <Loading className="loading" />
            ) : (
              <div role="button" tabIndex={0} onKeyDown={() => {}} onClick={this.onClose} className="close-button" />
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
