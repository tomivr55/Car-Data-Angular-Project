import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CarPost } from '../types/carPost';

@Component({
  selector: 'app-car-posts-list',
  templateUrl: './car-posts-list.component.html',
  styleUrls: ['./car-posts-list.component.css'],
})
export class CarPostsListComponent implements OnInit {
  constructor(private api: ApiService) {}
  themeComent: CarPost[] = [];
  ngOnInit(): void {
    this.api.getCarPosts().subscribe((post) => {
      console.log(post);
      this.themeComent = post;
    });
  }
}
