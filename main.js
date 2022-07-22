/**
 * Bài 1: Cho nguời dùng nhập 3 số nguyên. Viết chương trình xuất 3 số theo thứ
        tự tăng dần
 */
function ascendingNumber(x, y, z) {
  var output = "";

  if (x < y && x < z) {
    if (y < z) {
      output = x + "<" + y + "<" + z;
    } else {
      output = x + "<" + z + "<" + y;
    }
  } else if (y < x && y < z) {
    if (x < z) {
      output = y + "<" + x + "<" + z;
    } else {
      output = y + "<" + z + "<" + x;
    }
  } else if (z < x && z < y) {
    if (x < y) {
      output = z + "<" + x + "<" + y;
    } else {
      output = z + "<" + y + "<" + x;
    }
  }

  return output;
}

document.getElementById("btnAscending").onclick = function () {
  // input
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;

  // process
  var arrangement = ascendingNumber(num1, num2, num3);
  // output
  document.getElementById("ascendingNumberAnnounce").innerHTML = arrangement;
};

function greetingFamily(member) {
  switch (member) {
    case "B":
      return "Xin chào Bố!";
    case "M":
      return "Xin chào Mẹ!";
    case "A":
      return "Xin chào anh Trai!";
    case "E":
      return "Xin chào em Gái!";
  }
}

// Bài 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình
document.getElementById("btnGreeting").onclick = function () {
  // input
  var person = document.getElementById("person").value;

  // process
  var output = greetingFamily(person);

  // output
  document.getElementById("greetingAnnounce").innerHTML = output;
};

// Bài 3: Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
var numOdd = 0;
var numEven = 0;

function countOddEven(number_in) {
  if (number_in % 2 === 0) {
    numEven++;
  } else {
    numOdd++;
  }
}

document.getElementById("btnCounting").onclick = function () {
  numOdd = 0;
  numEven = 0;
  // input
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;

  // process
  countOddEven(number1);
  countOddEven(number2);
  countOddEven(number3);

  // output
  var output = "";
  output += "<p>Số lượng số chẵn: " + numEven + "</p>";
  output += "<p>Số lượng số lẻ: " + numOdd + "</p>";
  document.getElementById("countingAnnounce").innerHTML = output;
};

// 4. Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
function isIsoscelesTriangle(e1, e2, e3) {
  var result = false;

  if (
    (e1 === e2 || e1 === e3 || e2 === e3) &&
    (e1 != e2 || e1 != e3 || e2 != e3)
  ) {
    result = true;
  }
  return result;
}

function isEquilateralTriangle(e1, e2, e3) {
  var result = false;

  if (e1 === e2 && e1 === e3) {
    result = true;
  }
  return result;
}

function isAngledTriangle(e1, e2, e3) {
  var result = false;

  if (
    Math.pow(e1, 2) + Math.pow(e2, 2) === Math.pow(e3, 2) ||
    Math.pow(e1, 2) + Math.pow(e3, 2) === Math.pow(e2, 2) ||
    Math.pow(e2, 2) + Math.pow(e3, 2) === Math.pow(e1, 2)
  ) {
    result = true;
  }
  return result;
}

document.getElementById("btnTriangleType").onclick = function () {
  // input
  var edge1 = document.getElementById("edge1").value * 1;
  var edge2 = document.getElementById("edge2").value * 1;
  var edge3 = document.getElementById("edge3").value * 1;

  // process
  var result1 = isIsoscelesTriangle(edge1, edge2, edge3);
  var result2 = isEquilateralTriangle(edge1, edge2, edge3);
  var result3 = isAngledTriangle(edge1, edge2, edge3);

  var output = "";
  if (result1 === true) {
    output = "Hình tam giác cân";
  } else if (result2 === true) {
    output = "Hình tam giác đều";
  } else if (result3 === true) {
    output = "Hình tam giác vuông";
  } else {
    alert("Tam giác thường");
  }

  // output
  document.getElementById("triangleTypeAnnounce").innerHTML = output;
};
