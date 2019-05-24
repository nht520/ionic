import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( 
    public storeage:StorageService, public router:Router,
    ) { }

  ngOnInit() {
  }
  quit(){
    this.storeage.remove("user");
    this.router.navigate([""]);
    
  }
}
