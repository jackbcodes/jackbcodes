---
title: 'A Hackathon story: How we built a Slack app in 10 hours ⚡️'
excerpt: 'Last week, over at Vodafone Engineering, we saw the anticipated return of our annual Hackathon after a 2 year hiatus. Hack To The Future was a Back To The Future themed Hackathon with the overarching goal to “Create The Future” - one of the pillars of The Spirit of Vodafone.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2022-10-10T08:00:00.00Z'
lead: 'Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.'
type: 'Article'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

Last week, over at Vodafone Engineering, we saw the anticipated return of our annual Hackathon after a 2 year hiatus. **Hack To The Future** was a Back To The Future themed Hackathon with the overarching goal to “Create The Future” - one of the pillars of The Spirit of Vodafone. Teams were tasked with; generating ideas that will inspire us to move our business forward, looking at new emerging technologies or new ground breaking ideas, and exploring options to enhance existing experiences within Vodafone.

The event was held in-person and included all roles and disciplines from Software Engineering. Anyone from Business Analysts and Product Owners to Designers and Content Editors were free to join and participate. The Hackathon spanned two days and included 100+ people, 14 teams, 2 keynote speakers, 10 hours of hacking, lots of pizza, a few beers and a final presentation of all teams creations.

## So… what was our idea? 💡

