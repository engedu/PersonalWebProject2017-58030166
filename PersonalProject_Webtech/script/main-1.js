/* define a searchfunction */
function searchFunction() {
    var input,filter,figure,a,i; // global variables
    input = document.getElementById('myinput'); // get an element id="myinput" in DOM HTML
    filter = input.value.toUpperCase(); // change a character to A-Z when you type a-z
    article = document.getElementById('front-actors'); // get an element id="front-actors" in DOM HTML and keep value in article variable
    figure = article.getElementsByTagName('div'); // get div element in DOM HTML and keep value in figure variable


    for(i=0; i< figure.length; i++){  // check a data value in figure variable (value get in DOM HTML)
        a = figure[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            figure[i].style.display = ""; // display a data 
        }
        else{
            figure[i].style.display = 'none'; // no keyword not show content
        }
    }
}