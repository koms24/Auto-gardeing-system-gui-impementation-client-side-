import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ControlData } from '../data-classes/control-data';
import { SensorDataService } from '../services/sensor-data.service';
import { ControlDataService } from '../services/control-data.service';
import { LivefeedViewComponent } from '../shared-components/livefeed-view/livefeed-view.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [LivefeedViewComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  controls: ControlData[] = [];
  precentages: number[] = [];
  public camerasInfo: {
    nextCam: Subject<boolean | string>,
    nextCamOb: Observable<boolean | string>,
    devInfo: MediaDeviceInfo
  }[] = [];
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };

  constructor(
    private router: Router,
    public sensorService: SensorDataService,
    public controlService: ControlDataService,
  ) { }

  ngOnInit(): void {
    //WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
    //  let t = this;
    //  if (mediaDevices && mediaDevices.length) {
    //    this.camerasInfo = mediaDevices.filter(i => i.kind == 'videoinput').map((i, idx) => {
    //      let s = new Subject<boolean | string>();
    //      return {
    //        nextCam: s,
    //        nextCamOb: s.asObservable(),
    //        devInfo: i
    //      };
    //    });
    //  }
    //}).then(() => this.startStreams());



  }

  public startStreams() {
    //this.camerasInfo.forEach(o => o.nextCam.next(o.devInfo.deviceId));
  }

  public viewVidDetail(idx: number) {
    //this.router.navigate(['/detail', this.camerasInfo[idx].devInfo.deviceId]);
  }
  toggleWaterValve(): void {
    //this.controlService.turnOn('Water Valve');
  }

  toggleGrowLight(): void {
    //this.controlService.turnOn('Grow Light');
  }
}
