import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {timer} from "rxjs";



@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css'],
})

export class MyPetsComponent implements OnInit {
    pets= [];
    delete = 0;
    deletarPet = null;
    deletarPetNome = null;
  constructor(private http: HttpClient,private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
      this.http.get<any>("http://localhost:8000/api/perfil/doacao?token=" + localStorage.getItem('token'))
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
      this.http.delete<any>("http://localhost:8000/api/doacao/"+idPet+"/?token=" + localStorage.getItem('token'))
          .subscribe( data => {
              this.ngOnInit();
          }
          );
  }

}
