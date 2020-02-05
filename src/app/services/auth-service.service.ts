import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private apiService : ApiService) { }
  private token: string;

  async signup(){
    const data={
      username: "lindsay", password:"wordpass1"};
      let response= await this.apiService.post("auth/signup", data);
      return response;
  }
  async login(data){
    await this.apiService.post('auth/signup', data);
    const response= await this.apiService.post("auth/login", data );
    this.token= response.token;
  }
  getToken(){
    return this.token;
  }
}
