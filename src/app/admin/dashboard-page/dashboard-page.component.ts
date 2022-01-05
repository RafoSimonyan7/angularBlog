import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from "../shared/services/post.service";
import { IPost } from "../shared/interfaces/post.interface";
import { Subscription } from "rxjs";

@Component ( {
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: [ './dashboard-page.component.scss' ]
} )
export class DashboardPageComponent implements OnInit, OnDestroy {
  search: any = '';

  posts: IPost[] = []
  postSub!: Subscription

  constructor ( private postService: PostService ) { }

  ngOnInit () {
    this.postSub = this.postService.getAll ().subscribe ( posts => {
      this.posts = posts
    } )
  }

  remove ( id: string | undefined ) {
    if ( id ) {
      this.postService.remove ( id ).subscribe ( () => {
        this.posts = this.posts.filter ( post => post.id !== id )
      } )
    }
  }

  ngOnDestroy () {
    if ( this.postSub ) {
      this.postSub.unsubscribe ()
    }
  }
}
