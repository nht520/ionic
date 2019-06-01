import { Component, OnInit,ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { BesurlService } from '../services/besurl.service';
import { StorageService } from '../services/storage.service';
import Axios from 'axios';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild ('tost') tost:any;
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
     public router:Router, public besurl:BesurlService,
      public storage:StorageService) { }
  ngOnInit() {
    this.userLogin();
  }
  // 判断用户是否登录
  userLogin(){
      console.log("8888888");
      const username = this.storage.get("user");
      if(username === "" || username=== undefined || username === null){
        this.router.navigate([''])
      }else{
        this.router.navigate(['/app/tabs/tab1'])
      }
    }
  // js跳转
  logrout(){
    this.router.navigate( ['/tab1'] );
  }
  // 删除
  affirm(){
    console.log("确认删除")
  }
  btserves(){
    const api = this.besurl.window.login;
    // const date:any = {
    //   params:{
    //     memberName:this.username,
    //     memberPassword:this.userpassword
    //   }
    // }
    if( this.username === '' ){
      // 获取子组件的方法,并传递数据
      const texmode = "电话号码不能为空";
      this.tost.presentAlertConfirm(texmode);

    } else if( this.username.length < 11){
      console.log(this.username)
      const texmode = "电话号码输入错误";
      this.tost.presentAlertConfirm(texmode);
    } else if( this.userpassword === '' ) {
      const texmode = "请输入密码";
      this.tost.presentAlertConfirm(texmode);
    } else if( /^[\d\D]{6,12}$/.test(this.userpassword) === false){
      const texmode = "密码在6-12位之间";
      this.tost.presentAlertConfirm(texmode);
    } else {
      const date = new URLSearchParams();
            date.append("memberPhone",this.username);
            date.append("memberPassword",this.userpassword);
      Axios.post(api,date).then((res)=>{
        console.log(res)
        if(res.data.code === '200'){
          const texmode = "登录成功";
          this.tost.presentToast(texmode);
          // 将数据存在storage
          this.storage.set("user",res.data.data)
          this.router.navigate( ['/app/tabs/tab1'] );
        }else{
          const texmode = res.data.msg;
          this.tost.presentAlertConfirm(texmode);
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
    // console.log(this.besurl.window.login);
    // this.storage.set("list",this.list)
  }
 

}
