import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';
import { MessageDto } from './chat';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent implements OnInit {
   ChatEntry:FormGroup;
  constructor(private chatService:ChatService,private _fb:FormBuilder) {

    this.ChatEntry=_fb.group({
      msgText:'',
      user:'',

     })

   }
  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }


  send(): void {
    debugger;
    this.msgDto.msgText= this.ChatEntry.value.msgText;
    this.msgDto.user= this.ChatEntry.value.user;
    if(this.msgDto) {
      if(this.msgDto.user.length == 0 || this.msgDto.user.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);

  }


}




