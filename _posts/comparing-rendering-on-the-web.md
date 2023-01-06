---
title: 'Comparing Rendering on the Web: CSR vs SSR vs SSG'
excerpt: "Many of us focus so much on the functionality of our code and never think about how it makes it's way onto our screens. In this article I will explain and contrast the different types of rendering on the web."
date: '2023-01-06T18:20:00.00Z'
type: 'Article'
ogImage:
  url: '/assets/blog/comparing-rendering-on-the-web/ogImage.png'
---

When I was first learning to write code, I was blissfully unaware of how web apps were rendered in a browser.

I was solely focused on getting my code to work and doing cool stuff with it. I didn’t care how it made its way onto my screen - just that it did and without any bugs!

I’d heard of client-side rendering, server-side rendering, and static site generation but never really knew how they worked. In this article, I will compare these three approaches.

## Rendering Environments

Throughout this article, I will refer to the “client” and “server” a lot. Both of these are environments where your application code can be rendered.

The client refers to a user’s browser on their device. It sends requests for your application code and turns the response from the server into an interface the user can interact with.

A server refers to a computer somewhere in a data centre that stores your application code. This receives the request from the client, does whatever necessary action, and then sends back a response.

For the longest time, I never understood what a server was. It seemed like some mysterious piece of tech that was somehow involved in everything. Simply put - it’s just a computer in a data centre that probably looks something like below.

![Server room](/assets/blog/comparing-rendering-on-the-web/server.png)

## A Quick History Lesson

To fully understand these different types of rendering it’s important to understand the context in which they evolved and how we’ve ended up with them.

At the beginning of the web, there were only static web pages. Pure HTML pages with some CSS. The client (or browser) would send an HTTP request to the server, which would respond with the exact HTML for it to render. Nice and simple.

Then, server-side programming languages like PHP allowed us to dynamically build HTML on the server. This was great for when you wanted to add dynamic content like a name, email or address.

On every request, from browser to the server, the server would go fetch data from a database, render the HTML with it included, and send it back to the browser. Once received, the browser would just display the HTML page. This is traditional server-side rendering.

You might be thinking that sounds so simple - why didn’t we stick with that? Well, with every request to the server to send or receive data, like a form submission, it would result in a page refresh. This flash was really annoying for the user.

Then, AJAX (**A**synchronous **J**avaScript and **X**ML) was introduced. This allowed us to send and receive data to or from a server “asynchronously”. Meaning that it can happen in the background and there’s no need to refresh the page.

With AJAX’s introduction, it meant the browser was now responsible for fetching all required data and rendering the HTML. This is client-side rendering.

This gave birth to all the modern frontend frameworks that we see today like React, Vue and Angular. These frameworks made it really easy to build web applications client-side which quickly became the norm and server-side rendering was left behind… until recently.

Right, history lesson over. Below I’ll describe each type in more detail and highlight their main differences.

## What is Client-Side Rendering (CSR)?

Client-side rendering is the most common approach and is probably what you’ve been doing without realising it. With CSR, a user's web browser is responsible for rendering the website's content.

When a user accesses a website, their browser sends a request to a server which responds with the relevant HTML, CSS and JavaScript (JS) files. At this point, the standalone HTML page the server sends is pretty much useless to the user.

If you inspect the initial network request for the HTML page in your browser's dev tools you’ll see the HTML in the “Response” tab. It will look something like this. This is what the server has sent the client.

```jsx
<!DOCTYPE html>
<html lang="en-gb">
  <head>
    <title>My Awesome Website</title>
    <script type="module" crossorigin="" src="/assets/index.f6d925a7.js"></script>
    <link rel="stylesheet" href="/assets/index.24d563d2.css" />
  </head>
  <body>
    <div id="root"></div>
    <noscript><p>Sorry, this page needs javascript enabled!</p></noscript>
  </body>
</html>
```

You may see many `<script>` tags but one of those will contain the JavaScript the browser will use to render the full page.

In the React world, you’ll also see an empty div which is a parent element for future content. In the above example, it’s `<div id="root"></div>`. All HTML rendered from the JS will be placed in this div.

If you then click the “Preview” tab, you’ll see “Sorry, this page needs javascript enabled!” which is because the JS has not been processed yet.

![CSR preview tab](/assets/blog/comparing-rendering-on-the-web/csr-preview.png)

Once the browser starts to load and process the received JS files, which it does quickly, it renders the initial page without any dynamic content. Here is where you’ll see loading spinners or similar UI whilst the browser fetches the required data. Once all data has been fetched it will render the full page.

Although a user sees a page quickly, they cannot interact with it until the browser has finished fetching all data and renders the final page. The time this takes depends on the users’ internet connection. With a good and reliable connection, this will be pretty quick but with a bad one, it can be very slow.

Whilst client-side rendering has been the norm for quite a while now, there are increased concerns about the amount of JS being sent to our browsers. The more JS, the bigger the bundle size, and the longer our browsers will take to process it and render the page. This causes performance issues.

Modern server-side rendering aims to fix this.

## What is Server-Side Rendering (SSR)?

Recently, server-side rendering has been making a comeback and is a hot topic in React. Frameworks like Remix and Next.js 13 have made it really easy to build server-side rendered applications and reap the benefits it brings.

But, what is it? and why bother using it?

With SSR, the responsibility of rendering the website's content shifts from the browser to the server. On every request, the server pre-renders the content and sends the complete HTML page to the browser.

If you inspect the network request of a server-side rendered application, you’ll see the full page in all its glory.

![SSR preview tab](/assets/blog/comparing-rendering-on-the-web/ssr-preview.png)

It’s important to note that some JS is still sent to the browser - just not the JS needed to render the page.

The benefit is that the browser doesn’t need to download and process additional JS files as the server has already done part of the job for it. The server’s already fetched all required data and rendered the full HTML page, so the browser doesn’t need to. This reduces the reliance on the users’ internet connection.

Compared to CSR, it can take longer for the browser to display the first bit of content as the server is sending the complete HTML page instead of a bare-bones document. This can result in a slower First Contentful Paint (FCP).

Even though the user may see something quicker with CSR, they’ll still only be seeing loading spinners and won't be able to interact until the JS has finished processing. Whereas with SSR, the JS has already been processed before it reaches the browser, so it can be displayed straight away.

In short, SSR can have a longer First Contentful Paint but has a faster Time to Interactive (TTI). The [Remix website](https://remix.run/) has a very good demonstration of this.

![Remix loading demo](/assets/blog/comparing-rendering-on-the-web/remix-loading.png)

Personally, I’d rather see a blank screen for a few more milliseconds and have an interactive page much faster.

## What is Static Site Generation (SSG)?

Static site generation goes full circle back to the very first days of the web. Where HTML and CSS were hosted and then served to a browser ready to be displayed right away.

The difference now is that we can use modern technologies like React, Vue, and Angular to generate the static output.

SSG is similar to SSR in that the content of a page is rendered on the server. However, with SSG, the page is rendered ahead of each request instead of on every request.

Pages can be rendered at build time and stored on a CDN. Then, when a user accesses a website - they just receive the pre-rendered page. No need to wait for any rendering!

This is used for sites that don’t have dynamic content. A blog is a good example of this and is what I use for this blog.

In this article, we compared three approaches to rendering on the web: client-side rendering, server-side rendering, and static site generation. Each approach has its own benefits and trade-offs, and the best choice will depend on your specific needs and goals.

By understanding the differences between these approaches, you can make informed decisions about how to render your website and deliver the best user experience to your audience.
