# Product Requirements Document (PRD)
## AI Habit Companion - Marketing Launch Website

**Version:** 1.0
**Date:** February 13, 2026
**Authors:** Munish Malik, Barnaby Golden
**Document Owner:** Munish Malik

---

## Executive Summary

This PRD outlines the requirements for a single-page static marketing website designed to introduce and generate interest in the AI Habit Companion app. The website serves as a "giving back to the community" launch vehicle, introducing a revolutionary approach to habit formation through AI-powered, personalized companion avatars.

**Purpose:** Create a compelling, story-driven landing page that communicates the core value proposition, problem space, and unique capabilities of the AI Habit Companion without requiring any functional integration.

**Target Audience:**
- Primary: Organized professionals (like "Susan") who struggle with personal habit formation
- Secondary: Wellness enthusiasts, productivity seekers, early adopters of AI applications

---

## 1. Product Vision & Goals

### 1.1 Vision Statement
To introduce the world to a fundamentally different approach to habit formation—one that replaces gamification and guilt with compassionate, intelligent companionship that learns, adapts, and grows with you.

### 1.2 Primary Goals
1. **Communicate Differentiation:** Clearly establish how AI Habit Companion differs from existing habit trackers and wellness apps
2. **Build Emotional Connection:** Make visitors feel understood and hopeful about their habit-building struggles
3. **Generate Interest:** Share the concept openly with the community and encourage others to build upon it
4. **Establish Credibility:** Position Munish and Barnaby as thoughtful creators "giving back" to the community

### 1.3 Success Metrics
- Time on page > 2 minutes (indicates engagement with content)
- Scroll depth > 80% (visitors read through all sections)
- Social shares and backlinks
- LinkedIn profile visits
- Qualitative feedback on messaging clarity
- Attribution and credit when concept is used by others

---

## 2. Website Architecture

### 2.1 Page Structure Overview

**Type:** Single-page scrolling website
**Navigation:** Sticky header with section anchors
**Layout:** Vertical storytelling flow with distinct, self-contained sections

### 2.2 Section Breakdown

```
┌─────────────────────────────────────┐
│   Sticky Navigation Bar             │
├─────────────────────────────────────┤
│   1. HERO SECTION                   │
│   - Hook + Visual + CTA             │
├─────────────────────────────────────┤
│   2. THE PROBLEM SPACE              │
│   - Relatable struggle narrative    │
├─────────────────────────────────────┤
│   3. MEET SUSAN                     │
│   - Persona story (optional)        │
├─────────────────────────────────────┤
│   4. THE SOLUTION                   │
│   - Introduce the companion concept │
├─────────────────────────────────────┤
│   5. HOW IT WORKS                   │
│   - Journey visualization           │
├─────────────────────────────────────┤
│   6. WHAT MAKES US DIFFERENT        │
│   - Feature comparison/USPs         │
├─────────────────────────────────────┤
│   7. MEET YOUR COMPANIONS           │
│   - Avatar showcase                 │
├─────────────────────────────────────┤
│   8. THE TECHNOLOGY                 │
│   - Algorithm/AI capabilities       │
├─────────────────────────────────────┤
│   9. FROM THE CREATORS              │
│   - Personal note from Munish & Barnaby │
├─────────────────────────────────────┤
│   10. CONNECT WITH THE CREATORS     │
│   - Contact + Attribution + Footer  │
└─────────────────────────────────────┘
```

### 2.3 Technical Specifications

- **Platform:** Static HTML/CSS/JavaScript (no backend required initially)
- **Responsiveness:** Mobile-first design, fully responsive across devices
- **Performance:** Page load < 3 seconds on 3G connection
- **Accessibility:** WCAG 2.1 AA compliant
- **Browser Support:** Last 2 versions of Chrome, Firefox, Safari, Edge
- **Animations:** Subtle scroll-triggered animations using CSS/lightweight JS library (e.g., AOS, GSAP)
- **Hosting:** Netlify, Vercel, or GitHub Pages (simple deployment)

---

## 3. User Journey & Flow

### 3.1 Primary User Journey

**Arrival → Curiosity → Understanding → Belief → Action**

1. **Arrival (Hero Section)**
   - User lands via social media, blog post, or direct link
   - Immediately encounters a bold, relatable headline
   - Sees compelling visual of AI companion avatar
   - Decision point: Scroll to learn more OR bounce

2. **Curiosity (Problem Space)**
   - User recognizes their own struggles in the narrative
   - Feels understood, not judged
   - Thinks: "This is exactly me"
   - Decision point: Continue scrolling OR exit

3. **Understanding (Solution + How It Works)**
   - User learns what makes this different
   - Sees visual journey map showing the experience
   - Understands the concept of personalized AI companions
   - Decision point: Interested in learning more details

4. **Belief (Differentiation + Technology)**
   - User sees feature comparisons and unique value props
   - Learns about the intelligence behind the system
   - Builds trust in the creators' thoughtful approach
   - Decision point: Ready to take action OR still skeptical

5. **Action (Connect with Creators)**
   - User reaches CTA section
   - Options: Connect via LinkedIn, share the project, use and credit the concept
   - Exits with positive impression and clear next step

### 3.2 Scroll-Triggered Micro-Interactions

