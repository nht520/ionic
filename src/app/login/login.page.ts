import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BesurlService } from '../services/besurl.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  list:any = [
    {
      id:1,
      title:"5555"
    },{
      id:2,
      title:"666"  
    }
  ];
  constructor(public router:Router, public besurl:BesurlService, public storage:StorageService) { }
  ngOnInit() {

  }
  // js跳转
  logrout(){
    this.router.navigate( ['/tab1'] );
  }
  btserves(){
    console.log(this.besurl.window.login);
    this.storage.set("list",this.list)
  }
 

}
