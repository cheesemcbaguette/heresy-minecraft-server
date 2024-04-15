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

    //remove shit electrum recipe
    event.remove({ id: 'oreganized:create/mixing/electrum_ingot' })

    // Cook 1 crushed raw uranium into 1 yellorium ingot in a Furnace/Blast Furnace:
    event.smelting('bigreactors:yellorium_ingot', 'create:crushed_raw_uranium')
    event.blasting('bigreactors:yellorium_ingot', 'create:crushed_raw_uranium')

    // Cook 1 copper block into 1 cut copper block in a Furnace/Blast Furnace:
    event.smelting('minecraft:copper_block', 'minecraft:cut_copper')
    event.blasting('minecraft:copper_block', 'minecraft:cut_copper')

    // Cook 1 copper brick into 1 cut copper in a Furnace/Blast Furnace:
    event.smelting('minecraft:cut_copper', 'copperative:copper_bricks')
    event.blasting('minecraft:cut_copper', 'copperative:copper_bricks')

    // Cook 1 cut lead block into 4 lead ingots in a Furnace/Blast Furnace:
    event.smelting('4x oreganized:lead_ingot', 'oreganized:cut_lead')
    event.blasting('4x oreganized:lead_ingot', 'oreganized:cut_lead')

    // Cook 1 lead brick into 1 lead bricks in a Furnace/Blast Furnace:
    event.smelting('oreganized:cut_lead', 'oreganized:lead_bricks')
    event.blasting('oreganized:cut_lead', 'oreganized:lead_bricks')
  })