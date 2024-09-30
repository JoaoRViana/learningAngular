import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditUserComponent} from './pages/user/edit-user/edit-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },{
        path:'signup',
        component:SignupComponent
    },{
        path:'user',
        component:UserComponent,
        canActivate:[AuthGuard],
    },{
        path:'user/edit',
        component:EditUserComponent,
        canActivate:[AuthGuard],
    },
];
