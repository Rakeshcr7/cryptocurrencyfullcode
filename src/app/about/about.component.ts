import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private toastr: ToastrService) {
    this.toastr.info(' Section', 'About', {
      timeOut: 1000
    });
   }

  ngOnInit() {
  }

}
