// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { purchaseFrequency, coolFactor, customerGender } from '../data-utils.js';

const test = QUnit.test;

test('bar chart graph should give an object of frequency and how many times they are used in the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        'Daily': 142,
        'Monthly': 123,
        'Never': 123,
        'Often': 126,
        'Once': 107,
        'Seldom': 129,
        'Weekly': 122,
        'Yearly': 128
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = purchaseFrequency();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should give an object with 10 levels of cool and how often they are in the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        1: 109, 
        2: 119, 
        3: 99,
        4: 101,
        5: 93,
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95 
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = coolFactor();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should give an object with 10 levels of cool and how often they are in the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        'Agender': 17,
        'Bigender': 14,
        'Female': 457,
        'Genderfluid': 18,
        'Genderqueer': 11,
        'Male': 448,
        'Non-binary': 24,
        'Polygender': 11

    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = customerGender();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});