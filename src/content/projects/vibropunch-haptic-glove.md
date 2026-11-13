---
title: "VibroPunch: A Soft Wearable Haptic Glove for VR Boxing"
summary: "A soft, sewn glove with vibration motors at the knuckles that lets you feel your punches in a VR boxing game, built after an early idea of squeezing the fingers turned out not to work."
coverImage: "/images/projects/vibropunch-haptic-glove/cover.jpg"
coverImageAlt: "A hand holding a small servo motor that pulls a thread attached to a cloth ring on a finger of the other hand"
tags: ["Wearables", "Haptics", "Virtual Reality", "E-Textiles", "Prototyping", "HCI"]
date: 2024-02-01
featured: true
order: 8
---

<!--
	Draft written from the report (WearablesPictourial.pdf), which is itself an early draft with
	unfilled placeholders. Please check:
	- The cover is Figure 3 from the report (the cloth ring on a finger, pulled by a servo). The two
	  sketches come from the sketch PDFs you sent. There is still no photo of the finished glove, so
	  consider swapping the cover for one. The report says your pictures are in a Google Drive
	  folder, which I haven't opened.
	- I left out the Force Jacket and PneumAct figures, which belong to other people's papers.
	- The date is a guess from "February 2024".
	- The report doesn't name the course. I wrote "course project" and left out your co-author, the
	  teaching assistant and the two Google Drive links.
	Delete this comment when done.
-->

VR looks and sounds more and more real, but touch is still hard, and the commercial haptic gloves
that try to fix it are bulky and expensive. For a course project with a classmate, we tried the
opposite: a **soft wearable**, a glove you sew rather than bolt together, that gives up some
resolution to keep your hand and fingers free to move.

The result is **VibroPunch**, a glove for a social VR boxing game. When you land a punch, small
motors at your knuckles vibrate so you feel the hit. We never connected it to a real game, so an
accelerometer detects the punch as a stand-in for the game's input.

## The Process

### The use case

Bob and Alice box each other in VR, both wearing a VibroPunch. When Bob's avatar hits Alice's
guard, he feels it in his left glove, and when he lands a full punch with his right, the right
glove vibrates. We sketched it to think about where feedback could go and which kind to use.

![A pencil sketch of one person punching another person's guard, with the point of impact circled, below it two forearms and a punching fist with circled spots where feedback could be felt, and a list titled "Haptic format?" with inflation, vibration, force (pull) and heat](/images/projects/vibropunch-haptic-glove/process-2-use-case-sketch.jpg)

_Where feedback could be felt, and the formats we considered: inflation, vibration, a pulling force
and heat._

### First idea: squeezing the fingers

Inspired by pneumatic haptic wear like the Force Jacket, we first tried compression: a band around
each finger that tightens when you get hit. We sewed cloth rings and tied each to a servo motor
with thread, which could pull and squeeze.

![A pencil sketch of an open hand with a band around one finger, a pad over the back of the hand and a cuff at the wrist, with an arrow to the same glove closed around a fist, and a small strip above showing a hand closing from open to fist](/images/projects/vibropunch-haptic-glove/process-1-glove-sketch.jpg)

_An early sketch of the glove, open and closed around a fist._

The photo at the top of this page is from that experiment. It didn't work: making a fist already
tenses your finger muscles so much that you can't feel the extra squeeze. 3D-printed gears for
more force made the setup too complicated to fit on a hand, so we dropped the idea.

### The pivot: vibration

We switched to small vibration motors, one at each knuckle. Everything had to sit on the hand, so
we shrank the circuit over several iterations and sewed a leather pocket on the back of the glove
to hold it. Power took some work too: our first battery pouch, made with conductive cloth and
yarn, couldn't deliver enough current, so we switched to a small LiPo battery.

### Building the glove

We built it on a thin, stretchy commercial glove. The motors sit in separate pockets at the
knuckles so they don't restrict the fingers, and the circuit and battery have leather pockets
closed with velcro, so we could adjust things while prototyping. When the accelerometer detects a
punch, a transistor switches the motors on for one second.

For the look we mixed kickboxing gloves (leather, knuckle protection) with tech-wear: exposed
wires tidied with heat-shrink tubing, black fabric and a red gamer-style thread.

I made the cloth rings and the battery holder, did the sketches, and sewed the finger pads and the
component pouch. My classmate and I worked on the servo prototypes and the report together.

### Testing it

We tested it ourselves, and with visitors at an exhibition. The glove was easy to wear and didn't
get in the way of our hands, though the battery pouch left it slightly off-centre. Because the
motors sit so close together, you can't tell which one is running, which lowers the resolution but
makes it more reliable.

Visitors gave us two ideas:

- A martial arts practitioner suggested using the glove as a coach that buzzes when your technique
  is off.
- Several people wanted it to look more like sportswear, so the final version is fingerless, like
  MMA gloves.

One visitor also punched it as hard and fast as they could, and it held up.

## What I Learned

The key lesson was to let go of an idea that isn't working. Compression was our first choice, but
pivoting to vibration is what made the glove possible. The vibration was felt across the whole hand
and didn't feel like hitting something, but it was a comfortable, fitting sensation. We never
tested the glove inside a VR game, so we can't say whether it makes VR more immersive.

Next steps would be the game itself, a second glove, and pneumatic sleeves that simulate knockback
by pulling up your arm when you guard against a strong hit.
