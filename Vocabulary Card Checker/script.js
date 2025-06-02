// Sample data; replace/add with your full vocabulary list
const vocabulary = [
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "pick up (v.)",
    "Sentence ①": "The baby ( ) ( ) her toy from the floor.",
    "Answer ①": "picked up",
    "Sentence ②": "Please ( ) ( ) the necklace on the table.",
    "Answer ②": "pick up",
    "Definition": "to lift someone or something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "strange (adj.)",
    "Sentence ①": "My dog is very ( ) because he doesn't like to go outside.",
    "Answer ①": "strange",
    "Sentence ②": "We heard a ( ) noise outside our house.",
    "Answer ②": "strange",
    "Definition": "unusual or surprising, in a way that is difficult to understand or explain"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "look like (phr.v.)",
    "Sentence ①": "You ( ) ( ) your father.",
    "Answer ①": "look like",
    "Sentence ②": "The big white dog ( ) ( ) a small bear.",
    "Answer ②": "looked like",
    "Definition": "similar to something else, or happening in the same way"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "hurt (v.)",
    "Sentence ①": "My friend says that her head ( ).",
    "Answer ①": "hurts",
    "Sentence ②": "He ( ) his back when he fell.",
    "Answer ②": "hurt",
    "Definition": "① if part of your body ( ), or if something ( ) it, you can feel pain in it ② to cause pain"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "understand (v.)",
    "Sentence ①": "I do not ( ) this word.",
    "Answer ①": "understand",
    "Sentence ②": "He ( ) my English very well.",
    "Answer ②": "understood",
    "Definition": "to know the meaning of what someone is telling you, or the language that they speak"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 1,
    "Word": "surprised (adj.)",
    "Sentence ①": "I was very ( ) to see my friend after three years.",
    "Answer ①": "surprised",
    "Sentence ②": "He will be ( ) by so many presents in his room.",
    "Answer ②": "surprised",
    "Definition": "the feeling you have when something unexpected or unusual happens"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "speak (v.)",
    "Sentence ①": "Hello!\" the Scarecrow ( ) to Dorothy.",
    "Answer ①": "spoke",
    "Sentence ②": "My teacher ( ) Japanese and English very well.",
    "Answer ②": "speaks",
    "Definition": "① to say something or talk to someone about something ② to be able to talk in a particular language"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "move (v.)",
    "Sentence ①": "The Scarecrow ( ) his arm and legs.",
    "Answer ①": "moved",
    "Sentence ②": "Sit down! The train is ( ) now.",
    "Answer ②": "moving",
    "Definition": "to change from one place or position to another, or to make something do this"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "find (v.)",
    "Sentence ①": "Joe ( ) an apple on the table.",
    "Answer ①": "found",
    "Sentence ②": "I can't ( ) my pen, I don't know where it is!\" said Alex.",
    "Answer ②": "find",
    "Definition": "① to discover something by chance ② to get something that you have been looking for"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "carry (v.)",
    "Sentence ①": "The waitress ( ) our drinks to the table.",
    "Answer ①": "carried",
    "Sentence ②": "I didn't want to ( ) the suitcase because it was so big and heavy.",
    "Answer ②": "carry",
    "Definition": "① to hold something in your hands or arms, or on your back, as you go somewhere ② to take people or things from one place to another"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "a lot of (phr.)",
    "Sentence ①": "( ) ( ) ( ) people wanted to see the movie star.",
    "Answer ①": "a lot of",
    "Sentence ②": "I went to bed very late night because I had ( ) ( ) ( ) homework to do.",
    "Answer ②": "a lot of",
    "Definition": "a large amount, quantity, or number of something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 2,
    "Word": "laugh (v.)",
    "Sentence ①": "I ( ) when my father told me a funny story.",
    "Answer ①": "laughed",
    "Sentence ②": "I was happy because she ( ) at my joke.",
    "Answer ②": "laughed",
    "Definition": "to make sounds with your voice because you think something is funny"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "hear (v.)",
    "Sentence ①": "I looked out the window because I ( ) my friend's voice.",
    "Answer ①": "heard",
    "Sentence ②": "I can't ( ) you. Can you say that again?",
    "Answer ②": "hear",
    "Definition": "to know that a sound is being made, using your ears"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "begin (v.)",
    "Sentence ①": "My English lesson ( ) at 9 o'clock every morning.",
    "Answer ①": "begins",
    "Sentence ②": "The teacher ( ) to talk about today's class.",
    "Answer ②": "began",
    "Definition": "to start doing something, or to start to happen or exist"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "feel (v.)",
    "Sentence ①": "Do you ( ) hungry? I have some sandwiches in the kitchen if you want.",
    "Answer ①": "feel",
    "Sentence ②": "( ) this blanket. It is very soft!",
    "Answer ②": "feel",
    "Definition": "to experience a particular physical feeling or emotion"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "courageous (adj.)",
    "Sentence ①": "Jason was very ( ) to jump into the fire to help Kate.",
    "Answer ①": "courageous",
    "Sentence ②": "The story was about a ( ) boy who fought for his family.",
    "Answer ②": "courageous",
    "Definition": "the quality you have when you do not let fear affect you in a frightening situation"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "cry (v.)",
    "Sentence ①": "Sad movies always make me ( ).",
    "Answer ①": "cry",
    "Sentence ②": "Karen ( ) all day when her pet hamster died.",
    "Answer ②": "cried",
    "Definition": "to produce tears from your eyes"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 3,
    "Word": "cross (v.)",
    "Sentence ①": "Be careful when you ( ) the street.",
    "Answer ①": "cross",
    "Sentence ②": "The Lion took Dorothy on his back and ( ) the river.",
    "Answer ②": "crossed",
    "Definition": "to go from one side of a road, river, room etc to the other"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "without (prep.)",
    "Sentence ①": "I studied English for three hours ( ) a break, so I am very tired now.",
    "Answer ①": "without",
    "Sentence ②": "It's a beautiful sunny day ( ) a cloud in the sky.",
    "Answer ②": "without",
    "Definition": "not having, doing, or showing something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "until (prep.)",
    "Sentence ①": "The dog sat and waited by the door ( ) Mary came home.",
    "Answer ①": "until",
    "Sentence ②": "My father usually works ( ) very late at night.",
    "Answer ②": "until",
    "Definition": "linking word if something happens ( ) a time, it continues and then stops at that time"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "kill (v.)",
    "Sentence ①": "The lion ( ) a zebra and ate it.",
    "Answer ①": "killed",
    "Sentence ②": "Stacey stepped on a bug and ( ) it.",
    "Answer ②": "killed",
    "Definition": "to make a person or animal die"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "meet (v.)",
    "Sentence ①": "It's very nice to ( ) you,\" said Tom",
    "Answer ①": "meet",
    "Sentence ②": "Who is he? I haven't ( ) him before,\" said Joe.",
    "Answer ②": "met",
    "Definition": "to see and talk to someone for the first time"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "careful (adj.)",
    "Sentence ①": "Be ( ) when you use a knife!",
    "Answer ①": "careful",
    "Sentence ②": "Mary was very ( ) when she held her baby sister for the first time.",
    "Answer ②": "careful",
    "Definition": "① someone who is ( ) tries hard not to make mistakes, damage things etc ② giving a lot of thought and attention to something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 4,
    "Word": "watch (v.)",
    "Sentence ①": "Jim ( ) TV every day.",
    "Answer ①": "watches",
    "Sentence ②": "We ( ) \"Star Wars\" last night.",
    "Answer ②": "watched",
    "Definition": "to look at someone or something and pay attention to what is happening"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 5,
    "Word": "decide (v.)",
    "Sentence ①": "They ( ) to go to the park.",
    "Answer ①": "decided",
    "Sentence ②": "He ( ) not to come.",
    "Answer ②": "decided",
    "Definition": "to make a choice or judgment"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 5,
    "Word": "explain (v.)",
    "Sentence ①": "Can you ( ) this problem?",
    "Answer ①": "explain",
    "Sentence ②": "She ( ) it clearly.",
    "Answer ②": "explained",
    "Definition": "to make something clear or easy to understand"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 5,
    "Word": "improve (v.)",
    "Sentence ①": "She wants to ( ) her skills.",
    "Answer ①": "improve",
    "Sentence ②": "The weather ( ) yesterday.",
    "Answer ②": "improved",
    "Definition": "to make or become better"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 5,
    "Word": "ask (v.)",
    "Sentence ①": "I ( ) my teacher a question.",
    "Answer ①": "asked",
    "Sentence ②": "Can I ( ) you something?",
    "Answer ②": "ask",
    "Definition": "to say something in order to get an answer or information"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 5,
    "Word": "wait (v.)",
    "Sentence ①": "Please ( ) for me outside the school.",
    "Answer ①": "wait",
    "Sentence ②": "I can't ( ) any longer.",
    "Answer ②": "wait",
    "Definition": "to stay in one place until something happens or until someone arrives"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 6,
    "Word": "remember (v.)",
    "Sentence ①": "I ( ) my first day at school very well.",
    "Answer ①": "remember",
    "Sentence ②": "Do you ( ) where you put your keys?",
    "Answer ②": "remember",
    "Definition": "to keep a thought or idea in your mind"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 6,
    "Word": "forget (v.)",
    "Sentence ①": "Don't ( ) to bring your homework tomorrow.",
    "Answer ①": "forget",
    "Sentence ②": "I ( ) my umbrella at home.",
    "Answer ②": "forgot",
    "Definition": "to fail to remember something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 6,
    "Word": "listen (v.)",
    "Sentence ①": "Please ( ) carefully to the instructions.",
    "Answer ①": "listen",
    "Sentence ②": "I like to ( ) to music when I study.",
    "Answer ②": "listen",
    "Definition": "to give attention to sound or speech"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 6,
    "Word": "help (v.)",
    "Sentence ①": "Can you ( ) me with my homework?",
    "Answer ①": "help",
    "Sentence ②": "She ( ) me carry the bags.",
    "Answer ②": "helped",
    "Definition": "to make it easier or possible for someone to do something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 6,
    "Word": "open (v.)",
    "Sentence ①": "Please ( ) the window.",
    "Answer ①": "open",
    "Sentence ②": "He ( ) the door slowly.",
    "Answer ②": "opened",
    "Definition": "to move something so that it is no longer closed"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 7,
    "Word": "close (v.)",
    "Sentence ①": "Please ( ) the door when you leave.",
    "Answer ①": "close",
    "Sentence ②": "The shop ( ) at 8 p.m.",
    "Answer ②": "closed",
    "Definition": "to move something so that it is no longer open"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 7,
    "Word": "carry on (phr.v.)",
    "Sentence ①": "The teacher told us to ( ) ( ) with our work.",
    "Answer ①": "carry on",
    "Sentence ②": "They ( ) ( ) talking even after the bell rang.",
    "Answer ②": "carried on",
    "Definition": "to continue doing something"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 7,
    "Word": "break (v.)",
    "Sentence ①": "I ( ) my phone yesterday.",
    "Answer ①": "broke",
    "Sentence ②": "The glass ( ) when it hit the floor.",
    "Answer ②": "broke",
    "Definition": "to separate into pieces suddenly or violently"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 7,
    "Word": "decide (v.)",
    "Sentence ①": "I ( ) to study harder this year.",
    "Answer ①": "decided",
    "Sentence ②": "She ( ) not to go to the party.",
    "Answer ②": "decided",
    "Definition": "to make a choice or judgment"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 7,
    "Word": "explain (v.)",
    "Sentence ①": "Can you ( ) how this machine works?",
    "Answer ①": "explain",
    "Sentence ②": "He ( ) it very well.",
    "Answer ②": "explained",
    "Definition": "to make something clear or easy to understand"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 8,
    "Word": "arrive (v.)",
    "Sentence ①": "The train ( ) at 7:30 a.m.",
    "Answer ①": "arrives",
    "Sentence ②": "They ( ) late to the meeting.",
    "Answer ②": "arrived",
    "Definition": "to come to a place, especially at the end of a journey"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 8,
    "Word": "borrow (v.)",
    "Sentence ①": "Can I ( ) your pen?",
    "Answer ①": "borrow",
    "Sentence ②": "She ( ) a book from the library.",
    "Answer ②": "borrowed",
    "Definition": "to take something from someone for a short time, expecting to give it back"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 8,
    "Word": "choose (v.)",
    "Sentence ①": "I ( ) the red dress for the party.",
    "Answer ①": "chose",
    "Sentence ②": "She ( ) to stay home instead of going out.",
    "Answer ②": "chose",
    "Definition": "to decide which thing you want out of the ones that are available"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 8,
    "Word": "explain (v.)",
    "Sentence ①": "Please ( ) the instructions carefully.",
    "Answer ①": "explain",
    "Sentence ②": "He ( ) the rules to us.",
    "Answer ②": "explained",
    "Definition": "to make something clear or easy to understand"
  },
  {
    "Book": "BP3 The Wonderful Wizard of Oz",
    "Chapter": 8,
    "Word": "finish (v.)",
    "Sentence ①": "I ( ) my homework before dinner.",
    "Answer ①": "finished",
    "Sentence ②": "They ( ) the project on time.",
    "Answer ②": "finished",
    "Definition": "to complete something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "turn on (phr. v.)",
    "Sentence ①": "Will you please ( ) ( ) the lights?",
    "Answer ①": "turn on",
    "Sentence ②": "Joe ( ) ( ) the hot water to take a bath.",
    "Answer ②": "turned on",
    "Definition": "to make a light or piece of equipment start working, or make a supply of water, gas etc start flowing, by moving a switch, tap etc"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "ready for (adj.)",
    "Sentence ①": "Who is ( ) ( ) the test?",
    "Answer ①": "ready for",
    "Sentence ②": "Mike has all his books in his bag and is ( ) ( ) school.",
    "Answer ②": "ready for",
    "Definition": "if you are ( ), you have done everything necessary to prepare for something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "shut (v.)",
    "Sentence ①": "Please ( ) the door when you leave.",
    "Answer ①": "shut",
    "Sentence ②": "You should ( ) your window when you sleep.",
    "Answer ②": "shut",
    "Definition": "if you ( ) something, or if it ( )s, it closes"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "quickly (adv.)",
    "Sentence ①": "I ( ) ate my breakfast and l left for school.",
    "Answer ①": "quickly",
    "Sentence ②": "Karen ( ) ran to the train station.",
    "Answer ②": "quickly",
    "Definition": "moving fast, or doing something in a short amount of time"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "shadow (n.)",
    "Sentence ①": "I saw my ( ) on the ground.",
    "Answer ①": "shadow",
    "Sentence ②": "The lamp cast ( ) around the room.",
    "Answer ②": "shadows",
    "Definition": "a dark shape on a surface, caused by a person or object being between the light and the surface"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 1,
    "Word": "put (v.)",
    "Sentence ①": "Rachel ( ) her necklace in her little box.",
    "Answer ①": "put",
    "Sentence ②": "I always ( ) my keys on the dining table when I get home.",
    "Answer ②": "put",
    "Definition": "to move something to a particular place"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "silent (adj.)",
    "Sentence ①": "The room was ( ), except for the TV.",
    "Answer ①": "silent",
    "Sentence ②": "Please stay ( ) during the movie.",
    "Answer ②": "silent",
    "Definition": "① without any sound, or not making any sound ② not saying anything"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "grow up (phr. v.)",
    "Sentence ①": "When I ( ) ( ) , I want to be a baseball player.",
    "Answer ①": "grow up",
    "Sentence ②": "She ( ) ( ) to be a singer.",
    "Answer ②": "grew up",
    "Definition": "to gradually change from being a child to being an adult"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "hide (v.)",
    "Sentence ①": "The little boy ( ) in the closet.",
    "Answer ①": "hid",
    "Sentence ②": "They ( ) themselves behind the tree.",
    "Answer ②": "hid",
    "Definition": "if you ( ), you go to a place where no one can see you or find you"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "teach (v.)",
    "Sentence ①": "Tom will ( ) me how to play tennis.",
    "Answer ①": "teach",
    "Sentence ②": "My dad ( ) me how to ride a bike when I was 5 years old.",
    "Answer ②": "taught",
    "Definition": "to tell or show someone how to do something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "follow (v.)",
    "Sentence ①": "There was a stranger ( ) me, and I was very scared.",
    "Answer ①": "following",
    "Sentence ②": "The puppies ( ) their mom to the backyard.",
    "Answer ②": "followed",
    "Definition": "to walk or drive behind someone"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 2,
    "Word": "return (v.)",
    "Sentence ①": "My father ( ) home at around 9 o'clock yesterday.",
    "Answer ①": "returned",
    "Sentence ②": "Please ( ) these books to the library by Wednesday.",
    "Answer ②": "return",
    "Definition": "① to come back or go back to a place ② to give, put, or send something back where it came from"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "secret (adj.)",
    "Sentence ①": "Don't tell anyone my ( ).",
    "Answer ①": "secret",
    "Sentence ②": "The pirates hid their treasure in a ( ) place.",
    "Answer ②": "secret",
    "Definition": "if something is ( ), only few people know about it"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "hate (v.)",
    "Sentence ①": "I ( ) cleaning my room.",
    "Answer ①": "hate",
    "Sentence ②": "The two boys ( ) each other, so they are always fighting.",
    "Answer ②": "hate",
    "Definition": "to dislike someone or something very much"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "fight (n.)",
    "Sentence ①": "I had a ( ) with Simon at the party last night.",
    "Answer ①": "fight",
    "Sentence ②": "He had a big ( ) with his father.",
    "Answer ②": "fight",
    "Definition": "a situation in which two people or groups hit each other"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "enemy (n.)",
    "Sentence ①": "His ( ) hated and felt scared by him.",
    "Answer ①": "enemies",
    "Sentence ②": "Captain Hook is Peter Pan's ( ).",
    "Answer ②": "enemy",
    "Definition": "someone who hates you and wants you to fail"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "shoot (v.)",
    "Sentence ①": "He ( ) an arrow from his bow.",
    "Answer ①": "shot",
    "Sentence ②": "Don't ( ) me!",
    "Answer ②": "shoot",
    "Definition": "① to make a bullet or arrow come from a weapon ② to fire a gun at someone, or kill or injure someone with a gun"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 3,
    "Word": "build (v.)",
    "Sentence ①": "The bridge was ( ) in 1992.",
    "Answer ①": "built",
    "Sentence ②": "Let's ( ) a house for our dog.",
    "Answer ②": "build",
    "Definition": "to make a building, road, bridge etc"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "catch (v.)",
    "Sentence ①": "My father taught me how to ( ) a ball with baseball gloves.",
    "Answer ①": "catch",
    "Sentence ②": "Ken ( ) a butterfly with his net.",
    "Answer ②": "caught",
    "Definition": "to stop and hold something that is moving through the air"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "save (v.)",
    "Sentence ①": "The superhero ( ) the children from danger.",
    "Answer ①": "saved",
    "Sentence ②": "The princess was ( ) by the brave prince.",
    "Answer ②": "saved",
    "Definition": "to make someone or something safe from danger or harm"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "free (adj.)",
    "Sentence ①": "The animal can run ( ) in the park.",
    "Answer ①": "free",
    "Sentence ②": "After a year in prison, he was ( ).",
    "Answer ②": "free",
    "Definition": "not tied up or kept somewhere as a prisoner"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "hurt (v.)",
    "Sentence ①": "He ( ) himself while he was playing baseball.",
    "Answer ①": "hurt",
    "Sentence ②": "I fell over and ( ) my leg yesterday.",
    "Answer ②": "hurt",
    "Definition": "to cause someone to feel pain, or to damage part of your body so that it feels painful"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "brave (adj.)",
    "Sentence ①": "A ( ) boy tried to help his friend.",
    "Answer ①": "brave",
    "Sentence ②": "A ( ) man saved his children from the fire.",
    "Answer ②": "brave",
    "Definition": "showing that you are not afraid to do something that is dangerous, frightening, or difficult"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 4,
    "Word": "hold on (phr. v.)",
    "Sentence ①": "We ( ) ( ) tightly to the belts for the roller coaster ride.",
    "Answer ①": "held on",
    "Sentence ②": "( ) ( ) to the rope when climbing this mountain!",
    "Answer ②": "Hold on",
    "Definition": "to have your hands or arms tightly around something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "safe (adj.)",
    "Sentence ①": "Is this toy ( ) for children?",
    "Answer ①": "safe",
    "Sentence ②": "The beaches are excellent and ( ) for swimming.",
    "Answer ②": "safe",
    "Definition": "not likely to cause injury or harm"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "bored (adj.)",
    "Sentence ①": "I got ( ) watching TV.",
    "Answer ①": "bored",
    "Sentence ②": "I got ( ) with my job and looked for a new one.",
    "Answer ②": "bored",
    "Definition": "tired and impatient because something is uninteresting or you have nothing to do"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "protect (v.)",
    "Sentence ①": "Mothers ( ) their children from danger.",
    "Answer ①": "protect",
    "Sentence ②": "The soldiers fought to ( ) the country.",
    "Answer ②": "protect",
    "Definition": "to keep someone or something safe from harm, damage, or illness"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "parent (n.)",
    "Sentence ①": "Children need their ( ).",
    "Answer ①": "parents",
    "Sentence ②": "His ( ) always cared about him.",
    "Answer ②": "parents",
    "Definition": "someone's father or mother"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "real (adj.)",
    "Sentence ①": "No, it wasn't a dream. It was ( )!",
    "Answer ①": "real",
    "Sentence ②": "I believe that UFOs are ( ).",
    "Answer ②": "real",
    "Definition": "actually existing and not just imagined"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 5,
    "Word": "forever (adv.)",
    "Sentence ①": "This building is so strongly built that it will last ( ).",
    "Answer ①": "forever",
    "Sentence ②": "I will love my mom and dad ( ).",
    "Answer ②": "forever",
    "Definition": "for all future time"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "shout (v.)",
    "Sentence ①": "Call the police! He ( ).",
    "Answer ①": "shouted",
    "Sentence ②": "Andrew ran out of the house, ( ) for help.",
    "Answer ②": "shouting",
    "Definition": "to say something very loudly"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "in front of (phr.)",
    "Sentence ①": "The cameraman told us to stand ( ) ( ) ( ) the tree.",
    "Answer ①": "in front of",
    "Sentence ②": "There is an Italian restaurant ( ) ( ) ( ) our house.",
    "Answer ②": "in front of",
    "Definition": "① further forward than someone or something else ② facing something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "answer (n.)",
    "Sentence ①": "Can you tell me the ( ) to this problem?",
    "Answer ①": "answer",
    "Sentence ②": "I got some ( ) wrong on the test.",
    "Answer ②": "answers",
    "Definition": "① something that solves a problem... ② something that you write or say in reply to a question in a test or competition"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "cheer (v.)",
    "Sentence ①": "We ( ) as she stood on the stage.",
    "Answer ①": "cheered",
    "Sentence ②": "The people watching the game were shouting and ( ).",
    "Answer ②": "cheering",
    "Definition": "to shout approval, encouragement etc"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "tonight (n.)",
    "Sentence ①": "My grandfather is coming to our house ( ).",
    "Answer ①": "tonight",
    "Sentence ②": "What are we having for dinner ( )?",
    "Answer ②": "tonight",
    "Definition": "this evening or night"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 6,
    "Word": "throw (v.)",
    "Sentence ①": "He got in trouble for ( ) rocks at his friends.",
    "Answer ①": "throwing",
    "Sentence ②": "That baseball player can ( ) a ball really fast.",
    "Answer ②": "throw",
    "Definition": "to make an object such as a ball move quickly through the air by pushing your hand forward quickly and letting the object go"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "comfort (v.)",
    "Sentence ①": "Michael was very upset, so Nana tried ( ) him.",
    "Answer ①": "comforting",
    "Sentence ②": "The mother tried to ( ) the crying baby.",
    "Answer ②": "comfort",
    "Definition": "to make someone feel happier when they are upset or worried"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "true (adj.)",
    "Sentence ①": "Everything she said was ( ).",
    "Answer ①": "TRUE",
    "Sentence ②": "The movie is based on a ( ) story.",
    "Answer ②": "TRUE",
    "Definition": "based on real facts, and not imagined or invented"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "pleased (adj.)",
    "Sentence ①": "I'm so ( ) that you came to see me.",
    "Answer ①": "pleased",
    "Sentence ②": "I'm very ( ) that you passed the test.",
    "Answer ②": "pleased",
    "Definition": "happy about something or satisfied with something"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "stay (v.)",
    "Sentence ①": "Mary ( ) in Boston with her parents during spring break.",
    "Answer ①": "stayed",
    "Sentence ②": "He told me to ( ) here and wait.",
    "Answer ②": "stay",
    "Definition": "to remain in the same place, job, school etc, and not leave"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "visit (v.)",
    "Sentence ①": "She is ( ) a friend in Paris for two weeks.",
    "Answer ①": "visiting",
    "Sentence ②": "I ( ) my grandparents last summer.",
    "Answer ②": "visited",
    "Definition": "to go and spend time in a place or with someone"
  },
  {
    "Book": "BP3 Peter Pan",
    "Chapter": 7,
    "Word": "promise (n.)",
    "Sentence ①": "Makiko and I made a ( ) that we will always be friends.",
    "Answer ①": "promise",
    "Sentence ②": "You should never break a ( ).",
    "Answer ②": "promise",
    "Definition": "a statement that you will definitely do something or that something will definitely happen"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "without (prep.)",
    "Sentence ①": "I don't like books ( ) any pictures.",
    "Answer ①": "without",
    "Sentence ②": "Tommy left ( ) speaking to me.",
    "Answer ②": "without",
    "Definition": "not having, doing, or showing something"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "strange (adj.)",
    "Sentence ①": "How ( ) !' Alice thinks. 'A rabbit with a watch!'",
    "Answer ①": "strange",
    "Sentence ②": "There was something ( ) about the way she spoke.",
    "Answer ②": "strange",
    "Definition": "unusual or surprising, in a way that is difficult to understand or explain"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "slowly (adv.)",
    "Sentence ①": "Alice falls ( ) down the hole.",
    "Answer ①": "slowly",
    "Sentence ②": "The teacher spoke ( ) and clearly.",
    "Answer ②": "slowly",
    "Definition": "at a slow speed"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "follow (v.)",
    "Sentence ①": "The Mouse swims away and Alice ( ) him.",
    "Answer ①": "follows",
    "Sentence ②": "Matt ( ) Mike up the steps.",
    "Answer ②": "followed",
    "Definition": "to walk or drive behind someone"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "think (v.)",
    "Sentence ①": "Now I can get the key,' Alice ( ).",
    "Answer ①": "thinks",
    "Sentence ②": "Tina closed her eyes for a moment, trying to ( ).",
    "Answer ②": "think",
    "Definition": "to use your mind to decide about something, imagine something etc"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 1,
    "Word": "understand (v.)",
    "Sentence ①": "Maybe the Mouse ( ) French.",
    "Answer ①": "understands",
    "Sentence ②": "Do you ( ) what I'm telling you, Sean?",
    "Answer ②": "understand",
    "Definition": "to know the meaning of what someone is telling you, or the language that they speak"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "idea (n.)",
    "Sentence ①": "That's a good ( ).",
    "Answer ①": "idea",
    "Sentence ②": "The executives have a lot of good ( ).",
    "Answer ②": "ideas",
    "Definition": "something that you think of, especially a plan or suggestion"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "prize (n.)",
    "Sentence ①": "Everyone wins and everyone gets a ( ).",
    "Answer ①": "prize",
    "Sentence ②": "He won first ( ) in the golf tournament.",
    "Answer ②": "prize",
    "Definition": "something that is given to someone who is successful in a competition, race etc."
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "shout (v.)",
    "Sentence ①": "What!' ( ) Alice.",
    "Answer ①": "shouts",
    "Sentence ②": "Andrew ran out of the house, ( ) for help.",
    "Answer ②": "shouting",
    "Definition": "to say something very loudly"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "silent (adj.)",
    "Sentence ①": "The animals are ( ) for a moment.",
    "Answer ①": "silent",
    "Sentence ②": "Jessica was ( ) because she did not know what to do.",
    "Answer ②": "silent",
    "Definition": "not saying anything"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "moment (n.)",
    "Sentence ①": "The animals are silent for a ( ).",
    "Answer ①": "moment",
    "Sentence ②": "In a ( ) Mike was angry.",
    "Answer ②": "moment",
    "Definition": "a very short period of time"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 2,
    "Word": "quietly (adv.)",
    "Sentence ①": "Who are you?' Alice asks ( ).",
    "Answer ①": "quietly",
    "Sentence ②": "She spoke so ( ) we couldn't understand what she said.",
    "Answer ②": "quietly",
    "Definition": "without making much noise"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "invitation (n.)",
    "Sentence ①": "An ( ) from the Queen to play croquet.",
    "Answer ①": "invitation",
    "Sentence ②": "I got an ( ) to Sarah's birthday party.",
    "Answer ②": "invitation",
    "Definition": "a written or spoken request that invites someone to do something"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "sneeze (v.)",
    "Sentence ①": "There's too much pepper in the soup,' Alice thinks and she ( ).",
    "Answer ①": "sneezes",
    "Sentence ②": "Cover your nose and mouth when you ( ).",
    "Answer ②": "sneeze",
    "Definition": "when you ( ), air suddenly comes out of your nose and mouth in a noisy and uncontrollable way"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "terrible (adj.)",
    "Sentence ①": "There is a ( ) noise and Alice is afraid.",
    "Answer ①": "terrible",
    "Sentence ②": "The singer had a ( ) voice.",
    "Answer ②": "terrible",
    "Definition": "very bad"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "noise (n.)",
    "Sentence ①": "There is a terrible ( ) and Alice is afraid.",
    "Answer ①": "noise",
    "Sentence ②": "Students could not focus because there was too much ( ).",
    "Answer ②": "noise",
    "Definition": "a sound, especially one that is unpleasant or loud"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "be careful (phr.)",
    "Sentence ①": "Oh, please ( ) ( ).",
    "Answer ①": "be careful",
    "Sentence ②": "( ) ( )! There's broken glass on the floor.",
    "Answer ②": "Be careful",
    "Definition": "used to tell someone to think about what they are doing so that something bad does not happen"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 3,
    "Word": "mad (adj.)",
    "Sentence ①": "The Hatter and March Hare are both ( ).",
    "Answer ①": "mad",
    "Sentence ②": "Jake was going ( ) after being away from home for too long.",
    "Answer ②": "mad",
    "Definition": "crazy or very silly"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "always (adv.)",
    "Sentence ①": "You can ( ) have more than nothing.",
    "Answer ①": "always",
    "Sentence ②": "Jim is ( ) late for school.",
    "Answer ②": "always",
    "Definition": "every time, or at all times"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "try (v.)",
    "Sentence ①": "The Hatter ( ) to put the Dormouse into the teapot.",
    "Answer ①": "tries",
    "Sentence ②": "Always ( ) to do your best.",
    "Answer ②": "try",
    "Definition": "to attempt to do something"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "confused (adj.)",
    "Sentence ①": "Alice is ( ) and angry.",
    "Answer ①": "confused",
    "Sentence ②": "People are ( ) about what's going to happen.",
    "Answer ②": "confused",
    "Definition": "unable to understand something, especially because it does not seem to make sense"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "stupid (adj.)",
    "Sentence ①": "What a ( ) tea party!",
    "Answer ①": "stupid",
    "Sentence ②": "Joey made a ( ) mistake on the test.",
    "Answer ②": "stupid",
    "Definition": "not very clever or intelligent"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "hate (v.)",
    "Sentence ①": "The Queen ( ) white roses.",
    "Answer ①": "hates",
    "Sentence ②": "Jacob ( ) doing homework.",
    "Answer ②": "hates",
    "Definition": "to dislike someone or something very much"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 4,
    "Word": "paint (v.)",
    "Sentence ①": "The Cards must ( ) the flowers red or the Queen is going to cut off their heads.",
    "Answer ①": "paint",
    "Sentence ②": "The Johnsons ( ) their house pink.",
    "Answer ②": "painted",
    "Definition": "to put ( ) on a surface"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "stop (v.)",
    "Sentence ①": "The Queen ( ) and looks at Alice.",
    "Answer ①": "stops",
    "Sentence ②": "You must ( ) when the light is red.",
    "Answer ②": "stop",
    "Definition": "to not walk or move any more, or to make someone or something do this"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "soldier (n.)",
    "Sentence ①": "The queen told the ( ) to cut off their heads.",
    "Answer ①": "soldiers",
    "Sentence ②": "Many ( ) were hurt in the war.",
    "Answer ②": "soldiers",
    "Definition": "a member of the army, especially someone who is not an officer"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "help (v.)",
    "Sentence ①": "Please ( ) us!",
    "Answer ①": "help",
    "Sentence ②": "Can you ( ) me with my homework?",
    "Answer ②": "help",
    "Definition": "to make it easier for someone to do something, especially by doing something for them"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "difficult (adj.)",
    "Sentence ①": "The game will be ( ) because the balls are hedgehogs and the mallets are flamingos.",
    "Answer ①": "difficult",
    "Sentence ②": "I need to study more because I heard the test is ( ).",
    "Answer ②": "difficult",
    "Definition": "not easy to do, understand, or deal with"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "bring (v.)",
    "Sentence ①": "( ) the Duchess here,' says the Queen.",
    "Answer ①": "Bring",
    "Sentence ②": "Can I ( ) Susie to the party?",
    "Answer ②": "bring",
    "Definition": "to take something or someone with you to a place"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 5,
    "Word": "angrily (adv.)",
    "Sentence ①": "The Cheshire Cat's got a head,' says the King ( ).",
    "Answer ①": "angrily",
    "Sentence ②": "Do your homework!\" my mother said ( ).",
    "Answer ②": "angrily",
    "Definition": "feeling or showing anger"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 6,
    "Word": "middle (n.)",
    "Sentence ①": "In the ( ) there is a table with a big plate of tarts on it.",
    "Answer ①": "middle",
    "Sentence ②": "The ( ) button of Jack’s jacket was missing.",
    "Answer ②": "middle",
    "Definition": "the center part of something, or the part between the beginning and end of something"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 6,
    "Word": "listen (v.)",
    "Sentence ①": "The White Rabbit says that the King and the Queen have got to ( ) to some witnesses first.",
    "Answer ①": "listen",
    "Sentence ②": "Please ( ) carefully for instructions.",
    "Answer ②": "listen",
    "Definition": "to pay attention to what someone is saying or to something you can hear"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 6,
    "Word": "take off (phr. v.)",
    "Sentence ①": "( ) ( ) your hat.",
    "Answer ①": "Take off",
    "Sentence ②": "Come in and ( ) ( ) your coat.",
    "Answer ②": "take off",
    "Definition": "to remove something"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 6,
    "Word": "instead (adv.)",
    "Sentence ①": "The Hatter bites a piece of his teacup ( ) of his bread and butter.",
    "Answer ①": "instead",
    "Sentence ②": "Robert didn't want to go bowling. He went to the movies ( ).",
    "Answer ②": "instead",
    "Definition": "used to say that something is done, used etc when something else is not done or used"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 6,
    "Word": "important (adj.)",
    "Sentence ①": "This trial is very ( ) to the King.",
    "Answer ①": "important",
    "Sentence ②": "The head coach is an ( ) person in a basketball team.",
    "Answer ②": "important",
    "Definition": "① something that is ( ) has a big effect on what happens ② ( ) people have a lot of power or influence"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "everyone (pro.)",
    "Sentence ①": "( ) is silent and looks at the King.",
    "Answer ①": "Everyone",
    "Sentence ②": "( ) on the street was shocked when they heard the news.",
    "Answer ②": "Everyone",
    "Definition": "every person"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "letter (n.)",
    "Sentence ①": "The White Rabbit has a ( ).",
    "Answer ①": "letter",
    "Sentence ②": "Mark sent a ( ) to his grandma for her birthday.",
    "Answer ②": "letter",
    "Definition": "a written message that you put into an envelope and send to someone"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "close (v.)",
    "Sentence ①": "The King does not know what to say and ( ) the book quietly.",
    "Answer ①": "closes",
    "Sentence ②": "Please ( ) the door before you leave.",
    "Answer ②": "close",
    "Definition": "to shut something, or to become shut"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "poem (n.)",
    "Sentence ①": "The white Rabbit reads the ( ) but no one understands it.",
    "Answer ①": "poem",
    "Sentence ②": "Haiku is a Japanese style ( ).",
    "Answer ②": "poem",
    "Definition": "a piece of writing that is written in short lines, especially using words that rhyme"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "dream (n.)",
    "Sentence ①": "Alice tells her sister about her strange ( ).",
    "Answer ①": "dream",
    "Sentence ②": "John had a ( ) last night that he was flying.",
    "Answer ②": "dream",
    "Definition": "the thoughts, images, and experiences that come into your mind when you are asleep"
  },
  {
    "Book": "BP3 Alice's Adventures in Wonderland",
    "Chapter": 7,
    "Word": "happily (adv.)",
    "Sentence ①": "What a wonderful dream!' she says ( ).",
    "Answer ①": "happily",
    "Sentence ②": "The prince and the princess lived ( ) ever after.",
    "Answer ②": "happily",
    "Definition": "in a happy way"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "behind (adv.)",
    "Sentence ①": "The sun went ( ) the clouds.",
    "Answer ①": "behind",
    "Sentence ②": "You go ahead. I'll follow on ( ).",
    "Answer ②": "behind",
    "Definition": "at the back of something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "look after (phr. v.)",
    "Sentence ①": "I need to ( ) ( ) my little sister while my mom is shopping.",
    "Answer ①": "look after",
    "Sentence ②": "Our housemaid ( ) ( ) our house.",
    "Answer ②": "looks after",
    "Definition": "to take care of someone or something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "often (adv.)",
    "Sentence ①": "I ( ) visit my grandmother in Osaka.",
    "Answer ①": "often",
    "Sentence ②": "I think you need to read books more ( ).",
    "Answer ②": "often",
    "Definition": "many times or regularly"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "expensive (adj.)",
    "Sentence ①": "James saved his money to buy an ( ) car.",
    "Answer ①": "expensive",
    "Sentence ②": "Sally and her friends went to an ( ) restaurant on her birthday.",
    "Answer ②": "expensive",
    "Definition": "something that is ( ) costs a lot of money."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "silence (n.)",
    "Sentence ①": "The students took the test in ( ).",
    "Answer ①": "silence",
    "Sentence ②": "There was a long ( ) when they heard the shocking news.",
    "Answer ②": "silence",
    "Definition": "when there is no sound or nobody is talking."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "pull (v.)",
    "Sentence ①": "Don’t ( ) the handle so hard! It will come off!",
    "Answer ①": "pull",
    "Sentence ②": "I ( ) the door open and entered the room.",
    "Answer ②": "pulled",
    "Definition": "to hold someone or something firmly and move them in a particular direction."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "continue (v.)",
    "Sentence ①": "The students ( ) talking during class.",
    "Answer ①": "continued",
    "Sentence ②": "The boxer ( ) fighting.",
    "Answer ②": "continued",
    "Definition": "① to not stop happening, existing, or doing something ② to start again after a pause."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "clever (adj.)",
    "Sentence ①": "Monkeys are ( ) animals.",
    "Answer ①": "clever",
    "Sentence ②": "Kenta is a ( ) student; he always gets 100 on the tests.",
    "Answer ②": "clever",
    "Definition": "someone who is ( ) is intelligent and understands things quickly."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 1,
    "Word": "dead (adj.)",
    "Sentence ①": "I found a ( ) cat on the street.",
    "Answer ①": "dead",
    "Sentence ②": "We found a ( ) bug in our garage.",
    "Answer ②": "dead",
    "Definition": "no longer alive"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "be interested in",
    "Sentence ①": "James ( ) greatly ( ) ( ) mystery stories.",
    "Answer ①": "is interested in",
    "Sentence ②": "They ( ) not ( ) ( ) my news at all!",
    "Answer ②": "were interested in",
    "Definition": "if you are ( ) ( ) something you want to know more about it and you give it your attention."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "get up (phr. v.)",
    "Sentence ①": "I ( ) ( ) from bed because there was an earthquake.",
    "Answer ①": "got up",
    "Sentence ②": "“( ) ( ), or you will be late for school,” my mother told me.",
    "Answer ②": "Get up",
    "Definition": "to get out of your bed after sleeping"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "midnight (n.)",
    "Sentence ①": "Cinderella had to go back home before ( ).",
    "Answer ①": "midnight",
    "Sentence ②": "We waited till ( ) to celebrate New Year’s Day.",
    "Answer ②": "midnight",
    "Definition": "12 o'clock at night"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "be afraid of",
    "Sentence ①": "Ben ( ) ( ) ( ) going out after dark.",
    "Answer ①": "is afraid of",
    "Sentence ②": "My little brother ran after he saw ants because he ( ) ( ) ( ) them.",
    "Answer ②": "was afraid of",
    "Definition": "to be scared of something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "free (adj.)",
    "Sentence ①": "The restaurant was crowded, but there was one ( ) seat left.",
    "Answer ①": "free",
    "Sentence ②": "Please put your bags on one of these ( ) desks,\" said Simon.",
    "Answer ②": "free",
    "Definition": "not being used by anyone else"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "show (v.)",
    "Sentence ①": "My sister ( ) me what she had bought today.",
    "Answer ①": "showed",
    "Sentence ②": "They're ( ) Tom Cruise's latest film at our local cinema.",
    "Answer ②": "showing",
    "Definition": "to let someone see something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "feel (v.)",
    "Sentence ①": "How are you ( ) today?\" asked Nathan.",
    "Answer ①": "feeling",
    "Sentence ②": "He was ( ) much better after he slept for eight hours.",
    "Answer ②": "feeling",
    "Definition": "to experience a particular physical affection or emotion"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "half past (phr.)",
    "Sentence ①": "Wake up! It's already ( ) ( ) eight!",
    "Answer ①": "half past",
    "Sentence ②": "You should go to bed now! It's already ( ) ( ) twelve.",
    "Answer ②": "half past",
    "Definition": "When the time is ( ) ( ) twelve it is 12:30"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 2,
    "Word": "cover (v.)",
    "Sentence ①": "Emily ( ) her face with her hands when she cried.",
    "Answer ①": "covered",
    "Sentence ②": "The mountaintop is ( ) with snow in winter.",
    "Answer ②": "covered",
    "Definition": "① to put something over or be over something in order to hide, close, or protect it ② if something ( ) a surface, it forms a layer over it"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "close (adv.)",
    "Sentence ①": "You should come ( ) to me and take a look at this.",
    "Answer ①": "close",
    "Sentence ②": "The baby monkey stayed ( ) close to its mother.",
    "Answer ②": "close",
    "Definition": "not far from someone or something."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "right (adj.)",
    "Sentence ①": "I got all the questions ( ) in the test!",
    "Answer ①": "right",
    "Sentence ②": "Parents should teach what's ( ) and what's wrong to their children.",
    "Answer ②": "right",
    "Definition": "① correct or true ② fair or morally good"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "steal (v.)",
    "Sentence ①": "The burglar tried to ( ) money from the bank.",
    "Answer ①": "steal",
    "Sentence ②": "The man ( ) the tourist's wallet.",
    "Answer ②": "stole",
    "Definition": "to take something that does not belong to you"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "dig (v.)",
    "Sentence ①": "Cameron's dog ( ) up his favorite bone from the ground.",
    "Answer ①": "dug",
    "Sentence ②": "The workers worked every day to ( ) a tunnel.",
    "Answer ②": "dig",
    "Definition": "to move earth, snow etc so that you make a hole in the ground, especially using a tool"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "ago (adv.)",
    "Sentence ①": "I can't remember what I did on my 5th birthday. It was so long ( ).",
    "Answer ①": "ago",
    "Sentence ②": "Sadly, my dog died 2 years ( ).",
    "Answer ②": "ago",
    "Definition": "used to say how far back in the past something happened"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "confuse (v.)",
    "Sentence ①": "He ( ) everyone with his long stories.",
    "Answer ①": "confused",
    "Sentence ②": "The reporter asked many difficult questions that ( ) the actor.",
    "Answer ②": "confused",
    "Definition": "to make someone feel that they cannot think clearly or understand something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "worry (v.)",
    "Sentence ①": "My teacher told me that there was nothing to ( ) about.",
    "Answer ①": "worry",
    "Sentence ②": "He ( ) if I don't phone every weekend.",
    "Answer ②": "worries",
    "Definition": "to keep thinking about a problem or about something bad that might happen so that you do not feel happy or relaxed"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "terrified (adj.)",
    "Sentence ①": "She was ( ) that she would fall from the stairs.",
    "Answer ①": "terrified",
    "Sentence ②": "I'm very ( ) of high places.",
    "Answer ②": "terrified",
    "Definition": "very frightened"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 3,
    "Word": "poor (adj.)",
    "Sentence ①": "The family was too ( ) to buy an expensive car.",
    "Answer ①": "poor",
    "Sentence ②": "Rich countries could do more to help ( ) countries.",
    "Answer ②": "poor",
    "Definition": "someone who is ( ) has very little money and not many possessions"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "be sorry for",
    "Sentence ①": "Tim was lonely and I ( ) ( ) ( ) him.",
    "Answer ①": "was sorry for",
    "Sentence ②": "I heard that she broke her leg. I ( ) ( ) ( ) her.",
    "Answer ②": "am sorry for",
    "Definition": "feeling sad about a situation and wishing it were different"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "horrible (adj.)",
    "Sentence ①": "The picnic was cancelled because the weather was ( ).",
    "Answer ①": "horrible",
    "Sentence ②": "A ( ) car accident killed 10 people.",
    "Answer ②": "horrible",
    "Definition": "very unpleasant or upsetting"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "ready (adj.)",
    "Sentence ①": "The car will be ( ) for you to pick you up at the airport.",
    "Answer ①": "ready",
    "Sentence ②": "Sophie wasn't ( ) to take her final tests.",
    "Answer ②": "ready",
    "Definition": "① something that is ( ) has been prepared and can be used, eaten etc immediately ② if you are ( ), you have done everything necessary to prepare for something"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "cook (v.)",
    "Sentence ①": "My mom is very good at ( ) delicious curry.",
    "Answer ①": "cooking",
    "Sentence ②": "She ( ) at an Italian restaurant.",
    "Answer ②": "cooks",
    "Definition": "to prepare food for eating, using heat"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "explore (v.)",
    "Sentence ①": "The team went on an adventure to ( ) the Amazon River.",
    "Answer ①": "explore",
    "Sentence ②": "Kenny decided to go to Paris this summer to ( ) the city.",
    "Answer ②": "explore",
    "Definition": "to travel around an area to find out what it is like"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "drown (v.)",
    "Sentence ①": "Jack jumped in the lake to rescue a ( ) child.",
    "Answer ①": "drowning",
    "Sentence ②": "Many people ( ) in the boat accident.",
    "Answer ②": "drowned",
    "Definition": "to die by being under water for too long, or to kill someone in this way"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "moment (n.)",
    "Sentence ①": "I'm sorry, but Dr. Lee left just a few ( ) ago.",
    "Answer ①": "moments",
    "Sentence ②": "Richard told me that he was busy at the ( ) so I waited at his office.",
    "Answer ②": "moment",
    "Definition": "a very short period of time"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "instead (adv.)",
    "Sentence ①": "I couldn't go to the party, so my sister went ( ).",
    "Answer ①": "instead",
    "Sentence ②": "You should play football ( ) of just watching it on TV.",
    "Answer ②": "instead",
    "Definition": "used to say that something is done, used etc when something else is not done or used"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 4,
    "Word": "be proud of",
    "Sentence ①": "The Richard family ( ) very ( ) ( ) their new house.",
    "Answer ①": "is proud of",
    "Sentence ②": "I ( ) very ( ) ( ) you!\" said my mother after I won the first prize.",
    "Answer ②": "am proud of",
    "Definition": "feeling pleased with something you, your family, or your country have achieved, or with something you own"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "trial (n.)",
    "Sentence ①": "Jack is on ( ) for robbery.",
    "Answer ①": "trial",
    "Sentence ②": "At the ( ), the lady spoke quietly about the accident.",
    "Answer ②": "trial",
    "Definition": "a legal process in which a court of law decides whether or not someone is guilty of a crime"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "hang (v.)",
    "Sentence ①": "Mr. White was ( ) for murder.",
    "Answer ①": "hanged",
    "Sentence ②": "Corey ( ) himself in his prison cell.",
    "Answer ②": "hanged",
    "Definition": "to kill someone by dropping them with a rope around their neck, or to die in this way, as a punishment for a crime"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "once (adv.)",
    "Sentence ①": "I ( ) traveled to America when I was young.",
    "Answer ①": "once",
    "Sentence ②": "I've met Patrick ( ) but I don't know him very well.",
    "Answer ②": "once",
    "Definition": "one time"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "jail (n.)",
    "Sentence ①": "Mr. Hook was put in ( ) for six years.",
    "Answer ①": "jail",
    "Sentence ②": "If you kill a person, then you will have to go to ( ).",
    "Answer ②": "jail",
    "Definition": "a place where criminals are kept as a punishment."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "during (prep.)",
    "Sentence ①": "( ) the summer, Emma worked as a waitress.",
    "Answer ①": "during",
    "Sentence ②": "My friend and I went skiing ( ) winter vacation.",
    "Answer ②": "during",
    "Definition": "at one point in a period of time."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "lawyer (n.)",
    "Sentence ①": "I want to become a ( ) and save poor people.",
    "Answer ①": "lawyer",
    "Sentence ②": "The ( ) made the man explain what really happened at the scene.",
    "Answer ②": "lawyer",
    "Definition": "someone whose job is to advise people about the law or speak for them in court."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 5,
    "Word": "save (v.)",
    "Sentence ①": "The firefighter jumped in the fire and ( ) a little girl.",
    "Answer ①": "saved",
    "Sentence ②": "The doctor's job is to ( ) people's lives.",
    "Answer ②": "save",
    "Definition": "to make someone or something safe from danger or harm."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "treasure (n.)",
    "Sentence ①": "Keith dug the ground and found a ( ) box!",
    "Answer ①": "treasure",
    "Sentence ②": "Captain Jack Sparrow opened the ( ) chest.",
    "Answer ②": "treasure",
    "Definition": "a group of valuable things such as gold, silver, jewels etc."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "haunted (adj.)",
    "Sentence ①": "I don't want to go to the ( ) house. I don't like ghosts.",
    "Answer ①": "haunted",
    "Sentence ②": "I think that mansion is ( ). I sometimes hear strange sounds.",
    "Answer ②": "haunted",
    "Definition": "a ( ) building is believed to be visited regularly by the soul of a dead person."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "daytime (n.)",
    "Sentence ①": "Owls sleep in the ( ).",
    "Answer ①": "daytime",
    "Sentence ②": "You should go outside during the ( ) and enjoy the sun.",
    "Answer ②": "daytime",
    "Definition": "the period between the time when it gets light and the time when it gets dark."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "broken (adj.)",
    "Sentence ①": "Be careful when you pick up the ( ) glass.",
    "Answer ①": "broken",
    "Sentence ②": "I dropped my camera, and it's now ( ).",
    "Answer ②": "broken",
    "Definition": "damaged or in small pieces because of being hit, dropped etc."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "downstairs (adv.)",
    "Sentence ①": "Can you go ( ) and answer the door?",
    "Answer ①": "downstairs",
    "Sentence ②": "Mike went ( ) to have dinner.",
    "Answer ②": "downstairs",
    "Definition": "on or towards a lower level of a building, especially a house."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "hole (n.)",
    "Sentence ①": "The boys climbed through a ( ) in the fence.",
    "Answer ①": "hole",
    "Sentence ②": "There's a ( ) in my shoe! I need to buy a new one!",
    "Answer ②": "hole",
    "Definition": "an empty space"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "wear (v.)",
    "Sentence ①": "Rachel ( ) a red dress to the party.",
    "Answer ①": "wore",
    "Sentence ②": "I can't decide what to ( ) to school tomorrow.",
    "Answer ②": "wear",
    "Definition": "to have something such as clothes, shoes, or jewelry on your body."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "fireplace (n.)",
    "Sentence ①": "My father added some more wood into the ( ).",
    "Answer ①": "fireplace",
    "Sentence ②": "In the winter, we like to drink hot chocolate and talk in front of the ( ).",
    "Answer ②": "fireplace",
    "Definition": "an open place in the wall of a room, where you can make a fire to heat the room"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 6,
    "Word": "cross (n.)",
    "Sentence ①": "You can see a ( ) at the top of a church.",
    "Answer ①": "cross",
    "Sentence ②": "Vampires hate garlic and the ( ).",
    "Answer ②": "cross",
    "Definition": "an object, sign etc in the shape of a ( ), used to represent the Christian faith"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "invite (v.)",
    "Sentence ①": "We ( ) everyone in the family to the wedding.",
    "Answer ①": "invited",
    "Sentence ②": "I want to ( ) many people to my birthday party.",
    "Answer ②": "invite",
    "Definition": "To ask someone to come to a party, meal etc."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "entrance (n.)",
    "Sentence ①": "The ( ) to the museum is around the corner.",
    "Answer ①": "entrance",
    "Sentence ②": "I'll meet you at the main ( ).",
    "Answer ②": "entrance",
    "Definition": "a door or gate that you go through to enter a place."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "lost (adj.)",
    "Sentence ①": "I'm not good at reading maps so I get ( ) very easily.",
    "Answer ①": "lost",
    "Sentence ②": "Janet was ( ) and asked the policeman the way to the station.",
    "Answer ②": "lost",
    "Definition": "not knowing where you are or how to find your way"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "follow (v.)",
    "Sentence ①": "The dog ( ) her around wherever she went.",
    "Answer ①": "followed",
    "Sentence ②": "The baby ducklings ( ) their mother.",
    "Answer ②": "followed",
    "Definition": "to walk or drive behind someone."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "hurt (v.)",
    "Sentence ①": "Charlie fell and ( ) her arm.",
    "Answer ①": "hurt",
    "Sentence ②": "No one was ( ) in the accident.",
    "Answer ②": "hurt",
    "Definition": "to cause someone to feel pain, or to damage part of your body so that it feels painful."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "conversation (n.)",
    "Sentence ①": "We had a long ( ) about her future.",
    "Answer ①": "conversation",
    "Sentence ②": "I enjoyed a lovely ( ) with my neighbor.",
    "Answer ②": "conversation",
    "Definition": "an informal talk between two or more people."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "brave (adj.)",
    "Sentence ①": "The ( ) soldiers fought in the war.",
    "Answer ①": "brave",
    "Sentence ②": "The ( ) superhero saved the little boy's life.",
    "Answer ②": "brave",
    "Definition": "showing that you are not afraid to do something that is dangerous, frightening, or difficult."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "spend (v.)",
    "Sentence ①": "How much do you ( ) on clothes each month?",
    "Answer ①": "spend",
    "Sentence ②": "You shouldn't go on ( ) so much money like this.",
    "Answer ②": "spending",
    "Definition": "to use your money to pay for something."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 7,
    "Word": "empty (adj.)",
    "Sentence ①": "When I got on the bus, it was half ( ).",
    "Answer ①": "empty",
    "Sentence ②": "Your glass is almost ( ). Do you want another one?",
    "Answer ②": "empty",
    "Definition": "an ( ) container or place has nothing or no one in it."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "ill (adj.)",
    "Sentence ①": "Tim didn't come to school today because he was ( ).",
    "Answer ①": "ill",
    "Sentence ②": "I took medicine because I was ( ).",
    "Answer ②": "ill",
    "Definition": "suffering from a disease or not feeling well."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "street (n.)",
    "Sentence ①": "I saw her across the ( ).",
    "Answer ①": "street",
    "Sentence ②": "The ( ) of Shinjuku are always full of people.",
    "Answer ②": "streets",
    "Definition": "a road in a town or city with houses and shops on it."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "string (n.)",
    "Sentence ①": "The key is hanging on a ( ).",
    "Answer ①": "string",
    "Sentence ②": "Benjamin tied a ( ) on the books to carry them.",
    "Answer ②": "string",
    "Definition": "a strong thread that you use for tying or fastening things."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "nobody (pronoun)",
    "Sentence ①": "He screamed but ( ) came to help him.",
    "Answer ①": "nobody",
    "Sentence ②": "It was quiet because ( ) was at home.",
    "Answer ②": "nobody",
    "Definition": "no one"
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "probably (adv.)",
    "Sentence ①": "I will call you next week, ( ) on Wednesday.",
    "Answer ①": "probably",
    "Sentence ②": "I can ( ) go to your party, but I'm not sure yet.",
    "Answer ②": "probably",
    "Definition": "used when saying that you think something will happen or be true, although you are not sure."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "hurry (v.)",
    "Sentence ①": "You should ( ) because the train will leave in 3 minutes.",
    "Answer ①": "hurry",
    "Sentence ②": "Elizabeth ( ) home to watch her favorite TV program.",
    "Answer ②": "hurried",
    "Definition": "to go somewhere or do something quickly, or to make someone do this."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "rich (adj.)",
    "Sentence ①": "The man who lives in the biggest house in town is very ( ).",
    "Answer ①": "rich",
    "Sentence ②": "The ( ) man gave $1 million to help poor people.",
    "Answer ②": "rich",
    "Definition": "a ( ) person, country etc has a lot of money and valuable things."
  },
  {
    "Book": "BP4 The Adventures of Tom Sawyer",
    "Chapter": 8,
    "Word": "amazed (adj.)",
    "Sentence ①": "Everyone was ( ) at the magic tricks.",
    "Answer ①": "amazed",
    "Sentence ②": "We were all ( ) that Satoshi got a perfect score on the test.",
    "Answer ②": "amazed",
    "Definition": "very surprised"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "historical (adj.)",
    "Sentence ①": "We visited many ( ) sites in Greece.",
    "Answer ①": "historical",
    "Sentence ②": "Kyoto is a very ( ) city, with many temples and shrines.",
    "Answer ②": "historical",
    "Definition": "relating to people or things that happened or existed in the past"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "landmark (n.)",
    "Sentence ①": "Statue of Liberty is a famous ( ) of New York City.",
    "Answer ①": "landmark",
    "Sentence ②": "The city hall has become the ( ) of our town.",
    "Answer ②": "landmark",
    "Definition": "something that helps you recognize where you are, such as a famous building"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "neighborhood (n.)",
    "Sentence ①": "He grew up in a ( ) full of green.",
    "Answer ①": "neighborhood",
    "Sentence ②": "My best friend lives in the ( ) so I visit her often.",
    "Answer ②": "neighborhood",
    "Definition": "an area of a town, and the people who live there"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "neighbor (n.)",
    "Sentence ①": "We had a New Year's party with our ( ).",
    "Answer ①": "neighbors",
    "Sentence ②": "We asked our ( ) to look after our dog while we are on vacation.",
    "Answer ②": "neighbor",
    "Definition": "someone who lives next to you or near you"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "crowded (adj.)",
    "Sentence ①": "It was hot in the ( ) room.",
    "Answer ①": "crowded",
    "Sentence ②": "Disneyland is very ( ) on Saturdays and Sundays.",
    "Answer ②": "crowded",
    "Definition": "very full of people or things"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "smell (v.)",
    "Sentence ①": "The flowers in the garden ( ) very nice.",
    "Answer ①": "smelled",
    "Sentence ②": "The cookies in the oven ( ) delicious.",
    "Answer ②": "smelled",
    "Definition": "to have a particular ( )"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "nearby (adv.)",
    "Sentence ①": "My father works in a factory ( ).",
    "Answer ①": "nearby",
    "Sentence ②": "Do you live ( )? I think I have seen you before.",
    "Answer ②": "nearby",
    "Definition": "not far away"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "experiment (n.)",
    "Sentence ①": "Many people do not like the idea of ( ) on animals.",
    "Answer ①": "experiments",
    "Sentence ②": "During the ( ), we had to mix the chemicals together.",
    "Answer ②": "experiment",
    "Definition": "a scientific test to find out or prove something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "ring (v.)",
    "Sentence ①": "The doorbell ( ), so I opened the door.",
    "Answer ①": "rang",
    "Sentence ②": "I heard the phone ( ) in the kitchen.",
    "Answer ②": "ringing",
    "Definition": "① if you ( ) a bell, you make it produce a sound ② if a telephone ( )s, it makes a sound to show that someone is calling you"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 1,
    "Word": "busy (adj.)",
    "Sentence ①": "I'm ( ) right now. Can I call you again later?",
    "Answer ①": "busy",
    "Sentence ②": "My father has been very ( ) lately and comes home late at night.",
    "Answer ②": "busy",
    "Definition": "if you are ( ), you have a lot of things to do"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "mansion (n.)",
    "Sentence ①": "The rich man lives in a big ( ).",
    "Answer ①": "mansion",
    "Sentence ②": "Some people say that ghosts live in that old ( ).",
    "Answer ②": "mansion",
    "Definition": "a very large house"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "disappear (v.)",
    "Sentence ①": "The sun ( ) behind the clouds.",
    "Answer ①": "disappeared",
    "Sentence ②": "The white bird ( ) under the magician's hat.",
    "Answer ②": "disappeared",
    "Definition": "if something ( )s, you can no longer see it"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "decide (v.)",
    "Sentence ①": "I can't ( ) what to wear to the party.",
    "Answer ①": "decide",
    "Sentence ②": "Have you ( ) what you would like to eat for lunch today?",
    "Answer ②": "decided",
    "Definition": "to make a choice to do something, or a judgment about something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "enemy (n.)",
    "Sentence ①": "Captain Jack Sparrow's ( ) is the huge monster.",
    "Answer ①": "enemy",
    "Sentence ②": "Arthur is very mean and cruel. He has many ( ).",
    "Answer ②": "enemies",
    "Definition": "someone who hates you and wants you to fail"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "accident (n.)",
    "Sentence ①": "Her parents were killed in a car ( ).",
    "Answer ①": "accident",
    "Sentence ②": "There were five car ( ) in my town last night.",
    "Answer ②": "accidents",
    "Definition": "a situation in which someone is hurt or something is damaged without anyone intending it to happen"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "return (v.)",
    "Sentence ①": "She didn't ( ) until late in the evening.",
    "Answer ①": "return",
    "Sentence ②": "Samantha ( ) from Las Vegas last night.",
    "Answer ②": "returned",
    "Definition": "to come back or go back to a place"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "imagination (n.)",
    "Sentence ①": "Art is all about using your ( ).",
    "Answer ①": "imagination",
    "Sentence ②": "Did you hear that noise?\" \"No, it's your ( ).",
    "Answer ②": "imagination",
    "Definition": "① the ability to form pictures or ideas in your mind ② used to say that something that someone thinks is real is not real"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "customer (n.)",
    "Sentence ①": "There were only a few ( ) shopping in the store.",
    "Answer ①": "customers",
    "Sentence ②": "I am a regular ( ) of that shop.",
    "Answer ②": "customer",
    "Definition": "someone who buys things from a shop or company"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 2,
    "Word": "expression (n.)",
    "Sentence ①": "He showed an ( ) of shock.",
    "Answer ①": "expression",
    "Sentence ②": "I could not understand the ( ) on his face.",
    "Answer ②": "expression",
    "Definition": "a look on someone's face"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "secret (n.)",
    "Sentence ①": "We promised each other not to tell anyone about our ( ).",
    "Answer ①": "secret",
    "Sentence ②": "He kept the treasure that he found a ( ) to himself.",
    "Answer ②": "secret",
    "Definition": "something that is only told to a few people"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "popular (adj.)",
    "Sentence ①": "Jenny is a very ( ) girl in school and everyone loves her.",
    "Answer ①": "popular",
    "Sentence ②": "Everyone knows that singer because he is ( ).",
    "Answer ②": "popular",
    "Definition": "liked by a lot of people"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "hope (v.)",
    "Sentence ①": "We all ( ) she will feel better soon.",
    "Answer ①": "hoped",
    "Sentence ②": "He's ( ) to go to Africa next year.",
    "Answer ②": "hoping",
    "Definition": "to want something to happen or be true, and to believe that it is possible"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "promise (v.)",
    "Sentence ①": "Can you ( ) me that you will never tell my secret?",
    "Answer ①": "promise",
    "Sentence ②": "I ( ) her that I will call her tomorrow.",
    "Answer ②": "promised",
    "Definition": "to say that you will definitely do something or that something will definitely happen"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "probably (adv.)",
    "Sentence ①": "Since the sky is getting dark, it will ( ) rain today.",
    "Answer ①": "probably",
    "Sentence ②": "I will ( ) be home around 7 o'clock.",
    "Answer ②": "probably",
    "Definition": "used when saying that you think something will happen or be true, although you are not sure"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "cemetery (n.)",
    "Sentence ①": "( ) look scary at night.",
    "Answer ①": "Cemeteries",
    "Sentence ②": "I went to the ( ) to put some flowers on my mother's grave.",
    "Answer ②": "cemetery",
    "Definition": "a place where dead people are buried"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "curious (adj.)",
    "Sentence ①": "They were very ( ) about the people who lived upstairs.",
    "Answer ①": "curious",
    "Sentence ②": "He is such a ( ) boy, always asking questions.",
    "Answer ②": "curious",
    "Definition": "wanting to know or learn about something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 3,
    "Word": "agree (v.)",
    "Sentence ①": "My sister and I never ( ) on anything.",
    "Answer ①": "agree",
    "Sentence ②": "My brother and I ( ) that we should go out for dinner tonight.",
    "Answer ②": "agreed",
    "Definition": "① to have the same opinion as someone else ② to make a decision with someone after discussing something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "depend on (phr. v.)",
    "Sentence ①": "Your grade will ( ) ( ) how much you study.",
    "Answer ①": "depend on",
    "Sentence ②": "We can catch the train ( ) ( ) the time we get to the station.",
    "Answer ②": "depending on",
    "Definition": "if something ( ) ( ) something else, it is directly affected by that thing."
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "thousands of (phr.)",
    "Sentence ①": "I could see ( ) ( ) stars in the sky.",
    "Answer ①": "thousands of",
    "Sentence ②": "There are ( ) ( ) things I want to do.",
    "Answer ②": "thousands of",
    "Definition": "an extremely large number of things or people"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "decorate (v.)",
    "Sentence ①": "Marissa ( ) the cake she made with icing.",
    "Answer ①": "decorated",
    "Sentence ②": "The children wanted to ( ) the Christmas tree with ribbons.",
    "Answer ②": "decorate",
    "Definition": "to make something look more attractive by putting something pretty on it"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "explore (v.)",
    "Sentence ①": "The children went into the woods to ( ).",
    "Answer ①": "explore",
    "Sentence ②": "I want to go to space and ( ) the moon.",
    "Answer ②": "explore",
    "Definition": "to travel around an area to find out what it is like"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "scarce (adj.)",
    "Sentence ①": "Meat and butter were ( ) during the war.",
    "Answer ①": "scarce",
    "Sentence ②": "The amount of money we have left is getting ( ).",
    "Answer ②": "scarce",
    "Definition": "if something is ( ), there is not enough of it available"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "furniture (n.)",
    "Sentence ①": "That table is a lovely piece of ( ).",
    "Answer ①": "furniture",
    "Sentence ②": "We moved to London after selling all of the ( ).",
    "Answer ②": "furniture",
    "Definition": "large objects in a room, such as chairs, tables, and beds"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "equipment (n.)",
    "Sentence ①": "The students put away their sports ( ).",
    "Answer ①": "equipment",
    "Sentence ②": "My father bought some ( ) to fix our car.",
    "Answer ②": "equipment",
    "Definition": "the things that you need to do a job or sport"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 4,
    "Word": "alone (adj.)",
    "Sentence ①": "You shouldn't walk ( ) at night.",
    "Answer ①": "alone",
    "Sentence ②": "Ken lives ( ) in an apartment in Tokyo.",
    "Answer ②": "alone",
    "Definition": "without any other people, or without help from anyone else"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "shine (v.)",
    "Sentence ①": "The moon came out from the clouds and ( ) down on them.",
    "Answer ①": "shone",
    "Sentence ②": "I could see stars ( ) in the clear winter sky.",
    "Answer ②": "shining",
    "Definition": "to produce a bright light"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "stay away (phr. v.)",
    "Sentence ①": "You should ( ) ( ) from dangerous areas.",
    "Answer ①": "stay away",
    "Sentence ②": "Tom ( ) ( ) from the barking dog.",
    "Answer ②": "stayed away",
    "Definition": "to not go near someone or something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "last (adj.)",
    "Sentence ①": "I took a long vacation to Hawaii ( ) month.",
    "Answer ①": "last",
    "Sentence ②": "Tom broke his leg ( ) Monday in a car accident.",
    "Answer ②": "last",
    "Definition": "most recent"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "grow (v.)",
    "Sentence ①": "Babies ( ) quickly in their first year.",
    "Answer ①": "grow",
    "Sentence ②": "Bob, you've really ( ) up. You are so much taller now.",
    "Answer ②": "grown",
    "Definition": "to get bigger in size or amount"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "strange (adj.)",
    "Sentence ①": "We heard some ( ) noise from the room next to ours.",
    "Answer ①": "strange",
    "Sentence ②": "I had a very ( ) dream last night.",
    "Answer ②": "strange",
    "Definition": "unusual or surprising, in a way that is difficult to understand or explain"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "article (n.)",
    "Sentence ①": "I read an ( ) about the death of a famous musician.",
    "Answer ①": "article",
    "Sentence ②": "My father likes to keep newspaper ( ) of big events.",
    "Answer ②": "articles",
    "Definition": "a piece of writing in a newspaper or magazine"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "possible (adj.)",
    "Sentence ①": "Is it ( ) to get tickets for the game?",
    "Answer ①": "possible",
    "Sentence ②": "The Internet makes it ( ) for people to get news quickly.",
    "Answer ②": "possible",
    "Definition": "if something is ( ), it can be done"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 5,
    "Word": "mysterious (adj.)",
    "Sentence ①": "I heard a ( ) story about a man getting lost in these woods.",
    "Answer ①": "mysterious",
    "Sentence ②": "There were ( ) footprints on the ground.",
    "Answer ②": "mysterious",
    "Definition": "strange or difficult to explain or understand"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "feed (v.)",
    "Sentence ①": "Have you ( ) the cats?",
    "Answer ①": "fed",
    "Sentence ②": "Some children were ( ) bread to the ducks.",
    "Answer ②": "feeding",
    "Definition": "to give food to a person or animal"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "success (n.)",
    "Sentence ①": "I asked him the secret to his ( ).",
    "Answer ①": "success",
    "Sentence ②": "Everyone worked very hard, so the event was a ( ).",
    "Answer ②": "success",
    "Definition": "when you achieve what you want to achieve"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "toxic (adj.)",
    "Sentence ①": "The scientists found ( ) chemicals in the river.",
    "Answer ①": "toxic",
    "Sentence ②": "The ( ) gas killed many people.",
    "Answer ②": "toxic",
    "Definition": "poisonous"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "illegal (adj.)",
    "Sentence ①": "It is ( ) to park your car here.",
    "Answer ①": "illegal",
    "Sentence ②": "If you do anything ( ), you will be taken to prison.",
    "Answer ②": "illegal",
    "Definition": "not allowed by law"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "create (v.)",
    "Sentence ①": "I like ( ) castles with sand.",
    "Answer ①": "creating",
    "Sentence ②": "The man ( ) a beautiful statue from stone.",
    "Answer ②": "created",
    "Definition": "to make something new exist or happen"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "irresponsible (adj.)",
    "Sentence ①": "He is ( ) and never finishes his work.",
    "Answer ①": "irresponsible",
    "Sentence ②": "The girl is ( ) so no one trusts her.",
    "Answer ②": "irresponsible",
    "Definition": "doing things that are not sensible, without thinking about the possible bad results"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "connection (n.)",
    "Sentence ①": "Does this have any ( ) with the project?",
    "Answer ①": "connection",
    "Sentence ②": "There is a ( ) between smoking and cancer.",
    "Answer ②": "connection",
    "Definition": "a relationship between things"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "conversation (n.)",
    "Sentence ①": "I had a very long ( ) with my friend on the phone.",
    "Answer ①": "conversation",
    "Sentence ②": "My parents were having a ( ) about my future.",
    "Answer ②": "conversation",
    "Definition": "an informal talk between two or more people"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 6,
    "Word": "continue (v.)",
    "Sentence ①": "The meeting ( ) for four hours.",
    "Answer ①": "continued",
    "Sentence ②": "John ( ) studying although his mother told him to go to bed.",
    "Answer ②": "continued",
    "Definition": "to not stop happening, existing, or doing something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "report (v.)",
    "Sentence ①": "The news tries to ( ) information as soon as possible.",
    "Answer ①": "report",
    "Sentence ②": "The newspaper ( ) that he had died but it was not true.",
    "Answer ②": "reported",
    "Definition": "to tell people about an event or situation, especially in newspapers, on television, or on the radio"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "explain (v.)",
    "Sentence ①": "The teacher ( ) how to solve the problems.",
    "Answer ①": "explained",
    "Sentence ②": "The student ( ) to the teacher why he was late.",
    "Answer ②": "explained",
    "Definition": "to give someone the information they need to understand something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "investigate (v.)",
    "Sentence ①": "The cause of the fire is being ( ).",
    "Answer ①": "investigated",
    "Sentence ②": "The police are ( ) the murder which happened last night.",
    "Answer ②": "investigating",
    "Definition": "to try to find out about something, especially a crime or accident"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "proud of (adj.)",
    "Sentence ①": "Lucy's parents were very ( ) ( ) her when she won the contest.",
    "Answer ①": "proud of",
    "Sentence ②": "I was ( ) ( ) myself for winning the gold medal.",
    "Answer ②": "proud of",
    "Definition": "feeling pleased with something you, your family, or your country have achieved, or with something you own"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "pleased (adj.)",
    "Sentence ①": "Hello. I'm very ( ) to meet you.",
    "Answer ①": "pleased",
    "Sentence ②": "I'm ( ) to hear that you got the job",
    "Answer ②": "pleased",
    "Definition": "happy about something or satisfied with something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "enter (v.)",
    "Sentence ①": "No one can ( ) this building on Sundays.",
    "Answer ①": "enter",
    "Sentence ②": "You need a ticket to ( ).",
    "Answer ②": "enter",
    "Definition": "to go or come into a place"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "reply (v.)",
    "Sentence ①": "Come downstairs!\" \"I'm coming,\" ( ) Michael.",
    "Answer ①": "replied",
    "Sentence ②": "Joe never ( ) to any of my emails.",
    "Answer ②": "replies",
    "Definition": "to answer"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 7,
    "Word": "remain (v.)",
    "Sentence ①": "Please ( ) seated until the train stops.",
    "Answer ①": "remain",
    "Sentence ②": "The dog ( ) outside although it was raining.",
    "Answer ②": "remained",
    "Definition": "to stay in the same place or condition"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "nervous (adj.)",
    "Sentence ①": "Ken was very ( ) before his big speech.",
    "Answer ①": "nervous",
    "Sentence ②": "I drank a glass of water before the concert because I was ( ).",
    "Answer ②": "nervous",
    "Definition": "worried or frightened about something and unable to relax"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "criminal (n.)",
    "Sentence ①": "The dangerous ( ) were finally caught by the police.",
    "Answer ①": "criminals",
    "Sentence ②": "The ( ) escaped from prison, and is now on the run.",
    "Answer ②": "criminal",
    "Definition": "a person who has committed a crime"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "discover (v.)",
    "Sentence ①": "Columbus ( ) America in 1492.",
    "Answer ①": "discovered",
    "Sentence ②": "They ( ) a new kind of bird in the jungle.",
    "Answer ②": "discovered",
    "Definition": "to find someone or something, either by accident or because you were looking for them"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "without (prep.)",
    "Sentence ①": "He left ( ) saying goodbye.",
    "Answer ①": "without",
    "Sentence ②": "People cannot live ( ) food and water.",
    "Answer ②": "without",
    "Definition": "not having, doing, or showing something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "pollute (v.)",
    "Sentence ①": "The company is responsible for ( ) the river.",
    "Answer ①": "polluting",
    "Sentence ②": "The smoke from the factories ( ) the air.",
    "Answer ②": "polluted",
    "Definition": "to make air, water, soil etc dirty or dangerous"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "intelligent (adj.)",
    "Sentence ①": "Dolphins are very ( ) animals.",
    "Answer ①": "intelligent",
    "Sentence ②": "You have to be ( ) to become a doctor.",
    "Answer ②": "intelligent",
    "Definition": "having a high level of mental ability and good at learning and understanding ideas"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "expert (n.)",
    "Sentence ①": "My uncle is an ( ) on Japanese art.",
    "Answer ①": "expert",
    "Sentence ②": "I'm not an ( ) so I don't know what kind of mushroom that is.",
    "Answer ②": "expert",
    "Definition": "someone who has a lot of knowledge about a subject or is very skillful at doing something"
  },
  {
    "Book": "BP4 Mystery in San Francisco",
    "Chapter": 8,
    "Word": "prison (n.)",
    "Sentence ①": "The murderer was sent to ( ) for five years.",
    "Answer ①": "prison",
    "Sentence ②": "He tried to escape from ( ) but couldn't.",
    "Answer ②": "prison",
    "Definition": "a building where criminals are kept as a punishment"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "neighborhood (n.)",
    "Sentence ①": "They lived in one room near Pudding Lane, a poor ( ) near London Bridge.",
    "Answer ①": "neighborhood",
    "Sentence ②": "He’s from a rich Los Angeles ( ).",
    "Answer ②": "neighborhood",
    "Definition": "an area of a town, and the people who live there."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "feed (v.)",
    "Sentence ①": "“Another child,” said Tom’s father when he saw the baby. “Another mouth to ( ).”",
    "Answer ①": "feed",
    "Sentence ②": "Have you ( ) the cats?",
    "Answer ②": "fed",
    "Definition": "to give food to a person or animal."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "banquet (n.)",
    "Sentence ①": "Let’s have a big celebration with fireworks and a ( ).",
    "Answer ①": "banquet",
    "Sentence ②": "They held a ( ) for the queen.",
    "Answer ②": "banquet",
    "Definition": "a very formal meal for a lot of people"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "celebrate (v.)",
    "Sentence ①": "All of England was happy and ( ) the arrival of the baby prince.",
    "Answer ①": "celebrated",
    "Sentence ②": "How do you want to ( ) your birthday?",
    "Answer ②": "celebrate",
    "Definition": "to do something enjoyable because it is a special occasion or because something good has happened"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "beg (v.)",
    "Sentence ①": "Thirteen years later,Tom was ( ) for money on the streets of London.",
    "Answer ①": "begging",
    "Sentence ②": "The children ( ) in the streets for food and money.",
    "Answer ②": "begged",
    "Definition": "to ask something in a way which shows you want it very much."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "thin (adj.)",
    "Sentence ①": "He was ( ) and dirty.",
    "Answer ①": "thin",
    "Sentence ②": "He had a long , ( ) face.",
    "Answer ②": "thin",
    "Definition": "something that is ( ) is not very wide or thick."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 1,
    "Word": "perhaps (adv.)",
    "Sentence ①": "( ) you can see him at the palace.",
    "Answer ①": "Perhaps",
    "Sentence ②": "Sarah's late - ( ) she missed the bus.",
    "Answer ②": "perhaps",
    "Definition": "used to say that something may be true, but you are not sure."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "splendid (adj.)",
    "Sentence ①": "He looked at the ( ) palace, but he could not go near it.",
    "Answer ①": "splendid",
    "Sentence ②": "I have some ( ) news. Susan is getting married!",
    "Answer ②": "splendid",
    "Definition": "very good"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "of course (phrase.)",
    "Sentence ①": "( ) I do\", said Tom.",
    "Answer ①": "Of course",
    "Sentence ②": "Can you help me? Yes, ( ).",
    "Answer ②": "of course",
    "Definition": "① used to show that what you are saying is expected or already known as so not surprising ② used to say yes very strongly or to give permission politely"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "height (n.)",
    "Sentence ①": "They were also the same ( ).",
    "Answer ①": "height",
    "Sentence ②": "The plant grows to a ( ) of 25cm.",
    "Answer ②": "height",
    "Definition": "how tall someone or something is"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "identical (adj.)",
    "Sentence ①": "They were almost ( ).",
    "Answer ①": "identical",
    "Sentence ②": "Your shoes are ( ) to mine.",
    "Answer ②": "identical",
    "Definition": "exactly the same"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "take off (phrase.)",
    "Sentence ①": "( ) ( ) those old clothes and put on my clothes.",
    "Answer ①": "Take off",
    "Sentence ②": "He ( ) ( ) his shoes before going inside the house.",
    "Answer ②": "took off",
    "Definition": "to remove something"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 2,
    "Word": "elegant (adj.)",
    "Sentence ①": "Tom put on the prince's ( ) clothes.",
    "Answer ①": "elegant",
    "Sentence ②": "The princess wore an ( ) dress to the party.",
    "Answer ②": "elegant",
    "Definition": "graceful and attractive"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "crowd (n.)",
    "Sentence ①": "The ( ) laughed loudly and said, \"He's mad!",
    "Answer ①": "crowd",
    "Sentence ②": "The ( ) gathered outside the building.",
    "Answer ②": "crowd",
    "Definition": "a large group of people in one place"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "mad (adj.)",
    "Sentence ①": "The crowd laughed and said, \"He's ( )!",
    "Answer ①": "mad",
    "Sentence ②": "You're ( ) to stay friends with someone like him!",
    "Answer ②": "mad",
    "Definition": "crazy or very silly"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "lost (adj.)",
    "Sentence ①": "He was soon ( ) and tired.",
    "Answer ①": "lost",
    "Sentence ②": "We got ( ) driving around the city.",
    "Answer ②": "lost",
    "Definition": "not knowing where you are or how to find your way"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "polite (adj.)",
    "Sentence ①": "Some people laughed at him and others were angry, because he was not ( ).",
    "Answer ①": "polite",
    "Sentence ②": "He was always very ( ).",
    "Answer ②": "polite",
    "Definition": "speaking or behaving in a way that shows respect for other people"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "tired of (phrase)",
    "Sentence ①": "But after an hour he was ( ) it and he began to feel afraid.",
    "Answer ①": "tired of",
    "Sentence ②": "I'm ( ) having to do the same thing so many times.",
    "Answer ②": "tired of",
    "Definition": "bored or annoyed with something"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "ill (adj.)",
    "Sentence ①": "The prince is probably ( ).",
    "Answer ①": "ill",
    "Sentence ②": "Jenny can't come - she's ( ).",
    "Answer ②": "ill",
    "Definition": "suffering from a disease or not feeling well"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "rest (v.)",
    "Sentence ①": "Now go and ( ) before the banquet tonight.",
    "Answer ①": "rest",
    "Sentence ②": "We can stop for a minute if you need to ( ).",
    "Answer ②": "rest",
    "Definition": "to stop working or moving and relax for a period of time"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 3,
    "Word": "continue (v.)",
    "Sentence ①": "I'm very ill but I must ( ) working.",
    "Answer ①": "continue",
    "Sentence ②": "The team ( ) their research for four weeks.",
    "Answer ②": "continued",
    "Definition": "to not stop happening, existing, or doing something"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "royal (adj.)",
    "Sentence ①": "The people of London were near the river looking at the ( ) barge.",
    "Answer ①": "royal",
    "Sentence ②": "The stories were about the private lives of the ( ) family.",
    "Answer ②": "royal",
    "Definition": "belonging to or connected with a king or queen."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "barge (n.)",
    "Sentence ①": "The people of London were near the river looking at the royal ( ).",
    "Answer ①": "barge",
    "Sentence ②": "Many ( ) can be seen on the canals of Venice.",
    "Answer ②": "barges",
    "Definition": "a boat for carrying goods on a canal or river."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "bow (v.)",
    "Sentence ①": "He walked down the stairs to the royal barge, and the lords and ladies ( ).",
    "Answer ①": "bowed",
    "Sentence ②": "The actors ( ) and left the stage.",
    "Answer ②": "bowed",
    "Definition": "to bend the top part of your body forward in order to show respect for someone."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "follow (v.)",
    "Sentence ①": "People laughed and ( ) them.",
    "Answer ①": "followed",
    "Sentence ②": "She thought someone was ( ) her.",
    "Answer ②": "following",
    "Definition": "to walk or drive behind someone."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "cruel (adj.)",
    "Sentence ①": "Tom's father was a ( ) man.",
    "Answer ①": "cruel",
    "Sentence ②": "The police treated her in a very ( ) way.",
    "Answer ②": "cruel",
    "Definition": "hurting people or animals or making them suffer."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "remove (v.)",
    "Sentence ①": "Canty ( ) his hand from Edward's arm to pick up the cup.",
    "Answer ①": "removed",
    "Sentence ②": "The paint on Jack's shirt was difficult to ( ).",
    "Answer ②": "remove",
    "Definition": "to take something away from the place where it is."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "return (v.)",
    "Sentence ①": "I ( ) from France yesterday.",
    "Answer ①": "returned",
    "Sentence ②": "She didn't ( ) home until late at night.",
    "Answer ②": "return",
    "Definition": "to come back or go back to a place."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 4,
    "Word": "defend (v.)",
    "Sentence ①": "Miles stood in front of Edward and ( ) him.",
    "Answer ①": "defended",
    "Sentence ②": "The course teaches women to ( ) themselves.",
    "Answer ②": "defend",
    "Definition": "to protect someone or something from attack."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "cover (v.)",
    "Sentence ①": "Miles saw that the boys was cold and ( ) him with his jacket.",
    "Answer ①": "covered",
    "Sentence ②": "Snow ( ) the ground.",
    "Answer ②": "covered",
    "Definition": "to put something over the top of something else to protect, close, or hide it"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "fall asleep (phr.)",
    "Sentence ①": "Edward ( ) ( ) with his head on the table.",
    "Answer ①": "fell asleep",
    "Sentence ②": "I ( ) ( ) in front of the fire.",
    "Answer ②": "fell asleep",
    "Definition": "go to sleep"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "disappear (v.)",
    "Sentence ①": "They went towards Southwark and ( ) in the crowd",
    "Answer ①": "disappeared",
    "Sentence ②": "My keys have ( ). Do you know where they are?",
    "Answer ②": "disappeared",
    "Definition": "If something ( ), you can no longer see it"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "thief (n.)",
    "Sentence ①": "Inside the barn there were many beggars, ( ), and vagabonds.",
    "Answer ①": "thieves",
    "Sentence ②": "The ( ) broke into our house and stole valuable jewelry.",
    "Answer ②": "thief",
    "Definition": "someone who steals things"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "fool (n.)",
    "Sentence ①": "The king of England? He's the king of ( ).",
    "Answer ①": "fools",
    "Sentence ②": "I felt like such a ( ), locking my keys in the car",
    "Answer ②": "fool",
    "Definition": "a stupid person"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "unkind (adj.)",
    "Sentence ①": "Soon everyone was saying ( ) things to him.",
    "Answer ①": "unkind",
    "Sentence ②": "She is very ( ) to her husband.",
    "Answer ②": "unkind",
    "Definition": "treating people in an unpleasant and slightly cruel way"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 5,
    "Word": "glad (adj.)",
    "Sentence ①": "I'm ( ) you believe me, Sir Miles,\" said Edward.",
    "Answer ①": "glad",
    "Sentence ②": "I'm ( ) you're safe after you fell from the cliff.",
    "Answer ②": "glad",
    "Definition": "pleased and happy about something"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 6,
    "Word": "get up (v.)",
    "Sentence ①": "Do you mean: 'Do I want to ( ) ( )?'",
    "Answer ①": "get up",
    "Sentence ②": "( ) ( ) now or you will be late for school!\" shouted John's mother.",
    "Answer ②": "Get up",
    "Definition": "to get out of your bed after sleeping,or to make someone do this."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 6,
    "Word": "expensive (adj.)",
    "Sentence ①": "In this way the gentlemen dressed Tom in his ( ) clothes.",
    "Answer ①": "expensive",
    "Sentence ②": "He gave her an ( ) ring for her birthday.",
    "Answer ②": "expensive",
    "Definition": "something that is ( ) costs a lot of money."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 6,
    "Word": "boring (adj.)",
    "Sentence ①": "It was very ( ) and it went on for hours.",
    "Answer ①": "boring",
    "Sentence ②": "His job sounds so ( ). He sits in his office all day.",
    "Answer ②": "boring",
    "Definition": "not interesting in any way."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 6,
    "Word": "spend (v.)",
    "Sentence ①": "There is no money, Your Majesty, because King Henry ( ) all of it.",
    "Answer ①": "spent",
    "Sentence ②": "I ( ) $40 on these shoes.",
    "Answer ②": "spent",
    "Definition": "to use your money to pay for something."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 6,
    "Word": "funeral (n.)",
    "Sentence ①": "And his ( ) was very expensive too!.",
    "Answer ①": "funeral",
    "Sentence ②": "People usually wear black clothes to a ( ).",
    "Answer ②": "funeral",
    "Definition": "a ceremony for someone who has just died."
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "unfriendly (adj.)",
    "Sentence ①": "The young man was ( ) and looked at him with cold eyes.",
    "Answer ①": "unfriendly",
    "Sentence ②": "I don't know why he is so ( ).",
    "Answer ②": "unfriendly",
    "Definition": "not friendly"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "furious (adj.)",
    "Sentence ①": "Miles was ( ) and ran across the room.",
    "Answer ①": "furious",
    "Sentence ②": "She was ( ) at me for forgetting her birthday.",
    "Answer ②": "furious",
    "Definition": "very angry"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "crowded (adj.)",
    "Sentence ①": "It was dark, cold and ( ).",
    "Answer ①": "crowded",
    "Sentence ②": "The trains in Tokyo are always ( ).",
    "Answer ②": "crowded",
    "Definition": "very full of people or things"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "steal (v.)",
    "Sentence ①": "Tomorrow the soldiers are going to hang me because I ( ) some cheese,\" she said, crying.",
    "Answer ①": "stole",
    "Sentence ②": "Someone ( ) her purse.",
    "Answer ②": "stole",
    "Definition": "to take something that does not belong to you"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "ugly (adj.)",
    "Sentence ①": "Oh, prison's a sad, ( ) place,\" said Edward.",
    "Answer ①": "ugly",
    "Sentence ②": "The ( ) duckling grew up to become a beautiful swan.",
    "Answer ②": "ugly",
    "Definition": "very unattractive or unpleasant to look at"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "law (adj.)",
    "Sentence ①": "One day I will change these cruel ( ).",
    "Answer ①": "laws",
    "Sentence ②": "By ( ), everyone must wear seat belts.",
    "Answer ②": "law",
    "Definition": "the system of rules that people in a country or area must obey"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 7,
    "Word": "protect (v.)",
    "Sentence ①": "Edward stood in front of Miles and tried to ( ) him.",
    "Answer ①": "protect",
    "Sentence ②": "He fought to ( ) the Amazonian jungle and its animals.",
    "Answer ②": "protect",
    "Definition": "to keep someone or something safe from harm, damage, or illness"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "on the other hand (phr.)",
    "Sentence ①": "Tom, ( )( )( )( ), was beginning to enjoy the royal palace, the beautiful new clothes and the good food",
    "Answer ①": "on the other hand",
    "Sentence ②": "On the one hand, they work slowly, but ( )( )( )( ) they always finish the job.",
    "Answer ②": "on the other hand",
    "Definition": "used when you are comparing two different facts or ideas"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "during (prep.)",
    "Sentence ①": "( ) his first days at the palace, he thought about his mother, sisters and Edward.",
    "Answer ①": "During",
    "Sentence ②": "She worked as a waitress ( ) the summer.",
    "Answer ②": "during",
    "Definition": "through all of a period of time"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "pass (v.)",
    "Sentence ①": "But as the days ( ) he almost forgot about them.",
    "Answer ①": "passed",
    "Sentence ②": "Time ( ) fast when you are having fun.",
    "Answer ②": "passes",
    "Definition": "if time ( ), it goes by"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "almost (adv.)",
    "Sentence ①": "But as the days passed he ( ) forgot about them.",
    "Answer ①": "almost",
    "Sentence ②": "It was ( ) midnight.",
    "Answer ②": "almost",
    "Definition": "nearly but not completely"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "decorate (v.)",
    "Sentence ①": "The church was full of people and beautifully ( ) for the great day.",
    "Answer ①": "decorated",
    "Sentence ②": "They ( ) the Christmas tree together.",
    "Answer ②": "decorated",
    "Definition": "to make something look more attractive by putting something pretty on it"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "lift (v.)",
    "Sentence ①": "At last the Archbishop of Canterbury took the crown of England and ( ) it over Tom's head.",
    "Answer ①": "lifted",
    "Sentence ②": "Can you help me ( ) this box?",
    "Answer ②": "lift",
    "Definition": "to move something or someone to a higher position"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "silent (adj.)",
    "Sentence ①": "Everyone was ( ).",
    "Answer ①": "silent",
    "Sentence ②": "They both remained ( ), not making a sound.",
    "Answer ②": "silent",
    "Definition": "not saying anything"
  },
  {
    "Book": "BP4 The Prince and the Pauper",
    "Chapter": 8,
    "Word": "confused (adj.)",
    "Sentence ①": "Everyone was ( ).",
    "Answer ①": "confused",
    "Sentence ②": "I'm still ( ) about what happened last night.",
    "Answer ②": "confused",
    "Definition": "unable to understand something, especially because it does not seem to make sense"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "neighborhood (n.)",
    "Sentence ①": "They lived in one room near Pudding Lane, a poor ( ) near London Bridge.",
    "Answer ①": "neighborhood",
    "Sentence ②": "He’s from a rich Los Angeles ( ).",
    "Answer ②": "neighborhood",
    "Definition": "an area of a town, and the people who live there."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "feed (v.)",
    "Sentence ①": "“Another child,” said Tom’s father when he saw the baby. “Another mouth to ( ).”",
    "Answer ①": "feed",
    "Sentence ②": "Have you ( ) the cats?",
    "Answer ②": "fed",
    "Definition": "to give food to a person or animal."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "banquet (n.)",
    "Sentence ①": "Let’s have a big celebration with fireworks and a ( ).",
    "Answer ①": "banquet",
    "Sentence ②": "They held a ( ) for the queen.",
    "Answer ②": "banquet",
    "Definition": "a very formal meal for a lot of people"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "celebrate (v.)",
    "Sentence ①": "All of England was happy and ( ) the arrival of the baby prince.",
    "Answer ①": "celebrated",
    "Sentence ②": "How do you want to ( ) your birthday?",
    "Answer ②": "celebrate",
    "Definition": "to do something enjoyable because it is a special occasion or because something good has happened"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "beg (v.)",
    "Sentence ①": "Thirteen years later,Tom was ( ) for money on the streets of London.",
    "Answer ①": "begging",
    "Sentence ②": "The children ( ) in the streets for food and money.",
    "Answer ②": "begged",
    "Definition": "to ask something in a way which shows you want it very much."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "thin (adj.)",
    "Sentence ①": "He was ( ) and dirty.",
    "Answer ①": "thin",
    "Sentence ②": "He had a long , ( ) face.",
    "Answer ②": "thin",
    "Definition": "something that is ( ) is not very wide or thick."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 1,
    "Word": "perhaps (adv.)",
    "Sentence ①": "( ) you can see him at the palace.",
    "Answer ①": "Perhaps",
    "Sentence ②": "Sarah's late - ( ) she missed the bus.",
    "Answer ②": "perhaps",
    "Definition": "used to say that something may be true, but you are not sure."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "splendid (adj.)",
    "Sentence ①": "He looked at the ( ) palace, but he could not go near it.",
    "Answer ①": "splendid",
    "Sentence ②": "I have some ( ) news. Susan is getting married!",
    "Answer ②": "splendid",
    "Definition": "very good"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "of course (phrase.)",
    "Sentence ①": "( ) I do\", said Tom.",
    "Answer ①": "Of course",
    "Sentence ②": "Can you help me? Yes, ( ).",
    "Answer ②": "of course",
    "Definition": "① used to show that what you are saying is expected or already known as so not surprising ② used to say yes very strongly or to give permission politely"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "height (n.)",
    "Sentence ①": "They were also the same ( ).",
    "Answer ①": "height",
    "Sentence ②": "The plant grows to a ( ) of 25cm.",
    "Answer ②": "height",
    "Definition": "how tall someone or something is"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "identical (adj.)",
    "Sentence ①": "They were almost ( ).",
    "Answer ①": "identical",
    "Sentence ②": "Your shoes are ( ) to mine.",
    "Answer ②": "identical",
    "Definition": "exactly the same"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "take off (phrase.)",
    "Sentence ①": "( ) ( ) those old clothes and put on my clothes.",
    "Answer ①": "Take off",
    "Sentence ②": "He ( ) ( ) his shoes before going inside the house.",
    "Answer ②": "took off",
    "Definition": "to remove something"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 2,
    "Word": "elegant (adj.)",
    "Sentence ①": "Tom put on the prince's ( ) clothes.",
    "Answer ①": "elegant",
    "Sentence ②": "The princess wore an ( ) dress to the party.",
    "Answer ②": "elegant",
    "Definition": "graceful and attractive"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "crowd (n.)",
    "Sentence ①": "The ( ) laughed loudly and said, \"He's mad!",
    "Answer ①": "crowd",
    "Sentence ②": "The ( ) gathered outside the building.",
    "Answer ②": "crowd",
    "Definition": "a large group of people in one place"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "mad (adj.)",
    "Sentence ①": "The crowd laughed and said, \"He's ( )!",
    "Answer ①": "mad",
    "Sentence ②": "You're ( ) to stay friends with someone like him!",
    "Answer ②": "mad",
    "Definition": "crazy or very silly"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "lost (adj.)",
    "Sentence ①": "He was soon ( ) and tired.",
    "Answer ①": "lost",
    "Sentence ②": "We got ( ) driving around the city.",
    "Answer ②": "lost",
    "Definition": "not knowing where you are or how to find your way"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "polite (adj.)",
    "Sentence ①": "Some people laughed at him and others were angry, because he was not ( ).",
    "Answer ①": "polite",
    "Sentence ②": "He was always very ( ).",
    "Answer ②": "polite",
    "Definition": "speaking or behaving in a way that shows respect for other people"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "tired of (phrase)",
    "Sentence ①": "But after an hour he was ( ) it and he began to feel afraid.",
    "Answer ①": "tired of",
    "Sentence ②": "I'm ( ) having to do the same thing so many times.",
    "Answer ②": "tired of",
    "Definition": "bored or annoyed with something"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "ill (adj.)",
    "Sentence ①": "The prince is probably ( ).",
    "Answer ①": "ill",
    "Sentence ②": "Jenny can't come - she's ( ).",
    "Answer ②": "ill",
    "Definition": "suffering from a disease or not feeling well"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "rest (v.)",
    "Sentence ①": "Now go and ( ) before the banquet tonight.",
    "Answer ①": "rest",
    "Sentence ②": "We can stop for a minute if you need to ( ).",
    "Answer ②": "rest",
    "Definition": "to stop working or moving and relax for a period of time"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 3,
    "Word": "continue (v.)",
    "Sentence ①": "I'm very ill but I must ( ) working.",
    "Answer ①": "continue",
    "Sentence ②": "The team ( ) their research for four weeks.",
    "Answer ②": "continued",
    "Definition": "to not stop happening, existing, or doing something"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "royal (adj.)",
    "Sentence ①": "The people of London were near the river looking at the ( ) barge.",
    "Answer ①": "royal",
    "Sentence ②": "The stories were about the private lives of the ( ) family.",
    "Answer ②": "royal",
    "Definition": "belonging to or connected with a king or queen."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "barge (n.)",
    "Sentence ①": "The people of London were near the river looking at the royal ( ).",
    "Answer ①": "barge",
    "Sentence ②": "Many ( ) can be seen on the canals of Venice.",
    "Answer ②": "barges",
    "Definition": "a boat for carrying goods on a canal or river."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "bow (v.)",
    "Sentence ①": "He walked down the stairs to the royal barge, and the lords and ladies ( ).",
    "Answer ①": "bowed",
    "Sentence ②": "The actors ( ) and left the stage.",
    "Answer ②": "bowed",
    "Definition": "to bend the top part of your body forward in order to show respect for someone."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "follow (v.)",
    "Sentence ①": "People laughed and ( ) them.",
    "Answer ①": "followed",
    "Sentence ②": "She thought someone was ( ) her.",
    "Answer ②": "following",
    "Definition": "to walk or drive behind someone."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "cruel (adj.)",
    "Sentence ①": "Tom's father was a ( ) man.",
    "Answer ①": "cruel",
    "Sentence ②": "The police treated her in a very ( ) way.",
    "Answer ②": "cruel",
    "Definition": "hurting people or animals or making them suffer."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "remove (v.)",
    "Sentence ①": "Canty ( ) his hand from Edward's arm to pick up the cup.",
    "Answer ①": "removed",
    "Sentence ②": "The paint on Jack's shirt was difficult to ( ).",
    "Answer ②": "remove",
    "Definition": "to take something away from the place where it is."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "return (v.)",
    "Sentence ①": "I ( ) from France yesterday.",
    "Answer ①": "returned",
    "Sentence ②": "She didn't ( ) home until late at night.",
    "Answer ②": "return",
    "Definition": "to come back or go back to a place."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 4,
    "Word": "defend (v.)",
    "Sentence ①": "Miles stood in front of Edward and ( ) him.",
    "Answer ①": "defended",
    "Sentence ②": "The course teaches women to ( ) themselves.",
    "Answer ②": "defend",
    "Definition": "to protect someone or something from attack."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "cover (v.)",
    "Sentence ①": "Miles saw that the boys was cold and ( ) him with his jacket.",
    "Answer ①": "covered",
    "Sentence ②": "Snow ( ) the ground.",
    "Answer ②": "covered",
    "Definition": "to put something over the top of something else to protect, close, or hide it"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "fall asleep (phr.)",
    "Sentence ①": "Edward ( ) ( ) with his head on the table.",
    "Answer ①": "fell asleep",
    "Sentence ②": "I ( ) ( ) in front of the fire.",
    "Answer ②": "fell asleep",
    "Definition": "go to sleep"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "disappear (v.)",
    "Sentence ①": "They went towards Southwark and ( ) in the crowd",
    "Answer ①": "disappeared",
    "Sentence ②": "My keys have ( ). Do you know where they are?",
    "Answer ②": "disappeared",
    "Definition": "If something ( ), you can no longer see it"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "thief (n.)",
    "Sentence ①": "Inside the barn there were many beggars, ( ), and vagabonds.",
    "Answer ①": "thieves",
    "Sentence ②": "The ( ) broke into our house and stole valuable jewelry.",
    "Answer ②": "thief",
    "Definition": "someone who steals things"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "fool (n.)",
    "Sentence ①": "The king of England? He's the king of ( ).",
    "Answer ①": "fools",
    "Sentence ②": "I felt like such a ( ), locking my keys in the car",
    "Answer ②": "fool",
    "Definition": "a stupid person"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "unkind (adj.)",
    "Sentence ①": "Soon everyone was saying ( ) things to him.",
    "Answer ①": "unkind",
    "Sentence ②": "She is very ( ) to her husband.",
    "Answer ②": "unkind",
    "Definition": "treating people in an unpleasant and slightly cruel way"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 5,
    "Word": "glad (adj.)",
    "Sentence ①": "I'm ( ) you believe me, Sir Miles,\" said Edward.",
    "Answer ①": "glad",
    "Sentence ②": "I'm ( ) you're safe after you fell from the cliff.",
    "Answer ②": "glad",
    "Definition": "pleased and happy about something"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 6,
    "Word": "get up (v.)",
    "Sentence ①": "Do you mean: 'Do I want to ( ) ( )?'",
    "Answer ①": "get up",
    "Sentence ②": "( ) ( ) now or you will be late for school!\" shouted John's mother.",
    "Answer ②": "Get up",
    "Definition": "to get out of your bed after sleeping,or to make someone do this."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 6,
    "Word": "expensive (adj.)",
    "Sentence ①": "In this way the gentlemen dressed Tom in his ( ) clothes.",
    "Answer ①": "expensive",
    "Sentence ②": "He gave her an ( ) ring for her birthday.",
    "Answer ②": "expensive",
    "Definition": "something that is ( ) costs a lot of money."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 6,
    "Word": "boring (adj.)",
    "Sentence ①": "It was very ( ) and it went on for hours.",
    "Answer ①": "boring",
    "Sentence ②": "His job sounds so ( ). He sits in his office all day.",
    "Answer ②": "boring",
    "Definition": "not interesting in any way."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 6,
    "Word": "spend (v.)",
    "Sentence ①": "There is no money, Your Majesty, because King Henry ( ) all of it.",
    "Answer ①": "spent",
    "Sentence ②": "I ( ) $40 on these shoes.",
    "Answer ②": "spent",
    "Definition": "to use your money to pay for something."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 6,
    "Word": "funeral (n.)",
    "Sentence ①": "And his ( ) was very expensive too!.",
    "Answer ①": "funeral",
    "Sentence ②": "People usually wear black clothes to a ( ).",
    "Answer ②": "funeral",
    "Definition": "a ceremony for someone who has just died."
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "unfriendly (adj.)",
    "Sentence ①": "The young man was ( ) and looked at him with cold eyes.",
    "Answer ①": "unfriendly",
    "Sentence ②": "I don't know why he is so ( ).",
    "Answer ②": "unfriendly",
    "Definition": "not friendly"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "furious (adj.)",
    "Sentence ①": "Miles was ( ) and ran across the room.",
    "Answer ①": "furious",
    "Sentence ②": "She was ( ) at me for forgetting her birthday.",
    "Answer ②": "furious",
    "Definition": "very angry"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "crowded (adj.)",
    "Sentence ①": "It was dark, cold and ( ).",
    "Answer ①": "crowded",
    "Sentence ②": "The trains in Tokyo are always ( ).",
    "Answer ②": "crowded",
    "Definition": "very full of people or things"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "steal (v.)",
    "Sentence ①": "Tomorrow the soldiers are going to hang me because I ( ) some cheese,\" she said, crying.",
    "Answer ①": "stole",
    "Sentence ②": "Someone ( ) her purse.",
    "Answer ②": "stole",
    "Definition": "to take something that does not belong to you"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "ugly (adj.)",
    "Sentence ①": "Oh, prison's a sad, ( ) place,\" said Edward.",
    "Answer ①": "ugly",
    "Sentence ②": "The ( ) duckling grew up to become a beautiful swan.",
    "Answer ②": "ugly",
    "Definition": "very unattractive or unpleasant to look at"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "law (adj.)",
    "Sentence ①": "One day I will change these cruel ( ).",
    "Answer ①": "laws",
    "Sentence ②": "By ( ), everyone must wear seat belts.",
    "Answer ②": "law",
    "Definition": "the system of rules that people in a country or area must obey"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 7,
    "Word": "protect (v.)",
    "Sentence ①": "Edward stood in front of Miles and tried to ( ) him.",
    "Answer ①": "protect",
    "Sentence ②": "He fought to ( ) the Amazonian jungle and its animals.",
    "Answer ②": "protect",
    "Definition": "to keep someone or something safe from harm, damage, or illness"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "on the other hand (phr.)",
    "Sentence ①": "Tom, ( )( )( )( ), was beginning to enjoy the royal palace, the beautiful new clothes and the good food",
    "Answer ①": "on the other hand",
    "Sentence ②": "On the one hand, they work slowly, but ( )( )( )( ) they always finish the job.",
    "Answer ②": "on the other hand",
    "Definition": "used when you are comparing two different facts or ideas"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "during (prep.)",
    "Sentence ①": "( ) his first days at the palace, he thought about his mother, sisters and Edward.",
    "Answer ①": "During",
    "Sentence ②": "She worked as a waitress ( ) the summer.",
    "Answer ②": "during",
    "Definition": "through all of a period of time"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "pass (v.)",
    "Sentence ①": "But as the days ( ) he almost forgot about them.",
    "Answer ①": "passed",
    "Sentence ②": "Time ( ) fast when you are having fun.",
    "Answer ②": "passes",
    "Definition": "if time ( ), it goes by"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "almost (adv.)",
    "Sentence ①": "But as the days passed he ( ) forgot about them.",
    "Answer ①": "almost",
    "Sentence ②": "It was ( ) midnight.",
    "Answer ②": "almost",
    "Definition": "nearly but not completely"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "decorate (v.)",
    "Sentence ①": "The church was full of people and beautifully ( ) for the great day.",
    "Answer ①": "decorated",
    "Sentence ②": "They ( ) the Christmas tree together.",
    "Answer ②": "decorated",
    "Definition": "to make something look more attractive by putting something pretty on it"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "lift (v.)",
    "Sentence ①": "At last the Archbishop of Canterbury took the crown of England and ( ) it over Tom's head.",
    "Answer ①": "lifted",
    "Sentence ②": "Can you help me ( ) this box?",
    "Answer ②": "lift",
    "Definition": "to move something or someone to a higher position"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "silent (adj.)",
    "Sentence ①": "Everyone was ( ).",
    "Answer ①": "silent",
    "Sentence ②": "They both remained ( ), not making a sound.",
    "Answer ②": "silent",
    "Definition": "not saying anything"
  },
  {
    "Book": "BP4 Sherlock Holmes and the Red Circle",
    "Chapter": 8,
    "Word": "confused (adj.)",
    "Sentence ①": "Everyone was ( ).",
    "Answer ①": "confused",
    "Sentence ②": "I'm still ( ) about what happened last night.",
    "Answer ②": "confused",
    "Definition": "unable to understand something, especially because it does not seem to make sense"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "ill (adj.)",
    "Sentence ①": "Jessica was too ( ) to go to school for a week.",
    "Answer ①": "ill",
    "Sentence ②": "My grandmother is ( ) and is in the hospital.",
    "Answer ②": "ill",
    "Definition": "suffering from a disease or not feeling well"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "dress (v.)",
    "Sentence ①": "The mother ( ) her baby with warm clothes.",
    "Answer ①": "dressed",
    "Sentence ②": "We were all ( ) in nice clothes to attend the wedding.",
    "Answer ②": "dressed",
    "Definition": "to put clothes on someone or on yourself"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "orphan (n.)",
    "Sentence ①": "After the war, there were many ( ) that needed a home.",
    "Answer ①": "orphans",
    "Sentence ②": "Angelina Jolie adopted an ( ) from Ethiopia.",
    "Answer ②": "orphan",
    "Definition": "a child whose parents are dead"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "survive (v.)",
    "Sentence ①": "Mark ( ) the horrifying car accident.",
    "Answer ①": "survived",
    "Sentence ②": "There weren't many people who ( ) the bomb attacks.",
    "Answer ②": "survived",
    "Definition": "to continue to live after an accident, war, illness etc"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "pale (adj.)",
    "Sentence ①": "Are you okay? You look ( ).",
    "Answer ①": "pale",
    "Sentence ②": "Joe looked ( ) in his hospital bed.",
    "Answer ②": "pale",
    "Definition": "having a skin colour that is whiter than usual, especially because you are ill or frightened"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "miserable (adj.)",
    "Sentence ①": "I felt ( ) after I had a fight with my mother.",
    "Answer ①": "miserable",
    "Sentence ②": "He had a ( ) childhood.",
    "Answer ②": "miserable",
    "Definition": "very unhappy"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "hunger (n.)",
    "Sentence ①": "Many people in Africa are dying from ( ).",
    "Answer ①": "hunger",
    "Sentence ②": "The poor boy died from ( ).",
    "Answer ②": "hunger",
    "Definition": "a severe lack of food, especially for a long period of time"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "discuss (v.)",
    "Sentence ①": "Before we make a decision, I need to ( ) it with my parents.",
    "Answer ①": "discuss",
    "Sentence ②": "We will ( ) where and when to meet later.",
    "Answer ②": "discuss",
    "Definition": "to talk about something with someone in order to exchange ideas or decide something"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 1,
    "Word": "stare (v.)",
    "Sentence ①": "Don't ( ) like that. It's not nice.",
    "Answer ①": "stare",
    "Sentence ②": "The kids ( ) at the TV without listening to their mother.",
    "Answer ②": "stared",
    "Definition": "to look at someone or something for a long time"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "disappointed (adj.)",
    "Sentence ①": "We were ( ) when it rained and couldn’t go on a picnic.",
    "Answer ①": "disappointed",
    "Sentence ②": "My mother was ( ) at my test scores.",
    "Answer ②": "disappointed",
    "Definition": "unhappy because something you hoped for did not happen, or was not as good as you expected"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "thought (n.)",
    "Sentence ①": "The ( ) of losing my parents scares me.",
    "Answer ①": "thought",
    "Sentence ②": "Do you have any ( ) on the subject?",
    "Answer ②": "thoughts",
    "Definition": "① something that you think of, remember, or realize ② a person's idea or opinions about something"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "timidly (adv.)",
    "Sentence ①": "The boy ( ) walked into the teacher's office.",
    "Answer ①": "timidly",
    "Sentence ②": "She ( ) smiled and shook hands with the stranger.",
    "Answer ②": "timidly",
    "Definition": "shy and not showing courage or confidence"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "jealous of (adj.)",
    "Sentence ①": "Peter was ( ) ( ) Mark because he had better grades.",
    "Answer ①": "jealous of",
    "Sentence ②": "I was ( ) ( ) my friend because she was wearing a beautiful dress.",
    "Answer ②": "jealous of",
    "Definition": "unhappy because someone else has something that you wish you had"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "funeral (n.)",
    "Sentence ①": "You should wear black if you are going to a ( ).",
    "Answer ①": "funeral",
    "Sentence ②": "Many fans cried at the musician's ( ).",
    "Answer ②": "funeral",
    "Definition": "a ceremony for someone who has just died"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "criminal (n.)",
    "Sentence ①": "The police found the ( ) who had been running away.",
    "Answer ①": "criminal",
    "Sentence ②": "We were all shocked when we found out that he was a ( ).",
    "Answer ②": "criminal",
    "Definition": "someone who has done something wrong or illegal"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "separate (v.)",
    "Sentence ①": "Oil and water ( ) when mixed together.",
    "Answer ①": "separate",
    "Sentence ②": "The teacher ( ) the class into four groups.",
    "Answer ②": "separated",
    "Definition": "to divide or split something into different parts"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 2,
    "Word": "confused (adj.)",
    "Sentence ①": "Can you explain it to me again? I'm ( ).",
    "Answer ①": "confused",
    "Sentence ②": "We were ( ) about what to do next.",
    "Answer ②": "confused",
    "Definition": "unable to understand something, especially because it does not seem to make sense"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "certainly (adv.)",
    "Sentence ①": "This book is ( ) better than the last one.",
    "Answer ①": "certainly",
    "Sentence ②": "It will ( ) rain tomorrow.",
    "Answer ②": "certainly",
    "Definition": "without any doubt."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "exhausted (adj.)",
    "Sentence ①": "I was very ( ) after the long flight to France.",
    "Answer ①": "exhausted",
    "Sentence ②": "Aren’t you ( ) from walking all the way from the station?",
    "Answer ②": "exhausted",
    "Definition": "extremely tired."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "narrow (adj.)",
    "Sentence ①": "There are many ( ) streets in Kyoto.",
    "Answer ①": "narrow",
    "Sentence ②": "We crossed at the ( ) part of the river.",
    "Answer ②": "narrow",
    "Definition": "something that is ( ) measures a short distance from one side to the other."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "awful (adj.)",
    "Sentence ①": "My father is an ( ) driver, especially when he drives in the city.",
    "Answer ①": "awful",
    "Sentence ②": "The pizzas we ordered were cold and tasted ( ).",
    "Answer ②": "awful",
    "Definition": "very bad or unpleasant."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "prepare (v.)",
    "Sentence ①": "We spent a lot of time ( ) our mother’s birthday party.",
    "Answer ①": "preparing",
    "Sentence ②": "I had a lot to ( ) before going on vacation.",
    "Answer ②": "prepare",
    "Definition": "to make plans or arrangements for something that will happen soon,or to get yourself ready for it."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "splendid (adj.)",
    "Sentence ①": "We came up with a ( ) idea to clean up the classroom.",
    "Answer ①": "splendid",
    "Sentence ②": "The ice-skating show was ( ), with many unusual and exciting tricks.",
    "Answer ②": "splendid",
    "Definition": "very good."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "jewel (n.)",
    "Sentence ①": "The old lady hides her ( ) in the cupboard.",
    "Answer ①": "jewels",
    "Sentence ②": "The treasure box was filled with golden rings and ( ).",
    "Answer ②": "jewels",
    "Definition": "a valuable stone, such as a diamond."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 3,
    "Word": "wallet (n.)",
    "Sentence ①": "I need to go back home. I forgot my ( ).",
    "Answer ①": "wallet",
    "Sentence ②": "Rob had his ( ) stolen and had to go to the police.",
    "Answer ②": "wallet",
    "Definition": "a small flat case in which you carry paper money, bank cards etc."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "silently (adv.)",
    "Sentence ①": "The students ( ) sat in their seats listening to their teacher talk.",
    "Answer ①": "silently",
    "Sentence ②": "Please work ( ). You shouldn’t talk in the library.",
    "Answer ②": "silently",
    "Definition": "without any sound, not making any sound"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "exclaim (v.)",
    "Sentence ①": "Stop! she ( ), surprising everybody.",
    "Answer ①": "exclaimed",
    "Sentence ②": "He’s a thief! ( ) the shop owner.",
    "Answer ②": "exclaimed",
    "Definition": "to suddenly say something loudly, because you are surprised, excited, or angry"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "thief (n.)",
    "Sentence ①": "( ) broke in and stole some valuable jewelry.",
    "Answer ①": "Thieves",
    "Sentence ②": "Since he has no money, he makes his living as a ( ).",
    "Answer ②": "thief",
    "Definition": "someone who steals things"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "steal (v.)",
    "Sentence ①": "The man didn’t pay, and ( ) the books.",
    "Answer ①": "stole",
    "Sentence ②": "Somebody ( ) my passport and luggage at the airport.",
    "Answer ②": "stole",
    "Definition": "to take something that does not belong to you"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "free (adj.)",
    "Sentence ①": "The bird flew out of the cage and was ( ).",
    "Answer ①": "free",
    "Sentence ②": "The man finally got out of prison and became ( ).",
    "Answer ②": "free",
    "Definition": "not tied up or kept somewhere as a prisoner"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "probably (adv.)",
    "Sentence ①": "This is ( ) the best movie I have seen.",
    "Answer ①": "probably",
    "Sentence ②": "It will ( ) rain today.",
    "Answer ②": "probably",
    "Definition": "used when saying that you think something will happen or be true, although you are not sure"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "furious (adj.)",
    "Sentence ①": "My mother was ( ) when I got a terrible score on the test.",
    "Answer ①": "furious",
    "Sentence ②": "Our teacher was ( ) at us for being late to class all the time.",
    "Answer ②": "furious",
    "Definition": "very angry"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 4,
    "Word": "follow (v.)",
    "Sentence ①": "The baby ducklings ( ) their mother.",
    "Answer ①": "followed",
    "Sentence ②": "The exit is this way. Please ( ) me.",
    "Answer ②": "follow",
    "Definition": "to walk or drive behind someone"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "hardly (adv.)",
    "Sentence ①": "The boy could ( ) walk after the accident.",
    "Answer ①": "hardly",
    "Sentence ②": "The old man ( ) ever goes out these days.",
    "Answer ②": "hardly",
    "Definition": "almost not or almost none"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "look after (phr.v.)",
    "Sentence ①": "My older sister ( ) ( ) me when I was younger.",
    "Answer ①": "looked after",
    "Sentence ②": "Will you ( ) ( ) my dog while I am away on vacation?",
    "Answer ②": "look after",
    "Definition": "to take care of someone or something"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "lie (v.)",
    "Sentence ①": "I was tired, so I ( ) down on my bed.",
    "Answer ①": "lay",
    "Sentence ②": "The girl liked to ( ) on her bed when she reads.",
    "Answer ②": "lie",
    "Definition": "to be in a position in which your body is flat on the floor, a bed etc, or to put yourself in this position."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "amazed (adj.)",
    "Sentence ①": "I'm always ( ) at how fast he can run.",
    "Answer ①": "amazed",
    "Sentence ②": "We were all ( ) that Ron came to the party.",
    "Answer ②": "amazed",
    "Definition": "very surprised"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "author (n.)",
    "Sentence ①": "J.K. Rowling is the ( ) of the Harry Potter series.",
    "Answer ①": "author",
    "Sentence ②": "The ( ) wrote about his childhood memories.",
    "Answer ②": "author",
    "Definition": "someone who has written a book"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "prefer (v.)",
    "Sentence ①": "Which do you ( )? Coffee or tea?",
    "Answer ①": "prefer",
    "Sentence ②": "I ( ) to stay at home on weekends.",
    "Answer ②": "prefer",
    "Definition": "to like or want someone or something more than someone or something else"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 5,
    "Word": "happen (v.)",
    "Sentence ①": "I'm sorry. It will not ( ) again.",
    "Answer ①": "happen",
    "Sentence ②": "What ( )? Why are you crying?",
    "Answer ②": "happened",
    "Definition": "if an event ( ), it exists and continues for a period of time, usually without being planned"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "belong to (phr. v.)",
    "Sentence ①": "Who does this car ( ) ( )?",
    "Answer ①": "belong to",
    "Sentence ②": "This book ( ) ( ) my brother so please return it soon.",
    "Answer ②": "belongs to",
    "Definition": "if something ( )s ( ) you, you own it"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "valuable (adj.)",
    "Sentence ①": "There were many ( ) paintings on display at the museum.",
    "Answer ①": "valuable",
    "Sentence ②": "This watch is very ( ). Please don't lose it.",
    "Answer ②": "valuable",
    "Definition": "worth a lot of money"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "explain (v.)",
    "Sentence ①": "Can you ( ) it to me one more time? I didn't understand.",
    "Answer ①": "explain",
    "Sentence ②": "The teacher ( ) the problem to the class.",
    "Answer ②": "explained",
    "Definition": "to give someone the information they need to understand something"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "cruel (adj.)",
    "Sentence ①": "Killing tigers and cheetahs just for their skin is ( ).",
    "Answer ①": "cruel",
    "Sentence ②": "The ( ) man hit his horse with a whip.",
    "Answer ②": "cruel",
    "Definition": "hurting people or animals or making them suffer"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "terrified (adj.)",
    "Sentence ①": "We were ( ) to go out in the storm at night.",
    "Answer ①": "terrified",
    "Sentence ②": "Some people are ( ) of touching insects and spiders.",
    "Answer ②": "terrified",
    "Definition": "very frightened"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "nervously (adv.)",
    "Sentence ①": "The singer walked ( ) onto the stage for his audition.",
    "Answer ①": "nervously",
    "Sentence ②": "The fans ( ) watched the final game in the championship.",
    "Answer ②": "nervously",
    "Definition": "worried or frightened about something and unable to relax"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "warn (v.)",
    "Sentence ①": "The sign ( ) us that bears have been seen in the woods nearby.",
    "Answer ①": "warned",
    "Sentence ②": "Travelers were ( ) about the dangers of influenza.",
    "Answer ②": "warned",
    "Definition": "to tell someone that something bad or dangerous may happen, so that they can avoid it or prevent it"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 6,
    "Word": "blood (n.)",
    "Sentence ①": "( ) fell on the paper and left a red mark.",
    "Answer ①": "Blood",
    "Sentence ②": "Mary cut her finger while cooking and ( ) came out from the cut.",
    "Answer ②": "blood",
    "Definition": "the red liquid that flows around your body"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "perhaps (adv.)",
    "Sentence ①": "He always comes on time but today he's late. ( ) there was an accident.",
    "Answer ①": "Perhaps",
    "Sentence ②": "( ) she would give you a call tomorrow.",
    "Answer ②": "Perhaps",
    "Definition": "used to say that something may be true, but you are not sure"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "hurt (adj.)",
    "Sentence ①": "No one was seriously ( ) in the accident.",
    "Answer ①": "hurt",
    "Sentence ②": "Many soldiers were ( ) in the bomb attack.",
    "Answer ②": "hurt",
    "Definition": "suffering pain or injury"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "aunt (n.)",
    "Sentence ①": "Dorothy lived with her ( ) and uncle in Kansas.",
    "Answer ①": "aunt",
    "Sentence ②": "I visited my ( ) in New York.",
    "Answer ②": "aunt",
    "Definition": "the sister of your father or mother, or the wife of your uncle"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "rest (v.)",
    "Sentence ①": "You look so tired. You should ( ).",
    "Answer ①": "rest",
    "Sentence ②": "We've walked for so long. Let's ( ).",
    "Answer ②": "rest",
    "Definition": "to stop working or moving and relax for a period of time"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "in silence (phr.)",
    "Sentence ①": "We sat ( ) ( ) while the video was on.",
    "Answer ①": "in silence",
    "Sentence ②": "Everybody changed their clothes ( ) ( ) after we lost the match.",
    "Answer ②": "in silence",
    "Definition": "when there is no sound or nobody is talking"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "temperature (n.)",
    "Sentence ①": "We should take her to the doctor because she has a very high ( ).",
    "Answer ①": "temperature",
    "Sentence ②": "If you have a high ( ), you should go home and rest.",
    "Answer ②": "temperature",
    "Definition": "the ( ) of your body, used as a sign of whether you are ill"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "cottage (n.)",
    "Sentence ①": "The villagers lived in small ( ) inside the woods.",
    "Answer ①": "cottages",
    "Sentence ②": "We always visit our ( ) by the beach in the summer.",
    "Answer ②": "cottage",
    "Definition": "a small house in the country, especially an old one"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 7,
    "Word": "recognize (v.)",
    "Sentence ①": "You look so different! I didn't ( ) you!",
    "Answer ①": "recognize",
    "Sentence ②": "I couldn't ( ) anyone because I didn't have my glasses on.",
    "Answer ②": "recognize",
    "Definition": "to know who someone is or what something is because you have seen or heard them before"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "master (n.)",
    "Sentence ①": "The dog followed its ( ).",
    "Answer ①": "master",
    "Sentence ②": "The workers hated their cruel ( ).",
    "Answer ②": "master",
    "Definition": "the man who has control over servants, animals, or workers"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "privately (adv.)",
    "Sentence ①": "Can I talk to you ( )?",
    "Answer ①": "privately",
    "Sentence ②": "The spies met ( ) to talk about the secret plan.",
    "Answer ②": "privately",
    "Definition": "quiet and without other people there"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "shut (v.)",
    "Sentence ①": "Can you please ( ) the door behind you?",
    "Answer ①": "shut",
    "Sentence ②": "Check to see if we have ( ) all the windows and doors before going out.",
    "Answer ②": "shut",
    "Definition": "if you ( ) something, or if it ( )s, it closes"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "manner (n.)",
    "Sentence ①": "The girl was loved by everyone because of her gentle ( ).",
    "Answer ①": "manner",
    "Sentence ②": "The pleasant ( ) of the boy surprised everyone.",
    "Answer ②": "manner",
    "Definition": "the way in which someone behaves with other people"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "sweet (adj.)",
    "Sentence ①": "The ( ) sounds of the violin made everyone relax.",
    "Answer ①": "sweet",
    "Sentence ②": "His wife's ( ) voice made the man smile.",
    "Answer ②": "sweet",
    "Definition": "making you feel pleased or happy"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "kidnap (v.)",
    "Sentence ①": "The little boy was ( ) at the hotel, and never returned.",
    "Answer ①": "kidnapped",
    "Sentence ②": "People were afraid that their children would be ( ) if they left them alone at night.",
    "Answer ②": "kidnapped",
    "Definition": "to take someone somewhere by force, especially in order to get money for returning them"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 8,
    "Word": "kindness (n.)",
    "Sentence ①": "Thank you for your ( ).",
    "Answer ①": "kindness",
    "Sentence ②": "The man helped the orphans out of ( ).",
    "Answer ②": "kindness",
    "Definition": "kind behaviour"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "carriage (n.)",
    "Sentence ①": "These ( ) are drawn by horses.",
    "Answer ①": "carriages",
    "Sentence ②": "Cinderella rode a ( ) made from a pumpkin.",
    "Answer ②": "carriage",
    "Definition": "a vehicle pulled by a horse and used for passengers"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "welcome (adj.)",
    "Sentence ①": "My host family made me feel very ( ).",
    "Answer ①": "welcome",
    "Sentence ②": "I didn't feel ( ) in the club.",
    "Answer ②": "welcome",
    "Definition": "if you are ( ) in a place, the other people want you to be there"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "extremely (adv.)",
    "Sentence ①": "I was ( ) happy to pass the exam for the new school.",
    "Answer ①": "extremely",
    "Sentence ②": "We were ( ) tired after the soccer practice.",
    "Answer ②": "extremely",
    "Definition": "more than very"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "protect (v.)",
    "Sentence ①": "Parents need to ( ) their children.",
    "Answer ①": "protect",
    "Sentence ②": "The soldiers fought to ( ) their country.",
    "Answer ②": "protect",
    "Definition": "to keep someone or something safe from harm, damage, or illness"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "foggy (adj.)",
    "Sentence ①": "It is very dangerous to drive when it is ( ) outside.",
    "Answer ①": "foggy",
    "Sentence ②": "Put on the lights to see through the ( ) roads.",
    "Answer ②": "foggy",
    "Definition": "if the weather is ( ), there is fog"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "disappear (v.)",
    "Sentence ①": "The sun ( ) behind the clouds.",
    "Answer ①": "disappeared",
    "Sentence ②": "The cat ( ) into the bushes.",
    "Answer ②": "disappeared",
    "Definition": "if something ( )s, you can no longer see it"
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 9,
    "Word": "be sorry for (phr.)",
    "Sentence ①": "I ( ) ( ) ( ) waking you up so early in the morning.",
    "Answer ①": "am sorry for",
    "Sentence ②": "You should ( ) very ( ) ( ) making her cry.",
    "Answer ②": "be sorry for",
    "Definition": "used to tell someone that you feel bad about doing something that has upset them, annoyed them etc."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "betray (v.)",
    "Sentence ①": "Tom was ( ) by his brother so many times that he never trusted him.",
    "Answer ①": "betrayed",
    "Sentence ②": "You should never ( ) your friends because you will lose them.",
    "Answer ②": "betray",
    "Definition": "to behave dishonestly towards someone who loves you or trusts you."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "murder (n.)",
    "Sentence ①": "John was put in prison for committing ( ).",
    "Answer ①": "murder",
    "Sentence ②": "The ( ) of the famous actress shocked everyone.",
    "Answer ②": "murder",
    "Definition": "the crime of killing someone deliberately."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "suffer (v.)",
    "Sentence ①": "The people ( ) greatly during the war.",
    "Answer ①": "suffered",
    "Sentence ②": "She ( ) great pain when her mother died.",
    "Answer ②": "suffered",
    "Definition": "to experience physical or emotional pain."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "in favor of (phr.)",
    "Sentence ①": "The students were unhappy since the teacher seemed to be ( ) ( ) ( ) Tom.",
    "Answer ①": "in favor of",
    "Sentence ②": "The judge was ( ) ( ) ( ) the defendant.",
    "Answer ②": "in favor of",
    "Definition": "supporting a person or an idea instead of another one."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "hang (v.)",
    "Sentence ①": "The killer was ( ) for murder.",
    "Answer ①": "hanged",
    "Sentence ②": "In the old days, people were ( ) for stealing.",
    "Answer ②": "hanged",
    "Definition": "to kill someone by dropping them with a rope around their neck."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "crime (n.)",
    "Sentence ①": "( ) rates have decreased in New York City.",
    "Answer ①": "Crime",
    "Sentence ②": "Compared to the US, Japan has very little ( ).",
    "Answer ②": "crime",
    "Definition": "illegal activities in general."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "honest (adj.)",
    "Sentence ①": "Brian was a hard-working, ( ) man.",
    "Answer ①": "honest",
    "Sentence ②": "He is always ( ) with his children.",
    "Answer ②": "honest",
    "Definition": "someone who is ( ) does not lie, cheat, or steal."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "comfortable (adj.)",
    "Sentence ①": "I’m very lucky to have a loving family and a ( ) home.",
    "Answer ①": "comfortable",
    "Sentence ②": "I don’t feel very ( ) around her. She seems mean.",
    "Answer ②": "comfortable",
    "Definition": "something that is ( ) makes you feel physically relaxed."
  },
  {
    "Book": "BP5 Oliver Twist",
    "Chapter": 10,
    "Word": "adopt (v.)",
    "Sentence ①": "Kate was ( ) when she was five years old.",
    "Answer ①": "adopted",
    "Sentence ②": "The grandparents ( ) the boy when his parents were killed in the accident.",
    "Answer ②": "adopted",
    "Definition": "to take someone else’s child into your home and legally become its parent"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "legend (n.)",
    "Sentence ①": "Montego Bay became their home port, and there are still ( ) about hidden treasure there.",
    "Answer ①": "legends",
    "Sentence ②": "According to ( ), her tears formed a lake.",
    "Answer ②": "legend",
    "Definition": "an old well-known story about adventures or magical events"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "explorer (n.)",
    "Sentence ①": "The museum is a big tourist attraction with wax statues of famous ( ), buccaneers, sea captains, slave merchants and criminals.",
    "Answer ①": "explorers",
    "Sentence ②": "( ) from all over the world traveled to find land.",
    "Answer ②": "Explorers",
    "Definition": "someone who travels to places that people have not visited before"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "publish (v.)",
    "Sentence ①": "She was a member of the Journalism Club, which ( ) the monthly school paper.",
    "Answer ①": "published",
    "Sentence ②": "The first edition of this book was ( ) in 1989.",
    "Answer ②": "published",
    "Definition": "① if a newspaper, magazine, etc ( )es a story, photograph etc, it prints it ② to print a book, magazine etc and offer it for sale"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "disappear (v.)",
    "Sentence ①": "The old teacher, Mr. O’Neill, ( ) mysteriously before the summer.",
    "Answer ①": "disappeared",
    "Sentence ②": "The rainforests may ( ) forever.",
    "Answer ②": "disappear",
    "Definition": "to stop existing"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "article (n.)",
    "Sentence ①": "The local newspaper wrote a lot of ( ) about the case.",
    "Answer ①": "articles",
    "Sentence ②": "I read a very interesting ( ) about the problem of illegal drugs.",
    "Answer ②": "article",
    "Definition": "a piece of writing in a newspaper or magazine"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "victim (n.)",
    "Sentence ①": "Peter O’Neill, another ( ) of the Triangle?",
    "Answer ①": "victim",
    "Sentence ②": "All ( ) of the fire were rescued in time.",
    "Answer ②": "victims",
    "Definition": "someone who has been hurt, attacked, or killed because of something bad"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 1,
    "Word": "solve (v.)",
    "Sentence ①": "A month after the disappearance of Peter, the police are still trying to ( ) the case.",
    "Answer ①": "solve",
    "Sentence ②": "The teacher taught the students how to ( ) the math problem.",
    "Answer ②": "solve",
    "Definition": "to find the correct answer to a problem or the explanation for something that is difficult to understand"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "earn (v.)",
    "Sentence ①": "They both had part-time jobs to ( ) some pocket money.",
    "Answer ①": "earn",
    "Sentence ②": "As a child, he had to ( ) spending money.",
    "Answer ②": "earn",
    "Definition": "to be paid money for your work"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "unusual (adj.)",
    "Sentence ①": "Saturday night was special because Mrs. Martin always cooked something ( ).",
    "Answer ①": "unusual",
    "Sentence ②": "The way he dresses is very ( ).",
    "Answer ②": "unusual",
    "Definition": "different from what is usual or normal"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "master (n.)",
    "Sentence ①": "I think he lost his ( ) from the accident.",
    "Answer ①": "master",
    "Sentence ②": "The rich ( ) is known for being generous with his money.",
    "Answer ②": "master",
    "Definition": "the man who has control over servants, animals, or workers"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "repair (v.)",
    "Sentence ①": "People were going out in their boats and the fishermen were ( ) their fishing nets.",
    "Answer ①": "repairing",
    "Sentence ②": "My job is to ( ) broken furniture that people throw away.",
    "Answer ②": "repair",
    "Definition": "to make something that is broken or damaged satisfactory again"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "superstition (n.)",
    "Sentence ①": "The sailors and fishermen knew that, but he thought it was an old ( ).",
    "Answer ①": "superstition",
    "Sentence ②": "Most Americans believe in good ( ).",
    "Answer ②": "superstitions",
    "Definition": "a belief that some objects or actions are lucky or unlucky"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "equipment (n.)",
    "Sentence ①": "He brought his scuba diving ( ) on the ship.",
    "Answer ①": "equipment",
    "Sentence ②": "You don't need that much ( ) for soccer, but for football you do.",
    "Answer ②": "equipment",
    "Definition": "the things that you need to do a job or sport"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 2,
    "Word": "terrific (adj.)",
    "Sentence ①": "We just know that he was a ( ) teacher and everyone liked him.",
    "Answer ①": "terrific",
    "Sentence ②": "Food made at home always tastes ( ).",
    "Answer ②": "terrific",
    "Definition": "very good"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "celebrate (v.)",
    "Sentence ①": "Saturday October 31 was Halloween and the town was ready to ( ).",
    "Answer ①": "celebrate",
    "Sentence ②": "A lot of people don't like to ( ) their birthday.",
    "Answer ②": "celebrate",
    "Definition": "to do something enjoyable because it is a special occasion or because something good has happened"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "incredible (adj.)",
    "Sentence ①": "There were some ( ) costumes in town and people were busy planning scary Halloween parties.",
    "Answer ①": "incredible",
    "Sentence ②": "National parks are places with ( ) nature.",
    "Answer ②": "incredible",
    "Definition": "extremely good, large, or great"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "explanation (n.)",
    "Sentence ①": "Do you have another ( )?' said Michelle, who believed in ghosts.",
    "Answer ①": "explanation",
    "Sentence ②": "The ( ) that John gave was not a good one.",
    "Answer ②": "explanation",
    "Definition": "the reasons why something happened or why you did something"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "silence (n.)",
    "Sentence ①": "There was a moment of ( ), and then he told Nick about his conversation.",
    "Answer ①": "silence",
    "Sentence ②": "Libraries are a place of ( ).",
    "Answer ②": "silence",
    "Definition": "when there is no sound or nobody is talking"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "evil (adj.)",
    "Sentence ①": "I think good and ( ) forces exist,' said Nick seriously.",
    "Answer ①": "evil",
    "Sentence ②": "She drank an ( ) potion.",
    "Answer ②": "evil",
    "Definition": "very bad or harmful, or morally wrong"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "appear (v.)",
    "Sentence ①": "Ghosts only ( ) when the person was murdered or died in a terrible way,' said Michelle.",
    "Answer ①": "appear",
    "Sentence ②": "The driver turned the wheel when the rabbit ( ) out of nowhere.",
    "Answer ②": "appeared",
    "Definition": "if someone or something ( )s, they can suddenly be seen or they suddenly arrive"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "murder (v.)",
    "Sentence ①": "Ghosts only appear when the person was ( ) or died in a terrible way,' said Michelle.",
    "Answer ①": "murdered",
    "Sentence ②": "He denies ( ) the teenager.",
    "Answer ②": "murdering",
    "Definition": "to kill someone deliberately"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 3,
    "Word": "investigate (v.)",
    "Sentence ①": "And I like ( ),' said Nick.",
    "Answer ①": "investigating",
    "Sentence ②": "Many policemen were ( ) the case.",
    "Answer ②": "investigating",
    "Definition": "to try to find out about something, especially a crime or accident"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "directory (n.)",
    "Sentence ①": "I'll look it up in the phone ( ),' said Michelle.",
    "Answer ①": "directory",
    "Sentence ②": "I looked her number up in the telephone ( ).",
    "Answer ②": "directory",
    "Definition": "a book or list of names, facts etc, arranged in alphabetical order."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "examine (v.)",
    "Sentence ①": "But perhaps they didn't ( ) everything,' said Bill.",
    "Answer ①": "examine",
    "Sentence ②": "The doctor ( ) her ankle carefully.",
    "Answer ②": "examined",
    "Definition": "to look at something carefully in order to find out more about it."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "recognize (v.)",
    "Sentence ①": "He ( ) Nick from the restaurant and went to him.",
    "Answer ①": "recognized",
    "Sentence ②": "He'd lost so much weight I hardly ( ) him!",
    "Answer ②": "recognized",
    "Definition": "to know who someone is or what something is because you have seen or heard them before."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "weird (adj.)",
    "Sentence ①": "We're in Mr O'Nell's house!' said Bill. 'This is ( )!'",
    "Answer ①": "weird",
    "Sentence ②": "I had a ( ) dream last night. I was talking to a bear.",
    "Answer ②": "weird",
    "Definition": "unusual and strange."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "clue (n.)",
    "Sentence ①": "Let's start looking for ( ),' said Michelle.",
    "Answer ①": "clues",
    "Sentence ②": "The police are still searching for ( ).",
    "Answer ②": "clues",
    "Definition": "a piece of information or an object that helps to solve a crime or mystery."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "bark (v.)",
    "Sentence ①": "Rover ( ) and put his paw on the door.",
    "Answer ①": "barked",
    "Sentence ②": "The dog always ( ) at strangers.",
    "Answer ②": "barks",
    "Definition": "when a dog ( )s, it makes a short loud sound."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 4,
    "Word": "tiny (adj.)",
    "Sentence ①": "There was a small opening to a ( ) room!",
    "Answer ①": "tiny",
    "Sentence ②": "I found a ( ) hole in my shirt.",
    "Answer ②": "tiny",
    "Definition": "extremely small"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "discover (v.)",
    "Sentence ①": "We ( ) a secret room!'",
    "Answer ①": "discovered",
    "Sentence ②": "The scientists ( ) a new kind of bird in the forest.",
    "Answer ②": "discovered",
    "Definition": "to find someone or something, either by accident or because you were looking for them."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "particular (adj.)",
    "Sentence ①": "Mr.O'Nell was probably trying to find a ( ) spot in the Bermuda Triangle,' said Nick.",
    "Answer ①": "particular",
    "Sentence ②": "I was very busy at that ( ) time.",
    "Answer ②": "particular",
    "Definition": "a ( ) thing, person, or time is the one that you are talking about, and not any other."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "transport (v.)",
    "Sentence ①": "It was ( ) ancient Roman and Greek artifacts.",
    "Answer ①": "transporting",
    "Sentence ②": "The paintings were ( ) to a museum in London.",
    "Answer ②": "transported",
    "Definition": "when people, goods etc are moved from one place to another."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "ancient (adj.)",
    "Sentence ①": "It was transporting ( ) Roman and Greek artifacts.",
    "Answer ①": "ancient",
    "Sentence ②": "We learned about ( ) European cities in history class.",
    "Answer ②": "ancient",
    "Definition": "belonging to a time in history that was thousands of years ago."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "artifact (n.)",
    "Sentence ①": "It was transporting ancient Roman and Greek ( ).",
    "Answer ①": "artifacts",
    "Sentence ②": "Egyptian ( ) are very fragile.",
    "Answer ②": "artifacts",
    "Definition": "an object such as a tool or weapon that was made in the past and is historically important."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "worth (adj.)",
    "Sentence ①": "The artifacts are ( ) millions of dollars.",
    "Answer ①": "worth",
    "Sentence ②": "How much is the car ( )?",
    "Answer ②": "worth",
    "Definition": "to have a particular value."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "dishonest (adj.)",
    "Sentence ①": "I'm sure a lot of ( ) art dealers want to find those artifacts and sell them on the black market.'",
    "Answer ①": "dishonest",
    "Sentence ②": "He was a ( ) man who tried to steal money from people.",
    "Answer ②": "dishonest",
    "Definition": "someone who is ( ) deceives people, for example by lying, stealing, or cheating."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 5,
    "Word": "genius (n.)",
    "Sentence ①": "Even Maria Lopez, who's a math ( ), didn't finish the last problem.",
    "Answer ①": "genius",
    "Sentence ②": "Everyone thought he was a ( ) for inventing something completely new.",
    "Answer ②": "genius",
    "Definition": "someone who has an unusually high level of intelligence, ability, or skill in a particular subject."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "continue (v.)",
    "Sentence ①": "On Sunday Bill, Nick and Michelle ( ) investigating the case.",
    "Answer ①": "continued",
    "Sentence ②": "Bad weather ( ) for weeks.",
    "Answer ②": "continued",
    "Definition": "① to start again after a pause ② to not stop happening, existing, or doing something"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "belong to (phr.)",
    "Sentence ①": "We have to find the Blackbeard and see who it ( ) ( ),' said Bill.",
    "Answer ①": "belongs to",
    "Sentence ②": "Does this umbrella ( ) ( ) you?",
    "Answer ②": "belong to",
    "Definition": "if something ( )s ( ) you, you own it"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "connection (n.)",
    "Sentence ①": "I'm sure there's a ( ) between that boat and Mr. O'Nell.",
    "Answer ①": "connection",
    "Sentence ②": "There is definitely a ( ) between smoking and cancer.",
    "Answer ②": "connection",
    "Definition": "a relationship between things"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "grin (v.)",
    "Sentence ①": "This man owns three museums - he's very rich,' said Michelle ( ).",
    "Answer ①": "grinning",
    "Sentence ②": "Sally was ( ) at me from across the room.",
    "Answer ②": "grinning",
    "Definition": "to smile with a very wide smile"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "evidence (n.)",
    "Sentence ①": "We could find some ( ) of Devereau's connection to this mystery.",
    "Answer ①": "evidence",
    "Sentence ②": "Do you have any ( ) that he is the murderer?",
    "Answer ②": "evidence",
    "Definition": "facts or signs that show that something is true or that something exists."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "identical (adj.)",
    "Sentence ①": "It was almost ( ) to the maps in Mr. O'Nell's house.",
    "Answer ①": "identical",
    "Sentence ②": "The two pictures looked ( ). We didn't know which one was real.",
    "Answer ②": "identical",
    "Definition": "exactly the same"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 6,
    "Word": "stare (v.)",
    "Sentence ①": "The Devereaus have Mr. O'Nell's map, and they hid it behind a painting,' said Nick, ( ) at the map.",
    "Answer ①": "staring",
    "Sentence ②": "It is not nice to ( ) at other people.",
    "Answer ②": "stare",
    "Definition": "to look at someone or something for a long time"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "report (v.)",
    "Sentence ①": "We want to ( ) something,' said Bill.",
    "Answer ①": "report",
    "Sentence ②": "Please ( ) to the police immediately if you see something strange.",
    "Answer ②": "report",
    "Definition": "① to tell people about an event or situation, especially in newspapers, on television, or on the radio ② to tell someone in authority that a crime or accident has happened"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "detective (n.)",
    "Sentence ①": "You three are good ( ),' he said.",
    "Answer ①": "detectives",
    "Sentence ②": "Even the ( ) could not solve the mystery.",
    "Answer ②": "detectives",
    "Definition": "a police officer whose job is to discover who is responsible for crimes"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "property (n.)",
    "Sentence ①": "Do you know that it is against the law to enter private ( )?'",
    "Answer ①": "property",
    "Sentence ②": "You cannot enter this building because it is private ( ).",
    "Answer ②": "property",
    "Definition": "the things that a person, organization etc owns"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "embarrassed (adj.)",
    "Sentence ①": "Bill and Nick were ( ), but Michelle was not.",
    "Answer ①": "embarrassed",
    "Sentence ②": "I felt ( ) when I made a mistake in my speech.",
    "Answer ②": "embarrassed",
    "Definition": "if you feel ( ), you feel nervous or uncomfortable about what other people think of you"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "accuse (v.)",
    "Sentence ①": "We can’t ( ) anyone at the moment.",
    "Answer ①": "accuse",
    "Sentence ②": "He was ( ) of stealing.",
    "Answer ②": "accused",
    "Definition": "to say that someone has done something wrong or illegal"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "emergency (n.)",
    "Sentence ①": "Dogs aren’t allowed in the building, but there’s a back door, the ( ) exit.'",
    "Answer ①": "emergency",
    "Sentence ②": "Make sure you know what to do in an ( ).",
    "Answer ②": "emergency",
    "Definition": "a dangerous situation that happens suddenly, and in which people might be hurt or killed"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 7,
    "Word": "feed (v.)",
    "Sentence ①": "My mother usually ( ) him at nine o’clock.",
    "Answer ①": "feeds",
    "Sentence ②": "Children were ( ) bread to the ducks.",
    "Answer ②": "feeding",
    "Definition": "to give food to a person or animal"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "slave (n.)",
    "Sentence ①": "Rover walked to the wax statue of the ( ) merchant with the blank patch over his eye.",
    "Answer ①": "slave",
    "Sentence ②": "In the past, some people bought ( ) to work for them.",
    "Answer ②": "slaves",
    "Definition": "someone who is owned by another person and must work for them without any pay"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "sniff (v.)",
    "Sentence ①": "Rover stopped in front of it and started ( ) and whimpering.",
    "Answer ①": "sniffing",
    "Sentence ②": "Stop ( ) and blow your nose.",
    "Answer ②": "sniffing",
    "Definition": "to breathe air into your nose noisily, for example when you are crying or have a cold."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "tremble (v.)",
    "Sentence ①": "Could...that be his master?' said Nick, his voice ( ).",
    "Answer ①": "trembling",
    "Sentence ②": "Her voice ( ) as she spoke.",
    "Answer ②": "trembled",
    "Definition": "to shake slightly because you are afraid, worried, or excited."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "obey (v.)",
    "Sentence ①": "You must ( ) the rules of the museum, or I'll call the police.'",
    "Answer ①": "obey",
    "Sentence ②": "Most dogs will ( ) their owners.",
    "Answer ②": "obey",
    "Definition": "to do what a person, law, or rules tells you to do."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "confused (adj.)",
    "Sentence ①": "The guard was worried and ( ).",
    "Answer ①": "confused",
    "Sentence ②": "I'm still ( ) about what happened.",
    "Answer ②": "confused",
    "Definition": "unable to understand something, especially because it does not seem to make sense."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "medical (adj.)",
    "Sentence ①": "Sergent Walters called the police station and asked them to send a ( ) expert.",
    "Answer ①": "medical",
    "Sentence ②": "I am interested in ( ) research because I want to cure diseases.",
    "Answer ②": "medical",
    "Definition": "relating to medicine and the treatment of diseases or injuries."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 8,
    "Word": "responsibility (n.)",
    "Sentence ①": "Now it's the ( ) of the police.",
    "Answer ①": "responsibility",
    "Sentence ②": "It's your ( ) to come on time.",
    "Answer ②": "responsibility",
    "Definition": "If something is your ( ), it is your job or duty to do it."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "remind someone of (phr.)",
    "Sentence ①": "Devereau ( ) me ( ) Dr. Frankenstein!'",
    "Answer ①": "reminds of",
    "Sentence ②": "She ( ) me ( ) my mother.",
    "Answer ②": "reminds of",
    "Definition": "if someone or something ( ) you ( ) another person or place, they make you think of that person or place because they are similar."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "determination (n.)",
    "Sentence ①": "These young people showed great ( ) and courage.",
    "Answer ①": "determination",
    "Sentence ②": "She showed great ( ) to learn English.",
    "Answer ②": "determination",
    "Definition": "the desire to continue trying to do something even when it is difficult."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "courage (n.)",
    "Sentence ①": "These young people showed great determination and ( ).",
    "Answer ①": "courage",
    "Sentence ②": "I didn’t have the ( ) to tell her my true feelings.",
    "Answer ②": "courage",
    "Definition": "the quality you have when you do not let fear affect you in a frightening situation."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "confession (n.)",
    "Sentence ①": "The owners of the wax museum made a terrible ( ).",
    "Answer ①": "confession",
    "Sentence ②": "He made a full ( ) to the police.",
    "Answer ②": "confession",
    "Definition": "a statement admitting that you have done something bad, illegal, or embarrassing."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "destination (n.)",
    "Sentence ①": "The ship left the port of Naples, Italy, but never reached its ( ) in Miami.",
    "Answer ①": "destination",
    "Sentence ②": "We will soon reach our ( ).",
    "Answer ②": "destination",
    "Definition": "the place that you are traveling to"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "eliminate (v.)",
    "Sentence ①": "They had to ( ) the body so they took it to the wax museum that night.",
    "Answer ①": "eliminate",
    "Sentence ②": "Credit cards ( ) the need to carry cash.",
    "Answer ②": "eliminate",
    "Definition": "to completely get rid of something that is unnecessary or unwanted"
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "funeral (n.)",
    "Sentence ①": "On Saturday morning there will be ( ) services for Peter O’Nell.",
    "Answer ①": "funeral",
    "Sentence ②": "You should wear black clothes to a ( ).",
    "Answer ②": "funeral",
    "Definition": "a ceremony for someone who has just died."
  },
  {
    "Book": "BP5 The Miami Police Files: The O'Nell case",
    "Chapter": 9,
    "Word": "instinct (n.)",
    "Sentence ①": "“They forgot about a dog’s ( ) and his sense of smell,” said Bill.",
    "Answer ①": "instinct",
    "Sentence ②": "Birds build nests by ( ).",
    "Answer ②": "instinct",
    "Definition": "a natural ability or feeling that makes people or animals know something or behave in a particular way."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "alert (n.)",
    "Sentence ①": "Alien ( )! Early this morning there was a report of an unidentified flying object near the Cascade Mountains east of Seattle.",
    "Answer ①": "alert",
    "Sentence ②": "The bomb ( ) was heard soon after midnight.",
    "Answer ②": "alert",
    "Definition": "a warning to be ready for possible danger"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "unidentified (adj.)",
    "Sentence ①": "Early this morning there was a report of an ( ) flying object near the Cascade Mountains east of Seattle.",
    "Answer ①": "unidentified",
    "Sentence ②": "They found an ( ) car in the park.",
    "Answer ②": "unidentified",
    "Definition": "an ( ) person or thing is one that you do not know the name of."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "investigate (v.)",
    "Sentence ①": "The Seattle Police are ( ) the unidentified object.",
    "Answer ①": "investigating",
    "Sentence ②": "The police are now ( ) the scene of the accident.",
    "Answer ②": "investigating",
    "Definition": "to try to find out about something, especially a crime or accident."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "exist (v.)",
    "Sentence ①": "Do you think they really ( )?",
    "Answer ①": "exist",
    "Sentence ②": "We cannot ( ) without air.",
    "Answer ②": "exist",
    "Definition": "to happen or to be real or alive."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "survive (v.)",
    "Sentence ①": "He's terrible! How are we going to ( ) this class?",
    "Answer ①": "survive",
    "Sentence ②": "He got badly hurt but ( ) the accident.",
    "Answer ②": "survived",
    "Definition": "① to continue to live normally or to exist in spite of problems. ② to continue to live after an accident, war, illness etc."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "pale (adj.)",
    "Sentence ①": "He had a small nose and a ( ) face.",
    "Answer ①": "pale",
    "Sentence ②": "Susan's face became ( ) when she heard the bad news.",
    "Answer ②": "pale",
    "Definition": "having a skin color that is whiter than usual, especially because you are ill or frightened."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 1,
    "Word": "absolutely (adv.)",
    "Sentence ①": "I looked at her whispered back, \"I have ( ) no idea.",
    "Answer ①": "absolutely",
    "Sentence ②": "Don't you believe me?\" \"( ) not.",
    "Answer ②": "Absolutely",
    "Definition": "completely or totally."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "unfriendly (adj.)",
    "Sentence ①": "His voice is so cold. And he's ( ),\" said Barbara.",
    "Answer ①": "unfriendly",
    "Sentence ②": "The villagers were really ( ) towards us.",
    "Answer ②": "unfriendly",
    "Definition": "not friendly"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "nervously (adv.)",
    "Sentence ①": "We looked at each other ( ), but started laughing.",
    "Answer ①": "nervously",
    "Sentence ②": "He ( ) opened the letter from his father.",
    "Answer ②": "nervously",
    "Definition": "worried or frightened about something and unable to relax."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "personal (adj.)",
    "Sentence ①": "During the English lesson Mr Wilkinson started asking us some ( ) questions.",
    "Answer ①": "personal",
    "Sentence ②": "She doesn't like to talk about her ( ) life.",
    "Answer ②": "personal",
    "Definition": "relating to the private parts of your life such as your feelings, health, relationships, etc."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "voyage (n.)",
    "Sentence ①": "Everything is right for intergalactic ( ) !",
    "Answer ①": "voyage",
    "Sentence ②": "The ( ) from England to India used to take six months.",
    "Answer ②": "voyage",
    "Definition": "a long trip, especially in a ship or space vehicle."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "notice (v.)",
    "Sentence ①": "Then I looked at him carefully and I ( ) something: his eyes were not green anymore.",
    "Answer ①": "noticed",
    "Sentence ②": "She ( ) that there was a hole in her sweater.",
    "Answer ②": "noticed",
    "Definition": "to see, feel, or hear someone or something."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 2,
    "Word": "astronaut (n.)",
    "Sentence ①": "I want to become an ( ). I want to go to another galaxy and perhaps meet aliens!",
    "Answer ①": "astronaut",
    "Sentence ②": "My dream is to be an ( ) and go to the moon.",
    "Answer ②": "astronaut",
    "Definition": "someone who travels in a spacecraft."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "practical (adj.)",
    "Sentence ①": "Today we're going to the lab to do some ( ) work.",
    "Answer ①": "practical",
    "Sentence ②": "I would like to learn more ( ) English.",
    "Answer ②": "practical",
    "Definition": "relating to real situations and events rather than ideas"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "noise (n.)",
    "Sentence ①": "They all started running around and making a lot of ( ).",
    "Answer ①": "noise",
    "Sentence ②": "He heard a strange ( ) outside.",
    "Answer ②": "noise",
    "Definition": "a sound, especially one that is unpleasant or loud."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "electric (adj.)",
    "Sentence ①": "His arm touched mine and I got an ( ) shock.",
    "Answer ①": "electric",
    "Sentence ②": "( ) guitars sound very different from acoustic guitars.",
    "Answer ②": "Electric",
    "Definition": "something that is ( ) works using electricity."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "pay attention (phr. v.)",
    "Sentence ①": "Please ( ) ( )!\" said Mr Kent.",
    "Answer ①": "pay attention",
    "Sentence ②": "Always ( ) ( ) to the car in front.",
    "Answer ②": "pay attention",
    "Definition": "to watch, listen, or think carefully because you are interested in something"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "operation (n.)",
    "Sentence ①": "After the ( ) I lost my voice, so now I speak with a type of artificial voice.",
    "Answer ①": "operation",
    "Sentence ②": "He's recovering from an ( ) on his shoulder.",
    "Answer ②": "operation",
    "Definition": "when doctors cut into someone's body in order to remove or repair a part that is damaged"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "behavior (n.)",
    "Sentence ①": "Mr Wilkinson, we're very sorry about our terrible ( ),\" said Walter.",
    "Answer ①": "behavior",
    "Sentence ②": "I'm not very happy with your ( ),\" said the teacher.",
    "Answer ②": "behavior",
    "Definition": "the things that a person or animal does"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 3,
    "Word": "forgive (v.)",
    "Sentence ①": "Yes, please ( ) us,\" I said.",
    "Answer ①": "forgive",
    "Sentence ②": "I'm glad he ( ) me for my mistake.",
    "Answer ②": "forgave",
    "Definition": "to decide not to be angry or punish someone who has done something wrong"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 4,
    "Word": "invade (v.)",
    "Sentence ①": "It's not nice to ( ) someone's privacy.",
    "Answer ①": "invade",
    "Sentence ②": "You have no right to ( ) my privacy.",
    "Answer ②": "invade",
    "Definition": "to get involved in something in an unwanted and annoying way"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 4,
    "Word": "invite (v.)",
    "Sentence ①": "Let's ( ) Barbara,\" Walter said.",
    "Answer ①": "invite",
    "Sentence ②": "I was ( ) to their wedding.",
    "Answer ②": "invited",
    "Definition": "to ask someone to come to a party, meal etc"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 4,
    "Word": "prepare (v.)",
    "Sentence ①": "Mrs Wong is ( ) some math tests for her classes.",
    "Answer ①": "preparing",
    "Sentence ②": "Just as we were ( ) to leave, the phone rang.",
    "Answer ②": "preparing",
    "Definition": "to make plans or arrangements for something that will happen soon, or to get yourself ready for it"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 4,
    "Word": "return (v.)",
    "Sentence ①": "We can't ( ) to Mitrax for another six hundred years.",
    "Answer ①": "return",
    "Sentence ②": "He usually ( ) home form work around 8 o'clock.",
    "Answer ②": "returns",
    "Definition": "to come back or go back to a place"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 4,
    "Word": "obey (v.)",
    "Sentence ①": "With the X-5 spray humans can't think anymore, they forget who the are - they can only ( ).",
    "Answer ①": "obey",
    "Sentence ②": "The dog always ( ) his master.",
    "Answer ②": "obeys",
    "Definition": "to do what a person, law, or rule tells you to do"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "happen (v.)",
    "Sentence ①": "Let me tell you what ( ) last night.",
    "Answer ①": "happened",
    "Sentence ②": "We waited for half an hour, but nothing ( ).",
    "Answer ②": "happened",
    "Definition": "if an event ( )s, it exists and continues for a period of time, usually without being planned."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "planet (n.)",
    "Sentence ①": "They want to take Mr Kent and a student to their ( ), Mitrax.",
    "Answer ①": "planet",
    "Sentence ②": "Mercury is the smallest ( ) in the solar system.",
    "Answer ②": "planet",
    "Definition": "a very large round object in space that moves around the Sun or another star."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "probably (adv.)",
    "Sentence ①": "The spray is ( ) in the science lab or in his house.",
    "Answer ①": "probably",
    "Sentence ②": "We'll ( ) go to France next year.",
    "Answer ②": "probably",
    "Definition": "used when saying that you think something will happen or be true, although you are not sure."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "hide (v.)",
    "Sentence ①": "Let's ( ) in the bathroom!\" said Barbara.",
    "Answer ①": "hide",
    "Sentence ②": "He ( ) behind a tree so that no one could find him.",
    "Answer ②": "hid",
    "Definition": "to put something or someone in a place so that they are difficult to see."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "toxic (adj.)",
    "Sentence ①": "There was a big sign on each cupboard that said, DANGER! ( ) CHEMICALS INSIDE!",
    "Answer ①": "toxic",
    "Sentence ②": "( ) chemicals were spilled into the rivers.",
    "Answer ②": "Toxic",
    "Definition": "poisonous"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 5,
    "Word": "find out (phr. v.)",
    "Sentence ①": "What did Walter want at this time? I wanted to ( ) ( ).",
    "Answer ①": "find out",
    "Sentence ②": "I ( ) ( ) that I was born in a different country.",
    "Answer ②": "found out",
    "Definition": "to get information about something or someone."
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "decision (n.)",
    "Sentence ①": "His ( ) to become an actor surprised us.",
    "Answer ①": "decision",
    "Sentence ②": "I'm sure that I made the right ( ).",
    "Answer ②": "decision",
    "Definition": "a choice or judgment that you make"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "opportunity (n.)",
    "Sentence ①": "This is a great ( ) for me to become an astronaut.",
    "Answer ①": "opportunity",
    "Sentence ②": "I had an ( ) to meet my favorite singer.",
    "Answer ②": "opportunity",
    "Definition": "a chance to do something"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "explore (v.)",
    "Sentence ①": "How many people have the opportunity to go to and ( ) another planet?",
    "Answer ①": "explore",
    "Sentence ②": "We spent a week ( ) the jungle.",
    "Answer ②": "exploring",
    "Definition": "to travel around an area to find out what it is like"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "trust (v.)",
    "Sentence ①": "They just want to study me because I'm a human. I think I can ( ) them.",
    "Answer ①": "trust",
    "Sentence ②": "I ( ) you because you are my friend.",
    "Answer ②": "trust",
    "Definition": "to believe that someone is honest and will not do anything bad or wrong"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "silent (adj.)",
    "Sentence ①": "We were ( ) for a few minutes.",
    "Answer ①": "silent",
    "Sentence ②": "You need to stay ( ) during the movie.",
    "Answer ②": "silent",
    "Definition": "not saying anything"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 6,
    "Word": "explain (v.)",
    "Sentence ①": "She was ( ) about all the plans for the school over the year.",
    "Answer ①": "explaining",
    "Sentence ②": "Can you ( ) to me the rules of this game again?",
    "Answer ②": "explain",
    "Definition": "to give someone the information they need to understand something"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "brave (adj.)",
    "Sentence ①": "That's a very ( ) decision,\" said Mr. Kent.",
    "Answer ①": "brave",
    "Sentence ②": "It was very ( ) of you to tell her the truth.",
    "Answer ②": "brave",
    "Definition": "showing that you are not afraid to do something that is dangerous, frightening, or difficult"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "advanced (adj.)",
    "Sentence ①": "Our technology is much more ( ), Walter will have a lot of fun discovering all the new things.",
    "Answer ①": "advanced",
    "Sentence ②": "The book explains both basic and ( ) technologies.",
    "Answer ②": "advanced",
    "Definition": "very modern"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "discover (v.)",
    "Sentence ①": "Our technology is much more advanced, Walter will have a lot of fun ( ) all the new things.",
    "Answer ①": "discovering",
    "Sentence ②": "She ( ) that she was pregnant.",
    "Answer ②": "discovered",
    "Definition": "to learn something that you did not know about before"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "miss (v.)",
    "Sentence ①": "You are going to ( ) your spaceship.",
    "Answer ①": "miss",
    "Sentence ②": "Jake woke up late so he ( ) his school bus.",
    "Answer ②": "missed",
    "Definition": "to be too late for something"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "perhaps (adv.)",
    "Sentence ①": "Let's follow them! We can see the spaceship and ( ) a few aliens.",
    "Answer ①": "perhaps",
    "Sentence ②": "Sarah's late - ( ) she missed the bus.",
    "Answer ②": "perhaps",
    "Definition": "used to say that something may be true, but you are not sure"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "disappear (v.)",
    "Sentence ①": "Barbara and I watched it until it ( ).",
    "Answer ①": "disappeared",
    "Sentence ②": "The sun briefly ( ) behind a cloud.",
    "Answer ②": "disappeared",
    "Definition": "if something ( )s, you can no longer see it"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "foreign (adj.)",
    "Sentence ①": "The news was on the front pages of every American and ( ) newspaper.",
    "Answer ①": "foreign",
    "Sentence ②": "Do you speak any ( ) languages?",
    "Answer ②": "foreign",
    "Definition": "from or relating to a country that is not your own"
  },
  {
    "Book": "BP5 Alien Alert in Seattle",
    "Chapter": 7,
    "Word": "article (n.)",
    "Sentence ①": "There were hundreds of ( ) about the UFO, Mr Kent, Walter and Mitrax.",
    "Answer ①": "article",
    "Sentence ②": "I read a very interesting ( ) about the Olympics.",
    "Answer ②": "article",
    "Definition": "a piece of writing in a newspaper or magazine"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "ambition (n.)",
    "Sentence ①": "Dreams. ( ). Everyone has them.",
    "Answer ①": "Ambitions",
    "Sentence ②": "Her ( ) was to become a model.",
    "Answer ②": "ambition",
    "Definition": "a strong desire to do or achieve something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "career (n.)",
    "Sentence ①": "If you want a good ( ) you need to study science.",
    "Answer ①": "career",
    "Sentence ②": "After 40 years, he ended his ( ) as a high school teacher.",
    "Answer ②": "career",
    "Definition": "a job or profession that you have been trained for, and which you usually do for a long time"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "yawn (v.)",
    "Sentence ①": "I start to ( ).",
    "Answer ①": "yawn",
    "Sentence ②": "He began to ( ) and looked at his watch.",
    "Answer ②": "yawn",
    "Definition": "to open your mouth wide and breathe deeply because you are tired or bored"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "miserable (adj.)",
    "Sentence ①": "It's spring but the sky is gray and ( ).",
    "Answer ①": "miserable",
    "Sentence ②": "The match was played in wet and ( ) weather.",
    "Answer ②": "miserable",
    "Definition": "unpleasant"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "disappointed (adj.)",
    "Sentence ①": "You know the type... When Skye gets a B, she's ( ).",
    "Answer ①": "disappointed",
    "Sentence ②": "We were all ( ) that Mark couldn't come to the party.",
    "Answer ②": "disappointed",
    "Definition": "unhappy because something you hoped for did not happen, or was not as good as you expected"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "afford (v.)",
    "Sentence ①": "Tickets for Glastonbury are really expensive!\" says Skye. \"I can't ( ) tickets for Glastonbury.",
    "Answer ①": "afford",
    "Sentence ②": "The family is too poor to ( ) a car.",
    "Answer ②": "afford",
    "Definition": "to have enough money to pay for something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "guilty (adj.)",
    "Sentence ①": "I think he feels ( ), leaving me for a month.",
    "Answer ①": "guilty",
    "Sentence ②": "He felt ( ) about telling Mary's secret to everybody.",
    "Answer ②": "guilty",
    "Definition": "unhappy and ashamed because you have done something wrong"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 1,
    "Word": "persuade (v.)",
    "Sentence ①": "I just don't know how I'm going to ( ) my Dad to let me go.",
    "Answer ①": "persuade",
    "Sentence ②": "It wasn't easy, but I ( ) him to do the right thing.",
    "Answer ②": "persuaded",
    "Definition": "to make someone decide to do something by telling them why it is a good idea, or asking them many times"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "spoil (v.)",
    "Sentence ①": "I feel that nothing could ( ) this perfect moment.",
    "Answer ①": "spoil",
    "Sentence ②": "The rain completely ( ) our picnic.",
    "Answer ②": "spoiled",
    "Definition": "to make something less good or enjoyable."
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "remind (v.)",
    "Sentence ①": "But then Cassie ( ) me that I haven't told Dad about the festival.",
    "Answer ①": "reminded",
    "Sentence ②": "Thanks for ( ) me that I had homework due tomorrow. I almost forgot.",
    "Answer ②": "reminding",
    "Definition": "if you ( ) someone about sth, you make them remember it or remember to do it."
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "explanation (n.)",
    "Sentence ①": "I thought that Cassie was happy with my ( ).",
    "Answer ①": "explanation",
    "Sentence ②": "His ( ) made everyone believe his story.",
    "Answer ②": "explanation",
    "Definition": "the reasons why something happened or why you did something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "cause (v.)",
    "Sentence ①": "I don't want to ( ) an argument between her and Dad.",
    "Answer ①": "cause",
    "Sentence ②": "Smoking can ( ) illnesses.",
    "Answer ②": "cause",
    "Definition": "to make something happen, especially something bad"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "argument (n.)",
    "Sentence ①": "I don't want to cause an ( ) between her and Dad.",
    "Answer ①": "argument",
    "Sentence ②": "My father and I had an ( ) about my school grades.",
    "Answer ②": "argument",
    "Definition": "a situation in which people speak angrily to each other because they disagree about something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "prepared (adj.)",
    "Sentence ①": "That way we'll all be really ( ) for the next school year!",
    "Answer ①": "prepared",
    "Sentence ②": "Are you all ( ) for the math test tomorrow?",
    "Answer ②": "prepared",
    "Definition": "ready to deal with a situation"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "deserve (v.)",
    "Sentence ①": "And she'll ( ) a party afterwards.",
    "Answer ①": "deserve",
    "Sentence ②": "After all that work, you ( ) a break.",
    "Answer ②": "deserve",
    "Definition": "if you ( ) something, you should get it because of something you have done"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 2,
    "Word": "in silence (phr.)",
    "Sentence ①": "I watch them ( ) ( ) . I don't even breathe.",
    "Answer ①": "in silence",
    "Sentence ②": "We finished our meal ( ) ( ).",
    "Answer ②": "in silence",
    "Definition": "when there is no sound or nobody is talking"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "forgive (v.)",
    "Sentence ①": "I'll never ( ) you both for this! NEVER!",
    "Answer ①": "forgive",
    "Sentence ②": "She never ( ) him for losing her ring.",
    "Answer ②": "forgave",
    "Definition": "to decide not to be angry or punish someone who has done something wrong"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "fault (n.)",
    "Sentence ①": "I tell myself it's their ( ).",
    "Answer ①": "fault",
    "Sentence ②": "Don't blame yourself for the mistake. It wasn't your ( ).",
    "Answer ②": "fault",
    "Definition": "if something bad that happens is your ( ), you are responsible for it happening"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "article (n.)",
    "Sentence ①": "When I get to the ( ) on Murphy more tears fill my eyes.",
    "Answer ①": "article",
    "Sentence ②": "The ( ) was a strong attack against the President.",
    "Answer ②": "article",
    "Definition": "a piece of writing in a newspaper or magazine"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "anger (n.)",
    "Sentence ①": "Suddenly, my ( ) disappears.",
    "Answer ①": "anger",
    "Sentence ②": "She shouted at her younger brother in ( ).",
    "Answer ②": "anger",
    "Definition": "a strong feeling of wanting to hurt or criticize someone because they have done something bad to you or been unkind to you"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "disappear (v.)",
    "Sentence ①": "Suddenly, my anger ( ).",
    "Answer ①": "disappears",
    "Sentence ②": "My keys have ( ). Do you know where they are?",
    "Answer ②": "disappeared",
    "Definition": "① to stop existing ② if something ( )s, you can no longer see it"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 3,
    "Word": "competition (n.)",
    "Sentence ①": "I know that thousands of people will enter the ( ).",
    "Answer ①": "competition",
    "Sentence ②": "He won second place in the piano ( ).",
    "Answer ②": "competition",
    "Definition": "an organized event in which people or teams compete against each other"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "whisper (v.)",
    "Sentence ①": "Thanks, Liz,\" I ( ), giving her a hug when Dad has gone.",
    "Answer ①": "whisper",
    "Sentence ②": "I leaned over to ( ) something to her.",
    "Answer ②": "whisper",
    "Definition": "to say something very quietly, using your breath rather than your voice"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "impossible (adj.)",
    "Sentence ①": "I wanted to believe it too. It seemed ( ).",
    "Answer ①": "impossible",
    "Sentence ②": "The job seemed ( ) but in the end, we were able to finish it.",
    "Answer ②": "impossible",
    "Definition": "something that is ( ) cannot happen or be done"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "temper (n.)",
    "Sentence ①": "It also made Dad's ( ) ( ) easier to live with too.",
    "Answer ①": "temper",
    "Sentence ②": "He has a very ( ) ( ) and gets angry very easily.",
    "Answer ②": "temper",
    "Definition": "a tendency to become suddenly angry"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "allow (v.)",
    "Sentence ①": "Because I wasn't ( ), the only time I saw Cassie and Skye was at school.",
    "Answer ①": "allowed",
    "Sentence ②": "Smoking is not ( ) in the airport.",
    "Answer ②": "allowed",
    "Definition": "to say that someone can do or have something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "contact (v.)",
    "Sentence ①": "The magazine said that they were going to ( ) the winner by 22 June.",
    "Answer ①": "contact",
    "Sentence ②": "Anyone who saw the accident should ( ) the police.",
    "Answer ②": "contact",
    "Definition": "to telephone or write to someone"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "insist (v.)",
    "Sentence ①": "Can you check, please,\" I ( ).",
    "Answer ①": "insist",
    "Sentence ②": "She ( ) on carrying her own bag.",
    "Answer ②": "insisted",
    "Definition": "to demand that something should happen"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "instead (adv.)",
    "Sentence ①": "Maybe they will phone ( ).",
    "Answer ①": "instead",
    "Sentence ②": "She likes to walk to work ( ) of going by car.",
    "Answer ②": "instead",
    "Definition": "used to say that something is done, used etc when something else is not done or used"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 4,
    "Word": "fold (v.)",
    "Sentence ①": "There's a ( ) piece of paper on the bed, but I don't even open it.",
    "Answer ①": "folded",
    "Sentence ②": "Sam ( ) up the map and put it in her pocket.",
    "Answer ②": "folded",
    "Definition": "to bend a piece of paper or cloth by pressing one part over another"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "miss (v.)",
    "Sentence ①": "Ellie! You'll ( ) your train if you're not careful!",
    "Answer ①": "miss",
    "Sentence ②": "We'll ( ) the flight if he doesn't hurry.",
    "Answer ②": "miss",
    "Definition": "to be too late to something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "pack (v.)",
    "Sentence ①": "You need to ( ) your bag and you must eat a good breakfast.",
    "Answer ①": "pack",
    "Sentence ②": "She had ( ) and checked out of the hotel by 8 o'clock.",
    "Answer ②": "packed",
    "Definition": "to put things into cases, bags etc ready for a journey"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "editor (n.)",
    "Sentence ①": "Just after you went out with the papers, there was a phone call from Music Now's ( ).",
    "Answer ①": "editor",
    "Sentence ②": "Her father was the ( ) of The New York Times.",
    "Answer ②": "editor",
    "Definition": "the person who decides what should be included in a book, newspaper, magazine etc, and checks for mistakes"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "serious (adj.)",
    "Sentence ①": "He looks very ( ) and for a terrible moment I don't think he'll let me go.",
    "Answer ①": "serious",
    "Sentence ②": "We need to have a ( ) talk about your future.",
    "Answer ②": "serious",
    "Definition": "something that is ( ) is important and should not be laughed at"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "pull out (phr. v.)",
    "Sentence ①": "My hands are shaking as I ( ) ( ) tops and jeans from my wardrobe.",
    "Answer ①": "pull out",
    "Sentence ②": "She ( ) a handkerchief ( ) of her pocket.",
    "Answer ②": "pulled out",
    "Definition": "to take something out of a bag, pocket etc with your hand"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 5,
    "Word": "proud (adj.)",
    "Sentence ①": "When I look at Dad again there are tears in his eyes but he looks very ( ).",
    "Answer ①": "proud",
    "Sentence ②": "She scored three goals and he was so ( ) of her.",
    "Answer ②": "proud",
    "Definition": "feeling pleased with something you, your family or your county has achieved"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "mature (adj.)",
    "Sentence ①": "Hello,\" I try to sound ( ) and confident, but I can feel my cheeks starting to turn red.",
    "Answer ①": "mature",
    "Sentence ②": "Sophia is still a young child but acts ( ) for her age.",
    "Answer ②": "mature",
    "Definition": "behaving in a reasonable way like an adult"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "confident (adj.)",
    "Sentence ①": "Hello,\" I try to sound mature and ( ), but I can feel my cheeks starting to turn red.",
    "Answer ①": "confident",
    "Sentence ②": "She was very ( ) that her team will win the game.",
    "Answer ②": "confident",
    "Definition": "sure that something is true or that something will happen in the way you want or expect"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "destination (n.)",
    "Sentence ①": "As we get closer to our ( ), the train gets very full.",
    "Answer ①": "destination",
    "Sentence ②": "Okinawa is the perfect ( ) for a relaxing weekend.",
    "Answer ②": "destination",
    "Definition": "the place that you are traveling to"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "atmosphere (n.)",
    "Sentence ①": "The ( ) is amazing and we haven't arrived yet!",
    "Answer ①": "atmosphere",
    "Sentence ②": "The hotel is known for its friendly, welcoming ( ).",
    "Answer ②": "atmosphere",
    "Definition": "the feeling that a place, situation, or event gives you"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "eventually (adv.)",
    "Sentence ①": "Cassie?\" I say when she ( ) answers the phone.",
    "Answer ①": "eventually",
    "Sentence ②": "After months of job hunting, he ( ) got a job.",
    "Answer ②": "eventually",
    "Definition": "after a long time"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "disbelief (n.)",
    "Sentence ①": "Wait a minute,\" Cassie says, her mouth open in ( ).",
    "Answer ①": "disbelief",
    "Sentence ②": "Laura shook her head in ( ).",
    "Answer ②": "disbelief",
    "Definition": "a feeling that you do not believe something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "reflection (n.)",
    "Sentence ①": "She takes a mirror out of her bag and looks at her ( ) carefully.",
    "Answer ①": "reflection",
    "Sentence ②": "We saw the ( ) of the moon on the lake at night.",
    "Answer ②": "reflection",
    "Definition": "an image that is reflected in a mirror or a similar surface"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "available (adj.)",
    "Sentence ①": "Ellie, I've got the chance to interview Chris Martin from Coldplay. But he's only ( ) at 6 pm.",
    "Answer ①": "available",
    "Sentence ②": "Dr. Jones is not ( ) at the moment.",
    "Answer ②": "available",
    "Definition": "someone who is ( ) is not busy and has enough time to talk to you"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "obviously (adv.)",
    "Sentence ①": "She ( ) thinks that they're coming with me.",
    "Answer ①": "obviously",
    "Sentence ②": "You could see from her facial expression that she ( ) didn't want to come.",
    "Answer ②": "obviously",
    "Definition": "easy to notice or understand"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 6,
    "Word": "instantly (adv.)",
    "Sentence ①": "I shout so loudly that she ( ) looks at me.",
    "Answer ①": "instantly",
    "Sentence ②": "She fell asleep almost ( ).",
    "Answer ②": "instantly",
    "Definition": "immediately"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "opportunity (n.)",
    "Sentence ①": "They’re my best friends but I can't miss an ( ) like this.",
    "Answer ①": "opportunity",
    "Sentence ②": "I had an ( ) to meet the president.",
    "Answer ②": "opportunity",
    "Definition": "a chance to do something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "desperate (adj.)",
    "Sentence ①": "Feeling ( ), I try to phone Mike again, but his mobile is switched off.",
    "Answer ①": "desperate",
    "Sentence ②": "After losing many games, the team was ( ) for a win.",
    "Answer ②": "desperate",
    "Definition": "① needing or wanting something very much ② willing to do anything to change a bad situation"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "stare (v.)",
    "Sentence ①": "He crosses his arms across his huge chest and ( ) down at me and I know he won’t change his mind.",
    "Answer ①": "stares",
    "Sentence ②": "He ( ) at her in surprise.",
    "Answer ②": "stared",
    "Definition": "to look at someone or something for a long time"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "refuse (v.)",
    "Sentence ①": "He’s really angry and has ( ) to give any interviews.",
    "Answer ①": "refused",
    "Sentence ②": "I ( ) to answer his phone call because I was so angry.",
    "Answer ②": "refused",
    "Definition": "to say firmly that you will not do or accept something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "relieved (adj.)",
    "Sentence ①": "I’m ( ) that it wasn't my fault, but I really wanted to meet Murphy.",
    "Answer ①": "relieved",
    "Sentence ②": "He was ( ) she decided to forgive him.",
    "Answer ②": "relieved",
    "Definition": "happy because you are no longer worried or frightened"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "crowd (n.)",
    "Sentence ①": "He disappears into the ( ).",
    "Answer ①": "crowd",
    "Sentence ②": "A huge ( ) gathered in the street outside.",
    "Answer ②": "crowd",
    "Definition": "a large group of people in one place"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "apologise (v.)",
    "Sentence ①": "I’ll ( ), and hopefully, Cassie will forgive me.",
    "Answer ①": "apologise",
    "Sentence ②": "I must ( ) for the trouble I caused.",
    "Answer ②": "apologise",
    "Definition": "to tell someone that you are sorry that you have upset them or caused them problems"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "familiar (adj.)",
    "Sentence ①": "But just as I am about to leave, the door to one of the vans opens and ( ) music fills the air.",
    "Answer ①": "familiar",
    "Sentence ②": "The voice on the phone sounded ( ).",
    "Answer ②": "familiar",
    "Definition": "well-known to you and easy to recognize"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 7,
    "Word": "bend (v.)",
    "Sentence ①": "The security man ( ) his head low and steps out into the rain.",
    "Answer ①": "bends",
    "Sentence ②": "She ( ) down to pick up her pen.",
    "Answer ②": "bent",
    "Definition": "to move a part of your body so that it is not straight or so that you are not standing upright"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "sweat (v.)",
    "Sentence ①": "My heart is beating fast and my hands are ( ).",
    "Answer ①": "sweating",
    "Sentence ②": "He was ( ) despite the cold weather.",
    "Answer ②": "sweating",
    "Definition": "if you ( ), liquid comes out through your skin"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "wipe (v.)",
    "Sentence ①": "I quickly ( ) them on my jeans and slowly climb the steps into the van.",
    "Answer ①": "wipe",
    "Sentence ②": "Paul ( ) his face with a handkerchief.",
    "Answer ②": "wiped",
    "Definition": "to remove liquid or dirt from a surface, especially using a cloth or your hand"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "faint (v.)",
    "Sentence ①": "When he looks at me and smiles, I think I will ( ).",
    "Answer ①": "faint",
    "Sentence ②": "I ( ) from loss of blood.",
    "Answer ②": "fainted",
    "Definition": "if you ( ), you become unconscious for a short time"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "pleased (adj.)",
    "Sentence ①": "“I... I’m really ( )... I mean... that’s great!”",
    "Answer ①": "pleased",
    "Sentence ②": "Both girls were ( ) with their new hairstyles.",
    "Answer ②": "pleased",
    "Definition": "happy about something or satisfied with something"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "properly (adv.)",
    "Sentence ①": "I can’t talk ( ) anymore!",
    "Answer ①": "properly",
    "Sentence ②": "I'm trying to get my daughter to behave ( ).",
    "Answer ②": "properly",
    "Definition": "correctly or in a way that is considered right"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "exist (v.)",
    "Sentence ①": "I’m nervous but soon I’m in a world where only music ( ).",
    "Answer ①": "exists",
    "Sentence ②": "Many different kinds of animals ( ) on Earth.",
    "Answer ②": "exist",
    "Definition": "to happen or to be real or alive"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "embarrassed (adj.)",
    "Sentence ①": "I start to sing and only when the song is over, do I open my eyes, instantly ( ) once more.",
    "Answer ①": "embarrassed",
    "Sentence ②": "I feel very ( ) whenever I talked to her.",
    "Answer ②": "embarrassed",
    "Definition": "if you feel ( ), you feel nervous or uncomfortable about what other people think about you"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "talent (n.)",
    "Sentence ①": "I’d like to introduce you to a young woman who has an amazing voice and an amazing ( ).",
    "Answer ①": "talent",
    "Sentence ②": "She showed a ( ) for garden design.",
    "Answer ②": "talent",
    "Definition": "a natural ability to do something well"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "emotion (n.)",
    "Sentence ①": "At first my voice shakes with ( ), but then I close my eyes, feel Murphy’s touch.",
    "Answer ①": "emotion",
    "Sentence ②": "She was trying to control her ( ).",
    "Answer ②": "emotions",
    "Definition": "a strong feeling such as love, hate, anger etc"
  },
  {
    "Book": "BP6 A Dream Come True",
    "Chapter": 8,
    "Word": "applause (n.)",
    "Sentence ①": "After a final ( ), I leave the stage and Murphy continues with his performance.",
    "Answer ①": "applause",
    "Sentence ②": "They gave him a round of ( ).",
    "Answer ②": "applause",
    "Definition": "the sound of people hitting their hands together to show that they have enjoyed a play, concert, speaker etc"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "insist (v.)",
    "Sentence ①": "I didn't really want to go to the restaurant but he ( ).",
    "Answer ①": "insisted",
    "Sentence ②": "My sister ( ) that she didn't eat the last cookie.",
    "Answer ②": "insists",
    "Definition": "① to demand that something should happen ② to say firmly and often that something is true, especially when other people do not believe you"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "require (v.)",
    "Sentence ①": "A passport is ( ) for traveling overseas.",
    "Answer ①": "required",
    "Sentence ②": "The job ( ) knowledge of computers.",
    "Answer ②": "requires",
    "Definition": "to need something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "effort (n.)",
    "Sentence ①": "Alex made an ( ) to get first place in the race.",
    "Answer ①": "effort",
    "Sentence ②": "Every member in the company is making ( ) to increase profit.",
    "Answer ②": "efforts",
    "Definition": "an attempt to do something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "loyal (adj.)",
    "Sentence ①": "All the soldiers are ( ) to their king.",
    "Answer ①": "loyal",
    "Sentence ②": "A ( ) servant would do anything for his master.",
    "Answer ②": "loyal",
    "Definition": "always supporting your friends, beliefs, country etc"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "brief (adj.)",
    "Sentence ①": "The meeting was ( ). It only took 5 minutes.",
    "Answer ①": "brief",
    "Sentence ②": "I paid a ( ) visit to my friend Jonathan since he was sick.",
    "Answer ②": "brief",
    "Definition": "continuing for only a short time"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "firm (adj.)",
    "Sentence ①": "The scared little girl held my hand with a ( ) grip.",
    "Answer ①": "firm",
    "Sentence ②": "Make sure the ladder is ( ) before you climb up.",
    "Answer ②": "firm",
    "Definition": "① a way of holding something tightly and strongly ② strongly fixed in position, and not likely to move"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "stare (v.)",
    "Sentence ①": "The monkey was ( ) at a mirror curiously.",
    "Answer ①": "staring",
    "Sentence ②": "Don't look at me like that. It's not nice to ( ).",
    "Answer ②": "stare",
    "Definition": "to look at someone or something for a long time"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "typical (adj.)",
    "Sentence ①": "Kim is a ( ) teenage girl who cannot let go of her mobile phone.",
    "Answer ①": "typical",
    "Sentence ②": "( ) Japanese people like sushi.",
    "Answer ②": "Typical",
    "Definition": "a ( ) person or thing has the usual qualities or features that people expect them to have"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 1,
    "Word": "untidy (adj.)",
    "Sentence ①": "My hair was ( ) after playing soccer.",
    "Answer ①": "untidy",
    "Sentence ②": "Julia's room is always ( ) since she never cleans it.",
    "Answer ②": "untidy",
    "Definition": "not neat"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "make a bet (phr.v.)",
    "Sentence ①": "The boys in the class are ( ) ( ) ( ) on who would win the school marathon.",
    "Answer ①": "making a bet",
    "Sentence ②": "“I think John will be late tomorrow.” “I don’t think so. Do you want to ( ) ( ) ( )?”",
    "Answer ②": "make a bet",
    "Definition": "if you have a bet on something, you try to win money by saying what the result of a game, race, or competition will be"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "exact (adj.)",
    "Sentence ①": "The doctors don’t know the ( ) cause of the disease.",
    "Answer ①": "exact",
    "Sentence ②": "My watch is broken. Do you know the ( ) time?",
    "Answer ②": "exact",
    "Definition": "correct in every detail"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "robbery (n.)",
    "Sentence ①": "The ( ) at the bank took place at exactly 7 o’clock.",
    "Answer ①": "robbery",
    "Sentence ②": "The police caught three men who were planning a ( ).",
    "Answer ②": "robbery",
    "Definition": "the crime of stealing money or other things from a bank, shop etc"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "detective (n.)",
    "Sentence ①": "The police asked the ( ) to investigate the crime scene.",
    "Answer ①": "detective",
    "Sentence ②": "Conan Doyle is a famous author of ( ) stories.",
    "Answer ②": "detective",
    "Definition": "a police officer whose job is to discover who is responsible for crimes"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "investigation (n.)",
    "Sentence ①": "The police were starting an ( ) on the local gang members.",
    "Answer ①": "investigation",
    "Sentence ②": "The driver who caused the accident is now under ( ).",
    "Answer ②": "investigation",
    "Definition": "an official attempt to find out about something, especially a crime or accident"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "consider (v.)",
    "Sentence ①": "Have you ( ) getting a new car?",
    "Answer ①": "considered",
    "Sentence ②": "We’re still ( ) where to move to.",
    "Answer ②": "considering",
    "Definition": "to think about something carefully, especially before making a decision"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "departure (n.)",
    "Sentence ①": "We walked up to the ( ) gate to say goodbye to our friend.",
    "Answer ①": "departure",
    "Sentence ②": "The Smiths hurried to the airport as they only had an hour till ( ).",
    "Answer ②": "departure",
    "Definition": "when a person, plane, train, etc leaves a place"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "genius (n.)",
    "Sentence ①": "Marie is a math ( ). She gets 100 on all of her tests.",
    "Answer ①": "genius",
    "Sentence ②": "Alfred Nobel was a ( ) who invented the dynamite.",
    "Answer ②": "genius",
    "Definition": "someone who has an unusually high level of intelligence, ability, or skill"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 2,
    "Word": "evidence (n.)",
    "Sentence ①": "There was no ( ) that the driver had been drinking.",
    "Answer ①": "evidence",
    "Sentence ②": "Medical ( ) shows that men are more likely to have heart attacks than women.",
    "Answer ②": "evidence",
    "Definition": "facts or signs that show that someone is true or that something exists"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "criminal (n.)",
    "Sentence ①": "The police chased the ( ) with a police car.",
    "Answer ①": "criminal",
    "Sentence ②": "Five ( ) escaped from jail by digging a huge tunnel.",
    "Answer ②": "criminals",
    "Definition": "someone who has done something wrong or illegal"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "make sense (phr.v.)",
    "Sentence ①": "Bobby’s excuses did not ( ) ( ) at all.",
    "Answer ①": "make sense",
    "Sentence ②": "Peter tried to answer the teacher's questions, but his answer ( ) no ( ).",
    "Answer ②": "made sense",
    "Definition": "to have a clear meaning and be easy to understand"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "respectable (adj.)",
    "Sentence ①": "Mr. John is a highly ( ) man.",
    "Answer ①": "respectable",
    "Sentence ②": "A ( ) middle-aged lady smiled gently.",
    "Answer ②": "respectable",
    "Definition": "someone who is ( ) behaves in a way that is socially acceptable"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "discover (v.)",
    "Sentence ①": "Police ( ) 500 kilograms of dynamite in the house.",
    "Answer ①": "discovered",
    "Sentence ②": "I want to be a scientist who ( ) many new things.",
    "Answer ②": "discovers",
    "Definition": "① to find someone or something, either by accident or because you were looking for them ② to learn something that you did not know about before"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "arrest (n/v.)",
    "Sentence ①": "The man was under ( ) for committing murder.",
    "Answer ①": "arrest",
    "Sentence ②": "The police ( ) 5 boys for breaking the window of shops.",
    "Answer ②": "arrested",
    "Definition": "① when the police take someone away and guard them because they may have done something illegal ② If the police ( ) someone, the person is taken away because the police think they have done something illegal"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "madness (n.)",
    "Sentence ①": "It was ( ) to drive in this terrible snowstorm.",
    "Answer ①": "madness",
    "Sentence ②": "Stores are preparing for the annual holiday shopping ( ).",
    "Answer ②": "madness",
    "Definition": "very stupid and often dangerous behavior"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "escape (v.)",
    "Sentence ①": "The birds ( ) from their cages.",
    "Answer ①": "escaped",
    "Sentence ②": "I was trying hard to kill a fly, but it kept ( ).",
    "Answer ②": "escaping",
    "Definition": "to leave a place or dangerous situation when someone is trying to catch you or stop you"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 3,
    "Word": "detailed (adj.)",
    "Sentence ①": "My mother drew me a ( ) map to Mrs. Taylor's house.",
    "Answer ①": "detailed",
    "Sentence ②": "Furniture makers produced beautifully ( ) chairs.",
    "Answer ②": "detailed",
    "Definition": "① including a lot of information ② having a lot of decorations or small features that are difficult to produce"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "celebrate (v.)",
    "Sentence ①": "We visited my grandmother’s house to ( ) Christmas.",
    "Answer ①": "celebrate",
    "Sentence ②": "The whole country was ( ) the end of the war.",
    "Answer ②": "celebrating",
    "Definition": "to do something enjoyable because it is a special occasion or because something good has happened"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "local (adj.)",
    "Sentence ①": "I went to the ( ) library to rent some books.",
    "Answer ①": "local",
    "Sentence ②": "You can buy this notebook from your ( ) supermarket.",
    "Answer ②": "local",
    "Definition": "relating to a particular area, especially the area you live in"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "exist (v.)",
    "Sentence ①": "Dinosaurs do not ( ) anymore.",
    "Answer ①": "exist",
    "Sentence ②": "Do you really think aliens ( )? I don’t think so.",
    "Answer ②": "exist",
    "Definition": "to happen or to be real or alive"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "take a risk (phr.v.)",
    "Sentence ①": "My father ( ) ( ) ( ) and sold his company.",
    "Answer ①": "took a risk",
    "Sentence ②": "I wanted to ( ) ( ) ( ) at life so I signed up to go skydiving.",
    "Answer ②": "take a risk",
    "Definition": "to do something even though you know it is dangerous or you may not succeed"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "crowd (n.)",
    "Sentence ①": "The ( ) went crazy when the rock stars came on to the stage.",
    "Answer ①": "crowd",
    "Sentence ②": "There were ( ) of shoppers in the street.",
    "Answer ②": "crowds",
    "Definition": "a large group of people in one place"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "sacrifice (n.)",
    "Sentence ①": "The villager hoped the gods would accept their ( ).",
    "Answer ①": "sacrifice",
    "Sentence ②": "The goat was brought to the temple as a ( ) to god.",
    "Answer ②": "sacrifice",
    "Definition": "when something is offered to a god in a ceremony, especially an animal that is killed"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "fortunately (adv.)",
    "Sentence ①": "( ) the plane was delayed and we missed the storm.",
    "Answer ①": "Fortunately",
    "Sentence ②": "I was late for class, but ( ) the teacher came in late too.",
    "Answer ②": "fortunately",
    "Definition": "happening because of good luck"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "determined (adj.)",
    "Sentence ①": "I am ( ) to get into Tokyo University so I study about 10 hours every day.",
    "Answer ①": "determined",
    "Sentence ②": "Our team is ( ) to become the champion in the tournament.",
    "Answer ②": "determined",
    "Definition": "wanting to do something very much, so that you will not let anything stop you"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 4,
    "Word": "repair (v.)",
    "Sentence ①": "A mechanic is ( ) our broken car.",
    "Answer ①": "repairing",
    "Sentence ②": "I had to ( ) my shoes by tonight to wear them to the party.",
    "Answer ②": "repair",
    "Definition": "to make something that is broken or damaged satisfactory again"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "opportunity (n.)",
    "Sentence ①": "I had a rare ( ) to meet the President.",
    "Answer ①": "opportunity",
    "Sentence ②": "The party seemed like the ( ) to meet new people.",
    "Answer ②": "opportunity",
    "Definition": "a chance to do something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "recognize (v.)",
    "Sentence ①": "I ( ) my mom straight away in the crowd.",
    "Answer ①": "recognized",
    "Sentence ②": "When I met John for the first time in 10 years, I couldn’t ( ) him.",
    "Answer ②": "recognize",
    "Definition": "to know who someone is or what something is because you have seen or heard them before"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "out of breath (phr.)",
    "Sentence ①": "I was ( ) ( ) ( ) from running up the stairs.",
    "Answer ①": "out of breath",
    "Sentence ②": "The swimmer was ( ) ( ) ( ) when he finished his race.",
    "Answer ②": "out of breath",
    "Definition": "having difficulty breathing, especially after exercise"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "complete (v.)",
    "Sentence ①": "Students must ( ) their homework by Monday.",
    "Answer ①": "complete",
    "Sentence ②": "The building took two years to ( ).",
    "Answer ②": "complete",
    "Definition": "to finish doing or making something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "company (n.)",
    "Sentence ①": "Her dogs are her only ( ) these days.",
    "Answer ①": "company",
    "Sentence ②": "The two men enjoyed each other’s ( ).",
    "Answer ②": "company",
    "Definition": "a situation in which someone is with you and you are not alone"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "neighbor (n.)",
    "Sentence ①": "We had a picnic with our close ( ).",
    "Answer ①": "neighbors",
    "Sentence ②": "One of the ( ) complained about the noise from the party.",
    "Answer ②": "neighbors",
    "Definition": "someone who lives next to you or near you"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "hopeless (adj.)",
    "Sentence ①": "I felt ( ) after seeing how difficult the exam was going to be.",
    "Answer ①": "hopeless",
    "Sentence ②": "We tried to put the fire out, but it seemed ( ).",
    "Answer ②": "hopeless",
    "Definition": "① feeling that you have no hope ② if something you try to do is ( ), it is certain to fail"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "advertisement (n.)",
    "Sentence ①": "The ( ) for the new drink seemed to work.",
    "Answer ①": "advertisement",
    "Sentence ②": "The company put a job ( ) in the newspaper.",
    "Answer ②": "advertisement",
    "Definition": "a picture, set of words, or short film that is intended to persuade people to buy something, or that gives information about a concert, film, job etc"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 5,
    "Word": "audience (n.)",
    "Sentence ①": "The ( ) clapped at the end of the ballet performance.",
    "Answer ①": "audience",
    "Sentence ②": "The ( ) was thrilled to see the band play.",
    "Answer ②": "audience",
    "Definition": "the people who watch or listen to a performance"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "direction (n.)",
    "Sentence ①": "Do you know which ( ) they went?",
    "Answer ①": "direction",
    "Sentence ②": "We walked to the ( ) where the compass was pointing.",
    "Answer ②": "direction",
    "Definition": "the place that you are moving, facing, or pointing towards"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "interrupt (v.)",
    "Sentence ①": "You shouldn't ( ) people while they are speaking.",
    "Answer ①": "interrupt",
    "Sentence ②": "Sorry to ( ), but I need to ask you a quick question.",
    "Answer ②": "interrupt",
    "Definition": "to stop someone while they are speaking or doing something by suddenly speaking to them, making a noise"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "protest (n.)",
    "Sentence ①": "The students participated in the ( ) against war.",
    "Answer ①": "protests",
    "Sentence ②": "Some people died in the street ( ).",
    "Answer ②": "protests",
    "Definition": "when you do something to show publicly that you think something is wrong"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "coward (n.)",
    "Sentence ①": "Try it. Don't be such a ( ).",
    "Answer ①": "coward",
    "Sentence ②": "The kids called him a ( ) because he was afraid of dogs.",
    "Answer ②": "coward",
    "Definition": "someone who is not at all brave"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "defend (v.)",
    "Sentence ①": "We must ( ) our country against enemies.",
    "Answer ①": "defend",
    "Sentence ②": "Stop ( ) him. What he did was wrong.",
    "Answer ②": "defending",
    "Definition": "① to do something in order to protect someone or something from being attacked ② to use arguments to protect something or someone from criticism, or to prove that something is right"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "honour (n.)",
    "Sentence ①": "My father was a man of ( ) and was well-respected.",
    "Answer ①": "honour",
    "Sentence ②": "He would not do such a thing out of ( ).",
    "Answer ②": "honour",
    "Definition": "when someone is honest, and behaves in a way that makes people respect and trust them"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "impatient (adj.)",
    "Sentence ①": "My daughter becomes grumpy when she is ( ) for dinner.",
    "Answer ①": "impatient",
    "Sentence ②": "Roy gets ( ) when people drive too slow in front of him.",
    "Answer ②": "impatient",
    "Definition": "annoyed because of delays or mistakes that make you wait"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "occupied (adj.)",
    "Sentence ①": "She's fully ( ) with work.",
    "Answer ①": "occupied",
    "Sentence ②": "I kept myself ( ) by watching TV.",
    "Answer ②": "occupied",
    "Definition": "busy doing something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 6,
    "Word": "solution (n.)",
    "Sentence ①": "The ( ) to our problem may not be too far away. Let's try a little more.",
    "Answer ①": "solution",
    "Sentence ②": "All the ( ) to these questions are at the back of the book.",
    "Answer ②": "solutions",
    "Definition": "a way of solving a problem or dealing with a difficult situation"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "delay (n.)",
    "Sentence ①": "Long ( ) are expected due to heavy storm.",
    "Answer ①": "delays",
    "Sentence ②": "We apologize for the ( ) in answering your letter, said the secretary.",
    "Answer ②": "delay",
    "Definition": "When you have to wait for something to happen, or the time you have to wait"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "companion (n.)",
    "Sentence ①": "His dog became his closest ( ).",
    "Answer ①": "companion",
    "Sentence ②": "Jeff and Tim traveled as ( ) around the world.",
    "Answer ②": "companions",
    "Definition": "someone you spend a lot of time with, or who travels somewhere with you"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "bravely (adv.)",
    "Sentence ①": "The little girl stood ( ) in front of the audience and started singing.",
    "Answer ①": "bravely",
    "Sentence ②": "The firefighter ( ) jumped in the fire to rescue a lady who got left behind.",
    "Answer ②": "bravely",
    "Definition": "showing that you are not afraid to do something that is dangerous, frightening, or difficult"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "separate (v.)",
    "Sentence ①": "The police ( ) themselves into two groups and chased the criminals.",
    "Answer ①": "separated",
    "Sentence ②": "My sister likes to ( ) the M&M's by color before eating.",
    "Answer ②": "separate",
    "Definition": "to divide or split something into different parts"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "give (someone) trouble (phr.v.)",
    "Sentence ①": "If anybody ( ) you ( ), please let me know. I will help you.",
    "Answer ①": "gives you trouble",
    "Sentence ②": "If I ( ) her ( ) she will be mad at me.",
    "Answer ②": "give her trouble",
    "Definition": "to cause problems or difficulties"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "in the distance (phr.)",
    "Sentence ①": "We could hear wolves howling ( ) ( ) ( ).",
    "Answer ①": "in the distance",
    "Sentence ②": "( ) ( ) ( ), we were able to see Mt. Fuji.",
    "Answer ②": "In the distance",
    "Definition": "a place that is far away"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "except (adv.)",
    "Sentence ①": "Amy works every day ( ) on Sundays.",
    "Answer ①": "except",
    "Sentence ②": "They all came to the party ( ) Matt.",
    "Answer ②": "except",
    "Definition": "not including someone or something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 7,
    "Word": "icy (adj.)",
    "Sentence ①": "During winter, the water in the lake is ( ) and clear.",
    "Answer ①": "icy",
    "Sentence ②": "I love the ( ) lemonade my mother makes us on a hot summer day.",
    "Answer ②": "icy",
    "Definition": "extremely cold"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "upset (adj.)",
    "Sentence ①": "I was really ( ) when my dog went missing.",
    "Answer ①": "upset",
    "Sentence ②": "John was ( ) when he broke up with Joanne.",
    "Answer ②": "upset",
    "Definition": "unhappy because something unpleasant or disappointing has happened"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "fault (n.)",
    "Sentence ①": "It is your ( ) that you missed the bus so don't blame me!",
    "Answer ①": "fault",
    "Sentence ②": "It was John's ( ) that we couldn't play soccer because he forgot the ball.",
    "Answer ②": "fault",
    "Definition": "if something bad that happens is your ( ) you are responsible for it happening"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "responsible (adj.)",
    "Sentence ①": "The police tried hard to find out who was ( ) for the accident.",
    "Answer ①": "responsible",
    "Sentence ②": "Parents are ( ) for their children's health and education.",
    "Answer ②": "responsible",
    "Definition": "① if you are ( ) for something bad that has happened, you caused it and you are the person who should be blamed ② if you are ( ) for someone, you are in charge of it or it is your job to do it"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "generous (adj.)",
    "Sentence ①": "My boss was ( ) and paid for dinner.",
    "Answer ①": "generous",
    "Sentence ②": "A ( ) man donated most of his money to charity.",
    "Answer ②": "generous",
    "Definition": "someone who is ( ) is kind and enjoys giving people things or helping them"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "scratch (v.)",
    "Sentence ①": "I told my sister to stop ( ) her mosquito bite.",
    "Answer ①": "scratching",
    "Sentence ②": "The dog ( ) itself with its leg.",
    "Answer ②": "scratched",
    "Definition": "to rub your skin with your nails to stop it feeling uncomfortable"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "stormy (adj.)",
    "Sentence ①": "Last night it was very ( ).",
    "Answer ①": "stormy",
    "Sentence ②": "The sky was starting to look ( ).",
    "Answer ②": "stormy",
    "Definition": "with strong winds, heavy rain, and dark clouds"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "concentrate (v.)",
    "Sentence ①": "I couldn't ( ) during the test because the children outside were loud.",
    "Answer ①": "concentrate",
    "Sentence ②": "The students ( ) well and worked hard on their final exam.",
    "Answer ②": "concentrated",
    "Definition": "to think very carefully about something you are doing"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "remain (v.)",
    "Sentence ①": "She ( ) in Boston after she finished college.",
    "Answer ①": "remained",
    "Sentence ②": "Can you ( ) in the room? I want to have a word with you.",
    "Answer ②": "remain",
    "Definition": "to stay in the same place or condition"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 8,
    "Word": "voyage (n.)",
    "Sentence ①": "The Titanic sank on its first ( ).",
    "Answer ①": "voyage",
    "Sentence ②": "My uncle went on a ( ) to see the world.",
    "Answer ②": "voyage",
    "Definition": "a long trip, especially in a ship or space vehicle"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "honest (adj.)",
    "Sentence ①": "Peter is an ( ) man who never lies.",
    "Answer ①": "honest",
    "Sentence ②": "He is always ( ) with his children.",
    "Answer ②": "honest",
    "Definition": "someone who is ( ) does not lie, cheat, or steal"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "routine (n.)",
    "Sentence ①": "The workers at the factory follow the same ( ) from 9am to 5pm.",
    "Answer ①": "routine",
    "Sentence ②": "It is very hard for me to follow my exercise ( ).",
    "Answer ②": "routine",
    "Definition": "the usual way that you do things or the things you do regularly"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "possession (n.)",
    "Sentence ①": "The man was arrested for having a gun in his ( ).",
    "Answer ①": "possession",
    "Sentence ②": "The pirate had in his ( ) a treasure map.",
    "Answer ②": "possession",
    "Definition": "when you have or own something"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "poverty (n.)",
    "Sentence ①": "Many children in the world are being raised in ( ).",
    "Answer ①": "poverty",
    "Sentence ②": "( ) issues have been rising every year in Africa.",
    "Answer ②": "Poverty",
    "Definition": "when people are extremely poor"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "immediately (adv.)",
    "Sentence ①": "As Tom woke up late, he got changed ( ) and ran to school.",
    "Answer ①": "immediately",
    "Sentence ②": "Mr. Jones, please come to my office ( ).",
    "Answer ②": "immediately",
    "Definition": "quickly and without any delay"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "ahead (adv.)",
    "Sentence ①": "My watch is broken and it's 2 minutes ( ).",
    "Answer ①": "ahead",
    "Sentence ②": "The flight was very smooth so we were ( ) of schedule.",
    "Answer ②": "ahead",
    "Definition": "① in or into the future ② earlier than planned or arranged"
  },
  {
    "Book": "BP6 Around the World in 80 Days",
    "Chapter": 9,
    "Word": "fortune (n.)",
    "Sentence ①": "By good ( ), I was able to find a new job quickly.",
    "Answer ①": "fortune",
    "Sentence ②": "My grandmother told my ( ) with Tarot cards.",
    "Answer ②": "fortune",
    "Definition": "① chance or luck ② the good and bad things that happen to you"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "pick (something) up (phr. v.)",
    "Sentence ①": "Elephants had large noses, but they could not ( ) things ( ) with them.",
    "Answer ①": "pick up",
    "Sentence ②": "I ( ) the phone ( ) when it started to ring.",
    "Answer ②": "picked up",
    "Definition": "to lift someone or something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "punish (v.)",
    "Sentence ①": "The ostrich was angry, so she ( ) the Elephant’s Child.",
    "Answer ①": "punished",
    "Sentence ②": "You get ( ) for telling a lie.",
    "Answer ②": "punished",
    "Definition": "to do something unpleasant to someone because they have done something wrong"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "shout (v.)",
    "Sentence ①": "“Be quiet!” ( ) everybody at the Elephant’s Child.",
    "Answer ①": "shouted",
    "Sentence ②": "You should stop ( ) at the children.",
    "Answer ②": "shouting",
    "Definition": "to say something very loudly"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "unhappy (adj.)",
    "Sentence ①": "The Elephant’s Child was ( ) for a long time.",
    "Answer ①": "unhappy",
    "Sentence ②": "Lisa was ( ) with her job, so she got a new one.",
    "Answer ②": "unhappy",
    "Definition": "① not happy ② feeling worried or annoyed because you do not like what is happening in a situation"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "moment (n.)",
    "Sentence ①": "The Kolokolo bird thought for a ( ).",
    "Answer ①": "moment",
    "Sentence ②": "The next train will arrive in a ( ).",
    "Answer ②": "moment",
    "Definition": "a very short period of time"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "reply (v.)",
    "Sentence ①": "“Yes,” ( ) the Elephant’s Child.",
    "Answer ①": "replied",
    "Sentence ②": "I will ( ) to my grandparent’s letter tomorrow.",
    "Answer ②": "reply",
    "Definition": "to answer"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "immediately (adv.)",
    "Sentence ①": "“I’ll go there ( ),” the Elephant’s Child decided.",
    "Answer ①": "immediately",
    "Sentence ②": "If there is fire, close the window ( ).",
    "Answer ②": "immediately",
    "Definition": "quickly and without any delay"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 1,
    "Word": "politely (adv.)",
    "Sentence ①": "“Where is the crocodile?” he asked ( ).",
    "Answer ①": "politely",
    "Sentence ②": "The man ( ) bowed to his neighbor.",
    "Answer ②": "politely",
    "Definition": "speaking or behaving in a way that shows respect for other people"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "arrive (v.)",
    "Sentence ①": "The python snake ( ) at that moment.",
    "Answer ①": "arrived",
    "Sentence ②": "I usually ( ) home at 7 o’clock.",
    "Answer ②": "arrive",
    "Definition": "to get to a place"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "suddenly (adv.)",
    "Sentence ①": "( ) the Elephant’s Child gave an extra hard pull, and he was free!",
    "Answer ①": "Suddenly",
    "Sentence ②": "I ( ) realized that I was on a wrong bus.",
    "Answer ②": "suddenly",
    "Definition": "if something happens ( ), it happens quickly, when you are not expecting it"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "extra (adj.)",
    "Sentence ①": "Suddenly, the Elephant’s Child gave an ( ) hard pull, and he was free!",
    "Answer ①": "extra",
    "Sentence ②": "Sam got a pizza with ( ) cheese.",
    "Answer ②": "extra",
    "Definition": "in addition to the usual things or amount"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "perhaps (adv.)",
    "Sentence ①": "“( ) you’ll like it one day,” the python said.",
    "Answer ①": "Perhaps",
    "Sentence ②": "There are gray clouds. ( ) it will rain soon.",
    "Answer ②": "Perhaps",
    "Definition": "used to say that something may be true, but you are not sure"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "trunk (n.)",
    "Sentence ①": "It’s too long for a nose. We’ll call it a ( ).",
    "Answer ①": "trunk",
    "Sentence ②": "Elephants use their ( ) to eat food.",
    "Answer ②": "trunks",
    "Definition": "the long nose of an elephant"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "lift (v.)",
    "Sentence ①": "The Elephant’s Child ( ) his trunk and hit the mosquito.",
    "Answer ①": "lifted",
    "Sentence ②": "Can you help me ( ) this heavy box?",
    "Answer ②": "lift",
    "Definition": "to move something or someone to a higher position"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 2,
    "Word": "useful (adj.)",
    "Sentence ①": "A trunk is a good thing. It is very ( ).",
    "Answer ①": "useful",
    "Sentence ②": "This map is ( ) because it has many pictures.",
    "Answer ②": "useful",
    "Definition": "something that is ( ) helps you to do or get what you want"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "deliver (v.)",
    "Sentence ①": "The company ( ) parcels all over America.",
    "Answer ①": "delivered",
    "Sentence ②": "A postman ( ) letters to houses every day.",
    "Answer ②": "delivers",
    "Definition": "to take something to a place"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "indicate (v.)",
    "Sentence ①": "Mr. Flannery ( ) the box in front of him.",
    "Answer ①": "indicated",
    "Sentence ②": "“That way please,” said the policeman, ( ) the door.",
    "Answer ②": "indicating",
    "Definition": "to direct someone's attention to something or someone, for example by pointing"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "contain (v.)",
    "Sentence ①": "The box ( ) two guinea pigs.",
    "Answer ①": "contained",
    "Sentence ②": "This brownie ( ) some milk and nuts.",
    "Answer ②": "contains",
    "Definition": "to have something inside"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "price (n.)",
    "Sentence ①": "The ( ) for pigs is 30 cents each.",
    "Answer ①": "price",
    "Sentence ②": "The ( ) for rice is higher now than it was 30 years ago.",
    "Answer ②": "price",
    "Definition": "the amount of money you have to pay for something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "ordinary (adj.)",
    "Sentence ①": "That rule means ( ) pigs, not guinea pigs.",
    "Answer ①": "ordinary",
    "Sentence ②": "Although it was an ( ) camera, the boy was happy to get his own.",
    "Answer ②": "ordinary",
    "Definition": "average, common, or usual, not different or special"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "obvious (adj.)",
    "Sentence ①": "It’s ( ) that the rule is for normal pigs.",
    "Answer ①": "obvious",
    "Sentence ②": "It was ( ) from the smile that John was lying.",
    "Answer ②": "obvious",
    "Definition": "easy to notice or understand"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "refuse (v.)",
    "Sentence ①": "“I offered you 50 cents and you ( ),” said Mr. Morehouse.",
    "Answer ①": "refused",
    "Sentence ②": "The child ( ) to go to school and stays in his room.",
    "Answer ②": "refuses",
    "Definition": "to say firmly that you will not do or accept something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "count (v.)",
    "Sentence ①": "The man began to ( ) the pigs carefully.",
    "Answer ①": "count",
    "Sentence ②": "Richard smiled when he ( ) how many days there were till his birthday.",
    "Answer ②": "counted",
    "Definition": "to try to find out how many people or things there are in a group"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 3,
    "Word": "collect (v.)",
    "Sentence ①": "“( ) the $2.00 from Mr. Morehouse”, said Morgan.",
    "Answer ①": "Collect",
    "Sentence ②": "The teacher ( ) everyone’s papers at the end of the test.",
    "Answer ②": "collected",
    "Definition": "to get things and bring them together"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "bill (n.)",
    "Sentence ①": "I’ve got a ( ) for $2.00 for their food. Will you pay it?",
    "Answer ①": "bill",
    "Sentence ②": "My father pays for the gas ( ) at the end of the month.",
    "Answer ②": "bill",
    "Definition": "a list of things that you have bought or that someone has done for you, showing how much you have to pay them"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "exclaim (v.)",
    "Sentence ①": "“$2.00!” ( ) Mr. Morehouse, looking surprised.",
    "Answer ①": "exclaimed",
    "Sentence ②": "“Why did you do this?” ( ) Mary angrily.",
    "Answer ②": "exclaimed",
    "Definition": "to suddenly say something loudly, because you are surprised, excited, or angry"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "ridiculous (adj.)",
    "Sentence ①": "“$2.00 for food for two guinea pigs. That’s ( )!”",
    "Answer ①": "ridiculous",
    "Sentence ②": "Your pink and yellow shirt looks ( )!",
    "Answer ②": "ridiculous",
    "Definition": "very silly"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "certainly (adv.)",
    "Sentence ①": "That’s ridiculous! I ( ) won’t pay for the food.",
    "Answer ①": "certainly",
    "Sentence ②": "Anne likes to talk in front of class. She is ( ) not shy.",
    "Answer ②": "certainly",
    "Definition": "without any doubt"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "expert (n.)",
    "Sentence ①": "Professor Gordon will know because he is an ( ).",
    "Answer ①": "expert",
    "Sentence ②": "Our history teacher is an ( ) on Japanese traditional art.",
    "Answer ②": "expert",
    "Definition": "someone who has a lot of knowledge about a subject or is very skillful at doing something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "unfortunately (adv.)",
    "Sentence ①": "( ), Professor Gordon was in South America.",
    "Answer ①": "Unfortunately",
    "Sentence ②": "( ), the parade had to be canceled because of bad weather.",
    "Answer ②": "Unfortunately",
    "Definition": "used to say that you wish something had not happened or say was not true"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "belong to (phr.)",
    "Sentence ①": "The pigs ( ) ( ) Mr. Morehouse.",
    "Answer ①": "belong to",
    "Sentence ②": "I think this blue jacket ( ) ( ) James.",
    "Answer ②": "belongs to",
    "Definition": "if something ( ) ( ) you, you own it"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 4,
    "Word": "inspector (n.)",
    "Sentence ①": "The company sent an ( ) to Mr. Flannery’s office.",
    "Answer ①": "inspector",
    "Sentence ②": "A school ( ) visited our school to check if everything was ok.",
    "Answer ②": "inspector",
    "Definition": "someone whose job is to check that something is satisfactory and that rules are being obeyed"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "jealous (adj.)",
    "Sentence ①": "Mr. Packletide was ( ) of her friend’s adventure.",
    "Answer ①": "jealous",
    "Sentence ②": "Sam was ( ) of his friend who got better grades than him.",
    "Answer ②": "jealous",
    "Definition": "unhappy because someone else has something that you wish you had"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "offer (v.)",
    "Sentence ①": "Mrs. Packletide ( ) the Indians in the village 1,000 rupees for a tiger.",
    "Answer ①": "offered",
    "Sentence ②": "The company has agreed to ( ) the house for 20 million yen.",
    "Answer ②": "offer",
    "Definition": "to say that you will pay a particular amount of money for something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "worth (adj.)",
    "Sentence ①": "The tiger is old, so it’s not ( ) 1,000 rupees.",
    "Answer ①": "worth",
    "Sentence ②": "There are 5 questions on the test, and each of them is ( ) two points.",
    "Answer ②": "worth",
    "Definition": "to have a particular value"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "suggest (v.)",
    "Sentence ①": "“Shoot now!” Miss Mebbin ( ).",
    "Answer ①": "suggested",
    "Sentence ②": "The doctor ( ) that I take a week off from work and rest at home.",
    "Answer ②": "suggested",
    "Definition": "to tell someone your ideas about what should be done"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "pleased (adj.)",
    "Sentence ①": "The Indians were very ( ) looking at the dead tiger.",
    "Answer ①": "pleased",
    "Sentence ②": "My mom was ( ) to see the test result.",
    "Answer ②": "pleased",
    "Definition": "happy about something or satisfied with something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "wound (n.)",
    "Sentence ①": "The goat had a bullet-( ) on its body.",
    "Answer ①": "wound",
    "Sentence ②": "The boy got some ( ) in an accident so he was sent to the hospital.",
    "Answer ②": "wounds",
    "Definition": "a deep cut made in your skin by a knife or a bullet"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "appear (v.)",
    "Sentence ①": "The pictures of Mrs. Packletide and the tiger ( ) in many newspapers.",
    "Answer ①": "appeared",
    "Sentence ②": "Articles about Japanese politics ( ) almost every day in the news.",
    "Answer ②": "appear",
    "Definition": "to be written or shown in a newspaper, book, magazine etc."
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "accept (v.)",
    "Sentence ①": "She did not ( ) Mrs. Packletide’s invitation to lunch.",
    "Answer ①": "accept",
    "Sentence ②": "I happily ( ) the offer to start working at a restaurant.",
    "Answer ②": "accepted",
    "Definition": "to take or agree to something that someone offers you or suggests"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "admire (v.)",
    "Sentence ①": "Everyone ( ) the tiger-skin.",
    "Answer ①": "admired",
    "Sentence ②": "I can’t stop ( ) the Monet painting every time I see it.",
    "Answer ②": "admiring",
    "Definition": "to look at something and think how beautiful or impressive it is"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 5,
    "Word": "satisfied (adj.)",
    "Sentence ①": "Mrs. Packletide was very pleased and ( ) with her adventure.",
    "Answer ①": "satisfied",
    "Sentence ②": "The girl was ( ) with the way he cut her hair.",
    "Answer ②": "satisfied",
    "Definition": "feeling that something is as good as it should be, or that something has happened in the way that you want"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "possess (v.)",
    "Sentence ①": "Only the king can ( ) an elephant in Siam.",
    "Answer ①": "possess",
    "Sentence ②": "There was a terrible fire that burnt down everything that the man ( ).",
    "Answer ②": "possessed",
    "Definition": "to own or have something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "transport (v.)",
    "Sentence ①": "It was my job to ( ) the white elephant from Siam to England.",
    "Answer ①": "transport",
    "Sentence ②": "Ships are usually used for ( ) goods from one country to another.",
    "Answer ②": "transporting",
    "Definition": "to move goods, people etc from one place to another in a vehicle"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "habit (n.)",
    "Sentence ①": "The elephant has a ( ) of spraying people with water.",
    "Answer ①": "habit",
    "Sentence ②": "Biting your nails is a bad ( ).",
    "Answer ②": "habit",
    "Definition": "something that you do regularly or usually, often without thinking about it because you have done it so many times before"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "description (n.)",
    "Sentence ①": "“Make 50,000 copies of this ( ) and photograph,” ordered the detective.",
    "Answer ①": "description",
    "Sentence ②": "This catalog gives a ( ) for each product.",
    "Answer ②": "description",
    "Definition": "something you say or write that tells people what someone or something is like"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "reward (n.)",
    "Sentence ①": "We will have to offer a ( ) for the elephant.",
    "Answer ①": "reward",
    "Sentence ②": "Mr. Smith will give a ( ) of $20 to the person who finds his lost cat.",
    "Answer ②": "reward",
    "Definition": "something, especially money, that is given to someone to thank them for doing something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "astonishment (n.)",
    "Sentence ①": "“Do you know who they are?” I asked in great surprise and ( ).",
    "Answer ①": "astonishment",
    "Sentence ②": "The guests stared in ( ) at the beautiful bride.",
    "Answer ②": "astonishment",
    "Definition": "complete surprise"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 6,
    "Word": "necessary (adj.)",
    "Sentence ①": "Details are ( ) to find the elephant.",
    "Answer ①": "necessary",
    "Sentence ②": "“Do I need to bring any food to the field trip?” “No, that’s not ( )”.",
    "Answer ②": "necessary",
    "Definition": "if something is ( ), you need to have it or do it"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "approach (v.)",
    "Sentence ①": "I liked the way he ( ) the case.",
    "Answer ①": "approached",
    "Sentence ②": "You should first think about how to ( ) the problem, then work on it.",
    "Answer ②": "approach",
    "Definition": "a general way of doing something or dealing with a problem"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "arrest (v.)",
    "Sentence ①": "Why didn’t you ( ) the criminals before the crime?",
    "Answer ①": "arrest",
    "Sentence ②": "The police ( ) two men for stealing.",
    "Answer ②": "arrested",
    "Definition": "if the police ( ) someone, the person is taken away because the police think they have done something illegal"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "commit (v.)",
    "Sentence ①": "We cannot punish crime until it is ( ).",
    "Answer ①": "committed",
    "Sentence ②": "You will be put in jail if you ( ) a crime.",
    "Answer ②": "commit",
    "Definition": "to do something wrong or illegal"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "attach (v.)",
    "Sentence ①": "The Barnum’s idea was to ( ) advertisements to the elephant’s body.",
    "Answer ①": "attach",
    "Sentence ②": "I have ( ) a photo to the letter for my grandparents.",
    "Answer ②": "attached",
    "Definition": "to fasten or join one thing to another"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "advertisement (n.)",
    "Sentence ①": "The Barnum’s idea was to attach ( ) to the elephant’s body.",
    "Answer ①": "advertisements",
    "Sentence ②": "There is an ( ) for the new movie at Shibuya station.",
    "Answer ②": "advertisement",
    "Definition": "a picture, set of words, or short film that is intended to persuade people to buy something, or that gives information about a concert, film, job etc."
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "deserted (adj.)",
    "Sentence ①": "The village is ( ) except for the sick and the old.",
    "Answer ①": "deserted",
    "Sentence ②": "Robinson Crusoe landed on a ( ) island and lived there alone.",
    "Answer ②": "deserted",
    "Definition": "a ( ) place is empty and quiet"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 7,
    "Word": "disturb (v.)",
    "Sentence ①": "The elephant arrived at the village and ( ) a funeral procession.",
    "Answer ①": "disturbed",
    "Sentence ②": "I’m sorry to ( ) you but I need to talk to you now.",
    "Answer ②": "disturb",
    "Definition": "to interrupt someone so that they cannot continue what they are doing"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "responsible (adj.)",
    "Sentence ①": "The elephant was ( ) for many deaths.",
    "Answer ①": "responsible",
    "Sentence ②": "I became the director, so I am (responsible) for the school play.",
    "Answer ②": "responsible",
    "Definition": "① if you are ( ) for something bad that has happened, you caused it and you are the person who should be blamed ② if you are ( ) for something, you are in charge of it or it is your job to do it"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "increase (v.)",
    "Sentence ①": "The inspector suggested ( ) the reward from $25,000 to $50,000.",
    "Answer ①": "increasing",
    "Sentence ②": "There were only 25 students in class but the number ( ), so we now have 35.",
    "Answer ②": "increased",
    "Definition": "if you ( ) something or if it ( )s, it becomes bigger in number, amount or degree"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "rude (adj.)",
    "Sentence ①": "Newspapers made ( ) comments about the inspectors.",
    "Answer ①": "rude",
    "Sentence ②": "Don’t be ( ) to anyone. You should always behave yourself.",
    "Answer ②": "rude",
    "Definition": "speaking or behaving in a way that is not polite"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "remain (v.)",
    "Sentence ①": "Only one man ( ) calm, and that was Inspector Blunt.",
    "Answer ①": "remained",
    "Sentence ②": "My parents left, so I was the only one ( ) at home.",
    "Answer ②": "remaining",
    "Definition": "to stay in the same place or condition"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "following (adj.)",
    "Sentence ①": "The advertisement invited the thief to meet him at midnight the ( ) night.",
    "Answer ①": "following",
    "Sentence ②": "Beth couldn’t stop reading the ( ) chapter of her interesting book.",
    "Answer ②": "following",
    "Definition": "the day, year etc after the one you have just mentioned"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "occasion (n.)",
    "Sentence ①": "That was a happy ( ) for the inspectors to divide the money.",
    "Answer ①": "occasion",
    "Sentence ②": "Christmas is a joyful ( ) for everyone.",
    "Answer ②": "occasion",
    "Definition": "an important event"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "fatally (adj.)",
    "Sentence ①": "The bullets wounded him ( ).",
    "Answer ①": "fatally",
    "Sentence ②": "She was ( ) injured in a car accident.",
    "Answer ②": "fatally",
    "Definition": "resulting in someone's death"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 8,
    "Word": "ruined (adj.)",
    "Sentence ①": "I do not have any money and I am a ( ) man.",
    "Answer ①": "ruined",
    "Sentence ②": "The man was ( ) after too much gambling.",
    "Answer ②": "ruined",
    "Definition": "to make someone lose all their money"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "patience (n.)",
    "Sentence ①": "It takes years and years of ( ) to train some dogs.",
    "Answer ①": "patience",
    "Sentence ②": "Some people don’t have the ( ) to stand in line.",
    "Answer ②": "patience",
    "Definition": "the ability to stay calm and not get angry when you are waiting for something or doing something difficult"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "dignified (adj.)",
    "Sentence ①": "The fox terrier looked at the other dogs who were silent and ( ).",
    "Answer ①": "dignified",
    "Sentence ②": "Everyone in the country respects the ( ) leader.",
    "Answer ②": "dignified",
    "Definition": "behaving in a calm and serious way that makes other people respect you"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "agony (n.)",
    "Sentence ①": "There was a cry of ( ) in the lobby.",
    "Answer ①": "agony",
    "Sentence ②": "A man lay in ( ) after the car accident.",
    "Answer ②": "agony",
    "Definition": "very severe pain, sadness, or worry"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "experiment (n.)",
    "Sentence ①": "The fox terrier was satisfied with the result of his ( ).",
    "Answer ①": "experiment",
    "Sentence ②": "I carried out an ( ) on people’s reactions.",
    "Answer ②": "experiment",
    "Definition": "an occasion when you try something new to see if it will be successful"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "excitement (n.)",
    "Sentence ①": "He decided to continue and create some ( ).",
    "Answer ①": "excitement",
    "Sentence ②": "The stadium was filled with ( ) at the national soccer game.",
    "Answer ②": "excitement",
    "Definition": "the feeling of being excited, or a situation in which you are excited"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "opportunity (n.)",
    "Sentence ①": "This gave the fox terrier the ( ) to fight a little Yorkshire terrier.",
    "Answer ①": "opportunity",
    "Sentence ②": "All students at this school have the ( ) to visit a farm.",
    "Answer ②": "opportunity",
    "Definition": "a chance to do something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "religious (adj.)",
    "Sentence ①": "A crowd of people asked, “Is there a ( ) meeting inside?”",
    "Answer ①": "religious",
    "Sentence ②": "Doug is a ( ) man. He prays five times a day.",
    "Answer ②": "religious",
    "Definition": "relating to religion"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "separate (v.)",
    "Sentence ①": "Some men came with poles and tried to ( ) the fighting dogs.",
    "Answer ①": "separate",
    "Sentence ②": "The class was ( ) into four groups for discussion.",
    "Answer ②": "separated",
    "Definition": "to make people move apart, or to move apart"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "permit (v.)",
    "Sentence ①": "This store must not ( ) big, savage dogs to stay with gentle, little dogs.",
    "Answer ①": "permit",
    "Sentence ②": "Smoking is not ( ) in non-smoking areas.",
    "Answer ②": "permitted",
    "Definition": "to allow something to happen or someone to do something"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 9,
    "Word": "savage (adj.)",
    "Sentence ①": "This store must not permit big, ( ) dogs to stay with gentle, little dogs.",
    "Answer ①": "savage",
    "Sentence ②": "There was a ( ) murderer that killed 6 people.",
    "Answer ②": "savage",
    "Definition": "very cruel or violent"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "gently (adv.)",
    "Sentence ①": "When I meet a cat, I stop and say hello. I touch it ( ).",
    "Answer ①": "gently",
    "Sentence ②": "“Where can I find a restroom?” the old man asked ( ).",
    "Answer ②": "gently",
    "Definition": "not strong, extreme, or violent"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "unforgettable (adj.)",
    "Sentence ①": "Something really ( ) happened when we were in Marlow.",
    "Answer ①": "unforgettable",
    "Sentence ②": "The beauty of the mountains and the lakes of Norway are ( ).",
    "Answer ②": "unforgettable",
    "Definition": "something that is ( ) is extremely good or exciting and you will remember it for a long time"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "happiness (n.)",
    "Sentence ①": "As soon as Montmorency saw a cat, he barked with ( ).",
    "Answer ①": "happiness",
    "Sentence ②": "Amy’s eyes were shining with ( ) when she saw some presents.",
    "Answer ②": "happiness",
    "Definition": "when someone is happy"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "clever (adj.)",
    "Sentence ①": "It was a ( ) street cat.",
    "Answer ①": "clever",
    "Sentence ②": "Sam is a ( ) student who is able to answer most of the questions.",
    "Answer ②": "clever",
    "Definition": "someone who is ( ) is intelligent and understands things quickly"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "courageous (adj.)",
    "Sentence ①": "Montmorency is a ( ) dog who is not afraid of anything.",
    "Answer ①": "courageous",
    "Sentence ②": "Kenji made a ( ) decision to go study in America for a year.",
    "Answer ②": "courageous",
    "Definition": "the quality you have when you do not let fear affect you in a frightening situation"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "terrify (v.)",
    "Sentence ①": "The cold eyes of the street cat ( ) Montmorency.",
    "Answer ①": "terrified",
    "Sentence ②": "Any thought of ghosts ( ) me.",
    "Answer ②": "terrifies",
    "Definition": "to make someone extremely frightened"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "conversation (n.)",
    "Sentence ①": "The cat and dog did not speak, but their silent ( ) was probably like this.",
    "Answer ①": "conversation",
    "Sentence ②": "Aaron had a short ( ) with his history teacher about his report.",
    "Answer ②": "conversation",
    "Definition": "an informal talk between two or more people"
  },
  {
    "Book": "BP6 Animal Tales",
    "Chapter": 10,
    "Word": "probably (adv.)",
    "Sentence ①": "Their silent conversation was ( ) like this.",
    "Answer ①": "probably",
    "Sentence ②": "I’m not sure yet, but I’ll ( ) see my grandparents this weekend.",
    "Answer ②": "probably",
    "Definition": "used when saying that you think something will happen or be true, although you are not sure"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "stain (n.)",
    "Sentence ①": "Coffee makes ( ) on the carpet.",
    "Answer ①": "stains",
    "Sentence ②": "It is hard to remove ( ) from your teeth.",
    "Answer ②": "stains",
    "Definition": "a mark that is difficult to remove"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "recover (v.)",
    "Sentence ①": "My uncle is ( ) from a heart attack.",
    "Answer ①": "recovering",
    "Sentence ②": "Doctors say she will ( ) quickly.",
    "Answer ②": "recover",
    "Definition": "to get better after an illness, injury, shock etc"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "exist (v.)",
    "Sentence ①": "Do you really think that ghosts ( )?",
    "Answer ①": "exist",
    "Sentence ②": "Old customs still ( ) in some areas.",
    "Answer ②": "exist",
    "Definition": "to happen or to be real or alive"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "old-fashioned (adj.)",
    "Sentence ①": "Some people still have ( ) ideas about women.",
    "Answer ①": "old-fashioned",
    "Sentence ②": "All her clothes look ( ).",
    "Answer ②": "old-fashioned",
    "Definition": "not modern or fashionable any more"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "minister (n.)",
    "Sentence ①": "He was chosen as the ( ) of Agriculture.",
    "Answer ①": "Minister",
    "Sentence ②": "Korea has both a President and a Prime ( ).",
    "Answer ②": "Minister",
    "Definition": "a politician who is in charge of a government department"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "naughty (adj.)",
    "Sentence ①": "The mother scolded him for being a ( ) boy.",
    "Answer ①": "naughty",
    "Sentence ②": "Santa Claus doesn't give presents to ( ) children.",
    "Answer ②": "naughty",
    "Definition": "a ( ) child behaves badly"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "guilty (adj.)",
    "Sentence ①": "The jury found her ( ) of murder.",
    "Answer ①": "guilty",
    "Sentence ②": "He was found not ( ) of the death of the actress.",
    "Answer ②": "guilty",
    "Definition": "having done something that is a crime"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "rub (v.)",
    "Sentence ①": "He ( ) the trophy with a towel to clean it.",
    "Answer ①": "rubbed",
    "Sentence ②": "Ann woke up and ( ) her eyes.",
    "Answer ②": "rubbed",
    "Definition": "to move your hand, a cloth etc quickly backwards and forwards over a surface"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 1,
    "Word": "triumphant (adj.)",
    "Sentence ①": "He gave a ( ) smile after winning the race.",
    "Answer ①": "triumphant",
    "Sentence ②": "I was the one who thought of the idea,' he said ( ).",
    "Answer ②": "triumphantly",
    "Definition": "pleased because you have succeeded or won"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "work (v.)",
    "Sentence ①": "Most diet programs don't ( ).",
    "Answer ①": "work",
    "Sentence ②": "I don't think the plan is ( ) in the way we thought it would.",
    "Answer ②": "working",
    "Definition": "if a plan, method, medicine etc ( ), it gives you the results you want"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "thesis (n.)",
    "Sentence ①": "He is planning to write a ( ) on children's literature.",
    "Answer ①": "thesis",
    "Sentence ②": "John wrote his master's ( ) on the economic growth of China.",
    "Answer ②": "thesis",
    "Definition": "a long piece of writing that you do for a university degree"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "supernatural (adj.)",
    "Sentence ①": "That man is said to have ( ) powers.",
    "Answer ①": "supernatural",
    "Sentence ②": "I don't believe in ( ) things.",
    "Answer ②": "supernatural",
    "Definition": "events, powers, or creatures that are impossible to explain by science or natural causes"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "absolutely (adv.)",
    "Sentence ①": "Are you ( ) sure? I don't believe you.",
    "Answer ①": "absolutely",
    "Sentence ②": "This is ( ) delicious!",
    "Answer ②": "absolutely",
    "Definition": "completely or totally"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "twin (n.)",
    "Sentence ①": "My sister and I are identical ( ).",
    "Answer ①": "twins",
    "Sentence ②": "Many people often confuse me with my ( ) brother.",
    "Answer ②": "twin",
    "Definition": "one of two children who are born at the same time and have the same mother"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "unusual (adj.)",
    "Sentence ①": "Tom seemed sad, which was ( ) for him.",
    "Answer ①": "unusual",
    "Sentence ②": "It's ( ) for the trees to flower so early.",
    "Answer ②": "unusual",
    "Definition": "different from what is usual or normal"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "upset (adj.)",
    "Sentence ①": "She's still very ( ) about her father's death.",
    "Answer ①": "upset",
    "Sentence ②": "He was ( ) that Helen had lied to him.",
    "Answer ②": "upset",
    "Definition": "unhappy because something unpleasant or disappointing has happened"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "point (v.)",
    "Sentence ①": "The man became silent when the police ( ) a gun at him.",
    "Answer ①": "pointed",
    "Sentence ②": "The teacher ( ) at Melissa and asked, “What is the answer to question five?”",
    "Answer ②": "pointed",
    "Definition": "to hold something so that it is aimed towards a person or thing"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 2,
    "Word": "fail (v.)",
    "Sentence ①": "Doctors ( ) to save the girl's life.",
    "Answer ①": "failed",
    "Sentence ②": "The government ( ) to improve health services.",
    "Answer ②": "failed",
    "Definition": "to not succeed in doing something that you try to do"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "revenge (n.)",
    "Sentence ①": "She was determined to get ( ).",
    "Answer ①": "revenge",
    "Sentence ②": "He later took ( ) on his friends who had betrayed him.",
    "Answer ②": "revenge",
    "Definition": "when you hurt or punish someone because they have done something bad to you"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "howl (v.)",
    "Sentence ①": "I heard the wolves ( ) in the night.",
    "Answer ①": "howling",
    "Sentence ②": "The coyotes were ( ) in the desert.",
    "Answer ②": "howling",
    "Definition": "if a dog or wolf ( ), it makes a long crying sound"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "notice (n.)",
    "Sentence ①": "I'll put up a ( ) about the meeting on the board.",
    "Answer ①": "notice",
    "Sentence ②": "John was shocked to receive a ( ) saying he was fired.",
    "Answer ②": "notice",
    "Definition": "a written or printed statement that gives information or warning to people"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "fear (n.)",
    "Sentence ①": "The citizens are having ( ) that prices might continue to rise.",
    "Answer ①": "fears",
    "Sentence ②": "He has a ( ) of heights and hates being in tall buildings.",
    "Answer ②": "fear",
    "Definition": "the feeling you get when you are afraid or worried that something bad will happen"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "nerve (n.)",
    "Sentence ①": "A lot of people suffer from ( ) before going on stage.",
    "Answer ①": "nerves",
    "Sentence ②": "I drank a glass of wine to calm my ( ).",
    "Answer ②": "nerves",
    "Definition": "the feeling of being worried or a little frightened"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "duty (n.)",
    "Sentence ①": "Parents have a ( ) to protect their children.",
    "Answer ①": "duty",
    "Sentence ②": "We feel it is our ( ) to help her.",
    "Answer ②": "duty",
    "Definition": "something that you should do because it is right"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "slip (v.)",
    "Sentence ①": "Be careful not to ( ), I just mopped the floor.",
    "Answer ①": "slip",
    "Sentence ②": "Joan ( ) on the ice and broke her ankle.",
    "Answer ②": "slipped",
    "Definition": "When your feet move accidently and you fall or almost fall"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 3,
    "Word": "uncivilized (adj.)",
    "Sentence ①": "I thought that what he did was a very ( ) act.",
    "Answer ①": "uncivilized",
    "Sentence ②": "His ( ) character explains why he doesn't have any friends.",
    "Answer ②": "uncivilized",
    "Definition": "not socially, culturally, or morally advanced"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "party (n.)",
    "Sentence ①": "The Labor ( ) is demanding a change in the law.",
    "Answer ①": "party",
    "Sentence ②": "( ) leaders met to discuss the new tax policy.",
    "Answer ②": "Party",
    "Definition": "a political organization with particular ideas and aims that you can vote for in election"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "peacefully (adv.)",
    "Sentence ①": "That night, the young prince slept ( ) in his bed.",
    "Answer ①": "peacefully",
    "Sentence ②": "He had died as gently, kindly, and ( ) as he had lived.",
    "Answer ②": "peacefully",
    "Definition": "quiet and calm"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "to (someone's) surprise (phr.)",
    "Sentence ①": "( ) my ( ), Alice agreed.",
    "Answer ①": "surprise",
    "Sentence ②": "( ) everyone's ( ), the plan succeeded.",
    "Answer ②": "surprise",
    "Definition": "something that is unexpected or unusual"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "vulgar (adj.)",
    "Sentence ①": "His ( ) jokes upset the audience.",
    "Answer ①": "vulgar",
    "Sentence ②": "The students with the ( ) attitude was punished.",
    "Answer ②": "vulgar",
    "Definition": "behaving in a way that is not polite, especially by talking in a rude way"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "these days (phr.)",
    "Sentence ①": "Children seem much more mature ( ) ( ).",
    "Answer ①": "these days",
    "Sentence ②": "There are less and less opportunities to succeed ( ) ( ).",
    "Answer ②": "these days",
    "Definition": "at present"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "manner (n.)",
    "Sentence ①": "Beth's ( ) towards him has changed.",
    "Answer ①": "manner",
    "Sentence ②": "You should always greet customers in a friendly ( ).",
    "Answer ②": "manner",
    "Definition": "the way in which someone behaves towards or talks to other people"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 4,
    "Word": "blow out (phr.v.)",
    "Sentence ①": "I ( ) ( ) the candles on the birthday cake.",
    "Answer ①": "blew out",
    "Sentence ②": "The match ( ) ( ) before I could light my cigarette.",
    "Answer ②": "blew out",
    "Definition": "to ( ) air on a flame and make it stop burning"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "tremble (v.)",
    "Sentence ①": "His lips started to ( ) and then he started to cry.",
    "Answer ①": "tremble",
    "Sentence ②": "She didn't have a coat on, so she started ( ) in the cold.",
    "Answer ②": "trembling",
    "Definition": "to shake slightly because you are afraid, worried, or excited"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "emotion (n.)",
    "Sentence ①": "Her voice was full of ( ).",
    "Answer ①": "emotion",
    "Sentence ②": "His face showed no signs of ( ).",
    "Answer ②": "emotion",
    "Definition": "a strong feeling such as love, hate, anger"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "kneel (v.)",
    "Sentence ①": "The knight ( ) down in front of the king.",
    "Answer ①": "knelt",
    "Sentence ②": "Tom ( ) down and patted the dog.",
    "Answer ②": "knelt",
    "Definition": "to be in or move into a position where your body is resting on your knees"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "spread (v.)",
    "Sentence ①": "Fire ( ) quickly through the building.",
    "Answer ①": "spread",
    "Sentence ②": "The cancer ( ) to her liver.",
    "Answer ②": "spread",
    "Definition": "to move and affect a larger area or more people"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "pray (v.)",
    "Sentence ①": "Christine goes to church every day and ( ) to God.",
    "Answer ①": "prays",
    "Sentence ②": "We all ( ) for her safety when she went missing.",
    "Answer ②": "prayed",
    "Definition": "① to speak to God in order to ask for something or give thanks. ② to hope for something very strongly."
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "still (adj.)",
    "Sentence ①": "The children wouldn't keep ( ).",
    "Answer ①": "still",
    "Sentence ②": "Sit ( ) while I am cutting your hair.",
    "Answer ②": "still",
    "Definition": "not moving"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 5,
    "Word": "invisible (adj.)",
    "Sentence ①": "The little boy was so quiet that it was as if he was ( ).",
    "Answer ①": "invisible",
    "Sentence ②": "The car was almost ( ) in the heavy snow.",
    "Answer ②": "invisible",
    "Definition": "impossible to see"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "corridor (n.)",
    "Sentence ①": "Please wait in the ( ).",
    "Answer ①": "corridor",
    "Sentence ②": "Her office is just down the ( ).",
    "Answer ②": "corridor",
    "Definition": "a long narrow area between two rows of rooms"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "coffin (n.)",
    "Sentence ①": "In western societies, dead bodies are placed in ( ) and then buried.",
    "Answer ①": "coffins",
    "Sentence ②": "Vampires are said to sleep in ( ).",
    "Answer ②": "coffins",
    "Definition": "a box in which a dead person is put"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "importance (n.)",
    "Sentence ①": "The teacher talked to the students about the ( ) of helping others.",
    "Answer ①": "importance",
    "Sentence ②": "I didn't really think about the ( ) of regular exercise, but I guess I should exercise more.",
    "Answer ②": "importance",
    "Definition": "the quality of being important"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "possession (n.)",
    "Sentence ①": "My family photos are examples of my prized ( ).",
    "Answer ①": "possessions",
    "Sentence ②": "That information is not in our ( ).",
    "Answer ②": "possession",
    "Definition": "something that you own"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "haunt (v.)",
    "Sentence ①": "That old house is said to be ( ) by ghosts.",
    "Answer ①": "haunted",
    "Sentence ②": "He's afraid that the dead will come back to ( ) him.",
    "Answer ②": "haunt",
    "Definition": "if the spirit of a dead person ( ) a place, it appears there often"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "grave (n.)",
    "Sentence ①": "We went to visit our family ( ).",
    "Answer ①": "grave",
    "Sentence ②": "At the head of the ( ) there was a small cross.",
    "Answer ②": "grave",
    "Definition": "the place where a dead body is buried"
  },
  {
    "Book": "BP7 The Canterville Ghost",
    "Chapter": 6,
    "Word": "blush (v.)",
    "Sentence ①": "The way he looked at her made Heather ( ).",
    "Answer ①": "blush",
    "Sentence ②": "When I have to speak in front of a crowd I start to ( ).",
    "Answer ②": "blush",
    "Definition": "to become red in the face, especially because you are embarrassed"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "manage (v.)",
    "Sentence ①": "I don't know how I'll ( ) it, but I will be there.",
    "Answer ①": "manage",
    "Sentence ②": "The little girl ( ) to make breakfast by herself.",
    "Answer ②": "managed",
    "Definition": "to succeed in doing something difficult or in dealing with problems"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "lose sight of (something) (phr.v.)",
    "Sentence ①": "Don't ( ) ( ) ( ) your goal. When you're in trouble, ask for advice.",
    "Answer ①": "lose sight of",
    "Sentence ②": "The child ( ) ( ) ( ) his mother and started crying.",
    "Answer ②": "lost sight of",
    "Definition": "① to stop having a particular quality, ability etc, or to gradually have less of it ② to become unable to find someone or something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "realize (v.)",
    "Sentence ①": "When I got to school, I ( ) that I forgot my book on the bus.",
    "Answer ①": "realized",
    "Sentence ②": "Do you ( ) that you are walking in the opposite direction?",
    "Answer ②": "realize",
    "Definition": "to know and understand something, or suddenly begin to understand it"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "raise (v.)",
    "Sentence ①": "He ( ) his hand during class to ask a question.",
    "Answer ①": "raised",
    "Sentence ②": "John could not ( ) his broken arm.",
    "Answer ②": "raise",
    "Definition": "to move something to a higher position or into an upright position"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "construct (v.)",
    "Sentence ①": "The company is ( ) a new building right now.",
    "Answer ①": "constructing",
    "Sentence ②": "We need to ( ) a good relationship with the customers.",
    "Answer ②": "construct",
    "Definition": "to build something such as a house, bridge, road etc"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "offer (v.)",
    "Sentence ①": "My boss ( ) me a job in England.",
    "Answer ①": "offered",
    "Sentence ②": "Since my leg is broken, my friend ( ) me help to go up the stairs.",
    "Answer ②": "offered",
    "Definition": "① to ask someone if they would like something or to hold something out for them to take ② to say that you are willing to do something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "curious (adj.)",
    "Sentence ①": "I was ( ) to find out what they were doing.",
    "Answer ①": "curious",
    "Sentence ②": "The ( ) boy wanted to find out what was inside the box.",
    "Answer ②": "curious",
    "Definition": "wanting to know or learn about something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "attach (v.)",
    "Sentence ①": "I ( ) the star on the top of the Christmas tree.",
    "Answer ①": "attached",
    "Sentence ②": "Don’t forget to ( ) the file to the email.",
    "Answer ②": "attach",
    "Definition": "① to fasten or join one thing to another ② to connect a document or file to an email so that you can send them together"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 1,
    "Word": "no longer (phr.)",
    "Sentence ①": "We ( ) ( ) use that building because it is too old.",
    "Answer ①": "no longer",
    "Sentence ②": "I ( ) ( ) have to go to class today because the teacher canceled it.",
    "Answer ②": "no longer",
    "Definition": "used to show that something happened in the past, but does not happen now"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "in charge of (phr.)",
    "Sentence ①": "Chelsea was ( ) counting the number of guests.",
    "Answer ①": "in charge of",
    "Sentence ②": "The waiter is ( ) taking orders and serving the customers.",
    "Answer ②": "in charge of",
    "Definition": "to have control over or responsibility for something or someone"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "punish (v.)",
    "Sentence ①": "Parents sometimes ( ) their children.",
    "Answer ①": "punish",
    "Sentence ②": "People who break the law are ( ) by the country.",
    "Answer ②": "punished",
    "Definition": "① to do something unpleasant to someone because they have done something wrong ② If a crime is ( ) in a particular way, anyone who is guilty of it receives that punishment"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "suggest (v.)",
    "Sentence ①": "The doctor ( ) that I stay at home.",
    "Answer ①": "suggested",
    "Sentence ②": "I ( ) you study if you want a good grade on your test.",
    "Answer ②": "suggest",
    "Definition": "to tell someone your ideas about what should be done"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "treat (v.)",
    "Sentence ①": "The girl ( ) her grandmother very kindly.",
    "Answer ①": "treats",
    "Sentence ②": "The host family ( ) me like I was their real family.",
    "Answer ②": "treated",
    "Definition": "to behave towards someone in a particular way"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "carry out (v.)",
    "Sentence ①": "The spy ( ) his mission without any major trouble.",
    "Answer ①": "carried out",
    "Sentence ②": "I should ( ) the plan to surprise Joseph.",
    "Answer ②": "carry out",
    "Definition": "to do something that has been planned or discussed, or that someone has told you to do"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "contain (v.)",
    "Sentence ①": "The hamburger ( ) only tofu, and no meat.",
    "Answer ①": "contained",
    "Sentence ②": "The new CD ( ) 10 popular hit songs.",
    "Answer ②": "contains",
    "Definition": "to have something inside"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "sooner or later (phr.)",
    "Sentence ①": "( ), we will have to move out of this house.",
    "Answer ①": "Sooner or later",
    "Sentence ②": "I will have to get this work done ( ).",
    "Answer ②": "sooner or later",
    "Definition": "used to say something will definitely happen but you are not sure when"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "organize (v.)",
    "Sentence ①": "My friends ( ) a birthday party just for me.",
    "Answer ①": "organized",
    "Sentence ②": "Megan did a great job ( ) the event.",
    "Answer ②": "organizing",
    "Definition": "to plan or arrange something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 2,
    "Word": "permission (n.)",
    "Sentence ①": "I asked the teacher for ( ) to go to the bathroom.",
    "Answer ①": "permission",
    "Sentence ②": "She drove the car without her parents' ( ).",
    "Answer ②": "permission",
    "Definition": "if you have ( ) to do something, someone in authority allows you to do it"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "allow (somebody) to (phr.v.)",
    "Sentence ①": "The celebrity ( ) everyone ( ) take pictures of him.",
    "Answer ①": "allowed to",
    "Sentence ②": "Her parents ( ) her ( ) go skiing with her friends.",
    "Answer ②": "allowed to",
    "Definition": "to say that someone can do or have something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "delighted (adj.)",
    "Sentence ①": "The host mother was ( ) to see me and welcomed me into the house.",
    "Answer ①": "delighted",
    "Sentence ②": "Tom was ( ) to go on a date with Mary.",
    "Answer ②": "delighted",
    "Definition": "very pleased"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "concern (v.)",
    "Sentence ①": "The newspaper article was ( ) the car accident.",
    "Answer ①": "concerning",
    "Sentence ②": "The film ( ) a group of school friends.",
    "Answer ②": "concerns",
    "Definition": "① if a book, report etc ( ) something, it is about it ② to make someone feel worried or upset"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "refuse (v.)",
    "Sentence ①": "The spy ( ) to talk about his country's secrets and didn't say a word.",
    "Answer ①": "refused",
    "Sentence ②": "The offer seemed too good to ( ).",
    "Answer ②": "refuse",
    "Definition": "to say firmly that you will not do or accept something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "obey (v.)",
    "Sentence ①": "The student was punished for not ( ) the school rules.",
    "Answer ①": "obeying",
    "Sentence ②": "The dog ( ) when his master told him to sit.",
    "Answer ②": "obeyed",
    "Definition": "to do what a person, law or rule tells you to do"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "defeat (v.)",
    "Sentence ①": "Maria ( ) Serena by 3-1 in the final game.",
    "Answer ①": "defeated",
    "Sentence ②": "Jeremy ( ) the dragon in the videogame.",
    "Answer ②": "defeated",
    "Definition": "to win a victory over someone in a war, competition, game etc"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "separate (v.)",
    "Sentence ①": "The door ( ) the two rooms.",
    "Answer ①": "separates",
    "Sentence ②": "The teacher ( ) the class into three groups.",
    "Answer ②": "separated",
    "Definition": "to divide or split something into different parts"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "extinguish (v.)",
    "Sentence ①": "The firefighter ( ) the big fire.",
    "Answer ①": "extinguished",
    "Sentence ②": "Use water to ( ) the fire.",
    "Answer ②": "extinguish",
    "Definition": "to make a fire or light stop burning or shining"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 3,
    "Word": "quantity (n.)",
    "Sentence ①": "The police found a large ( ) of money in the suitcase.",
    "Answer ①": "quantity",
    "Sentence ②": "She added a small ( ) of salt into the soup.",
    "Answer ②": "quantity",
    "Definition": "an amount of something that you can measure or count"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "custom (n.)",
    "Sentence ①": "It is a ( ) in Japan to take your shoes off inside the house.",
    "Answer ①": "custom",
    "Sentence ②": "Each country has its own ( ).",
    "Answer ②": "customs",
    "Definition": "something that people in a particular society do because it is traditional"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "in proportion to (phr.)",
    "Sentence ①": "You get paid ( ) ( ) ( ) the amount of work you do.",
    "Answer ①": "in proportion to",
    "Sentence ②": "Test scores are usually ( ) ( ) ( ) the amount of time you study.",
    "Answer ②": "in proportion to",
    "Definition": "when the size of one part of something looks right in relation to something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "educated (adj.)",
    "Sentence ①": "Her parents are well-( ) people.",
    "Answer ①": "educated",
    "Sentence ②": "Our teacher was a highly ( ) woman who graduated from Harvard.",
    "Answer ②": "educated",
    "Definition": "an ( ) person has a high standard of knowledge and education"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "depend on (phr.)",
    "Sentence ①": "We may not have the picnic tomorrow ( ) ( ) the weather.",
    "Answer ①": "depending on",
    "Sentence ②": "It is often said that success ( ) ( ) your effort.",
    "Answer ②": "depends on",
    "Definition": "if something ( ) ( ) something else, it is directly affected by that thing"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "reward (v.)",
    "Sentence ①": "The King ( ) the brave soldier with some money.",
    "Answer ①": "rewarded",
    "Sentence ②": "I was ( ) with a big trophy for winning the piano competition.",
    "Answer ②": "rewarded",
    "Definition": "if you are ( ) for something you have done, something good happens to you or is given to you"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "amuse (v.)",
    "Sentence ①": "The parents tried to ( ) their baby with a toy.",
    "Answer ①": "amuse",
    "Sentence ②": "The children were ( ) by the man telling funny jokes.",
    "Answer ②": "amused",
    "Definition": "to make someone laugh or smile"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "determine (v.)",
    "Sentence ①": "We must first ( ) what we need before going to the store.",
    "Answer ①": "determine",
    "Sentence ②": "No one can ( ) the prince of that precious painting.",
    "Answer ②": "determine",
    "Definition": "to find out the facts about something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "offend (v.)",
    "Sentence ①": "I am sorry if I ( ) your feelings with what I said.",
    "Answer ①": "offended",
    "Sentence ②": "Using bad language will ( ) people's feelings.",
    "Answer ②": "offend",
    "Definition": "to make someone angry or upset, by doing something or saying something they think is rude, unkind, or unacceptable"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 4,
    "Word": "horrify (v.)",
    "Sentence ①": "I was ( ) to see a zombi.",
    "Answer ①": "horrified",
    "Sentence ②": "Horror movies are made to ( ) people.",
    "Answer ②": "horrify",
    "Definition": "to make someone very shocked and upset"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "no sign (phr.)",
    "Sentence ①": "I knocked on the door, but there was ( ) ( ) of anyone inside.",
    "Answer ①": "no sign",
    "Sentence ②": "The house was empty, and there was ( ) ( ) of someone ever having lived here.",
    "Answer ②": "no sign",
    "Definition": "used to say that someone or something is not in a place or cannot be found"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "disappointed (adj.)",
    "Sentence ①": "The mother was ( ) to see her son's poor test results.",
    "Answer ①": "disappointed",
    "Sentence ②": "I was a little ( ) when you didn't show up at the party.",
    "Answer ②": "disappointed",
    "Definition": "unhappy because something you hoped for did not happen or was not as good as you expected"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "reach down (phr.v.)",
    "Sentence ①": "I ( ) ( ) my pocket and found two coins.",
    "Answer ①": "reached down",
    "Sentence ②": "He ( ) ( ) his bag to find his ringing phone.",
    "Answer ②": "reached down",
    "Definition": "to extend downwards"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "gently (adv.)",
    "Sentence ①": "She laid the sleeping baby down ( ).",
    "Answer ①": "gently",
    "Sentence ②": "The nurse put a bandage ( ) on my knee.",
    "Answer ②": "gently",
    "Definition": "kind and careful not to hurt anyone or anything"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "backwards (adv.)",
    "Sentence ①": "Joe walked ( ) and forwards with a map, trying to find his way.",
    "Answer ①": "backwards",
    "Sentence ②": "The woman walked ( ) to take a full look at the house.",
    "Answer ②": "backwards",
    "Definition": "in the direction that is behind you"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "forgive (v.)",
    "Sentence ①": "I will never ( ) her for what she did.",
    "Answer ①": "forgive",
    "Sentence ②": "He ( ) me for breaking the promise.",
    "Answer ②": "forgave",
    "Definition": "to decide not to be angry or punish someone who has done something wrong"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 5,
    "Word": "look after (phr.v.)",
    "Sentence ①": "When we were young, we had a babysitter who ( ) ( ) us.",
    "Answer ①": "looked after",
    "Sentence ②": "Don't worry mother, I can ( ) ( ) myself.",
    "Answer ②": "look after",
    "Definition": "to take care of someone or something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "notice (v.)",
    "Sentence ①": "I ( ) a strange smell when I entered the room.",
    "Answer ①": "noticed",
    "Sentence ②": "She didn't ( ) him leaving.",
    "Answer ②": "notice",
    "Definition": "to see, feel, or hear someone or something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "modest (adj.)",
    "Sentence ①": "She is ( ) and doesn't tell everyone about her success.",
    "Answer ①": "modest",
    "Sentence ②": "I was too ( ) to talk about my good score on the test.",
    "Answer ②": "modest",
    "Definition": "someone who is ( ) does not talk in a proud way about their abilities or achievements"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "perform (v.)",
    "Sentence ①": "The play was first ( ) in 1985.",
    "Answer ①": "performed",
    "Sentence ②": "The band was ( ) in Tokyo Dome.",
    "Answer ②": "performing",
    "Definition": "to do something to entertain people such as acting in a play or playing music"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "uncomfortable (adj.)",
    "Sentence ①": "The girl felt ( ) on the bus.",
    "Answer ①": "uncomfortable",
    "Sentence ②": "Everyone feels ( ) with strangers.",
    "Answer ②": "uncomfortable",
    "Definition": "not feeling physically relaxed, or not making you feel physically relaxed"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "violently (adv.)",
    "Sentence ①": "The child threw the cup ( ) on the floor.",
    "Answer ①": "violently",
    "Sentence ②": "The drunk man ( ) hit his wife.",
    "Answer ②": "violently",
    "Definition": "with a lot of force in a way that is very difficult to control"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 6,
    "Word": "bow (v.)",
    "Sentence ①": "Everyone ( ) in front of the emperor.",
    "Answer ①": "bowed",
    "Sentence ②": "Japanese have a unique custom of ( ) to show respect.",
    "Answer ②": "bowing",
    "Definition": "to bend the top part of your body forward in order to show respect for someone"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "approach (v.)",
    "Sentence ①": "The dog barked when it heard the car ( ).",
    "Answer ①": "approaching",
    "Sentence ②": "The spaceship slowly ( ) the moon.",
    "Answer ②": "approached",
    "Definition": "to move nearer to someone or something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "introduce (v.)",
    "Sentence ①": "Sam will ( ) his girlfriend to his parents tonight.",
    "Answer ①": "introduce",
    "Sentence ②": "The scientist ( ) a great invention to the world.",
    "Answer ②": "introduced",
    "Definition": "① If you ( ) people who are meeting for the first time, you tell them each other's names ② to bring a system, plan, or product into use for the first time"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "incident (n.)",
    "Sentence ①": "I experienced an embarrassing ( ) when I was a girl.",
    "Answer ①": "incident",
    "Sentence ②": "The ( ) caused the war between the two countries.",
    "Answer ②": "incident",
    "Definition": "an event especially one that is unusual, important, or violent"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "fierce (adj.)",
    "Sentence ①": "There was a ( ) fight between the two students.",
    "Answer ①": "fierce",
    "Sentence ②": "The dog living next door is a ( ) one.",
    "Answer ②": "fierce",
    "Definition": "① done with a lot of energy and strong feelings ② a ( ) person or animal looks very violent or angry and likely to attack people"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "occasion (n.)",
    "Sentence ①": "I had an ( ) to meet his father for the first time.",
    "Answer ①": "occasion",
    "Sentence ②": "He had an ( ) to study abroad in Europe.",
    "Answer ②": "occasion",
    "Definition": "a time when something happens"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "forbid (v.)",
    "Sentence ①": "I ( ) you to speak in class.",
    "Answer ①": "forbid",
    "Sentence ②": "The princess was ( ) to leave the castle.",
    "Answer ②": "forbidden",
    "Definition": "to order someone not to do something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "float (v.)",
    "Sentence ①": "Oil ( ) on water.",
    "Answer ①": "floats",
    "Sentence ②": "She lay ( ) on her back in the pool.",
    "Answer ②": "floating",
    "Definition": "to stay on the surface of a liquid without sinking, or to make something do this"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "order (v.)",
    "Sentence ①": "The king ( ) his soldiers to attack.",
    "Answer ①": "ordered",
    "Sentence ②": "Jessica ( ) her maid to clean the house while she went out.",
    "Answer ②": "ordered",
    "Definition": "to officially tell someone that they must do something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 7,
    "Word": "expect (v.)",
    "Sentence ①": "I ( ) that it would rain today, but it didn't.",
    "Answer ①": "expected",
    "Sentence ②": "My boss ( ) to see me at 5 o'clock so I must hurry back to the office.",
    "Answer ②": "expects",
    "Definition": "① to think that something will probably happen ② to believe that someone must do something because it is their duty"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "command (n.)",
    "Sentence ①": "The officer gave a ( ) and everyone followed.",
    "Answer ①": "command",
    "Sentence ②": "The police arrived and took ( ) of the situation.",
    "Answer ②": "command",
    "Definition": "① an order that must be obeyed ② the control of a group of people or a situation"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "on board (phr.v.)",
    "Sentence ①": "Our family got ( ) ( ) the plane.",
    "Answer ①": "on board",
    "Sentence ②": "The captain checked if everyone had safely gone ( ) ( ).",
    "Answer ②": "on board",
    "Definition": "to get on a plane, ship, or a train"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "change〜 mind (phr.v.)",
    "Sentence ①": "I ( ) my ( ) and wore the other dress.",
    "Answer ①": "changed mind",
    "Sentence ②": "The boy ( ) his ( ) and bought some CDs instead of books.",
    "Answer ②": "changed mind",
    "Definition": "to change your decision or opinion about something"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "practical (adj.)",
    "Sentence ①": "I went to the teacher for some ( ) advice.",
    "Answer ①": "practical",
    "Sentence ②": "It is important to build up ( ) communication skills.",
    "Answer ②": "practical",
    "Definition": "relating to real situations and events rather than ideas"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "proper (adj.)",
    "Sentence ①": "You must wear ( ) clothes to the party.",
    "Answer ①": "proper",
    "Sentence ②": "That is not a ( ) place to hide your money.",
    "Answer ②": "proper",
    "Definition": "right, suitable, or correct"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "decent (adj.)",
    "Sentence ①": "He had not been eating ( ) food during his stay in India.",
    "Answer ①": "decent",
    "Sentence ②": "John wouldn't give me a ( ) answer to my question.",
    "Answer ②": "decent",
    "Definition": "good enough or fairly good"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "intelligent (adj.)",
    "Sentence ①": "An ( ) boy was able to answer all the questions right.",
    "Answer ①": "intelligent",
    "Sentence ②": "If you want to be ( ) like your teacher, study hard.",
    "Answer ②": "intelligent",
    "Definition": "having a high level of mental ability and good at learning and understanding ideas"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "tradition (n.)",
    "Sentence ①": "It is Japanese ( ) to celebrate children's day.",
    "Answer ①": "tradition",
    "Sentence ②": "Our family ( ) is to go to Hawaii every summer.",
    "Answer ②": "tradition",
    "Definition": "a custom, belief or a way of doing something that has existed for a long time"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 8,
    "Word": "recent (adj.)",
    "Sentence ①": "There have been many changes in ( ) years.",
    "Answer ①": "recent",
    "Sentence ②": "I'm not familiar with ( ) news since I haven't read the papers.",
    "Answer ②": "recent",
    "Definition": "having happened or been done only a short time ago"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "local (adj.)",
    "Sentence ①": "The ( ) news reported about my neighbor's party.",
    "Answer ①": "local",
    "Sentence ②": "My parents read the ( ) newspaper every morning.",
    "Answer ②": "local",
    "Definition": "relating to a particular area, especially the area you live in"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "accept (v.)",
    "Sentence ①": "I still cannot ( ) the death of my friend.",
    "Answer ①": "accept",
    "Sentence ②": "The machine only ( ) coins.",
    "Answer ②": "accepts",
    "Definition": "① to admit that an unpleasant fact or difficult situation is true ② to let customers pay for something in a particular way"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "pale (adj.)",
    "Sentence ①": "She looked ( ) because she was sick.",
    "Answer ①": "pale",
    "Sentence ②": "Mary turned ( ) when she heard the bad news.",
    "Answer ②": "pale",
    "Definition": "having a skin color that is whiter than usual, especially because you are ill or frightened"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "appear (v.)",
    "Sentence ①": "The magician ( ) in front of the audience.",
    "Answer ①": "appeared",
    "Sentence ②": "Many posters of the singer ( ) all over town.",
    "Answer ②": "appeared",
    "Definition": "① if something or someone ( ), they can suddenly be seen or they suddenly arrive. ② to become available or known about for the first time."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "instantly (adv.)",
    "Sentence ①": "He ( ) knew that his friend was lying to him.",
    "Answer ①": "instantly",
    "Sentence ②": "Bob called the ambulance ( ) after he saw Jennifer falling off the stairs.",
    "Answer ②": "instantly",
    "Definition": "immediately."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "dishonest (adj.)",
    "Sentence ①": "The boy was ( ) and lied about why he was late.",
    "Answer ①": "dishonest",
    "Sentence ②": "I was angry at Dave's ( ) attitude.",
    "Answer ②": "dishonest",
    "Definition": "someone who is ( ) deceives people, for example by lying, stealing, or cheating."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "wise (adj.)",
    "Sentence ①": "I am now old and ( ), and not like I was before.",
    "Answer ①": "wise",
    "Sentence ②": "It was very ( ) of him to start on the project early.",
    "Answer ②": "wise",
    "Definition": "① a ( ) person is able to use their knowledge and experience of life to make good decisions and give good advice ② a ( ) decision or action is sensible."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "advise (v.)",
    "Sentence ①": "I strongly ( ) you to listen to your teacher.",
    "Answer ①": "advise",
    "Sentence ②": "The police ( ) us not to travel on Friday.",
    "Answer ②": "advised",
    "Definition": "the things that you say to someone when you tell them what you think they should do."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 9,
    "Word": "behave (v.)",
    "Sentence ①": "The child ( ) politely in front of the guests.",
    "Answer ①": "behaved",
    "Sentence ②": "She has been ( ) strangely for the past few days.",
    "Answer ②": "behaving",
    "Definition": "to do things of a particular kind."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "surround (v.)",
    "Sentence ①": "When the famous singer walked out of the hotel, he was ( ) by his fans.",
    "Answer ①": "surrounded",
    "Sentence ②": "Bob was frightened when he was ( ) by dogs.",
    "Answer ②": "surrounded",
    "Definition": "to be or go all around someone or something."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "contempt (n.)",
    "Sentence ①": "I looked at the dirty man with ( ) in his eyes.",
    "Answer ①": "contempt",
    "Sentence ②": "Mike's ( ) for Tom ended up as a fight.",
    "Answer ②": "contempt",
    "Definition": "the feeling that someone or something does not deserve respect."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "invent (v.)",
    "Sentence ①": "The scientist ( ) a new technology for cell phones.",
    "Answer ①": "invented",
    "Sentence ②": "The Wright brothers ( ) the first successful airplane.",
    "Answer ②": "invented",
    "Definition": "to think of an idea for a new product, machine etc, and design it or make it"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "admire (v.)",
    "Sentence ①": "Everyone ( ) her beautiful smile.",
    "Answer ①": "admires",
    "Sentence ②": "She is ( ) for her honesty and kindness.",
    "Answer ②": "admired",
    "Definition": "to like someone because they have done something that you think is good, or like the skills or qualities that someone has."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "argue (v.)",
    "Sentence ①": "I closed my mouth because I didn't want to（ ）with my friends.",
    "Answer ①": "argue",
    "Sentence ②": "My brother and I are always ( ) and fighting.",
    "Answer ②": "arguing",
    "Definition": "to shout and say angry things to someone because you disagree with them"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "ashamed (adj.)",
    "Sentence ①": "You should be ( ) of yourself for cheating on the test.",
    "Answer ①": "ashamed",
    "Sentence ②": "I’m ( ) to say this, but I have no money right now.",
    "Answer ②": "ashamed",
    "Definition": "feeling very sorry or guilty about something bad you have done, or someone in your family has done"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "rest of (phr.)",
    "Sentence ①": "I want to be with you for the ( ) ( ) my life.",
    "Answer ①": "rest of",
    "Sentence ②": "He stayed up studying for the ( ) ( ) the night.",
    "Answer ②": "rest of",
    "Definition": "the part of something that still remains, or the people or things that still remain"
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "capture (v.)",
    "Sentence ①": "The little boy ( ) a beetle in the woods.",
    "Answer ①": "captured",
    "Sentence ②": "The man was ( ) by the police and taken to prison.",
    "Answer ②": "captured",
    "Definition": "to catch a person or animal and keep them as a prisoner."
  },
  {
    "Book": "BP7 Gulliver's Travels",
    "Chapter": 10,
    "Word": "persuade (v.)",
    "Sentence ①": "I tried to ( ) Lucy to go to the movies with me.",
    "Answer ①": "persuade",
    "Sentence ②": "I ( ) my mom to take me to Disneyland.",
    "Answer ②": "persuaded",
    "Definition": "to make someone decide to do something by telling them why it is a good idea, or asking them many times"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "certain (adj.)",
    "Sentence ①": "I'm absolutely ( ) that I left the keys here.",
    "Answer ①": "certain",
    "Sentence ②": "We're all ( ) that we're going to win.",
    "Answer ②": "certain",
    "Definition": "completely sure"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "funeral (n.)",
    "Sentence ①": "You should wear black clothes if you are attending a ( ).",
    "Answer ①": "funeral",
    "Sentence ②": "Many fans attended the famous singer's ( ).",
    "Answer ②": "funeral",
    "Definition": "a ceremony for someone who has just died"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "solitary (adj.)",
    "Sentence ①": "George went on a ( ) walk around the park alone at night.",
    "Answer ①": "solitary",
    "Sentence ②": "Tom is a ( ) man. He doesn't like to spend time with his friends.",
    "Answer ②": "solitary",
    "Definition": "① a ( ) activity is something that you do alone ② ( ) people and animals spend a lot of time alone"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "generous (adj.)",
    "Sentence ①": "It was ( ) of him to pay for dinner.",
    "Answer ①": "generous",
    "Sentence ②": "Anne's always ( ) to the kids.",
    "Answer ②": "generous",
    "Definition": "someone who is ( ) is kind and enjoys giving people things or helping them"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "festive (adj.)",
    "Sentence ①": "Spring is the season of graduations and new beginnings. It is a ( ) time of the year in Japan.",
    "Answer ①": "festive",
    "Sentence ②": "Fondue is an easy and ( ) dish for a party.",
    "Answer ②": "festive",
    "Definition": "happy and special, because people are celebrating something"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "unfortunately (adv.)",
    "Sentence ①": "( ), the show had to be canceled because of bad weather.",
    "Answer ①": "Unfortunately",
    "Sentence ②": "I wish I could help you, but ( ), there's nothing I could do.",
    "Answer ②": "unfortunately",
    "Definition": "used to say that you wish something had not happened or was not true"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 1,
    "Word": "lazy (adj.)",
    "Sentence ①": "Jack felt too ( ) to get out of bed.",
    "Answer ①": "lazy",
    "Sentence ②": "Don't be ( ). Come outside and help us.",
    "Answer ②": "lazy",
    "Definition": "someone who is ( ) does not like working or doing things that need effort"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "echo (v.)",
    "Sentence ①": "The children's voices ( ) through the big old house.",
    "Answer ①": "echoed",
    "Sentence ②": "Thunder ( ) through the mountains.",
    "Answer ②": "echoed",
    "Definition": "if a sound or place ( ), you hear sounds repeated when they come back off walls or rock"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "transparent (adj.)",
    "Sentence ①": "Elena could see everything inside the ( ) bag.",
    "Answer ①": "transparent",
    "Sentence ②": "All the walls in the office are ( ) so people can see through everything.",
    "Answer ②": "transparent",
    "Definition": "clear and able to be seen through"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "digest (v.)",
    "Sentence ①": "Babies can't ( ) the food that adults eat. They need to have softer food.",
    "Answer ①": "digest",
    "Sentence ②": "You shouldn't go swimming until your food has had a chance to ( ).",
    "Answer ②": "digest",
    "Definition": "when you ( ) food, your stomach changes it into a form that your body can use"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "consequence (n.)",
    "Sentence ①": "The accident happened as a ( ) of drunk driving.",
    "Answer ①": "consequence",
    "Sentence ②": "The school will give Mark strict ( ) for cheating on his test.",
    "Answer ②": "consequences",
    "Definition": "something that happens as a result of something else"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "tremendous (adj.)",
    "Sentence ①": "The students have ( ) respect for Mrs. Baker.",
    "Answer ①": "tremendous",
    "Sentence ②": "Nelson has been busy with a ( ) amount of work.",
    "Answer ②": "tremendous",
    "Definition": "very great"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "tremble (v.)",
    "Sentence ①": "His lips started to ( ), and then he started to cry.",
    "Answer ①": "tremble",
    "Sentence ②": "She didn’t have a coat on, so she started ( ) in the cold.",
    "Answer ②": "trembling",
    "Definition": "to shake slightly because you are afraid, worried, or excited"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "spirit (n.)",
    "Sentence ①": "The ( ) of dead sailors from the boat accident appeared at midnight.",
    "Answer ①": "spirits",
    "Sentence ②": "Carol thought she saw a ( ) of her dead grandmother by the window.",
    "Answer ②": "spirit",
    "Definition": "a dead person or a creature that is thought to exist in a form that is not physical"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 2,
    "Word": "strike (v.)",
    "Sentence ①": "The game will start when the clock ( ) two.",
    "Answer ①": "strikes",
    "Sentence ②": "The tower bell was beginning to ( ) the hour.",
    "Answer ②": "strike",
    "Definition": "if a clock ( )s, its bell makes a number of sounds to show the time"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "past (n.)",
    "Sentence ①": "People travel more now than in the ( ).",
    "Answer ①": "past",
    "Sentence ②": "In the ( ), not many households had television.",
    "Answer ②": "past",
    "Definition": "the time that existed before the present"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "fetch (v.)",
    "Sentence ①": "Joan’s mother had come to ( ) her daughter.",
    "Answer ①": "fetch",
    "Sentence ②": "It is one of my chores to ( ) water from the well every morning.",
    "Answer ②": "fetch",
    "Definition": "to go and get something or someone and bring them back"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "luggage (n.)",
    "Sentence ①": "Do you have any more ( ) to bring to the trip?",
    "Answer ①": "luggage",
    "Sentence ②": "The movie star carried a lot of ( ) at the airport.",
    "Answer ②": "luggage",
    "Definition": "the bags and cases that you carry when you are traveling"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "fortune (n.)",
    "Sentence ①": "The man spent a ( ) on buying expensive cars.",
    "Answer ①": "fortune",
    "Sentence ②": "His family made a ( ) by buying and selling land.",
    "Answer ②": "fortune",
    "Definition": "a very large amount of money"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "vanish (v.)",
    "Sentence ①": "The coins ( ) from the magician’s hands.",
    "Answer ①": "vanished",
    "Sentence ②": "The bird on the tree suddenly ( ) from sight.",
    "Answer ②": "vanished",
    "Definition": "to disappear suddenly, especially in a way that cannot be easily explained"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 3,
    "Word": "secure (adj.)",
    "Sentence ①": "Now that Jenny has a ( ) job, she doesn’t have to worry about paying her rent anymore.",
    "Answer ①": "secure",
    "Sentence ②": "Make sure your house is ( ) before you leave.",
    "Answer ②": "secure",
    "Definition": "① not likely to change or fail ② a place that is ( ) is locked so that people cannot get in or out"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "present (n.)",
    "Sentence ①": "Don’t worry about the past or the future. Enjoy the ( ) while you can!",
    "Answer ①": "present",
    "Sentence ②": "We live in the ( ) but we should always learn from the past.",
    "Answer ②": "present",
    "Definition": "the time that is happening now"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "suburb (n.)",
    "Sentence ①": "My family moved to the ( ) of Yokohama when I was ten.",
    "Answer ①": "suburbs",
    "Sentence ②": "From the ( ) of Chicago, it takes about two hours to get to the center of the city.",
    "Answer ②": "suburbs",
    "Definition": "an area where people live in which is on the edge of a city"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "serve (v.)",
    "Sentence ①": "The waiter at the restaurant ( ) us quickly.",
    "Answer ①": "served",
    "Sentence ②": "Breakfast at the hotel is ( ) from 7:30am to 9:00 am.",
    "Answer ②": "served",
    "Definition": "to give someone food or drinks as part of a meal"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "wicked (adj.)",
    "Sentence ①": "Cinderella lived with her ( ) stepmother and stepsisters.",
    "Answer ①": "wicked",
    "Sentence ②": "The ( ) witch cast a spell on the princess.",
    "Answer ②": "wicked",
    "Definition": "very bad or evil"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "salary (n.)",
    "Sentence ①": "I don’t know how Todd could afford that car on his ( )!",
    "Answer ①": "salary",
    "Sentence ②": "Lawyers and doctors have high ( ).",
    "Answer ②": "salaries",
    "Definition": "money that you receive every month as payment from organization you work for"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "content (adj.)",
    "Sentence ①": "The actress was ( ) with her stage performance.",
    "Answer ①": "content",
    "Sentence ②": "Everyone was ( ) with their Christmas presents.",
    "Answer ②": "content",
    "Definition": "satisfied and happy"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 4,
    "Word": "humanity (n.)",
    "Sentence ①": "The priest talked about the importance of religion to ( ).",
    "Answer ①": "humanity",
    "Sentence ②": "Global warming is a dangerous threat to ( ).",
    "Answer ②": "humanity",
    "Definition": "people in general, or the state of being human"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "jingle (v.)",
    "Sentence ①": "The coins in Tom’s pocket ( ) as he ran.",
    "Answer ①": "jingled",
    "Sentence ②": "Bells all over the town ( ) on Christmas Eve.",
    "Answer ②": "jingled",
    "Definition": "if small metal objects ( ), or if you ( ) them, they make a noise when you shake them together"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "miserable (adj.)",
    "Sentence ①": "The dirty dog on the street looked ( ) in the rain.",
    "Answer ①": "miserable",
    "Sentence ②": "Jen has been stuck in a ( ) job for the last two years.",
    "Answer ②": "miserable",
    "Definition": "① very unhappy ② unpleasant"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "companion (n.)",
    "Sentence ①": "His pet dog was his constant ( ).",
    "Answer ①": "companion",
    "Sentence ②": "I would rather travel with a ( ) than travel alone.",
    "Answer ②": "companion",
    "Definition": "someone you spend a lot of time with, or who travels somewhere with you"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "rubbish (n.)",
    "Sentence ①": "Crows gathered around the pile of ( ) at the corner of the street.",
    "Answer ①": "rubbish",
    "Sentence ②": "You can throw away ( ) in that bin over there.",
    "Answer ②": "rubbish",
    "Definition": "things that people throw away such as old food, dirty paper etc"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "profit (n.)",
    "Sentence ①": "Harry made a huge ( ) by buying the house cheap and selling it at a high price.",
    "Answer ①": "profit",
    "Sentence ②": "All the ( ) from the auction will be donated to World Wildlife Fund.",
    "Answer ②": "profits",
    "Definition": "the money that you get when you sell something for more than you paid for it, especially in business"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "terror (n.)",
    "Sentence ①": "She screamed in ( ) as she saw a stranger in her house.",
    "Answer ①": "terror",
    "Sentence ②": "People fled in ( ) as fire tore through the building.",
    "Answer ②": "terror",
    "Definition": "a feeling of extreme fear"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "rigid (adj.)",
    "Sentence ①": "Beatrice was ( ) with terror. She couldn’t move another step.",
    "Answer ①": "rigid",
    "Sentence ②": "The dead body lay ( ) and still.",
    "Answer ②": "rigid",
    "Definition": "stiff and not moving or bending"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 5,
    "Word": "cemetery (n.)",
    "Sentence ①": "We went to visit the ( ) where our grandfather is buried.",
    "Answer ①": "cemetery",
    "Sentence ②": "Some people say that ghosts appear at night at that ( ).",
    "Answer ②": "cemetery",
    "Definition": "a place where dead people are buried"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 6,
    "Word": "light as a feather (phr.)",
    "Sentence ①": "The new fabric is as ( ) ( ) ( ) ( ).",
    "Answer ①": "light as a feather",
    "Sentence ②": "These shoes are really comfortable. They are also ( ) ( ) ( ) ( ).",
    "Answer ②": "light as a feather",
    "Definition": "extremely light"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 6,
    "Word": "glorious (adj.)",
    "Sentence ①": "You can see the ( ) views of the city from the helicopter.",
    "Answer ①": "glorious",
    "Sentence ②": "Mary saw a ( ) sunset at the Hawaiian beach.",
    "Answer ②": "glorious",
    "Definition": "very beautiful or impressive"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 6,
    "Word": "butcher (n.)",
    "Sentence ①": "Katrina stopped by the ( ) shop to buy some fresh meat.",
    "Answer ①": "butcher's",
    "Sentence ②": "The ( ) shop is next to the bakery.",
    "Answer ②": "butcher's",
    "Definition": "someone who owns or works in a shop that sells meat"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 6,
    "Word": "enormous (adj.)",
    "Sentence ①": "It cost an ( ) amount of money to make that movie.",
    "Answer ①": "enormous",
    "Sentence ②": "An ( ) Christmas tree was put out in front of the city hall.",
    "Answer ②": "enormous",
    "Definition": "very big in size, amount, or degree"
  },
  {
    "Book": "BP8 A Christmas Carol",
    "Chapter": 6,
    "Word": "favor (n.)",
    "Sentence ①": "Can you do me a ( ) and help me move this sofa?",
    "Answer ①": "favor",
    "Sentence ②": "Are they paying you for the work, or are you doing it as a ( )?",
    "Answer ②": "favor",
    "Definition": "something you do for someone in order to help them"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "bizarre (adj.)",
    "Sentence ①": "Together all these things gave him a ( ), almost grotesque personality.",
    "Answer ①": "bizarre",
    "Sentence ②": "The story had the most ( ) ending.",
    "Answer ②": "bizarre",
    "Definition": "very strange"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "profound (adj.)",
    "Sentence ①": "He invented brilliant theories that shocked scientists and had a ( ) effect on the world.",
    "Answer ①": "profound",
    "Sentence ②": "The story had a ( ) effect on me.",
    "Answer ②": "profound",
    "Definition": "a ( ) effect, feeling etc is very great or serious"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "condemn (v.)",
    "Sentence ①": "This is a cell for prisoners who are ( ) to death.",
    "Answer ①": "condemned",
    "Sentence ②": "The murderer was ( ) to a life sentence in prison.",
    "Answer ②": "condemned",
    "Definition": "to give a severe punishment to someone who is guilty of a crime"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "explosive (n.)",
    "Sentence ①": "You could destroy the cell with an ( ), but you can't have that.",
    "Answer ①": "explosive",
    "Sentence ②": "The 400 pounds of ( ) were packaged in yellow bags.",
    "Answer ②": "explosives",
    "Definition": "a substance that can cause an explosion"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "irritated (adj.)",
    "Sentence ①": "The Thinking Machine was visibly ( ).",
    "Answer ①": "irritated",
    "Sentence ②": "He was getting ( ) as he waited for hours in line.",
    "Answer ②": "irritated",
    "Definition": "to be annoyed"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "ironically (adv.)",
    "Sentence ①": "Certainly' said Professor Van Dusen and added ( ), 'I have done more ridiculous things than that to convince men of less important facts.'",
    "Answer ①": "ironically",
    "Sentence ②": "( ), a lot of crimes are committed quite close to police stations.",
    "Answer ②": "Ironically",
    "Definition": "① when you say the opposite of what you mean ② used when talking about a situation in which the opposite of what you expected happens or is true"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "convince (v.)",
    "Sentence ①": "I have done more ridiculous things than that to ( ) men of less important facts.",
    "Answer ①": "convince",
    "Sentence ②": "Her arguments didn't ( ) me.",
    "Answer ②": "convince",
    "Definition": "to make someone feel certain that something is true"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "absurd (adj.)",
    "Sentence ①": "Of course it was an ( ) thing but they decided it at that moment.",
    "Answer ①": "absurd",
    "Sentence ②": "It seems ( ) to go all that way just for the day.",
    "Answer ②": "absurd",
    "Definition": "completely unreasonable or silly"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "arrogance (n.)",
    "Sentence ①": "Ransome didn't like the ( ) in Van Dusen's voice.",
    "Answer ①": "arrogance",
    "Sentence ②": "The ( ) of those in power is quite shocking.",
    "Answer ②": "arrogance",
    "Definition": "behaving in an unpleasant or rude way because you think you are more important than other people"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 1,
    "Word": "bribe (v.)",
    "Sentence ①": "Could he ( ) your guards for twenty-five dollars?",
    "Answer ①": "bribe",
    "Sentence ②": "He ( ) one of the guards to smuggle out a note.",
    "Answer ②": "bribed",
    "Definition": "money or a gift that is given to someone to persuade them to do something, especially something dishonest"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "illuminate (v.)",
    "Sentence ①": "At night, strong lights ( ) the yard and the wall.",
    "Answer ①": "illuminated",
    "Sentence ②": "A single candle ( ) his face.",
    "Answer ②": "illuminated",
    "Definition": "to make light shine on something, or to fill a place with light"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "incarceration (n.)",
    "Sentence ①": "It was the morning after his ( ).",
    "Answer ①": "incarceration",
    "Sentence ②": "Her mother's ( ) in a psychiatric hospital changed the way her neighbors treated her.",
    "Answer ②": "incarceration",
    "Definition": "to put someone in prison"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "solid (adj.)",
    "Sentence ①": "The walls of the cell were perfectly ( ) and the bars on the window were new.",
    "Answer ①": "solid",
    "Sentence ②": "The milk was frozen ( ).",
    "Answer ②": "solid",
    "Definition": "hard or firm, with a fixed shape, and not hollow"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "discourage (v.)",
    "Sentence ①": "But this didn't ( ) The Thinking Machine from trying yet again.",
    "Answer ①": "discourage",
    "Sentence ②": "Don't let one failure ( ) you.",
    "Answer ②": "discourage",
    "Definition": "to persuade someone not to do something"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "inspection (n.)",
    "Sentence ①": "And then there is the ( ) at nine o'clock.",
    "Answer ①": "inspection",
    "Sentence ②": "An ( ) was carried out at the school.",
    "Answer ②": "inspection",
    "Definition": "to examine something carefully"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "dismantle (v.)",
    "Sentence ①": "There was nothing in his cell except a bed that was strongly made and impossible to ( ).",
    "Answer ①": "dismantle",
    "Sentence ②": "Chris ( ) the bike in five minutes.",
    "Answer ②": "dismantled",
    "Definition": "to take something apart so that it is in separate pieces"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "disturb (v.)",
    "Sentence ①": "Suddenly, he was ( ) by a rat which ran across his foot.",
    "Answer ①": "disturbed",
    "Sentence ②": "Noise from the street ( ) her sleep.",
    "Answer ②": "disturbed",
    "Definition": "to interrupt someone so that they cannot continue what they are doing"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "diameter (n.)",
    "Sentence ①": "It was a small circular hole in the floor about four centimeters in ( ).",
    "Answer ①": "diameter",
    "Sentence ②": "The wheel was about two feet in ( ).",
    "Answer ②": "diameter",
    "Definition": "a line from one side of a circle to the other, passing through the circle's center"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "modification (n.)",
    "Sentence ①": "Have they made any ( ) here in the last few years?",
    "Answer ①": "modifications",
    "Sentence ②": "We've made a few ( ) to the design.",
    "Answer ②": "modifications",
    "Definition": "to make small changes to something in order to make it better or more suitable"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 2,
    "Word": "incident (n.)",
    "Sentence ①": "Later he told the warden about the ( ), but the warden only smiled.",
    "Answer ①": "incident",
    "Sentence ②": "One man was arrested following the ( ).",
    "Answer ②": "incident",
    "Definition": "an event, especially one that is unusual, important, or violent"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 3,
    "Word": "investigate (v.)",
    "Sentence ①": "The warden decided to ( ).",
    "Answer ①": "investigate",
    "Sentence ②": "The cause of the fire is being ( ).",
    "Answer ②": "investigated",
    "Definition": "to try to find out about something, especially a crime or accident"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 3,
    "Word": "attempt (v.)",
    "Sentence ①": "You have ( ) to communicate with Dr. Ransome, said the warden, angrily.",
    "Answer ①": "attempted",
    "Sentence ②": "Now I will ( ) to explain why the revolution started.",
    "Answer ②": "attempt",
    "Definition": "when you try to do something"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 3,
    "Word": "tear (v.)",
    "Sentence ①": "The shirt was ( ) in two places.",
    "Answer ①": "torn",
    "Sentence ②": "I've ( ) my trousers.",
    "Answer ②": "torn",
    "Definition": "if you ( ) paper, clothes, or if it ( ), you make a hole in it or it breaks into small pieces"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 3,
    "Word": "immovable (adj.)",
    "Sentence ①": "He took the bars in his hands and tried to move them, but they were ( ).",
    "Answer ①": "immovable",
    "Sentence ②": "On one issue however, she was ( ).",
    "Answer ②": "immovable",
    "Definition": "to not move or change"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 3,
    "Word": "resound (v.)",
    "Sentence ①": "It was four o'clock the next morning when a terrible scream ( ) through the prison.",
    "Answer ①": "resounded",
    "Sentence ②": "His voice ( ) throughout the house.",
    "Answer ②": "resounded",
    "Definition": "to make a loud sound, or be full of a loud sound"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "acid (n.)",
    "Sentence ①": "They say he killed a woman with ( ).",
    "Answer ①": "acid",
    "Sentence ②": "Vinegar contains a kind of ( ).",
    "Answer ②": "acid",
    "Definition": "a liquid substance that contains hydrogen and has a pH value of less than seven. Acids can burn or damage what they touch"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "stare (v.)",
    "Sentence ①": "Ballard sat at his cell door until morning, his white face ( ) through the bars.",
    "Answer ①": "staring",
    "Sentence ②": "She ( ) at me in horror.",
    "Answer ②": "stared",
    "Definition": "to look at someone or something for a long time"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "superfluous (adj.)",
    "Sentence ①": "The third piece was completely ( ).",
    "Answer ①": "superfluous",
    "Sentence ②": "The building was simple with no ( ) decoration.",
    "Answer ②": "superfluous",
    "Definition": "not necessary or more than is needed"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "mental (adj.)",
    "Sentence ①": "The Thinking Machine made a ( ) astronomical calculation.",
    "Answer ①": "mental",
    "Sentence ②": "Stress affects physical and ( ) health.",
    "Answer ②": "mental",
    "Definition": "relating to the mind, or happening in the mind"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "astronomical (adj.)",
    "Sentence ①": "The Thinking Machine made a mental ( ) calculation.",
    "Answer ①": "astronomical",
    "Sentence ②": "Houses in the village are being sold at ( ) prices.",
    "Answer ②": "astronomical",
    "Definition": "( ) prices, costs, etc are very high"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "calculation (n.)",
    "Sentence ①": "The Thinking Machine made an astronomical mental ( ).",
    "Answer ①": "calculation",
    "Sentence ②": "According to some ( ), nearly 80% of teenagers have tried drugs.",
    "Answer ②": "calculations",
    "Definition": "when you use numbers to find out an amount, price etc"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "disgust (n.)",
    "Sentence ①": "He threw it to the floor in ( ).",
    "Answer ①": "disgust",
    "Sentence ②": "Everybody looked at me with ( ).",
    "Answer ②": "disgust",
    "Definition": "strong feeling of dislike, annoyance, or disapproval"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 4,
    "Word": "terrorise (v.)",
    "Sentence ①": "He got up and ran immediately to Cell 43, where he saw Ballard, his ( ) face pressed against the bars of the door.",
    "Answer ①": "terrorised",
    "Sentence ②": "The gang has ( ) the neighborhood for months.",
    "Answer ②": "terrorised",
    "Definition": "to deliberately frighten people by threatening them with violence"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 5,
    "Word": "obviously (adv.)",
    "Sentence ①": "Ballard was ( ) mad.",
    "Answer ①": "obviously",
    "Sentence ②": "She ( ) didn't want to go.",
    "Answer ②": "obviously",
    "Definition": "in a way that is easy to understand or see"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 5,
    "Word": "refer to (v.)",
    "Sentence ①": "They were written on the same linen and ( ) ( ) the meeting with Dr Ransome and Mr Fielding.",
    "Answer ①": "referred to",
    "Sentence ②": "We agreed never to ( ) ( ) the matter again.",
    "Answer ②": "refer to",
    "Definition": "to mention someone or something"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 5,
    "Word": "coincidence (n.)",
    "Sentence ①": "It's a ( ). It must be, he said.",
    "Answer ①": "coincidence",
    "Sentence ②": "It was pure ( ) that we were on the same train.",
    "Answer ②": "coincidence",
    "Definition": "when two things happen together, in a surprising way"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 5,
    "Word": "paralysed (adj.)",
    "Sentence ①": "The warden sat with his mouth open, ( ).",
    "Answer ①": "paralysed",
    "Sentence ②": "The stroke left him ( ).",
    "Answer ②": "paralysed",
    "Definition": "unable to move or act"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 5,
    "Word": "insist (v.)",
    "Sentence ①": "But how did you do it? the warden ( ).",
    "Answer ①": "insisted",
    "Sentence ②": "He ( ) he had done nothing wrong.",
    "Answer ②": "insisted",
    "Definition": "① to demand that something should happen ② to say firmly and often that something is true, especially when other people do not believe you"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "attract (v.)",
    "Sentence ①": "A person could come near the prison on that side without ( ) the attention of the guards.",
    "Answer ①": "attracting",
    "Sentence ②": "I waved to ( ) the waiter's attention.",
    "Answer ②": "attract",
    "Definition": "to make someone like something or feel interested in it"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "distract (v.)",
    "Sentence ①": "But before I could start work, I knew I had to ( ) the warden.",
    "Answer ①": "distract",
    "Sentence ②": "Don't ( ) me while I'm driving.",
    "Answer ②": "distract",
    "Definition": "to take someone's attention away from what they are doing"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "gradually (adv.)",
    "Sentence ①": "I was holding the thread and I saw that it became ( ) shorter.",
    "Answer ①": "gradually",
    "Sentence ②": "The truth is ( ) emerging.",
    "Answer ②": "gradually",
    "Definition": "slowly, over a long period of time"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "manoeuvre (n.)",
    "Sentence ①": "I decided to try some other ( ).",
    "Answer ①": "manoeuvres",
    "Sentence ②": "Parking the car in such a small space would be a tricky ( ).",
    "Answer ②": "manoeuvre",
    "Definition": "a movement that needs skill or care"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "current (n.)",
    "Sentence ①": "As I said, I cut the wire to the lights before the guards turned on the ( ).",
    "Answer ①": "current",
    "Sentence ②": "When they turned on the ( ), the light on my side of the yard didn't work.",
    "Answer ②": "current",
    "Definition": "a flow of electricity through a wire"
  },
  {
    "Book": "BP8 The Problem of Cell 13",
    "Chapter": 6,
    "Word": "incredible (adj.)",
    "Sentence ①": "( ) ! he said, Absolutely brilliant!",
    "Answer ①": "Incredible",
    "Sentence ②": "The view from the top floor of the building was ( ).",
    "Answer ②": "incredible",
    "Definition": "extremely good, large, or great"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "fortune (n.)",
    "Sentence ①": "It is common knowledge that a single man with a ( ) must be looking for a wife.",
    "Answer ①": "fortune",
    "Sentence ②": "She received a large ( ) from her grandfather.",
    "Answer ②": "fortune",
    "Definition": "a very large amount of money"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "forbid (v.)",
    "Sentence ①": "I ( ) you to do that!",
    "Answer ①": "forbid",
    "Sentence ②": "My parents ( ) me from staying out late on school nights.",
    "Answer ②": "forbid",
    "Definition": "to order somebody not to do something; to not allow something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "nerve (n.)",
    "Sentence ①": "You have no respect for my poor ( ).",
    "Answer ①": "nerves",
    "Sentence ②": "Breathing deeply should help you calm your ( ).",
    "Answer ②": "nerves",
    "Definition": "worried, nervous feelings"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "on the contrary (idiom)",
    "Sentence ①": "( ), I have a lot of respect for your nerves.",
    "Answer ①": "On the contrary",
    "Sentence ②": "Many people think that technology isolates us, but ( ), it has connected us like never before.",
    "Answer ②": "on the contrary",
    "Definition": "the opposite is true; certainly not"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "occupant (n.)",
    "Sentence ①": "They asked many questions about the new ( ) of Netherfield.",
    "Answer ①": "occupant",
    "Sentence ②": "The fire alarm alerted every ( ) in the building to evacuate immediately.",
    "Answer ②": "occupant",
    "Definition": "a person who is in a building, car, etc. at a particular time"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "fond (adj.)",
    "Sentence ①": "To be ( ) of dancing was a sure step towards falling in love.",
    "Answer ①": "fond",
    "Sentence ②": "She has always been ( ) of playing the piano and spends hours practicing every day.",
    "Answer ②": "fond",
    "Definition": "liking a person or thing, or liking doing something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "elegant (adj.)",
    "Sentence ①": "His sisters were fashionable, ( ) women.",
    "Answer ①": "elegant",
    "Sentence ②": "The architect designed an ( ) and modern building.",
    "Answer ②": "elegant",
    "Definition": "having a good or attractive style"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 1,
    "Word": "striking (adj.)",
    "Sentence ①": "Mr Darcy was a very ( ) man.",
    "Answer ①": "striking",
    "Sentence ②": "The speaker delivered a ( ) presentation that left the audience in awe and inspired.",
    "Answer ②": "striking",
    "Definition": "interesting and unusual enough to attract attention"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "pride (n.)",
    "Sentence ①": "Mrs Long told me that he sat near her for half an hour without speaking to her once. Too much ( ) I suspect.",
    "Answer ①": "pride",
    "Sentence ②": "She had too much ( ) to ask for help on which train to take.",
    "Answer ②": "pride",
    "Definition": "the feeling that you are better than other people"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "suspect (v.)",
    "Sentence ①": "Mrs Long told me that he sat near her for half an hour without speaking to her once. Too much pride I ( ).",
    "Answer ①": "suspect",
    "Sentence ②": "I ( ) Laura of taking the money.",
    "Answer ②": "suspect",
    "Definition": "to believe that somebody is guilty of something, although you do not have definite proof"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "intolerable (adj.)",
    "Sentence ①": "Mrs Bennet, however, was considered ( ).",
    "Answer ①": "intolerable",
    "Sentence ②": "The heat in the room was ( ), making it impossible to concentrate on anything.",
    "Answer ②": "intolerable",
    "Definition": "too bad, unpleasant or difficult to bear or accept"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "offend (v.)",
    "Sentence ①": "Neither gentleman was particularly ( ) by her determination not to dance.",
    "Answer ①": "offended",
    "Sentence ②": "It's important to choose our words carefully to avoid ( ) others and maintain positive relationships.",
    "Answer ②": "offending",
    "Definition": "to hurt somebody's feelings; to upset somebody"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "determination (n.)",
    "Sentence ①": "Neither gentleman was particularly offended by her ( ) not to dance.",
    "Answer ①": "determination",
    "Sentence ②": "With ( ), she successfully completed the challenging marathon.",
    "Answer ②": "determination",
    "Definition": "the quality of having firmly decided to do something and continue to do it, even if it is very difficult"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "pursuit (n.)",
    "Sentence ①": "If your daughter dies, it will be a comfort to know that it was all in ( ) of Mr Bingley and under your orders.",
    "Answer ①": "pursuit",
    "Sentence ②": "She dedicated her life to the ( ) of knowledge, earning multiple degrees and awards.",
    "Answer ②": "pursuit",
    "Definition": "the act of trying to achieve or get something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "anxious (adj.)",
    "Sentence ①": "Elizabeth was ( ) about her sister.",
    "Answer ①": "anxious",
    "Sentence ②": "The students were ( ) about their exam results, eagerly awaiting their grades.",
    "Answer ②": "anxious",
    "Definition": "worried and afraid"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 2,
    "Word": "oblige (v.)",
    "Sentence ①": "Jane was so unhappy about her sister going that Miss Bingley felt ( ) to invite Elizabeth to stay at Netherfield.",
    "Answer ①": "obliged",
    "Sentence ②": "The company's policy ( ) employees to attend regular training sessions.",
    "Answer ②": "obliges",
    "Definition": "to force somebody to do something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "premeditated (adj.)",
    "Sentence ①": "I always enjoy cheating a person of their ( ) contempt so I've decided to tell you that I don't want to dance.",
    "Answer ①": "premeditated",
    "Sentence ②": "The police discovered a ( ) scheme to rob the bank, involving detailed plans and accomplices.",
    "Answer ②": "premeditated",
    "Definition": "planned in advance"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "desire (n.)",
    "Sentence ①": "I have no ( ) to make fun of you.",
    "Answer ①": "desire",
    "Sentence ②": "I have no ( ) to visit that place again.",
    "Answer ②": "desire",
    "Definition": "the feeling of wanting something very much"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "settle (v.)",
    "Sentence ①": "I hope you are right, otherwise they'll be very poor indeed, given the way things have been ( ).",
    "Answer ①": "settled",
    "Sentence ②": "All the necessary arrangements for the trip were ( ), thanks to their mom's efforts.",
    "Answer ②": "settled",
    "Definition": "to decide or arrange something finally"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "widow (n.)",
    "Sentence ①": "You said she is a ( ).",
    "Answer ①": "widow",
    "Sentence ②": "The ( ) established a foundation in her late husband's memory to help others in need.",
    "Answer ②": "widow",
    "Definition": "a woman whose husband or wife has died and who has not married again"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "flattery (n.)",
    "Sentence ①": "Her Ladyship likes a little ( ).",
    "Answer ①": "flattery",
    "Sentence ②": "The politician was skilled in the art of ( ), using compliments to win over the crowd.",
    "Answer ②": "flattery",
    "Definition": "saying good things about somebody or something that you do not really mean"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "fortunate (adj.)",
    "Sentence ①": "You are ( ) to possess a talent for flattery.",
    "Answer ①": "fortunate",
    "Sentence ②": "We were ( ) to have clear weather during our vacation, allowing us to enjoy outdoor activities.",
    "Answer ②": "fortunate",
    "Definition": "lucky"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "possess (v.)",
    "Sentence ①": "You are fortunate to ( ) a talent for flattery.",
    "Answer ①": "possess",
    "Sentence ②": "She ( ) excellent leadership skills.",
    "Answer ②": "possesses",
    "Definition": "to have or own something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 3,
    "Word": "regiment (n.)",
    "Sentence ①": "The arrival of a ( ) of soldiers had recently created much excitement in the town.",
    "Answer ①": "regiment",
    "Sentence ②": "He joined the military and became a member of the elite Special Forces ( ).",
    "Answer ②": "regiment",
    "Definition": "a group of soldiers in the army who are commanded by a colonel"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "superior (adj.)",
    "Sentence ①": "The officers of that regiment were in general very handsome and gentlemanlike, but Mr Wickham was ( ) to them all by far.",
    "Answer ①": "superior",
    "Sentence ②": "The ( ) quality of the product made it stand out among its competitors.",
    "Answer ②": "superior",
    "Definition": "better than usual or than somebody or something else"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "parish (n.)",
    "Sentence ①": "We were born in the same ( ) and we grew up together.",
    "Answer ①": "parish",
    "Sentence ②": "The local ( ) organized a community gathering to celebrate the holiday season.",
    "Answer ②": "parish",
    "Definition": "an area or a district that has its own church; the people who live in this area"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "devote (yourself) to (phr. v.)",
    "Sentence ①": "He ( ) all his time to the care of the Pemberley property.",
    "Answer ①": "devoted",
    "Sentence ②": "She gave up work to ( ) herself full-time to her music.",
    "Answer ②": "devote",
    "Definition": "to give most of your time, energy, etc. into somebody or something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "excess (n.)",
    "Sentence ①": "They all suffer from the same thing - an ( ) of pride.",
    "Answer ①": "excess",
    "Sentence ②": "The ( ) of noise from the construction site made it challenging to concentrate and work.",
    "Answer ②": "excess",
    "Definition": "more of something than is necessary or usual; too much of something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "supervise (v.)",
    "Sentence ①": "I believe she has lived in London since her father's death, with a lady who ( ) her education.",
    "Answer ①": "supervises",
    "Sentence ②": "It is important to have an adult present to ( ) children during outdoor activities.",
    "Answer ②": "supervise",
    "Definition": "to watch somebody or something to make sure that work is being done properly or that people are behaving correctly"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "ruin (v.)",
    "Sentence ①": "Her evening had been ( ), but after telling all her troubles to Charlotte, her good spirits returned.",
    "Answer ①": "ruined",
    "Sentence ②": "Leaving the cake out in the sun for too long will quickly ( ) its freshness.",
    "Answer ②": "ruin",
    "Definition": "to damage something so badly that it loses all its value, pleasure, etc."
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "acquaintance (n.)",
    "Sentence ①": "When you saw us there the other day we had just made a pleasant new ( ).",
    "Answer ①": "acquaintance",
    "Sentence ②": "I ran into an old ( ) from high school at the grocery store yesterday.",
    "Answer ②": "acquaintance",
    "Definition": "a person that you know but who is not a close friend"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 4,
    "Word": "interference (n.)",
    "Sentence ①": "Excuse my ( ).",
    "Answer ①": "interference",
    "Sentence ②": "I was frustrated by my sister's ( ) during my phone calls, as it disrupted my privacy and conversations.",
    "Answer ②": "interference",
    "Definition": "the act of getting involved in a situation that does not involve you and where you are not wanted"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "solemn (adj.)",
    "Sentence ①": "Mr Collins was so ( ) that the idea of his feelings running away with him made Elizabeth want to laugh.",
    "Answer ①": "solemn",
    "Sentence ②": "The memorial service was a ( ) occasion, filled with tears and heartfelt remembrances.",
    "Answer ②": "solemn",
    "Definition": "very serious; not happy or smiling"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "gallant (adj.)",
    "Sentence ①": "‘You are charming!’ he cried, sounding awkwardly ( ).",
    "Answer ①": "gallant",
    "Sentence ②": "The gentleman held the door open for the elderly lady, showcasing his ( ) manners.",
    "Answer ②": "gallant",
    "Definition": "polite to and showing respect for women"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "consent (n.)",
    "Sentence ①": "I am convinced that when your parents hear and give their ( ) to my proposals, you will accept them too.",
    "Answer ①": "consent",
    "Sentence ②": "Her surgery cannot proceed without her parents informed ( ).",
    "Answer ②": "consent",
    "Definition": "agreement; permission"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "amusing (adj.)",
    "Sentence ①": "Mrs Bennet didn't find it ( ), however.",
    "Answer ①": "amusing",
    "Sentence ②": "Watching the playful interaction between the puppies was both adorable and ( ).",
    "Answer ②": "amusing",
    "Definition": "causing you to laugh or smile"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "meditate (v.)",
    "Sentence ①": "Meanwhile Mr Collins was ( ) in solitude and silence on what had happened.",
    "Answer ①": "meditating",
    "Sentence ②": "Before making a big decision, he takes time to ( ) on the potential outcomes and consequences.",
    "Answer ②": "meditate",
    "Definition": "to think deeply about something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "regret (n.)",
    "Sentence ①": "Caroline concluded by passing on her brother's ( ) at not having had time to pay his respects to his friends in Hertfordshire before he left.",
    "Answer ①": "regret",
    "Sentence ②": "She felt a deep sense of ( ) for not attending her friend's wedding.",
    "Answer ②": "regret",
    "Definition": "a sad feeling about something that cannot now be changed"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "accomplishment (n.)",
    "Sentence ①": "Caroline praised her ( ) and said that they had become very good friends.",
    "Answer ①": "accomplishments",
    "Sentence ②": "We threw a party to celebrate the ( ) of the plan.",
    "Answer ②": "accomplishment",
    "Definition": "the act of completing something successfully"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 5,
    "Word": "easy-going (adj.)",
    "Sentence ①": "She suspected that his ( ) character had allowed his family and friends to interfere with his happiness.",
    "Answer ①": "easy-going",
    "Sentence ②": "The ( ) atmosphere of the beach resort made it a perfect destination for a relaxing vacation.",
    "Answer ②": "easy-going",
    "Definition": "calm, relaxed and not easily worried or upset by what other people do"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "agreeable (adj.)",
    "Sentence ①": "An ( ), intelligent, elegant woman, she was very popular with her two eldest nieces.",
    "Answer ①": "agreeable",
    "Sentence ②": "Her ( ) personality made her popular among her colleagues and friends.",
    "Answer ②": "agreeable",
    "Definition": "pleasant, nice"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "indifferent (adj.)",
    "Sentence ①": "If I had been in love, I would detest even the mention of his name, but I'm ( ) to it.",
    "Answer ①": "indifferent",
    "Sentence ②": "He seemed ( ) to my concerns, showing no interest or empathy.",
    "Answer ②": "indifferent",
    "Definition": "not interested in or caring about somebody or something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "insignificant (adj.)",
    "Sentence ①": "I'd probably be a more interesting person to my friends if I were in love, but I don't mind being ( ).",
    "Answer ①": "insignificant",
    "Sentence ②": "The error was ( ) and did not affect the overall outcome of the experiment.",
    "Answer ②": "insignificant",
    "Definition": "of little value or importance"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "authoritative (adj.)",
    "Sentence ①": "When she spoke, her tone was ( ).",
    "Answer ①": "authoritative",
    "Sentence ②": "The CEO's ( ) leadership style motivated the team to achieve high results.",
    "Answer ②": "authoritative",
    "Definition": "having authority; demanding or expecting that people obey you"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "converse (v.)",
    "Sentence ①": "He ( ) politely with the ladies while his cousin sat silently next to him.",
    "Answer ①": "conversed",
    "Sentence ②": "Let's ( ) about our plans for the weekend over a cup of coffee.",
    "Answer ②": "converse",
    "Definition": "to talk to somebody; to have a conversation"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "lively (adj.)",
    "Sentence ①": "Their conversation was so ( ) that Mr Darcy often turned his eyes in their direction.",
    "Answer ①": "lively",
    "Sentence ②": "The ( ) music at the party had everyone dancing and having a great time.",
    "Answer ②": "lively",
    "Definition": "full of energy, interest, excitement, etc"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "charming (adj.)",
    "Sentence ①": "I understand she's a ( ) girl.",
    "Answer ①": "charming",
    "Sentence ②": "He was a ( ) host, making everyone feel welcome and comfortable.",
    "Answer ②": "charming",
    "Definition": "very pleasing or attractive"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 6,
    "Word": "blame (v.)",
    "Sentence ①": "Up to now she had always believed Miss Bingley had been responsible for Jane's unhappiness but now it seemed that Darcy was to ( ).",
    "Answer ①": "blame",
    "Sentence ②": "Both parties were to ( ) for the miscommunication.",
    "Answer ②": "blame",
    "Definition": "to be responsible for something bad"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "compassion (n.)",
    "Sentence ①": "At first she was sorry about the unhappiness she was going to cause him but then, as she listened to him, her ( ) turned to anger.",
    "Answer ①": "compassion",
    "Sentence ②": "The nurse's ( ) made the patients feel cared for and understood.",
    "Answer ②": "compassion",
    "Definition": "understanding or pity for somebody who is suffering"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "patience (n.)",
    "Sentence ①": "She prepared herself to answer him with as much ( ) as she could muster.",
    "Answer ①": "patience",
    "Sentence ②": "It takes ( ) to learn a new skill or language.",
    "Answer ②": "patience",
    "Definition": "quality of being able to stay calm and not get angry, especially when there is a difficulty or you have to wait a long time"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "gratitude (n.)",
    "Sentence ①": "It is usual for a girl to show her ( ) to a man, even when refusing him.",
    "Answer ①": "gratitude",
    "Sentence ②": "I felt a deep sense of ( ) towards the volunteers who dedicated their time to the community project.",
    "Answer ②": "gratitude",
    "Definition": "the feeling of being grateful or of wanting to give your thanks to somebody"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "contempt (n.)",
    "Sentence ①": "Now you show ( ) when his misfortunes are mentioned.",
    "Answer ①": "contempt",
    "Sentence ②": "The politician openly expressed ( ) for the opposing party, making harsh comments.",
    "Answer ②": "contempt",
    "Definition": "the feeling that somebody or something does not deserve any respect or is without value"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "frank (adj.)",
    "Sentence ①": "Perhaps you would have been more willing to overlook them if your own pride hadn't been hurt by my ( ) confession.",
    "Answer ①": "frank",
    "Sentence ②": "She appreciated his ( ) opinion, even though it was not what she wanted to hear.",
    "Answer ②": "frank",
    "Definition": "showing your thoughts and feelings clearly; saying what you mean"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "pace (v.)",
    "Sentence ①": "She was walking around the park that surrounded Rosings when she saw a male figure ( ) up and down.",
    "Answer ①": "pacing",
    "Sentence ②": "Nervous about the upcoming presentation, she ( ) nervously in the hallway.",
    "Answer ②": "paced",
    "Definition": "to walk up and down in the same area many times, especially because you are nervous or angry"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "assurance (n.)",
    "Sentence ①": "The letter began with an ( ) that he wasn't going to repeat the offer that had so disgusted her the previous day.",
    "Answer ①": "assurance",
    "Sentence ②": "She gave me her ( ) that she would always be there to help me.",
    "Answer ②": "assurance",
    "Definition": "a promise that something will certainly happen or be true"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 7,
    "Word": "wander (v.)",
    "Sentence ①": "For a couple of hours she ( ) around the lanes, trying to reconcile herself to this sudden and important change in her feelings.",
    "Answer ①": "wandered",
    "Sentence ②": "The little girl loved to ( ) in the garden, exploring the colorful flowers and plants.",
    "Answer ②": "wander",
    "Definition": "to walk somewhere slowly with no particular sense of direction or purpose"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "restore (v.)",
    "Sentence ①": "Lydia's happiness was very soon ( ), when she received an invitation from her friend Mrs Forster.",
    "Answer ①": "restored",
    "Sentence ②": "After the storm, the community worked",
    "Answer ②": "restore",
    "Definition": "to make something return to its former condition"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "estate (n.)",
    "Sentence ①": "When they were a few miles from Lambton, Elizabeth was told that the ( ) of Pemberley wasn't far away.",
    "Answer ①": "estate",
    "Sentence ②": "The large ( ) had a beautiful mansion surrounded by rose gardens.",
    "Answer ②": "estate",
    "Definition": "a large area of land in the countryside that is owned by one person or family"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "blush (v.)",
    "Sentence ①": "They both ( ) and for a moment neither moved.",
    "Answer ①": "blushed",
    "Sentence ②": "Embarrassed by her mistake, she ( ) and apologized.",
    "Answer ②": "blushed",
    "Definition": "to become red in the face, especially because you are embarrassed or feel guilty"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "enquiry (n.)",
    "Sentence ①": "After a few polite ( ) about her family, he couldn't find anything else to say and took his leave.",
    "Answer ①": "enquiries",
    "Sentence ②": "The customer made an ( ) about the size of the product.",
    "Answer ②": "enquiry",
    "Definition": "a request for information about something; a question that you ask about something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "remark (v.)",
    "Sentence ①": "Her aunt and uncle ( ) on how handsome he was but Elizabeth didn't hear them.",
    "Answer ①": "remarked",
    "Sentence ②": "She couldn't help but ( ) on the amazing view from the balcony.",
    "Answer ②": "remark",
    "Definition": "to say or write something; to comment"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "shame (n.)",
    "Sentence ①": "She was lost in her own feelings of ( ) and anger.",
    "Answer ①": "shame",
    "Sentence ②": "The student felt a sense of ( ) when caught cheating on the exam.",
    "Answer ②": "shame",
    "Definition": "the unpleasant feelings of being embarrassed, guilty or sad that you get when you have done something stupid or wrong; the ability to have these feelings"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "triumph (n.)",
    "Sentence ①": "Her uncle was an intelligent, refined man and as Elizabeth listened to them, she was aware of a feeling of ( ) rising in her.",
    "Answer ①": "triumph",
    "Sentence ②": "The swimmer's gold medal was the ultimate ( ) of her years of hard work.",
    "Answer ②": "triumph",
    "Definition": "a great success or victory; the feeling of happiness that you have because of this"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 8,
    "Word": "compliment (n.)",
    "Sentence ①": "Elizabeth recognised that this was a great ( ) to her, even though she couldn't understand his reasons.",
    "Answer ①": "compliment",
    "Sentence ②": "Her outfit received many ( ) at the party.",
    "Answer ②": "compliments",
    "Definition": "a statement or action that shows praise for somebody"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "urgent (adj.)",
    "Sentence ①": "I must find Mr Gardiner this minute. It's extremely ( ).",
    "Answer ①": "urgent",
    "Sentence ②": "The doctor instructed him to go to the hospital for an ( ) medical examination.",
    "Answer ②": "urgent",
    "Definition": "needing immediate attention"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "concern (n.)",
    "Sentence ①": "His ( ) was obvious.",
    "Answer ①": "concern",
    "Sentence ②": "She hasn't been seen for four days, and there is ( ) for her safety.",
    "Answer ②": "concern",
    "Definition": "a feeling of worry; something that causes worry"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "dare (v.)",
    "Sentence ①": "When he had gone she sat down but looked so ill that Darcy didn't ( ) leave her.",
    "Answer ①": "dare",
    "Sentence ②": "She didn't ( ) to go bungee jumping due to her fear of heights.",
    "Answer ②": "dare",
    "Definition": "to have enough courage to do something"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "proof (n.)",
    "Sentence ①": "Wasn't the disgraceful way her family had behaved ( ) that he had been right about their social inferiority?",
    "Answer ①": "proof",
    "Sentence ②": "She kept the ticket as ( ) of attending the concert.",
    "Answer ②": "proof",
    "Definition": "information, documents, etc. that show that something is true"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "mortified (adj.)",
    "Sentence ①": "She was ( ) that he knew about her sister's disgraceful behaviour.",
    "Answer ①": "mortified",
    "Sentence ②": "The singer forgot the lyrics on stage and felt ( ) in front of the audience.",
    "Answer ②": "mortified",
    "Definition": "to be made to feel very embarrassed"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "despise (v.)",
    "Sentence ①": "Mr Darcy would never want to be part of a family related to Mr Wickham, a man he ( ).",
    "Answer ①": "despised",
    "Sentence ②": "They ( ) the dictator for taking away their freedom of speech and human rights.",
    "Answer ②": "despised",
    "Definition": "to hate somebody or something very much"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "delight (n.)",
    "Sentence ①": "Mrs Bennet welcomed her with obvious ( ) and offered her hand to Wickham.",
    "Answer ①": "delight",
    "Sentence ②": "She found ( ) in reading a good book on a rainy afternoon.",
    "Answer ②": "delight",
    "Definition": "great pleasure; joy"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 9,
    "Word": "disgusted (adj.)",
    "Sentence ①": "Elizabeth was ( ) and even Jane was shocked.",
    "Answer ①": "disgusted",
    "Sentence ②": "She was ( ) by the offensive comments made by her classmate.",
    "Answer ②": "disgusted",
    "Definition": "not liking or approving of somebody or something at all"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "presence (n.)",
    "Sentence ①": "Mrs Gardiner began her letter by expressing her surprise that Elizabeth needed an explanation for Darcy's ( ) at Lydia's wedding.",
    "Answer ①": "presence",
    "Sentence ②": "He felt comforted by the ( ) of his best friend, who always supported him.",
    "Answer ②": "presence",
    "Definition": "the fact of being in a particular place"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "amends (n.)",
    "Sentence ①": "Now he considered it his duty to make ( ).",
    "Answer ①": "amends",
    "Sentence ②": "She tried to make ( ) for her mistake by helping with the cleanup.",
    "Answer ②": "amends",
    "Definition": "to do something for somebody that shows that you are sorry for something bad that you have done before"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "dismiss (v.)",
    "Sentence ①": "Her heart whispered that he had done it for her but she ( ) the idea immediately.",
    "Answer ①": "dismissed",
    "Sentence ②": "She ( ) the negative comments and focused on her goals.",
    "Answer ②": "dismissed",
    "Definition": "decide that somebody or something is not important and not worth thinking or talking about"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "impudent (adj.)",
    "Sentence ①": "It hurt to remember all the ( ) things she had said in the past.",
    "Answer ①": "impudent",
    "Sentence ②": "Cutting in line is an ( ) act that shows a lack of consideration for others.",
    "Answer ②": "impudent",
    "Definition": "very rude; lacking respect and not polite"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "revive (v.)",
    "Sentence ①": "Mrs Bennet's spirits ( ) when she heard that the housekeeper at Netherfield had received word that her master was expected in a day or two.",
    "Answer ①": "revived",
    "Sentence ②": "A good night's sleep can ( ) your energy and make you feel refreshed in the morning.",
    "Answer ②": "revive",
    "Definition": "to become strong, healthy, or conscious again; to make somebody or something become strong, healthy or conscious again"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "exaggerated (adj.)",
    "Sentence ①": "He was obviously embarrassed by Mrs Bennet's ( ) politeness towards himself and her cold manner towards Darcy.",
    "Answer ①": "exaggerated",
    "Sentence ②": "He always tells ( ) stories to make himself sound more interesting.",
    "Answer ②": "exaggerated",
    "Definition": "to make something seem larger, better, worse, etc. than it really is"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "assemble (v.)",
    "Sentence ①": "On Tuesday a large party ( ) at Longbourn.",
    "Answer ①": "assembled",
    "Sentence ②": "The workers were asked to ( ) in the conference room for an important announcement.",
    "Answer ②": "assemble",
    "Definition": "to come together or bring somebody or something together in a group"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 10,
    "Word": "household (n.)",
    "Sentence ①": "That evening there was great happiness in the Bennet ( ).",
    "Answer ①": "household",
    "Sentence ②": "Our ( ) consists of six family members, including our parents, siblings, and grandparents.",
    "Answer ②": "household",
    "Definition": "all the people who live in one house and the work, money, organization, etc. that is needed to look after them"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "scandalous (adj.)",
    "Sentence ①": "I was told a most ( ) story two days ago.",
    "Answer ①": "scandalous",
    "Sentence ②": "The novel exposed the ( ) secrets of the elite society.",
    "Answer ②": "scandalous",
    "Definition": "very shocking or wrong"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "reciprocate (v.)",
    "Sentence ①": "You may have encouraged him by telling him his affection was ( ).",
    "Answer ①": "reciprocated",
    "Sentence ②": "After receiving a thoughtful gift, she felt compelled to ( ) the gesture.",
    "Answer ②": "reciprocate",
    "Definition": "to behave or feel towards somebody in the same way as they behave or feel towards you"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "scruples (n.)",
    "Sentence ①": "After saying those awful things about you to your face, I wouldn't have had any ( ) about saying them to your relatives!",
    "Answer ①": "scruples",
    "Sentence ②": "He is known to have ( ) and always considers the ethical implications of his actions.",
    "Answer ②": "scruples",
    "Definition": "a feeling that stops you from doing something that you think is morally wrong"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "insensitive (adj.)",
    "Sentence ①": "You thought I was hard and ( ).",
    "Answer ①": "insensitive",
    "Sentence ②": "His ( ) comment about her appearance left her feeling hurt and self-conscious.",
    "Answer ②": "insensitive",
    "Definition": "not knowing or caring how another person feels and therefore likely to hurt or upset them"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "prejudice (n.)",
    "Sentence ①": "She explained how she had felt and how, slowly, all her ( ) had disappeared.",
    "Answer ①": "prejudice",
    "Sentence ②": "She experienced ( ) firsthand when she faced discrimination for being Japanese.",
    "Answer ②": "prejudice",
    "Definition": "a strong unreasonable feeling of not liking or trusting a person, group, etc., especially when it is based on the human group they belong to, their religion or their sex"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "confess (v.)",
    "Sentence ①": "I must ( ), that I love him more than I love Bingley!",
    "Answer ①": "confess",
    "Sentence ②": "It took me a while, but I finally gathered the courage to ( ) my mistake to my boss.",
    "Answer ②": "confess",
    "Definition": "to admit that you have done something bad or wrong"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "astonishment (n.)",
    "Sentence ①": "He listened to her with ( ).",
    "Answer ①": "astonishment",
    "Sentence ②": "He dropped his book in ( ).",
    "Answer ②": "astonishment",
    "Definition": "very great surprise"
  },
  {
    "Book": "BP9 Pride and Prejudice",
    "Chapter": 11,
    "Word": "extraordinary (adj.)",
    "Sentence ①": "The effect was ( ).",
    "Answer ①": "extraordinary",
    "Sentence ②": "That was an ( ) behavior for a teacher!",
    "Answer ②": "extraordinary",
    "Definition": "not what you would expect in a particular situation; very strange or unusual"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "manage to (phr. v.)",
    "Sentence ①": "My first name is Philip but when I was a small child I could only ( ) ( ) say Pip.",
    "Answer ①": "manage to",
    "Sentence ②": "After several tries, I finally ( ) ( ) open the door.",
    "Answer ②": "managed to",
    "Definition": "to succeed in doing or dealing with something difficult; to be able to do something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "fierce (adj.)",
    "Sentence ①": "His clothes were wet and torn and he looked exhausted, ( ) and hungry.",
    "Answer ①": "fierce",
    "Sentence ②": "The house was guarded by ( ) dogs.",
    "Answer ②": "fierce",
    "Definition": "angry, aggressive, and frightening"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "assure (v.)",
    "Sentence ①": "I ( ) him that I would bring the file and the food early the next morning.",
    "Answer ①": "assured",
    "Sentence ②": "I ( ) you that the plan is perfectly safe.",
    "Answer ②": "assure",
    "Definition": "to promise somebody that something will certainly happen or be true, especially if they are worried"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "scold (v.)",
    "Sentence ①": "Joe and I were often ( ) by my sister.",
    "Answer ①": "scolded",
    "Sentence ②": "Her father ( ) her for upsetting her mother.",
    "Answer ②": "scolded",
    "Definition": "to speak angrily to somebody because they have done something bad or wrong"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "convict (n.)",
    "Sentence ①": "Another ( ) got away.",
    "Answer ①": "convict",
    "Sentence ②": "There was a warning that the three escaped ( ) were armed and dangerous.",
    "Answer ②": "convicts",
    "Definition": "a person who has been found guilty of a crime and put into prison"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "forge (n.)",
    "Sentence ①": "I unlocked the door of the ( ), got a file from Joe's tool box and ran to the foggy marshes.",
    "Answer ①": "forge",
    "Sentence ②": "The ( ) was occupied by the blacksmith when I walked in.",
    "Answer ②": "forge",
    "Definition": "a place where objects are made by heating and shaping metal"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "appreciative (adj.)",
    "Sentence ①": "She was always very ( ).",
    "Answer ①": "appreciative",
    "Sentence ②": "He was very ( ) of our efforts to help.",
    "Answer ②": "appreciative",
    "Definition": "grateful for something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 1,
    "Word": "criticise (criticize) (v.)",
    "Sentence ①": "I was severely ( ) by everyone.",
    "Answer ①": "criticised",
    "Sentence ②": "The doctor was ( ) for not sending the patient to the hospital.",
    "Answer ②": "criticised",
    "Definition": "to say what is bad or wrong with somebody/something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "irritated (adj.)",
    "Sentence ①": "Why do you want him?' asked my sister, who was ( ).",
    "Answer ①": "irritated",
    "Sentence ②": "He was getting ( ) because he was stuck in heavy traffic.",
    "Answer ②": "irritated",
    "Definition": "annoyed or angry"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "capture (v.)",
    "Sentence ①": "We'll ( ) those convicts before it's dark.",
    "Answer ①": "capture",
    "Sentence ②": "The lion was ( ) and taken back to the zoo.",
    "Answer ②": "captured",
    "Definition": "to catch a person or an animal and keep them as a prisoner or shut them in a space that they cannot escape from"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "declare (v.)",
    "Sentence ①": "Mr. Joe threw off her coat and ( ) excitedly, 'Now, if this boy isn't grateful tonight, he'll never be.'",
    "Answer ①": "declared",
    "Sentence ②": "It's not fair,' ( ) Jane.",
    "Answer ②": "declared",
    "Definition": "to state something publicly and officially or to make something known in a firm, clear way"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "immensely (adv.)",
    "Sentence ①": "An ( ) rich and strange old woman lived in a large dark house.",
    "Answer ①": "immensely",
    "Sentence ②": "He ( ) enjoyed the summer study abroad program.",
    "Answer ②": "immensely",
    "Definition": "extremely; very much"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "bluntly (adv.)",
    "Sentence ①": "Miss Havisham doesn't want to see you,' said the girl very ( ).",
    "Answer ①": "bluntly",
    "Sentence ②": "To put it ( ), you're not going to pass the exam.",
    "Answer ②": "bluntly",
    "Definition": "in a very direct way, without trying to be polite or kind"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "evidently (adv.)",
    "Sentence ①": "Around the room there were suitcases with dresses and jewels that were ready for a journey that ( ) never took place.",
    "Answer ①": "evidently",
    "Sentence ②": "She was ( ) extremely shocked at the news.",
    "Answer ②": "evidently",
    "Definition": "clearly; that can be easily seen or understood"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "bizarre (adj.)",
    "Sentence ①": "She cried out with a ( ) smile.",
    "Answer ①": "bizarre",
    "Sentence ②": "The story had the most ( ) ending.",
    "Answer ②": "bizarre",
    "Definition": "very strange"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 2,
    "Word": "circumstance (n.)",
    "Sentence ①": "I stood in front of her helplessly, because no order could have been more difficult to obey in those ( ).",
    "Answer ①": "circumstances",
    "Sentence ②": "Police said there were no suspicious ( ) surrounding the boy's death.",
    "Answer ②": "circumstances",
    "Definition": "the facts and events that affect what happened in a particular situation"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "aspire (v.)",
    "Sentence ①": "In my heart I wanted to be accepted by Estella, who was everything I ( ) to be.",
    "Answer ①": "aspired",
    "Sentence ②": "There are many students here who ( ) to become a doctor.",
    "Answer ②": "aspire",
    "Definition": "to have a strong desire to have or do something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "stir (v.)",
    "Sentence ①": "He ( ) the beer with a file.",
    "Answer ①": "stirred",
    "Sentence ②": "She ( ) her coffee with a teaspoon.",
    "Answer ②": "stirred",
    "Definition": "to move a liquid, etc. round and round, using a spoon, etc."
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "arrogant (adj.)",
    "Sentence ①": "Estella was more ( ) than ever.",
    "Answer ①": "arrogant",
    "Sentence ②": "I was irritated by such an ( ) attitude.",
    "Answer ②": "arrogant",
    "Definition": "thinking that you are better and more important than other people"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "gloomy (adj.)",
    "Sentence ①": "She led me to a dark, ( ) room where there were some ladies and gentlemen.",
    "Answer ①": "gloomy",
    "Sentence ②": "This dark paint makes the room look very ( ).",
    "Answer ②": "gloomy",
    "Definition": "dark in way that makes you sad"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "disapprovingly (adv.)",
    "Sentence ①": "They looked at me ( ) while Estella led me through another dark passage.",
    "Answer ①": "disapprovingly",
    "Sentence ②": "He looked ( ) at the row of empty wine bottles.",
    "Answer ②": "disapprovingly",
    "Definition": "in a way that shows that you do not approve of somebody/something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "firmly (adv.)",
    "Sentence ①": "Miss Havisham stopped walking and looked at the lady ( ).",
    "Answer ①": "firmly",
    "Sentence ②": "Keep your eyes ( ) on the road ahead.",
    "Answer ②": "firmly",
    "Definition": "in a strong or definite way"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "glance (v.)",
    "Sentence ①": "Miss Havisham ( ) at me and said, 'This is my birthday, Pip.'",
    "Answer ①": "glanced",
    "Sentence ②": "He ( ) at her, smiled and said hi.",
    "Answer ②": "glanced",
    "Definition": "to look quickly at somebody/something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 3,
    "Word": "admiration (n.)",
    "Sentence ①": "She seemed to enjoy watching my ( ) for Estella and my sadness when Estella laughed at me.",
    "Answer ①": "admiration",
    "Sentence ②": "I have great ( ) for what he's done.",
    "Answer ②": "admiration",
    "Definition": "a feeling of liking and respecting somebody/something very much"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "miserable (adj.)",
    "Sentence ①": "I was ashamed of my home and my work - and this was a ( ) feeling.",
    "Answer ①": "miserable",
    "Sentence ②": "What happened? You look ( ).",
    "Answer ②": "miserable",
    "Definition": "very unhappy"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "constantly (adv.)",
    "Sentence ①": "I thought about Estella ( ) and was afraid that she might see me working at the forge with my black face and hands.",
    "Answer ①": "constantly",
    "Sentence ②": "The global economy is ( ) changing.",
    "Answer ②": "constantly",
    "Definition": "always, again and again"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "hysterically (adv.)",
    "Sentence ①": "Oh!' screamed my sister, ( ).",
    "Answer ①": "hysterically",
    "Sentence ②": "He started laughing ( ) when he won the lottery.",
    "Answer ②": "hysterically",
    "Definition": "in an extremely excited way and without any control, often with crying or laughter"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "unconscious (adj.)",
    "Sentence ①": "I was shocked to see my sister, lying ( ).",
    "Answer ①": "unconscious",
    "Sentence ②": "He was found lying ( ) on the kitchen floor.",
    "Answer ②": "unconscious",
    "Definition": "in a state that is like sleeping, for example because of injury or illness"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "quarrel (v.)",
    "Sentence ①": "My sister had ( ) with almost everyone in the village thousands of times.",
    "Answer ①": "quarreled",
    "Sentence ②": "We ( ) about who should do the dishes.",
    "Answer ②": "quarreled",
    "Definition": "to have an angry argument"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "inherit (v.)",
    "Sentence ①": "Mr. Pip must leave his home and be educated as a gentleman who will ( ) a fortune.",
    "Answer ①": "inherit",
    "Sentence ②": "I ( ) quite a lot of money from my mother.",
    "Answer ②": "inherited",
    "Definition": "to receive property, money, etc. from somebody who has died"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "sum (n.)",
    "Sentence ①": "I have been given a ( ) of money for you to live the comfortable life of a gentleman in London while you are studying.",
    "Answer ①": "sum",
    "Sentence ②": "The industry has spent huge ( ) of money modernizing its equipment.",
    "Answer ②": "sums",
    "Definition": "an amount of money"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 4,
    "Word": "astutely (adv.)",
    "Sentence ①": "Joe Gargery' said the lawyer ( ).",
    "Answer ①": "astutely",
    "Sentence ②": "He ( ) evaluated the lecture.",
    "Answer ②": "astutely",
    "Definition": "in a way that shows somebody is clever and quick to understand a situation etc."
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "in the meantime (idiom)",
    "Sentence ①": "( ) ( ) ( ) I would stay with his son.",
    "Answer ①": "In the meantime",
    "Sentence ②": "Our house isn't finished so ( ) ( ) ( ) we're living with my mother.",
    "Answer ②": "in the meantime",
    "Definition": "in the time between two things happening"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "profit (n.)",
    "Sentence ①": "They shared the ( ).",
    "Answer ①": "profits",
    "Sentence ②": "Did you make a ( ) on your house when you sold it?",
    "Answer ②": "profit",
    "Definition": "the money that you make when you sell for more than it cost you"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "insure (v.)",
    "Sentence ①": "He told me that he worked in the city and ( ) ships.",
    "Answer ①": "insured",
    "Sentence ②": "They ( ) the paintings for €10,000 against damage or theft.",
    "Answer ②": "insured",
    "Definition": "to buy or provide insurance"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "enthusiastic (adj.)",
    "Sentence ①": "He was a kind and ( ) teacher.",
    "Answer ①": "enthusiastic",
    "Sentence ②": "Everyone was very ( ) about the project.",
    "Answer ②": "enthusiastic",
    "Definition": "full of excitement and interest in something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "occasion (n.)",
    "Sentence ①": "Mr. Pocket taught us how to dress on different ( ).",
    "Answer ①": "occasions",
    "Sentence ②": "I have met Bill on two ( ).",
    "Answer ②": "occasions",
    "Definition": "a particular time when something happens"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "clumsy (adj.)",
    "Sentence ①": "If I had been less worried about Joe, he wouldn't have been so ( ).",
    "Answer ①": "clumsy",
    "Sentence ②": "She undid the parcel with ( ) fingers.",
    "Answer ②": "clumsy",
    "Definition": "careless and likely to knock into, drop or break things"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 5,
    "Word": "dignity (n.)",
    "Sentence ①": "I had always known that Joe had a simple ( ).",
    "Answer ①": "dignity",
    "Sentence ②": "I want you to behave with ( ).",
    "Answer ②": "dignity",
    "Definition": "calm, serious behavior that makes other people respect you"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "uneasy (adj.)",
    "Sentence ①": "I felt quite ( ) upon meeting the man who gave me two pounds at the pub.",
    "Answer ①": "uneasy",
    "Sentence ②": "We were ( ) about his decision.",
    "Answer ②": "uneasy",
    "Definition": "worried; not feeling relaxed or comfortable"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "warn (v.)",
    "Sentence ①": "I ( ) you that I have no heart.",
    "Answer ①": "warn",
    "Sentence ②": "When I saw the car coming I tried to ( ) him, but it was too late.",
    "Answer ②": "warn",
    "Definition": "to tell somebody about something unpleasant or dangerous that exists or might happen, so that they can avoid it"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "accompany (v.)",
    "Sentence ①": "I ( ) her to the house in London.",
    "Answer ①": "accompanied",
    "Sentence ②": "He went to America ( ) by his wife and three children.",
    "Answer ②": "accompanied",
    "Definition": "to go together with somebody/something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "preceding (adj.)",
    "Sentence ①": "Mrs. Gregery had died the ( ) Monday.",
    "Answer ①": "preceding",
    "Sentence ②": "Look at the table on the ( ) page.",
    "Answer ②": "preceding",
    "Definition": "happening before something; coming before something/somebody in order"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "invest (v.)",
    "Sentence ①": "I ( ) some money in a shipping company called Clarrikers and signed an agreement with them.",
    "Answer ①": "invested",
    "Sentence ②": "Many companies have ( ) heavily in this project.",
    "Answer ②": "invested",
    "Definition": "to put money into a business, property, etc. in the hope that you will make a profit"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 6,
    "Word": "long (for sb/ to do sth) (phr. v.)",
    "Sentence ①": "I continued thinking about Estella and ( ) for her.",
    "Answer ①": "longed",
    "Sentence ②": "She ( ) to return to her home country.",
    "Answer ②": "longed",
    "Definition": "to want somebody/something very much, especially something that is not likely"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "warily (adv.)",
    "Sentence ①": "Come in,' I said, ( ).",
    "Answer ①": "warily",
    "Sentence ②": "They ( ) walked down the street, terrified of being caught.",
    "Answer ②": "warily",
    "Definition": "carefully, because you think there may be a danger or problem or you do not trust somebody/something"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "astonished (adj.)",
    "Sentence ①": "I was ( ) and confused.",
    "Answer ①": "astonished",
    "Sentence ②": "I was ( ) by his bold decision to quit his job.",
    "Answer ②": "astonished",
    "Definition": "very surprised"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "harshly (adv.)",
    "Sentence ①": "I'm sorry if I spoke ( ). I didn't mean it.' I said, drinking with him.",
    "Answer ①": "harshly",
    "Sentence ②": "He ( ) condemned my mistake in the meeting.",
    "Answer ②": "harshly",
    "Definition": "in a cruel, severe and unkind way"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "tremble (v.)",
    "Sentence ①": "He was still staring at me and I began to ( ).",
    "Answer ①": "tremble",
    "Sentence ②": "She was pale and ( ) with shock.",
    "Answer ②": "trembling",
    "Definition": "to shake, for example because you are cold, frightened, etc"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "revelation (n.)",
    "Sentence ①": "I sat down by the fire and started thinking about the ( ) of that evening.",
    "Answer ①": "revelations",
    "Sentence ②": "This magazine is full of ( ) about the private lives of the stars.",
    "Answer ②": "revelations",
    "Definition": "something that is made known, that was secret or unknown before, especially something surprising"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "desert (v.)",
    "Sentence ①": "It was for this convict that I had ( ) Joe.",
    "Answer ①": "deserted",
    "Sentence ②": "Many people have ( ) the countryside and moved to the city.",
    "Answer ②": "deserted",
    "Definition": "to leave somebody/something, usually for ever"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "false (adj.)",
    "Sentence ①": "We wrote ( ) cheques gloss and stole banknotes.",
    "Answer ①": false,
    "Sentence ②": "I think the information you have been given is ( ).",
    "Answer ②": false,
    "Definition": "not true; not correct"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 7,
    "Word": "pretend to (phr. v.)",
    "Sentence ①": "Havisham's half-brother was called Arthur and Compeyson is the man who ( ) ( ) be in love with her.",
    "Answer ①": "pretended to",
    "Sentence ②": "He was only ( ) ( ) be asleep.",
    "Answer ②": "pretending to",
    "Definition": "to behave in a particular way in order to make other people believe something that is not true"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "patron (n.)",
    "Sentence ①": "I've discovered who my ( ) is.",
    "Answer ①": "patron",
    "Sentence ②": "The artist came down and stood beside his ( ) to assess things.",
    "Answer ②": "patron",
    "Definition": "a person who gives money and support to artists, writers and musicians"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "knowingly (adv.)",
    "Sentence ①": "I suppose when you asked me to come here when I was a child I was a kind of servant for you.' Miss Havisham nodded ( ).",
    "Answer ①": "knowingly",
    "Sentence ②": "He smiled ( ), aware of the secret.",
    "Answer ②": "knowingly",
    "Definition": "in a way that shows that you know about something that is thought to be secret"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "coincidence (n.)",
    "Sentence ①": "He was my lawyer and your patron's lawyer; a simple ( ).",
    "Answer ①": "coincidence",
    "Sentence ②": "We hadn't planned to meet. It was just a ( ).",
    "Answer ②": "coincidence",
    "Definition": "two or more similar things happening at the same time by chance, in a surprising way"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "pity (n.)",
    "Sentence ①": "Miss Havisham stared at me with ( ) and guilt.",
    "Answer ①": "pity",
    "Sentence ②": "The situation is his fault so I don't feel any ( ) for him.",
    "Answer ②": "pity",
    "Definition": "sad feeling caused because somebody is suffering or in trouble"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "accuse (v.)",
    "Sentence ①": "She had been jealous of her husband and another woman, and was ( ) of murdering the woman.",
    "Answer ①": "accused",
    "Sentence ②": "He was ( ) of theft.",
    "Answer ②": "accused",
    "Definition": "to say that somebody has done something wrong or broken the law"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "bewildered (adj.)",
    "Sentence ①": "I was suddenly ( ) and replied, 'I can do it now.'",
    "Answer ①": "bewildered",
    "Sentence ②": "I was completely ( ) by his change of mood.",
    "Answer ②": "bewildered",
    "Definition": "confused"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "confirm (v.)",
    "Sentence ①": "He ( ) everything and revealed to me the truth.",
    "Answer ①": "confirmed",
    "Sentence ②": "Seeing the two of them together ( ) our suspicions.",
    "Answer ②": "confirmed",
    "Definition": "to say or show that something is true, to make something definite"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 8,
    "Word": "reveal (v.)",
    "Sentence ①": "He ( ) to me that Estella was Molly's daughter, adopted by Miss Havisham to give her a better life.",
    "Answer ①": "revealed",
    "Sentence ②": "He refused to ( ) any names to the police.",
    "Answer ②": "reveal",
    "Definition": "to make something known that was secret or unknown before"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "desperate (adj.)",
    "Sentence ①": "I was ( ); there was no way I could escape.",
    "Answer ①": "desperate",
    "Sentence ②": "She became ( ) when her money ran out.",
    "Answer ②": "desperate",
    "Definition": "out of control and ready to do anything to change the situation you are in because it is so bad"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "practically (adv.)",
    "Sentence ①": "Jaggers waned me that there was ( ) no hope of saving his life.",
    "Answer ①": "practically",
    "Sentence ②": "My essay is ( ) finished now.",
    "Answer ②": "practically",
    "Definition": "almost; very nearly"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "determined (adj.)",
    "Sentence ①": "Compeyson was so ( ) to get his revenge that you couldn't have saved Magwitch.",
    "Answer ①": "determined",
    "Sentence ②": "She is a very ( ) athlete.",
    "Answer ②": "determined",
    "Definition": "having firmly decided to do something or to succeed, even if it is very difficult"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "utter (v.)",
    "Sentence ①": "One evening he ( ) his last words.",
    "Answer ①": "uttered",
    "Sentence ②": "She did not ( ) a word in the meeting.",
    "Answer ②": "utter",
    "Definition": "to say something or make a sound with your voice"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "deserve (v.)",
    "Sentence ①": "You both ( ) so much happiness.",
    "Answer ①": "deserve",
    "Sentence ②": "We've done a lot of work and we ( ) a break.",
    "Answer ②": "deserve",
    "Definition": "to earn something, either good or bad, because of something that you have done"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "property (n.)",
    "Sentence ①": "I haven't been here for many years, although the ( ) is mine.",
    "Answer ①": "property",
    "Sentence ②": "There are a lot of empty ( ) in the area.",
    "Answer ②": "properties",
    "Definition": "one building and the land around it"
  },
  {
    "Book": "BP9 Great Expectations",
    "Chapter": 9,
    "Word": "eagerly (adv.)",
    "Sentence ①": "Tell me we are friends,' she said ( ).",
    "Answer ①": "eagerly",
    "Sentence ②": "We ( ) started on the new project.",
    "Answer ②": "eagerly",
    "Definition": "in a way that shows great interest and excitement about something that is going to happen or about something that you want to do"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "portrait (n.)",
    "Sentence ①": "In the center of the room stood a ( ) of a beautiful young man.",
    "Answer ①": "portrait",
    "Sentence ②": "The queen posed for 9 hours straight to get her self-( ) painted.",
    "Answer ②": "portrait",
    "Definition": "a picture, painting, or photo of a person."
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "vain (adj.)",
    "Sentence ①": "The artist was accused of being ( ) for painting a massive self-portrait.",
    "Answer ①": "vain",
    "Sentence ②": "I can't believe people fall in love with looks alone... how ( )!",
    "Answer ②": "vain",
    "Definition": "too proud of your own appearance, abilities, etc"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "intellectual (adj.)",
    "Sentence ①": "School is important to children's ( ) development.",
    "Answer ①": "intellectual",
    "Sentence ②": "It is illegal to steal someone else's ( ) property.",
    "Answer ②": "intellectual",
    "Definition": "connected with a person's ability to think in a logical way and to understand things"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "virtue (n.)",
    "Sentence ①": "Never be ashamed of your ( ) - They define who you are.",
    "Answer ①": "virtues",
    "Sentence ②": "Business ethics covers a wide variety of ( ).",
    "Answer ②": "virtues",
    "Definition": "behavior that shows high moral standards"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "exquisite (adj.)",
    "Sentence ①": "Jorge complimented the ( ) painting.",
    "Answer ①": "exquisite",
    "Sentence ②": "Esteban purchased an ( ) diamond ring to impress his new girlfriend.",
    "Answer ②": "exquisite",
    "Definition": "extremely beautiful and pleasing"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "inspiration (n.)",
    "Sentence ①": "Dorian provided the ( ) for the beautiful painting.",
    "Answer ①": "inspiration",
    "Sentence ②": "Jack's time in Mexico provided the ( ) for his bestselling novel.",
    "Answer ②": "inspiration",
    "Definition": "a feeling, person or thing that makes you want to do something or gives you exciting new ideas"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "adoration (n.)",
    "Sentence ①": "Basil painted a portrait because of his strong feeling of ( ) for Dorian.",
    "Answer ①": "adoration",
    "Sentence ②": "The newly married couple could not hide their ( ) for one another.",
    "Answer ②": "adoration",
    "Definition": "a feeling of great love or worship"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 1,
    "Word": "dominate (v.)",
    "Sentence ①": "The reigning champion ( ) the challenger in the ring.",
    "Answer ①": "dominated",
    "Sentence ②": "Five large companies ( ) the car industry.",
    "Answer ②": "dominate",
    "Definition": "to be more powerful, important or noticeable than others"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "purity (n.)",
    "Sentence ①": "The young man had a look of genuine, untainted ( ).",
    "Answer ①": "purity",
    "Sentence ②": "A representative from the World Health Organization stopped by to measure the ( ) level of the water.",
    "Answer ②": "purity",
    "Definition": "the state of being pure"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "candour (n.)",
    "Sentence ①": "The ( ) of the speech impressed the audience.",
    "Answer ①": "candour",
    "Sentence ②": "The people respected the politician's ( ).",
    "Answer ②": "candour",
    "Definition": "the quality of being honest; saying exactly what you think"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "impulse (n.)",
    "Sentence ①": "It is difficult to kill the ( ) that drive human nature.",
    "Answer ①": "impulses",
    "Sentence ②": "Without consulting his wife, Cody acted on an ( ) and bought a brand new Ferrari.",
    "Answer ②": "impulse",
    "Definition": "a sudden desire to do something without thinking about the results"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "temptation (n.)",
    "Sentence ①": "Sometimes the only way to get rid of ( ) is to give into it.",
    "Answer ①": "temptation",
    "Sentence ②": "Jonathan was on a diet, but could no longer resist the ( ) and ate a slice of delicious cake.",
    "Answer ②": "temptation",
    "Definition": "a feeling that you want to do something, even if you know that it is wrong"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "vivid (adj.)",
    "Sentence ①": "Young children are known to have very creative, ( ) imaginations.",
    "Answer ①": "vivid",
    "Sentence ②": "In her self-biography, Karen gave a ( ) description of her childhood.",
    "Answer ②": "vivid",
    "Definition": "having or producing a strong, clear picture in your mind"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "brevity (n.)",
    "Sentence ①": "One should appreciate youth and beauty because of its ( ).",
    "Answer ①": "brevity",
    "Sentence ②": "Try to live your life to its fullest without thinking about the ( ) of it all.",
    "Answer ②": "brevity",
    "Definition": "the state of being short or quick"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 2,
    "Word": "revelation (n.)",
    "Sentence ①": "By gazing at his own portrait, Dorian's own beauty came like a ( ) to him.",
    "Answer ①": "revelation",
    "Sentence ②": "Jeff's near death experience resulted in a profound ( ) on how to live life.",
    "Answer ②": "revelation",
    "Definition": "something that is made known, that was secret or unknown before, especially something surprising"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "affection (n.)",
    "Sentence ①": "The family did not hold back when it came to showing ( ) to one another.",
    "Answer ①": "affection",
    "Sentence ②": "Barry showed his ( ) for his girlfriend by buying her flowers and chocolate.",
    "Answer ②": "affection",
    "Definition": "a feeling of loving or liking somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "solitude (n.)",
    "Sentence ①": "The boy that lost his family lived a life of ( ).",
    "Answer ①": "solitude",
    "Sentence ②": "James enjoyed the silence and ( ) of his apartment.",
    "Answer ②": "solitude",
    "Definition": "the state of being alone, especially when you find this pleasant"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "tyranny (n.)",
    "Sentence ①": "The people could no longer stand idle and watch the ( ) destroy the nation they loved.",
    "Answer ①": "tyranny",
    "Sentence ②": "The transition from ( ) to a free society will take a great deal of time and effort.",
    "Answer ②": "tyranny",
    "Definition": "the cruel and unfair use of power by a person or small group to control a country or state"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "witty (adj.)",
    "Sentence ①": "Lord Henry's conversation was ( ) and brilliant.",
    "Answer ①": "witty",
    "Sentence ②": "Joan fell for Kevin's charm and ( ) sense of humor.",
    "Answer ②": "witty",
    "Definition": "clever and funny; using words in a clever way"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "luxurious (adj.)",
    "Sentence ①": "The millionaire lived by himself in a ( ) mansion.",
    "Answer ①": "luxurious",
    "Sentence ②": "It cost 1000 dollars to stay in the ( ) hotel for a single night.",
    "Answer ②": "luxurious",
    "Definition": "very comfortable; full of expensive and beautiful things"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "sentimental (adj.)",
    "Sentence ①": "Bill kept the old photos for their ( ) value.",
    "Answer ①": "sentimental",
    "Sentence ②": "The jewelry wasn’t worth much but it had great ( ) value.",
    "Answer ②": "sentimental",
    "Definition": "connected with happy memories or feelings of love rather than having any financial value"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "sensation (n.)",
    "Sentence ①": "The young man was a slave to his own ( ).",
    "Answer ①": "sensations",
    "Sentence ②": "The young American caused a ( ) by beating the top player.",
    "Answer ②": "sensation",
    "Definition": "great excitement, surprise or interest among a group of people; somebody/something that causes this excitement"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 3,
    "Word": "infatuation (n.)",
    "Sentence ①": "Dorian could not hide his ( ) for the actress.",
    "Answer ①": "infatuation",
    "Sentence ②": "Is it love, or just an ( )?",
    "Answer ②": "infatuation",
    "Definition": "having a very strong feeling of love or attraction for somebody/something that usually does not last long and makes you unable to think about anything else"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "radiant (adj.)",
    "Sentence ①": "Phil looked at his daughter's ( ) face and tried to warn her of the dangers of love.",
    "Answer ①": "radiant",
    "Sentence ②": "Bob fell in love with Cassandra's bright personality and ( ) smile.",
    "Answer ②": "radiant",
    "Definition": "showing great happiness"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "tenderness (n.)",
    "Sentence ①": "James looked into his sister's eyes with the ( ) of a loving brother.",
    "Answer ①": "tenderness",
    "Sentence ②": "He picked her up in his arms with great ( ).",
    "Answer ②": "tenderness",
    "Definition": "the quality of being kind, gentle and loving"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "undoubtedly (adv.)",
    "Sentence ①": "That young man is ( ) the most beautiful person I have ever seen.",
    "Answer ①": "undoubtedly",
    "Sentence ②": "Amis is ( ) one of the best writers of his generation.",
    "Answer ②": "undoubtedly",
    "Definition": "used to emphasize that something exists or is definitely true"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "aristocracy (n.)",
    "Sentence ①": "The ( ) was finally overthrown after many years of neglecting the lower-class citizens.",
    "Answer ①": "aristocracy",
    "Sentence ②": "The policy revisions are something out of an ( ), not a democracy.",
    "Answer ②": "aristocracy",
    "Definition": "(in some countries) the people of the highest social class who often have special titles"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "intention (n.)",
    "Sentence ①": "Clyde warned his younger sister of the strange man's ( ).",
    "Answer ①": "intentions",
    "Sentence ②": "Samantha traveled a great distance to the US with the ( ) of getting a job.",
    "Answer ②": "intention",
    "Definition": "what somebody intends or means to do"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "engaged (adj.)",
    "Sentence ①": "The young man was ( ) at the age of 18.",
    "Answer ①": "engaged",
    "Sentence ②": "Everyone at the party applauded when they heard the news of the couple had gotten ( ).",
    "Answer ②": "engaged",
    "Definition": "having agreed to get married"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "absurd (adj.)",
    "Sentence ①": "I will not entertain such ( ) accusations! exclaimed the lawyer.",
    "Answer ①": "absurd",
    "Sentence ②": "It seems utterly ( ) to travel all that way for just one day of sightseeing.",
    "Answer ②": "absurd",
    "Definition": "not at all logical or sensible"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 4,
    "Word": "pleasure (n.)",
    "Sentence ①": "The garden has given ( ) to many people.",
    "Answer ①": "pleasure",
    "Sentence ②": "Rick took great ( ) in telling the administrator that he was wrong.",
    "Answer ②": "pleasure",
    "Definition": "the feeling of being happy or satisfied"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "motionless (adj.)",
    "Sentence ①": "( ), Dorian was mesmerized by the actress's spectacular performance.",
    "Answer ①": "motionless",
    "Sentence ②": "The dead body lay ( ) in the doorway.",
    "Answer ②": "motionless",
    "Definition": "not moving"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "artificial (adj.)",
    "Sentence ①": "When she spoke, her words sounded ( ) and meaningless.",
    "Answer ①": "artificial",
    "Sentence ②": "Food we eat today often contains ( ) flavorings and sweeteners.",
    "Answer ②": "artificial",
    "Definition": "made or produced to copy something natural, not real"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "vitality (n.)",
    "Sentence ①": "Her acting lacked passion and a sense of ( ).",
    "Answer ①": "vitality",
    "Sentence ②": "After extensive rehabilitations, the young man's energy and ( ) returned.",
    "Answer ②": "vitality",
    "Definition": "the state of being full of energy"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "incompetent (adj.)",
    "Sentence ①": "His friends said nothing, but she seemed absolutely ( ).",
    "Answer ①": "incompetent",
    "Sentence ②": "An ( ) person should not be given a job of great responsibility.",
    "Answer ②": "incompetent",
    "Definition": "lacking the necessary skill to do something well"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "mediocre (adj.)",
    "Sentence ①": "Last night she was great, but this evening Sibyl is just a ( ) actress.",
    "Answer ①": "mediocre",
    "Sentence ②": "The businessman locked in a life of routine, returned home to his ( ) lifestyle.",
    "Answer ②": "mediocre",
    "Definition": "of not very high quality"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "shallow (adj.)",
    "Sentence ①": "Sibyl accused Dorian of being ( ) and stupid for breaking up with her because of a bad performance.",
    "Answer ①": "shallow",
    "Sentence ②": "Sarah broke up with Jake because he was too ( ) and only cared about looks.",
    "Answer ②": "shallow",
    "Definition": "not having or showing serious or deep thought"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "disdain (n.)",
    "Sentence ①": "Dorian with his beautiful eyes, looked down at her in ( ).",
    "Answer ①": "disdain",
    "Sentence ②": "The worker could not hide his ( ) for manual labor.",
    "Answer ②": "disdain",
    "Definition": "the feeling that somebody/something is not good enough to be respected"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 5,
    "Word": "cruelty (n.)",
    "Sentence ①": "There was the picture in front of him with a touch of ( ) in the mouth.",
    "Answer ①": "cruelty",
    "Sentence ②": "He was arrested for ( ) to animals.",
    "Answer ②": "cruelty",
    "Definition": "behavior that causes physical or mental pain or suffering to somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "shudder (v.)",
    "Sentence ①": "Dorian ( ) at the sight of the horrendous painting.",
    "Answer ①": "shuddered",
    "Sentence ②": "After watching the crash on the news, Dee ( ) at the thought of what could have happened if she had boarded her flight.",
    "Answer ②": "shuddered",
    "Definition": "to suddenly shake hard, especially because of an unpleasant feeling or thought"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "conscious (adj.)",
    "Sentence ①": "The portrait made Dorian ( ) of how cruel and unjust he had been to Sibyl.",
    "Answer ①": "conscious",
    "Sentence ②": "Bill suddenly became ( ) that somebody was following him.",
    "Answer ②": "conscious",
    "Definition": "noticing or realizing that something exists; aware of something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "accuse (v.)",
    "Sentence ①": "Dorian wrote Sibyl a passionate letter, begging for her forgiveness and ( ) himself of madness.",
    "Answer ①": "accusing",
    "Sentence ②": "The teacher ( ) the class of cheating on the test.",
    "Answer ②": "accused",
    "Definition": "to say that somebody has done something wrong or broken the law."
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "brutal (adj.)",
    "Sentence ①": "Dorian was ( ) when breaking up with Sibyl.",
    "Answer ①": "brutal",
    "Sentence ②": "A terrorist organization carried out a ( ) attack.",
    "Answer ②": "brutal",
    "Definition": "very cruel and/or violent"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "conscience (n.)",
    "Sentence ①": "The picture of Dorian Gray was a mirror of his own ( ).",
    "Answer ①": "conscience",
    "Sentence ②": "The prisoner had a guilty ( ) for the crimes he had committed earlier in his life.",
    "Answer ②": "conscience",
    "Definition": "the part of your mind that tells you if what you are doing is right or wrong"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "inquest (n.)",
    "Sentence ①": "There will be an ( ), and you must keep your name out of this scandal, said Lord Henry.",
    "Answer ①": "inquest",
    "Sentence ②": "The police wrote up a report on the ( ).",
    "Answer ②": "inquest",
    "Definition": "an official investigation to find out how somebody died"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "dazed (adj.)",
    "Sentence ①": "Dorian was ( ) with horror when he heard he bad news.",
    "Answer ①": "dazed",
    "Sentence ②": "Kevin woke up ( ) and confused.",
    "Answer ②": "dazed",
    "Definition": "unable to think or react normally, for example because you have been hit on the head; confused"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 6,
    "Word": "infinite (adj.)",
    "Sentence ①": "There were no consequences to the game that offered an ( ) number of tries.",
    "Answer ①": "infinite",
    "Sentence ②": "This galaxy exists in an ( ), ever-expanding universe.",
    "Answer ②": "infinite",
    "Definition": "without limits; that never ends"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "indifference (n.)",
    "Sentence ①": "Whether or not to attend the party was a matter of ( ) to Hank.",
    "Answer ①": "indifference",
    "Sentence ②": "The man's ( ) towards poverty came as a shock to the crowd.",
    "Answer ②": "indifference",
    "Definition": "a lack of interest or feeling toward somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "pity (n.)",
    "Sentence ①": "Greg felt ( ) for the painter who had a difficult life.",
    "Answer ①": "pity",
    "Sentence ②": "Phil listened to Jason's story with ( ).",
    "Answer ②": "pity",
    "Definition": "a sad feeling caused because somebody is suffering or in trouble"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "confession (n.)",
    "Sentence ①": "The criminal made a full ( ) to the police, which resulted in a lighter sentence.",
    "Answer ①": "confession",
    "Sentence ②": "I have a ( ) to make...I've lost your keys....I'm sorry.",
    "Answer ②": "confession",
    "Definition": "an act of admitting that you have done something bad or wrong"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "reveal (v.)",
    "Sentence ①": "Instead of having to ( ) his own secret, George had succeeded in learning his friend's secret.",
    "Answer ①": "reveal",
    "Sentence ②": "The information was first ( ) in a Sunday newspaper.",
    "Answer ②": "revealed",
    "Definition": "to make something known that was secret or unknown before"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "devotion (n.)",
    "Sentence ①": "The painter's ( ) was clear, as he always painted the same person.",
    "Answer ①": "devotion",
    "Sentence ②": "A mother’s ( ) to her child cannot be measured.",
    "Answer ②": "devotion",
    "Definition": "great love for somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "tragic (adj.)",
    "Sentence ①": "There was something ( ) in the friendship so colored by romance.",
    "Answer ①": "tragic",
    "Sentence ②": "The audience cried at the end of the ( ) tale of Romeo and Juliet.",
    "Answer ②": "tragic",
    "Definition": "that makes you very sad, especially because it involves death"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "corrupt (adj.)",
    "Sentence ①": "Dorian tried to hide the painting that contained the secrets of his ( ) soul.",
    "Answer ①": "corrupt",
    "Sentence ②": "The military staged a coup d'etat to remove the ( ) leader from office.",
    "Answer ②": "corrupt",
    "Definition": "doing or involving illegal or dishonest things in exchange for money, etc."
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 7,
    "Word": "immaculate (adj.)",
    "Sentence ①": "When the family checked into the hotel, they found it tidy and ( ).",
    "Answer ①": "immaculate",
    "Sentence ②": "Sharon had a collection of ( ) white shirts.",
    "Answer ②": "immaculate",
    "Definition": "perfectly clean and tidy"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "absence (n.)",
    "Sentence ①": "Jonny's mysterious ( ) from work were the cause of strange rumors among his friends",
    "Answer ①": "absences",
    "Sentence ②": "The vice president will handle things in my ( ), said the president.",
    "Answer ②": "absence",
    "Definition": "a time when somebody is away from somewhere; the fact of being away from somewhere"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "ravenous (adj.)",
    "Sentence ①": "The king had mad hungers that grew more ( ) as he fed them.",
    "Answer ①": "ravenous",
    "Sentence ②": "The sewers were infested with ( ) rats.",
    "Answer ②": "ravenous",
    "Definition": "very hungry"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "ambience (n.)",
    "Sentence ①": "He entertained fashionable people at his beautiful home and enjoyed his dinners with very select guests in a nearly perfect ( ).",
    "Answer ①": "ambience",
    "Sentence ②": "The couple enjoyed dinner at a restaurant with a lovely ( ).",
    "Answer ②": "ambience",
    "Definition": "the character and atmosphere of a place"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "exotic (adj.)",
    "Sentence ①": "The expensive guest house was decorated with ( ) flowers from around the world.",
    "Answer ①": "exotic",
    "Sentence ②": "Sandy enjoyed eating ( ) foods from the far reaches of the world.",
    "Answer ②": "exotic",
    "Definition": "unusual or interesting because it comes from a different country or culture"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "circulate (v.)",
    "Sentence ①": "After many years, curious stories began ( ) about him.",
    "Answer ①": "circulating",
    "Sentence ②": "Rumors are ( ) that the mayor's health is getting worse.",
    "Answer ②": "circulating",
    "Definition": "to go or to pass something from one person to another"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "reputation (n.)",
    "Sentence ①": "Henry Ashton had to leave town because his ( ) was ruined.",
    "Answer ①": "reputation",
    "Sentence ②": "Ted spent years building up a ( ) as the best lawyer in town.",
    "Answer ②": "reputation",
    "Definition": "the opinion that people in general have about what somebody/something is like"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "inseparable (adj.)",
    "Sentence ①": "The two boys were practically ( ) and always getting into trouble.",
    "Answer ①": "inseparable",
    "Sentence ②": "Britain's economic fortunes are ( ) from the world situation.",
    "Answer ②": "inseparable",
    "Definition": "that cannot be separated from somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 8,
    "Word": "moral (adj.)",
    "Sentence ①": "As citizens we have a ( ) duty to help the poor.",
    "Answer ①": "moral",
    "Sentence ②": "This is a ( ) issue, not a political one.",
    "Answer ②": "moral",
    "Definition": "concerned with what is right and wrong"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "insist (v.)",
    "Sentence ①": "Do you ( ) on knowing, the truth?' asked Dorian.",
    "Answer ①": "insist",
    "Sentence ②": "Jane had offered to pay, but Harison ( ) on paying the bill for dinner.",
    "Answer ②": "insisted",
    "Definition": "to say strongly that you must have or do something, or that somebody else must do something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "exclamation (n.)",
    "Sentence ①": "An ( ) of horror came from the painter's lips as he saw the hideous face on the canvas grinning.",
    "Answer ①": "exclamation",
    "Sentence ②": "The angry email was loaded with ( ) points.",
    "Answer ②": "exclamation",
    "Definition": "a short sound, word or phrase that you say suddenly because of a strong emotion, pain, etc"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "ideal (adj.)",
    "Sentence ①": "Space, they say, is the ( ) place to gather energy from the sun.",
    "Answer ①": "ideal",
    "Sentence ②": "The new Pixar film is ( ) for the entire family to watch.",
    "Answer ②": "ideal",
    "Definition": "the best possible; perfect"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "repentance (n.)",
    "Sentence ①": "The man prayed in the Church for ( ) on a daily basis.",
    "Answer ①": "repentance",
    "Sentence ②": "Christianity requires confession and ( ) for past sins.",
    "Answer ②": "repentance",
    "Definition": "the fact of showing that you are sorry for something wrong that you have done"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "repugnant (adj.)",
    "Sentence ①": "Don't you see that ( ) thing staring at us?",
    "Answer ①": "repugnant",
    "Sentence ②": "Kevin's sister was shocked by his morally ( ) behavior.",
    "Answer ②": "repugnant",
    "Definition": "making you feel strong dislike"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "groan (v.)",
    "Sentence ①": "The man ( ) in pain when he was stabbed in the alleyway.",
    "Answer ①": "groaned",
    "Sentence ②": "The kids ( ) when their mother turned off the television.",
    "Answer ②": "groaned",
    "Definition": "to make a deep sad sound because you are in pain, or to show that you are unhappy about something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "suffocate (v.)",
    "Sentence ①": "Luckily the engineer was able to repair the spacecraft, so the astronauts did not ( ) to death.",
    "Answer ①": "suffocate",
    "Sentence ②": "Billy, take that plastic bag off your head! You could ( )!'",
    "Answer ②": "suffocate",
    "Definition": "to die because there is no air to breathe; to kill somebody by not letting them breathe air"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 9,
    "Word": "disguise (n.)",
    "Sentence ①": "Dorian loved to pretend to be different people, preparing a new ( ) every night.",
    "Answer ①": "disguise",
    "Sentence ②": "The woman turned out to be a police officer in ( ).",
    "Answer ②": "disguise",
    "Definition": "something that you wear or use to change your appearance so that nobody recognizes you"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "agitated (adj.)",
    "Sentence ①": "The musician became horribly ( ) by the crowd booing.",
    "Answer ①": "agitated",
    "Sentence ②": "Stewart was getting ( ) with the person tapping his foot in line behind him.",
    "Answer ②": "agitated",
    "Definition": "worried or nervous"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "scarcely (adv.)",
    "Sentence ①": "Kevin and John had many mutual friends, but ( ) spoke to one another when they met.",
    "Answer ①": "scarcely",
    "Sentence ②": "The city had ( ) changed since the last time we were there 10 months ago.",
    "Answer ②": "scarcely",
    "Definition": "only just; almost not"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "unbearable (adj.)",
    "Sentence ①": "The smell of the old rotten eggs was simply ( ).",
    "Answer ①": "unbearable",
    "Sentence ②": "The pain of being shot through the knee was ( ).",
    "Answer ②": "unbearable",
    "Definition": "too unpleasant, painful, etc. for you to accept"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "be mixed up (adj.)",
    "Sentence ①": "I don't want to ( ) ( ) ( ) in the complications of your life.",
    "Answer ①": "get mixed up",
    "Sentence ②": "He was only 14 when he ( ) ( ) ( ) in drug-dealing.",
    "Answer ②": "got mixed up",
    "Definition": "to be/become involved in something bad or unpleasant"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "deserve (v.)",
    "Sentence ①": "The murderer ( ) the sentence that was passed upon him.",
    "Answer ①": "deserved",
    "Sentence ②": "People who are sent to prison for drunk driving get what they ( ).",
    "Answer ②": "deserve",
    "Definition": "to earn something, either good or bad, because of something that you have done"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "intend (v.)",
    "Sentence ①": "The man made Winston suffer miserably, even though he had not ( ) it.",
    "Answer ①": "intended",
    "Sentence ②": "Phil had ( ) to be married and have children by age thirty-five.",
    "Answer ②": "intended",
    "Definition": "to plan or mean to do something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "alternative (n.)",
    "Sentence ①": "Please, don't do this!' 'I'm sorry but you leave me no ( ).'",
    "Answer ①": "alternative",
    "Sentence ②": "Showers are a great ( ) to taking baths -- it saves 70% of the water, and is much cleaner.",
    "Answer ②": "alternative",
    "Definition": "one or two more things that you can choose between"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 10,
    "Word": "hesitate (v.)",
    "Sentence ①": "When presented with the difficult question, Jim ( ) before answering.",
    "Answer ①": "hesitated",
    "Sentence ②": "Grant ( ) for just a moment, and lost his chance to score the goal.",
    "Answer ②": "hesitated",
    "Definition": "to be slow to do something or to take a decision, usually because you are uncertain or worried"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "ache (v.)",
    "Sentence ①": "Bill's head ( ) so he took some medicine to relieve himself of the pain.",
    "Answer ①": "ached",
    "Sentence ②": "Rachel's legs ( ) from the long walk home.",
    "Answer ②": "ached",
    "Definition": "to feel a continuous pain"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "sense (n.)",
    "Sentence ①": "The stranger used candy to lure the child into a false ( ) of security.",
    "Answer ①": "sense",
    "Sentence ②": "The secretary had a strong ( ) of loyalty towards her boss.",
    "Answer ②": "sense",
    "Definition": "a feeling of something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "opium (n.)",
    "Sentence ①": "The hideous hunger for ( ) began to dig at him.",
    "Answer ①": "opium",
    "Sentence ②": "The man had become an ( ) addict, and spent most of his family fortune.",
    "Answer ②": "opium",
    "Definition": "a powerful drug that is made from the juice of a type of poppy"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "filthy (adj.)",
    "Sentence ①": "After weeks of not vacuuming, the floor was absolutely ( ).",
    "Answer ①": "filthy",
    "Sentence ②": "Doesn't he ever wash that jacket? It's ( ).",
    "Answer ②": "filthy",
    "Definition": "very dirty"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "grotesque (adj.)",
    "Sentence ①": "The ( ) painting was not well received.",
    "Answer ①": "grotesque",
    "Sentence ②": "The monster's ( ) appearance scared the children.",
    "Answer ②": "grotesque",
    "Definition": "strange or ugly in a way that is not natural"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 11,
    "Word": "vanish (v.)",
    "Sentence ①": "Dorian ( ) into the crowd.",
    "Answer ①": "vanished",
    "Sentence ②": "The bird ( ) from sight into the night sky.",
    "Answer ②": "vanished",
    "Definition": "to disappear suddenly or in a way that you cannot explain"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "disappearance (n.)",
    "Sentence ①": "People are still discussing poor Basil's ( ).",
    "Answer ①": "disappearance",
    "Sentence ②": "Police are investigating the woman's ( ).",
    "Answer ②": "disappearance",
    "Definition": "the fact of being lost or impossible to find"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "divorce (n.)",
    "Sentence ①": "Kevin signed the ( ) papers and he was single once again.",
    "Answer ①": "divorce",
    "Sentence ②": "The number of ( ) is increasing annually.",
    "Answer ②": "divorces",
    "Definition": "the legal end of a marriage"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "hypocrisy (n.)",
    "Sentence ①": "He could see no change, except that in the eyes there was now a look of falsity and on the mouth a smile of ( ).",
    "Answer ①": "hypocrisy",
    "Sentence ②": "The people would not accept the ( ) of the government.",
    "Answer ②": "hypocrisy",
    "Definition": "behaviour in which somebody does not act according to the moral standards that they claim to have"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "spare (v.)",
    "Sentence ①": "The serial killer ( ) the young woman from a horrible fate.",
    "Answer ①": "spared",
    "Sentence ②": "The children's lives were ( ).",
    "Answer ②": "spared",
    "Definition": "to not hurt or damage somebody/something"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "torment (v.)",
    "Sentence ①": "The murder Jack had committed would ( ) him for the rest of his life.",
    "Answer ①": "torment",
    "Sentence ②": "He was ( ) by feelings of guilt.",
    "Answer ②": "tormented",
    "Definition": "to make somebody suffer very much"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "agonizing (adj.)",
    "Sentence ①": "There was a horrible ( ) cry and a crash.",
    "Answer ①": "agonizing",
    "Sentence ②": "The ( ) pain caused the victim to scream out loud.",
    "Answer ②": "agonizing",
    "Definition": "causing extreme pain or worry"
  },
  {
    "Book": "BP9 The Picture of Dorian Gray",
    "Chapter": 12,
    "Word": "splendid (adj.)",
    "Sentence ①": "They found a ( ) portrait of their master hanging on the wall.",
    "Answer ①": "splendid",
    "Sentence ②": "A cup of tea sounds like a ( ) idea!'",
    "Answer ②": "splendid",
    "Definition": "very good; excellent"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "superstitious (adj.)",
    "Sentence ①": "The people in the village were very ( ) and did many rituals to ward off bad luck.",
    "Answer ①": "superstitious",
    "Sentence ②": "Jack was ( ) and never left the house without his lucky necklace.",
    "Answer ②": "superstitious",
    "Definition": "believing in superstitions"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "origin (n.)",
    "Sentence ①": "The ( ) of human beings is still debated by many people.",
    "Answer ①": "origin",
    "Sentence ②": "The architecture of this temple is Chinese in its ( ).",
    "Answer ②": "origin",
    "Definition": "the point from which something starts; the cause of something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "peasant (n.)",
    "Sentence ①": "The ( ) of the village lived a simple life with just enough food to survive.",
    "Answer ①": "peasants",
    "Sentence ②": "Japanese ( ) were oppressed by the samurai class.",
    "Answer ②": "peasants",
    "Definition": "a person who owns or rents a small piece of land on which they grow food and keep animals in order to feed their family"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "distrust (n.)",
    "Sentence ①": "The public's ( ) of the government eventually led to a political uprising.",
    "Answer ①": "distrust",
    "Sentence ②": "Recently, ( ) has grown intensively between Japan and China.",
    "Answer ②": "distrust",
    "Definition": "the feeling that you cannot believe somebody/something; a lack of trust"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "emigrant (n.)",
    "Sentence ①": "In the past, there were many ( ) ships that came to New York.",
    "Answer ①": "emigrant",
    "Sentence ②": "Millions of European ( ) came to America in the 19th century.",
    "Answer ②": "emigrants",
    "Definition": "a person who has gone to live permanently in another country"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "abandoned (adj.)",
    "Sentence ①": "Oliver lived in a home for orphans and ( ) children.",
    "Answer ①": "abandoned",
    "Sentence ②": "The police found an ( ) car on the highway.",
    "Answer ②": "abandoned",
    "Definition": "left and no longer wanted, used or needed"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "fascinate (v.)",
    "Sentence ①": "I've always been ( ) by different cultures and languages.",
    "Answer ①": "fascinated",
    "Sentence ②": "They were ( ) to learn about his new inventions.",
    "Answer ②": "fascinated",
    "Definition": "to attract or interest somebody very much"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "imitate (v.)",
    "Sentence ①": "Babies learn by ( ) adults.",
    "Answer ①": "imitating",
    "Sentence ②": "Parrots ( ) what humans say.",
    "Answer ②": "imitate",
    "Definition": "to copy somebody or something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 1,
    "Word": "declare (v.)",
    "Sentence ①": "America ( ) independence from Great Britain in 1776.",
    "Answer ①": "declared",
    "Sentence ②": "The slaves ( ) independence against their masters.",
    "Answer ②": "declared",
    "Definition": "to state something publicly and officially or to make something known in a firm, clear way"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "metamorphosis (n.)",
    "Sentence ①": "We have watched her ( ) from a shy schoolgirl into a confident businesswoman.",
    "Answer ①": "metamorphosis",
    "Sentence ②": "That company has gone through a series of ( ) and is totally different from when it was first established.",
    "Answer ②": "metamorphoses",
    "Definition": "a complete change of form (as a part of natural development)"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "companionship (n.)",
    "Sentence ①": "Generally, ( ) of dogs can contribute to a person's well-being.",
    "Answer ①": "companionship",
    "Sentence ②": "The two men have enjoyed a ( ) of twenty years since their childhood.",
    "Answer ②": "companionship",
    "Definition": "the pleasant feeling of having a friendly relationship with somebody and not being alone"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "sect (n.)",
    "Sentence ①": "The people in the small village were all part of the same religious ( ).",
    "Answer ①": "sect",
    "Sentence ②": "He was expelled from the ( ) for going against their teachings.",
    "Answer ②": "sect",
    "Definition": "a group of people who have a particular set of religious or political beliefs. A ( ) has often broken away from a larger group."
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "pious (adj.)",
    "Sentence ①": "The couple led a quiet and ( ) lifestyle.",
    "Answer ①": "pious",
    "Sentence ②": "The believers of that particular Christian sect are particularly ( ).",
    "Answer ②": "pious",
    "Definition": "having or showing a deep belief in religion"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "virtuous (adj.)",
    "Sentence ①": "She has made a ( ) decision to donate all her money to charity.",
    "Answer ①": "virtuous",
    "Sentence ②": "Lauren considered herself ( ) because she neither drank nor smoked.",
    "Answer ②": "virtuous",
    "Definition": "behaving in a morally good way"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "complacent (adj.)",
    "Sentence ①": "We should not be ( ) with past successes.",
    "Answer ①": "complacent",
    "Sentence ②": "The strong economy has made people ( ).",
    "Answer ②": "complacent",
    "Definition": "feeling too satisfied with yourself or with a situation, so that you think that there is no need to worry"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "agitated (adj.)",
    "Sentence ①": "Pat interrogated her boyfriend in an ( ) voice.",
    "Answer ①": "agitated",
    "Sentence ②": "He was in an ( ) state after his daughter went missing.",
    "Answer ②": "agitated",
    "Definition": "worried or nervous"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 2,
    "Word": "solitude (n.)",
    "Sentence ①": "Mr. Jones never married anyone and lived his life in ( ).",
    "Answer ①": "solitude",
    "Sentence ②": "She enjoyed few hours of freedom and ( ).",
    "Answer ②": "solitude",
    "Definition": "the state of being alone, especially when you find this pleasant"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "spiteful (adj.)",
    "Sentence ①": "The girls in my class made ( ) jokes about me.",
    "Answer ①": "spiteful",
    "Sentence ②": "It was ( ) of you to throw away all my comic books.",
    "Answer ②": "spiteful",
    "Definition": "behaving in a cruel or unkind way in order to hurt or upset somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "misfortune (n.)",
    "Sentence ①": "We had the ( ) to run into a violent storm.",
    "Answer ①": "misfortune",
    "Sentence ②": "They had the ( ) to be in the wrong country when the war broke out.",
    "Answer ②": "misfortune",
    "Definition": "bad luck or disaster"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "lead (somebody) astray (idiom)",
    "Sentence ①": "Living away from home and away from her parents (  ) Kathy ( ).",
    "Answer ①": "led astray",
    "Sentence ②": "Many parents fear that college life (  ) their kids ( ).",
    "Answer ②": "leads astray",
    "Definition": "to make somebody start behaving or thinking in the wrong way"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "sneer (v.)",
    "Sentence ①": "My boss ( ) at my suggestion.",
    "Answer ①": "sneered",
    "Sentence ②": "Sarah ( ) at her brother's attempt to make dinner, as he had no cooking skills.",
    "Answer ②": "sneered",
    "Definition": "to show that you have no respect for somebody/something by the expression on your face or the way that you speak"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "threaten (v.)",
    "Sentence ①": "The robber ( ) the young woman with a gun.",
    "Answer ①": "threatened",
    "Sentence ②": "I was ( ) into doing something I knew was wrong.",
    "Answer ②": "threatened",
    "Definition": "to warn that you may hurt, kill or punish somebody if they do not do what you want"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "ridiculous (adj.)",
    "Sentence ①": "That's a ( ) idea to go to New York with little money.",
    "Answer ①": "ridiculous",
    "Sentence ②": "Don't be ( )! You can't pay $500 for a T-shirt!",
    "Answer ②": "ridiculous",
    "Definition": "very silly or unreasonable"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "humiliating (adj.)",
    "Sentence ①": "The president experienced a ( ) defeat in the election.",
    "Answer ①": "humiliating",
    "Sentence ②": "It was absolutely ( ) when I was made fun of in front of the whole school.",
    "Answer ②": "humiliating",
    "Definition": "making somebody feel ashamed or stupid and lose the respect of other people"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 3,
    "Word": "part (v.)",
    "Sentence ①": "She couldn't bear the thought of ( ) from her family.",
    "Answer ①": "parting",
    "Sentence ②": "He has ( ) from his wife of 20 years.",
    "Answer ②": "parted",
    "Definition": "to leave or go away from somebody; to separate people or things"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "tremble (v.)",
    "Sentence ①": "I was so nervous before my presentation that I started ( ).",
    "Answer ①": "trembling",
    "Sentence ②": "Linda ( ) at the sight of a huge bear.",
    "Answer ②": "trembled",
    "Definition": "to shake, for example because you are cold, frightened, etc"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "blazing (adj.)",
    "Sentence ①": "We gathered around the ( ) fire to warm up.",
    "Answer ①": "blazing",
    "Sentence ②": "The ( ) sun made the sand too hot to the touch.",
    "Answer ②": "blazing",
    "Definition": "extremely hot"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "astonished (adj.)",
    "Sentence ①": "They were ( ) he won that prestigious award at such a young age.",
    "Answer ①": "astonished",
    "Sentence ②": "The readers were all ( ) at the unexpected ending of the book.",
    "Answer ②": "astonished",
    "Definition": "very surprised"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "apparent (adj.)",
    "Sentence ①": "From the beginning, it was ( ) that she was not an ordinary child.",
    "Answer ①": "apparent",
    "Sentence ②": "He started yelling and throwing things for no ( ) reason.",
    "Answer ②": "apparent",
    "Definition": "clear; easy to see"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "distress (n.)",
    "Sentence ①": "As a result of long working hours, he experienced some ( ).",
    "Answer ①": "distress",
    "Sentence ②": "Old people don't experience as much ( ) as young people do.",
    "Answer ②": "distress",
    "Definition": "the state of being very upset or of suffering great pain or difficulty"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "supernatural (adj.)",
    "Sentence ①": "I don't believe in ( ) beings such as angels or ghosts.",
    "Answer ①": "supernatural",
    "Sentence ②": "He claims that he has ( ) powers, but we all think he's lying.",
    "Answer ②": "supernatural",
    "Definition": "that cannot be explained by the laws of science"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "vanish (v.)",
    "Sentence ①": "The ghost ( ) into thin air.",
    "Answer ①": "vanished",
    "Sentence ②": "The missing girl ( ) without a trace a year ago.",
    "Answer ②": "vanished",
    "Definition": "to disappear suddenly or in a way that you cannot explain"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 4,
    "Word": "animated (adj.)",
    "Sentence ①": "They love to engage in ( ) discussions about politics.",
    "Answer ①": "animated",
    "Sentence ②": "At the party, the guests were engaging in ( ) conversations and having a good time.",
    "Answer ②": "animated",
    "Definition": "interesting and full of energy"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "fury (n.)",
    "Sentence ①": "She didn't raise her voice, but you could see the ( ) in her eyes.",
    "Answer ①": "fury",
    "Sentence ②": "Stop making fun of me! he shouted in ( ).",
    "Answer ②": "fury",
    "Definition": "very great anger"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "mourn (v.)",
    "Sentence ①": "The people ( ) the tragic death of their king.",
    "Answer ①": "mourned",
    "Sentence ②": "She is still ( ) for her husband who died last year.",
    "Answer ②": "mourning",
    "Definition": "to feel and show that you are sad, especially because somebody has died"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "irritated (adj.)",
    "Sentence ①": "She is ( ) with him for forgetting her birthday.",
    "Answer ①": "irritated",
    "Sentence ②": "He appeared a bit ( ) with the lawyer's questions.",
    "Answer ②": "irritated",
    "Definition": "annoyed or angry"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "bereft (adj.)",
    "Sentence ①": "Her room was bare and ( ) of color.",
    "Answer ①": "bereft",
    "Sentence ②": "After hours of brainstorming, the creative team felt ( ) of ideas.",
    "Answer ②": "bereft",
    "Definition": "completely lacking something; having lost something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "gratitude (n.)",
    "Sentence ①": "She expressed her ( ) to the committee for their support.",
    "Answer ①": "gratitude",
    "Sentence ②": "She accepted the offer with ( ).",
    "Answer ②": "gratitude",
    "Definition": "the feeling of being grateful or of wanting to give your thanks to somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "welfare (n.)",
    "Sentence ①": "He doesn't care at all about the ( ) of his family.",
    "Answer ①": "welfare",
    "Sentence ②": "He works to improve the ( ) of humankind.",
    "Answer ②": "welfare",
    "Definition": "the general health, happiness and safety of a person, an animal or a group"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "encourage (v.)",
    "Sentence ①": "My mother always ( ) me in everything I did.",
    "Answer ①": "encouraged",
    "Sentence ②": "I felt ( ) by his kind words.",
    "Answer ②": "encouraged",
    "Definition": "to give hope, support or confidence to somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 5,
    "Word": "delighted (adj.)",
    "Sentence ①": "Jane was ( ) by the news that her little sister was finally getting married.",
    "Answer ①": "delighted",
    "Sentence ②": "Can you come to my birthday party next Saturday? - I'd be ( ) to come.",
    "Answer ②": "delighted",
    "Definition": "extremely pleased"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "acknowledge (v.)",
    "Sentence ①": "He refused to ( ) that the failure of the project was his fault.",
    "Answer ①": "acknowledge",
    "Sentence ②": "The actor ( ) that what was written in the article was in fact true.",
    "Answer ②": "acknowledged",
    "Definition": "to accept or admit that something is true or exists"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "poverty (n.)",
    "Sentence ①": "In Africa, millions of people are still living in ( ).",
    "Answer ①": "poverty",
    "Sentence ②": "( ) greatly contributed to the spread of AIDS.",
    "Answer ②": "Poverty",
    "Definition": "the state of being poor"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "bitterness (n.)",
    "Sentence ①": "The pay cut caused ( ) among the staff.",
    "Answer ①": "bitterness",
    "Sentence ②": "Meg felt ( ) towards Amy, who lived in a spacious mansion.",
    "Answer ②": "bitterness",
    "Definition": "angry and unhappy feelings caused by the belief that you have been treated unfairly"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "disturbance (n.)",
    "Sentence ①": "She doesn't want any ( ) while she's studying.",
    "Answer ①": "disturbance",
    "Sentence ②": "A helicopter landing can cause ( ) to the people living nearby.",
    "Answer ②": "disturbance",
    "Definition": "something that makes you stop what you are doing, or upsets the normal condition of something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "claim (v.)",
    "Sentence ①": "Both of them ( ) credit for the idea.",
    "Answer ①": "claimed",
    "Sentence ②": "If no one ( ) this item, then I'm going to keep it as my own.",
    "Answer ②": "claims",
    "Definition": "to demand or ask for something because you believe it is your legal right to own or to have it"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "recognition (n.)",
    "Sentence ①": "Face ( ) systems can now spot criminals in crowds.",
    "Answer ①": "recognition",
    "Sentence ②": "The town has changed beyond ( ).",
    "Answer ②": "recognition",
    "Definition": "the fact that you can identify somebody/something that you see"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "mingle (v.)",
    "Sentence ①": "His excitement was ( ) with fear.",
    "Answer ①": "mingled",
    "Sentence ②": "The sounds of laughter and singing ( ) in the evening air.",
    "Answer ②": "mingled",
    "Definition": "to combine; to make one thing combine with another"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 6,
    "Word": "intend to (phr.v.)",
    "Sentence ①": "What do you ( ) ( ) do next?",
    "Answer ①": "intend to",
    "Sentence ②": "He's never been to America and never ( ) ( ).",
    "Answer ②": "intends to",
    "Definition": "to plan or mean to do something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "fond of (phr. adj.)",
    "Sentence ①": "I was never ( ) ( ) dancing, but I decided to give it try.",
    "Answer ①": "fond of",
    "Sentence ②": "He gradually grew ( ) ( ) Japanese food.",
    "Answer ②": "fond of",
    "Definition": "liking a person or thing, or liking doing something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "baptism (n.)",
    "Sentence ①": "Samuel received ( ) when he was a year old.",
    "Answer ①": "baptism",
    "Sentence ②": "I converted to Christianity and received ( ) last year.",
    "Answer ②": "baptism",
    "Definition": "a ceremony in which a person becomes a member of the Christian Church by being covered with water for a short time or having drops of water put onto their head. Often they are also formally given a name."
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "doubtfully (adv.)",
    "Sentence ①": "I told him the truth, but he looked at me ( ).",
    "Answer ①": "doubtfully",
    "Sentence ②": "Is that really you? he asked ( ).",
    "Answer ②": "doubtfully",
    "Definition": "in a way that shows you are uncertain and feeling doubt"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "observance (n.)",
    "Sentence ①": "Ramadan is in ( ) now in Islamic countries.",
    "Answer ①": "observance",
    "Sentence ②": "The ( ) of this family tradition would make our grandmother very happy.",
    "Answer ②": "observance",
    "Definition": "the practice of obeying or following a law, custom, etc."
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "disobedient (adj.)",
    "Sentence ①": "Eric became more ( ) and rebellious as he entered his teens.",
    "Answer ①": "disobedient",
    "Sentence ②": "The ( ) soldier was given extra duty.",
    "Answer ②": "disobedient",
    "Definition": "refusing or failing to obey"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "discipline (v.)",
    "Sentence ①": "Many teachers are now scared to ( ) their students.",
    "Answer ①": "discipline",
    "Sentence ②": "The officers were ( ) for using racist language.",
    "Answer ②": "disciplined",
    "Definition": "to punish somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "discourage (v.)",
    "Sentence ①": "I don't want to ( ) you, but I don't think that's a very good idea.",
    "Answer ①": "discourage",
    "Sentence ②": "His parents tried to ( ) him from being an actor.",
    "Answer ②": "discourage",
    "Definition": "to stop somebody doing something, especially by making them realize that it would not be successful or a good idea"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 7,
    "Word": "fateful (adj.)",
    "Sentence ①": "On that ( ) day, he won the lottery and his life changed forever.",
    "Answer ①": "fateful",
    "Sentence ②": "A fortune teller told me that a ( ) encounter is coming.",
    "Answer ②": "fateful",
    "Definition": "having an important effect on the future"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "hearth (n.)",
    "Sentence ①": "A log fire roared in the open ( ).",
    "Answer ①": "hearth",
    "Sentence ②": "The cat sat in its favorite spot on the ( ).",
    "Answer ②": "hearth",
    "Definition": "the place where you have an open fire in the house or the area in front of it"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "blush (v.)",
    "Sentence ①": "Ashley ( ) at the sight of her boyfriend.",
    "Answer ①": "blushed",
    "Sentence ②": "Tracey ( ) when Ben told her that she was beautiful.",
    "Answer ②": "blushed",
    "Definition": "to become red in the face, especially because you are embarrassed or feel guilty"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "trim (v.)",
    "Sentence ①": "We ( ) the Christmas tree before putting on the decorations.",
    "Answer ①": "trimmed",
    "Sentence ②": "Joe went to get his hair ( ).",
    "Answer ②": "trimmed",
    "Definition": "to cut a small amount off something so that it is tidy"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "impose on (phr.v.)",
    "Sentence ①": "She realized that she had ( ) ( ) his kindness.",
    "Answer ①": "imposed on",
    "Sentence ②": "You shouldn’t ( ) ( ) other people’s good nature.",
    "Answer ②": "impose on",
    "Definition": "to ask or expect somebody to do something that may cause extra work or trouble"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "affectionately (adv.)",
    "Sentence ①": "The mother held her baby ( ) in her arms.",
    "Answer ①": "affectionately",
    "Sentence ②": "Her grandmother looked at her ( ) from a distance.",
    "Answer ②": "affectionately",
    "Definition": "in a way that shows caring feelings and love for somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 8,
    "Word": "deserve (v.)",
    "Sentence ①": "The team really ( ) that victory after the way they played.",
    "Answer ①": "deserved",
    "Sentence ②": "You’ve worked so hard this past year. You ( ) a vacation.",
    "Answer ②": "deserve",
    "Definition": "to earn something, either good or bad, because of something that you have done"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "inherit (v.)",
    "Sentence ①": "He doesn’t need to work because he ( ) a big fortune from his father.",
    "Answer ①": "inherited",
    "Sentence ②": "She ( ) the family business from her father.",
    "Answer ②": "inherited",
    "Definition": "to receive property, money, etc. from somebody who has died"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "assume (v.)",
    "Sentence ①": "I didn’t see your car, so I ( ) you had gone out.",
    "Answer ①": "assumed",
    "Sentence ②": "We ( ) he was coming, so we were surprised when he didn’t.",
    "Answer ②": "assumed",
    "Definition": "to think or accept that something is true but without having proof of it"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "resign oneself to (phr. v.)",
    "Sentence ①": "After his wife died, he ( ) ( ) ( ) a lonely old age.",
    "Answer ①": "resigned himself to",
    "Sentence ②": "She ( ) ( ) ( ) her fate.",
    "Answer ②": "resigned herself to",
    "Definition": "to accept something that is unpleasant but that you cannot change"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "disgrace (n.)",
    "Sentence ①": "His immoral behavior brought ( ) to his family.",
    "Answer ①": "disgrace",
    "Sentence ②": "Many feel that the new prime minister has brought ( ) to our country.",
    "Answer ②": "disgrace",
    "Definition": "the state of not being respected by other people, usually because you have behaved badly"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "deed (n.)",
    "Sentence ①": "The man was punished for his evil ( ).",
    "Answer ①": "deeds",
    "Sentence ②": "You should do a good ( ) every day.",
    "Answer ②": "deed",
    "Definition": "something that you do; an action"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "wretched (adj.)",
    "Sentence ①": "I can’t believe that ( ) man is my father. I don’t trust him.",
    "Answer ①": "wretched",
    "Sentence ②": "That ( ) dog has chewed up my slippers again.",
    "Answer ②": "wretched",
    "Definition": "used for expressing anger"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "weep (v.)",
    "Sentence ①": "The man ( ) at the news of his friend’s death.",
    "Answer ①": "wept",
    "Sentence ②": "He ( ) bitterly when it was time for us to leave.",
    "Answer ②": "wept",
    "Definition": "to let tears fall because of strong emotion; to cry"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 9,
    "Word": "provide for (phr. v.)",
    "Sentence ①": "You need to find a good job so that you can ( ) ( ) yourself.",
    "Answer ①": "provide for",
    "Sentence ②": "Without work, how can he ( ) ( ) his children?",
    "Answer ②": "provide for",
    "Definition": "to give somebody all that they need to live, for example food and clothing"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "misery (n.)",
    "Sentence ①": "The couple lived in ( ) after their child passed away.",
    "Answer ①": "misery",
    "Sentence ②": "The ( ) of war still remains in the city.",
    "Answer ②": "misery",
    "Definition": "great unhappiness or suffering"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "compensate (v.)",
    "Sentence ①": "I’m sorry I broke your windows. I will ( ) for all the damage I caused.",
    "Answer ①": "compensate",
    "Sentence ②": "She was not fully ( ) for the damage done to her car.",
    "Answer ②": "compensated",
    "Definition": "to pay somebody money because you have injured them or lost or damaged their property"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "debt (n.)",
    "Sentence ①": "After many years, they were finally able to pay off their ( ).",
    "Answer ①": "debt",
    "Sentence ②": "Despite working two jobs, Mark found it challenging to repay his ( ).",
    "Answer ②": "debt",
    "Definition": "an amount of money that you owe to somebody"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "hesitate (v.)",
    "Sentence ①": "I ( ) for a second but ate the meat.",
    "Answer ①": "hesitated",
    "Sentence ②": "Judy ( ) before replying.",
    "Answer ②": "hesitated",
    "Definition": "to be slow to do something or to take a decision, usually because you are uncertain or worried"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "opposition (n.)",
    "Sentence ①": "They have decided to carry out the plan despite ( ) from the people.",
    "Answer ①": "opposition",
    "Sentence ②": "The group expressed their strong ( ) to the new tax plan.",
    "Answer ②": "opposition",
    "Definition": "the feeling of disagreeing with something and the act of trying to change it"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "insist on (phr. v.)",
    "Sentence ①": "I suggested a telephone meeting but he ( ) ( ) meeting in person.",
    "Answer ①": "insisted on",
    "Sentence ②": "We offered to help, but he ( ) ( ) doing it alone.",
    "Answer ②": "insisted on",
    "Definition": "to say strongly that you must have or do something, or that somebody else must do something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 10,
    "Word": "deny (v.)",
    "Sentence ①": "He ( ) nothing to his son.",
    "Answer ①": "denies",
    "Sentence ②": "The men were ( ) entry to the country.",
    "Answer ②": "denied",
    "Definition": "to refuse to allow somebody to have something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 11,
    "Word": "ill at ease (idiom)",
    "Sentence ①": "Arthur loved his research, but he felt ( ) ( ) ( ) when he had to do a presentation.",
    "Answer ①": "ill at ease",
    "Sentence ②": "Lucy was very shy and felt ( ) ( ) ( ) at gatherings.",
    "Answer ②": "ill at ease",
    "Definition": "feeling uncomfortable and embarrassed"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 11,
    "Word": "indifferent (adj.)",
    "Sentence ①": "Sarah was absolutely ( ) to him, and he felt hurt.",
    "Answer ①": "indifferent",
    "Sentence ②": "He is completely ( ) to fashion.",
    "Answer ②": "indifferent",
    "Definition": "not interested in or caring about somebody/something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 11,
    "Word": "indicate (v.)",
    "Sentence ①": "This map ( ) where the treasure is hidden.",
    "Answer ①": "indicates",
    "Sentence ②": "The sign ( ) where the bathroom was.",
    "Answer ②": "indicated",
    "Definition": "to make somebody notice something, especially by pointing to it"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 11,
    "Word": "suffocate (v.)",
    "Sentence ①": "I felt like I was about to ( ) in this hot, humid weather.",
    "Answer ①": "suffocate",
    "Sentence ②": "She was ( ) from all the smoke caused by the fire.",
    "Answer ②": "suffocating",
    "Definition": "to die because there is no air to breathe; to kill somebody by not letting them breathe air"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": 11,
    "Word": "relieved (adj.)",
    "Sentence ①": "She sounded ( ) when her brother got into Keio University.",
    "Answer ①": "relieved",
    "Sentence ②": "I’m just ( ) that nobody was hurt by the accident', exclaimed Mrs. Brown.",
    "Answer ②": "relieved",
    "Definition": "pleased because your fear or worry has been taken away"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": "Conclusion",
    "Word": "procession (n.)",
    "Sentence ①": "Everyone in the village gathered to see the wedding ( ).",
    "Answer ①": "procession",
    "Sentence ②": "There was a ( ) of children holding candles.",
    "Answer ②": "procession",
    "Definition": "number of people, vehicles, etc. that move slowly in a line, especially as part of a ceremony"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": "Conclusion",
    "Word": "feast (n.)",
    "Sentence ①": "Our family gathered at our grandparent's house for a ( ).",
    "Answer ①": "feast",
    "Sentence ②": "Everyone at the village attended the wedding ( ).",
    "Answer ②": "feast",
    "Definition": "a large, special meal, especially to celebrate something"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": "Conclusion",
    "Word": "offended (adj.)",
    "Sentence ①": "Viewers said that they were ( ) by the language used in the program.",
    "Answer ①": "offended",
    "Sentence ②": "I felt ( ) when my colleague made a cruel joke about my background.",
    "Answer ②": "offended",
    "Definition": "feeling upset because of something said or done that is rude or embarrassing"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": "Conclusion",
    "Word": "applaud (v.)",
    "Sentence ①": "The crowd cheered and ( ) after the spectacular performance.",
    "Answer ①": "applauded",
    "Sentence ②": "Everyone ( ) the graduates as they entered the hall.",
    "Answer ②": "applauded",
    "Definition": "to show that you like somebody/something by clapping your hands"
  },
  {
    "Book": "BP10 Silas Marner",
    "Chapter": "Conclusion",
    "Word": "unite (v.)",
    "Sentence ①": "The two companies ( ) to become one big company.",
    "Answer ①": "united",
    "Sentence ②": "We will ( ) in fighting crime.",
    "Answer ②": "unite",
    "Definition": "to join together for a particular purpose"
  }
];

const searchInput = document.getElementById('search');
const suggestionsDiv = document.getElementById('suggestions');
const resultDiv = document.getElementById('result');

// Get unique words for suggestions
function getUniqueWords(query) {
  const filtered = vocabulary
    .filter(item => item["Word"].toLowerCase().startsWith(query))
    .map(item => item["Word"]);
  return [...new Set(filtered)].sort();
}

// Show suggestions as the user types
searchInput.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  suggestionsDiv.innerHTML = '';
  if (!query) return;
  const words = getUniqueWords(query);
  if (words.length === 0) return;
  words.forEach(word => {
    const div = document.createElement('div');
    div.className = 'suggestion';
    div.textContent = word;
    div.onclick = () => selectWord(word);
    suggestionsDiv.appendChild(div);
  });
});

// Hide suggestions when input loses focus (with a short delay for click)
searchInput.addEventListener('blur', () => {
  setTimeout(() => { suggestionsDiv.innerHTML = ''; }, 100);
});

// Show details for the selected word
function selectWord(word) {
  searchInput.value = word;
  suggestionsDiv.innerHTML = '';
  const entries = vocabulary.filter(item => item["Word"] === word);
  resultDiv.innerHTML = entries.map(entry => `
    <div>
      <strong>${entry["Word"]}</strong>
      <span class="book-label">[${entry["Book"]}]</span>
      <p><strong>Definition:</strong> ${entry["Definition"]}</p>
      <ul>
        <li>${entry["Sentence ①"]}</li>
        <li>${entry["Sentence ②"]}</li>
      </ul>
    </div>
  `).join('<hr>');
}

// Optional: allow pressing Enter to select the first suggestion
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const firstSuggestion = suggestionsDiv.querySelector('.suggestion');
    if (firstSuggestion) {
      selectWord(firstSuggestion.textContent);
      e.preventDefault();
    }
  }
});
