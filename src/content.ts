export type Link = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export type Profile = {
  name: string
  role: string
  orgLine?: string
  locationLine?: string
  bio: string
  highlights: string[]
  skills: string[]
  projects: Project[]
  links: Link[]
}

export const profile: Profile = {
  name: 'Kaitlyn Kwan',
  role: 'Mobile iOS Engineer',
  orgLine: 'Penn Labs (edit/remove as needed)',
  locationLine: 'Philadelphia, PA (optional)',
  bio: `I build thoughtful mobile experiences with a focus on performance, reliability, and clean UX. I like shipping polished features, collaborating closely with designers, and turning ambiguous problems into simple flows.`,
  highlights: [
    'iOS-first product thinking',
    'UI polish + accessibility',
    'Pragmatic architecture & testing',
  ],
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Xcode',
    'Concurrency',
    'Networking',
    'Design systems',
    'Accessibility',
  ],
  projects: [
    {
      title: 'Campus Companion',
      description:
        'A lightweight iOS app concept for navigating campus life: schedules, maps, and quick actions in one place.',
      tags: ['SwiftUI', 'Maps', 'Offline-first'],
      href: '',
    },
    {
      title: 'Labs Toolkit',
      description:
        'Reusable UI components and patterns to help teams ship consistent iOS experiences faster.',
      tags: ['UIKit', 'Design systems', 'DX'],
      href: '',
    },
    {
      title: 'Performance Pass',
      description:
        'A set of profiling + instrumentation helpers to catch regressions before users do.',
      tags: ['Instruments', 'Metrics', 'Reliability'],
      href: '',
    },
  ],
  links: [
    { label: 'Email', href: 'mailto:your.email@example.com' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

