const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

//BD1.1
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullName', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ', ' + year;
  res.send(date);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greet = 'Namaste, ' + name + '!';
  res.send(greet);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
});

app.get('/email', (req, res) => {
  let userName = req.query.userName;
  let domain = req.query.domain;
  let email = userName + '@' + domain;
  res.send(email);
});
//BD1.2 - operators
app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let total = time1 + time2 + time3;
  res.send(total.toString());
});

app.get('/average-speed', (req, res) => {
  let distance = parseFloat(req.query.totalDistance);
  let time = parseFloat(req.query.totalTime);
  let averageSpeed = distance / time;
  res.send(averageSpeed.toString());
});

app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let total = duration1 * caloriesPerMinute + duration2 * caloriesPerMinute;
  res.send(total.toString());
});

app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interest = (principal * rate * time) / 100;
  res.send(interest.toString());
});

//BD1.3 - if-else
app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }
  res.send('Number is ' + result);
});

app.get('/check-even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 == 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is logged in';
  } else {
    result = 'User is not logged in';
  }
  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for a discount';
  } else {
    result = 'User is not eligible for a discount';
  }
  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Number is positive';
  } else if (number === 0) {
    result = 'Number is zero';
  } else {
    result = 'Number is negative';
  }
  res.send(result);
});

app.get('/check-temperature', (req, res) => {
  let temp = parseFloat(req.query.temperature);
  let result;
  if (temp < 15) {
    result = 'cold';
  } else if (temp >= 15 && temp <= 25) {
    result = 'warm';
  } else {
    result = 'hot';
  }
  res.send('Temperature is ' + result);
});

app.get('/check-activity-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    resut = 'low';
  } else if (steps > 10000) {
    result = 'high';
  } else {
    result = 'moderate';
  }
  res.send('Activity level is ' + result);
});

app.get('/check-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes > 500) {
    result = 'high';
  } else {
    result = 'medium';
  }
  res.send('Engagement level is ' + result);
});

//BD1.4-Functions
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});
function getWelcomeMessage() {
  return 'Welcome to our service!';
}

app.get('/greetFunc', (req, res) => {
  let name = req.query.name;
  res.send(getWelcomeMessageName(name));
});
function getWelcomeMessageName(name) {
  return 'Hello, ' + name + '!';
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});
function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is strong';
  } else {
    return 'Password is weak';
  }
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});
function getSum(num1, num2) {
  return num1 + num2;
}

app.get('/subscription-status', (req, res) => {
  let name = req.query.name;
  let isSubscribed = req.query.isSubscribed === 'true';
  res.send(validateSubscription(name, isSubscribed));
});
function validateSubscription(name, isSubscription) {
  if (isSubscription) {
    return name + ' is subscribed';
  } else {
    return name + ' is not subscribed';
  }
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscount(price, discount));
});
function calculateDiscount(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/personalized-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(greeting(age, gender, name));
});
function greeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculatePrice(price, discount, tax));
});
function calculatePrice(price, discount, tax) {
  let discountedPrice = price - (discount * price) / 100;
  let finalPrice = discountedPrice + (discountedPrice * tax) / 100;
  return finalPrice.toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(exerciseTime(running, cycling, swimming));
});
function exerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
