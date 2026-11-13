---
title: "Master's Thesis: Manipulating Virtual Objects Through a Physical Proxy"
summary: "An AR concept where a 3D-printed ball you hold in your hands stands in for a virtual 3D model, tested against mouse-based CAD with novice users to see whether touch makes models easier to explore."
coverImage: "/images/projects/masters-thesis-physical-proxy/cover.jpg"
coverImageAlt: "A white 3D-printed skeleton ball with transparent panels, with a Meta Quest controller visible inside"
tags: ["Unity", "Meta Quest", "Augmented Reality", "Tangible UI", "3D Printing", "User Study"]
date: 2025-11-15
featured: true
order: 6
---

<!--
	Draft written from the thesis PDF. Please check:
	- You didn't give a title, so I made this one up. The thesis' own title is "Exploring a potential
	  Tangible UI for manipulating virtual objects through a physical proxy". Use that if you prefer.
	- The cover page says 15 November 2025, but the abstract is signed "November 2026". I used 2025-11-15.
	- In the Sim-TLX results the thesis reads the lower "control" score for the headset as a
	  "diminished sense of control", but the abstract, discussion and conclusion say it was "easier to
	  control". I followed the abstract and conclusion and left the control numbers out of the page.
	  Worth settling which one is right.
	- Left out: the supervisor's name and student number, the Pokémon GO / AI data paragraph from the
	  introduction, the two median tables, and Figures 2.1 and 2.2, which are other people's work.
	- The demo video link is the YouTube link from the thesis' future work section.
	Delete this comment when done.
-->

My master's thesis at Aarhus University's Department of Computer Science explores a different
direction for extended reality (XR), one where touch plays a central role. The idea is a
**universal physical proxy**: a simple object you can hold and turn, which the system tracks and
replaces, through an AR headset, with a digital 3D model. Turn the object in your hands and the
model turns with it.

The thesis builds an early version of the concept, a 3D-printed ball tracked by a Meta Quest, and
compares it against a mouse in Autodesk Fusion in a user study with novices.

## Why I wanted to try this

My bachelor's thesis was also in XR, a [VR air hockey game](/projects/vr-air-hockey) built to
explore how physical boundaries could be brought back into virtual worlds. The game worked, but
spending time in it felt hollow. The headset hides your eyes, and your body is replaced by an
avatar that floats around smiling. What was lost was the heart of the game: the teasing,
encouraging and gloating between two people across a table. If that is noticeable in a casual
game, it matters even more when people collaborate and need to read each other.

That pushed me towards AR, where you can still see the people around you, and towards touch.
Most 3D modelling tools are built for experts and controlled through a mouse and keyboard, which
are learned skills, and the jump from handling real objects to a CAD program is a big barrier for
beginners. People are good at feeling the shape of something in their hands (a skill called
stereognosis), and modelling tools hardly use it. So the question became: can holding a physical
object make it easier for novices to explore a 3D model?

## The Process

### Why AR, and not VR

AR lets people stay visually and socially connected, so eye contact and gestures still work. That
is essential for the collaboration the concept is aimed at. Today's AR headsets aren't fully
transparent yet, so the prototype uses a headset with pass-through video, but the concept assumes
see-through glasses.

### The concept

The proxy can have an arbitrary shape. Its position and orientation are tracked, and the headset
draws a digital model on top of it. The system also maps where your hands are on the proxy to
the matching place on the model and shows a pair of virtual hands holding it. Several people
wearing glasses could look at the same model, either handing one proxy around or each holding
their own proxy linked to the same model.

![Four views: a ball held in two hands, the same view with a car drawn over the ball and virtual hands, and the same two views after the ball is tilted](/images/projects/masters-thesis-physical-proxy/process-1-concept-renders.jpg)

_The concept. Left: what you see without the headset, with the tracked position and orientation
shown in red. Right: with the headset, a car replaces the ball and follows every turn._

### Ideas I left behind

Before settling on a Meta Quest controller inside a ball, I tried or sketched other ways of
tracking and building the proxy.

**String tracking.** The proxy would hang from several strings with tension sensors, and its
position would be worked out by triangulation. A cheap mechanical idea, but I never got past the
sketch.

![A pencil sketch of a cluster of cubes with three axes running through it and arrows showing movement](/images/projects/masters-thesis-physical-proxy/process-2-string-tracking-sketch.jpg)

