var randomNumber=Math.floor(Math.random()*6)+1;
var randomimage="images/dice"+randomNumber+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomNumber>randomNumber2)
{
  document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(randomNumber<randomNumber2)
{
  document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else
{
  document.querySelector("h1").textContent="Draw!";

}
