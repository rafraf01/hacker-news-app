import { customPipe } from './custom-pipe.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new customPipe();
    expect(pipe).toBeTruthy();
  });
});
