---
title: "VR Air Hockey: A Custom Controller Attachment"
summary: "A multiplayer VR air hockey game built in Unity, paired with a 3D-printed controller attachment designed to make swinging a paddle feel physical."
coverImage: "/images/projects/vr-air-hockey/cover.jpg"
coverImageAlt: "A 3D-printed disc attachment clipped onto a Meta Quest controller"
tags: ["Unity", "C#", "VR", "Meta Quest", "Photon Networking", "Product Design"]
date: 2026-06-01
featured: true
order: 0
---

<!--
	Draft generated from your project images — please fact-check dates, exact tools/course name,
	and any details below before publishing. Replace this comment and anything inaccurate.
-->

This was my bachelor's thesis project: a two-player, networked VR air hockey game where each
player physically swings their controller to hit a puck across a shared table. Beyond the Unity
gameplay itself, a large part of the project was designing and 3D-printing a physical attachment
for the Meta Quest controller so that holding it felt more like holding a real paddle than a
handheld controller.

## The Process

### Building the game

The game was built in Unity for Meta Quest, using Photon for real-time networking so two players
could play against each other with synced avatars, puck physics, and paddle positions.

![Unity editor showing the air hockey scene, with the table, puck spawn points, goals, and networked player objects](/images/projects/vr-air-hockey/process-1-unity-project.png)

_The Unity project: a shared table, puck/goal logic, and Photon-networked player avatars._

### Prototyping the paddle attachment

Rather than have players hold the bare controller, I prototyped a disc-shaped attachment that
clips onto the controller ring, giving it a paddle-like grip and profile. Early versions were cut
from foam to test size and shape before moving to a final 3D-printed part.

![Foam prototypes of the paddle attachment in different sizes, next to the final white 3D-printed disc](/images/projects/vr-air-hockey/process-2-foam-prototypes.jpg)

_Foam mockups used to test the size and shape of the attachment before 3D printing it._

![Close-up of the final 3D-printed attachment, showing how it clips onto the controller ring](/images/projects/vr-air-hockey/process-3-final-attachment.jpg)

_The final 3D-printed attachment, designed to clip onto the Meta Quest controller ring._

### Playing it

With the attachment fitted, two players could face off across the table from their own headsets,
seeing each other's avatar and the puck in real time.

![First-person VR view of the air hockey table with an opponent's avatar visible on the other side](/images/projects/vr-air-hockey/process-4-magnus-pov.png)

_One player's point of view during a match._

![First-person VR view from the opposite side of the table, with the other player's avatar and hand visible](/images/projects/vr-air-hockey/process-5-mark-pov.png)

_The other player's point of view from across the table._

## What I Learned

This project combined game development (Unity, C#, real-time multiplayer networking with Photon)
with physical product design (iterative prototyping from foam to a final 3D-printed part). Add a
closing reflection here: what worked well, what you'd change, and a link to the full thesis or
source code if you want to share it.
