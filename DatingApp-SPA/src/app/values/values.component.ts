import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }
  getvalues() {
    this.http.get('http://localhost:5000/api/Values')
    .subscribe(response => { this.values = response; }, error => { console.log(error); }
     );
  }
}
