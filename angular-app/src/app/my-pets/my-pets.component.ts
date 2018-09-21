import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css'],
})

export class MyPetsComponent implements OnInit {
    serverUrl = "http://54.233.88.185";
    //serverUrl = "http://localhost:8000";
    pets= [];
    delete = 0;
    deletarPet = null;
    deletarPetNome = null;
  constructor(private http: HttpClient,private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
      this.http.get<any>(this.serverUrl+"/api/perfil/doacao?token=" + localStorage.getItem('token'))
          .subscribe(data=>{
              this.pets = data;
          });
  }
    open(content,id, nomePet) {
        this.deletarPet= id;
        this.deletarPetNome = nomePet;
        this.modalService.open(content);
    }

  deleteVisible(){
    this.deletarPet = null;
    this.deletarPetNome= null;
    this.delete = 1;
  }
  deleteInvisible(){
    this.deletarPetNome= null;
    this.deletarPet= null;
    this.delete = 0;
  }

  deletar(idPet){
      this.http.delete<any>(this.serverUrl+"/api/doacao/"+idPet+"/?token=" + localStorage.getItem('token'))
          .subscribe( data => {
              this.ngOnInit();
              this.modalService.dismissAll();
          }
      );
  }

}
