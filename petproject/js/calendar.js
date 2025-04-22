/**
 * calendar.js (jQuery Version)
 * Handles logic for the PlantPal Calendar Page (calendar.html).
 */

$(document).ready(function() {
    // --- DOM Elements ---
    var $calendarGrid = $('#calendar-grid');
    var $monthYearHeader = $('#month-year-header');
    var $modal = $('#watering-modal');
    var $modalPlantInfo = $('#modal-plant-info');
    var $modalTaskDate = $('#modal-task-date');

    // --- State ---
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth(); // 0 = January, 11 = December
    var activeModalData = null; // Store info for the currently open modal { plantId, taskDate }

    // --- Initial Load ---
    renderCalendar(currentYear, currentMonth);

    // --- Event Listeners ---

    // Previous Month Button
    $('#prev-month-btn').on('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // Next Month Button
    $('#next-month-btn').on('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    // Modal Close Button (using class selector inside modal)
    $modal.on('click', '.close-btn', closeModal);

    // Close modal if clicking outside the content area
    $modal.on('click', function(event) {
        // Check if the click target is the modal background itself
        if ($(event.target).is($modal)) {
            closeModal();
        }
    });

    // Event delegation for clicking on reminder elements within the grid
    $calendarGrid.on('click', '.reminder', function() {
        // 'this' is the clicked reminder div
        var plantId = $(this).data('plant-id');
        var taskDate = $(this).data('task-date');
        openModal(plantId, taskDate);
    });

    // Modal action buttons
    $('#mark-watered-btn').on('click', handleMarkAsWatered);
    $('#water-tomorrow-btn').on('click', handleWaterTomorrow);


    // --- Functions ---

    // Renders the calendar grid for the given year and month.
    function renderCalendar(year, month) {
        $calendarGrid.empty(); // Clear previous grid content using jQuery

        // Add day headers
        var dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        $.each(dayHeaders, function(index, day) {
            $calendarGrid.append($('<div/>').addClass('day-header').text(day));
        });

        var firstDayOfMonth = new Date(year, month, 1);
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var startingDayOfWeek = firstDayOfMonth.getDay(); // 0=Sun

        // Update Month/Year Header
        $monthYearHeader.text(firstDayOfMonth.toLocaleString('default', { month: 'long' }) + ' ' + year);

        // Calculate Watering Reminders
        var plants = loadPlants();
        var reminders = calculateWateringReminders(plants, year, month);

        // Create blank cells for days before the 1st
        for (var i = 0; i < startingDayOfWeek; i++) {
            $calendarGrid.append($('<div/>').addClass('calendar-day other-month'));
        }

        // Create cells for each day of the month
        for (var day = 1; day <= daysInMonth; day++) {
            var $dayCell = $('<div/>').addClass('calendar-day');
            var $dayNumberSpan = $('<span/>').addClass('day-number').text(day);
            $dayCell.append($dayNumberSpan);

            var currentDateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');

            // Add reminders for this specific day
            if (reminders[currentDateStr]) {
                $.each(reminders[currentDateStr], function(index, reminder) {
                    var $reminderDiv = $('<div/>')
                        .addClass('reminder')
                        .text('Water ' + reminder.plantName)
                        .attr('title', 'Water ' + reminder.plantName + ' (' + reminder.species + ')')
                        .data('plant-id', reminder.plantId) // Store data using jQuery
                        .data('task-date', currentDateStr);
                    $dayCell.append($reminderDiv);
                });
            }

            // Highlight today
            var today = new Date();
             if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                 // Use jQuery to style today's number
                 $dayNumberSpan.css({ 'font-weight': 'bold', 'color': '#d32f2f' });
             }


            $calendarGrid.append($dayCell);
        }

        // Add empty cells to fill the last row if necessary
         var totalCells = startingDayOfWeek + daysInMonth;
         var remainingCells = (7 - (totalCells % 7)) % 7;
         for (var i = 0; i < remainingCells; i++) {
             $calendarGrid.append($('<div/>').addClass('calendar-day other-month'));
         }
    }

    // Calculates all watering reminders for a given month view.
    // (Logic remains standard JS as it deals with dates and arrays)
    function calculateWateringReminders(plants, year, month) {
         var reminders = {};
         var startDate = new Date(year, month, 1);
         var endDate = new Date(year, month + 1, 0); // Last day of the month

         plants.forEach(function(plant) { // Can use forEach or $.each
             if (!plant.lastWatered || !plant.wateringFrequency) return;

             var nextWateringDate = new Date(plant.lastWatered + 'T00:00:00');
             nextWateringDate.setDate(nextWateringDate.getDate() + plant.wateringFrequency);

             while (nextWateringDate <= endDate) {
                 if (nextWateringDate >= startDate) {
                     var dateStr = nextWateringDate.toISOString().split('T')[0];
                     if (!reminders[dateStr]) {
                         reminders[dateStr] = [];
                     }
                     reminders[dateStr].push({
                         plantId: plant.id,
                         plantName: plant.name,
                         species: plant.species
                     });
                 }
                 nextWateringDate.setDate(nextWateringDate.getDate() + plant.wateringFrequency);
             }
         });
         return reminders;
     }

    // Opens the watering task modal.
    function openModal(plantId, taskDate) {
        var plants = loadPlants();
        var plant = plants.find(function(p) { return p.id === plantId; }); // Use find or loop

        if (!plant) return;

        activeModalData = { plantId: plantId, taskDate: taskDate }; // Store context

        // Populate modal using jQuery
        $modalPlantInfo.text('Plant: ' + plant.name + ' (' + plant.species + ')');
        $modalTaskDate.text('Scheduled Date: ' + taskDate);

        $modal.show(); // Show modal using jQuery
    }

    // Closes the watering task modal.
    function closeModal() {
        $modal.hide(); // Hide modal using jQuery
        activeModalData = null; // Clear context
    }

    // Handles the "Mark as Watered" action from the modal.
    function handleMarkAsWatered() {
        if (!activeModalData) return;

        var plantId = activeModalData.plantId;
        var taskDate = activeModalData.taskDate; // The date the task was DUE
        var plants = loadPlants();
        var plantIndex = -1;

        // Find index (standard JS loop)
        for (var i = 0; i < plants.length; i++) {
            if (plants[i].id === plantId) {
                plantIndex = i;
                break;
            }
        }

        if (plantIndex !== -1) {
            // Update the last watered date to the date the task was scheduled for
            plants[plantIndex].lastWatered = taskDate;
            savePlants(plants);
            console.log('Plant ' + plantId + ' marked as watered on ' + taskDate);
            renderCalendar(currentYear, currentMonth); // Re-render
        } else {
            console.error("Plant not found for marking as watered:", plantId);
        }

        closeModal();
    }

    // Handles the "Water Tomorrow" action (Simplified - updates lastWatered).
    function handleWaterTomorrow() {
        if (!activeModalData) return;

        var plantId = activeModalData.plantId;
        var taskDate = activeModalData.taskDate; // The date the task was DUE
        var plants = loadPlants();
        var plantIndex = -1;

        for (var i = 0; i < plants.length; i++) { // Find index
             if (plants[i].id === plantId) {
                 plantIndex = i;
                 break;
             }
        }

        if (plantIndex !== -1) {
            // Calculate the date one day *before* the task was due
            var taskDueDate = new Date(taskDate + 'T00:00:00');
            taskDueDate.setDate(taskDueDate.getDate() - 1); // Move back one day
            var adjustedLastWatered = taskDueDate.toISOString().split('T')[0];

            // Only update if the adjusted date is different from the current lastWatered
            // to prevent repeated 'snoozing' without actual watering.
            if(plants[plantIndex].lastWatered !== adjustedLastWatered) {
                 // Set lastWatered to the day *before* it was due.
                 // The next reminder will then calculate correctly for tomorrow (taskDate).
                 plants[plantIndex].lastWatered = adjustedLastWatered;
                 savePlants(plants);
                 console.log('Snoozing watering for ' + plantId + '. Last watered set to ' + adjustedLastWatered + ' to remind again.');
                 renderCalendar(currentYear, currentMonth); // Re-render
             } else {
                 console.log('Watering for ' + plantId + ' likely already snoozed or task date issue.');
             }

        } else {
            console.error("Plant not found for snoozing:", plantId);
        }

        closeModal();
    }

}); // End of $(document).ready