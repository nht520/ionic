import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { StorageService } from '../services/storage.service';
import { BesurlService } from '../services/besurl.service';
import Axios from 'axios';
@Component({ 
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  homelist: any = [];
  // 给子组件传值
  list: any=[
    {
      id:0,
      imgurl:"assets/slide03.gif"
    },
    {
      id:1,
      imgurl:"assets/slide01.png"
    },
    {
      id:2,
      imgurl:"assets/slide02.jpg"
    },
    {
      id:2,
      imgurl:"assets/123.png"
    }
  ];
  text: any= "是否确认删除？"
  // 给子组件传第方法
  sbmtButton: any ="presentAlertConfirm";

  constructor(public storage:StorageService,public besurl:BesurlService,
    public router:Router,) { }

  ngOnInit() {
    this.username();
    this.meal();
  }
  username(){
    // 判断用户是否登录
    const username = this.storage.get("user");
    console.log(username);
    if( username === null || username === undefined){
      this.router.navigate( [''] );
    }else{
      this.router.navigate( ['/app/tabs/tab1'] );
    }
  }
  meal(){
    const api = this.besurl.window.meal;
    Axios.get(api).then((res)=>{
      console.log(res)
      this.homelist = res.data.records;
    }).catch((err)=>{
      console.log(err)
    })

  }
}
