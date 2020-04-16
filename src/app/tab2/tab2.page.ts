import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  results:any;

  constructor() {}

  ngOnInit(){
    fetch('./assets/input.json').then(res=>res.json()).then(json=>{
      console.log('result', json);
      this.results = json;
    });
  }

}
