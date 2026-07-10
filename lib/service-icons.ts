import {
  BarChart3,
  HelpCircle,
  LucideIcon,
  Megaphone,
  MousePointerClick,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

export const SERVICE_ICONS = {
  Search,
  MousePointerClick,
  Megaphone,
  Users,
  Sparkles,
  BarChart3,
} as const satisfies Record<string, LucideIcon>;

export function getServiceIcon(name: string): LucideIcon {
  return SERVICE_ICONS[name as keyof typeof SERVICE_ICONS] ?? HelpCircle;
}
