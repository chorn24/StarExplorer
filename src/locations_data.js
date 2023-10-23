const locations = [
    {
        "id": 1,
        "name": "Snow Village Blacksmith",
        "description": "The blacksmith's building is a stone building, outside of it is a forge with a heat that is incredibly comfortable when opposed to this planets cold temperatures. The blacksmith is working on a sword at his forge, he is to busy to be able to conversate with you currently."
        
    },
    {
        "id": 2,
        "name": "Cafe",
        "description": "The cafe is warm and cozy, many of the customer's are drinking what appears to be hot chocolate or eating some kind of soup. There is a fireplace on the opposite side of the entrance and a few people are reading books in the seats next to it. You see movement through the doors that lead to the kitchen but no one is available to take your order currently."
    },
    {
        "id": 3,
        "name": "Cave Entrance",
        "description": "The entrance to the cave is dark and damp, the cold wind goes away upon entering the caves and a heavily eroded path goes further into the cave. There are glowing crystals that allow you to see without using your suits flashlight. Much further in you see what appears to be ruins of a civilization."
    },
    {
        "id": 4,
        "name": "Cave Ruins",
        "description": "Deep in the caves lies a ruined civilization. The walls are a ancient stone with various symbols and markings. further into the distance you can tell there is a huge structure in the center of the ruins that appear to be glowing a cyan blue. Alternatively there is a eroded path that leads to out of the caves."
    },
    {
        "id": 5,
        "name": "Heart of Ruins",
        "description": "In the center of the ruins lies a large dome, the roof has partially crumbled and a few pillars are missing. In the center of the room a ball of cyan light is hovering. It causes the wind to up in speed drastically. You faintly see a strange tree in the ball."
    },
    {
        "id": 6,
        "name": "Snow Village Library",
        "description": "Upon entering the library a wave of warmth hits you, and a smell of cinnamon candles. There are many shelves full of books, many about the history of the planet. The fiction aisle is small and only has about 2 bookshelves. To the right of the entrance is a desk with a librarian who is sleeping. They seem to have passed out from exhaustion so its best not to wake them."
    },
    {
        "id": 7,
        "name": "Mountain Path",
        "description": "The path is a long and dangerous one. It is slippery and cold, but you enable your suits heaters to keep you warm. To the north the path leads to some mountains. You see a strange stone tree not far from a cave entrance upon nearing the end of the path. To the south the path leads to the village."
    },
    {
        "id": 8,
        "name": "Snow Landing Station",
        "description": "The landing spot is a small landing pad on the outskirts of a small village, it is cold and hard to keep a stable footing on the pad. Off to the distance you see a path goes through the town and towards distant mountains."
    },
    {
        "id": 9,
        "name": "Suspicious Tree",
        "description": "This tree appears to be made of stone and has what appears to be veins with a glowing dark blue liquid pulsating through it. Not to far from it you can see a cave off in the distance"
    },
    {
        "id": 10,
        "name": "Snowy Town's Center",
        "description": "The center of the town is a bonfire, paths leading all throughout the village and another path leading to the mountains. The arcitecture resembles a similarity to the interior of your ship, Cabin houses mainly built from logs and stone flooring. There are a few buildings that catch your eye. A large building with a book symbol, a stone building with a forge, and another building that you can see various people eating and drinking in."
    },
    {
        "id": 11,
        "name": "Desert Camp",
        "description": "The landing spot for the desert planet is in a small flat section of the dunes next to a camp. The camp tents are made with sticks and leather. The inhabitants of the camp appear to be excavating a large fossil of what appears to be a Sand Whale."
    },
    {
        "id": 12,
        "name": "Desert Festival",
        "description": "The center of the desert village is well, which a large festival is currently around. The festival has many colorful cloths draped on ropes coming from the top of the well to surrounding buildings. Music of various instruments are being played all around and the inhabitants of the village are having a great time dancing and eating."
    },
    {
        "id": 13,
        "name": "Desert Inn",
        "description": "The Desert Inn is a structure made of clay and wood. Inside is a check-in table and 16 rooms, all of which are booked. Vibrant cloths and paintings cover the walls."
    },
    {
        "id": 14,
        "name": "Desert Market",
        "description": "The Desert Market is even busier than the festival, the majority of this section of the village has cloth overhead. The markets are selling a variety of meats, spices, fruits, veggies, and cloth."
    },
    {
        "id": 15,
        "name": "Oasis Bar",
        "description": "The Oasis Bar is a bar selling many tropical drinks. Many of the customers are seated in booths eating and having a good time. You ask to buy a drink and are provided a drink similar to the taste of a Piña colada."
    },
    {
        "id": 16,
        "name": "Orb Pedestal",
        "description": "As you approach the orb, a voice that is not your own speaks to you in your head, beckoning you to lift the orb and take it as your own."
    },
    {
        "id": 17,
        "name": "Path to Pyramid",
        "description": "To the north the path leads to a large pyramid. Slightly in ruin but wellkept aside from small bits of erosion. Looking at the pyramid gives you a unsettling feeling."
    },
    {
        "id": 18,
        "name": "Path to Village",
        "description": "The path leads east to a village, while on the path you hear a distant sound of celebration coming from the village. On the contrary, towards the west noises of excavating are heard. To the south a closed door partially buried in the sand."
    },
    {
        "id": 19,
        "name": "Pyramid Entrance",
        "description": "Arriving at the entrance of the pyramid, you realize just how big the pyramid actually is. On the entrance is many foreign symbols and letters that your translator is incapable of deciphering."
    },
    {
        "id": 20,
        "name": "Pyramid Exit Hallway",
        "description": "As you walk through the hallway, the symbols on the walls begin to enlarge and a headache forms. At the end of the hallway is a door held by ropes, on the wall is a lever."
    },
    {
        "id": 21,
        "name": "Pyramid Hallway",
        "description": "Upon entering the pyramid, the door slams down behind you, making you unable to exit through that way. On the hallways more symbols and letters appear, however lights lace the hallway every few meters. The floor of the pyramid appears to be slightly damaged as some points are just sand, while other points are stone."
    },
    {
        "id": 22,
        "name": "Pyramid Heart",
        "description": "The heart of the pyramid is a large central room with a sandpit, at the center of the sandpit is the sarcophagus. The sarcophagus appears to have been opened already and strange vines of stone are growing out of it. These vines have a veins with a dark blue liquid pulsating through them. On the eastern side of the room is a empty pedestal. On the opposite side of the entrance is another hallway."
    },
    {
        "id": 23,
        "name": "Pyramid Heart",
        "description": "The heart of the pyramid is a large central room with a sandpit, at the center of the sandpit is the sarcophagus. The sarcophagus appears to have been opened already and strange vines of stone are growing out of it. These vines have a veins with a dark blue liquid pulsating through them. On the eastern side of the room is the pedastal of the dark cyan orb now in your possession. On the opposite side of the entrance is another hallway."
    },
    {
        "id": 24,
        "name": "Inside of Strange Door",
        "description": "Upon reaching the door at the end of the hallway the headache is still there and the door is shut. Touching the door reveals some warmth, as if it leads outside."
    },
    {
        "id": 25,
        "name": "Inside of Strange Door",
        "description": "Upon reaching the door at the end of the hallway the headache gets better and the door opens up, revealing a path in the dunes. As you exit the door closes behind you."
    },
    {
        "id": 26,
        "name": "Outside of Strange Door",
        "description": "A strange door with foreign symbols and letters. There is no noticeable way to open it from this side. "
    },
    {
        "id": 27,
        "name": "Abandoned Lab",
        "description": "The abandoned lab has a opening in one of its walls that allow you to go through it, inside you see a room of enclosures with shattered glass. Outside the building you see lights of the functional laboratories."
    },
    {
        "id": 28,
        "name": "Central Elevator",
        "description": "The central elevator is a large platform underneath the windmill, the platform has many patterns on it and the walls around the elevator are painted in a renaissance style. There are 2 floors, in the upper layer is the City Windmill and in the lower layer is the City Fountain."
    },
    {
        "id": 29,
        "name": "City Fountain",
        "description": "The city fountain is large and elegant, A large golden statue is at the top with water emitting it. Along the edge of the fountain is intricate designs. Just like the upper level, there are paths from the fountain to all over town, however the lower city is much more elegant."
    },
    {
        "id": 30,
        "name": "City Windmill",
        "description": "The floating cities main power source and the center of its town, The City Windmill. From the windmill many paths go throughout the city, some to the outskirts, some through markets, and some towards the landing pad. A large elevator is available to take below the windmill."
    },
    {
        "id": 31,
        "name": "Closed Doorway",
        "description": "The doorway is closed, metallic jaws locking it. The core of the lab is connected to this door, maybe it needs a power source?"
    },
    {
        "id": 32,
        "name": "Docks",
        "description": "The docks are full of boats and fishermen, the breeze is noticeably cooler and the water is beautiful. Overhead you see ships departing from the city and entering the city."
    },
    {
        "id": 33,
        "name": "Fish Market",
        "description": "The market has many vendors selling a large variety of fish, many of the fish types are alien to you but some vary in how delicious they look. From here there are paths leading throughout the city, mainly back to the windmill. But there is also a path to a large area with a garden."
    },
    {
        "id": 34,
        "name": "Garden",
        "description": "A large opening in the city reveals a peaceful garden, upon entering the premises the noise of the city becomes muffled and you are able to hear the birds singing once again. The garden is beautiful and full of many kinds of flowers, hedges, and trees. The wind is peaceful and the sun is shining on you. There is a path going throughout the garden that you take to enjoy its beauty, at the end of the garden the path continues back to the windmill."
    },
    {
        "id": 35,
        "name": "Lab Core",
        "description": "The labs core appears to be disabled, a few rings in the center of the room that appear to be on a axis. In the center of the sphere the rings create is a small cyan orb that lights up the room, a wire leads from the holding point of the rings to a doorway on the other side of the room."
    },
    {
        "id": 36,
        "name": "Lab District",
        "description": "The lab district houses many labs and power companies, without this district the upper island would not function. Many of the labs have lost the architecture of the rest of the lower city and have adopted a metallic and boring style. Far off you see a lab that appears to be in disrepair."
    },
    {
        "id": 37,
        "name": "Ocean City Library",
        "description": "The Library is a large magnificent building, many shelves of books occupy the building and all are full. The smell of pine inhabits the building. The walls are full of art and elegant designs, and chandeliers hang from the ceiling."
    },
    {
        "id": 38,
        "name": "Shattered Enclosures",
        "description": "Some of the enclosures have strange skeletons inside of them and others are overgrown with a suspicious vine that appears to be made out of stone. The vine also appears to have veins with a dark blue liquid pulsating through it. The vines lead to a nearby hallway that appears to be glowing a cyan light."
    },
    {
        "id": 39,
        "name": "Ocean Landing Station",
        "description": "The landing spot here is a large platform, with other ships landing here. The weather here is Hot, however a lovely breeze is going through that counteracts the warm temperature. The city is busy and many people are seen walking through the town. A path leads to the center of the city, which is a very large windmill. And another path leads to the docks."
    },
    {
        "id": 40,
        "name": "Strange Doorway",
        "description": "The strange doorway lights up in a flash of cyan, inside appears to be a portal leading to what you make out as various boats in a row."
    },
    {
        "id": 41,
        "name": "Theater",
        "description": "The theater is packed with many people entering different auditoriums, you hear heavily muffled music and plays coming from the different auditoriums. at the opposite side of the entrance is a snack bar with foreign snacks, funnily enough however, popcorn is still there."
    },
    {
        "id": 42,
        "name": "Landing Bay",
        "description": "The landing bay is a large room, full of various ships and pathways to other parts of the station. The walls are metallic and covered in various tech. Bay 19 is where your ship is located."
    },
    {
        "id": 43,
        "name": "Your Room",
        "description": "Your room is full of decorations, posters, stickers on the closet, a bookshelf full of books. Your desk is opposite to your bed, on the other side of the room. It has a keycard on it. You put on your spacesuit in preperation to leave the room. To the right of the desk is a door to the landing bay."
    },
    {
        "id": 44,
        "name": "Space",
        "description": "You arrive in open space, stars are bountiful. The console shows 4 nearby planets and a space station that you know as your home."
    },
    {
        "id": 45,
        "name": "Spaceship",
        "description": "Your spaceship has a lovely home feel to it, almost cabin like but mixed with metallic textures. There is a bed, kitchen, lounging area, simulations for entertainment, and the cockpit. In the cockpit there are various controls and maps."
    },
    {
        "id": 46,
        "name": "Platform in the void",
        "description": "A strange platform in a dimension of darkness, dust is floating around aswell as many glowing cyan orbs. Many are out of reach but some are within reach. The platform is made of a familiar stone and there are veins with dark blue liquid pulsating through them."
    },
    {
        "id": 47,
        "name": "Administrator",
        "description": "The administrator room is a comfortable carpeted room with a large table and 3 cubicles with computers. All of the electronics in this room are off. On the table appears to be a card reader. On the western side of the room is a hallway leading to two different rooms."
    },
    {
        "id": 48,
        "name": "Cafeteria",
        "description": "A large octagonal room, scattered about are 5 large circular tables. On the table in the center of the room is a big red button that says emergency, it appears to have been pushed down already. Strewn about are small pill shaped creatures cut in half with only one large femur bone in them. To the east is a room that appears to have chair with a holographic UI. To the west is a room with a large engine. To the south is a hallway with a room on the east side, and at the end of the hallway is the storage room."
    },
    {
        "id": 49,
        "name": "Communications",
        "description": "The communications room is a small carpeted room with a few desks. On the desks are communication systems, with a few servers on the northern wall. All of these systems appear to not be working. To the north is a hallway leading to two rooms"
    },
    {
        "id": 50,
        "name": "Electrical",
        "description": "The electrical room is a small room littered with wires leading to various power boxes. This room feels off, as if its a safety hazard just being near it. To the south is a hallway leading to two rooms"
    },
    {
        "id": 51,
        "name": "Lower Engine",
        "description": "Like the upper engine, the lower engine is a room with a large engine to power the ship. The engine is dusty and appear to have not been used in a few weeks. On the side of the engine is a slot for fuel, looking inside the fuel appears to be empty. To the east is a hallway with a corner turn. To the north is another hallway with a room on the northern, eastern, and western side"
    },
    {
        "id": 52,
        "name": "Med bay",
        "description": "The med bay is a small room with four beds. On the southern side of the room is a platform hooked up to a computer. On the platform is a small pill shaped creature with only one large femur bone inside. To the north is a hallway leading to two rooms"
    },
    {
        "id": 53,
        "name": "Navigation",
        "description": "The navigation room is a much larger cockpit compared to yours, There is three computers, two of which arent working and one that is flickering. On the computer that is flickering is a mapping system showing the ship was leaving from a molten planet to a gas planet. To the west is a hallway with two corner turns,"
    },
    {
        "id": 54,
        "name": "Open Airlock",
        "description": "You are at what appears to be the open airlock of a decayed ship floating through the void. Only one of the cyan orbs is close enough to be touched"
    },
    {
        "id": 55,
        "name": "Oxygen Generator",
        "description": "The oxygen generator is a room with many plants growing inside of tubes. All of the tubes appear to hook up to a filter system that has been heavily cluttered with leaves. To the east is a hallway with two corner turns."
    },
    {
        "id": 56,
        "name": "Reactor",
        "description": "The reactor appears to have been shut off, but you can tell it has many lights to show when it is on. On the central piece of the reactor is a mechanism with 9 squares. On the northern part of the reactor is another mechanism but with numbers 1-10 on it. On the north and south side is a handprint scanner. To the East is a hallway with many paths"
    },
    {
        "id": 57,
        "name": "Security",
        "description": "The security room is a small room, at the opposite side of the entrance is a small desk with papers. On the north side of the room is a very large monitor system, which is flickering on and off. When the system is on you can faintly make out hallways in other parts of the ship"
    },
    {
        "id": 58,
        "name": "Shields",
        "description": "The shield room has many lights, all of which are broken. The pathway in here is a bridge. Beneath the bridge you see wires and piping."
    },
    {
        "id": 59,
        "name": "Storage",
        "description": "The storage room is a medium sized room with large crates and fuel canisters. In here the walls are a metallic blue. On the northern side of the room is a hallway that appears to lead to a much larger room, with a small room on the eastern side of the hallway. To the east is a hallway leading to a room with a small corner bridge that turns north, to the south of that hallway is another small room. To the west is a hallway that turns a corner, but before it does a room is on the northern side of that hallway."
    },
    {
        "id": 60,
        "name": "Upper Engine",
        "description": "Like the lower engine, the upper engine is a room with a large engine to power the ship. The engine is dusty and appear to have not been used in a few weeks. On the side of the engine is a slot for fuel, looking inside the fuel appears to be empty. To the east is a hallway leading to a large room, on the southern side of the hallway is another room . To the south is another hallway with a room on the southern, eastern, and western side"
    },
    {
        "id": 61,
        "name": "Weapons",
        "description": "The weapons room is a room full of crates. In the center of the room is a platform with a seat hooked up to a glass panel. On both sides of the seat is a joystick. On the floor next to the seat is a mobile device flickering. On the mobile device you can read 'I have weapons task, plz watch'."
    },
    {
        "id": 62,
        "name": "",
        "description": ""
    },
    {
        "id": 63,
        "name": "",
        "description": ""
    },

];

export default locations;