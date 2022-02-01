import { IpAddress } from './../ip-address';
import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  @Input() location: IpAddress["location"] | undefined;
  locationIcon = L.icon({
    iconUrl: '../../assets/images/icon-location.svg',
    popupAnchor: [13, 0],
  });

  constructor() { }

  ngOnInit(): void {
    this.loadMap();
  }

  ngOnChanges() {
    if(!(this.location == undefined)){
      this.changeLocation();
    }
  }

  private loadMap(): void {
    this.map = L.map('map', {
      dragging : true,
      boxZoom: true,
      doubleClickZoom: true
    }).setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);
  }

  changeLocation(){
    this.map.flyTo([this.location?.lat, this.location?.lng], 13);

      const icon = this.locationIcon;

      const marker = L.marker([this.location!.lat, this.location!.lng], { icon });
      marker.addTo(this.map);

  }

}
