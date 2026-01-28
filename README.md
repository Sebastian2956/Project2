I need to create a stunning website for a client. The website is a business site advertising services for a company providing supplementary general contractor work as an offshoot of an existing countertop manufacturer. The business name is "Top Tier Services". They will provide a variety of home maintenance services such as construction, renovation, interior design, roofing, landscaping, carpentry, painting, tiling and more. I want the site to be extremely modern and reminiscent of modern technological sites as opposed to the classic brick-and-mortar websites. In keeping with that theme, I'd like to take heavy inspiration from the current winners on the awwwards site to deliver something visually impressive. I'll outline a couple of must have features from various award-winning sites, some general features found on modern websites and general design rules for you to put together into one cohesive deliverable. For the foundation of the site, we can use React, Next.js and shadcn for the basics. The main deliverable should be focused on the landing page which will need to be an impressive combination of typography, interactive and animated elements. You should also include supplementary pages to ensure the website feels complete such as a "Services" page outlining more detailed descriptions, a "Contact" page with business contact information and some others (Pricing, Team, etc.) Please don't do the overused huge gradient fills, let's stick with bold black and white design with subtle intentional grayish blue-purple-orange gradients on key elements (ideally with some animation on them.) Create two unique button designs (a primary and secondary) which contain reactive animation not seen in other websites. Similar to this button inspired by designer verse_ but with your own creative twist:
```
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
--radial-gradient-background: 250, 250, 250;
--solid-color-background: 15, 15, 15;
--overlay-color: 255, 255, 255;
}

body {
@apply bg-neutral-950;
}

.radial-gradient {
background: radial-gradient(
circle at 50% 0%,
rgba(var(--radial-gradient-background), 0.05) 0%,
transparent 60%
)
rgba(var(--solid-color-background), 1);
}

.linear-mask {
mask-image: linear-gradient(
-75deg,
white calc(var(--x) + 20%),
transparent calc(var(--x) + 30%),
white calc(var(--x) + 100%)
);
-webkit-mask-image: linear-gradient(
-75deg,
white calc(var(--x) + 20%),
transparent calc(var(--x) + 30%),
white calc(var(--x) + 100%)
);
}

.linear-overlay {
background-image: linear-gradient(
-75deg,
rgba(var(--overlay-color), 0.1) calc(var(--x) + 20%),
rgba(var(--overlay-color), 0.5) calc(var(--x) + 25%),
rgba(var(--overlay-color), 0.1) calc(var(--x) + 100%)
);
mask:
linear-gradient(black, black) content-box,
linear-gradient(black, black);
-webkit-mask:
linear-gradient(black, black) content-box,
linear-gradient(black, black);
mask-composite: exclude;
-webkit-mask-composite: xor;
}
```
```
// @/components/ShinyButton.tsx
import { motion } from "framer-motion";

const ShinyButton = () => {
return (
<motion.button
initial={{ "--x": "100%", scale: 1 }}
animate={{ "--x": "-100%" }}
whileTap={{ scale: 0.97 }}
transition={{
repeat: Infinity,
repeatType: "loop",
repeatDelay: 1,
type: "spring",
stiffness: 20,
damping: 15,
mass: 2,
scale: {
type: "spring",
stiffness: 10,
damping: 5,
mass: 0.1,
},
}}
className="px-6 py-2 rounded-md relative radial-gradient"
>
<span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
Start now
</span>
<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
</motion.button>
);
};

export default ShinyButton;
```

Use the Pexels search API (I can put the an API key in the env file under PEXELS_API_KEY) to pull relevant photos where necessary for a fully featured website. If you'd like you can build a utility that pulls random images into @/public/ directory and uses those to avoid requesting images multiple times. You can use lucide and any other icon libraries for imagery as well. Create custom SVG or use emojis for any other imagery necessary (we can replace emojis with better SVGs later.) Just make sure the website feels content rich with lots of interactive, reactive and animated content not like a demo application or bare minimum attempt. Here's documentation from pexels on the API:

```
Example Request

curl -H "Authorization: YOUR_API_KEY" \
"https://api.pexels.com/v1/search?query=nature&per_page=1"

Example Response

{
"total_results": 10000,
"page": 1,
"per_page": 1,
"photos": [
{
"id": 3573351,
"width": 3066,
"height": 3968,
"url": "https://www.pexels.com/photo/trees-during-day-3573351/",
"photographer": "Lukas Rodriguez",
"photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
"photographer_id": 1845331,
"avg_color": "#374824",
"src": {
"original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
"large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
"medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
"small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
"portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
"landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
"tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
},
"liked": false,
"alt": "Brown Rocks During Golden Hour"
}
],
"next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
}

```

Finally, I'll detail some of the key visual aspects found on the award-winning sites that would take the new website to the same level. Choose as many as you like but no less than five:

- animated loading screen with business relevant svg progressive animation
- interactive elements with animated text (3d with text on each face vertical rotate, or slide while same text slides up in place)
- animated page transitions
- 3D elements
- custom cursors and/or elements following mouse movements
- lightweight physics engine utilized for an element
- scroll triggered animations

Ensure the project is written following best practices, breaking down reusable elements into components and focusing on modularity. 

Other Details/Goals (if available)

The overall goal of the initial prompt is to create a business website that far exceeds a basic modern website. It is expected that the model will use advanced CSS techniques in combination with JavaScript to deliver high-quality, reliable and performant animations. Ideally, the model will recognize the clear guidelines requesting a content-rich deliverable and utilize all provided tools (such as the Pexels API) to create a fully-featured final product. Based on previous experience with similar prompts, the model is likely to struggle when implementing complex animations due to its limited ability to interpret visuals from the command line.