- **Section Transitions:** Subtle fade-in animations as sections enter viewport
- **Avatar Animations:** Companion avatar "waves" or shows micro-expressions on scroll
- **Data Visualizations:** Progressive reveal of journey maps and feature comparisons
- **Parallax Effects:** Light parallax on hero section background (performance-optimized)

### 3.3 Navigation Patterns

- **Sticky Header:**
  - Logo (left)
  - Section anchors: Problem / Solution / How It Works / Connect (center)
  - CTA button: "Share This Project" (right)

- **Scroll Behavior:** Smooth scroll to anchored sections
- **Progress Indicator:** Optional thin progress bar at top showing scroll depth
- **Back-to-Top:** Floating button appears after scrolling past 50% of page

---

## 4. Detailed Section Requirements

### Section 1: HERO SECTION

**Objective:** Capture attention immediately and communicate the core promise.

#### Content Requirements

**Headline (Primary):**
*Option A:* "Your Habits Don't Need Another Tracker. They Need a Friend."
*Option B:* "Stop Counting Streaks. Start Building Companions."
*Option C:* "The AI That Doesn't Track Your Habits—It Learns Them."

**Subheadline:**
"Meet the first AI habit companion that adapts to your life, learns your patterns, and helps you build sustainable habits without gamification, guilt, or generic reminders."

**Hero Visual:**
- **Primary Element:** Large, animated visual with rotating avatar carousel that changes every 2 seconds between:
  - Cheerleader Cat
  - The Focused Fox
  - The Gentle Bunny
  - The Bold Raven
- **Avatar Name Display:** Each avatar displays its name underneath the emoji animation
- **Style:** Warm, friendly, modern illustration style (not corporate, not childish)
- **Animation:** Subtle breathing animation, occasional blink or friendly gesture, automatic rotation every 2 seconds
- **Background:** Soft gradient (calming colors: pastels, warm tones) OR minimalist scene suggesting daily life (desk, park, home)

**Call-to-Action:**
- **Primary Button:** "Share This Project" (prominent, contrasting color) - Opens quick share options for LinkedIn and X
- **Secondary Link:** "See How It Works ↓" (ghost button or text link)

**Additional Elements:**
- **Trust Badge:** "A Community-First Project by Munish Malik & Barnaby Golden"
- **Preview Tease:** Small text: "No streaks. No points. Just a companion who gets you."

#### Design Specifications
- **Height:** Full viewport height (100vh) on desktop, 80vh on mobile
- **Layout:** Split-screen (60% visual, 40% text on desktop) OR centered stack on mobile
- **Typography:** Bold, modern sans-serif for headline (e.g., Inter, Manrope, DM Sans)
- **Color Palette:**
  - Primary: Warm accent (coral, soft orange, or cheerful yellow)
  - Background: Off-white or very light pastel
  - Text: Dark gray (not pure black)

---

### Section 2: THE PROBLEM SPACE

**Objective:** Establish empathy by articulating the shared frustration with existing habit apps.

#### Content Requirements

**Section Headline:**
"You're Not Failing at Habits. Your Tools Are Failing You."

**Narrative Structure:**

**Opening Hook:**
"You've downloaded the app. You've set the reminder. You've committed to the streak. And then... Tuesday afternoon hits. Your calendar is a mess, your notifications are overwhelming, and the app doesn't care that you had a terrible day. It just wants to know: Did you do it? Yes or no?"

**Problem Statements (Visual Cards or List):**

1. **Generic Reminders Don't Work**
   "8:00 AM: Time to meditate! (You're in a meeting.)"
   "6:00 PM: Go for a run! (You're exhausted and it's pouring rain.)"
   → Existing apps don't know your context. They just... remind.

2. **Gamification Backfires**
   "Streaks create pressure, not motivation. You skip one day, lose your 47-day streak, and suddenly the app feels like a source of guilt instead of support."

3. **One-Size-Fits-All Doesn't Fit Anyone**
   "Some people need a cheerleader. Some need a disciplinarian. Most apps give you neither—just a cold, transactional checkbox."

4. **Habit Apps Don't Learn**
   "You've been using the same app for 6 months. It knows nothing more about you than it did on day one."

**Visual Treatment:**
- **Iconography:** Small, expressive icons for each problem (calendar with X, broken streak, generic checkbox, robot)
- **Layout:** Grid of problem cards (2x2 on desktop, stacked on mobile)
- **Tone:** Slightly humorous, relatable, not preachy

**Transition to Next Section:**
"There's a better way. One that doesn't rely on guilt, streaks, or generic nudges. One that actually knows you."

#### Design Specifications
- **Background:** Subtle shift in background color or texture (e.g., light gray section to distinguish from hero)
- **Spacing:** Generous padding between problem cards
- **Visual Metaphor:** Optional illustration showing frustrated user with cluttered app notifications

---

### Section 3: MEET SUSAN (Optional Persona Story)

**Objective:** Make the problem tangible through a relatable character.

#### Content Requirements

**Section Headline:**
"Meet Susan. She's Brilliant at Work. Terrible at Habits."

**Persona Narrative:**

**Text:**
"Susan runs projects at a tech company. Color-coded calendars. Deadline mastery. Zero missed meetings.

