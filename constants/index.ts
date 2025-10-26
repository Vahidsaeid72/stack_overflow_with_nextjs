import sun from '../assets/icons/sun.svg'
import moon from '../assets/icons/moon.svg'
import computer from '../assets/icons/computer.svg'
import { SidebarLink } from "@/types";

export const themes =[
    {value :'light' , lebale : 'Light' , icon:sun},
    {value :'dark' , lebale : 'Dark' , icon:moon},
    {value :'system' , lebale : 'System' , icon:computer}
]
import Home from '@/assets/icons/home.svg';
import Community from '@/assets/icons/users.svg';
import Collections from '@/assets/icons/star.svg';
import Jobs from '@/assets/icons/suitcase.svg';
import Tags from '@/assets/icons/tag.svg';
import Profile from '@/assets/icons/user.svg';
import question from '@/assets/icons/question.svg';
export const sidebarLinks: SidebarLink[] = [
    {
      imgURL: Home,
      route: "/",
      label: "Home",
    },
    {
      imgURL: Community,
      route: "/community",
      label: "Community",
    },
    {
      imgURL: Collections,
      route: "/collection",
      label: "Collections",
    },
    {
      imgURL: Jobs,
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: Tags,
      route: "/tags",
      label: "Tags",
    },
    {
      imgURL: Profile,
      route: "/profile",
      label: "Profile",
    },
    {
      imgURL: question,
      route: "/ask-question",
      label: "Ask a question",
    },
   ];
  
   export const BADGE_CRITERIA = {QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
 }
 