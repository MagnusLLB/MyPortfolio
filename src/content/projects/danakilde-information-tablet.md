---
title: "Informations Tablet - Project with B&B Danakilde"
summary: "A check-in and information tablet for a family-run bed & breakfast, developed through field studies, a future workshop and sprints, then tested with think-aloud sessions."
coverImage: "/images/projects/danakilde-information-tablet/cover.jpg"
coverImageAlt: "The tablet's main menu with a large green Check-in button and round buttons for WiFi, map and info, over a photo of a meadow with horses"
tags: ["User-Centred Design", "Field Studies", "Prototyping", "Figma", "Agile", "Usability Testing"]
date: 2022-12-01
featured: true
order: 5
---

<!--
	Draft written from the project report (ExSys, in Danish) and its four screenshots. Please check:
	- The date is a guess from "Experimental System Development 2022". Set the real month.
	- I wrote "I worked with three classmates" and left out names, student numbers, the
	  supervisor and the people at the company.
	- The report doesn't say what technology the final system was built with, so there are no
	  tech tags. Add the real stack (and the HTML/JS/etc. you used) if you like.
	- I left out the GitLab link and the live demo link (an IP address) from the report's front page.
	- The screenshots show Danakilde's logo and a photo of their land. Check that the company is
	  happy for them to be public.
	- The title is exactly as you wrote it ("Informations" with an s).
	Delete this comment when done.
-->

Software built for a company often misses the mark because the people who will actually use it
aren't involved early enough. This project was about doing it the other way round. It was my
course project in Experimental System Development at Aarhus University in 2022, which I did with
three classmates. We worked closely with Danakilde, a small family-run bed & breakfast, to find
out what they really needed and then build and test a system for it.

Danakilde sits at the edge of Give in Denmark, next to a lake, and has about ten employees. It
started as a carpentry firm around 20 years ago and has grown to include a bed & breakfast, a
course centre, a retreat, a stud farm and a sawmill. Ecology and sustainability run through
everything they do, and so does trust. The small shop at the B&B isn't staffed at all; guests
simply pay on trust.

We narrowed our focus to guests' stays: the course centre, retreat and B&B. The manager cares a
lot about hospitality and trust, so whatever we built couldn't get in the way of that. We looked
specifically at how information is passed on during a stay.

## The Process

### Field studies: watching how the work flows

To understand how the company works, we watched their normal work, taking care not to get in the
way and asking questions when something was unclear. We used the theory of Common Information
Spaces, which gives you seven angles to look at a workplace from, such as how spread out the work
is, how much coordination it needs, and which physical objects people use to coordinate.
Following Heath and Luff, we focused on how people coordinate with each other and with their
tools rather than on individuals, using notes, short interviews and observation.

One limitation was that most of our observations came from the manager. Most of the staff are
flexible, part-time workers, so it was hard to get hold of anyone else.

What we found was that the manager sits at the centre of nearly everything:

- She holds almost all the information. A calendar only she can interpret is turned into the
  day's tasks, which she hands out at a morning meeting and writes on a whiteboard.
- Staff numbers vary with the season, from a single person to up to six at peak times, so the
  amount of coordination swings a lot.
- Work is spread over a large area, and the whiteboard isn't always where she is.
- When new guests arrive, she is pulled away from coordinating to welcome them. That breaks the
  flow of the whole day.

On the other hand, misunderstandings rarely have serious consequences, so the need for
split-second precision is low. That told us what to aim for: take one coordinating job off the
manager's plate, welcoming guests at check-in. Our idea was an online check-in where guests find
their own room, with short videos in place of a guided tour, plus an information page with the
house rules and everything else a guest might want to know.

### A future workshop with the company

To turn the company's many ideas into a shared and realistic plan, we ran a future workshop. It
has three phases. In the critique phase everyone writes down what is wrong today. In the fantasy
phase they brainstorm freely without worrying about how to do it. In the realisation phase the
most unrealistic ideas are dropped and the rest are turned into a plan.

Workshops like this work best with large groups, and the method suggests around 20 people. We had
two, which is what a company this size can offer, so we ran it as described but accepted the
limits that came with it.

The critique phase produced a long list of problems, for example an unstable internet connection
for guests, slow replies to emails, missing standard information, an unpredictable booking
system, rules that guests don't follow, and a shop where it is hard to keep track of what has
been bought. The fantasy phase produced ideas such as automatic email replies, a video doorbell,
an information board with the house rules, signs around the site with small stories about the
area, and an online check-in. After
the realisation phase these were the ideas we kept:

- Automatic standard replies for emails
- A smart doorbell with video calls
- An online information board with the relevant information
- More accessible information about the facilities
- An online check-in on a tablet, with links and preset videos of the rooms and surroundings
- A floor plan, an event page, a purchase system for the shop and better social media

