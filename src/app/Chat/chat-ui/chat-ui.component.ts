import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../chat.service';
import { MessageDto } from './chat';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css'],

})
export class ChatUiComponent implements OnInit {

  

   ChatEntry:FormGroup;
  constructor(private chatService:ChatService,private _fb:FormBuilder) {

    this.ChatEntry=_fb.group({
      Message:'',
      UserName:'',

     })

   }
  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent

  }


  send(): void {
    debugger;
    this.msgDto.Message= this.ChatEntry.value.Message;
    this.msgDto.UserName= this.ChatEntry.value.UserName;
    if(this.msgDto) {
      if(this.msgDto.UserName.length == 0 || this.msgDto.Message.length == 0){
        window.alert("Both fields are required.");
        return;
      } else {
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.UserName = obj.UserName;
    newObj.Message = obj.Message;
    this.msgInboxArray.push(newObj);

  }


}




