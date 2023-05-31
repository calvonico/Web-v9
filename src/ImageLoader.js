import React, { Component } from "react";
import Spinner from "./Spinner";

class ImageLoader extends Component {
  state = {
    loaded: false
  };

  onImageLoaded = () => {
    this.setState({ loaded: true });
  };

  

  render() {
    const { loaded } = this.state;

    return (
        <div className="col-md-5">
          <div className="imagen-perfil">
            <img
                className="img-fluid"
                src="img/nico-bio.webp" 
                alt="Nico" onLoad={this.onImageLoaded}
              />{ !loaded && <Spinner /> }
          </div>
              
        </div>

    );
  }
}

export default ImageLoader;
