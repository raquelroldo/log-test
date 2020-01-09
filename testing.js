QUnit.test( "Generate Array", function( assert ) {
    generateArray(1, 20);   
    assert.ok( numbers.length === 20, "Passed! Array Length: " + numbers.length );
});

QUnit.test( "Generate New Array", function( assert ) {
    calcArray();   
    assert.ok( numbersChanged.length === 20, "Passed! Cheked Array Length: " + numbers.length );
    assert.ok( numbersChanged[19] === "buzz", "Passed! Array index 2 equals to: buzz");
});

QUnit.test( "Array Contains/Multiple of 5 ", function( assert ) { 
    multipleOfContainsFive(9);  
    assert.ok( numbers[9] === 10, "Passed! Checked Array index 9 equals to: 10"); 
    assert.ok( numbersChanged[9] === "buzz", "Passed! Cheked Array index 9 equals to: buzz");
});

QUnit.test( "Array Contains/Multiple of 3", function( assert ) { 
    multipleOfContainsThree(17);  
    assert.ok( numbers[17] === 18, "Passed! Checked Array index 17 equals to: 18"); 
    assert.ok( numbersChanged[17] === "fizz", "Passed! Cheked Array index 17 equals to: fizz");
});

QUnit.test( "Array Multiple of Both", function( assert ) { 
    multipleOfContainsBoth(14);  
    assert.ok( numbers[14] === 15, "Passed! Checked Array index 14 equals to: 15"); 
    assert.ok( numbersChanged[14] === "lucky", "Passed! Cheked Array index 14 equals to: lucky");
});

QUnit.test( "Compare Expected Arrays", function( assert ) { 
    let arrayTest = [1, 2, "fizz fizz", 4, "buzz buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", "fizz", 14, "lucky", 16, 17, "fizz", 19, "buzz"];
    generateArray(1, 20);
    calcArray();
    let isEqual = false;
    for(let i = 0; i <= arrayTest.length; i++){
        if(arrayTest[i] === numbersChanged[i]){
            isEqual = true;
        } else {
            isEqual = false;
            return;
        }
    }
    assert.ok(isEqual, "Passed! The final Array is as expected!");
});
