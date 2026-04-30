import { team, type Member } from "@/lib/team";

// Intentionally low-emphasis — this is a credibility cue, not a centerpiece.
// If the `team` array is empty, render the fallback line instead of the grid.
export function TeamGrid() {
  if (team.length === 0) {
    return (
      <p className="text-sm text-ink/50 font-mono">
        Team and partners listed soon.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
      {team.map((m, i) => (
        <MemberRow key={`${m.name}-${i}`} member={m} />
      ))}
    </ul>
  );
}

function MemberRow({ member }: { member: Member }) {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden
        className="
          shrink-0 w-9 h-9 rounded-full
          flex items-center justify-center
          border border-[var(--hairline)]
          font-mono text-[11px] text-ink/60
        "
      >
        {member.initials ?? member.name.slice(0, 2).toUpperCase()}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink truncate">{member.name}</p>
        <p className="text-xs text-ink/55 truncate">{member.role}</p>
      </div>
    </li>
  );
}
