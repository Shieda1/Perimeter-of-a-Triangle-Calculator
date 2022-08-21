// https://calculator.swiftutors.com/perimeter-of-a-triangle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofTriangleRadio = document.getElementById('perimeterofTriangleRadio');
const lengthofSideaRadio = document.getElementById('lengthofSideaRadio');
const lengthofSidebRadio = document.getElementById('lengthofSidebRadio');
const lengthofSidecRadio = document.getElementById('lengthofSidecRadio');

let perimeterofTriangle;
let lengthofSidea = v1;
let lengthofSideb = v2;
let lengthofSidec = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

perimeterofTriangleRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Side a';
  variable2.textContent = 'Length of Side b';
  variable3.textContent = 'Length of Side c';
  lengthofSidea = v1;
  lengthofSideb = v2;
  lengthofSidec = v3;
  result.textContent = '';
});

lengthofSideaRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Triangle';
  variable2.textContent = 'Length of Side b';
  variable3.textContent = 'Length of Side c';
  perimeterofTriangle = v1;
  lengthofSideb = v2;
  lengthofSidec = v3;
  result.textContent = '';
});

lengthofSidebRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Triangle';
  variable2.textContent = 'Length of Side a';
  variable3.textContent = 'Length of Side c';
  perimeterofTriangle = v1;
  lengthofSidea = v2;
  lengthofSidec = v3;
  result.textContent = '';
});

lengthofSidecRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of Triangle';
  variable2.textContent = 'Length of Side a';
  variable3.textContent = 'Length of Side b';
  perimeterofTriangle = v1;
  lengthofSidea = v2;
  lengthofSideb = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofTriangleRadio.checked)
    result.textContent = `Perimeter of Triangle = ${computePerimeterofTriangle().toFixed(2)}`;

  else if(lengthofSideaRadio.checked)
    result.textContent = `Length of Side a = ${computeLengthofSidea().toFixed(2)}`;

  else if(lengthofSidebRadio.checked)
    result.textContent = `Length of Side b = ${computeLengthofSideb().toFixed(2)}`;

  else if(lengthofSidecRadio.checked)
    result.textContent = `Length of Side c = ${computeLengthofSidec().toFixed(2)}`;
})

// calculation

function computePerimeterofTriangle() {
  return Number(lengthofSidea.value) + Number(lengthofSideb.value) + Number(lengthofSidec.value);
}

function computeLengthofSidea() {
  return Number(perimeterofTriangle.value) - Number(lengthofSideb.value) - Number(lengthofSidec.value);
}

function computeLengthofSideb() {
  return Number(perimeterofTriangle.value) - Number(lengthofSidea.value) - Number(lengthofSidec.value);
}

function computeLengthofSidec() {
  return Number(perimeterofTriangle.value) - Number(lengthofSidea.value) - Number(lengthofSideb.value);
}