//kilometerToMeter
function kilometerToMeter(kilo) {
    var meter = 0;
    if (kilo < 0) {   
        meter = "Please Provide Positive Value";  //if the input value is less than zero, error message will appear.
    }
    else {
        meter = kilo * 1000;
    }
    return meter;
}
console.log(kilometerToMeter(15));




//budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    var total_budget = 0;
    if (watch < 0 || mobile < 0 || laptop < 0) {
        total_budget = "No. of Gadget Cannot Be Negative"; //if the no. of gadget is less than zero, error message will appear.
    }

    else {
        var watch_price = 50 * watch;
        var mobile_price = 100 * mobile;
        var laptop_price = 500 * laptop;

        total_budget = watch_price + mobile_price + laptop_price;
    }
    return total_budget;
}
console.log(budgetCalculator(5, 2, 10));




//hotelCost
function hotelCost(days) {
    var totalRent = 0;
    if (days < 0) {
        totalRent = "No. of Staying Days Cannot Be Negative";
    }
    else if (days <= 10) {
        totalRent = days * 100;
    }
    else if (days <= 20) {
        var rent10 = 10 * 100;
        var remaining20 = days - 10;
        var rentRemaining20 = remaining20 * 80;
        totalRent = rent10 + rentRemaining20;
    }

    else {
        var previousRent = (10 * 100) + (10 * 80);
        var remaining = days - 20;
        var extraRent = remaining * 50;
        totalRent = previousRent + extraRent;
    }
    return totalRent;
}
console.log(hotelCost(42));




//megaFriend
function megaFriend(names) {
    var max = 0;
    var bigName = "";
    for (var i = 0; i < names.length; i++) {
        var individual = names[i];

        var length = individual.length;
        if (length == 0) {
            bigName = "Input Error. Please Check The Name Again"; //if the input name is blank without space, error message will appear.
            break;
        }

        else {
            if (length > max) {
                max = length;
                var bigName = individual;
            }
        }
    }
    return bigName;
}
console.log(megaFriend(names = ['Sagor', 'Rifat', 'Sajjad', 'Arafat', 'Sukanta', 'Tarequr', 'Alif'])); 