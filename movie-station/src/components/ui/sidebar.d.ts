import { ReactNode } from 'react';

export interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}

export interface SidebarProviderProps {
  children: ReactNode;
}

export interface SidebarTriggerProps {
  className?: string;
} 