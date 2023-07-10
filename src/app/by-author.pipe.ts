import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'byAuthor' })
export class ByAuthorPipe implements PipeTransform {

  transform(author: string): string {
    return "By Author " + author;
  }

}
