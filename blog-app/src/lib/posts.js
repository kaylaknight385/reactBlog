export const posts = [
  {
    id: 1,
    slug: 'why-i-have-37-browser-tabs-open',
    title: 'Why I Have 37 Browser Tabs Open and That\'s Actually Fine',
    content: `Listen, I know my laptop sounds like it's about to take flight, but hear me out. Each tab serves a purpose. Tab 1-5: actual work stuff. Tab 6-12: things I'll "read later" (narrator: they never did). Tab 13-20: Spotify, YouTube, and 6 different lo-fi hip hop streams because vibes are important. Tab 21-30: random Wikipedia rabbit holes from 2am. Tab 31-37: I genuinely don't remember opening these but I'm too scared to close them.

The real question isn't why I have so many tabs open, it's why Chrome is judging me with that little :D face when it can't even show the tab titles anymore. We're in this together, Chrome. Don't act like you're better than me.

In conclusion, my RAM is crying but my ADHD brain is thriving. This is fine. Everything is fine. *computer fan intensifies*`,
    author: 'chronically_online_charlie',
    date: '2024-01-15',
  },
  {
    id: 2,
    slug: 'ranked-every-way-to-avoid-responsibilities',
    title: 'I Ranked Every Way to Avoid Adult Responsibilities (Scientifically)',
    content: `S-Tier: Scrolling TikTok for "just 5 minutes" (it's been 3 hours). The algorithm knows me better than I know myself at this point. Also, suddenly deep cleaning your room at 11pm when you have a deadline tomorrow. Peak productivity avoidance.

A-Tier: Making elaborate meals when you have cereal. Baking bread from scratch? In this economy? When I should be doing my taxes? Absolutely. Also, reorganizing your Spotify playlists by vibe/color/moon phase.

B-Tier: Watching video essays about topics you'll never need to know. Yes, I DO need to understand the complete history of Minecraft drama right now, thank you.

C-Tier: Napping. Classic, but lacks creativity. However, the "I'll just rest my eyes for 10 minutes" that turns into 4 hours hits different.

D-Tier: Actually doing other productive tasks to avoid the main task. Like doing laundry to avoid studying. You're still being responsible, just... incorrectly.

F-Tier: Staring at the wall. Not even scrolling. Just... existing. This is the final boss of procrastination and honestly? Respect.`,
    author: 'professional_procrastinator',
    date: '2024-01-20',
  },
  {
    id: 3,
    slug: 'texting-anxiety-is-real',
    title: 'A Comprehensive Guide to Texting Anxiety (I Took 3 Days to Reply to This)',
    content: `Chapter 1: The Notification. You see it. Your heart rate spikes. Do you open it now or let it marinate? If you open it, they'll see you read it. Then you HAVE to reply. But what if you don't know what to say yet? Schrödinger's text message.

Chapter 2: Crafting the Perfect Response. You've typed and deleted the same message 47 times. Too many exclamation points? Seems fake. No exclamation points? You sound mad. One emoji or two? Is "lol" still cringe or are we reclaiming it ironically?

Chapter 3: The Waiting Game. You sent it. Now you're checking your phone every 30 seconds. They're typing... they stopped typing. THEY'RE TYPING AGAIN. This is psychological warfare.

Chapter 4: When They Reply Instantly. Panic. Now YOU have to reply fast or you look like you were just sitting there waiting (you were). The cycle continues.

Chapter 5: "Sorry for the late reply!" It's been 6 minutes. But in text time, that's basically 3 business days. We're all just out here doing our best, and by best I mean overthinking every single word we send.

TL;DR: Texting is hard. Phone calls are harder. Carrier pigeons are looking pretty good rn.`,
    author: 'anxious_texter_2000',
    date: '2024-01-25',
  },
  {
    id: 4,
    slug: 'spotify-wrapped-called-me-out',
    title: 'Spotify Wrapped Called Me Out and I\'m Not Okay',
    content: `So Spotify really said "here's every embarrassing thing about you in a shareable format" and we all just... post it? 

My top genre was "sad girl indie" which, rude but accurate. My #1 song was played 847 times. That's... that's concerning. That's like 2.3 times a day. Every day. For a year. The song is 3 minutes long. I've spent over 42 hours listening to the same song. I could've learned a new language. I could've gotten in shape. Instead, I chose emotional damage on repeat.

My top artist was like "thanks for paying my rent this year" and honestly? You're welcome. Your music got me through it (it = scrolling through my phone at 3am having an existential crisis).

Also Spotify told me I'm in the top 0.5% of listeners for an artist and I don't know if I should be proud or concerned. Like yes, I'm dedicated, but also... am I okay? (Narrator: they were not okay)

The worst part? I'll do it again next year. See you in therapy, Spotify Wrapped 2025.`,
    author: 'music_taste_is_my_personality',
    date: '2024-02-01',
  },
  {
    id: 5,
    slug: 'coffee-addiction-or-personality-trait',
    title: 'Is It a Coffee Addiction or Just My Entire Personality at This Point?',
    content: `I don't have a coffee addiction, I have a carefully curated caffeine dependency that I've built my entire identity around. There's a difference.

My morning routine: Wake up. Contemplate existence. Remember coffee exists. Suddenly life has meaning again. First cup hits different - it's not about the caffeine, it's about the ritual. The aesthetic. The way I can hold a warm mug and pretend I have my life together.

By cup three, I've convinced myself I'm a productivity god. I'm going to conquer the day! I'm going to finish all my tasks! (Spoiler: I'm going to scroll Twitter for 2 hours instead, but caffeinated)

Cup four is where things get spicy. My hands are shaking. I can see sounds. I'm typing at the speed of light but none of it makes sense. This is fine. This is what peak performance looks like.

People say "you should drink water" and I'm like, coffee IS bean water. Checkmate.

Do I need therapy? Probably. Will I get therapy? Eventually. Will I have a coffee before my first therapy session? Absolutely. It's called being consistent with your brand.

In conclusion: I don't drink coffee to wake up anymore. I wake up to drink coffee. And honestly? That's growth.`,
    author: 'iced_coffee_in_winter',
    date: '2024-02-05',
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}