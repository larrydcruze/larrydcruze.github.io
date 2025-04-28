/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'Artists': {
		'HR guy and Boss portraits': 'Karis Cheng',
		'Salesman and Lawyer portraits': 'Lisa Liu'
	},
	'Thank you Circles.': {}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'elevator': 'Trophy Gallery.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'crash': 'Crash.mp3',
	'bell': 'Elevator Bell.wav',
	'glass': 'Glass Breaking.mp3',
	'knock': 'knock.wav',

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
'scene1': 'scene1.jpg',
'scene2': 'elevator.jpg',
'scene3': 'cubical.webp',
'scene4': 'breakroom.jpg',
'scene5': 'cubical2.png',


});


// Define the Characters
monogatari.characters ({
	'b': {
		name: 'Boss',
		color: '#5bcaff',
		sprites: {
			bird: 'sage.png',
		}
	},
	'qb':{
		name: '???',
		color: '#5bcaff',
	},
	'l':{
		name: 'Lawyer',
		color:  '#C911BE',
		sprites:{
			bird: 'dusky.png',
		}
	},
	'h':{
		name: 'HR',
		color: '#655DC6',
		sprites: {
			bird: 'ptarmigan.png',
		}
	},
	's':{
		name: 'Sales',
		color: '#00B2E3',
		sprites:{
			bird: 'sharp.png',
		}
		},

	'a':{
		name: 'Acountant',
		color: '#419e71',
		sprites:{
			bird: 'ruffed.png',
		}
	},
	
	'ql':{
		name: '???',
		color: '#C911BE',
	},
	'qa':{
		name: '???',
		color: '#419e71',
	},
	'sq':{
		name: '???',
		color: '#00B2E3',
	}
	
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music elevator with volume 50',
		'show scene scene2 with fadeIn',
		//shaking

		' …First day at my new job. ',
		'Not a very… convenient time for me to start here. Given the uh… situation.',
		' I’m sure they’ll handle it well! It is a pretty big company….',
		'...',

		//elevator ding
		'play sound bell',
		' ',
		'show scene scene1 with fadeIn',
		'stop music elevator with fade 3',
		' ',

		//more noises.
		'play sound crash',
		'play sound glass',

		'………ah…',

		//'show character '
		'show character l bird at right with fadeIn',
		'ql ARE YOU ALL OF YOU STUPID?? I CAN’T KEEP CLEANING UP AFTER YOUR IDOTIC OUTBURSTS.',

		//'show character'
		'show character a bird at left fadeIn',
		'qa That’s funny, coming from you….',

		'(the ruffed grouse immediately received a glare that made him visibly shrink. Scary.)',
		'...',

		'qb ...',
		'qb Ahem....',

		'hide character l bird with fadeOut',
		'hide character a bird with fadeOut',
		//b slides in
		'show character b bird slideInLeft',
		'b Well, our newest (unpaid) hire is here!',
		'(he flashes me a weary smile)',
		//one last crash
		'play sound glass',

		'qb Anyway...',
		//splash screen
		'show image sagesplash.png with fadeIn',
		'The boss. A sage grouse who always has something better to do.',
		'hide image sagesplash.png with fadeOut',

		'b Welcome to the company.',
		'b I’m… busy, right now. So I’ll just have you get your paperwork sorted out with HR.',
		'(he turns his head to a ptarmigan, who looks like he’s lost in his own thoughts.)',
		'(…he seems punchable.)',
		'(the boss snaps at him, and he quickly turned his head over)',
		'b I don’t pay you to stare at the floor.',

		'show character h bird on right fadeIn',

		'h my apologies sir…. Oh! You’re the intern.',
		'h A little small…….',
		'Sorry?',
		'b Don’t mind him. Haha.',
		'b I will leave you to it. Good luck.',
		'(he struts off…….)',

		'hide character b bird slideOutLeft',

		'h Ahahah…..',
		'h I hope it hasn’t been too much for you…',
		'h Welcome! Its nice to meet you!',

		//*splash screen*
		'show image ptarmisplash.png with fadeIn',
		'A friendly rock ptarmigan.',
		'hide image ptarmisplash.png with fadeOut',
		'h there’s some policies and such we have to look over…',
		'h Let’s head to my office and we can get started…!',

		'show scene scene3 with fadeIn',

		'(This place is kinda….. dingy)',

		'show character h bird on right with fadeIn',

		'h So… aha…',
		'h Our policies are…. Pretty basic. Not much you have to memorize or anything.',
		'h Stuff like dressing appropriately, conducting yourself in a professional manner……',
		'h Though it seems like even current staff have trouble with that last one, haha…',
		'h …we also strongly recommend against workplace relationships.',
		
		//Knock on the door
		'play sound knock',
		'sq Are you busy?',
		'show character s bird on left fadeIn',

		//splash screen
		'show image sharpsplash.png with fadeIn',
		'A sly sharp-tailed grouse.',
		'hide image sharpsplash.png with fadeOut',

		'h !!... yes!!! …Do you need something..?',
		's Not necessarily, no…',
		's Just wanted to say hi.',
		's Hi new guy.',
		'Nice to meet you sir….',
		's I do have a message for you, though.',
		'h hm? And that is…?',
		's The law guy wants to figure out some sort of conduct seminar. Not sure why it’s all that important.',
		'h You do realise you are the reason we’re in this situation, right.',
		's What? No…. haha. Not me. The boss is the one that was supposed to get a customer support guy. Not my fault I’m not trained for that type of thing.',
		'h …',
		'h …you called a customer a rat.',
		'h and crashed your car into their garage.',
		's Don’t see the issue.',
		'h ….',
		's Aaanyway. Take your little guy and go talk to Mr.LSAT.',
		's come by my desk later too, would you?',
		's Ciao, mia signora.',
		'hide character s bird with fadeOut',
		'(the ptarmigan stares at the now-empty doorway.)',
		'h …',
		'h idiot…',
		'(I know what you are.)',
		'h ahem… sorry about that. I guess we can get back to this later.',
		'h I’ll introduce you to our in-office lawyer.',
		'h ….embarrassing that we need one…..',
		'haha….',


		'show scene scene1 with fadeIn',
		'(the ruffed and dusky grouse are back to bickering. I guess this is typical.)',

		'show character l bird on center with fadeIn',
		'ql I’m just SAYING you mongrels can’t keep yourselves in check for TWO SECONDS before I have to start negotiating settlements with dimwits that don’t want to get their own seed.',
		
		'show character a bird on left with fadeIn',
		'qa I’m surprised you get anything negotiated with your sour attitude.',

		'show character h bird on right with fadeIn',
		'h …',
		'h This is our lawyer and our head accountant.',
		'l You. You need to sort this out.',
		//L splashscreen
		'show image dusksplash.png with fadeIn',
		'A dusky grouse. He seems a little scary',
		'hide image dusksplash.png with fadeOut',

		'h I do wish we could be nicer to each other… What do you propose?',
		'l Go over how to act normal? Instate repercussions? Let me discipline?',
		'h Aha…..  no….. um. Maybe teambuilding exercises….',
		'l whatever you feel is best. Anything that makes my job easier.  And makes this useless bag of flesh respect our customers.',
		'a Listen man I just do the numbers.',
		'a I should barely be interacting with anyone. Much less with you.',

		//splash screen
		'a …I guess I am somewhat involved in this case though.',

		'I thought it was just over conduct...?',
		'a Well, yeah. I have to take over customer service roles from that awful Salesman. Did you know what he did to that guy’s garage?',
		'…I see.',
		'l maybe I could use your help with this one. You seem… normal enough. And don’t have any …attachments, to the perpetrator.',
		'h …',
		'l Fetch me a coffee from the break room. Then come to my office. I have clerical work that I don’t want to be doing. Therefore, clerical work that you will be doing.',
		'h We were sort of occupied…..',
		'l If I have to hear another word from YOUR mouth I will make sure you will never speak again.',
		'h Noted!!',
		'h I’ll be in my office so…. We can pick up where we left off. Eventually.',

		'(okay… I guess I’m a law intern now. A co-council? An Apollo Justice.)',
		'(break room… there it is.)',

		//transition to breakroom
		'show scene scene4 fadeIn',

		'(Coffee… )',
		'show character s bird on center with fadeIn',

		's Hello again little guy. You looking for something?',
		'…! I didn’t notice you were in here.',
		'I’m looking for the coffee pot…',
		's For grumpy? He always seems to adopt interns whenever he decides to show his face.',
		's Just take this. I fear what he would do to you if you took too long in here, haha.',
		'(He pushed a fresh mug of coffee towards me.)',
		's …I do have one small request though.',
		's Give this to him too? ',
		'(he passes me a folded-up piece of paper.)', 
		's I can’t really compromise my position here, if you know what I mean.',
		's If things get… tricky, that’s what this is for.',
		'Okay…?',
		'(I pocket the paper)',
		's I’ll thank you for it later. Ciao.',
		
		'hide character s bird with fadeOut',

		'(I guess I should get to his office.)',

		'show scene scene5 with fadeIn',
		'show character l bird with fadeIn',

		'l …you’re here. Finally.',
		'(I took 5 minutes…)',
		'l No matter. As I said earlier, I’ll have you doing some paperwork and such. I’ll fill you in on the case first.',
		'Oh, um…',

		{
			'Choice': {
				'Dialog': '(should I...)',
				'give': {
					'Text': 'Give the note',
					'Do': 'jump Give'
				},
				'keep': {
					'Text': 'Keep the note',
					'Do': 'jump Keep'
				}
			}
		}
	],

	'Give': [
		'I was told to give you this.',
		'l …',
		'l …...…',
		'l What.',
		'l …excuse me for a moment.',
		
		'hide character l bird with fadeOut',
		'(he stormed out of the room…)',
		'(and left the note?)',

		{
			'Choice':{
				'Dialog': 'Do I dare look.',
				'look':{
					'Text': 'Yes',
					'Do': 'jump look'
				},
				'dont':{
					'Text': 'No',
					'Do': 'jump Dont'
				}
			}
		}
	],
		'look':[
		//(show image of yaoi)
		'…',
		'These people are insane.',
		'You got the CAT ending. Watch out.',
		'end'
		],

		'dont':[
		'play sound crash',
		'…?!',
		'(you got the HUH ending.)'
		],

	'Keep': [
		'l What? Already confused?',
		'…it’s nothing. Never mind.',
		'l I don’t have time for your silly interruptions.',
		
		//fade to black
		'show scene scene6 with fadeIn',
		'(and so we filled out the paperwork. And actually managed to come to an agreement with the customer.)',
		'(we did end up having to do team building and customer service exercises. )',
		'(Nothing really changed, though.)',
		'(you got the NORMAL ending.)',
		'end'

	]
});