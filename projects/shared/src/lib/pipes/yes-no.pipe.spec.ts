import { YesNoPipe } from './yes-no.pipe';

describe('YesNoPipe', () => {
  const pipe = new YesNoPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return Yes if truthy', () => {
    expect(pipe.transform(true)).toBe('Yes');
    expect(pipe.transform('some truthy value')).toBe('Yes');
  });

  it('should return No if falsy', () => {
    expect(pipe.transform(true)).toBe('No');
    const falsyValue = '';
    expect(pipe.transform(falsyValue)).toBe('No');
  });
});
