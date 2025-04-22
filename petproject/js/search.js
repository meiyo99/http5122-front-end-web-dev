/**
 * search.js (jQuery Version)
 * Handles logic for the PlantPal Search Plant Page (search.html).
 */

$(document).ready(function() {
    // --- DOM Elements ---
    var $searchBar = $('#plant-search-bar');
    var $speciesListContainer = $('#species-list-container');

    // --- Initial Load ---
    // Display all predefined species initially
    if (typeof predefinedSpecies !== 'undefined') {
        displaySpecies(predefinedSpecies);
    } else {
        console.error("Predefined species data not found.");
        $speciesListContainer.html('<p>Could not load plant species list.</p>');
    }

    // --- Event Listeners ---
    // Use 'input' event for real-time filtering
    $searchBar.on('input', handleSearch);

    // --- Functions ---

    // Filters and displays species based on the search bar input.
    function handleSearch() {
        var searchTerm = $searchBar.val().toLowerCase().trim();

        // Filter the predefinedSpecies array
        var filteredSpecies = predefinedSpecies.filter(function(species) {
            return species.name.toLowerCase().includes(searchTerm);
        });

        displaySpecies(filteredSpecies);
    }

    // Renders the species tiles in the container.
    function displaySpecies(speciesList) {
        $speciesListContainer.empty(); // Clear previous results using jQuery

        if (speciesList.length === 0) {
            $speciesListContainer.html('<p>No matching species found.</p>');
            return;
        }

        // Iterate using jQuery's each
        $.each(speciesList, function(index, species) {
            var $tile = createSpeciesTile(species);
            $speciesListContainer.append($tile);
        });
    }

    // Creates a jQuery object (link wrapping a tile) for a single species.
    function createSpeciesTile(species) {
        // Create link element
        var $link = $('<a/>')
            .attr('href', 'add-plant.html?speciesId=' + encodeURIComponent(species.id))
            .addClass('tile species-tile');

        // Create image
        var $img = $('<img/>')
            .attr('src', species.image || 'images/placeholder.png') // Fallback image
            .attr('alt', 'Image of ' + species.name);

        // Create name paragraph
        var $name = $('<p/>').text(species.name);

        // Append image and name to the link
        $link.append($img).append($name);

        return $link;
    }

}); // End of $(document).ready