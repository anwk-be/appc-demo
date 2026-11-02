/* Example content for the prototype.
   Members, board, team and programmes come from app.coop.
   Events and news are SAMPLE content: app.coop currently only lists placeholder events. */

window.APPC = {};

APPC.regions = ["East Asia", "South Asia", "Southeast Asia", "Oceania", "Pacific Islands", "West Asia"];

// lat/lon are capital cities, used only to place dots on the schematic map
APPC.members = [
  { code: "AU", name: "Australia Post", country: "Australia", region: "Oceania", lat: -35.3, lon: 149.1, web: "auspost.com.au" },
  { code: "BT", name: "Bhutan Post", country: "Bhutan", region: "South Asia", lat: 27.5, lon: 89.6, web: "bhutanpost.bt" },
  { code: "BN", name: "Brunei Post", country: "Brunei Darussalam", region: "Southeast Asia", lat: 4.9, lon: 114.9 },
  { code: "KH", name: "Cambodia Post", country: "Cambodia", region: "Southeast Asia", lat: 11.6, lon: 104.9 },
  { code: "CN", name: "China Post", country: "China", region: "East Asia", lat: 39.9, lon: 116.4, web: "chinapost.com.cn" },
  { code: "FJ", name: "Post Fiji", country: "Fiji", region: "Pacific Islands", lat: -18.1, lon: 178.4, web: "postfiji.com.fj" },
  { code: "HK", name: "Hong Kong Post", country: "Hong Kong, China", region: "East Asia", lat: 23.4, lon: 115.2, web: "hongkongpost.hk" },
  { code: "IN", name: "India Post", country: "India", region: "South Asia", lat: 28.6, lon: 77.2, web: "indiapost.gov.in" },
  { code: "ID", name: "Pos Indonesia", country: "Indonesia", region: "Southeast Asia", lat: -6.2, lon: 106.8, web: "posindonesia.co.id" },
  { code: "IR", name: "National Post Company of I.R. Iran", country: "Iran", region: "West Asia", lat: 35.7, lon: 51.4 },
  { code: "JP", name: "Japan Post", country: "Japan", region: "East Asia", lat: 35.7, lon: 139.7, web: "japanpost.jp" },
  { code: "KR", name: "Korea Post", country: "Republic of Korea", region: "East Asia", lat: 37.6, lon: 127.0, web: "epost.go.kr" },
  { code: "LA", name: "Lao Post", country: "Lao PDR", region: "Southeast Asia", lat: 18.0, lon: 102.6 },
  { code: "MO", name: "Macao Post", country: "Macao, China", region: "East Asia", lat: 21.4, lon: 112.6, web: "macaupost.gov.mo" },
  { code: "MY", name: "Malaysia Post", country: "Malaysia", region: "Southeast Asia", lat: 3.1, lon: 101.7, web: "pos.com.my" },
  { code: "MV", name: "Maldives Post", country: "Maldives", region: "South Asia", lat: 4.2, lon: 73.5 },
  { code: "MN", name: "Mongol Post", country: "Mongolia", region: "East Asia", lat: 47.9, lon: 106.9 },
  { code: "NP", name: "Nepal Post", country: "Nepal", region: "South Asia", lat: 27.7, lon: 85.3 },
  { code: "NZ", name: "New Zealand Post", country: "New Zealand", region: "Oceania", lat: -41.3, lon: 174.8, web: "nzpost.co.nz" },
  { code: "PH", name: "Philippines Post", country: "Philippines", region: "Southeast Asia", lat: 14.6, lon: 121.0, web: "phlpost.gov.ph" },
  { code: "PG", name: "Post PNG", country: "Papua New Guinea", region: "Pacific Islands", lat: -9.4, lon: 147.2 },
  { code: "SG", name: "Singpost", country: "Singapore", region: "Southeast Asia", lat: 1.35, lon: 103.8, web: "singpost.com" },
  { code: "SB", name: "Solomon Islands Post", country: "Solomon Islands", region: "Pacific Islands", lat: -9.4, lon: 159.9 },
  { code: "LK", name: "Sri Lanka Post", country: "Sri Lanka", region: "South Asia", lat: 6.9, lon: 79.9 },
  { code: "TH", name: "Thailand Post", country: "Thailand", region: "Southeast Asia", lat: 15.6, lon: 101.6, web: "thailandpost.co.th" },
  { code: "VU", name: "Vanuatu Post", country: "Vanuatu", region: "Pacific Islands", lat: -17.7, lon: 168.3 },
  { code: "VN", name: "Vietnam Post", country: "Viet Nam", region: "Southeast Asia", lat: 21.0, lon: 105.8, web: "vnpost.vn" }
];

APPC.secretariatHQ = { lat: 13.75, lon: 100.5, label: "Bangkok, Thailand", sub: "APPC secretariat from 2027" };

APPC.board = [
  { name: "Mr Lee Hon Chew", role: "Chairperson", org: "Singapore Post" },
  { name: "Mr Uchida Kazunori", role: "Vice Chairperson and Finance", org: "Japan Post" },
  { name: "Mr Pang Yu", role: "Member Relations", org: "China Post" },
  { name: "Mr Lindsay Welsh", role: "Connect Programme", org: "New Zealand Post" },
  { name: "Mr Hariadi", role: "Operations", org: "Pos Indonesia" },
  { name: "Ms Jungeun Park", role: "Assistant Director", org: "Korea Post" },
  { name: "Mrs Adawiyah Jafar", role: "HR", org: "Pos Malaysia" }
];

