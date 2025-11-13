// src/components/PaymentIssuesCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { IssuesDataItem } from '../types/dashboard';

interface PaymentIssuesCardProps {
  issuesData: IssuesDataItem[];
}

const PaymentIssuesCard: React.FC<PaymentIssuesCardProps> = ({ issuesData }) => {
  const chartOrder = ['Customer errors', 'Fraud blocks', 'Bank errors', 'System errors'];
  const displayData = chartOrder.map((cat) => 
    issuesData.find((item) => item.category === cat)
  ).filter(Boolean) as IssuesDataItem[];

  const legendOrder = [
    { category: 'Customer errors', color: '#F59E0B', symbol: 'square' as const },
    { category: 'Fraud blocks', color: '#EF4444', symbol: 'x' as const },
    { category: 'Bank errors', color: '#06B6D4', symbol: 'circle' as const },
    { category: 'System errors', color: '#10B981', symbol: 'square' as const },
  ];

  const yTickFormatter = (value: string) => {
    const symbols = {
      'Customer errors': 'a',
      'Fraud blocks': 'x',
      'Bank errors': 'o',
      'System errors': 'n',
    };
    return symbols[value as keyof typeof symbols] || value;
  };

  const renderSymbol = (symbol: 'square' | 'x' | 'circle', color: string) => {
    switch (symbol) {
      case 'square':
        return <div className="w-2 h-2 border-2 border-current" style={{ borderColor: color }} />;
      case 'circle':
        return <div className="w-2 h-2 rounded-full border-2 border-current" style={{ borderColor: color }} />;
      case 'x':
        return <span className="text-xs font-bold leading-none" style={{ color, fontSize: '8px' }}>×</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="border border-gray-150 shadow-lg">
      <CardHeader className="pb-">
        <CardTitle className="text-base">Payment issues</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={displayData}
            layout="horizontal"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f9f8"
            //   horizontal={true}
              vertical={false}
            />
            <XAxis 
              type="number" 
              ticks={[5, 10]} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94A3B8' }}
            />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tick={{ fontSize: 10, fill: '#94A3B8' }}
              tickFormatter={yTickFormatter}
            />
            <Tooltip />
            <Bar dataKey="value" barSize={10} radius={[0, 8, 8, 0]}>
              {displayData.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center space-x-2 pt-2 mt-2 border-t border-gray-200">
            <div className="w-2 h-2 bg-orange-400 rounded" />
            <span className="text-sm font-medium text-orange-600">Total number of errors: 19</span>
          </div>
        <div className="space-y-1 text-sm">
          {legendOrder.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              {renderSymbol(item.symbol, item.color)}
              <span className="text-gray-600 capitalize">
                {item.category}
              </span>
            </div>
          ))}
          
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentIssuesCard;