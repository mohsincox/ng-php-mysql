import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  divisions;
  ngOnInit() {
    this.http.get("http://localhost/angular-test/ng.php")
      .map((response) => response.json())
      .subscribe((data) => {this.displaydata(data);});
  }

  displaydata(data) { 
    this.divisions = data;
  }
  
}
