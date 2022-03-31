import { customers } from './data.js';

export function purchaseFrequency(){
    const countMap = {};

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]){
            countMap[frequency]++;
        } else {
            countMap[frequency] = 0;
        }
    }
    console.log(countMap);
}
