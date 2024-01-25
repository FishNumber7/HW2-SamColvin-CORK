var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"cave"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"cave":["^You wake up in darkness, with no idea of how you got there. The air feels damp, and it smells of dirt.","\n",{"->":".^.darkness"},{"darkness":[["ev","str","^Yell","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Search around","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Cry","/str","/ev",{"*":".^.c-2","flg":20},{"*":".^.c-3","flg":24},{"c-0":["^ Help! Is anyone there?","\n","^Your voice echoes all around. No response.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ You search the ground around you. No luck.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["^ You burst into tears... it's hopeless.","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n",["ev","str","^Give Up","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^You decide it's fruitless to stumble around in the dark...","\n","^Suddenly, a voice booms from the darkness, \"Do not give up!\" To your bewilderment, a wizened man, cloaked in blue, appears in front of you. His tattered garb glows the darkness. \"You are playing CORK, my dear boy... here is a lantern to get you started!\"","\n","^The old man holds out a rusty lantern ",{"->":"cave.wizard"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"wizard":[["ev","str","^Take lantern","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Refuse lantern","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Attack the old man","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ LANTERN OBTAINED!","\n","^\"Wise choice, my boy...\"","\n","^The wizard dissappears in a puff of smoke. You are alone again, save for the company of the lantern's fluttering flame.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ \"I don't need any help from you,\" you say.","\n","^\"I will not leave until you to take this lantern, my dear boy... for how else will you play CORK!?\"","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["^ You attempt to punch the old man, but you slip on the damp ground.","\n","^\"Foolish child...\"","\n","^The wizard dissappears in a puff of smoke. In his place remains the rusty lantern, it's flame fluttering gently. You pick it up.","\n","^LANTERN OBTAINED!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^With the wizard gone, you decide to examine the cave. Near where the wizard was standing, there's a path forward deeper into the cave. Behind you, there's a deep hole. Near your feet, there is a dirty letter.","\n",{"->":"cave.lit_cave"},{"#f":5}]}],{"#f":1}],"lit_cave":[["ev","str","^Head deeper into the cave","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Examine the hole","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Read the letter","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",{"->":"cave.troll"},{"#f":5}],"c-1":["^ You peer over the hole.","\n","^Even with the lantern, the darkness is impenetrable. A rope leads down, but you're hesitant to climb down...","\n",["ev","str","^Climb Down","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Step Away","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ You climb steadily down until you reach the ground.","\n",{"->":"cave.hole"},{"#f":5}],"c-1":["^ You step away from the hole.","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-2":["^ The letter reads as follows:","\n","^\"You are playing CORK.\"","\n",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"troll":[["^You head deeper into the cave. After walking for what feels like hours, you come upon stairs leading up. Unfortunately, a troll stands before you.","\n","ev","str","^Run Away","/str",{"CNT?":".^.c-3.1.convinced"},"!","/ev",{"*":".^.c-0","flg":5},"ev","str","^Attack the troll","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Convince him to let you pass","/str",{"CNT?":".^.c-3.1.convinced"},"!","/ev",{"*":".^.c-2","flg":21},"ev","str","^Try once more to convince the troll","/str",{"CNT?":".^.c-2"},"/ev",{"*":".^.c-3","flg":21},"ev","str","^Walk past him","/str",{"CNT?":".^.c-3.1.convinced"},"/ev",{"*":".^.c-4","flg":5},{"c-0":["^ You turn and run as fast as you can.","\n","^The troll gives chase, but it eventually gives up. You eventually come back to where you woke up.","\n",{"->":"cave.lit_cave"},{"#f":5}],"c-1":["^ You attack the troll.","\n","^The troll kills you... too bad! ","end","\n",{"#f":5}],"c-2":["^ You use your boundless charisma to convince the troll.","\n",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^\"Hmmm... alright.\" <br><br> ",{"->":".^.^.^.^.c-3.1.convinced"},{"->":".^.^.17"},null],"s1":["pop","^\"Hmmm... nope.\" <br><br> The troll looks ready to attack. You run away as fast as you can, heading back to where you woke up.",{"->":".^.^.17"},null],"#f":5}],"\n",{"->":"cave.lit_cave"},{"#f":5}],"c-3":["\n",[["^The troll huffs. Obviously frustrated, he moves to let you pass.","\n",{"->":"cave.escape"},{"#f":5,"#n":"convinced"}],null],{"#f":5}],"c-4":["^ The troll does nothing.","\n",{"->":"cave.escape"},{"#f":5}]}],{"#f":1}],"escape":[["^You walk up the stairs. At the top is a door. You try to open it, but it won't budge. You notice a keyhole.","\n","ev","str","^Unlock the door","/str",{"CNT?":"cave.hole.0.c-1"},"/ev",{"*":".^.c-0","flg":21},"ev",{"CNT?":"cave.hole"},"!","/ev",{"*":".^.c-1","flg":25},"ev",{"CNT?":"cave.hole"},"/ev",{"*":".^.c-2","flg":25},{"c-0":["^ You slot the key into the keyhole. ","\n","^You open the door... and see the sky! You won CORK! Congratulations! ","end","\n",{"#f":5}],"c-1":["\n","^It appears as if you must find a key... You return back to where you woke up.","\n",{"->":"cave.lit_cave"},{"#f":5}],"c-2":["\n","^You've searched the whole cave, and yet you've seen no key. You give up, deciding to spend the rest of your days with the troll. ","end","\n",{"#f":5}]}],{"#f":1}],"hole":[["ev",{"CNT?":".^.c-2"},"!",{"CNT?":".^.c-0"},"!","&&","/ev",[{"->":".^.b","c":true},{"b":["^ It appears that this may be a dead end.",{"->":".^.^.^.8"},null]}],"nop","\n","ev","str","^Examine your surroundings","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Examine your surroundings once more","/str",{"CNT?":".^.c-0"},{"CNT?":".^.c-2"},"!","&&","/ev",{"*":".^.c-1","flg":21},"ev","str","^Leave","/str",{"CNT?":".^.c-0"},{"CNT?":".^.c-2"},"!","&&","/ev",{"*":".^.c-2","flg":21},{"*":".^.c-3","flg":24},{"c-0":["^ You look around, but there's nothing unusual. ","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ In the corner of your eye, you catch the glint of metal.","\n","^KEY OBTAINED!","\n","^Deciding there's nothing else of value in this hole, you decide to climb back out.","\n",{"->":"cave.lit_cave"},{"#f":5}],"c-2":["^ Deciding there's nothing of value in this hole, you decide to climb back out.","\n",{"->":"cave.lit_cave"},{"#f":5}],"c-3":["\n","^Why'd you come back? Nothing's here.","\n",{"->":"cave.lit_cave"},"end",{"#f":5}]}],{"#f":1}],"#f":1}],"#f":1}],"listDefs":{}};