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
