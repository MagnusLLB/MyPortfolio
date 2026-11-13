---
title: "ScreenSaver: an Energy Saving Application for Trifork"
summary: "A Windows app that saves energy on multi-monitor setups by dimming the screens you aren't paying attention to, built with Trifork and taken from Figma prototype through energy measurements to a user study."
coverImage: "/images/projects/screen-saver-ui/cover.webp"
coverImageAlt: "Figma prototype of ScreenSaver: a settings screen with primary screen, dim trigger, detection sensitivity and fade speed, next to a current versus expected usage chart"
tags: ["Electron", "C++", "Figma", "HCI", "Sustainability", "User Research"]
date: 2024-06-03
featured: true
order: 3
---

<!--
	Draft written from your report excerpt (it stops partway through section 3.8) and the 12 images.
	Please check:
	- Implementation and Evaluation are based only on the report's table of contents and the images,
	  so add the real details (what C++ vs Electron does, participants, task, findings).
	- Image guesses: the room photo is assumed to be Trifork's building, and the two-monitor photo is
	  assumed to be the dual monitor energy test.
	- The date comes from the timestamp on the desktop screenshot (3 June 2024).
	- Whether you are happy to name Trifork and describe it as a group project.
	Delete this comment when done.
-->

Monitors are a big part of a computer's energy bill, and every extra one adds to it. In our
measurements, one additional external monitor added up to 40% to a computer's total energy
consumption. Yet even when you work across several screens, you only ever look at one of them at a
time, so one monitor is always lit up for nothing.

ScreenSaver is the system my group and I built to tackle that. It explores **Attention-Based Energy
Management**: instead of waiting for you to leave your desk, it works out which screen you are
paying attention to and dims the others. The project was done in collaboration with Trifork, a
Danish software consultancy, and set out to answer three questions:

- What is it like to work with an Attention-Based Energy Management system?
- Which control parameters matter most for user experience and energy savings?
- How much energy could dual monitor setups actually save?

## The Process

### Visiting Trifork's smart building

The idea started with a visit to Trifork's new office, which they use as a prototype for building
sustainability and energy efficiency in from the start. Before going, we brainstormed what we hoped
to learn.

![Whiteboard brainstorm around "Smart Buildings", with branches for IoT, social, environmental and material topics](/images/projects/screen-saver-ui/process-1-trifork-brainstorm.jpg)

_Brainstorm in preparation for the visit._

Every room has sensors for temperature, humidity and air quality, shown on small tablets. Every
desk has a smart plug that employees switch on when they arrive, so the building knows which offices
are in use and can turn heating and ventilation down for the empty ones. The whole building follows
a "waste not, want not" philosophy.

![A glass-walled office with wooden walls and floor, desks and monitors](/images/projects/screen-saver-ui/process-2-trifork-building.jpg)

_A room in Trifork's wood-built office._

### Finding a direction

Afterwards we brainstormed again and landed on three possible directions: making IoT renovations
accessible to people without Trifork's expertise, extending smart buildings to non-human "users"
such as plants, and cutting wasted energy in everyday office work. The plant idea was fascinating
but beyond what we could build, so we went looking for waste in the office itself.

![Whiteboard mind map with "Buildings" in the centre and branches for society, construction, energy, social and liveable](/images/projects/screen-saver-ui/process-3-buildings-mindmap.jpg)

_Mapping out the topics inspired by the visit._

Dual monitor setups stood out. Plenty of energy-saving systems already dim or switch off a monitor
based on whether you are present, but we couldn't find any based on where your **attention** is.
That gap, and the tension between automation and the feeling of control, made it an interesting
human-computer interaction problem.

To estimate attention we first considered gaze tracking, but it needs specialised hardware.
Head pose estimation works with the webcam most office setups already have, so we went with that,
alongside simple mouse tracking as a fallback.

### Designing the controls

A big part of the project was deciding what the user should be able to control. We built a first
prototype that changed the brightness of two screens on command, which showed us which parameters
mattered:

- **Fade speed:** how quickly a screen dims, from instant to gradual.
- **Brightness level:** the brightness the system switches between.
- **Dim trigger:** how long a screen has to be inactive before it dims.

