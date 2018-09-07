import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {timer} from "rxjs/internal/observable/timer";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverUrl = "http://http://54.233.88.185";
  popupLogin=false;
  popup=false;
  msgPop: String;
  loading: boolean = false;
  formulario: FormGroup;
  loginForm: FormGroup;
  confirmaPass: boolean;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
      //checando se está autenticado
        this.http.get<any>(this.serverUrl+"/api/auth/check/?token=" + localStorage.getItem('token'))
            .subscribe(data=> {
                this.router.navigate(['/home'])
            }, e =>{
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
            });
        this.createForm();
        this.createLoginForm();
    }

    createForm(){
        this.formulario = this.fb.group({
            nome_user: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required, Validators.minLength(6)]],
            confirma_senha: [null, [Validators.required, Validators.minLength(6)]],
            localizacao: [null, Validators.required],
            sexo: [null, Validators.required],
            dia_nasc: ['', [Validators.required, Validators.maxLength(2)]],
            mes_nasc: ['', [Validators.required, Validators.maxLength(2)]],
            ano_nasc: ['', [Validators.required, Validators.maxLength(4)]]
        });
    }
    createLoginForm(){
          this.loginForm = this.fb.group({
              email: [null, [Validators.required, Validators.email]],
              password: [null, Validators.required],
          });
    }

    loginSubmit(){

        this.loading = true;
        this.http.post(this.serverUrl+'/api/auth/login', {
            "email": this.loginForm.get('email').value,
            "password": this.loginForm.get('password').value
        })
            .subscribe(data => {
                this.loading = false;
                if(data['status']){
                    this.popUp("Usuário ou senha incorretos");
                }else{
                    console.log("login success");
                    localStorage.setItem('user_id', data['user_id']);
                    localStorage.setItem('token', data['access_token']);
                    this.router.navigate(['/home']);
                }
            });
    }

    onSubmit(){
        this.loading = true;
        const formModel = this.prepareSave();
        //this.criarForm(form);
        this.http.post(this.serverUrl+'/api/user', formModel)
            .subscribe(data => {
                this.loading = false;
                if(data['status'] == 424){
                    this.popUp("Preencha o formulario corretamente");
                }else{
                    this.popUp("Cadastrado efetuado com Sucesso!");
                    this.http.post(this.serverUrl+'/api/auth/login', {
                        "email": this.formulario.get('email').value,
                        "password": this.formulario.get('senha').value})
                        .subscribe(data => {
                            console.log("login success");
                            localStorage.setItem('user_id', data['user_id']);
                            localStorage.setItem('token', data['access_token']);
                            this.router.navigate(['/home']);
                        });
                }
            });
    }

    popUp(msg){
        this.msgPop = msg;
        this.popup = true;
    }

    confirmaSenha(){
      this.confirmaPass = (this.formulario.get('senha').value != this.formulario.get('confirma_senha').value);
    }

    private prepareSave(): any{
        var nasc = this.formulario.get('ano_nasc').value+"-"+this.formulario.get('mes_nasc').value+"-"+this.formulario.get('dia_nasc').value;

        let form = new FormData();
        form.append('nome_user',this.formulario.get('nome_user').value);
        form.append('email',this.formulario.get('email').value);
        form.append('senha',this.formulario.get('senha').value);
        form.append('localizacao',this.formulario.get('localizacao').value);
        form.append('sexo',this.formulario.get('sexo').value);
        form.append('data_nasc', nasc);

        return form;
    }

    verificaValidTouched(campo){
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;

    }
    aplicaCssErro(campo){
        return {
            'has-error' : this.verificaValidTouched(campo),
            'has-feedback' : this.verificaValidTouched(campo),
        };
    }

}

