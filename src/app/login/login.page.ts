import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BesurlService } from '../services/besurl.service';
import { StorageService } from '../services/storage.service';
import { AlertmodeService } from '../services/alertmode.service';
import Axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any ="";
  userpassword: any= "";
  texmode: any="";
  list:any = [
    {
      id:1,
      title:"5555"
    },{
      id:2,
      title:"666"  
    }
  ];
  constructor(
    public router:Router, public alert:AlertmodeService,
     public besurl:BesurlService,
      public storage:StorageService) { }
  ngOnInit() {

  }
  // js跳转
  logrout(){
    this.router.navigate( ['/tab1'] );
  }
  btserves(){
    const api = this.besurl.window.login;
    // const date:any = {
    //   params:{
    //     memberName:this.username,
    //     memberPassword:this.userpassword
    //   }
    // }
    const date = new URLSearchParams();
          date.append("memberPhone",this.username);
          date.append("memberPassword",this.userpassword);
    Axios.post(api,date).then((res)=>{
      console.log(res)
      const texmode = res.data.msg;
      this.alert.presentAlertConfirm(texmode);
    }).catch((err)=>{
      console.log(err)
    })
    console.log(this.besurl.window.login);
    this.storage.set("list",this.list)
  }
 

}
