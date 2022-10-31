import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MessageDto } from 'src/app/Chat/chat-ui/chat';
import { ChatService } from 'src/app/Chat/chat.service';
export interface User {
  name: string;
}
@Component({
  selector: 'app-requestion-entry',
  templateUrl: './requestion-entry.component.html',
  styleUrls: ['./requestion-entry.component.css']
})
export class RequestionEntryComponent implements OnInit {

  RequestionEntry:FormGroup;

  ItemDetails:any={};
  ItemDetailList:any=[];
  ddlItem=null;
  ddlItemList:any={};
  count=0;
  listofNotification:any=[];
 // myControl = new FormControl('');
  options= [
    {Id:1,Name:"One"},
    {Id:2,Name:"Two"},
    {Id:3,Name:"Three"},
  ];

  filteredOptions:any= Observable<any[]>;

  constructor(private _fb:FormBuilder,private chatService:ChatService) {
   this.RequestionEntry=_fb.group({
    EmployeeId:'0',
    myControl:'',
   })
   }

  ngOnInit(): void {
    debugger;
    this.filteredOptions = this.RequestionEntry.controls['myControl'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.ddlItemList=null;

    this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }
  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.UserName = obj.Message;
    newObj.Message = obj.Message;
    this.listofNotification.push(newObj);
    this.count= this.listofNotification.length;

  }
 private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.Name.toLowerCase().includes(filterValue));
  }

  OnAdd(){
    debugger;
   // this.ItemDetails.Id=this.ddlItem.Id;
   // this.ItemDetails.Name=this.ddlItem.Name;
    this.ItemDetailList.push(this.ItemDetails);
    this.RequestionEntry.value.myControl;
    this.ItemDetails={};
    this.ddlItem=null;
  }

  onSelFunc(option:any){
    this.ddlItem=option;

    console.log('Data',this.ddlItemList)
  }
}
