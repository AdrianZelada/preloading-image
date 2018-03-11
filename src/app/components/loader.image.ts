import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'image-async',
    templateUrl: 'loader.image.html',
    styleUrls:['./loader.image.css']
})


export class LoadingImageComponent implements OnInit {
    viewImage : boolean = false;
    
    @Input('url') set url(url:string){        
        if(url){    
            this.viewImage=false;        
            this.loadImage(url);            
        }        
    }
    @ViewChild('lImage') lImage : ElementRef;
    
    constructor() { }

    ngOnInit() {
        this.lImage.nativeElement.onload=()=>{
            this.viewImage=true;                        
        }
     }

    loadImage(urlImage){
        this.lImage.nativeElement.src = urlImage;        
    }
}
