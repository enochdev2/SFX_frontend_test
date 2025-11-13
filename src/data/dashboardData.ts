// src/data/dashboardData.ts
import type { RevenueDataItem, SuccessDataItem, IssuesDataItem, Message } from '../types/dashboard';

export const revenueData: RevenueDataItem[] = [
  { name: "Mar 1-7", revenue: 50000 },
  { name: "Mar 8-14", revenue: 100000 },
  { name: "Mar 15-21", revenue: 150000 },
  { name: "Mar 22-28", revenue: 200000 },
  { name: "Final wk", revenue: 150000 },
];

export const successData: SuccessDataItem[] = [
  { name: "Successful", value: 150, color: "#10B981" },
  { name: "Unsuccessful", value: 1, color: "#6B7280" },
];

export const issuesData: IssuesDataItem[] = [
  { category: "Customer errors", value: 5, color: "#F59E0B" },
  { category: "Fraud blocks", value: 3, color: "#EF4444" },
  { category: "Bank errors", value: 10, color: "#06B6D4" },
  { category: "System errors", value: 1, color: "#10B981" },
];

export const messages: Message[] = [
  {
    id: 1,
    name: "Peter Japhet",
    time: "Jan 2, 1:23pm",
    message: "I need some maintenance...",
    avatar: "P",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Leo Aroma",
    time: "Wed 6:05pm",
    message: "I got your email and I...",
    avatar: "L",
    color: "bg-red-500",
  },
  {
    id: 3,
    name: "James Robinson",
    time: "Jan 2, 1:23pm",
    message: "I need some maintenance...",
    avatar: "J",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Lupita Jonah",
    time: "Feb 10, 4:15pm",
    message: "Thank you so much for...",
    avatar: "L",
    color: "bg-orange-500",
  },
  {
    id: 5,
    name: "Lupita Jonah",
    time: "Feb 10, 4:15pm",
    message: "Thank you so much for...",
    avatar: "L",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Lupita Jonah",
    time: "Feb 10, 4:15pm",
    message: "Thank you so much for...",
    avatar: "L",
    color: "bg-orange-500",
  },
];