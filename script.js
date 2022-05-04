
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

(function() {

console.log('i made the button do something')

let completedEssays = document.getElementsByClassName('submitessay');
    
completedEssays.forEach(
    function (essay){
        completedEssays.addEventListener('click', essaySubmit);
    });

function essaySubmit(event){
  console.log('submit button is working');
  alert('Submitted!');
}

})();