But outside of work? Her gym bag sits unused by the door. Her meditation app has 47 unread notifications. Her friends wonder how someone so organized at work can't seem to stick to a simple morning routine.

The truth? Susan doesn't need another system. She needs someone who understands that her Tuesday looks nothing like her Thursday. Someone who knows that 'just 10 minutes' actually works better than an ambitious 45-minute plan. Someone who adjusts when life happens.

She needs a companion, not a tracker."

**Visual Treatment:**
- **Option A:** Illustrated split-screen: "Susan at Work" (organized, confident) vs. "Susan at Home" (gym bag, unopened apps)
- **Option B:** Simple portrait of Susan with key traits as floating labels
- **Option C:** Day-in-the-life timeline showing where habit apps fail her

**Inclusion Decision:**
This section is OPTIONAL. Include if:
- The website feels too abstract without a human story
- Testing shows users connect better with persona narratives

Skip if:
- Website is already engaging and relatable without it
- Space/scroll depth is a concern

---

### Section 4: THE SOLUTION

**Objective:** Introduce the core concept of AI Habit Companion.

#### Content Requirements

**Section Headline:**
"Introducing Your AI Habit Companion"

**Subheadline:**
"Not a Tracker. Not a Reminder App. A Companion."

**Core Concept Explanation:**

**Primary Copy:**
"Imagine having someone who knows your schedule, understands your personality, and genuinely wants to help you build one habit at a time. Not through guilt. Not through streaks. But through conversation, adaptation, and genuine support.

That's what your AI Habit Companion does.

It starts by getting to know you—not through forms, but through conversation. It learns whether you respond better to cheerleading or gentle accountability. It understands that your Mondays look different from your Fridays. And it adjusts, every single day, to help you build sustainable habits that actually stick."

**Avatar Showcase (Rotating Animation):**
- **Visual Element:** Animated emoji avatars that rotate every 2 seconds:
  - Cheerleader Cat
  - The Focused Fox
  - The Gentle Bunny
- **Display:** Each avatar name appears underneath the emoji during its rotation
- **Animation:** Smooth transitions between avatars with subtle fade effects

**Key Principles (Visual Callouts):**

1. **Personalized to You**
   "Your companion isn't generic. It's built for your personality, your schedule, your life."

2. **Learns & Adapts**
   "The longer you use it, the better it knows you. It's not static—it evolves with you."

3. **Compassionate, Not Transactional**
   "Bad day? Your companion adjusts. Life event? It understands. It's support, not surveillance."

4. **Focused on One Habit at a Time**
   "No overwhelming lists. Just one habit, done well, until it becomes second nature."

**Visual Treatment:**
- **Hero Visual:** Large rotating avatars (The Bold Raven/Cheerleader Cat, The Focused Fox, The Gentle Bunny) with friendly expressions
- **Animation:** Avatar "speaks" key principles as user scrolls (speech bubbles appear), with automatic rotation every 2 seconds
- **Avatar Name Display:** Each avatar name appears underneath during rotation
- **Background:** Warm, inviting gradient or soft illustration

---

### Section 5: HOW IT WORKS

**Objective:** Show the user journey from onboarding to sustained habit formation.

#### Content Requirements

**Section Headline:**
"Your Journey from 'I Should' to 'I Do'"

**Journey Map (Visual Timeline):**

**Step 1: The Conversation**
- **Icon/Visual:** Chat bubbles or conversation interface
- **Headline:** "It Starts with a Chat, Not a Form"
- **Description:** "No tedious sign-up forms. Your companion begins by talking to you—learning about your goals, your schedule, your personality. Voice or text, your choice."
- **Key Detail:** "In just a few minutes, your AI understands whether you're a morning person, how busy your week is, and what kind of support you need."

**Step 2: Meet Your Match**
- **Icon/Visual:** Avatar selection carousel (Cat, Bunny, others)
- **Headline:** "Your Companion Chooses You (But You Can Choose Back)"
- **Description:** "Based on your conversation, your AI suggests a companion personality. The Cheerleader Cat? The Focused Fox? The Gentle Guide? You can accept the match or customize until it feels right."
- **Key Detail:** "Your avatar isn't just a mascot—it's the personality and tone of every interaction you'll have."

**Step 3: First Interaction**
- **Icon/Visual:** Calendar notification + avatar interaction
- **Headline:** "Your Companion Shows Up at the Right Time"
- **Description:** "No rigid schedules. Your companion learns when you're actually available and finds the right moment to check in. Lunch break? Just got home? It knows."
- **Key Detail:** "Voice or text, 2 minutes or 10—your interactions are as flexible as your life."

**Step 4: Building the Habit**
- **Icon/Visual:** Progress curve (upward trend, not streak counter)
- **Headline:** "Smooth, Non-Disruptive, Sustainable"
- **Description:** "Every day, your companion adapts. It learns when you need encouragement, when to back off, and when life gets in the way. It's not about perfection—it's about progress."
- **Key Detail:** "The AI asks qualitative questions, not just yes/no. It understands context, not just completion."

**Step 5: Habit Formed, What's Next?**
- **Icon/Visual:** Celebration moment + new path
- **Headline:** "You've Built the Habit. Now What?"
- **Description:** "When your AI detects that the habit is sustainable, it celebrates with you. Then, if you're ready, you can explore a new habit—or even add a second companion for a different area of your life."
- **Key Detail:** "Multiple companions can co-exist, each focused on one thing you're building."

