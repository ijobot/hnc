DISCLAIMERS

This was a challenging project to undertake, and I have learned some new skills and ideas along the way.  I have also discovered some limitations in my knowledge, and figured out some areas to continue on my journey of constant development and improvement.  

If I were to build this project over again, I would go framework-free and simply use vanilla js, css, and html.  However, seeing as though the company uses frameworks for development, I wanted to push myself and build it using React.  There were struggles along the way, but I embraced them and learned from them.  While I have not met all the requirements given in the task sheet, I certainly tried in earnest to complete what I could.



PREPARATION

I arranged a meeting with a friend of mine who works for the company.  He gave me insight on how to prepare, what to be vigilant about, what to focus my energy on, and how to respond to any possible difficult questions.  As with any interview process, there is always a certain anxiety connected to the 'fear of the unknown', but he helped to get me in the right head space to get to work and get the job done.

I sketched out the component tree with pencil and paper to get the basic structure down in picture form, as visuals greatly affect my process.  I thought about what each piece would do, how it would function, and what data it would take in versus what data it would render into the virtual DOM.

I familiarized myself with the Hacker News API.

On Monday and Wednesday night, I had 2 video calls with my mentor in Florida.  He has been helping and guiding me along the way as I've learned to code over the past year, and his help has been invaluable.  He assisted me with code reviews and helped me tackle some pain points that I was struggling with.  I was very clear with him that I wanted help with "talking things through to find a solution" rather than him simply telling me how to solve the issues.  He is very good at pulling information out of me that I sometimes don't even realize I have!  He was careful to help me without doing the project for me.

On Tuesday night, I had a video call with my cousin Shane in Philadelphia.  He is a programmer and works with my Aunt Kristen (his mom) in their family business.  She is hearing impaired, so he was a great resource to learn more about accessability options and some of the legal implications involved.  We set up a standing order to have a call every few weeks going forward, so that I can keep picking up more knowledge from him.  Meanwhile, he'll be looking to learn things from me, as he's much more focused on system architecture and back-end, whereas I'm much more focused on front-end.

I watched several videos and read several docs along the way, including a variety of React how-tos, Bootstrap setups, dependancy injections, and testing instructions.  I was also recommended a lecture on the importance of clean code by 'Uncle Bob' Martin.  I got some fantastic insights into the long view of the programming world, and how I can be a positive influence on it going forward.  Because of this, I will now start to refactor all my code as often as possible, and to run unit tests on everything I write.

In what little free time I've had since my second round interview, I've also been reading "You Don't Know JS", as was recommended by Alex.  It's really great to get the overall picture behind JavaScript, rather than just learning all the funtions and keywords.  Knowing the how and the why of objects, classes, arrays, etc. helps to bring the whole idea into a clearer focus.  I look forward to reading more!



JOURNEY

Throughout the build, I kept finding different libraries and dependencies that looked helpful or necessary.  At some point in the future, I look forward to knowing the wide variety of tools at my disposal, and knowing when to use the right ones.  For instance, I've used Bootstrap here and there in some of the projects I've done throughout my bootcamps, but in this particular project, I realized I didn't know how to overwrite the default options they provide.  After a bit of research, I found there are ways to change the root code to get custom colors and spacing, but that it would probably take far too long to learn and implement.  I had to carefully weigh my priorities and focus on what I was capable of, rather than trying to reinvent the wheel.  I had also used React Styled Components in the past, but again, only lightly.  In the end, I went with a standard CSS sheet and wrote my own code to get the look and feel I wanted.

I also brought in lodash for pagination.  I was recommended Axios by a few sources, but I had already started coding with fetch and promises.

As you'll see from the comments in the code, there were multiple times when I got stuck on something and needed to do more research and troubleshooting to get it working.  Some of those things, like the secondary API calls off the back of the initial API call array, I did eventually wrap my head around and get working.  Other things, like the pagination and the ReactRouter, I began to implement but was unable to make work completely.  Given more time and resources, I would have certainly liked to finish those aspects.

Being a self-taught programmer, I had never done unit testing before.  I have had some interactions with it while using various coding challenge websites like CodeWars, LeetCode, and some of the Scrimba bootcamps, but I had never written my own tests.  To prepare for this project, I took a 1 hour training course and got the basics of using Jasmine.  I figured I might at least be able to write some rudimentary tests to show I tried.  Of course, after building the project in React, I realized they have thier own built-in testing that is quite different.  In order to be proficient and make this work, I would need several days of learning, studying, and practicing.  As such, I have not included testing in this project, but I can safely say that thanks to this project, I now have a better understanding and a far better appreciation for it!

As for accessibility, all the menus, story links, and page buttons are tabbable and keyboard ready, so I am pround of that.  However, I ran out of time and did not get to run Lighthouse to implement more screen-reader functionality.

One of the major takeaways from this project was my realization that things are far different when you're programming on your own.  I've followed along with so many tutorials and built multiple small projects in javascript and React, but there is a built-in safety net of having an instructor say "here's what we do next."  If things didn't make sense, or if they weren't apparent right away, the instructor was there to explain what I missed.  With this Hacker News Clone though, I had to think about things many steps ahead, figure out which props needed to be passed between which components, and I had to constantly be wary of which pieces were controlling state.  It was quite an eye-opening exercize, and I'm thankful for every minute of it!

I appreciate and value this opportunity, and I look forward to speaking with the team further.
