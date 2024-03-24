import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-car-posts-list',
  templateUrl: './car-posts-list.component.html',
  styleUrls: ['./car-posts-list.component.css'],
})
export class CarPostsListComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getCarPosts(4).subscribe((post) => {
      console.log(post);
    });
  }
}