**Visual Treatment:**
- **Layout:** Horizontal timeline on desktop (scroll-triggered reveals), vertical stack on mobile
- **Style:** Illustrated steps with connecting line/path
- **Animation:** Each step fades in as user scrolls, with companion avatar subtly animating at each stage

---

### Section 6: WHAT MAKES US DIFFERENT

**Objective:** Clearly differentiate from competitors and alternatives.

#### Content Requirements

**Section Headline:**
"Not Another Habit Tracker"

**Comparison Framework:**

**Format Option A: Feature Comparison Table**

| Feature | Traditional Habit Apps | AI Habit Companion |
|---------|------------------------|---------------------|
| **Reminders** | Fixed times, same every day | Context-aware, adapts to your schedule |
| **Motivation** | Streaks and points | Personalized encouragement and understanding |
| **Intelligence** | Static, never learns | Learns your patterns, adjusts over time |
| **Interaction** | Checkbox, yes/no | Conversation, voice or text |
| **Personality** | Generic, one-size-fits-all | Tailored to your needs (cheerleader, disciplinarian, gentle guide) |
| **Focus** | Track everything | One habit at a time, done well |
| **Approach** | Gamification and guilt | Compassionate companionship |

**Format Option B: "We Believe" Principles**

**Instead of Streaks, We Believe in Sustainability**
"Losing a 100-day streak doesn't mean you've failed. We measure progress differently—through qualitative improvement, not unbroken chains."

**Instead of Gamification, We Believe in Genuine Support**
"Points and badges might work for some. But for most, they become another source of pressure. We skip the game mechanics and focus on what actually helps: understanding and adaptation."

**Instead of Generic Reminders, We Believe in Context**
"A reminder at 8 AM doesn't help if you're in a meeting. We learn when you're actually available and show up then."

**Instead of Tracking Everything, We Believe in Focus**
"You don't need to build 17 habits at once. One habit, done well, until it's truly yours."

**Instead of Static Apps, We Believe in Learning AI**
"On day 1, we're learning. By day 30, we know you. By day 90, we're helping you better than any human could, because we never forget."

**Visual Treatment:**
- **Option A:** Clean, modern table with alternating row colors
- **Option B:** Card-based layout with each principle as an individual card
- **Iconography:** Small icons representing each differentiator
- **Tone:** Confident but not arrogant, clear but not preachy

---

### Section 7: MEET YOUR COMPANIONS

**Objective:** Showcase the avatar personalities and create emotional connection.

#### Content Requirements

**Section Headline:**
"Your Companion, Your Choice"

**Subheadline:**
"Every avatar has a personality. Which one is yours?"

**Avatar Showcase (3-5 Options):**

**1. The Cheerleader Cat**
- **Visual:** Friendly, energetic cat avatar (illustrated)
- **Personality:** "Upbeat, encouraging, celebrates every small win"
- **Best For:** "You need positivity and celebration. You respond to warmth."
- **Sample Dialogue:** "Amazing! You made time for that walk even though today was chaos. That's growth."

**2. The Focused Fox**
- **Visual:** Calm, intelligent fox avatar
- **Personality:** "Direct, no-nonsense, keeps you accountable"
- **Best For:** "You need structure and gentle discipline. You respect clarity."
- **Sample Dialogue:** "We agreed on 10 minutes today. No excuses—let's do this."

**3. The Gentle Guide (Bunny/Owl)**
- **Visual:** Soft, reassuring bunny or wise owl
- **Personality:** "Compassionate, understanding, adapts to your emotional state"
- **Best For:** "You need empathy and flexibility. You respond to kindness."
- **Sample Dialogue:** "Today was rough. How about we try just 5 minutes? No pressure."

**4. The Adventurer (Optional)**
- **Visual:** Energetic dog or explorer character
- **Personality:** "Playful, spontaneous, makes habits feel like adventures"
- **Best For:** "You need excitement and variety. You respond to fun."
- **Sample Dialogue:** "Let's try something different today—how about a walk somewhere new?"

**Interactive Element (Optional):**
- **"Which Companion Are You?" Quiz:** Simple 3-5 question quiz that suggests a companion type
- **Hover/Click Interactions:** Avatars animate or "speak" when hovered/clicked

**Visual Treatment:**
- **Layout:** Card grid (3 avatars side-by-side on desktop, stacked on mobile)
- **Animation:** Each avatar has subtle idle animation (breathing, blinking)
- **Style:** Consistent illustration style across all avatars (warm, modern, friendly)

---

### Section 8: THE TECHNOLOGY

**Objective:** Build credibility by explaining the intelligence behind the system without being overly technical.

#### Content Requirements

**Section Headline:**
"Smart by Design, Not by Accident"

**Subheadline:**
"Here's what makes your AI companion actually intelligent."

**Core Capabilities (Explained Simply):**

**1. Conversational Onboarding**
- **What It Means:** "No forms. Just a conversation—voice or text—that feels natural."
- **How It Works:** "Our AI uses natural language processing to understand your goals, personality, and preferences from how you talk, not what boxes you check."
- **Why It Matters:** "You get a companion that knows you from day one, not day 30."

