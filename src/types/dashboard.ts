// src/types/dashboard.ts
export interface RevenueDataItem {
  name: string;
  revenue: number;
}

export interface SuccessDataItem {
  name: string;
  value: number;
  color: string;
}

export interface IssuesDataItem {
  category: string;
  value: number;
  color: string;
}

export interface Message {
  id: number;
  name: string;
  time: string;
  message: string;
  avatar: string;
  color: string;
}