import { Component, OnInit, Input } from '@angular/core';

import { faPen,faTimes  } from "@fortawesome/free-solid-svg-icons"

import { faCircle} from "@fortawesome/free-regular-svg-icons"
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  @Input()  cNames:string;

  faTimes =faTimes;
  faPen=faPen;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