Putting it all together, many of the problems came down to communication with guests and
customers: information was missing or only reachable through the manager. She has a very broad
role and few means of handling it comfortably. The most promising idea was a tablet or
information board in the entrance, where new guests could check in and get what they need to
settle in, without her being there every time. A place to start would be a way of bringing the
information together, so that guests and the manager can both see booking, shop and guest
information, each in a form that suits them.

### Planning with user stories and sprints

We structured the project as a user-centred agile process, with a first phase for gathering and
making sense of data, then release planning and sprints. The plan was written as user stories:

- **Sprint 1, check-in.** As an owner I want a check-in system, so that I don't need to be present
  when guests arrive. And as an owner I want guests to check in with a pin code, so that other
  guests can't check in for them (the code could be sent by mail or SMS).
- **Sprint 2, room overview.** As an owner I want an overview of booked and unbooked rooms, so
  that I have less room for error. It would also show whether a room is occupied, needs cleaning
  or is free. We soon saw that this wasn't realistic to reach, so we went straight from sprint 1
  to sprint 3.
- **Sprint 3, information for guests.** As an owner I want guests to be told the house rules, so
  that I don't have to explain every detail, and I want them to see all the facilities we offer.

We checked the pin-code story against the INVEST principles. It doesn't depend on any other
story, it leaves room for a conversation about how the code is sent, and it came from the
company's own wish to keep their guests secure. We could estimate and size it, and it is testable: a guest can
check in with the code, and nobody else can check in to that room without it.

### Prototyping the tablet

The system runs on a tablet that guests use themselves, so it has to look good and be easy to
use. We began with an exploratory, horizontal prototype in Figma, which helped us understand the
design and made it possible for us and the company to learn from each other early on. The final
system is still a fairly shallow implementation and would need more functionality before it could
be used for real.

A check-in goes like this. The standby screen is shown when the tablet isn't in use and invites
you to continue.

![The standby screen with the Danakilde logo over a meadow, with the text "Check-in and information board" and "Tap the screen to continue"](/images/projects/danakilde-information-tablet/process-1-standby-screen.jpg)

_The standby screen (in Danish). Any movement wakes it up, which makes more sense on a tablet._

From the main menu (the image at the top of this page, where "Kort" means "Map"), the guest taps
the big Check-in button.

![The check-in screen with the prompt "Please enter your room number below" and a field with a green Check in button](/images/projects/danakilde-information-tablet/process-2-check-in-screen.jpg)

_The check-in screen: the guest enters the number for their room._

Finally, a page confirms that they are checked in and plays a video showing the way to their
room. The videos in the prototype are placeholders, because we didn't have the real guides yet.

![The confirmation page with the text "Hi and welcome to Danakilde. You are now checked in!" and a video player](/images/projects/danakilde-information-tablet/process-3-after-check-in.jpg)

_After check-in: a welcome message and a video guide to the room (a placeholder video here)._

We tried to follow Shneiderman's eight golden rules. For consistency, the back arrow and the
logo are in the same place on every screen after the standby page, so people know where to look.
For error prevention, if a guest enters a room number that doesn't exist, a speech bubble tells
them the number was wrong and to try another.

### Testing with real users

For the evaluation we used think-aloud testing, where a person says out loud what they are
thinking while working through a list of tasks, and the evaluator mostly watches. We were guided
by a study of how evaluators work in practice, which warns against leading and hypothetical
questions and against only testing for problems you already know about. The tasks were:

1. Get away from the standby screen
2. Go to the check-in screen
3. Check in with a given room code
4. Find your room
5. Say what you expect to happen when the video ends
6. Go back
7. Choose your own four-digit code and try to check in

We tested with two people: an external tester with no link to the company, and an internal one
who looks after the company's technology.

Both found the large green check-in button obvious and the system very intuitive. Both read the
error message for an invalid room number and understood what was wrong. We also saw a few things
to improve:

- The external tester didn't realise right away that he was checked in, and only understood after
  reading the text. When the video ended he expected a new screen or guide. Part of the confusion
  came from our unrelated placeholder video.
- The external tester felt the back button blended into the background, while the internal tester
  called it very clear. Because they disagreed, we didn't change it.
- The internal tester had few comments, because the system did what he expected. His advice was
  to keep text to a minimum, so that people don't have to stand there for a long time to find
  information.

Possible fixes would be a clearer confirmation such as a pop-up, and a "back to the front page"
button that people press when they feel they are done, so check-in feels finished instead of
reversed.

## What I Learned

- **Observation shows where the real bottleneck is.** Watching the work made it clear that one
  person was at the centre of everything, and that a small tool could lift pressure from exactly
  there.
- **Small groups limit what you can learn.** Our workshop had only two participants, and in a
  family business there is a natural hierarchy that may have held back some criticism. On the
  other hand, the family bonds can also make people more open with each other.
- **Prototypes are a shared language with the people you build for.** They let the company react
  to something concrete early on.
- **Know when to drop a story.** Cutting the room overview kept us focused on check-in and
  information.

Our conclusion was that the system matched the company's ideas and was easy to use, but the only
way to know whether it is truly useful would be to put it to work in the daily running of the
place.