APPC.team = [
  { name: "Gary Carroll", role: "Managing Director", org: "APPC secretariat" },
  { name: "Hannah Goh", role: "Head of Cooperative Operations and Office", org: "APPC secretariat" }
];

APPC.programmes = [
  { id: "quality", icon: "shield", title: "Quality of service and QSF support",
    text: "Guidance on the UPU Quality of Service Fund: assessing performance, improving service quality and preparing Common Fund applications." },
  { id: "ecommerce", icon: "box", title: "Cross-border e-commerce",
    text: "The APP Cross Border Passport guide and the award-winning ePacket service help members grow cross-border parcel volumes." },
  { id: "consulting", icon: "chart", title: "Consulting and research",
    text: "Reviews of operations, market research, strategy, technology audits and customer experience work for member posts." },
  { id: "opportunities", icon: "link", title: "Member opportunities",
    text: "Preferential access to industry studies and partnerships, such as the IPC Cross-Border E-Commerce Shopper Survey." },
  { id: "network", icon: "users", title: "Knowledge sharing and events",
    text: "The General Assembly, workshops and online clinics where member staff share what works across the region." }
];

APPC.events = [
  { day: "25", mon: "Nov", year: "2026", title: "QSF and Common Fund clinic", type: "Online clinic", loc: "Online", upcoming: true,
    text: "A practical session for member staff preparing Quality of Service Fund projects and Common Fund applications." },
  { day: "10", mon: "Dec", year: "2026", title: "Management Board meeting", type: "Governance", loc: "Singapore and online", upcoming: true,
    text: "The Board reviews the 2027 work plan and progress on the secretariat move to Bangkok." },
  { day: "03", mon: "Mar", year: "2027", title: "Cross-border e-commerce workshop", type: "Workshop", loc: "Bangkok, Thailand", upcoming: true,
    text: "Two days on cross-border returns, customs data and the latest Cross Border Passport findings. Open to member staff and invited partners." },
  { day: "08", mon: "Jun", year: "2027", title: "APPC General Assembly 2027", type: "General Assembly", loc: "Bangkok, Thailand", upcoming: true,
    text: "The first General Assembly hosted from the new secretariat in Bangkok. Heads of member posts set priorities for the next two years." },
  { day: "15", mon: "Sep", year: "2026", title: "APPC General Assembly 2026", type: "General Assembly", loc: "Singapore", upcoming: false,
    text: "Members approved the move of the secretariat to Bangkok in 2027 and elected the Management Board." },
  { day: "02", mon: "Jul", year: "2026", title: "ePacket quality forum", type: "Forum", loc: "Online", upcoming: false,
    text: "Members compared ePacket delivery performance and agreed shared quality targets." },
  { day: "12", mon: "May", year: "2026", title: "IPC Shopper Survey briefing", type: "Briefing", loc: "Online", upcoming: false,
    text: "An introduction to the 2026 IPC Cross-Border E-Commerce Shopper Survey and preferential rates for APPC members." }
];

APPC.news = [
  { id: "bangkok", cat: "Announcement", title: "APPC secretariat to move to Bangkok in 2027",
    excerpt: "After three decades in Singapore, the secretariat will move closer to the centre of the region's postal network.", date: "28 October 2026" },
  { id: "ipc", cat: "Member opportunity", title: "Preferential rates for the 2026 IPC Shopper Survey",
    excerpt: "Members can join one of the postal sector's leading sources of cross-border e-commerce market intelligence.", date: "14 October 2026" },
  { id: "ga2026", cat: "Event recap", title: "Highlights from the 2026 General Assembly",
    excerpt: "Heads of member posts met in Singapore to agree priorities and elect the Management Board.", date: "22 September 2026" },
  { id: "qsf", cat: "Insight", title: "Five tips for a stronger Common Fund application",
    excerpt: "What the QSF support team has learned from helping members prepare successful projects.", date: "5 September 2026" },
  { id: "epacket", cat: "Member news", title: "ePacket: putting quality of service first",
    excerpt: "How members use shared targets and data to keep the award-winning ePacket service reliable.", date: "18 August 2026" },
  { id: "passport", cat: "Insight", title: "Cross Border Passport: what's new this year",
    excerpt: "The latest edition of APPC's guide to Asia Pacific e-commerce covers returns, customs data and marketplaces.", date: "30 July 2026" }
];

APPC.resources = [
  { type: "Report", title: "APPC annual report 2025", meta: "PDF · 2.4 MB · 2026", text: "Our year in review: programmes, finances and member highlights." },
  { type: "Guide", title: "APP Cross Border Passport", meta: "PDF · 5.1 MB · 2026", text: "Your guide to Asia Pacific e-commerce for postal professionals." },
  { type: "Report", title: "IPC Cross-Border E-Commerce Shopper Survey: 2025 key findings", meta: "PDF · 3.0 MB · 2025", text: "Shopper habits and expectations of carriers, shared with IPC's permission." },
  { type: "Guide", title: "Quality of Service Fund: a guide for member posts", meta: "PDF · 1.2 MB · 2025", text: "How the QSF works and how APPC can support your application." },
  { type: "Policy", title: "APPC strategic plan 2025–2027", meta: "PDF · 0.9 MB · 2025", text: "Our goals for members, partners and the secretariat over three years." },
  { type: "Presentation", title: "General Assembly 2026: summary of decisions", meta: "PDF · 0.6 MB · 2026", text: "Key decisions, including the move of the secretariat to Bangkok." }
];
