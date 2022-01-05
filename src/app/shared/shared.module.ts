import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { QuillModule } from "ngx-quill";
import { SearchPipe } from "../admin/shared/pipes/search.pipe";

@NgModule ( {
  declarations: [SearchPipe],
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    SearchPipe
  ]
} )

export class SharedModule {}
