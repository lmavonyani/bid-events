import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Comment } from './comment';

@NgModule({
  declarations: [
    Comment,
  ],
  imports: [
    IonicPageModule.forChild(Comment),
  ],
  exports: [
    Comment
  ]
})
export class CommentModule {}
