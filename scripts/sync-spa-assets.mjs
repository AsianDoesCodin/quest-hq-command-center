import { cp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();

const legacyFiles = [
  'admin.html',
  'automations.html',
  'crm.html',
  'dashboards.html',
  'files.html',
  'finance.html',
  'forms.html',
  'jobs.html',
  'knowledge.html',
  'login.html',
  'task-management.html',
  'templates.html',
  'tickets.html',
];

export async function syncSpaAssets(outDirArg = 'dist') {
  const outDir = path.resolve(outDirArg);
  const taskRuntimeSource = path.join(root, 'taskmanagement');
  const taskRuntimeTarget = path.join(outDir, 'taskmanagement');
  const faviconSource = path.join(root, 'favicon.svg');

  await rm(taskRuntimeTarget, { recursive: true, force: true });
  await cp(taskRuntimeSource, taskRuntimeTarget, { recursive: true });
  await cp(faviconSource, path.join(outDir, 'favicon.svg'));

  const indexHtml = await readFile(path.join(outDir, 'index.html'), 'utf8');
  await writeFile(path.join(outDir, '404.html'), indexHtml);
  await writeFile(path.join(outDir, '.nojekyll'), '');

  await Promise.all(
    legacyFiles.map((file) => writeFile(path.join(outDir, file), legacyRedirect(file), 'utf8'))
  );
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await syncSpaAssets(process.argv[2] || 'dist');
}

function legacyRedirect(file) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Opening Quest HQ</title>
    <script>
      (function () {
        var file = ${JSON.stringify(file)};
        var params = new URLSearchParams(window.location.search);
        var route = '/command';
        var map = {
          'admin.html': '/admin',
          'automations.html': '/automations',
          'crm.html': '/crm',
          'dashboards.html': '/analytics',
          'files.html': '/files',
          'finance.html': '/finance',
          'forms.html': '/forms',
          'jobs.html': '/jobs',
          'knowledge.html': '/knowledge',
          'login.html': '/login',
          'templates.html': '/templates',
          'tickets.html': '/tickets'
        };
        if (file === 'task-management.html') {
          route = '/jobs';
          params.set('tab', 'tasks');
          if (params.has('project_id') && !params.has('job_id')) params.set('job_id', params.get('project_id'));
          params.delete('project_id');
        } else {
          route = map[file] || '/command';
        }
        var base = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));
        var target = new URL((base || '') + route, window.location.origin);
        target.search = params.toString();
        window.location.replace(target.toString());
      })();
    </script>
  </head>
  <body>
    <p>Opening Quest HQ...</p>
  </body>
</html>
`;
}
