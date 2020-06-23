import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  documentRating : number
  oldRating : number
  ngOnInit(): void {
    if(this.oldRating){
    var stringRating = String(this.oldRating * 2)
    var element = document.getElementById(stringRating)
    element.setAttribute("checked","checked") 
  }
}

  rateDocument(rate){
    this.documentRating = Number(rate)
    console.log(this.documentRating)
  }
}
