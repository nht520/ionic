import { Component, OnInit,ViewChild } from '@angular/core';
import Axios from 'axios';
import { BesurlService } from '../services/besurl.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:any="";
  userpassword:any="";
  // 向子组件传值
  headtext:any="返回";
  headtitle:any="注册";
  @ViewChild ('reginit') tost:any;
  constructor( public besurl:BesurlService,public router:Router,) { }

  ngOnInit() {
  }
  register(){
    console.log(this.username);
    const date = new URLSearchParams();
          date.append("memberPhone",this.username);
          date.append("memberPassword",this.userpassword);
    const api = this.besurl.window.register;
    Axios.post(api,date).then((res)=>{
      console.log(res);
      if(res.data.code === "200"){
        const texmode = "注册成功，返回登录";
        this.tost.presentAlertConfirm(texmode);
        // this.router.navigate([''])
      }else{
        const texmode = res.data.msg;
        this.tost.presentAlertConfirm(texmode);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

}

