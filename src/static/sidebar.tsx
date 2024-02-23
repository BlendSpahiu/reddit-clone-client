import {
  ArrowTrendingUpIcon,
  ArrowUpRightIcon,
  ComputerDesktopIcon,
  FilmIcon,
  HomeIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export const homeButtons = [
  {
    label: "Home",
    icon: <HomeIcon className="h-6 w-6 text-white" />,
    link: "/r/home",
  },
  {
    label: "Popular",
    icon: <ArrowUpRightIcon className="h-6 w-6 text-white" />,
    link: "/r/popular",
  },
];

export const topics = [
  {
    label: "Gaming",
    items: [
      { label: "Elden Ring", link: "" },
      { label: "Valheim", link: "" },
      { label: "League of Legends", link: "" },
      { label: "World of Warcraft", link: "" },
    ],
    icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
  },
  {
    label: "Sports",
    items: [
      { label: "NFL" },
      { label: "Baseball" },
      { label: "Football" },
      { label: "Soccer" },
      { label: "Basketball" },
    ],
    icon: <TrophyIcon className="h-6 w-6 text-white" />,
  },
  {
    label: "Business",
    items: [
      { label: "Gamestop" },
      { label: "Moderna" },
      { label: "Pfizer" },
      { label: "Walgreens" },
      { label: "SpaceX" },
      { label: "Tesla" },
    ],
    icon: <ArrowTrendingUpIcon className="h-6 w-6 text-white" />,
  },
  {
    label: "Television",
    items: [
      { label: "The Bachelor" },
      { label: "Sister Wives" },
      { label: "Wife Swap" },
      { label: "90 Day Fiance" },
      { label: "My 600-lb Wife" },
    ],
    icon: <FilmIcon className="h-6 w-6 text-white" />,
  },
];
