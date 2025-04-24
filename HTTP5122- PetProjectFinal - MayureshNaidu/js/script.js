// 2 Hard coded plants
var plants = [
    {
        id: 1,
        name: "Jake the Snake Plant",
        species: "Snake Plant",
        description: "Tough and resilient plant in the living room",
        image: "images/snake-plant.jpg",
        wateringFrequency: 14,
        lastWatered: new Date(2025, 3, 16)
    },
    {
        id: 2,
        name: "Maya",
        species: "Monstera",
        description: "Trailing vine plant in the kitchen",
        image: "images/monstera.jpg",
        wateringFrequency: 7,
        lastWatered: new Date(2025, 3, 21)
    }
];

var plantCareInfo = {
    "Snake Plant": {
        tips: [
            "Water once every 2-4 weeks",
            "Tolerates low light but prefers indirect bright light",
            "Let soil dry completely between waterings"
        ]
    },
    "Basil": {
        tips: [
            "Water when the top inch of soil is dry",
            "Thrives in medium to bright indirect light",
            "Prune regularly to encourage bushier growth"
        ]
    },
    "Peace Lily": {
        tips: [
            "Keep soil consistently moist but not soggy",
            "Prefers indirect light and high humidity",
            "Leaves droop when thirsty - a good indicator"
        ]
    },
    "Monstera": {
        tips: [
            "Water when top 2 inches of soil are dry",
            "Likes bright, indirect light",
            "Enjoys humid environments"
        ]
    },
    "Aloe Vera": {
        tips: [
            "Water deeply but infrequently",
            "Needs bright, direct light",
            "Allow soil to dry out between waterings"
        ]
    },
    "Dumb Cane": {
        tips: [
            "Very drought tolerant - water every 2-3 weeks",
            "Adapts to low light conditions",
            "Avoid overwatering"
        ]
    },
    "English Ivy": {
        tips: [
            "Keep soil lightly moist",
            "Thrives in bright, indirect light",
            "Produces 'spiderettes' that can be propagated"
        ]
    },
    "Lucky Bamboo": {
        tips: [
            "Water when top inch of soil is dry",
            "Likes bright, filtered light",
            "Sensitive to changes in environment"
        ]
    },
    "African Violet": {
        tips: [
            "Water sparingly - once every 2-3 weeks",
            "Needs bright light or full sun",
            "Use well-draining soil"
        ]
    }
};

// Function to save plants to sessionStorage
function savePlants() {
    sessionStorage.setItem('plants', JSON.stringify(plants));
}

// Function to load plants from sessionStorage
function loadPlants() {
    var storedPlants = sessionStorage.getItem('plants');
    if (storedPlants) {
        plants = JSON.parse(storedPlants);
        
        // Convert string dates back to Date objects
        for (var i = 0; i < plants.length; i+=1) {
            plants[i].lastWatered = new Date(plants[i].lastWatered);
        }
    }
}

// Function to get plant by ID
function getPlantById(id) {
    for (var i = 0; i < plants.length; i+=1) {
        if (plants[i].id === id) {
            return plants[i];
        }
    }
    return null;
}

// Function to generate a unique ID using the Date.now method
function generateId() {
    return Date.now();
}

// Function to remove plant by ID
function removePlantById(id) {
    for (var i = 0; i < plants.length; i+=1) {
        if (plants[i].id === id) {
            plants.splice(i, 1);
            break;
        }
    }
    savePlants();
}

// ---------------------------------------------------
// Home Page Functions
// ---------------------------------------------------

function setupHomePage() {
    loadPlants();
    displayPlants();
    
    // Event listeners for navigation
    $("#add-plant-tile").click(function() {
        window.location.href = "search.html";
    });
    
    $("#calendar-btn").click(function() {
        window.location.href = "calendar.html";
    });
    
    $("#photos-btn").click(function() {
        alert("Photos feature coming soon!");
    });
    
    $("#care-tips-btn").click(function() {
        alert("Care Tips feature coming soon!");
    });
}

// Function to display plants on the home page
function displayPlants() {
    var plantContainer = $(".plant-container");
    
    // Clear existing plants
    plantContainer.empty();
    
    // Add each plant
    for (var i = 0; i < plants.length; i+=1) {
        var plant = plants[i];
        var plantTile = $('<div class="plant-tile">').html(`
            <div class="plant-image">
                <img src="${plant.image}" alt="${plant.name}">
            </div>
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p>Last watered: ${getDaysAgo(plant.lastWatered)}</p>
                <button class="remove-plant-btn" data-id="${plant.id}">Remove</button>
            </div>
        `);
        
        plantContainer.append(plantTile);
    }
    
    // Add the "New Plant" tile
    var addPlantTile = $('<div class="plant-tile add-plant" id="add-plant-tile">').html(`
        <div class="add-plant-content">
            <h3>Add Plant</h3>
            <span class="plus-icon">+</span>
        </div>
    `);
    
    plantContainer.append(addPlantTile);

    // Event listeners for remove button
     $(".remove-plant-btn").click(function() {
         var plantId = parseInt($(this).data("id"));
        
         // Confirm before removing
         if (confirm("Are you sure you want to remove this plant?")) {
             removePlantById(plantId);
             // Refresh the plant display
             displayPlants(); 
        }
     });
}

