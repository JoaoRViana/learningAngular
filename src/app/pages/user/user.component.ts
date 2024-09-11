import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule,PrimaryInputComponent],
  providers:[UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  editForm!:FormGroup;
  constructor(
    private router:Router,
    private userService:UserService,
    private toastr:ToastrService
  ){
    this.editForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      newPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  @Input()userName:string|null=sessionStorage.getItem('userName')
  @Input()userEmail:string|null=sessionStorage.getItem('userEmail')

  edit(){
    
  }
}
