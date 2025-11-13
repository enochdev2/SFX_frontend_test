// src/components/GreetingRevenueCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { RevenueDataItem } from '../types/dashboard';

interface GreetingRevenueCardProps {
  revenueData: RevenueDataItem[];
}

const GreetingRevenueCard: React.FC<GreetingRevenueCardProps> = ({ revenueData }) => {
  return (
    <Card className="mb-1">
      <CardHeader className="flex flex-row items-start justify-between pb-">
        <div>
          <CardTitle className="text-xl font-bold mb-1 text-orange-400">
            👋 Hey Martins!
          </CardTitle>
          <CardDescription className="text-lg font-bold text-gray-900">
            You earned NGN 3,000,000 this month.
          </CardDescription>
          <Select defaultValue="Last 30 days">
            <SelectTrigger className="w-40 mt-8 text-gray-500 font-bold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Last 30 days">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="border rounded-2xl px-7 py-8 border-gray-100 shadom-sm">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={revenueData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f9f8"
              vertical={false}
            />
            <XAxis dataKey="name" tick={{ fontSize: 14 }} />
            <YAxis tickFormatter={(value) => `NGN ${value / 1000}k`} />
            <Tooltip
              formatter={(value) => [
                `NGN ${value.toLocaleString()}`,
                "Revenue",
              ]}
            />
            <Bar
              dataKey="revenue"
              fill="#A885F7"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GreetingRevenueCard;