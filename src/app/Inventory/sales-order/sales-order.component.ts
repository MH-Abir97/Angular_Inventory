import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})

export class SalesOrderComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Onclick(){
    this.toastr.success("Hello world!", "Toastr fun!", {
      titleClass: "center",
      messageClass: "center"
    });
  }

}
