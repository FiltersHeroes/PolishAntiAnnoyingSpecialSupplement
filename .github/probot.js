on('issues.labeled')
  .filter(context => context.payload.label.name === 'zatwierdzone')
  .close();

on('issues.labeled')
  .filter(context => context.payload.label.name === 'odrzucone')
  .close();

/*
on('issues.opened')
  .filter(context => !context.payload.issue.body.match(/### Typ elementu/) || context.payload.issue.body.includes('- [ ]'))
  .comment(contents('.github/MISSING_ISSUE_TEMPLATE_AUTOREPLY.md'))
  .close();
*/


on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] RSS/))
  .label('RSS');
  
on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] RSS/))
  .unlabel('RSS');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] widżet/))
  .label('widżet');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] widżet/))
  .unlabel('widżet');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] błąd/))
  .label('błąd');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] błąd/))
  .unlabel('błąd');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] pytanie/))
  .label('pytanie');
  
on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] pytanie/))
  .unlabel('pytanie');
  
on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] ulepszenie/))
  .label('ulepszenie');
  
on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] ulepszenie/))
  .unlabel('ulepszenie');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[xX]] zgłoszenie/))
  .label('zgłoszenie');

on('issues.opened', 'issues.edited')
  .filter(context => context.payload.issue.body.match(/- \[[ ]] zgłoszenie/))
  .unlabel('zgłoszenie');
