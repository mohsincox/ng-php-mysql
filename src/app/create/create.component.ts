import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    
  }
  isAdded: boolean = false;
  onClickSubmitToAdd(data) {
    this.http.get("http://localhost/angular-test/ng-create.php?name="+data.name)
      .map((response) => response)
      .subscribe(() => {
        //this.isAdded = true;
        this.router.navigate([""]);
      });  
  }
}
