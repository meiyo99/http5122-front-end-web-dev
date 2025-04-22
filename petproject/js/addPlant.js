/**
 * addPlant.js (jQuery Version)
 * Handles logic for the PlantPal Add Plant Page (add-plant.html).
 */

$(document).ready(function() {
    // --- DOM Elements ---
    var $speciesHeader = $('#plant-species-header');
    var $speciesImagePreview = $('#species-image-preview');
    var $tipsList = $('#tips-list');
    var $addPlantForm = $('#add-plant-form');
    var $lastWateredInput = $('#last-watered');

    // --- Get Species from URL ---
    var urlParams = new URLSearchParams(window.location.search);
    var speciesId = urlParams.get('speciesId');
    var selectedSpecies = findSpeciesById(speciesId); // Assumes findSpeciesById is in main.js

    // --- Initial Setup ---
    if (selectedSpecies) {
        // Update header using jQuery
        $speciesHeader.text('Add ' + selectedSpecies.name);

        // Update image preview
        $speciesImagePreview.attr('src', selectedSpecies.image || 'images/placeholder.png');
        $speciesImagePreview.attr('alt', selectedSpecies.name);

        // Display tips
        $tipsList.empty(); // Clear any default content
        if (Array.isArray(selectedSpecies.tips) && selectedSpecies.tips.length > 0) {
            $.each(selectedSpecies.tips, function(index, tip) {
                $tipsList.append($('<li>').text(tip));
            });
        } else {
            $tipsList.append('<li>No specific tips available for this species.</li>');
        }

        // Set default last watered date to today if empty
        if (!$lastWateredInput.val()) {
            $lastWateredInput.val(getTodayDateString()); // Use function from main.js
        }

    } else {
        // Handle case where species is not found or ID is missing
        console.error("Species ID not found in URL or species data missing.");
        $speciesHeader.text('Error: Plant Species Not Found');
        $addPlantForm.hide(); // Hide form if species is invalid
        $tipsList.empty();
    }

    // --- Event Listeners ---

    // Form Submission
    $addPlantForm.on('submit', function(event) {
        event.preventDefault(); // Prevent default page reload

        if (!selectedSpecies) {
            alert("Cannot add plant: Species data is missing.");
            return;
        }

        // --- Get Form Data using jQuery's .val() ---
        var plantName = $('#plant-name').val().trim();
        var wateringFrequency = $('#watering-frequency').val(); // This is a string initially
        var plantDescription = $('#plant-description').val().trim();
        var lastWatered = $lastWateredInput.val(); // YYYY-MM-DD string

        // --- Basic Form Validation ---
        if (!plantName) {
            alert("Please enter a nickname for your plant.");
            $('#plant-name').trigger('focus'); // Use trigger to focus
            return;
        }
        if (!wateringFrequency) {
            alert("Please select a watering frequency.");
             $('#watering-frequency').trigger('focus');
            return;
        }
         if (!lastWatered) {
             alert("Please select the last watered date.");
             $lastWateredInput.trigger('focus');
             return;
         }
          // Simple date format check (optional but good)
         if (!/^\d{4}-\d{2}-\d{2}$/.test(lastWatered)) {
             alert("Invalid date format for 'Last Watered'. Please use YYYY-MM-DD.");
             $lastWateredInput.trigger('focus');
             return;
         }


        // --- Create New Plant Object ---
        var newPlant = {
            // Generate a unique ID (simpler format)
            id: 'plant_' + Date.now(),
            name: plantName,
            species: selectedSpecies.name,
            speciesId: selectedSpecies.id,
            description: plantDescription,
            wateringFrequency: parseInt(wateringFrequency, 10), // Convert to number
            lastWatered: lastWatered, // Store as YYYY-MM-DD string
            // Use the species image path
            image: selectedSpecies.image || 'images/placeholder.png'
            // We ignore the file input ('plant-image-input')
        };

        // --- Save to localStorage ---
        try {
            var plants = loadPlants(); // Load existing plants
            plants.push(newPlant);     // Add the new one
            savePlants(plants);        // Save the updated list

            console.log("New plant added:", newPlant);
            alert(newPlant.name + ' (' + newPlant.species + ') has been added!');

            // --- Navigate back to Home page ---
            navigateTo('index.html'); // Use function from main.js

        } catch (error) {
            console.error("Error saving plant:", error);
            alert("An error occurred while saving your plant. Please try again.");
        }
    }); // End form submit handler

    // Cancel Button
    $('#cancel-btn').on('click', function() {
        // Navigate back to the search page
        navigateTo('search.html');
    });

}); // End of $(document).ready