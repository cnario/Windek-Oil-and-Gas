import { 
  ShieldCheck, 
  Leaf, 
  Lightbulb, 
  Users, 
  Award, 
  Drill, 
  Factory, 
  Anchor, 
  TrendingUp, 
  Zap 
} from 'lucide-react';
import { NavItem, ServiceItem, ValueItem, GrowthGoal } from './types';

export const COMPANY_NAME = "Windek Oil and Gas Limited";
export const TAGLINE = "Delivering Sustainable Energy Solutions through Operational Excellence and Innovation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "ESG", href: "#esg" },
  { label: "Contact", href: "#contact" },
];

export const TEAM_MEMBERS = [
  {
    name: "Emmanuel Uwandu",
    role: "Chief Operating Officer",
    image: "https://www.coastalcrestenergyltd.com/images/team/2.jpg",
    bio: "Over 10 years of experience in the Oil & Gas sector, leading strategic operations and expansion."
  },
  {
    name: "Motunrayo Adeogun",
    role: "Head of Business Development",
    image: "https://www.coastalcrestenergyltd.com/images/team/3.jpg",
    bio: "Driving growth strategies and managing stakeholder relationships across the energy value chain."
  },
  {
    name: "Joy Makanjuola",
    role: "Head of Human Resources",
    image: "https://www.coastalcrestenergyltd.com/images/team/4.jpg",
    bio: "Specializes in EPCI project delivery and engineering standards compliance."
  },
  {
    name: "Dorcas Oloniyo",
    role: "Head of Account",
    image: "https://www.coastalcrestenergyltd.com/images/team/5.jpg",
    bio: "Driving growth strategies and managing stakeholder relationships across the energy value chain. "
  }
];

export const CORE_VALUES: ValueItem[] = [
  { title: "Safety", description: "Zero harm operations aligned with international oil & gas standards.", icon: ShieldCheck },
  { title: "Integrity", description: "Unwavering commitment to ethical business practices.", icon: Award },
  { title: "Sustainability", description: "Creating long-term value while protecting the environment.", icon: Leaf },
  { title: "Innovation", description: "Leveraging advanced technology for energy solutions.", icon: Lightbulb },
  { title: "Stakeholder Value", description: "Creating value for all partners and communities.", icon: Users },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Upstream Operations",
    icon: Drill,
    image: "https://www.coastalcrestenergyltd.com/images/folio/10.jpg", // Drilling/Rig visual
    items: [
      "Onshore/offshore well design and drilling",
      "Completion and workover services",
      "Reservoir evaluation and production optimization",
      "Subsurface services including geological mapping"
    ]
  },
  {
    title: "Midstream & LPG Infrastructure",
    icon: Factory,
    image: "https://www.coastalcrestenergyltd.com/images/folio/11.jpg", // Industrial piping/tanks
    items: [
      "LPG storage and terminal development",
      "Terminal construction and operations",
      "Pipeline and distribution services",
      "Bulk storage and bottling solutions"
    ]
  },
  {
    title: "Engineering & Logistics",
    icon: Anchor,
    image: "https://www.coastalcrestenergyltd.com/images/folio/13.jpg", // Heavy engineering/logistics
    items: [
      "Engineering, Procurement, Construction & Installation",
      "Fabrication and modular construction",
      "Marine and land logistics support",
      "Dredging and civil works"
    ]
  }
];

export const GROWTH_GOALS: GrowthGoal[] = [
  {
    period: "Current Position",
    title: "Established Operations",
    description: "Flagship $100M LPG terminal project and proven expertise across the energy value chain.",
    icon: ShieldCheck
  },
  {
    period: "2025-2027",
    title: "Expansion Phase",
    description: "Expand LPG infrastructure to 3+ additional states and secure new E&P blocks.",
    icon: TrendingUp
  },
  {
    period: "2028-2030",
    title: "Future Vision",
    description: "Digital transformation and pioneering clean energy solutions (Solar+LPG hybrids).",
    icon: Zap
  }
];

export const CONTACT_INFO = {
  address: "19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria",
  phone: "+234 808 526 9328",
  email: "info@windekoilandgasltd.com",
  website: "www.windekoilandgasltd.com"
};