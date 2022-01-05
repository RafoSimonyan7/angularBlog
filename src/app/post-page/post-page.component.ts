import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { IPost } from "../admin/shared/interfaces/post.interface";
import { ActivatedRoute, Params } from "@angular/router";
import { PostService } from "../admin/shared/services/post.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  posts$!: Observable<IPost>

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postService.getPostById(params['id'])
        })
      )
  }

}
