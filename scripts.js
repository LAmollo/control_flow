const PI = 3.1415;
const radius = 5; // meters
const minimumSpacePerPlant = 0.8; // square meters

// Function to calculate the area occupied by a given number of plants
function calculateAreaWithPlants(plantCount) {
    return plantCount * minimumSpacePerPlant;
}

        // Initial plant count is 100
        let plantCount = 100;

        // Check if space required exceeds available space
        if (calculateAreaWithPlants(plantCount) > PI * radius * radius) {
            throw new Error("Insufficient space to accommodate the plants.");
        }

        // Calculate percentage of maximum capacity
        let percentageCapacity = (plantCount / maxPlants) * 100;

        // Advice based on percentage of maximum capacity
        let advice;
        if (percentageCapacity > 80) {
            advice = "Prune the plants to prevent them from exceeding the capacity of the garden.";
        } else if (percentageCapacity >= 50 && percentageCapacity <= 80) {
            advice = "Monitor the plant growth as they are growing at an acceptable rate.";
        } else {
            advice = "Plant more plants as there is room available.";
        }

        // Output advice
        console.log(`After ${weeks} weeks of growth:`);
        console.log(`- Plant count: ${plantCount}`);
        console.log(`- Percentage of maximum capacity: ${percentageCapacity.toFixed(2)}%`);
        console.log(`- Advice: ${advice}`);
        console.log();
     catch (error) {
        console.error("Error:", error.message);
    }


// Run the simulation for 1, 2, and 3 weeks
//adviseOnPlantGrowth(1);
//adviseOnPlantGrowth(2);
//adviseOnPlantGrowth(3);