**2. Personality Profiling**
- **What It Means:** "Your companion adapts its tone, approach, and personality to match yours."
- **How It Works:** "By analyzing your responses, schedule, and interaction style, the AI determines whether you respond better to cheerleading, accountability, or gentle support."
- **Why It Matters:** "One-size-fits-all doesn't work. Personalization does."

**3. Context-Aware Scheduling**
- **What It Means:** "Your companion knows when to show up—and when not to."
- **How It Works:** "By integrating with your calendar and learning your routines, the AI finds the right moments to check in. Lunch break? Just got home? After your first meeting? It adapts."
- **Why It Matters:** "Notifications that arrive at the wrong time get ignored. Ours arrive when you're ready."

**4. Adaptive Learning**
- **What It Means:** "The longer you use it, the smarter it gets about YOU."
- **How It Works:** "Every interaction teaches the AI more about your patterns, preferences, and progress. It remembers what works and adjusts what doesn't."
- **Why It Matters:** "This isn't a static app. It evolves with you."

**5. Qualitative Progress Tracking**
- **What It Means:** "We measure how you're doing, not just if you did it."
- **How It Works:** "Instead of yes/no checkboxes, the AI asks qualitative questions: How did that feel? What made it easier today? It builds a nuanced understanding of your progress."
- **Why It Matters:** "Context matters. We care about sustainable habits, not just completion rates."

**6. Compassionate Boundaries**
- **What It Means:** "Your companion is supportive, but it's not trying to be your therapist or best friend."
- **How It Works:** "The AI is trained to stay focused on habit-building. If you share that you had a tough day, it adjusts your goals—but it doesn't try to solve your personal problems."
- **Why It Matters:** "Clear boundaries create trust. You know what to expect."

**7. Multi-Companion Architecture (Future)**
- **What It Means:** "As you build one habit, you can add another companion for a different area of life."
- **How It Works:** "Each companion focuses on one habit. They can co-exist without overwhelming you."
- **Why It Matters:** "You're not limited to one habit forever—but you'll never be overwhelmed by tracking everything at once."

**Visual Treatment:**
- **Layout:** Two-column layout (visual on left, explanation on right) OR accordion-style expandable cards
- **Icons:** Simple, modern icons representing each capability
- **Tone:** Educational but accessible—no jargon
- **Optional Visual:** Diagram showing data flow (conversation → learning → adaptation → personalized interaction)

---

### Section 9: FROM THE CREATORS

**Objective:** Build trust and connection with Munish and Barnaby; establish authenticity.

#### Content Requirements

**Section Headline:**
"Why We're Building This"

**Personal Note:**

"Hi, we're Munish and Barnaby.
We're not a startup chasing funding, and we're not a corporation launching another productivity tool. We're simply two people who have spent years fascinated by AI, human behavior, and the gap between what technology can do and what actually helps people.
Over time, we realized something important: lasting change rarely happens alone. The habits that stick are often built with the support of a partner — someone who understands you, adapts to you, and walks alongside you.
We believe technology can play that role, but only if it's designed differently.
Not as a rigid tool, but as a supportive partner.
Not as something that pushes you, but something that understands you.
Not as another system demanding your attention, but something that respects your time.
Most existing tools focus on tracking, optimizing, or nudging — often driven by metrics, engagement, or incentives that don't fully align with the user's personal growth. The experience can feel transactional, impersonal, and ultimately unsustainable.
We wanted to create something else.
Something that feels personal.
Something that adapts to you.
Something that feels less like software, and more like a thoughtful presence in your life.
We're sharing an exploration of what that kind of experience could look like — openly and honestly. Not to launch or scale something, but to contribute an idea. To show a different possibility for how AI could help people grow.
We're sharing this openly in the hope that it inspires a different kind of AI experience — one that is human-centered, respectful, and truly helpful.
Thanks for being here.
— Munish & Barnaby"

**Visual Treatment:**
- **Photos:** Professional but approachable headshots of Munish and Barnaby (OR illustrated avatars if they prefer)
- **Layout:** Side-by-side photos with text below, OR text-focused with small photos in corner
- **Tone:** Warm, authentic, humble
- **Optional:** Link to LinkedIn profiles or project blog

---

### Section 10: JOIN THE JOURNEY

**Objective:** Convert interest into action.

#### Content Requirements

**Section Headline:**
"Be Part of Something Different"

**Subheadline:**
"We're building this in the open. Join us."

**Call-to-Action Options:**

**Primary CTA: Join the Waitlist**
- **Form Fields:**
  - Email (required)
  - First Name (optional)
  - "What habit are you trying to build?" (optional text field)
- **Button Text:** "Join the Waitlist"
- **Confirmation:** "Thanks! We'll be in touch soon with updates."

**Secondary Options:**

**Follow the Project:**
- "Get updates as we build" → Link to blog, newsletter, or social media

**Share Feedback:**
- "Have thoughts on what we're building?" → Link to feedback form or email

**Spread the Word:**
- Social share buttons (Twitter, LinkedIn, Reddit)

**Footer:**
- **Links:** About / Privacy Policy / Contact
- **Copyright:** "© 2026 Munish Malik & Barnaby Golden. Built with care."

