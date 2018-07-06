(d => {

// Select elements for form submission:

	let form = d.getElementById("team_form");
	let numPlayers = d.getElementById("number_players");
	let button1 = d.getElementById("team_button");
	let team1 = d.getElementById("team_one");
	let team2 = d.getElementById("team_two");
	let button2 = d.getElementById("match_button");
	let score = d.getElementById("score_text");
	let winner = d.getElementById("winner");



// Create HTML elements to house team names:

	// let li = d.createElement("li");

// Code for generating silly names. 
// Name generation code is from https://github.com/TheDeveloper/sillyname/blob/master/index.js

	let defaultPlayerName = 'Player Name';

	let adjectives = ["Black","White","Gray","Brown","Red","Pink","Crimson","Carnelian","Orange","Yellow","Ivory","Cream","Green","Viridian","Aquamarine","Cyan","Blue","Cerulean","Azure","Indigo","Navy","Violet","Purple","Lavender","Magenta","Rainbow","Iridescent","Spectrum","Prism","Bold","Vivid","Pale","Clear","Glass","Translucent","Misty","Dark","Light","Gold","Silver","Copper","Bronze","Steel","Iron","Brass","Mercury","Zinc","Chrome","Platinum","Titanium","Nickel","Lead","Pewter","Rust","Metal","Stone","Quartz","Granite","Marble","Alabaster","Agate","Jasper","Pebble","Pyrite","Crystal","Geode","Obsidian","Mica","Flint","Sand","Gravel","Boulder","Basalt","Ruby","Beryl","Scarlet","Citrine","Sulpher","Topaz","Amber","Emerald","Malachite","Jade","Abalone","Lapis","Sapphire","Diamond","Peridot","Gem","Jewel","Bevel","Coral","Jet","Ebony","Wood","Tree","Cherry","Maple","Cedar","Branch","Bramble","Rowan","Ash","Fir","Pine","Cactus","Alder","Grove","Forest","Jungle","Palm","Bush","Mulberry","Juniper","Vine","Ivy","Rose","Lily","Tulip","Daffodil","Honeysuckle","Fuschia","Hazel","Walnut","Almond","Lime","Lemon","Apple","Blossom","Bloom","Crocus","Rose","Buttercup","Dandelion","Iris","Carnation","Fern","Root","Branch","Leaf","Seed","Flower","Petal","Pollen","Orchid","Mangrove","Cypress","Sequoia","Sage","Heather","Snapdragon","Daisy","Mountain","Hill","Alpine","Chestnut","Valley","Glacier","Forest","Grove","Glen","Tree","Thorn","Stump","Desert","Canyon","Dune","Oasis","Mirage","Well","Spring","Meadow","Field","Prairie","Grass","Tundra","Island","Shore","Sand","Shell","Surf","Wave","Foam","Tide","Lake","River","Brook","Stream","Pool","Pond","Sun","Sprinkle","Shade","Shadow","Rain","Cloud","Storm","Hail","Snow","Sleet","Thunder","Lightning","Wind","Hurricane","Typhoon","Dawn","Sunrise","Morning","Noon","Twilight","Evening","Sunset","Midnight","Night","Sky","Star","Stellar","Comet","Nebula","Quasar","Solar","Lunar","Planet","Meteor","Sprout","Pear","Plum","Kiwi","Berry","Apricot","Peach","Mango","Pineapple","Coconut","Olive","Ginger","Root","Plain","Fancy","Stripe","Spot","Speckle","Spangle","Ring","Band","Blaze","Paint","Pinto","Shade","Tabby","Brindle","Patch","Calico","Checker","Dot","Pattern","Glitter","Glimmer","Shimmer","Dull","Dust","Dirt","Glaze","Scratch","Quick","Swift","Fast","Slow","Clever","Fire","Flicker","Flash","Spark","Ember","Coal","Flame","Chocolate","Vanilla","Sugar","Spice","Cake","Pie","Cookie","Candy","Caramel","Spiral","Round","Jelly","Square","Narrow","Long","Short","Small","Tiny","Big","Giant","Great","Atom","Peppermint","Mint","Butter","Fringe","Rag","Quilt","Truth","Lie","Holy","Curse","Noble","Sly","Brave","Shy","Lava","Foul","Leather","Fantasy","Keen","Luminous","Feather","Sticky","Gossamer","Cotton","Rattle","Silk","Satin","Cord","Denim","Flannel","Plaid","Wool","Linen","Silent","Flax","Weak","Valiant","Fierce","Gentle","Rhinestone","Splash","North","South","East","West","Summer","Winter","Autumn","Spring","Season","Equinox","Solstice","Paper","Motley","Torch","Ballistic","Rampant","Shag","Freckle","Wild","Free","Chain","Sheer","Crazy","Mad","Candle","Ribbon","Lace","Notch","Wax","Shine","Shallow","Deep","Bubble","Harvest","Fluff","Venom","Boom","Slash","Rune","Cold","Quill","Love","Hate","Garnet","Zircon","Power","Bone","Void","Horn","Glory","Cyber","Nova","Hot","Helix","Cosmic","Quark","Quiver","Holly","Clover","Polar","Regal","Ripple","Ebony","Wheat","Phantom","Dew","Chisel","Crack","Chatter","Laser","Foil","Tin","Clever","Treasure","Maze","Twisty","Curly","Fortune","Fate","Destiny","Cute","Slime","Ink","Disco","Plume","Time","Psychadelic","Relic","Fossil","Water","Savage","Ancient","Rapid","Road","Trail","Stitch","Button","Bow","Nimble","Zest","Sour","Bitter","Phase","Fan","Frill","Plump","Pickle","Mud","Puddle","Pond","River","Spring","Stream","Battle","Arrow","Plume","Roan","Pitch","Tar","Cat","Dog","Horse","Lizard","Bird","Fish","Saber","Scythe","Sharp","Soft","Razor","Neon","Dandy","Weed","Swamp","Marsh","Bog","Peat","Moor","Muck","Mire","Grave","Fair","Just","Brick","Puzzle","Skitter","Prong","Fork","Dent","Dour","Warp","Luck","Coffee","Split","Chip","Hollow","Heavy","Legend","Hickory","Mesquite","Nettle","Rogue","Charm","Prickle","Bead","Sponge","Whip","Bald","Frost","Fog","Oil","Veil","Cliff","Volcano","Rift","Maze","Proud","Dew","Mirror","Shard","Salt","Pepper","Honey","Thread","Bristle","Ripple","Glow","Zenith"];

	let nouns = ["head","crest","crown","tooth","fang","horn","frill","skull","bone","tongue","throat","voice","nose","snout","chin","eye","sight","seer","speaker","singer","song","chanter","howler","chatter","shrieker","shriek","jaw","bite","biter","neck","shoulder","fin","wing","arm","lifter","grasp","grabber","hand","paw","foot","finger","toe","thumb","talon","palm","touch","racer","runner","hoof","fly","flier","swoop","roar","hiss","hisser","snarl","dive","diver","rib","chest","back","ridge","leg","legs","tail","beak","walker","lasher","swisher","carver","kicker","roarer","crusher","spike","shaker","charger","hunter","weaver","crafter","binder","scribe","muse","snap","snapper","slayer","stalker","track","tracker","scar","scarer","fright","killer","death","doom","healer","saver","friend","foe","guardian","thunder","lightning","cloud","storm","forger","scale","hair","braid","nape","belly","thief","stealer","reaper","giver","taker","dancer","player","gambler","twister","turner","painter","dart","drifter","sting","stinger","venom","spur","ripper","swallow","devourer","knight","lady","lord","queen","king","master","mistress","prince","princess","duke","dutchess","samurai","ninja","knave","slave","servant","sage","wizard","witch","warlock","warrior","jester","paladin","bard","trader","sword","shield","knife","dagger","arrow","bow","fighter","bane","follower","leader","scourge","watcher","cat","panther","tiger","cougar","puma","jaguar","ocelot","lynx","lion","leopard","ferret","weasel","wolverine","bear","raccoon","dog","wolf","kitten","puppy","cub","fox","hound","terrier","coyote","hyena","jackal","pig","horse","donkey","stallion","mare","zebra","antelope","gazelle","deer","buffalo","bison","boar","elk","whale","dolphin","shark","fish","minnow","salmon","ray","fisher","otter","gull","duck","goose","crow","raven","bird","eagle","raptor","hawk","falcon","moose","heron","owl","stork","crane","sparrow","robin","parrot","cockatoo","carp","lizard","gecko","iguana","snake","python","viper","boa","condor","vulture","spider","fly","scorpion","heron","oriole","toucan","bee","wasp","hornet","rabbit","bunny","hare","brow","mustang","ox","piper","soarer","flasher","moth","mask","hide","hero","antler","chill","chiller","gem","ogre","myth","elf","fairy","pixie","dragon","griffin","unicorn","pegasus","sprite","fancier","chopper","slicer","skinner","butterfly","legend","wanderer","rover","raver","loon","lancer","glass","glazer","flame","crystal","lantern","lighter","cloak","bell","ringer","keeper","centaur","bolt","catcher","whimsey","quester","rat","mouse","serpent","wyrm","gargoyle","thorn","whip","rider","spirit","sentry","bat","beetle","burn","cowl","stone","gem","collar","mark","grin","scowl","spear","razor","edge","seeker","jay","ape","monkey","gorilla","koala","kangaroo","yak","sloth","ant","roach","weed","seed","eater","razor","shirt","face","goat","mind","shift","rider","face","mole","vole","pirate","llama","stag","bug","cap","boot","drop","hugger","sargent","snagglefoot","carpet","curtain"];

	function randomNoun(generator){
	    generator = generator || Math.random;

	    return nouns[Math.floor(generator()*nouns.length)];
	}

	function randomAdjective(generator){
	    generator = generator || Math.random;

	    return adjectives[Math.floor(generator()*adjectives.length)];
	}

	function generateStupidName(generator){
	    var noun1 = randomNoun(generator);
	    var noun2 = randomNoun(generator);
	    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
	    var adjective = randomAdjective(generator);
	    return adjective + noun1 + ' ' + noun2;
	}

// Generate an array of objects representing players

	let inputPlayerNumber = 5;
	let playersPerSide = null;
	let players = [];
	let randomList = [];
	let firstTeam = [];
	let secondTeam = [];




	numPlayers.addEventListener("change", event => {
		inputPlayerNumber = event.target.value;
		// console.log(inputPlayerNumber);
	})

	button1.addEventListener("click", () => {

				console.log(inputPlayerNumber);

		// inputPlayerNumber = 1;
		// playersPerSide = 1;
		// players = [];

		while (team1.firstChild) {
			team1.removeChild(team1.firstChild);
		}

		while (team2.firstChild) {
			team2.removeChild(team2.firstChild);
		}

		let playersPerSide = inputPlayerNumber;
		// console.log(playersPerSide);

		// Generate an array of player objects:

		for(let i=0; i<(playersPerSide * 2); i++) {
			players.push({
				name: generateStupidName(),
				skill: Math.floor((Math.random() * 10) +1),		
			});
		}

		// Shuffle that array using Fisher-Yates:

		let shufflePlayers = players => {
		    for (let i = players.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [players[i], players[j]] = [players[j], players[i]];
		    }
		    return players;
		}

		// Split the randomised array down the middle:

		randomList = shufflePlayers(players);

		firstTeam = randomList.slice(0, (players.length/2));
		// console.log(firstTeam);
		secondTeam = randomList.slice((players.length/2), players.length);

		// Get the names out of firstTeam and secondTeam:

		// let listTeam = team => {
		// 	let namesArray = team.map(member => member.name);
		// 	return namesArray.join("\r\n");
		// 	}

		let listTeam = (team, location) => {
			let namesList = team.map(member => {
				// let li = d.createElement("li");
				// li.textContent = member.name;
				// $('<div />').text(member).appendTo(team1);
				let li = d.createElement("li");
				li.classList.add("team-member");
				li.textContent = member.name + " (skill: " + member.skill + ")";
				location.appendChild(li);

			});
			// return namesArray.join("\r\n");
			// return namesArray.join( <br> );	
			return namesList;	
		}


		// for (i = 0; i < arrayLength; i++) {
		// $('<div class="results" />').text(arrayVariable[i]).appendTo('body');
		// }

		// we need to get member names out of the array
		// put each of them inside an li
		// put the li inside the ol with the appropriate class name

		// console.log("Team 1:");
		// console.log(listTeam(firstTeam));
		// console.log("Team 2:");
		// console.log(listTeam(secondTeam));


		listTeam(firstTeam, team1);
		listTeam(secondTeam, team2);
		
		// team1.textContent = listTeam(firstTeam);
		// team2.textContent = listTeam(secondTeam);
		
		// Reset values

		// inputPlayerNumber = 1;
		playersPerSide = 1;
		players = [];



		// var myNode = document.getElementById("foo");
		// while (myNode.firstChild) {
		//     myNode.removeChild(myNode.firstChild);
		// }		

		// member.remove();

		// team1.textContent = "";
		// team2.textContent = "";

		// var element = document.getElementById("element-id");
		// element.parentNode.removeChild(element);

	})

	// let playersPerSide = button1.addEventListener("click", () => form.submit());
	// let playersPerSide = numPlayers.value;
	// let playersPerSide = 5;
	


	// for(let i=0; i<(playersPerSide * 2); i++) {
	// 	players.push({
	// 		name: generateStupidName(),
	// 		skill: Math.floor((Math.random() * 10) +1),		
	// 	});
	// }


	// Randomly shuffle players array using Fisher-Yates

	// let shufflePlayers = players => {
	//     for (let i = players.length - 1; i > 0; i--) {
	//         const j = Math.floor(Math.random() * (i + 1));
	//         [players[i], players[j]] = [players[j], players[i]];
	//     }
	//     return players;
	// }

	// Split the randomised array down the middle:


	// let randomList = shufflePlayers(players);

	// let firstTeam = randomList.slice(0, (players.length/2));
	// // console.log(firstTeam);
	// let secondTeam = randomList.slice((players.length/2), players.length);
	// console.log(secondTeam);

	// Get the names out of firstTeam and secondTeam:

	// let listTeam = team => {
	// 	let namesArray = team.map(member => member.name);
	// 	return namesArray.join("\r\n");
	// }

	// Algorithm for generating number of goals. It uses a product of combined team skill and 
	// a random number (0-1) to produce a variable teamPerformance. This variable is mapped onto
	// a number of goals, from 0 to 5. 

	button2.addEventListener("click", () => {

		let numberOfGoals = team => {
			let teamSkill = team.reduce((acc, member) => acc + member.skill, 0);
			// console.log(teamSkill);
			let teamPerformance = Math.floor(Math.random() * teamSkill);
			// console.log("in numberofgoals function: ", teamPerformance);
			if(teamPerformance <= 4) {
				return 0;
			} else if (teamPerformance <= 9) {
				return 1;
			} else if (teamPerformance <= 14) {
				return 2;
			} else if (teamPerformance <= 19) {
				return 3;
			} else if (teamPerformance <= 24) {
				return 4;
			} else {
				return 5;
			}
		}

		// This code tells us which team won (or a draw if number of goals is equal)

		let decideWinner = (firstTeam, secondTeam) => {

			let firstTeamScore = numberOfGoals(firstTeam);
			let secondTeamScore = numberOfGoals(secondTeam);

			if(firstTeamScore > secondTeamScore) {
				// console.log("Team One Wins!");
				winner.textContent = "Team One Wins!"
			} else if (firstTeamScore === secondTeamScore) {
				winner.textContent = "Draw!"
			} else {
				winner.textContent = "Team Two Wins!";
			}

			score.textContent = "Score: " + firstTeamScore + " - " + secondTeamScore;



		}


		decideWinner(firstTeam, secondTeam);

	})


})(document);

				// let li = d.createElement("li");
				// li.classList.add("team-member");
				// li.textContent = member.name + " (skill: " + member.skill + ")";
				// location.appendChild(li);

			








