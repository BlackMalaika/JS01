const myScreenOutput = document.getElementById('final');
const myDeets = {
    myFirstName: 'Angel',
    myLasttName: 'OkeyMoses',
    myHeight: '5ft 4in',
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML = '<h2>'+ 'First Name: ' + myDeets.myFirstName + ' <br>'  +' Last Name: ' + myDeets.myLasttName + '<br> ' + 'Height: ' + myDeets.myHeight + '<br> '  +'Country: '+ myDeets.myCountry+ '</h2>';
console.log(myDeets)