**QR marker tracking.** I made a cube covered in markers for the headset camera to recognise.
It didn't work well for something that is constantly turned, because every face has its own
marker. Each time a different marker came into view the projection reset, so the tracking jumped.

![A cardboard cube wrapped in grey tape with a black and white marker pattern on one face](/images/projects/masters-thesis-physical-proxy/process-3-marker-cube.jpg)

**A modular shared proxy.** For collaboration, each person would hold a cube, and the shared
model would be built from several cubes. You would "claim" a piece to edit it, which locks it for
everyone else, just as only one person can hold a physical piece at a time. It isn't the most
practical workflow, but it raised useful questions about ownership and awareness.

![A pencil sketch titled "Universal Tangible Modelling artifact", showing cubes that are added, removed and manipulated to match a virtual horse](/images/projects/masters-thesis-physical-proxy/process-4-modular-proxy-sketch.jpg)

### Building the proxy

I designed the proxy in Fusion 360 and printed it on a Prusa MK4S. It had to be easy to assemble
and take apart, so the controller could be attached or removed without breaking anything, and so
I didn't have to reprint everything for each revision.

The first plan was a fully closed ball with an accelerometer and magnetometer inside to track
rotation. Then I switched to using the headset's own tracking of a Meta controller, which meant
the headset cameras had to see through the ball. So I redesigned it as an open skeleton, built
from two halves with interlocking hinges, with openings for transparent panels.

![A 3 by 3 grid of renders showing a controller cover being attached, then one half of a skeleton ball being built, then two halves joined with hinges](/images/projects/masters-thesis-physical-proxy/process-5-assembly-sequence.jpg)

_The assembly sequence: attach the cover to the controller, build the first half with its hinges,
then interlock the two halves and rotate one to lock them._

For the panels I needed something sturdy, transparent and shapeable. Plastic cut from a clear
storage box did the job. I cut out eight pieces, softened each with a heat gun, bent them to the
curve of the ball and trimmed a corner of each to leave room for the hinges.

![Three flat, shield-shaped pieces of clear plastic on a workbench](/images/projects/masters-thesis-physical-proxy/process-6-cut-panels.jpg)

![Side view of three clear plastic panels bent into a curve](/images/projects/masters-thesis-physical-proxy/process-7-curved-panels.jpg)

_Cutting the panels, then heating and bending them to match the ball's curve._

![The two halves of the white skeleton ball lying open, with a Meta Quest controller inside one half](/images/projects/masters-thesis-physical-proxy/process-8-open-halves.jpg)

_The two halves with their panels, and the controller that sits inside._

Two problems showed up before the study. The 3D-printed screw holding the controller snapped
under its weight, so I made a new cover with a rectangular extension fixed with a metal screw.
And the plastic panels weren't clear enough for the headset to track the controller reliably, so
I took them out. The ball used in the study is the open skeleton.

### Connecting it to the 3D model

The AR side runs in Unity with the Meta SDK for Quest. It builds on Meta's sample scene for using
hands and controllers at the same time. The standard camera rig has an anchor for each hand, and
the sample adds two more "detached" anchors for the controllers. That way the headset keeps
tracking the controller even when you put it down and use your bare hands, and Unity keeps
using its position and rotation to move the model.

![A Unity hierarchy showing the camera rig with left and right hand anchors and detached hand anchors, numbered in red](/images/projects/masters-thesis-physical-proxy/process-9-unity-rig.png)

_The camera rig, with the four anchors numbered._

### The study

I tested the proxy with six participants, aged 20 to 25, all with little or no 3D modelling
experience. The study was within-subject, so everyone tried both conditions:

- **Mouse:** moving the models in Autodesk Fusion with a mouse.
- **Headset:** wearing a Meta Quest 3S with pass-through and using the proxy.

Each session had two tasks in each condition. In the first, participants turned a numbered cube
so that each number from 1 to 6 faced them in turn. In the second, they looked at five different
models, such as a dog, a sword and a tree, and described each one. Then they saw the same models
again with small changes, for example much smaller eyes on the dog, a different angle on a cat's
tail, or a tree missing a branch, and had to notice what was different. To avoid bias, I
counterbalanced the order of the conditions and of the two sets of models.

