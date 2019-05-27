import { Component, OnInit } from '@angular/core';
// 获取git传值 ，首先引入import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BesurlService } from '../../services/besurl.service';
import Axios from 'axios';
@Component({
  selector: 'app-ordetils',
  templateUrl: './ordetils.page.html',
  styleUrls: ['./ordetils.page.scss'],
})
export class OrdetilsPage implements OnInit {
  detailsId:any=[];
  constructor(public besurl:BesurlService,public route: ActivatedRoute,) { }
  ngOnInit() {
    this.ordedst()
  }
  ordedst(){
    const api = this.besurl.window.update;
      // 获取动态路由传值
      this.route.params.subscribe((data) => {
        console.log(data.aid+"路由");
        this.detailsId = data.aid;
    });
    const date = {
        params:{
          id:this.detailsId
        }
    }
    Axios.get(api,date).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

}
