// src/components/SuccessRateCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { SuccessDataItem } from '../types/dashboard';

interface SuccessRateCardProps {
  successData: SuccessDataItem[];
}

const SuccessRateCard: React.FC<SuccessRateCardProps> = ({ successData }) => {
  return (
    <Card className="border border-gray-150 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">
          Success rate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={successData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={60}
              dataKey="value"
              startAngle={80}
              endAngle={-270}
              nameKey="name"
            >
              {successData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">98%</div>
        </div>
        <div className="space-y-1 text-sm flex gap-8 justify-between px-10">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-center gap-4">
              <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
              <span className="font-semibold text-2xl">1</span>
            </div>
            <span className="flex items-center font-medium text-base">
              Unsuccessful
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-green-400 rounded mr-2"></div>
              <span className="font-semibold text-2xl">150</span>
            </div>
            <span className="flex items-center font-medium text-base">
              Successful
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessRateCard;