import { customers } from './data.js';

export function purchaseFrequency(){
    const countMap = {};

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]){
            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;
}

export function coolFactor(){
    const coolCount = {};

    for (let customer of customers){
        const coolFactor = customer.cool_factor;

        if (coolCount[coolFactor]){
            coolCount[coolFactor]++;
        } else {
            coolCount[coolFactor] = 1;
        }
    }
    return coolCount;
}

export function customerGender(){
    const genderCount = {};

    for (let customer of customers){
        const gender = customer.gender;

        if (genderCount[gender]){
            genderCount[gender]++;
        } else {
            genderCount[gender] = 1;
        }
    }
    return genderCount;
}
