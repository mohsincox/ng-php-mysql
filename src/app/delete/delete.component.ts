import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }
  id: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.http.get("http://localhost/angular-test/ng-delete.php?id="+this.id)
      .map((response) => response)
      .subscribe(() => {
        this.router.navigate([""]);
      });
    });
  }

}
