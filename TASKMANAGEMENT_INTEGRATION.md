# TaskManagement Integration Notes

## Source Boundary

- Upstream repo copied locally at: `C:\Users\Joshua\Desktop\Quest roofing\TaskManagementQuest-upstream-copy`
- Upstream GitHub repo: `https://github.com/ShanIngrid1207/TaskManagementQuest/tree/main`
- Upstream Supabase project reference: `qqvmcsvdxhgjooirznrj`
- Do not push to the upstream repo.
- Do not run migrations against the upstream Supabase project.

## Quest HQ Direction

TaskManagement is becoming the Job Center execution layer, not a separate destination. Quest HQ owns:

- Companies and company access.
- Job workspaces.
- Files, forms, finance, analytics, and business context.
- User approval, role assignment, and team chart surfaces.

TaskManagement contributes:

- Login/profile approval model.
- Role permissions.
- Team member roster and supervisor hierarchy.
- Task execution rows.
- Time tracking, notifications, and approval queue concepts.

## Data Mapping

| TaskManagement | Quest HQ Target | Purpose |
| --- | --- | --- |
| `auth.users` | Supabase Auth | Login identity |
| `profiles` | Quest HQ profiles | Approval, role, company access, member link |
| `team_members` | Quest HQ team roster | Assignee picker, team chart, supervisor hierarchy |
| `companies` | Quest HQ companies | Operating company scope |
| `tasks.project_id` | `jobs.id` | Job-scoped task execution |
| `notifications` | Quest HQ notifications | Assignment and approval alerts |
| `time_entries` / `active_timers` | Time tracking module | Labor/time rollups by user and job |

## Migration Rule

Do not replay the TaskManagement SQL migrations directly into Quest HQ. The upstream migrations contain production RLS and historical fixes for a different app lifecycle. Quest HQ should receive a clean additive migration that preserves the useful model while respecting the existing `companies`, `jobs`, `job_files`, and demo policies.

## Current Mockup Status

- TaskManagement now opens inside Quest HQ at `task-management.html`.
- Job Center still provides the integration key: `jobs.id -> tasks.project_id`.
- Admin now shows Companies, Users & Roles, Approvals, and Team Chart.
- Live database work remains limited to the existing Quest HQ Supabase project until a dedicated migration is reviewed.
