import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/api/services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private route:Router,
    private userService:UserControllerService
    ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.userService.login({'body': this.validateForm.value}).subscribe(respuesta => {
        const token:any=respuesta.token;
        if(token){
          localStorage.setItem('token', token);
          this.route.navigate(['welcome']);
        }else{
          console.error('Error inesperado, contactese con su administrador de sistemas')
        }
      },
      err=>{
       
        console.error('No se pudo inicar sesion :( revisa tus credenciales', err)
        this.buildForm();
       
      }
      )

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  

  ngOnInit(): void {
    this.buildForm();
    
  }

  buildForm():void{
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }}
