// Server-compatible (no 'use client' needed here)
// Parent (SolutionsHero) is the client component

import {
  getFeaturedSolution,
  getStandardSolutions,
  getMiniSolutions,
} from '@/lib/solutions-data'
import { FeaturedSolutionCard } from './FeaturedSolutionCard'
import { StandardSolutionCard } from './StandardSolutionCard'
import { MiniSolutionCard } from './MiniSolutionCard'

interface SolutionsGridProps {
  activeFilter: string
}

export function SolutionsGrid({ activeFilter }: SolutionsGridProps) {
  const featured  = getFeaturedSolution()
  const standards = getStandardSolutions()
  const minis     = getMiniSolutions()

  // A card is visible if filter is 'all' OR its id matches the active filter
  const isVisible = (id: string) =>
    activeFilter === 'all' || activeFilter === id

  return (
    <section className="px-7 py-12 max-w-7xl mx-auto">

      {/* Section header */}
      <div className="mb-7">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase
          text-[#1635D4] mb-2">
          Our verticals
        </p>
        <h2 className="text-[20px] font-medium
          text-brand-navy mb-1.5">
          Choose a sector to explore.
        </h2>
        <p className="text-[13px] text-brand-gray-text
          leading-[1.65] max-w-[480px]">
          Each vertical has dedicated brands, proven projects,
          and SI partners who specialise in it.
        </p>
      </div>

      {/* ── Main 2-column grid ── */}
      {/* Featured card spans full width (col-span-2) */}
      {/* Standard cards sit side-by-side below it     */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
        <FeaturedSolutionCard
          solution={featured}
          visible={isVisible(featured.id)}
        />
        {standards.map((sol) => (
          <StandardSolutionCard
            key={sol.id}
            solution={sol}
            visible={isVisible(sol.id)}
          />
        ))}
      </div>

      {/* ── 3-column mini card row ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {minis.map((sol) => (
          <MiniSolutionCard
            key={sol.id}
            solution={sol}
            visible={isVisible(sol.id)}
          />
        ))}
      </div>

    </section>
  )
}
