import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sildes',
  templateUrl: './sildes.component.html',
  styleUrls: ['./sildes.component.scss'],
})
export class SildesComponent implements OnInit {
  imgUrl = 'https://www.baidu.com/img/baidu_jgylogo3.gif';
  // 接受父组件传过来的值
  @Input() list:any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {}

}
