/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    //Crush cobbled deepslate and have a 20% chance to give coal
    event.recipes.createCrushing([Item.of('minecraft:coal').withChance(0.2)], 'minecraft:cobbled_deepslate').processingTime(500)
    //event.recipes.create.crushing(['minecraft:coal', Item.of('minecraft:coal').withChance(0.5)], 'minecraft:cobbled_deepslate').processingTime(500)
})