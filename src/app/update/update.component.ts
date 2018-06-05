import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }
  divisions;
  id: number;
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.http.get("http://localhost/angular-test/ng-edit.php?id="+this.id)
      .map((response) => response.json())
      .subscribe((data) => {this.displayData(data);});
    });
  }

  displayData(data) { 
    this.divisions = data;
  }

  onClickSubmitToUpdate(data) {
    this.http.get("http://localhost/angular-test/ng-update.php?id="+data.id+"&name="+data.name)
      .map((response) => response)
      .subscribe(() => {
        //this.isAdded = true;
        this.router.navigate([""]);
      });  
  }

}
