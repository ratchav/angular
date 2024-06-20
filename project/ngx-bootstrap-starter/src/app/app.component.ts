import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-bootstrap-starter';
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
