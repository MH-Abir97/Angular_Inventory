import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestion-reporty',
  templateUrl: './requestion-reporty.component.html',
  styleUrls: ['./requestion-reporty.component.css']
})
export class RequestionReportyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

PrintView(){
  window.print();
}

}
