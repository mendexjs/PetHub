import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription, timer} from "rxjs/index";


@Component({
  selector: 'app-pet-match-add',
  templateUrl: './pet-match-add.component.html',
  styleUrls: ['./pet-match-add.component.css']
})
export class PetMatchAddComponent implements OnInit,OnDestroy {
  serverUrl = "http://54.233.88.185";
  year= new Date().getFullYear();
  range= [];
  years=[];

  popup=false;
  msgPop: String;
  formulario: FormGroup;
  loading: boolean = false;
  private subscription: Subscription;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
      if(!localStorage.getItem('user_id') || !localStorage.getItem('token')){
          this.router.navigate(['/']);
      }

      this.createForm();

      for (var i=0; i<=18; i++){
          this.range.push({
              label: this.year - i,
              value: parseInt(String(this.year - i))
          });
      }
      this.years = this.range;

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

  createForm(){
      this.formulario = this.fb.group({
          porte: ['', Validators.required],
          pelagem: ['', Validators.required],
          castrado: ['', Validators.required],
          tipo: ['', Validators.required],
          ano_nascimento: ['', Validators.required],
          descricao: [null, Validators.required],
          tel_contato: [null, [Validators.required,Validators.minLength(10), Validators.maxLength(12)]],
          site_contato: [null,],
          endereco: [null, Validators.required],
          cidade: [null, Validators.required],
          nome_pet: [null, Validators.required],
          imagem: [null, Validators.required],
          sexo: ['', Validators.required],
      });
      this.fileInput.nativeElement.value = '';
  }
    onSubmit(){
        this.loading = true;
        const formModel = this.prepareSave();
        //this.criarForm(form);
        if (this.http.post(this.serverUrl+'/api/doacao?token=' + localStorage.getItem('token'), formModel)
            .subscribe(data => {
                this.loading = false;
                if (data['status'] == 424) {
                    this.popUp("Preencha o formulario corretamente");
                    return null;
                }
                this.popUp("Cadastrado com Sucesso!");
                this.createForm();
            }) == null) {
            console.log("aaa");
        }
    }
  handleFile(event){
      if(event.target.files.length > 0) {
          let file = event.target.files[0];
          this.formulario.get('imagem').setValue(file);
      }
  }
  popUp(msg){
      this.msgPop = msg;
      this.popup = true;
  }

  private prepareSave(): any{
      let form = new FormData();
      form.append('id_usuario', localStorage.getItem('user_id'));
      form.append('porte',this.formulario.get('porte').value);
      form.append('pelagem',this.formulario.get('pelagem').value);
      form.append('castrado',this.formulario.get('castrado').value);
      form.append('tipo',this.formulario.get('tipo').value);
      form.append('ano_nascimento',this.formulario.get('ano_nascimento').value);
      form.append('descricao',this.formulario.get('descricao').value);
      form.append('tel_contato',this.formulario.get('tel_contato').value);
      form.append('site_contato',this.formulario.get('site_contato').value);
      form.append('endereco',this.formulario.get('endereco').value);
      form.append('cidade',this.formulario.get('cidade').value);
      form.append('nome_pet',this.formulario.get('nome_pet').value);
      form.append('imagem', this.formulario.get('imagem').value);
      form.append('sexo',this.formulario.get('sexo').value);

      return form;
  }


  voltar(){
      this.formulario.reset();
      this.router.navigate(['petmatch']);
  }
  verificaValidTouched(campo){
      return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;

  }
    verificaValidFoto(){
        return !this.formulario.get('imagem').valid;
    }

  aplicaCssErro(campo){
      return {
          'has-error' : this.verificaValidTouched(campo),
          'has-feedback' : this.verificaValidTouched(campo),
      };
  }
    aplicaCssErroIm(){
        return {
            'has-error' : this.verificaValidFoto(),
            'has-feedback' : this.verificaValidFoto(),
        };
    }
}
