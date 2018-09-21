import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {timer} from "rxjs/index";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {
    serverUrl = "http://54.233.88.185";
    //serverUrl = "http://localhost:8000";
    id=null;
    user= [];
    private subscription: Subscription;

    constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {
        this.route.params.subscribe(res => this.id= res.id);
    }

  ngOnInit() {
      //verificando autenticação
      this.http.get<any>(this.serverUrl+"/api/auth/check/?token=" + localStorage.getItem('token'))
          .subscribe(data=> {
              true;
          }, e =>{
              this.router.navigate(['/']);
          });
      // seu perfil
      if(this.id != null){
          this.http.get<any>(this.serverUrl+"/api/perfil/" + this.id)
              .subscribe(data=> {
                  this.user = data[0];
              });
      }else{ //perfil de outro usuario

            this.http.get<any>(this.serverUrl+"/api/perfil?token=" + localStorage.getItem('token'))
                .subscribe(data => {
                    this.user = data[0];
                }, e =>{
                    this.router.navigate(['/']);
                });
      }
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
  sair(){
    this.subscription.unsubscribe();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

