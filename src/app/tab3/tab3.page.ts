import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  results:any;
  
  constructor() {}

  ngOnInit(){
    fetch('./assets/input.json').then(res=>res.json()).then(json=>{
      console.log('result', json);
      this.results = json;
    });
  }

}
