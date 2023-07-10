import { ByAuthorPipe } from './by-author.pipe';

describe('ByAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new ByAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
