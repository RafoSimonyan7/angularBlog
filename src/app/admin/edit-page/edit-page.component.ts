import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PostService } from "../shared/services/post.service";
import { switchMap } from "rxjs";
import { IPost } from "../shared/interfaces/post.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component ( {
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: [ './edit-page.component.scss' ]
} )
export class EditPageComponent implements OnInit {
  form!: FormGroup;
  post!: IPost;
  submitted: boolean = false

  constructor (
    private route: ActivatedRoute,
    private postsService: PostService
  ) { }

  get title () {
    return this.form.get ( 'title' )
  }

  get text () {
    return this.form.get ( 'text' )
  }

  ngOnInit () {
    this.route.params.pipe (
      switchMap ( ( params: Params ) => {
        return this.postsService.getPostById ( params['id'] )
      } )
    ).subscribe ( ( post: IPost ) => {
      this.post = post
      this.form = new FormGroup ( {
        title: new FormControl ( post.title, Validators.required ),
        text: new FormControl ( post.text, Validators.required ),
      } )
    } )
  }

  submit () {
    if ( this.form.invalid ) {
      return
    }
    this.submitted = true
    this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }).subscribe(() => {
      this.submitted = false
    })
  }
}