// Function to get days ago text
function getDaysAgo(date) {
    var today = new Date();
    var timeDiff = today - date;
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 0) {
        return "Today";
    } else if (daysDiff === 1) {
        return "Yesterday";
    } else {
        return daysDiff + " days ago";
    }
}

// ---------------------------------------------------
// Search Plant Page Functions
// ---------------------------------------------------
function setupSearchPage() {
    // Back button event listener
    $("#back-to-home").click(function() {
        window.location.href = "index.html";
    });
    
    // Plant selection event listener
    $(".plant-search-tile").click(function() {
        var plantId = $(this).data("plant-id");
        var plantSpecies = $(this).find("p").text();
        
        // Store selected plant species in sessionStorage
        sessionStorage.setItem("selectedPlantSpecies", plantSpecies);
        
        // Navigate to add plant page
        window.location.href = "add-plant.html";
    });
}

// ---------------------------------------------------
// Add Plant Page Functions
// ---------------------------------------------------
function setupAddPlantPage() {
    // Get selected plant species from sessionStorage
    var selectedPlantSpecies = sessionStorage.getItem("selectedPlantSpecies");

    // Set the plant species in the header
    $("#plant-species").text(selectedPlantSpecies);

    // Load care tips for selected plant
    if (plantCareInfo[selectedPlantSpecies]) {
        var tipsHtml = "<ul>";
        for (var i = 0; i < plantCareInfo[selectedPlantSpecies].tips.length; i+=1) {
            tipsHtml += "<li>" + plantCareInfo[selectedPlantSpecies].tips[i] + "</li>";
        }
        tipsHtml += "</ul>";
        $("#plant-care-tips").html(tipsHtml);
    }

    // Cancel button event listener
    $("#cancel-btn").click(function() {
        window.location.href = "search.html";
    });

    // Back button event listener
    $("#back-to-search").click(function() {
        window.location.href = "search.html";
    });

    // Submit button event listener
    $("#submit-btn").click(function() {
        var plantName = $("#plant-name").val();
        var plantDescription = $("#plant-description").val();
        var wateringFrequency = parseInt($("#watering-frequency").val());

        // Validating inputs
        if (!plantName) {
            alert("Please enter a name for your plant.");
            return;
        }

        if (!wateringFrequency || wateringFrequency < 1) {
            alert("Please enter a valid watering frequency.");
            return;
        }

        // Create a new plant object
        var newPlant = {
            id: generateId(),
            name: plantName,
            species: selectedPlantSpecies,
            description: plantDescription,
            image: "images/" + selectedPlantSpecies.toLowerCase().replace(" ", "-") + ".jpg",
            wateringFrequency: wateringFrequency,
            lastWatered: new Date()
        };

        // Load existing plants first 
        loadPlants();

        // Add the new plant to the plants list
        plants.push(newPlant);

        // Save the updated plants array to sessionStorage
        savePlants();

        // Navigate back to home page
        window.location.href = "index.html";
    });
}

// ---------------------------------------------------
// Calendar Page Functions
// ---------------------------------------------------
function setupCalendarPage() {
    // Load plants from storage
    loadPlants();
    
    // Back button event listener
    $("#back-to-home").click(function() {
        window.location.href = "index.html";
    });
    
    // Initialize calendar
    var currentDate = new Date();
    updateCalendar(currentDate);
    
    // Previous month button
    $("#prev-month").click(function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar(currentDate);
    });
    
    // Next month button
    $("#next-month").click(function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar(currentDate);
    });
    
    // Close popup button
    $("#close-popup").click(function() {
        $("#water-popup").hide();
    });
}

