/**
 * home.js (jQuery Version)
 * Handles logic for the PlantPal Home Page (index.html).
 */

$(document).ready(function() {
    // --- DOM Elements (jQuery Objects) ---
    var $plantTilesContainer = $('#plant-tiles-container');
    var $addPlantTile = $('.add-plant-tile'); // Reference to the static add tile

    // --- Initial Load ---
    displayPlants();

    // --- Event Listeners ---

    // Calendar Button
    $('#calendar-btn').on('click', function() {
        navigateTo('calendar.html'); // Use function from main.js
    });

    // Photos Button (Placeholder)
    $('#photos-btn').on('click', function() {
        alert('Photo gallery feature coming soon!');
        console.log("Photos button clicked - feature not implemented.");
    });

    // Care Tips Button (Placeholder)
    $('#care-tips-btn').on('click', function() {
        alert('General Care Tips feature coming soon!');
        console.log("Care Tips button clicked - feature not implemented.");
    });

    // Event Delegation for Delete Buttons
    // Listen for clicks on elements with class 'delete-plant-btn' INSIDE the container
    $plantTilesContainer.on('click', '.delete-plant-btn', function() {
        // 'this' refers to the button that was clicked
        var plantIdToDelete = $(this).data('plant-id'); // Get data attribute using jQuery
        if (plantIdToDelete && confirm('Are you sure you want to delete this plant?')) {
            deletePlant(plantIdToDelete);
        }
    });

    // --- Functions ---

    // Loads plants from localStorage and displays them on the page.
    function displayPlants() {
        var plants = loadPlants(); // From main.js

        // Clear existing plant tiles (but keep the 'Add Plant' tile)
        $plantTilesContainer.find('.tile:not(.add-plant-tile)').remove();

        // Add tiles for each plant using jQuery's each
        $.each(plants, function(index, plant) {
            var $tile = createPlantTile(plant);
            // Insert the new plant tile *before* the 'Add Plant' tile
            $addPlantTile.before($tile);
        });
    }

    // Creates a jQuery object for a single plant tile.
    function createPlantTile(plant) {
        // Find species info for image fallback
        var speciesInfo = findSpeciesById(plant.speciesId) || findSpeciesByName(plant.species);
        var imageUrl = plant.image || speciesInfo?.image || 'images/placeholder.png';

        // Create tile elements using jQuery
        var $tile = $('<div/>') // Create a div
            .addClass('tile plant-tile')
            .data('plant-id', plant.id); // Store plant ID

        var $img = $('<img/>')
            .attr('src', imageUrl)
            .attr('alt', 'Image of ' + plant.name);

        var $name = $('<p/>').text(plant.name); // Display nickname

        // Create Delete Button
        var $deleteBtn = $('<button/>')
            .addClass('delete-plant-btn')
            .text('X') // Simple 'X'
            .attr('title', 'Delete Plant')
            .data('plant-id', plant.id); // Associate button with plant ID

        // Append elements to the tile
        $tile.append($img).append($name).append($deleteBtn);

        return $tile;
    }

    // Deletes a plant from localStorage and updates the display.
    function deletePlant(plantId) {
        var plants = loadPlants();
        // Filter out the plant to delete
        var updatedPlants = plants.filter(function(plant) {
            return plant.id !== plantId;
        });
        savePlants(updatedPlants); // From main.js
        displayPlants(); // Refresh the display
        console.log('Plant with ID ' + plantId + ' deleted.');
    }

}); // End of $(document).ready