**Visual Treatment:**
- **Background:** Inviting, warm color (gradient or illustration)
- **CTA Form:** Clean, minimal design (email field + submit button)
- **Companion Visual:** Small avatar waving goodbye or giving thumbs-up

---

## 5. Design System & Visual Identity

### 5.1 Color Palette

**Primary Colors:**
- **Cheerful Accent:** Coral (#FF6B6B) or Warm Orange (#FFA726)
- **Secondary Accent:** Soft Teal (#4ECDC4) or Gentle Blue (#5DADE2)

**Neutral Colors:**
- **Background:** Off-white (#FAFAFA) or Light Cream (#FFF8F0)
- **Text Primary:** Charcoal Gray (#2C3E50)
- **Text Secondary:** Medium Gray (#7F8C8D)

**Semantic Colors:**
- **Success/Growth:** Soft Green (#2ECC71)
- **Caution/Adjust:** Amber (#F39C12)
- **Calm/Rest:** Lavender (#9B59B6)

**Usage Guidelines:**
- Avoid pure black (#000) for text—use charcoal
- Avoid pure white (#FFF) for backgrounds—use off-white for warmth
- Use accent colors sparingly for CTAs and key highlights

### 5.2 Typography

**Font Families:**
- **Headings:** Inter, Manrope, or DM Sans (bold, modern, friendly)
- **Body:** Inter, Open Sans, or Nunito Sans (readable, warm)
- **Accent/Quotes:** Optional serif for pull quotes (e.g., Merriweather)

**Type Scale:**
- **H1 (Hero Headline):** 48-64px (desktop), 32-40px (mobile)
- **H2 (Section Headlines):** 36-48px (desktop), 28-32px (mobile)
- **H3 (Subsections):** 24-30px (desktop), 20-24px (mobile)
- **Body Text:** 18-20px (desktop), 16-18px (mobile)
- **Small Text:** 14-16px (captions, labels)

**Line Height:** 1.5-1.7 for body text, 1.2-1.3 for headings

### 5.3 Illustration Style

**Approach:** Warm, modern, friendly illustrations—not corporate, not childish

**Character Design (Avatars):**
- **Style:** Soft, rounded shapes with friendly expressions
- **Detail Level:** Medium detail (not overly simplified, not hyper-realistic)
- **Animation:** Subtle idle animations (breathing, blinking) and micro-interactions (wave, nod)

**Supporting Illustrations:**
- **Icons:** Line-based or filled icons with rounded corners
- **Scene Illustrations:** Simple backgrounds with warm color palettes
- **Consistency:** All illustrations should feel part of a cohesive visual family

**Tools/References:**
- **Inspiration:** Headspace (calm, friendly), Duolingo (playful characters without gamification pressure), Calm (soothing visuals)
- **Avoid:** Overly corporate stock illustrations, childish clipart, cold/sterile interfaces

### 5.4 Spacing & Layout

**Grid System:** 12-column grid on desktop, 4-column on mobile

**Section Padding:**
- **Desktop:** 80-120px vertical padding between sections
- **Mobile:** 60-80px vertical padding

**Content Max-Width:** 1200px (centered)

**Whitespace Philosophy:** Generous spacing to create breathing room and focus

### 5.5 Interaction & Animation

**Animation Principles:**
- **Subtle, Not Distracting:** Animations should enhance, not dominate
- **Purpose-Driven:** Every animation should have a reason (feedback, delight, guide attention)
- **Performance:** All animations should run at 60fps; use CSS transforms over layout changes

**Scroll Animations:**
- **Fade-in:** Sections fade in as they enter viewport (0.6s duration)
- **Slide-in:** Elements slide in from bottom or side (0.8s duration with easing)
- **Parallax:** Light parallax on hero section only (avoid overuse)

**Hover States:**
- **Buttons:** Slight scale (1.05x) and color shift on hover
- **Cards:** Lift effect with shadow on hover
- **Avatars:** Subtle animation (blink, wave) on hover

**Loading States:**
- **Form Submission:** Button shows loading spinner, changes to "Sending..."
- **Page Load:** Optional preloader with avatar animation

---

## 6. Content Strategy

### 6.1 Tone of Voice

**Primary Attributes:**
- **Warm:** Friendly and approachable, not corporate or cold
- **Honest:** Transparent about what the product is and isn't
- **Empathetic:** Understands user struggles without being condescending
- **Clear:** Simple language, no jargon or buzzwords
- **Hopeful:** Optimistic about change, not guilt-inducing

**What to Avoid:**
- Corporate jargon ("synergy," "leverage," "disruptive")
- Overpromising ("This will change your life forever!")
- Guilt or shame ("You've failed at habits before, but...")
- Overly casual or meme-heavy language

### 6.2 Messaging Hierarchy

**Primary Message:**
"AI Habit Companion is a personalized, intelligent companion that learns from you and helps you build sustainable habits through conversation and adaptation—not gamification or guilt."

**Supporting Messages:**
1. "We replace streaks and points with genuine understanding and support."
2. "Your companion adapts to your schedule, personality, and life—because one-size-fits-all doesn't work."
3. "This is a community-first project built by people who care about making something genuinely useful."

### 6.3 SEO Considerations

**Target Keywords (Organic):**
- AI habit companion
- Personalized habit tracker
- AI-powered habit formation
- Habit app without gamification
- Intelligent habit assistant

**Meta Title (60 chars):**
"AI Habit Companion - Personalized Habit Building Without Guilt"

**Meta Description (155 chars):**
"Meet your AI habit companion—personalized, intelligent, and built to help you form sustainable habits through conversation, not streaks or points."

**Open Graph Tags:**
- Title: "AI Habit Companion - Your Personalized Habit Partner"
- Description: Same as meta description
- Image: Hero visual with avatar and headline

---

## 7. Technical Considerations

### 7.1 Technology Stack Recommendations

**Frontend:**
- **HTML5** with semantic markup
- **CSS3** (or preprocessor like SASS) with flexbox/grid
- **Vanilla JavaScript** OR lightweight framework (Alpine.js, Stimulus)
- **Optional:** React/Vue if team prefers component-based architecture (may be overkill for static page)

**Libraries/Frameworks:**
- **Animation:** AOS (Animate On Scroll) OR GSAP (GreenSock)
- **Forms:** Optional form validation library (e.g., Formspree for backend-less form handling)
- **Icons:** Feather Icons or Heroicons

**Hosting:**
- **Recommended:** Netlify or Vercel (free tier, easy deployment, custom domain support)
- **Alternative:** GitHub Pages (simple, free, but limited features)

### 7.2 Performance Targets

- **Page Load Time:** < 3 seconds on 3G
- **First Contentful Paint:** < 1.5 seconds
- **Largest Contentful Paint:** < 2.5 seconds
- **Total Page Size:** < 2MB (optimized images, minified CSS/JS)

**Optimization Strategies:**
- **Image Optimization:** Use WebP format with fallback, lazy loading for below-fold images
- **CSS/JS Minification:** Minify and bundle production assets
- **Font Loading:** Use system fonts OR preload custom fonts with font-display: swap
- **CDN:** Serve assets via CDN if using custom hosting

### 7.3 Accessibility Requirements

**WCAG 2.1 Level AA Compliance:**
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Alt Text:** Descriptive alt text for all images
- **ARIA Labels:** Proper ARIA labels for interactive elements
- **Focus Indicators:** Visible focus states for all interactive elements
- **Screen Reader Testing:** Test with VoiceOver (macOS/iOS) and NVDA (Windows)

**Semantic HTML:**
- Use proper heading hierarchy (H1 → H2 → H3)
- Use `<nav>`, `<section>`, `<article>`, `<aside>` appropriately
- Use `<button>` for actions, `<a>` for navigation

### 7.4 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1440px

**Mobile-First Approach:** Design for mobile, progressively enhance for larger screens

---

## 8. Launch & Marketing Strategy

### 8.1 Pre-Launch Checklist

- [ ] Finalize website copy and visuals
- [ ] Create avatar animations with 2-second rotation intervals
- [ ] Implement rotating avatar animations in hero section and Section 4
- [ ] Develop share modal for LinkedIn and X with pre-populated text
- [ ] Add LinkedIn profile buttons for Munish and Barnaby
- [ ] Create attribution section with proper crediting guidelines
- [ ] Test on multiple devices and browsers
- [ ] Implement analytics (Google Analytics or privacy-focused alternative)
- [ ] Test share functionality on LinkedIn and X
- [ ] Optimize images and page speed
- [ ] Accessibility audit
- [ ] Spell-check and proofread all content

### 8.2 Launch Channels

**Primary:**
- **Product Hunt:** Launch on Product Hunt with compelling visuals and story
- **Reddit:** Post in relevant subreddits (r/productivity, r/getdisciplined, r/MachineLearning—with care)
- **Hacker News:** Share as "Show HN" post
- **LinkedIn:** Personal posts from Munish and Barnaby

**Secondary:**
- **X/Twitter:** Thread explaining the project and philosophy with share button
- **IndieHackers:** Share in community as a side project
- **Designer/Dev Communities:** Share on Designer News, Dev.to if relevant

### 8.3 Content Marketing (Post-Launch)

**Blog Posts (Optional):**
1. "Why We're Building an AI Habit Companion (And Why It's Different)"
2. "The Problem with Gamification in Habit Apps"
3. "How AI Can Actually Help You Build Habits (Without Being Creepy)"
4. "Behind the Scenes: Designing Compassionate AI Companions"

**Social Media:**
- Share user feedback and early tester stories
- Behind-the-scenes development updates
- Short clips of avatar animations

---

## 9. Success Metrics & KPIs

### 9.1 Engagement Metrics

- **Bounce Rate:** Target < 40% (indicates compelling hero section)
- **Average Time on Page:** Target > 2 minutes (indicates content is engaging)
- **Scroll Depth:** Target > 80% (visitors read through most sections)
- **Section Completion Rate:** % of users who reach each section

### 9.2 Conversion Metrics

- **LinkedIn Connection Rate:** Number of LinkedIn profile visits and connection requests
- **Social Shares:** Number of shares on X and LinkedIn via share button
- **Referral Traffic:** % of visitors from social shares
- **Attribution Rate:** Number of projects that credit the source

### 9.3 Qualitative Feedback

- **User Comments:** Feedback from Product Hunt, Reddit, Hacker News
- **LinkedIn Messages:** Direct messages and conversations via LinkedIn
- **Sentiment Analysis:** Positive vs. negative sentiment in comments

---

## 10. Future Enhancements (Post-MVP)

### 10.1 Interactive Elements

- **Live Avatar Demo:** Interactive chat demo where visitors can "try" talking to a companion
- **Personality Quiz:** "Which Companion Are You?" quiz with shareable results
- **Video Demos:** Short video clips showing avatar interactions (per Barnaby's storyboard approach)

### 10.2 Localization

- **Multilingual Support:** Translate website into key languages (Spanish, French, German, Hindi)
- **Cultural Adaptation:** Adjust messaging and visuals for different cultural contexts

### 10.3 Dynamic Content

- **Blog Section:** Add blog for ongoing content marketing
- **Community Stories:** Showcase early user testimonials and stories
- **Progress Updates:** Live counter showing number of waitlist signups or development milestones

---

## 11. Risk Assessment & Mitigation

### 11.1 Risks

**Risk 1: Messaging Too Complex**
- **Impact:** Visitors don't understand what the product is
- **Mitigation:** User testing with 5-10 people before launch; iterate on clarity

**Risk 2: Hero Section Doesn't Hook**
- **Impact:** High bounce rate
- **Mitigation:** A/B test multiple hero headlines and visuals

**Risk 3: Avatar Visuals Fall Flat**
- **Impact:** Emotional connection doesn't happen
- **Mitigation:** Invest in high-quality illustration/animation; test with target audience

**Risk 4: Technical Performance Issues**
- **Impact:** Slow load times, poor experience
- **Mitigation:** Performance testing, image optimization, CDN usage

**Risk 5: Share Functionality Issues**
- **Impact:** Users unable to easily share on LinkedIn or X
- **Mitigation:** Test share modal thoroughly across devices and browsers, ensure pre-populated text works correctly

### 11.2 Open Questions

1. **Should we include pricing information?** (Even if TBD, or state "free during beta"?)
2. **Should we commit to a launch timeline?** (E.g., "Beta launching Q2 2026")
3. **Do we need a demo video?** (Or is static/animated content sufficient?)
4. **How should we track attribution?** (Backlinks, mentions, etc.)
5. **What should the pre-populated share text be for LinkedIn and X?**
6. **Should we add a Creative Commons or similar license for attribution?**

---

## 12. Appendix

### 12.1 Competitor Analysis (Brief)

**Direct Competitors:**
- **Habitica:** Gamification-heavy, RPG-style habit tracker
- **Streaks:** Minimalist, streak-focused tracker
- **Coach.me:** Human coaches + community, but less AI-driven
- **Fabulous:** Science-based routines, somewhat prescriptive

**Indirect Competitors:**
- **Noom:** AI-powered weight loss coaching (similar personalization concept)
- **Replika:** AI companion chatbot (similar conversational AI, different purpose)

**Key Differentiators:**
- Personalized AI avatar with multiple personality options
- Context-aware scheduling (not fixed reminders)
- Anti-gamification philosophy
- Conversational onboarding (voice option)
- Adaptive learning that improves over time

### 12.2 User Research Insights (From Journey Map)

**Persona: Susan**
- Organized at work, disorganized in personal life
- Busy social life
- Needs someone to do the planning for her
- Responds to emotional support, not guilt
- Prefers voice interactions over typing

**Key Insights:**
- Users want trust and transparency (avatar selection rationale)
- Users need the ability to change/customize if first choice doesn't fit
- First interaction needs to "wow" and create positive surprise
- Daily interactions should be smooth, non-disruptive, enjoyable
- Progress should be measured qualitatively, not just quantitatively

### 12.3 Reference Links

- **Journey Map:** [journey-map-parsed.md](journey-map-parsed.md)
- **Meeting Notes:**
  - [AI Learning Group Workshop – 2025_08_20](AI Learning Group Workshop – 2025_08_20 21_00 GMT+05_30 – Notes by Gemini.md)
  - [AI Learning Group – 2025_09_03](AI Learning Group – 2025_09_03 20_59 GMT+05_30 – Notes by Gemini.md)
  - [AI Learning Group – 2025_09_17](AI Learning Group – 2025_09_17 21_31 GMT+05_30 – Notes by Gemini.md)

---

## Document Control

**Version History:**
- v1.0 (Feb 13, 2026): Initial PRD draft - Complete website architecture, section requirements, design system, and technical specifications
- v1.1 (Feb 16, 2026): Updated to remove waitlist/join references, added LinkedIn connections, share functionality, and rotating avatar animations

**Next Steps:**
1. Review and approve PRD updates with Barnaby
2. Create wireframes for each section
3. Implement rotating avatar animations (2-second intervals with name display)
4. Develop share modal for LinkedIn and X
5. Finalize avatar illustrations/animations
6. Write final copy for all sections
7. Begin development

**Questions for Stakeholders:**
- Should we include video demos in MVP or save for v2?
- Which avatar personalities should we prioritize for launch (3 or 5)?
- Do we need a blog section at launch, or add post-launch?
- What should the pre-populated share text be for LinkedIn and X?
- Should we add a Creative Commons or similar license for attribution?

---

**Document Owner:** Munish Malik
**Last Updated:** February 16, 2026
**Status:** Updated - Removed Waitlist, Added LinkedIn Connections & Share Functionality
