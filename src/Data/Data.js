// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path:"/dash"
  },
  {
    icon: UilClipboardAlt,
    heading: "3D Visualizer",
    path: "/3d-visualizer"
  },
  {
    icon: UilChart,
    heading: "Time Lapse",
    path: "/demo"
  },
  {
    icon: UilUsersAlt,
    heading: "Carbon Footprint",
    path: "/carbon"
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "CO\u2082 since 1979",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 121,
    value: "426 ppm",
    date: "Updated: Sep 2024",
    png: UilChart,
    series: [
      { year: 1979, value: 336.85 },
      { year: 1980, value: 338.91 },
      { year: 1981, value: 340.11 },
      { year: 1982, value: 340.86 },
      { year: 1983, value: 342.53 },
      { year: 1984, value: 344.07 },
      { year: 1985, value: 345.54 },
      { year: 1986, value: 346.97 },
      { year: 1987, value: 348.68 },
      { year: 1988, value: 351.16 },
      { year: 1989, value: 352.78 },
      { year: 1990, value: 354.06 },
      { year: 1991, value: 355.39 },
      { year: 1992, value: 356.09 },
      { year: 1993, value: 356.83 },
      { year: 1994, value: 358.33 },
      { year: 1995, value: 360.17 },
      { year: 1996, value: 361.93 },
      { year: 1997, value: 363.05 },
      { year: 1998, value: 365.7 },
      { year: 1999, value: 367.8 },
      { year: 2000, value: 368.96 },
      { year: 2001, value: 370.57 },
      { year: 2002, value: 372.59 },
      { year: 2003, value: 375.15 },
      { year: 2004, value: 376.95 },
      { year: 2005, value: 378.98 },
      { year: 2006, value: 381.15 },
      { year: 2007, value: 382.9 },
      { year: 2008, value: 385.02 },
      { year: 2009, value: 386.5 },
      { year: 2010, value: 388.76 },
      { year: 2011, value: 390.63 },
      { year: 2012, value: 392.65 },
      { year: 2013, value: 395.4 },
      { year: 2014, value: 397.35 },
      { year: 2015, value: 399.65 },
      { year: 2016, value: 403.06 },
      { year: 2017, value: 405.22 },
      { year: 2018, value: 407.61 },
      { year: 2019, value: 410.07 },
      { year: 2020, value: 412.44 },
      { year: 2021, value: 414.7 },
      { year: 2022, value: 417.07 },
      { year: 2023, value: 419.31 }
    ],
  },
  {
    title: "CH\u2084 since 1983",
    color: {
      backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0px 10px 20px 0px #fdd1d1",
    },
    barValue: 116,
    value: "1929 ppb",
    date: "Updated: Sep 2024",
    png: UilChart,
    series: [
      { year: 1983, value: 1636.58 },
      { year: 1984, value: 1645.02 },
      { year: 1985, value: 1657.37 },
      { year: 1986, value: 1670.21 },
      { year: 1987, value: 1682.8 },
      { year: 1988, value: 1693.26 },
      { year: 1989, value: 1704.62 },
      { year: 1990, value: 1714.53 },
      { year: 1991, value: 1724.98 },
      { year: 1992, value: 1735.46 },
      { year: 1993, value: 1736.56 },
      { year: 1994, value: 1742.16 },
      { year: 1995, value: 1748.9 },
      { year: 1996, value: 1751.31 },
      { year: 1997, value: 1754.6 },
      { year: 1998, value: 1765.65 },
      { year: 1999, value: 1772.39 },
      { year: 2000, value: 1773.32 },
      { year: 2001, value: 1771.25 },
      { year: 2002, value: 1772.7 },
      { year: 2003, value: 1777.35 },
      { year: 2004, value: 1777.02 },
      { year: 2005, value: 1774.19 },
      { year: 2006, value: 1775 },
      { year: 2007, value: 1781.46 },
      { year: 2008, value: 1787.1 },
      { year: 2009, value: 1793.56 },
      { year: 2010, value: 1798.99 },
      { year: 2011, value: 1803.2 },
      { year: 2012, value: 1808.19 },
      { year: 2013, value: 1813.46 },
      { year: 2014, value: 1822.71 },
      { year: 2015, value: 1834.37 },
      { year: 2016, value: 1843.18 },
      { year: 2017, value: 1849.63 },
      { year: 2018, value: 1857.44 },
      { year: 2019, value: 1866.66 },
      { year: 2020, value: 1879.1 },
      { year: 2021, value: 1895.39 },
      { year: 2022, value: 1911.96 },
      { year: 2023, value: 1922.47 }
    ],
  },
  {
    title: "N\u2082O since 2001",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",

      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 106,
    value: "337 ppb",
    date: "Updated: Sep 2024",
    png: UilChart,
    series: [
      { year: 2001, value: 316.36 },
      { year: 2002, value: 316.94 },
      { year: 2003, value: 317.63 },
      { year: 2004, value: 318.26 },
      { year: 2005, value: 318.91 },
      { year: 2006, value: 319.82 },
      { year: 2007, value: 320.44 },
      { year: 2008, value: 321.50 },
      { year: 2009, value: 322.27 },
      { year: 2010, value: 323.19 },
      { year: 2011, value: 324.21 },
      { year: 2012, value: 325.05 },
      { year: 2013, value: 325.94 },
      { year: 2014, value: 327.09 },
      { year: 2015, value: 328.17 },
      { year: 2016, value: 328.95 },
      { year: 2017, value: 329.74 },
      { year: 2018, value: 330.90 },
      { year: 2019, value: 331.88 },
      { year: 2020, value: 333.03 },
      { year: 2021, value: 334.31 },
      { year: 2022, value: 335.65 },
      { year: 2023, value: 336.71 }

    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "US Green House Gas Center",
    noti: "Get the latest data on Green House Gas Emissions.",
    time: "www.ghgcenter.com",
  },
  {
    img: img2,
    name: "NASA",
    noti: "Explore NASA.",
    time: "www.nasa.gov",
  },
  {
    img: img3,
    name: "NOAA",
    noti: "Access extensive data on our atmosphere.",
    time: "www.noaa.gov",
  },
];
