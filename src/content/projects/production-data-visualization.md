---
title: "Turning a Manual Quality Report into an Interactive Dashboard"
summary: "An interactive dashboard that replaces a manually filled-in production quality spreadsheet with an at-a-glance view of grades across machines and defect causes over a full year."
coverImage: "/images/projects/production-data-visualization/cover.png"
coverImageAlt: "A timeline chart showing colored grade blocks for each production machine across a full year"
tags: ["Data Visualization", "Python"]
date: 2026-03-01
featured: true
order: 1
---

<!--
	Draft generated from your screenshots — please fill in: the actual course/context this was for,
	the tools/libraries you used (Python + a specific charting library? Power BI? something else?),
	and fact-check the date. Replace this comment once done.
-->

Every day, quality checks on a production line were being logged by hand into a spreadsheet: one
row per batch, with a machine number, a product code, a grade (1 = OK, 2 = acceptable, 3 =
rejected), and a free-text note describing what went wrong.

![A manually filled production evaluation report listing batch numbers, machines, products, and grades](/images/projects/production-data-visualization/process-1-raw-report.png)

_The raw data: a manually maintained "Production Evaluation Report" spreadsheet, one row per
quality check._

That format made it very hard to answer simple questions at a glance — which machines were
producing the most rejects, whether a specific product type was more failure-prone, or how quality
trended over the year. I built an interactive dashboard on top of this data with two views:

## The Process

### A timeline of grades per machine

The first view turns a year of quality checks into a single glanceable chart: one row per machine,
with every check plotted along the year as a colored block (green for grade 1, blue for grade 2,
dark blue for grade 3). Clusters of blue immediately flag which machines and time periods had the
most issues.

### Tracing defects back to their cause

The second view is a Sankey diagram connecting machines to the specific defect type recorded (e.g.
alignment, welds, film) and on to the final grade. This makes it possible to see, for example,
whether a particular defect type is disproportionately linked to rejected batches.

![Dashboard combining the grade timeline chart with a Sankey diagram tracing machines through defect types to final grades](/images/projects/production-data-visualization/process-3-full-dashboard.png)

_Both views together: the grade timeline above, and the machine → defect → grade Sankey diagram
below._

## What I Learned

This project was about making messy, manually collected operational data actually useful for
spotting patterns — not just storing it. Add a closing reflection here: what tools you used to
build it, what was hardest about cleaning the data, and what the dashboard changed for the team
using it.
