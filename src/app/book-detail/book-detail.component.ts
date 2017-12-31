import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  getBookDetail(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/book/' + id).subscribe(res => {
      this.router.navigate(['/books']);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

}
