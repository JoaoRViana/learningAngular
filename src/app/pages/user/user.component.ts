import { Component, Input, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(
    private router: Router
  ){}


  @Input() userName:string |null= sessionStorage.getItem("userName");

  navigate(){
    this.router.navigate(['/user/edit'])
  }
}