We also sketched work profiles, so someone translating or doing accounting could pick preset values
that suit the task. To encourage energy-saving choices without taking away control, we planned to
nudge users with statistics on the energy they had saved. All of this went into a first layout in
Figma.

![Two Figma screens: a settings menu with primary screen, dim trigger, detection sensitivity and fade speed, next to a current versus expected usage chart](/images/projects/screen-saver-ui/process-4-figma-menus.webp)

_The first Figma layout: settings on one side, a current versus expected consumption chart on the
other._

![A Figma screen with a total consumption of 37.6 kWh, a line chart and a blue and red donut chart](/images/projects/screen-saver-ui/process-5-figma-statistics.webp)

_An alternative statistics view with total consumption over time._

![A Figma board with several versions of the settings and chart screens and red annotations linking them](/images/projects/screen-saver-ui/process-6-figma-iterations.png)

_Iterating in Figma, including how changing a setting should show up in the expected usage chart._

We tested the layout and concept in a peer feedback session. Two points stuck. First, the
environment matters: on a sunny day the screen should stay brighter, and an onlooker shouldn't be
left staring at a black screen, which led to ideas for detecting two faces and a quick shortcut to
disable the app. Second, and most importantly, the statistics didn't resonate. "How much is 8 kWh
saved, really?" People knew the unit but couldn't relate to it, so we started looking for everyday
equivalents, such as the energy a fridge uses in a day.

### Measuring the energy

To ground the design in real numbers we measured how much power different monitors use.

![Two monitors side by side playing an aquarium video, with a laptop and cables in the foreground](/images/projects/screen-saver-ui/process-7-dual-monitor-test.jpg)

_The dual monitor setup used for energy measurements._

We also compared how much power four different monitors save as brightness is lowered. Savings
vary a lot by model: dimming all the way to zero saved roughly 45% to 70% of a monitor's power,
depending on which one it was.

![Line chart of percentage of power saved against brightness level for four monitor models](/images/projects/screen-saver-ui/process-8-power-vs-brightness.png)

_Power saved as brightness drops, for four monitors._

### Mapping the design space

To pull the research together we mapped everything onto sticky notes: the parameters users can
control, the emotions the system might trigger (frustration, confusion, fear, joy, pride), the
technical solutions available, what counts as sustainable, and which incentives might motivate
people. It also showed how much the experience depends on who the user is, from tech-savvy to
tech-nervous.

![A board of sticky notes grouped under controllable parameters, user experience, technical solutions, sustainable and incentive](/images/projects/screen-saver-ui/process-9-design-space.png)

_The design space: parameters, user experience, technical solutions, sustainability and incentives._

### Building the app

ScreenSaver is a Windows desktop app built with Electron. It adjusts monitor brightness through
DDC/CI and WMI, with C++ for the low-level work, and estimates attention using face tracking and
mouse tracking. The final version detects each connected display and lets you set the brightness
start and end levels, the time before dimming and how long the dimming takes.

![The ScreenSaver interface, with a monitor selector and controls for work profile, sensitivity, dim trigger and dim speed](/images/projects/screen-saver-ui/process-10a-interface.png)

_An iteration of the interface with work profiles and sensitivity settings._

![The finished ScreenSaver app running on a Windows desktop, showing two detected displays and brightness and timing settings](/images/projects/screen-saver-ui/process-10-final-app.webp)

_The finished app running on Windows._

### Evaluating it with users

We evaluated ScreenSaver with a user study using a questionnaire, interviews and observation. In the
questionnaire results all six scales landed in the positive range, with perspicuity (how easy the
system is to understand) scoring highest and stimulation lowest.

![Bar chart of questionnaire results for attractiveness, perspicuity, efficiency, dependability, stimulation and novelty, all in the positive range](/images/projects/screen-saver-ui/process-11-ueq-results.png)

_Questionnaire results across six user experience scales._

## What I Learned

The most interesting part wasn't getting a screen to dim, it was balancing automation against the
user's sense of control. The project is a step towards designing systems that reduce how much
awareness people need in order to act sustainably, and a recurring lesson was that feedback only
works if people can relate to it: kilowatt-hours meant little until they were tied to something
familiar.

Add a closing reflection here: the energy saving results, what the interviews told you, and what
you would build next.
