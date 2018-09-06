import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetMatchComponent } from './pet-match/pet-match.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { PetMapsComponent } from './pet-maps/pet-maps.component';
import { PerfilComponent } from './perfil/perfil.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { PetMatchAddComponent } from './pet-match-add/pet-match-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsPetComponent } from './details-pet/details-pet.component';
import { LoginComponent } from './login/login.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyPetsComponent } from './my-pets/my-pets.component';




const routes: Routes= [
    {path:'petmatch', component: PetMatchComponent}, //rota da pagina de doações
    {path: 'home', component: PerfilComponent}, //rota do perfil
    {path: 'home/:id', component: PerfilComponent}, //rota do perfil
    {path: '', component: LoginComponent}, // rota default direciona para login diretamente.
    {path:'petmatch/add', component: PetMatchAddComponent}, // rota para adicionar um pet
    {path:'petmatch/details-pet/:id', component: DetailsPetComponent}, // rota para ver detalhes do pet
];

@NgModule({
  declarations: [
    AppComponent,
    PetMatchComponent,
    PetCareComponent,
    PetMapsComponent,
    PerfilComponent,
    PetMatchAddComponent,
    DetailsPetComponent,
    LoginComponent,
    MyPetsComponent,
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes, {useHash: true}),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      Ng2PageScrollModule,
      NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
