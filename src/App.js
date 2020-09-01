import React, { Component } from "react";
import { Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { ModalWindow } from "./Modal";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 53.9,
      lng: 27.5667,
      zoom: 13,
      rectangle: [],
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <FeatureGroup>
          <ModalWindow
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            text={this.state.rectangle}
          />
          <EditControl
            position="topright"
            onCreated={(e) => this.setState({ rectangle: e.layer._latlngs[0] })}
            onDrawStop={() => this.openModal()}
            draw={{
              rectangle: true,
              circle: false,
              polyline: false,
              polygon: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}
