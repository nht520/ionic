import { Component } from '@angular/core';
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
      imgurl:"assets/slide02.jpg"
    },
    {
      id:1,
      imgurl:"assets/slide01.png"
    },
    {
      id:2,
      imgurl:"assets/slide03.gif"
    }
  ];
  text: any= "是否确认删除？"
  // 给子组件传第方法
  sbmtButton: any ="presentAlertConfirm";

  constructor() { }

  ngOnInit() {}
}
