let element = document.createElement('section');
console.log(element);

const imagePath = './eco.mio_icon_white.png';

const textArray = document.getElementsByClassName('makeStyles-question-24');
const priceArray = document.getElementsByClassName('makeStyles-btb-27');

const text = textArray[1].textContent;
const price = priceArray[0].textContent;
const injectedText = `${text}: ${price}`;

element.innerHTML = `
  <div id="box">
    <img id="logo" src="${imagePath}" />
    <p>${injectedText}</p>
  </div>
  <div id="detailedInformation">
    <p>Greenhouse gas emissions can be reduced by making power on-site with renewables and other climate-friendly energy resources.</p>
  </div>
  `;

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);

parentElement.appendChild(element);

//Start styling
const section = element.style;
const logo = document.getElementById('logo').style;
const box = document.getElementById('box').style;
const detailedInformation = document.getElementById('detailedInformation').style;

section.backgroundColor = '#010682';
section.color = '#ffffff';
section.padding = '0px 10px';
section.maxWidth = '100%';
section.position = 'absolute';
section.left = '55%';
section.top = '7%';
section.borderRadius = '10px';
section.margin = '30px';

logo.width = '20px';
logo.height = '20px';
logo.marginRight = '5px';

box.display = 'flex';
box.flexDirection = 'row';
box.alignItems = 'center';

detailedInformation.display = 'none';
detailedInformation.fontWeight = '400';

element.addEventListener('mouseover', () => {
  detailedInformation.display = 'block';
});

element.addEventListener('mouseout', () => {
  detailedInformation.display = 'none';
});
//End styling
