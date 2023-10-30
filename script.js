const toggleSwitch = 
    document.querySelector('.theme-slider input[type="checkbox"]'); 
  
/* Function to change theme */
function switchTheme(e) { 
  
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) { 
        document.documentElement.setAttribute('theme', 'dark'); 
    } 
  
    /* While page in dark mode and checkbox is  
    checked then theme back to change light*/
    else { 
        document.documentElement.setAttribute('theme', 'light'); 
    } 
} 
  
toggleSwitch.addEventListener('change', switchTheme, false);


const cards = document.querySelectorAll(".projectCards");

cards.forEach(card => card.addEventListener('click',linkOpener))

function linkOpener(e){
    console.log(e.target.getAttribute('href'))
    window.open(e.target.getAttribute('href'), '_self');
}