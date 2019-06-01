import { Component, OnInit } from '@angular/core';
// 获取git传值 ，首先引入import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BesurlService } from '../../../services/besurl.service';
import Axios from 'axios';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    headtext: any ="返回";
    headtitle: any= "详情";
    detailsId: any = '';
    detaslist: any =[];
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
  constructor(public besurl:BesurlService,
    public route: ActivatedRoute,) { }

  ngOnInit() {
    this.parmsid();
  }
  parmsid(){
        // 获取动态路由传值
      this.route.params.subscribe((data) => {
          console.log(data.aid+"路由");
          this.detailsId = data.aid;
      });
      const api = this.besurl.window.mealDts;
      const date ={
        params:{
          id:this.detailsId,
        }
      }
      Axios.get(api,date).then((res)=>{
        console.log(res)
        this.detaslist=res.data.data;
        // 字符串截取
        // const str=res.data.data.mealWheel;
        // console.log("原字符串:",str)
        // this.list=str.split(',')
        // console.log("转成的数组:",this.list)

      }).catch((err)=>{
        console.log(err)
      })
  }
}
