import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SensorData } from '../data-classes/sensor-data';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  public messages: string[] = ["brown", "dry", "wilt"];
  constructor() { }

  getAllSensors(): SensorData[] {
    return environment.testData['sensor-data'];
  }
  getMoistureUrgentMessage(){
    const senseMoist = environment.testData['sensor-data'][1].value/1024 * 100;
    
      if(senseMoist > 20){
        return(this.messages[0]);
      }else if(senseMoist < 20){
        return(this.messages[1]);
      }else if(senseMoist == 20){
        return(this.messages[2]);
      }else{
        return null;
      }
    }
  }

