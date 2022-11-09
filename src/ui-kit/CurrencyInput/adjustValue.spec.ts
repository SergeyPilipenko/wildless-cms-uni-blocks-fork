import { adjustValue } from './adjustValue ';

describe('adjustValue should return valid number', () => {
  it('should zero before dot', () => {
    expect(adjustValue('.')).toEqual('0.');
  });
  it('should replace comma to dot', () => {
    expect(adjustValue('3,3')).toEqual('3.3');
  });
  it('should keep only one dot', () => {
    expect(adjustValue('3.33.')).toEqual('3.33');
  });
});
