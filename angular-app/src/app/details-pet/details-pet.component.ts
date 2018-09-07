import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, timer} from "rxjs/index";

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.css']
})
export class DetailsPetComponent implements OnInit,OnDestroy {

    serverUrl = "http://http://54.233.88.185";
    id = null;
    pet= [];
    year= new Date().getFullYear();
    idade = null;
    private subscription: Subscription;

    constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {
        this.route.params.subscribe(res => this.id= res.id);
    }

  ngOnInit() {
      if(!localStorage.getItem('user_id') || !localStorage.getItem('token')){
          this.router.navigate(['/']);
      }

      this.http.get<any>(this.serverUrl+"/api/doacao/" + this.id)
          .subscribe(data=> {
              this.pet = data[0];
              this.idade= this.year - data[0].ano_nascimento;
          });
      let tempo = timer(5000,60000);
      this.subscription = tempo.subscribe(data => {
          this.http.get<any>(this.serverUrl+"/api/auth/refresh/?token=" + localStorage.getItem('token'))
              .subscribe(data=> {
                  localStorage.setItem('token', data['newToken']);
              }, e =>{
                  this.router.navigate(['/']);
              });
      })
  }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
