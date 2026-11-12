---
title: "Vibe Coding. No need for programmers anymore?"
description: "Anyone can get working code from an AI now. What they cannot see is what breaks on the server, and how fast an agent loop eats a budget. Why developers are not going away – they are getting faster."
date: 2026-11-12
lang: en
slug: "vibe-coding"
tags: [ki, technik]
cover: ../../../assets/insights/vibe-coding/vibe-coding-cover.webp
coverAlt: "Vibe Coding. No need for programmers anymore? – dieneue.social"
draft: false
---

Last year a well-known AI researcher coined a term for something a lot of people were already doing: you describe what you want, the AI writes the code, you run it, you describe what is wrong, the AI fixes it. You never really read the code. You go by vibe.

Vibe coding.

It works. That is not the controversial part. The controversial part is what happens next.

## What you can actually do with it

More than most people think. A landing page. A tool that pulls your sales numbers out of three Excel files and makes a chart. A script that renames 4,000 photos. A prototype of the app you have been talking about for two years. An internal dashboard. A WhatsApp bot for your reservations.

All of that, in an afternoon, without a developer. I do it myself, almost daily. For a prototype or a one-off tool it is the best thing that happened to small businesses since the spreadsheet.

## So can a "normal" person write software now?

Yes. And that is where it gets interesting.

A normal person can get working code. What they cannot do is tell the difference between code that works and code that works *today, on this laptop, with this one user*. Those two look identical on screen. The difference shows up later, on the server, with real data and real strangers hitting it.

## Where it goes wrong: the server

Two places, mostly.

**Security.** The AI will cheerfully build you a login form that stores passwords in plain text, an upload field that accepts anything, a database query that can be rewritten from the address bar, and an API key sitting in the code where anyone can read it. Not because the model is bad. Because you did not ask, and it does not know you did not know to ask.

**Performance.** The code runs fine with ten entries. With 50,000 it loads the whole database into memory on every page view, runs a query inside a loop inside another loop, and caches nothing. Your server falls over on the first day it matters – which is usually the day you sent the newsletter.

Neither problem shows up while vibing. Both show up in production.

## Why a developer with AI beats a layman with AI

This is the part the "no more programmers" crowd gets wrong.

An experienced developer uses the same tools. The difference is what goes into the prompt. Thirty years of knowing where things break goes into the prompt. "Use parameterized queries. Validate the upload. Keep secrets out of the repo. Paginate that list. Write a test for the edge case." The layman writes "make a login". The developer writes two paragraphs the layman does not know exist.

The developer also knows how the thing should be structured before the first line is written – which parts talk to which, what happens when one of them fails, where it will need to grow. The AI does not decide that. You do. If you cannot, the AI decides for you, and it decides differently every time you ask.

Result: same tool, same model, and the developer gets something you can run for years. The layman gets something you can demo.

## The bill nobody warns you about

These tools charge by token – roughly, by the amount of text going in and out of the model. One question, a few cents. Fine.

But modern coding tools are not one question. They are agents. The agent reads your files, writes code, runs it, reads the error, rewrites, runs it again. Each round reads the whole conversation again. Ten rounds in, every step costs ten times what the first one did. Now let it loop on a problem it cannot solve – and it will, happily, for an hour – and you have burned through a week's budget before lunch.

I have watched people do this. Not stupid people. People who did not know that "try again" has a price tag, and that the price goes up the longer you try.

A developer notices the loop after the second round, stops it, and fixes the prompt. A beginner watches the progress bar.

## The tools, briefly

Claude Code, OpenAI Codex and Gemini CLI are the serious agents: they live in your terminal or editor, read your whole project and work for hours. Cursor and GitHub Copilot put the same thing inside an editor. Perplexity Computer and similar "do everything" agents sit on top and orchestrate several models at once. They are all good. None of them replaces knowing what you are asking for.

## So what does this mean for you

You still need programmers. You just need fewer hours of them, and the hours are worth more.

A good developer with these tools does in two days what used to take two weeks. That is the real story. Not "anyone can code now" – "the people who could already code are suddenly five times faster, and the gap between them and everyone else just got wider, not narrower."

If you have a vibe-coded tool running somewhere in your company and you are not quite sure what is in it: get someone to look at it before the newsletter goes out. And if you are planning to build something and are wondering whether you need a developer at all: that is the conversation I have most weeks. Happy to have it with you.

*Chris Helmbrecht runs Die Neue, a marketing and AI consultancy in Munich. He has been building digital products since 1997 and uses AI coding agents daily – carefully.*
