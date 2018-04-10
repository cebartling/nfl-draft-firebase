import { WeightConversionPipe } from './weight-conversion.pipe';

describe('WeightConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new WeightConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
