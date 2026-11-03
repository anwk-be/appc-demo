# APPC website prototype

Static, clickable prototype of the redesigned APPC website. Open `index.html` in a browser; no build step.

## Structure

- `*.html`: one file per page
- `css/styles.css`: design tokens (colours and type from the Figma components sheet) and all components
- `js/data.js`: example content (members, board, programmes, events, news, resources)
- `js/site.js`: shared header, footer and components (news card, event row, member map, filters, form)

## Pages and WordPress templates

| Page | File | WordPress template |
|---|---|---|
| Home | index.html | front-page.php |
| About | about.html | page.php (standard page) |
| Members + map | members.html | archive-member.php (Member post type) |
| What we do | what-we-do.html | archive-programme.php (Programme post type) |
| News and insights | news.html | home.php (posts archive) |
| Article | article.html | single.php |
| Events | events.html | archive-event.php (Event post type or events plugin) |
| Resources | resources.html | archive-resource.php (Resource post type) |
| Membership, Partner with us | membership.html, partner.html | page-join.php (shared landing template) |
| Contact | contact.html | page-contact.php + form plugin |
| Member login | login.html | none: the button links to the community platform |

## Content to confirm before review

- **28th member**: app.coop lists only 27. A placeholder card stands in for the 28th.
- **Events, news and resources** are sample content, because app.coop's events page only has placeholder events.
- **History timeline** (2000s and 2010s entries) and **office hours** on the Contact page are placeholders to confirm.
- **Member websites** are filled in only where well known. The rest show "To be added".
- **Board and secretariat names** come from app.coop.

## Member community concept

Clicking **Member login**, then **Sign in to the community**, opens a concept of the private member community (`community/`). It doesn't depend on any platform, follows the proposal (Zoho CommunitySpaces recommended, BuddyBoss as the alternative), and uses APPC branding. The visitor is signed in as a customs lead at Post Fiji, a smaller post, to show "big post helps small post".

| Screen | File | What it shows |
|---|---|---|
| Home | community/index.html | Feed across your groups, ask-the-network composer, secretariat announcement, poll, events with RSVP, weekly digest preview |
| Groups | community/groups.html | The 8 functional groups from the proposal, Regulatory and customs marked as the pilot |
| Group | community/group.html | Pilot group: discussions, library, members, monthly question |
| Q&A thread | community/thread.html | Post Fiji asks about US duty collection; Japan Post's playbook is the accepted answer |
| Help exchange | community/help.html | Posts post requests and offers; a request is matched with an offer |
| Directory | community/directory.html | Find your counterpart at another post by topic, post or group |

Use **Show proposal features** (bottom right) to label each part with the proposal feature it demonstrates, marked as Pilot or Later.

All people, posts, numbers and files in the community are sample content. The Help exchange is our own concept idea, built from standard discussion features, so it works on either platform.
