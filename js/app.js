/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Gets navigtion items holder
const navs = document.getElementById('navbar__list')

// Gets all sections on the page.
const sections = document.querySelectorAll('main > section');

// Active class name
const ACTIVE_SECTION = 'active__section'
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Removes active class from sections
 */
function resetActiveSections() {
    sections.forEach( element => {
        element.classList.remove(ACTIVE_SECTION)  
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav from sections on page

sections.forEach( element => {
    let menuItem = element.dataset

    if(menuItem.nav) {
        let nav              = document.createElement('li')
        let nav_link         = document.createElement('a')
        nav_link.className   = 'menu__link'
        nav_link.innerHTML   = menuItem.nav
        nav_link.href        = '#' + element.id
        nav_link.dataset.nav = element.id
        nav_link.onclick     = navClicked // attach on click event
        
        // list to ul nav
        nav.appendChild(nav_link)
        navs.appendChild(
            nav
        )
    }
})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function navClicked(e) {
    e.preventDefault() // prevent default browser functionality

    let sectionId      = e.target.dataset
    let sectionElement = document.getElementById(sectionId.nav)

    window.scrollTo(0, sectionElement.offsetTop - 60) // deduct the menu height, so it doesnt go under.
    setActiveSection(sectionElement)
    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function setActiveSection(element) {
    resetActiveSections() // call to remove active class from sections if any
    element.classList.add(ACTIVE_SECTION) // add active class to current selected section
}

// Set sections as active

