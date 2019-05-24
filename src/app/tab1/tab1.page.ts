import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { StorageService } from '../services/storage.service';
@Component({ 
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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

  constructor(public storage:StorageService,public router:Router,) { }

  ngOnInit() {
    this.username()
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
}
