import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']     
})
export class AppComponent implements OnInit{
  urlImage:string;
  urlImage2:string;
  title = 'app';
  
  constructor(){

  }

  ngOnInit(){
    this.urlImage = "https://2.bp.blogspot.com/-zpkdHbE717M/V6zIBmEpDFI/AAAAAAAAA-0/APQQeS8fCRw3eSITJVZZ68oIeeol1TjDwCLcB/s1600/bella%2Bla%2Bpaz%2Bcopia.jpg";
    this.urlImage2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Los_Yungas_La_Paz_-_Bolivia.jpg/1200px-Los_Yungas_La_Paz_-_Bolivia.jpg";
  }
}
