const cards = [
	{
		"id": 0,
		"cardName": "The Paladin",
		"description": "The Paladin (lawful good, Strength) symbolizes standing strong in the face of adversity. The Paladin does not back down under any circumstances. This card usually indicates the need to stay the course or do what one knows is right, even if it takes a heavy toll. If the card is misaligned, such a course might be foolhardy.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Hammer"
	},
	{
		"id": 1,
		"cardName": "The Keep",
		"description": "The Keep (neutral good, Strength) is a symbol of quiet strength, one that can move when necessary, yet stand firm through the greatest hardship. Those represented by The Keep are not shaken by any force. If The Keep appears misaligned, it can mean giving way to temptation or falling in the face of greater strength.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Hammer"
	},
	{
		"id": 2,
		"cardName": "The Big Sky",
		"description": "The Big Sky (chaotic good, Strength) shows an epic moment as the slaves of a nation are freed. The slaves’ freedom specifies momentous and powerful change, as old shackles are cast off in the light of day. If misaligned, those castoff shackles might be replaced with worse ones.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Hammer"
	},
	{
		"id": 3,
		"cardName": "The Forge",
		"description": "The Forge (lawful neutral, Strength) evokes strength through great diversity. The blacksmith represents those who can survive the mephits’ trial by fire, but The Forge’s fire is so strong it burns many to cinders instead. This card often represents a dangerous event that needs many sources of strength to overcome.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Hammer"
	},
	{
		"id": 4,
		"cardName": "The Bear",
		"description": "The Bear (neutral, Strength) is pure strength. People often make the mistake of thinking The Bear can be tamed or trained. When someone believes he has The Bear under control, that person eventually learns the error of his ways. Brute force might be required here, but the consequences of its use might be severe.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Hammer"
	},
	{
		"id": 5,
		"cardName": "The Uprising",
		"description": "The Uprising (chaotic neutral, Strength) represents being caught in the clutches of something much more powerful than you. It is an overwhelming strength that often crushes what comes in contact with it. The crown held high signifies an overthrowing of a leader of some sort. In the spread, it indicates a force much stronger than the person receiving the reading.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Hammer"
	},
	{
		"id": 6,
		"cardName": "The Fiend",
		"description": "The Fiend (lawful evil, Strength) depicts a devil swallowing innocents. It can indicate the deaths of many in a great calamity or, if misaligned, the salvation from the same calamity. The Fiend can also indicate that some sort of dark and intelligent creature is in the area, endangering the populace.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Hammer"
	},
	{
		"id": 7,
		"cardName": "The Beating",
		"description": "The Beating (neutral evil, Strength) signifies coming under attack from all sides, but it can also indicate the dissolution of the self—mentally. Whether the strength is of the flesh or the mind, it dissolves under the relentless attack. Misaligned, this card suggests that during the assault, undiscovered strength is found.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Hammer"
	},
	{
		"id": 8,
		"cardName": "The Cyclone",
		"description": "The Cyclone (chaotic evil, Strength) is a force that tears through whatever it meets. This disaster does not come in the course of natural order but is one that comes from the plots of intelligent beings. The Cyclone signifies war, arson, or other plans that destroy everything they touch. Misaligned, this card can indicate renewal after a blustery trial.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Hammer"
	},
	{
		"id": 9,
		"cardName": "The Dance",
		"description": "The Dance (lawful good, Dexterity) is a rich and delicate framework that, like the universe itself, requires everyone within it to abide by its rules, lest the entire construct collapse. It advises staying in perfect step, knowing your place in the greater good. Those who step out of the pattern do so at their peril. Misaligned, that pattern might be hypnotic, but not to the good of all.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Key"
	},
	{
		"id": 10,
		"cardName": "The Cricket",
		"description": "The Cricket (neutral good, Dexterity) is a grig, a creature whose mind is as quick as its body. It represents speed and quick passage. Although The Cricket is commonly associated with travel, the peach it sits by represents treasure at the end. If misaligned, the journey will go poorly, and the treasure will be one that is lost rather than found.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Key"
	},
	{
		"id": 11,
		"cardName": "The Juggler",
		"description": "The Juggler (chaotic good, Dexterity) represents fate, the gods, or those who play with the lives and destinies of others. If this titanic Juggler can keep up his rhythm, he will achieve his goals. But in a misaligned placement, he falters, and tragedy and failure are assured for those whose lives he meddled in.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Key"
	},
	{
		"id": 12,
		"cardName": "The Locksmith",
		"description": "The Locksmith (lawful neutral, Dexterity) presents the subject with the keys she needs to unlock her destiny. He grants the tools to access a new location, clue, or treasure. He does not grant insight into how or where to use the tools granted. This card often represents a strange, ancient, or magical object.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Key"
	},
	{
		"id": 13,
		"cardName": "The Peacock",
		"description": "The Peacock (neutral, Dexterity) is a creature of astonishing beauty, but it is a beauty that can only be retained if frozen like a 15 cockatrice’s statues. Smarter people accept the passage of time and dance out of The Peacock’s way. Its appearance always signifies a sudden personal shift in attitude or societal change.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Key"
	},
	{
		"id": 14,
		"cardName": "The Rabbit Prince",
		"description": "The Rabbit Prince (chaotic neutral, Dexterity) is a quirky fellow who represents the vagaries of hand-to-hand combat. The Prince is battle personified and nothing if not capricious. As his broken sword symbolizes, any combatant can fall in battle, no matter how brave or skilled. This card sometimes stands for younger members of royalty or other powerful households.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Key"
	},
	{
		"id": 15,
		"cardName": "The Avalanche",
		"description": "The Avalanche (lawful evil, Dexterity) is disaster. It is an unthinking, unreasoning thing that overruns all who get in its way. It can represent physical disaster or the disaster that comes from a panicked crowd or other unthinking group or entity. If misaligned, the calamity is likely to be averted, though not without consequence.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Key"
	},
	{
		"id": 16,
		"cardName": "The Crows",
		"description": "The Crows (neutral evil, Dexterity) are a dangerous bunch who indicate violent taking of that which is loved. When The Crows appear, murder, theft, or other shocking loss occurs. If misaligned, such acts can be averted or the thievery is a just one.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Key"
	},
	{
		"id": 17,
		"cardName": "The Demon's Lantern",
		"description": "The Demon’s Lantern (chaotic evil, Dexterity) is the card of traps and tricks, sleight of hand and sleight of mind. These will-o’-wisps and the man who sought their light represent an impossible or intractable situation. Misaligned, it represents an opportunity or a guide arriving at a perfect moment to show the way.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Key"
	},
	{
		"id": 18,
		"cardName": "The Trumpet",
		"description": "The Trumpet (lawful good, Constitution) is a declaration of power. This archon is an aggressive force who wades into the direst situations without hesitation in the cause of right. Misaligned, it suggests the motives aren’t noble, bringing injury and crumbling strength. It is a card that grants all or nothing at all.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Shield"
	},
	{
		"id": 19,
		"cardName": "The Survivor",
		"description": "The Survivor (neutral good, Constitution) represents a person who has been through an ordeal of some kind. Surrounded by his fallen comrades, the man represents someone or something thought lost forever, but found once more. It can also represent rebirth. Misaligned, The Survivor can evoke terrible news or a profound loss.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Shield"
	},
	{
		"id": 20,
		"cardName": "The Desert",
		"description": "The Desert (chaotic good, Constitution) is an environment so bleak that none can survive it without aid. For those who find that aid, the journey across the wastes can lead to great things. Misaligned, it implies the subject cannot rely on the help of others and will assuredly be lost. The sphinx on this card can refer to a mystic or doctor bringing salvation in times of plague or illness.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Shield"
	},
	{
		"id": 21,
		"cardName": "The Brass Dwarf",
		"description": "The Brass Dwarf (lawful neutral, Constitution) shows an azer who represents invulnerability to a current danger. Although others might fall, he remains hale and strong. The Brass Dwarf can also mean a failure or dark fate for one, which in turn might save all others around him from a greater danger.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Shield"
	},
	{
		"id": 22,
		"cardName": "The Teamster",
		"description": "The Teamster (neutral, Constitution) is a driving external force that keeps the subject going, no matter what. This force can be physical or mental, as a person who exhorts others to continue on when they have no more strength to give. The force can be for good or ill but cannot be ignored. The half-orc depicted is leading a life of constant toil, but for his own betterment.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Shield"
	},
	{
		"id": 23,
		"cardName": "The Mountain Man",
		"description": "The Mountain Man (chaotic neutral, Constitution) signifies an encounter with a physical power outside of one’s control. The giant could personify an authority, an army, an earthquake, or even a desperately needed rainstorm in a parched land. Acceding to the force might be wise, but surviving it is paramount.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Shield"
	},
	{
		"id": 24,
		"cardName": "The Tangled Briar",
		"description": "The Tangled Briar (lawful evil, Constitution) is a card of ancient deeds. It indicates an object or person from long ago that will somehow have great influence on the situation. The object or person in question is one lost or murdered in some foul way. Misaligned, the thorny past brings not just pain, but hope for the future.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Shield"
	},
	{
		"id": 25,
		"cardName": "The Sickness",
		"description": "The Sickness (neutral evil, Constitution) represents plague, pestilence, famine, and disease. It can also indicate corruption of the soul or of a multitude of souls. If misaligned, The Sickness represents either great health or a chance to stop such a disaster.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Shield"
	},
	{
		"id": 26,
		"cardName": "The Waxworks",
		"description": "The Waxworks (chaotic evil, Constitution) is a place of helplessness and physical entropy. The mind might be willing, but the flesh is frozen in this place of horror. It is also the card of torture and imprisonment, signifying literal inability to move or a paralysis of a more prosaic kind. Misaligned, this card indicates an abundance of energy at a crucial moment that changes all.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Shield"
	},
	{
		"id": 27,
		"cardName": "The Hidden Truth",
		"description": "The Hidden Truth (lawful good, Intelligence) symbolizes the ability to see past the obvious and the banal to a greater truth within. Sometimes this discovery is an esoteric one, sometimes it is a literal find, such as an item revealed within a room. Regardless, it is a card with the power to reveal secrets. Misaligned, it can mean a secret being revealed to the subject’s detriment.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Book"
	},
	{
		"id": 28,
		"cardName": "The Wanderer",
		"description": "The Wanderer (neutral good, Intelligence) is a collector. This centaur appreciates that which others regard as junk or trash. The Wanderer appears to those clever enough to find the true worth in something others ignore or treat as worthless. Misaligned, The Wanderer signifies a loss of values, or the inability to see what is truly valuable in a person or situation.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Book"
	},
	{
		"id": 29,
		"cardName": "The Joke",
		"description": "The Joke (chaotic good, Intelligence) shows a terror that must be overcome—but not by physical means. This monster can only be defeated by trickery or artifice. This card can represent the value of humor in finding the way past a difficult person or task. When misaligned, it often signals that the joke will be on you.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Book"
	},
	{
		"id": 30,
		"cardName": "The Inquisitor",
		"description": "The Inquisitor (lawful neutral, Intelligence) accepts nothing save the truth. He represents immutable reality, that which cannot be fooled or swayed in any way. To attempt to go against this unchangeable object, person, or idea is to court disaster.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Book"
	},
	{
		"id": 31,
		"cardName": "The Foreign Trader",
		"description": "The Foreign Trader (neutral, Intelligence) is the card of spies and peddlers alike. Any who trade in information are subject to this card’s influence. A bargain made under this card’s auspice always concludes true, but the ramifications of the pact might be shocking for those who do not understand its implications.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Book"
	},
	{
		"id": 32,
		"cardName": "The Vision",
		"description": "The Vision (chaotic neutral, Intelligence) represents arcane knowledge. Such knowledge can take the form of madness or cryptic words. This card often means an encounter with a crazy person, but it can also signify a brush with genius.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Book"
	},
	{
		"id": 33,
		"cardName": "The Rakshasa",
		"description": "The Rakshasa (lawful evil, Intelligence) is the card of dominance and mind control. The creature sitting serenely upon the back of the slave indicates an exterior force imposing itself upon another being’s mind. On occasion, the slavery is literal, but more often it is mental enslavement to a force or idea. Misaligned, that enslavement can be cast off in the face of new information.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Book"
	},
	{
		"id": 34,
		"cardName": "The Idiot",
		"description": "The Idiot (neutral evil, Intelligence) is a card of grave foolishness and greed. It can mean bribery, blackmail, or naivety so grand it can see no evil. The goblins have captured a foolhardy man, representing the knowledge that loss of dignity can precede loss of life. Misaligned, this card might indicate feigning of idiocy to disguise one’s gifts.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Book"
	},
	{
		"id": 35,
		"cardName": "The Snakebite",
		"description": "The Snakebite (chaotic evil, Intelligence) is a vile, poisoned weapon. Poison takes many forms—not all of them physical. The poison on the assassin’s blade represents the death of ideas and freedom, as well as the ability to turn friends against each other or poison the minds of the virtuous. Misaligned, this card can mean a mental leap, a new friendship, or a discovery.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Book"
	},
	{
		"id": 36,
		"cardName": "The Winged Serpent",
		"description": "The Winged Serpent (lawful good, Wisdom) is a powerful being. Knowledge and prudence are separate keeps bridged by understanding. The couatl represents this bridge, knowing whether now is the time to strike. Misaligned, this card means either not seizing a moment or doing so ill-advisedly.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Star"
	},
	{
		"id": 37,
		"cardName": "The Midwife",
		"description": "The Midwife (neutral good, Wisdom) is a conduit to creation, although she does not create on her own. This halfling is a key that lets new life or information into the world. Her heart can see the good in even the worst situation. She can see the import of any new arrival, but if the card is misaligned, the new arrival will likely not inspire much joy.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Star"
	},
	{
		"id": 38,
		"cardName": "The Publican",
		"description": "The Publican (chaotic good, Wisdom) represents fellowship and camaraderie, and a place of refuge for those in need. Most would find the cyclops inconsequential, but he has insights relevant to the reading or a quest. Misaligned, The Publican represents refuge unfound or false information given at a crucial moment.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Star"
	},
	{
		"id": 39,
		"cardName": "The Queen Mother",
		"description": "The Queen Mother (lawful neutral, Wisdom) is knowledge personified. The formian knows all but does not reveal anything to anyone who does not show her proper worship. She is fond of the powerless and the underclasses, for they serve her when the more powerful refuse. She represents the need to become part of a society, or to bow before those who know more than you.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Star"
	},
	{
		"id": 40,
		"cardName": "The Owl",
		"description": "The Owl (neutral, Wisdom) represents the eternal wisdom of the natural order. It is the harsh realism that causes a pack of wolves to cull the weak in the herd. It is tragic for the culled deer, but through such actions the herd grows stronger. The needle The Owl holds binds life together, but just as easily can pick that life apart.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Star"
	},
	{
		"id": 41,
		"cardName": "The Carnival",
		"description": "The Carnival (chaotic neutral, Wisdom) is the card of illusions and false dreams. This card can heighten the power of the arcane, but depending on such whimsical forces can be risky. For others, this card depicts imprudent plans or unrealistic ambitions.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Star"
	},
	{
		"id": 42,
		"cardName": "The Eclipse",
		"description": "The Eclipse (lawful evil, Wisdom) represents self-doubt and loss of purpose. This card afflicts those with faith in the divine, as their talents can wane under this stress. It can also indicate a loss of way along a path. If misaligned, it can augur an unheralded ability coming to the fore or a concealed location revealed.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Star"
	},
	{
		"id": 43,
		"cardName": "The Mute Hag",
		"description": "The Mute Hag (neutral evil, Wisdom) might be silent, but the eye she holds lets her see into the hearts of men. This hag invokes blood pacts and poisonous secrets, the kind that turn brother against brother and son against father. It is a card that performers loathe, as it leaves them stumbling over their words and songs. Misaligned, it indicates unshakable loyalty and lucidity of speech.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Star"
	},
	{
		"id": 44,
		"cardName": "The Lost",
		"description": "The Lost (chaotic evil, Wisdom) is the card of emptiness and loss of identity. The bodak shown is forever mad, lost in a world of lunatics, insane asylums, and mass killers. For those under its influence, the world makes no sense. It evokes times where all is babble, as when meeting someone who speaks only in another tongue. Misaligned, it can indicate clarity of mind under duress.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Star"
	},
	{
		"id": 45,
		"cardName": "The Empty Throne",
		"description": "The Empty Throne (lawful good, Charisma) has a sense of loss that is palpable. The ghost signifies that those who are gone will always be with us. They taught us important lessons, if only we choose to listen. This card can bring information from a far-off or ancient source. If misaligned, the ghosts of the past are restless, and might require effort to set at peace.",
		"alignmentGNE": "G",
		"alignmentLNC": "L",
		"suit": "Crown"
	},
	{
		"id": 46,
		"cardName": "The Theatre",
		"description": "The Theater (neutral good, Charisma) is the card of true prophecy. The puppets act out a scene, just as the prophet acts out a scene in which she has no part. The prophet is the audience and the prophecy is the show. She has no influence on what she sees, and its importance is often not recognized until too late. If misaligned, the prophecy is just for show.",
		"alignmentGNE": "G",
		"alignmentLNC": "N",
		"suit": "Crown"
	},
	{
		"id": 47,
		"cardName": "The Unicorn",
		"description": "The Unicorn (chaotic good, Charisma) is a card that generously offers that which the subject seeks, just as the charger in the picture offers up its fruit. When misaligned, the card means betrayal, poisoning, or a false friend.",
		"alignmentGNE": "G",
		"alignmentLNC": "C",
		"suit": "Crown"
	},
	{
		"id": 48,
		"cardName": "The Marriage",
		"description": "The Marriage (lawful neutral, Charisma) can be a union of people, ideas, kingdoms, or other distinct things. The progeny of the salamander and water weird shows that a union might bring forth new power from both parties, or it might be a ruinous joining of that which should never have been united. Once wedded, the two cannot be parted. This is the card of permanent change.",
		"alignmentGNE": "N",
		"alignmentLNC": "L",
		"suit": "Crown"
	},
	{
		"id": 49,
		"cardName": "The Twin",
		"description": "The Twin (neutral, Charisma) signals duality of purpose or identity. This doppelganger can also mean indecision, as a person or group wavers between very different options. It can also mean divided loyalties abound. The card makes a harrower wary, as it can also mean the entire spread has a hidden or reversed meaning.",
		"alignmentGNE": "N",
		"alignmentLNC": "N",
		"suit": "Crown"
	},
	{
		"id": 50,
		"cardName": "The Courtesan",
		"description": "The Courtesan (chaotic neutral, Charisma) is the card of political intrigue. Her mask embodies the social niceties that must be followed. If it slips, negotiations can take an unexpected turn. The card can also indicate a woman of power who shapes events. How she is treated decides the outcome of the situation.",
		"alignmentGNE": "N",
		"alignmentLNC": "C",
		"suit": "Crown"
	},
	{
		"id": 51,
		"cardName": "The Tyrant",
		"description": "The Tyrant (lawful evil, Charisma) indicates a ruler who is a blight upon those ruled. The dragon might indicate a monarch, overseer, or head of a household. Whoever this person is, he does harm to those over whom he holds sway, whether he realizes it or not. Misaligned, it might show a tyrant revealed or dethroned.",
		"alignmentGNE": "E",
		"alignmentLNC": "L",
		"suit": "Crown"
	},
	{
		"id": 52,
		"cardName": "The Betrayal",
		"description": "The Betrayal (neutral evil, Charisma) is selfishness incarnate. Envy twists the spirit and leads ultimately to devastation. It can also indicate a person whose loveliness hides an evil heart. Misaligned, the card means self-sacrifice or turning away from the material world and its temptations.",
		"alignmentGNE": "E",
		"alignmentLNC": "N",
		"suit": "Crown"
	},
	{
		"id": 53,
		"cardName": "The Liar",
		"description": "The Liar (chaotic evil, Charisma) is love at its most treacherous. This is not the love that moves mountains, this is the love that rips the heart in two and causes lovers to leap to their deaths. This lamia can mean obsession, unrequited passion, or doomed love. Misaligned, the card can indicate a new relationship beginning, although disguised as something much less beautiful.",
		"alignmentGNE": "E",
		"alignmentLNC": "C",
		"suit": "Crown"
	}
];


export { cards } ;