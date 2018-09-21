import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {timer} from "rxjs/index";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-pet-match',
  templateUrl: './pet-match.component.html',
  styleUrls: ['./pet-match.component.css']
})
export class PetMatchComponent implements OnInit,OnDestroy {
  serverUrl = "http://54.233.88.185";
  //  serverUrl = "http://localhost:8000";
  pets= [];
  pelagem="0";
  porte="0";
  tipo="0";
  castrado="0";
  private subscription: Subscription;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
      //verificando autenticação
      this.http.get<any>(this.serverUrl+"/api/auth/check/?token=" + localStorage.getItem('token'))
          .subscribe(data=> {
              return true;
          }, e =>{
              return this.router.navigate(['/']);
          });

      this.http.get<any>(this.serverUrl+"/api/busca/doacao/Braganca")
          .subscribe(data=>this.pets = data);


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
  logout(){
      localStorage.clear();
      this.router.navigate(['/']);
  }

  filtro(){
      this.http.get<any>(this.serverUrl+"/api/busca/doacao/Braganca/"+ this.porte + "/"  + this.pelagem + "/" + this.castrado + "/" + this.tipo)
          .subscribe(data=>this.pets = data)
  }

}
