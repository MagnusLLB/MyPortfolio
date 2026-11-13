---
title: "HoloForm: Shaping figures using holograms and thermoplastic"
summary: "A system built with LEGO that lets remote workers copy a design from a hologram by moulding reusable thermoplastic, tested to see whether pairing the hologram with spoken instructions improves accuracy."
coverImage: "/images/projects/holoform/cover.jpg"
coverImageAlt: "The HoloForm setup: a 3D scanner with a LEGO duck, two LEGO mugs of hot water and a jar of thermoplastic granules"
tags: ["Three.js", "JavaScript", "Multimodal Interaction", "Prototyping", "HCI", "Sustainability"]
date: 2024-12-06
featured: true
order: 4
---

<!--
	Draft written from the paper (MM2024_S.pdf). Please check:
	- "Multimodal Interaction course at Aarhus University" is inferred from the paper's header.
	- Your two co-authors are not named here. Add them if you want to.
	- The demo video link is copied from the paper. The GitLab source code link is left out on purpose.
	- I left out Figure 8 (a Wikipedia photo of clay car modelling) and Figure 12 (another team's
	  research example) because they are other people's images.
	- The paper says 6 participants, but the voice-only chart says "5 svar" (5 answers).
	Delete this comment when done.
-->

Remote work makes it hard to stay connected to work that is physical. At a company like LEGO,
where people handle models and prototypes every day, working from home can feel detached from the
thing you are actually making. HoloForm is a system I built with two classmates, in collaboration
with LEGO, for the Multimodal Interaction course at Aarhus University. It tries to bring some of
that hands-on feeling back for remote workers.

Here is how it works:

1. A physical model, such as a small LEGO build, is scanned in the office.
2. The scan becomes an interactive 3D model on a web page.
3. The model is shown as a hologram in a small display box, which both in-office and remote
   colleagues have.
4. A remote worker uses the hologram as a guide to shape a physical copy out of thermoplastic,
   a reusable material, which can then be scanned back in and shared with the team.

We then tested a simple question: does pairing the hologram with spoken instructions help people
copy a 3D model more accurately than either one alone?

## The Process

### The idea: teleporting a design

The starting point was teleportation: letting someone at home and someone in the office work on
the same physical design. We sketched a scenario where a team talks over a video call about which
brick to add next to a model shown as a hologram. One person copies the new brick, another
disagrees and adds a different one, and a third first tries a copy, isn't happy with it, and moulds
a completely new shape instead. Whenever the model changes, the system plays a sound, so everyone
knows without having to watch the screen.

![A sketch of three people around a hologram of a LEGO model, where each person builds a different version](/images/projects/holoform/process-1-concept-sketch.png)

_The use scenario. A copies the new brick, B adds a different one, and C tries a copy (C1) before
moulding a new shape (C2)._

### Building the hologram box

The display box is a transparent pyramid that reflects an iPad's screen, which makes the model
look like it floats inside. It is deliberately simple and cheap, so that anyone could build one
from materials they already have.

The first version was sized for a smartphone and made from recycled cardboard, a plastic sheet,
superglue and duct tape. Building it taught us that the hologram needs a dark background to be
clearly visible. The second version was scaled up for an iPad, and because a tablet is heavy it
needed more stability, so we built it from scrap MDF boards. After that, making it any size we
wanted turned out to be easy.

![A cardboard and duct tape prototype of the hologram box](/images/projects/holoform/process-2-cardboard-prototype.jpg)

_The low-fidelity first version, made from cardboard, tape and plastic._

![A wooden hologram box with a transparent pyramid showing a floating LEGO duck](/images/projects/holoform/process-3-hologram-box.jpg)

_The finished box, showing a LEGO duck as a hologram._

### The web platform

The model is shown on a web page built with HTML, JavaScript and CSS, using Three.js to render
and animate 3D files. The page draws the model several times around the centre of the screen so
that the pyramid reflects it from every side.

To make the idea tangible without a working scanner, the page has a demo mode where you can add
or remove bricks. That stands in for changing a physical object, scanning it and seeing the update
appear as a hologram.

![A black web page showing four rotated views of a small LEGO model with two bricks](/images/projects/holoform/process-4a-web-platform-2-bricks.png)

![The same web page after more bricks have been added, with larger models in each of the four views](/images/projects/holoform/process-4b-web-platform-6-bricks.png)

_The web page with two bricks, then with six. Each model is shown four times, rotated, so the
pyramid can reflect it from all sides._

The sound cues use earcons, short sound effects taken from the LEGO Star Wars games. Taking a
brick away plays the sound for losing a life in the game, which fits, since it is the sound of
bricks being taken apart.

### Choosing the material

To let remote workers feel the shape they were copying, we looked at many ways of making a
physical object. They range from entirely by hand to entirely by machine.

