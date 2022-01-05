import { Component, OnInit } from '@angular/core';
import { PostService } from "../admin/shared/services/post.service";
import { IPost } from "../admin/shared/interfaces/post.interface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  post$!: Observable<IPost[]>

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post$ = this.postService.getAll()
  }

}
