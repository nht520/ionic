import { Component } from '@angular/core';
import { BesurlService } from '../services/besurl.service';
import { Router } from '@angular/router';
import Axios from 'axios';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  constructor( public besurl:BesurlService,public router:Router,) { }
  newslist:any = [
    "头条","社会","国内","国际","娱乐","体育","军事","科技","财经","时尚",
    "头条1","社会2","国内3","国际4","娱乐5","体育6","军事7","科技8","财经9",
  ];
  text:any="";
  ngOnInit() {
    // this.newsClass();
  }
  newsClass(){
    const api = this.besurl.window.newscls;
    Axios.get(api).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }
  segmentChanged(e){
    console.log(e.detail.value);
  }

}
