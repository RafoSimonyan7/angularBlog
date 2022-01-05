import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IPost } from "../interfaces/post.interface";
import { environment } from "../../../../environments/environment";
import { IFbCreateResponseInterface } from "../interfaces/fbCreateResponse.interface";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor (private http: HttpClient) {}

  create(post: IPost): Observable<IPost> {
    return this.http.post<any>(`${environment.fbDataUrl}/posts.json`, post)
      .pipe(
        map((response: IFbCreateResponseInterface) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date)
          }
        })
      )
  }

  remove(postId: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDataUrl}/posts/${postId}.json`)
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${environment.fbDataUrl}/posts/${id}.json`)
    .pipe(
      map((post: IPost) => {
        return {
          ...post, id,
          date: new Date(post.date)
        }
      })
    )
  }

  update(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${environment.fbDataUrl}/posts/${post.id}.json`, post)
  }

  /// errori message

  getAll(): Observable<IPost[]> {
    return this.http.get ( `${ environment.fbDataUrl }/posts.json` )
    .pipe (
      map ( ( response: { [key: string]: any; } ) => {
        return Object.keys ( response )
        .map ( key => ({
          ...response[key],
          id: key,
          date: new Date ( response[key].date )
        }) );
      } )
    );
  }

}
