---
title: "The cloud is just a basement full of servers"
description: "Is your company data only in the cloud? Then you don't have a backup. This weekend a drone strike burned out a Yandex data center, along with 5 TB of my old data."
date: 2026-10-12
lang: en
slug: "cloud-backup"
tags: [technik, recht]
cover: ../../../assets/insights/cloud-backup/76f95fbd-6dc2-45da-adbe-a8612c6df00c.webp
coverAlt: "Data & backup"
draft: false
---

**Is your company data in the cloud? That doesn't mean it's safe from loss there. Not even with a backup in the cloud.**

A lot of us think this way – mid-sized companies, small businesses, freelancers: why bother with a hard drive in the office? I'll just push everything to the cloud. Then it sits with Amazon, with DigitalOcean, with some big provider. They have backups, they have security people, they have emergency power. Nothing can happen.

Yes, it can.

## My 5 terabytes at Yandex

From my Moscow years I still had cloud storage with Yandex. 5 terabytes. Old stuff: websites from the 90s, early projects, things you keep out of nostalgia. Back then Yandex was a lot cheaper than the competition, so I stuck with it even after moving to Munich.

When I renewed the subscription with a Western credit card, I was told: your data will now be stored on a server in Finland. It wasn't. It was in Russia.

In the night of October 8, drones hit the Yandex data center in Sasovo, in the Ryazan region. Major fire. Yandex has since confirmed it themselves: the fire after the attack took out part of the cloud infrastructure, and operations there have been shut down completely. A day later a second Yandex site in the Kaluga region was hit. And to this day Yandex can't say whether the hardware in Sasovo can be saved at all.

My data? I don't expect to see it again. I don't care – I have a second copy. But imagine that had been your invoices. Your customer data. Your contracts.

## Not just Russia. Amazon too.

If you're now thinking "Russia, war, their own fault": in early March 2026, two Amazon Web Services data centers in the Emirates were hit directly by drones, and one in Bahrain was damaged.

Then in mid-September came the word from Amazon: data that was stored *only* in the affected zone in the Emirates cannot be recovered. In Bahrain, AWS says it has exhausted every option. The customers who kept working were the ones who had a copy somewhere else. The others didn't.

That's Amazon. The biggest cloud provider in the world.

## And in Europe? A fire is enough.

You don't need a war. March 2021, Strasbourg: at the French hosting company OVH, Europe's largest provider at the time, one data center burns out completely and a second one partly. Millions of websites go offline. Many customers lose everything, because the backup would have cost extra and they skipped it. And some with a backup too – because the backup was sitting in the building next door. Same site.

Or 2024: an internal configuration error at Google Cloud wipes out the entire account of an Australian pension fund. Backups included. Two weeks of downtime. What saved the company was a copy with a different provider.

Add hacker attacks, ransomware, sabotage, hybrid warfare, human error. My current data, by the way, is in Frankfurt. I don't sleep entirely soundly because of it.

## Cloud sounds fluffy. It's actually a warehouse.

The cloud isn't a magical place. It's computers in a building, somewhere. And buildings can burn down, flood or lose power.

There's also something most people don't know: as a rule, the provider promises you that its service will run. Not that it will additionally back up your data. That's often an add-on. Check your contract.

## What you can do – in three levels

## Level 1: A copy at your place

The simplest solution: put a big external hard drive in the office or at home and pull your data down regularly. Sure, it can break too. But the odds of the data center and your hard drive disappearing at the same time are very low.

## Level 2: A small storage box with two drives

Better: a so-called NAS. A box about the size of a shoebox with two hard drives inside. Everything is saved to both drives at the same time (that's called RAID). If one drive dies after a few years, you slot in a new one – nothing is lost. The device can sync automatically with your cloud, so you don't have to remember to do it.

Cost: a brand-name device without drives runs just under 500 euros. With drives you're at 700 to 1,000 euros, depending on size. For most small companies a few terabytes are plenty.

**Important, and a lot of people miss this:** RAID is not a backup. If you accidentally delete a folder or ransomware encrypts everything, it happens on both drives at once. And the automatic cloud sync dutifully mirrors the damage too. So switch on the "snapshots" or "versions" feature – every common NAS has it. Then you can go back to how things were yesterday or last week.

## Level 3: The cloud, a second time

The pro version: set up a second cloud storage at a different location and mirror your data there. You can do that with the same provider in a different region – even better with a different provider. The Google case shows why.

Watch out for data protection: as soon as personal data is involved – employees, customers, even just emails – a server in the US or Asia quickly becomes a problem. The easy fix: pick your second location inside the EU, for example Frankfurt plus Amsterdam. For plain website files or technical databases with no personal data it's more relaxed. For everything else: get a data protection pro.

**The safest solution is all of it together:** NAS in the office plus two cloud locations. Then practically nothing should go wrong. It costs more, of course – everyone has to weigh up for themselves what a total loss would cost.

## The pros' rule of thumb: 3-2-1

IT people have a simple rule for this, one that the BSI, Germany's federal IT security agency, also recommends:

- **3** copies of your data
- on **2** different types of storage (e.g. cloud and NAS)
- with **1** of them in a different location

And one more thing: a backup that has never been tested is a hope, not a backup. Once a year, restore something as a test.

## Five questions for your IT people or your agency

You don't have to be a techie. You just have to ask the right questions:

1. Where exactly is our data – provider, country, city?
2. Is there a copy outside this data center? And outside this provider?
3. Is backup included in the contract, or is it an extra?
4. When did we last test whether we can actually restore data?
5. How long could we work without our data?

If any of these questions is met with silence, you know what to do.

## My takeaway

I'm massively relieved I still have a copy of my 5 terabytes. It was only old stuff anyway, I won't shed a tear over it. But if that had been business data – well, I'd never have kept it at Yandex in the first place. And that's exactly the point: you always think it happens to other people.