![A line from "human controlled" to "computer controlled", with modelling clay on the left, hand tools in the middle and a 3D printer on the right](/images/projects/holoform/process-6-control-spectrum.png)

_Methods for making a physical object, from fully human-controlled to fully computer-controlled._

We found that the more a person controls the process, the easier it is to change something
afterwards, while heavily computer-controlled methods tend to be rigid and waste more material. 3D
printing also needs a lot of space and equipment, which doesn't fit a home office. So we aimed for
something in between: a person moulding with the help of tools, such as a hologram to copy from.

Car designers sketch new cars out of clay for the same reason, because you can keep reshaping it.
Clay and play dough don't feel like a LEGO brick, though, and they leave residue on your hands,
which makes it hard to use a keyboard in the same session. Thermoplastic doesn't have either
problem. It softens in hot water, hardens again in cold water, and can be reused almost
indefinitely, which also makes it more sustainable than most 3D printing filaments. Because it
leaves no residue, it is also easier to use for people with tactile sensitivities.

The routine is simple: boil some water, drop in a few thermoplastic spheres, fish them out once
they are soft, mould the shape, and harden it in cold water.

### A scanner that stayed a concept

We also built a frame for a 3D scanner from the open-source OpenScan project. It was designed so
that two motors could rotate around the object and turn the platform it stands on, capturing
images from many angles to build a 3D model.

![A grey 3D-printed scanner frame holding a LEGO duck on a small platform](/images/projects/holoform/process-5-scanner.jpg)

_The scanner frame with a LEGO duck as the object being scanned._

It never became a working scanner. Getting it running would have meant buying a specific circuit
board or designing one from scratch, and we decided that wouldn't teach us anything about
multimodal interaction. So we kept it as a representation of the concept and used pre-made
holograms for the tests.

### Designing for several senses

We described the system with the CASE model for multimodal systems, which splits it into three
modalities: shaping the thermoplastic by hand (input), seeing the hologram (output) and hearing
the sound alert (output).

The hardened thermoplastic works as a haptic proxy, a stand-in for the real brick that you can't
teleport, and it feels much closer to a LEGO brick than clay would. Following the model, shaping
the material and viewing the hologram happen at the same time, but they don't affect each other.
The sound and the picture change at the same moment and describe the same change to the same
model, so they reinforce each other.

### Testing it

We tested the combination in a within-subject study with three rounds. In the first round,
participants only heard scripted verbal descriptions of a 3D model. In the second they only saw it
as a hologram. In the third they got both. Each round used a different model, and we
counterbalanced the order of rounds and models to avoid bias. Six participants took part, all with
a background in computer science or IT product development. None had used thermoplastic before.

The results, rated out of 5:

- **Verbal instructions only:** clarity 3.6, confidence 3.3, accuracy of the final model 3.0.
- **Hologram only:** intuitiveness 4.4, effectiveness 4.5, accuracy 3.8. Several people liked
  being able to look at the model from all around.
- **Hologram and verbal instructions together:** clarity and effectiveness 4.6, confidence 4.5,
  accuracy 4.2.

Most participants picked the combination as the clearest and the most engaging. Some said the
spoken part helped them focus on specific details of the model.

![Bar chart of how confident participants felt with voice instructions only: three rated 3 and two rated 4](/images/projects/holoform/process-7a-confidence-voice.png)

![Bar chart of how confident participants felt with the hologram: one rated 3 and five rated 4](/images/projects/holoform/process-7b-confidence-hologram.png)

![Bar chart of how confident participants felt with voice and hologram together: two each rated 3, 4 and 5](/images/projects/holoform/process-7c-confidence-combined.png)

_Confidence in completing the task (1 to 5) with voice only, hologram only and both. "Svar" means
answers._

Participants also pointed out what was hard. Shaping the thermoplastic was difficult for people
without modelling skills, and with the hologram alone some details were hard to interpret. Their
suggestions included adding a video feed, letting people turn the hologram freely in every
direction instead of only spinning it, and keeping the voice instructions mostly for sizes and
specific details.

## What I Learned

- **Combining senses worked better than either alone.** The hologram gave an overall picture and the
  voice filled in details, and the scores went up in every category when both were used.
- **Simple and cheap has a cost.** The box is easy to build from everyday materials, but that also
  limits its precision, which may not be enough for professional design work.
- **The material needs support.** Thermoplastic is reusable and inclusive, but some people need
  help or tools to shape it well.
- **Scope decisions matter.** Leaving the scanner as a concept kept the project focused on the
  question we actually wanted to answer.

A natural next step would be to overlay the hologram on a physical object on a shared surface, so
the in-office team could see a remote colleague's changes appear directly on their own model. That
would need AR glasses or a more advanced projection setup, which would make the system more
precise but less accessible.

## Links

- [Demo video on YouTube](https://www.youtube.com/watch?v=cQgv4Kf1Cjg)