During a mini-hackathon earlier in the year, myself and a few other developers built a story refinement tool called **PointIt**. It is a web app which mimics the common [planning poker](https://www.mountaingoatsoftware.com/agile/planning-poker) style refinement and gamifies the process for agile scrum teams. Participants cast votes for story points which represent their estimates of effort and complexity for the work item in discussion. Once everyone has voted, a consensus is agreed by all for the final estimate of the work item.

We’ve even open-sourced the project and anyone is free to use it! Go check it out (it only works on desktop at the moment) 👇

[https://pointit.dev/](https://pointit.dev/)

PointIt had been a great success and multiple teams within Vodafone are using it and loving it. So, that got me thinking… how can we use this Hackathon to further extend the application and enhance our users existing experience? I thought about adding new features to the web app or enhancing its UI but ultimately I wanted something separate from what we had already developed so we could say we built something from scratch during the event.

In Vodafone Engineering, our main communication tool is Slack - it’s what we use for day-to-day communication and it’s loved by most, if not all, of our devs. Wouldn’t it be great if you could start and schedule a PointIt refinement game without ever having to leave Slack? It would save someone from loading up the web app, manually creating a game, copying an invitation link and then sending it out to all team members.

And just like that the PointIt Slack integration was born 👶

The Slack app would feature a shortcut/command with two features - one to start a game straight away and one to schedule a game for some time in the future. If the start now option was chosen, the user would be asked to select a channel to send the invitation link in to and select users to notify. The schedule option would have the same features but you’d be able to select a future time and date for when the invitation link is to be sent.

## So… how did we build it? 👷

The team (otherwise known as “The Pointers”) was made up of 5 frontend developers and 1 UI/UX designer… and none of us had built a Slack app before. Because of that, the first task was lots of research. What technologies can you use to build a Slack app? How can we connect to the Firebase database the web app uses? How does the backend work if there’s no server? How do we deploy an app? How can we set up a test environment? How do we conform to Slack’s design system?

After reading Slack’s API documentation, I discovered [Bolt.js](https://slack.dev/bolt-js/tutorial/getting-started) - a JavaScript framework to help build Slack apps quickly. It exposes various methods which allow you to listen to events, messages, shortcuts, commands and more from Slack. Nice, that’s the frontend sorted. Now, what about the backend? The PointIt web app uses [Firebase’s Firestore](https://firebase.google.com/docs/firestore) as the backend and we’d need to use the same so we can create a game in Slack and then continue the game in the web app. Luckily Firestore has a [Node.js SDK](https://firebase.google.com/docs/firestore/quickstart#node.js) which makes that easy. Finally, how are we going to deploy it? As this app isn’t a traditional web app and has no server, tools we’d previously used for deployment like Vercel weren’t an option here. Bolt’s docs suggest using AWS Lambda for deployment but I’d heard of Google’s [Cloud Functions](https://cloud.google.com/functions) which, like Lambdas, allow you to run your code in the cloud without any servers. The main benefit of using this being it will integrate easily with our Firestore.

Doing this prior-research meant we could hit the ground running during the event and spend as much time hacking as possible.

### Day 1️⃣

Day 1 started with a kick-off presentation and a keynote speech and then everyone broke out into their project teams. We knew time would be tight so we got right to it. We had a project debrief where I set the vision, explained the technologies we’d use and answered any of the teams questions.

For the first half of the day, the developers got their test environments set-up which included creating a Slack workspace and configuring an app within it. We had to generate secrets and tokens to give our code access to perform actions in Slack. Everyone cloned the base repo and deployed the app using Cloud Functions which proved harder than expected. But, after a bit of debugging and head-scratching, just before we were summoned for lunch all our developers were able to deploy a Slack app locally and perform actions in their Slack workspace. Success ✅.

In that same time, our designer was busy mapping out journey flows in FigJam and creating UI mock-ups using Slack’s [Block Kit Builder](https://api.slack.com/block-kit). The Block Kit Builder is an interactive drag-and-drop feature which allows you to create Slack UI without having to write any code. This meant that our designer could create all the mock-ups without needing any interaction with the developers - giving them more time to get everything set-up. Having the UI and UX thoroughly thought through and documented before any coding took place was fundamental to the projects success. It allowed the developers to just develop and not worry about how things should look or feel.

After lunch, the developers split into two mini-teams: one focussing on connecting to and interacting with Firebase and one working out how to use Slack’s API to perform actions. This included lots of reading docs, testing things out, saying “why’s that not working?” and then realising we hadn’t read the docs correctly. It was a big learning curve to say the least. However, by the end of the day we had; successfully connected to Firebase and were able to create a game, figured out how to create custom commands which can open modals and present inputs, and respond to events in Slack with messages. All in all, we were in a good place.

### Day 2️⃣

Much like Day 1, Day 2 started with a kick-off and another keynote speech after which teams broke out and cracked on with their projects. The final presentation of the Hackathon, where all teams present what they had built, was at 1:30pm which only gave teams a few hours to finish their projects and prepare for the presentation.

We’d built the foundations in Day 1 so it was time to merge all our changes and pull everything together. We combined interacting with Firebase with the ability to open modals and respond to events with messages and… viola! The core of the app was ready. A user was able to run a Slack shortcut, choose whether they wanted to start a game immediately or schedule it for the future, choose a channel to send the invitation link in to and select specific users to notify. The developers spent the rest of the available time working with our designer to ensure the UI and UX was as good as it could possibly be.

Finally, it was time for the final presentations. Every team presented what they had built and how they built it, the problems it would solve, how it could be further developed and answered questions from the panel of judges. All the presentations were fantastic and it was inspiring to see what teams could build with very little time.

Now for the important part… which team won? 1st place was rightfully given to an amazing accessibility tool which helps users read text more easily on the website, but I’m very proud to say my team came 2nd! 🏆

## So… what’s next? 🔮

As far as I know, PointIt is only being used internally by Vodafone development teams. We want to drive adoption and push PointIt as an open-source tool which any development team can use. Open-sourcing isn’t only about allowing all to use it, it’s also about opening collaboration. Currently, the code sits within a private GitHub repository but we want to open this up so any keen developer can contribute and help enhance it.

Some future ideas we have are:

- Adding an Azure DevOps integration to both the web and Slack apps - allowing them to read information about work items and update them with the agreed estimate
- Run a refinement session natively in Slack - currently you can only create a game in Slack but we want to extend this so you run a full refinement session without ever leaving Slack
- Add a planning feature - where the creator can pre-plan work items to be discussed
- Create a Microsoft Teams integration
