// src/components/Header.tsx
import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { BellIcon, ChevronDown, Search } from 'lucide-react';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="fixed top-0 left-[243px] w-[1193px] h-[94px] bg-white z-50 pl-8 py-6 flex items-center justify-between gap-12">
      <div className="relative flex-1 max-w-lg overflow-hidden">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search"
          className="pl-12 rounded-2xl w-full bg-gray-50 py-5"
        />
      </div>
      <div className="flex items-center space-x-8 px-9 pr-12">
        <div className="flex items-center space-x-2">
          <Switch
            id="live"
            defaultChecked
            className="data-[state=checked]:bg-green-300 bg-green-500"
          />
          <label
            htmlFor="live"
            className="text-[15px] font-medium text-gray-400"
          >
            Live
          </label>
        </div>
        <Select defaultValue="English">
          <SelectTrigger className="w-[130px] rounded-full py-6 border border-gray-100 text-gray-600 b">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-center mx-auto">
            <SelectItem value="English" className="">
              English
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="relative bg-gray-50 px-4 py-4 rounded-xl border border-gray-100">
          <BellIcon className="h-5 w-5 text-gray-500 bg-gray-" />
          <div className="absolute top-1 right-1 w-3 h-3 bg-purple-300 rounded-full" />
        </div>
        <div className="flex justify-between w-52 items-center space-x-2 border border-gray-50 pl- rounded-lg pl- pr-2 overflow-hidden">
          <div className="w-12 h-12 bg-gray-300 overflow-hidden">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-left">
              <p className="text-[12px] font-semibold text-gray-600">
                Martins Chidume
              </p>
              <p className="text-xs text-gray-300">ID: 1234567</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;