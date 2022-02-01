import { IpAddress } from './ip-address';
import { IpTrackerService } from './ip-tracker.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ip-address-tracker';
  ipTrackerResult: IpAddress | undefined;
  

  constructor(private ipTrackerService: IpTrackerService) { }

  searchAddress(ipAddress: string){
    this.ipTrackerService.getAddressByIp(ipAddress).subscribe(address => {
      this.ipTrackerResult = address;
    });
  }
}
