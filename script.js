console.log("Script started");

// Wait for the page to fully load before running the code
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the shoe body element and color options
    let shoeBody = document.getElementById('shoe-body');
    let colorOptions = document.getElementsByClassName('color-option');

    // Test if we found the elements
    console.log('Found shoe body:', shoeBody);
    console.log('Found color options:', colorOptions.length);

    // Function to change shoe color
    function changeShoeColor(newColor) {
        shoeBody.style.backgroundColor = newColor;
    }

    // Add click event to each color option
    for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].addEventListener('click', function() {
            // Get the background color from the clicked element
            let clickedColor = colorOptions[i].style.backgroundColor;
            
            // Apply it to the shoe using our function
            changeShoeColor(clickedColor);
            
            // For testing - this will show you what color was clicked
            console.log('Clicked color:', clickedColor);
        });
    }
});


