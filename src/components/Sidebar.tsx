import { useState } from 'react';
import {  FileText, Users, CreditCard, Repeat, TrendingUp, BarChart3,  UserPlus, Eye, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/1.png';

const paymentsSubItems = [
  { icon: FileText, label: 'Transactions' },
  { icon: Users, label: 'Customers' },
  { icon: CreditCard, label: 'Payouts' },
  { icon: Repeat, label: 'Balances' },
  { icon: TrendingUp, label: 'Subscriptions' },
  { icon: BarChart3, label: 'Payment plans' },
];

const commerceSubItems = [
  { icon: FileText, label: 'Transactions' },
  { icon: Users, label: 'Customers' },
  { icon: CreditCard, label: 'Payouts' },
  { icon: Repeat, label: 'Balances' },
  { icon: TrendingUp, label: 'Subscriptions' },
  { icon: BarChart3, label: 'Payment plans' },
];

const sections = [
  {
    title: 'Payments',
    // icon: DollarSign,
    active: true,
    subItems: paymentsSubItems,
    className: '',
  },
  {
    title: 'Commerce',
    // icon: ShoppingBag,
    active: false,
    subItems: commerceSubItems,
    className: 'mt-4 border-b border-t my-auto text-center border-gray-200 py-2',
  },
];

function Sidebar() {
  const [expandedSections, setExpandedSections] = useState(new Set(['Payments']));

  const toggleSection = (title) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <aside className="fixed top-[26px] left-5 w-[214px] h-[604px] bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      <div className="p-4  border-gray-200">
        <div className="flex items-center  justify-center space-x-2 w-24 h-8 overflow-hidden">
            <img src={logo} w-full h-full alt="" />
          
        </div>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-2 px-3">
          {sections.map((section, idx) => {
            const isExpanded = expandedSections.has(section.title);
            const ChevronIcon = isExpanded ? ChevronDown : ChevronRight;
            const buttonClasses = `w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors  ${
              section.active ? 'text bg-purple-00' : 'text-gray-600 hover:bg-gray-50'
            }`;

            return (
              <li key={idx} className={section.className || ''}>
                <button type='button' className={buttonClasses} onClick={() => toggleSection(section.title)}>
                  <div className="flex items-center space-x-3 text-base font-semibold">
                    <span>{section.title}</span>
                  </div>
                  <ChevronIcon className="h-5 w-5 " />
                </button>
                {isExpanded && (
                  <ul className="ml-6 space-y-1 mt-1">
                    {section.subItems.map((subItem, subIdx) => (
                      <li key={subIdx} >
                        <button type='button' className="w-full -ml-5 flex items-center space-x-3 px-3 py-1 rounded-md text-sm text-gray-400 font-medium gap-2 hover:bg-gray-50">
                          <subItem.icon className="h-5 w-5  rounded-full text-gray-400 " />
                          <span>{subItem.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          {/* top-level item */}
          <li className="mt-4">
            <button type='button' className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
              <UserPlus className="h-5 w-5" />
              <span>Referrals</span>
            </button>
            <button type='button' className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
              <Eye className="h-5 w-5" />
              <span>Audit logs</span>
            </button>
            <button type='button' className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;