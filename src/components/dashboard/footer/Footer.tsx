'use client';

import { DollarSign, Home, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: Home},
  { href: '/dashboard', icon: DollarSign},
  { href: '/dashboard/activity', icon: Clock}
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-md pb-4 pt-2">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ href, icon: Icon }) => {
          const isActive = pathname === href;
          const color = isActive ? 'text-green-500' : 'text-gray-600';

          return (
            <Link 
              key={href} 
              href={href} 
              className="flex flex-col items-center text-xs hover:text-black transition-colors"
            >
              <Icon className={`w-6 h-6 ${color}`} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}