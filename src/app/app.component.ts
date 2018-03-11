import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  urlImage:string;
  title = 'app';

  constructor(){

  }

  ngOnInit(){
    this.urlImage = "https://2.bp.blogspot.com/-zpkdHbE717M/V6zIBmEpDFI/AAAAAAAAA-0/APQQeS8fCRw3eSITJVZZ68oIeeol1TjDwCLcB/s1600/bella%2Bla%2Bpaz%2Bcopia.jpg";
  }
}
