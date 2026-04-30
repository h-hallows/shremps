// ----------------------------------------------------------------------------
// Team & Partners — intentionally low-emphasis on the studio site.
// If this array is empty, About.tsx renders the
// "Team and partners listed soon." fallback line instead of the grid.
// Hunter: populate names/roles when ready.
// ----------------------------------------------------------------------------

export type TeamRole = "team" | "partner";

export interface Member {
  name: string;
  role: string; // one-line role, e.g. "Music Director"
  type: TeamRole;
  initials?: string; // for avatar fallback
}

export const team: Member[] = [
  // Example shape — uncomment and populate when ready.
  // { name: "—",  role: "Founder",          type: "team",    initials: "—" },
  // { name: "—",  role: "Creative Lead",    type: "team",    initials: "—" },
  // { name: "—",  role: "Music Director",   type: "team",    initials: "—" },
  // { name: "—",  role: "Studio Partner",   type: "partner", initials: "—" },
  // { name: "—",  role: "Music Partner",    type: "partner", initials: "—" },
  // { name: "—",  role: "Distribution",     type: "partner", initials: "—" },
];
