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
      
    event.shaped('1x culinaryconstruct:culinary_station', [// arg 1: output
            'A', 
            'B' // arg 2: the shape (array of strings)
             
        ], {
            A: '#minecraft:wooden_slabs', 
            B: 'minecraft:crafting_table'  //arg 3: the mapping object   
        }
    )
  })