// Function to update calendar
function updateCalendar(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    
    // Update month and year display
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#month-year").text(monthNames[month] + " " + year);
    
    // Clear existing days
    $("#calendar-days").empty();
    
    // Get the first day of the month
    var firstDay = new Date(year, month, 1);
    var startingDay = firstDay.getDay(); // Day of week (0-6)
    
    // Get the last day of the month
    var lastDay = new Date(year, month + 1, 0);
    var monthLength = lastDay.getDate();
    
    // Get the last day of the previous month
    var prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // Get today's date for highlighting
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    
    // Calculate watering dates for all plants
    var wateringDates = calculateWateringDates(year, month);
    
    // Create grid cells for days
    var day = 1;
    var nextMonthDay = 1;
    
    // Create days for 6 weeks (max needed to show a month)
    for (var i = 0; i < 42; i+=1) {
        var dayCell;
        
        // Previous month days
        if (i < startingDay) {
            var prevMonthDay = prevMonthLastDay - startingDay + i + 1;
            dayCell = $('<div class="day other-month">').html('<div class="day-number">' + prevMonthDay + '</div>');
        }
        // Current month days
        else if (i < startingDay + monthLength) {
            dayCell = $('<div class="day">').html('<div class="day-number">' + day + '</div>');
            
            // Highlight today
            if (day === todayDate && month === todayMonth && year === todayYear) {
                dayCell.addClass('today');
            }
            
            // Add watering reminders for this day
            var currentDayDate = new Date(year, month, day);
            var reminderPlants = wateringDates[day] || [];
            
            for (var j = 0; j < reminderPlants.length; j+=1) {
                var plant = reminderPlants[j];
                var reminderDiv = $('<div class="water-reminder">').text("Water " + plant.name);
                
                // Add click event to show popup
                reminderDiv.data('plant', plant);
                reminderDiv.data('date', new Date(year, month, day));
                reminderDiv.click(function() {
                    showWateringPopup($(this).data('plant'), $(this).data('date'));
                });
                
                dayCell.append(reminderDiv);
            }
            
            day++;
        }
        // Next month days
        else {
            dayCell = $('<div class="day other-month">').html('<div class="day-number">' + nextMonthDay + '</div>');
            nextMonthDay++;
        }
        
        $("#calendar-days").append(dayCell);
        
        if (day > monthLength && i % 7 === 6) {
            break;
        }
    }
}

// Function to calculate watering dates for all plants
function calculateWateringDates(year, month) {
    var wateringDates = {};
    var today = new Date();
    
    for (var i = 0; i < plants.length; i+=1) {
        var plant = plants[i];
        
        // Calculate next watering date
        var nextWateringDate = new Date(plant.lastWatered);
        
        // Add watering entries for the next 90 days
        for (var j = 0; j < 90; j+=1) {
            // Add watering frequency days
            nextWateringDate.setDate(nextWateringDate.getDate() + plant.wateringFrequency);
            
            // Check if this watering date is in our target month
            if (nextWateringDate.getFullYear() === year && nextWateringDate.getMonth() === month) {
                var dayOfMonth = nextWateringDate.getDate();
                
                // Initialize array for this day if not exists
                if (!wateringDates[dayOfMonth]) {
                    wateringDates[dayOfMonth] = [];
                }
                
                // Add plant to this day's watering list
                wateringDates[dayOfMonth].push(plant);
            }
            
            // Stop if we've gone past our target month
            if (nextWateringDate.getFullYear() > year || 
                (nextWateringDate.getFullYear() === year && nextWateringDate.getMonth() > month)) {
                break;
            }
        }
    }
    
    return wateringDates;
}

// Show watering popup
function showWateringPopup(plant, date) {
    $("#popup-plant-name").text(plant.name);
    $("#water-popup").css("display", "flex"); // Use flex to center the popup
    
    // Mark as watered button
    $("#mark-watered").off("click").on("click", function() {
        // Find the actual plant object in the plants array
        for (var i = 0; i < plants.length; i+=1) {
            if (plants[i].id === plant.id) {
                // Update last watered date
                plants[i].lastWatered = new Date();
                break;
            }
        }
        
        // Save changes
        savePlants();
        
        // Hide popup
        $("#water-popup").hide();
        
        // Refresh calendar
        updateCalendar(new Date(date.getFullYear(), date.getMonth(), 1));
    });
    
    // Water tomorrow button
    $("#water-tomorrow").off("click").on("click", function() {
        // Find the actual plant object in the plants list
        for (var i = 0; i < plants.length; i+=1) {
            if (plants[i].id === plant.id) {
                // Set the next watering date to tomorrow
                var tomorrow = new Date(date);
                tomorrow.setDate(tomorrow.getDate() + 1);
                
                // Calculate days until tomorrow from last watered
                var daysDiff = Math.floor((tomorrow - plants[i].lastWatered) / (1000 * 60 * 60 * 24));
                
                // Update watering frequency to match this one-time change
                plants[i].wateringFrequency = daysDiff;
                break;
            }
        }
        
        // Save changes
        savePlants();
        
        // Hide popup
        $("#water-popup").hide();
        
        // Refresh calendar
        updateCalendar(new Date(date.getFullYear(), date.getMonth(), 1));
    });
}

/* Initialize appropriate functions based on current page */
$(document).ready(function() {
    // Get current page filename
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    // Initialize page-specific functions
    if (page === "index.html" || page === "") {
        setupHomePage();
    } else if (page === "search.html") {
        setupSearchPage();
    } else if (page === "add-plant.html") {
        setupAddPlantPage();
    } else if (page === "calendar.html") {
        setupCalendarPage();
    }
});