![The numbered cube, a low-poly dog and the same dog with its eyes made much smaller](/images/projects/masters-thesis-physical-proxy/process-10-task-stimuli.jpg)

_Study material: the numbered cube, and the dog before and after its modification._

I measured workload with the Sim-TLX questionnaire, an extension of NASA-TLX for virtual
simulations, and finished each session with an interview. The headset view was also recorded.

### Results

Everyone completed the first task fairly easily. Looking at the median ratings from the
questionnaire, the headset condition was more demanding mentally and physically, but caused less
stress and perceptual strain:

- **Task 1, mental demand:** 18 for the headset against 13.5 for the mouse.
- **Task 1, physical demand:** 8.5 against 4.
- **Task 1, stress:** 11 against 19.5.
- **Task 1, perceptual strain:** 22 against 28.
- **Task 2, mental demand:** 46 against 16.5.
- **Task 2, physical demand:** 10 against 4.5.
- **Task 2, stress:** 13.5 against 22.
- **Task 2, perceptual strain:** 13 against 21.

![Boxplots of the nine Sim-TLX ratings for task 1, comparing the mouse (blue) and the headset (orange)](/images/projects/masters-thesis-physical-proxy/process-11-boxplot-task1.png)

![Boxplots of the nine Sim-TLX ratings for task 2, comparing the mouse (blue) and the headset (orange)](/images/projects/masters-thesis-physical-proxy/process-12-boxplot-task2.png)

_Sim-TLX ratings for task 1 and task 2. Blue is the mouse and orange is the headset._

The interviews and observations added some detail:

- Two participants said the headset felt more intuitive, and one found it much quicker to spot
  the differences between models. In Fusion, another found the coordinate plane and the many
  menus and tools distracting.
- Two participants got tired arms in the headset condition, which matches the higher physical
  demand.
- One participant held on to the second controller the whole time, so later participants were
  asked to put it down, which made the interaction more natural and more comparable.
- The projection sometimes reset because of tracking glitches, which several participants found
  distracting. One said that each time it happened they had to reorient themselves, and that it
  broke their concentration.
- The pumpkin model was changed only in size. It was spotted just once with the mouse but every
  time with the headset, which may be down to a more natural sense of depth in AR, since Fusion
  shows 3D models on a flat monitor.

### What it all means

There are clear signs that people found it more intuitive and natural to explore a model with the
proxy. They rated it as less frustrating and easier to control, and several called it more
intuitive. The higher mental demand might not be a bad thing, because it could mean they engaged
more deeply with the model.

But the study can't show that the proxy leads to a deeper understanding of a model. The tasks
mostly tested surface-level skills, navigating and orienting a model, rather than examining it
thoroughly. The bigger problem is that two things changed at the same time: the input (mouse vs
proxy) and the environment (a 2.5D CAD program on a monitor vs a 3D AR scene). That makes it
impossible to tell which of them caused the differences. A better design would add a third,
in-between condition so that only one thing changes at a time.

The prototype itself also affects the results. Its skeletal, uneven surface may feel different
from a smooth sphere, and I left out virtual hands to avoid adding a further condition around
embodiment.

## What's next

I see this as one small step. The thesis lays out several directions for taking it further:

- **Shape and texture.** Deformable or modular proxies, or cheap illusions that make one object
  feel like different shapes, weights or textures.
- **Tracking.** Embedded motion sensors for more stable tracking, and a proper study of whether
  you need full position tracking or whether orientation alone is enough.
- **Selection.** Letting you pick and move individual parts of a model, such as the wheels or
  doors of a car, ideally through the proxy itself.
- **Modelling.** Reshaping the proxy and seeing the digital model change with it, so that you
  can build and not only look.
- **Collaboration.** Several people working on the same model, in the same room or remotely, and
  how the system should show who is in control.
- **Other areas.** Architecture, medical visualisation, museums and communication tools, where
  a shared physical object helps people understand space.

## What I Learned

This project showed me how hard it is to prove that a design is better, even when it feels
better. The ball felt natural to most participants, yet the study design couldn't tell me why.
It also taught me to take building seriously as research: designing, printing, bending plastic
and fixing a snapped screw taught me as much as the questionnaire did.

## Links

- [Demo video of the sub-object selection concept on YouTube](https://youtu.be/KRg3rXqF_yk)
