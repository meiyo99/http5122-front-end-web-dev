/**
 * main.js
 * Contains shared data, functions (like localStorage handling), and constants using 'var' and basic comments.
 */

// --- Constants ---
var PLANTS_STORAGE_KEY = 'plantPalPlants'; // Key for localStorage

// --- Predefined Plant Species Data ---
// Simple array of objects
var predefinedSpecies = [
    { id: 'monstera', name: 'Monstera Deliciosa', image: 'images/monstera.jpg', tips: ['Prefers bright, indirect light.', 'Water when top 1-2 inches of soil are dry.', 'Provide support for climbing.'] },
    { id: 'snake_plant', name: 'Snake Plant', image: 'images/snake_plant.jpg', tips: ['Tolerates low light but prefers indirect light.', 'Water sparingly, allow soil to dry out completely.', 'Very drought-tolerant.'] },
    { id: 'fiddle_leaf', name: 'Fiddle Leaf Fig', image: 'images/fiddle_leaf.jpg', tips: ['Needs bright, consistent indirect light.', 'Water when top inch of soil is dry.', 'Avoid drafts and sudden temperature changes.'] },
    { id: 'peace_lily', name: 'Peace Lily', image: 'images/peace_lily.jpg', tips: ['Prefers medium, indirect light.', 'Keep soil consistently moist but not waterlogged.', 'Will droop when thirsty.'] },
    { id: 'spider_plant', name: 'Spider Plant', image: 'images/spider_plant.jpg', tips: ['Adaptable to various light conditions (indirect preferred).', 'Water moderately, allowing topsoil to dry.', 'Produces "spiderettes" (baby plants).'] },
    { id: 'pothos', name: 'Pothos', image: 'images/pothos.jpg', tips: ['Thrives in various light conditions.', 'Water when the top inch of soil is dry.', 'Easy to propagate from cuttings.'] },
    { id: 'zz_plant', name: 'ZZ Plant', image: 'images/zz_plant.jpg', tips: ['Tolerates very low light.', 'Water very sparingly, drought-tolerant.', 'Allow soil to dry out completely between waterings.'] },
    { id: 'rubber_plant', name: 'Rubber Plant', image: 'images/rubber_plant.jpg', tips: ['Prefers bright, indirect light.', 'Water when the top inch of soil is dry.', 'Wipe leaves occasionally to keep them glossy.'] },
    { id: 'succulent', name: 'Succulent (General)', image: 'images/succulent.jpg', tips: ['Needs bright light, often direct sun.', 'Water deeply but infrequently.', 'Ensure excellent drainage.'] }
];

// --- Hardcoded Initial Plants (Example) ---
// Structure: { id: uniqueId, name: 'Nickname', species: 'Species Name', speciesId: 'matching_predefined_id', description: 'Notes', wateringFrequency: days(int), lastWatered: 'YYYY-MM-DD', image: 'path/to/image.jpg' }
var hardcodedPlants = [
    {
        id: 'hc_' + Date.now() + '_1', // Simpler unique ID
        name: 'Monty',
        species: 'Monstera Deliciosa',
        speciesId: 'monstera',
        description: 'My first Monstera!',
        wateringFrequency: 7, // Weekly
        lastWatered: getYesterdayDateString(), // Set to yesterday
        image: 'images/monstera.jpg'
    },
    {
        id: 'hc_' + Date.now() + '_2',
        name: 'Sneaky Pete',
        species: 'Snake Plant',
        speciesId: 'snake_plant',
        description: 'Hard to kill.',
        wateringFrequency: 14, // Bi-weekly
        lastWatered: getYesterdayDateString(), // Set to yesterday
        image: 'images/snake_plant.jpg'
    }
];

// --- Utility Functions ---

// Retrieves the list of user plants from localStorage.
// Initializes with hardcoded plants if localStorage is empty.
function loadPlants() {
    var plantsJson = localStorage.getItem(PLANTS_STORAGE_KEY);
    if (plantsJson) {
        try {
            // We MUST use JSON.parse here to get the array back
            var plants = JSON.parse(plantsJson);
            // Basic validation: check if it's an array
            return Array.isArray(plants) ? plants : initializeDefaultPlants();
        } catch (e) {
            console.error("Error parsing plants from localStorage:", e);
            return initializeDefaultPlants(); // Fallback on error
        }
    } else {
        // No data in localStorage, initialize with defaults
        return initializeDefaultPlants();
    }
}

// Saves the provided array of plants to localStorage.
function savePlants(plants) {
    if (!Array.isArray(plants)) {
        console.error("Attempted to save non-array to localStorage for plants.");
        return;
    }
    // We MUST use JSON.stringify here to store the array correctly
    localStorage.setItem(PLANTS_STORAGE_KEY, JSON.stringify(plants));
}

// Initializes localStorage with hardcoded plants and saves them.
function initializeDefaultPlants() {
    console.log("Initializing default plants in localStorage.");
    // Use the hardcoded plants array defined above
    savePlants(hardcodedPlants);
    return hardcodedPlants;
}

// Finds a predefined species object by its ID.
function findSpeciesById(speciesId) {
    for (var i = 0; i < predefinedSpecies.length; i++) {
        if (predefinedSpecies[i].id === speciesId) {
            return predefinedSpecies[i];
        }
    }
    return null; // Not found
}

// Finds a predefined species object by its Name (case-insensitive).
function findSpeciesByName(speciesName) {
     var lowerCaseName = speciesName.toLowerCase();
    for (var i = 0; i < predefinedSpecies.length; i++) {
        if (predefinedSpecies[i].name.toLowerCase() === lowerCaseName) {
            return predefinedSpecies[i];
        }
    }
    return null; // Not found
}


// Gets yesterday's date as a string in 'YYYY-MM-DD' format.
function getYesterdayDateString() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0]; // Format: YYYY-MM-DD
}

// Gets today's date as a string in 'YYYY-MM-DD' format.
function getTodayDateString() {
    var today = new Date();
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
}

// Adds a specified number of days to a given date string.
function addDaysToDate(dateString, daysToAdd) {
    // Add 'T00:00:00' to ensure parsing in local timezone, avoids potential UTC issues
    var date = new Date(dateString + 'T00:00:00');
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
}

// Simple navigation helper.
function navigateTo(url) {
    window.location.href = url;
}

// console.log("PlantPal Main script loaded (jQuery version).");