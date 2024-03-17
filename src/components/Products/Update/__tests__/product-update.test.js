import dayjs from 'dayjs';
import { isNameValid, isCategoriesValid, isExpirationDateValid } from '../validators';

describe('Validators', () => {
  describe('isNameValid', () => {
    it('should return true for valid names', () => {
      expect(isNameValid('John Doe')).toBeTruthy();
      expect(isNameValid('A'.repeat(200))).toBeTruthy();
    });

    it('should return false for invalid names', () => {
      expect(isNameValid('')).toBeFalsy();
      expect(isNameValid(' '.repeat(201))).toBeFalsy();
    });
  });

  describe('isCategoriesValid', () => {
    it('should return true for valid category arrays', () => {
      expect(isCategoriesValid(['1', '2'])).toBeTruthy();
      expect(isCategoriesValid(['1', '2', '3', '4', '5'])).toBeTruthy();
    });

    it('should return false for invalid category arrays', () => {
      expect(isCategoriesValid([])).toBeFalsy();
      expect(isCategoriesValid(['1', '2', '3', '4', '5', '6'])).toBeFalsy();
    });
  });

  describe('isExpirationDateValid', () => {
    it('should return true for dates at least 30+ days in the future', () => {
      const futureDate = dayjs().add(31, 'day').format('YYYY-MM-DD');
      expect(isExpirationDateValid(futureDate)).toBeTruthy();
    });

    it('should return false for dates less than 30 days in the future', () => {
      const nearFutureDate = dayjs().add(29, 'day').format('YYYY-MM-DD');
      const pastDate = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
      expect(isExpirationDateValid(nearFutureDate)).toBeFalsy();
      expect(isExpirationDateValid(pastDate)).toBeFalsy();
    });
  });
});