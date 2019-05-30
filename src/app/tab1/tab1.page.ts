import { Component } from '@angular/core';
import { Router} from '@angular/router';
// 引用storage 服务
import { StorageService } from '../services/storage.service';
// 引用besurl 服务
import { BesurlService } from '../services/besurl.service';
// 引用lodding 服务
import { LoddingService } from '../services/lodding.service';
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

  constructor(public storage:StorageService, public lodding:LoddingService,
    public besurl:BesurlService, public router:Router,) { }

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
  // 套餐列表
  meal(){
    const api = this.besurl.window.meal;
    Axios.get(api).then((res)=>{
      console.log(res)
      this.lodding.presentLoading();
      this.homelist = res.data.records;
    }).catch((err)=>{
      console.log(err)
    })

  }
}
