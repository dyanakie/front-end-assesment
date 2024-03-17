import dayjs from 'dayjs';
import {timestampToDays} from '../../../utils/utils';

export const isNameValid = (value) => {
    return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
    return value.length > 0 && value.length <= 5;
}

export const isExpirationDateValid = (expDate) => {
    const currentDate = dayjs();
	const expirationDate = dayjs(expDate);
	const minimumExpirationDate = currentDate.add(30, 'day');

    return !expirationDate.isBefore(minimumExpirationDate);
}
