import { Component } from '@angular/core';
import { BesurlService } from '../services/besurl.service';
import { from } from 'rxjs';
import Axios from 'axios';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list: any =[];
  onelist:any=[];
  keylsit:any=[];
  constructor(public besurl:BesurlService){};
  doRefresh(event) {
    const api = this.besurl.window.indent;
    setTimeout(() => {
      Axios.get(api).then((res)=>{
        console.log(res);
        this.onelist=[];
        for(var i =0; i<res.data.records.length; i++){
          this.keylsit = res.data.records;
          var list = JSON.parse(res.data.records[i].orderGoods);
          this.onelist.push(list[0]);
        };
        console.log(this.onelist)
      }).catch((err)=>{
        console.log(err)
      })
      event.target.complete();
    }, 500);
  }
  ngOnInit(){
    this.doRefresh(event);
  }

}
