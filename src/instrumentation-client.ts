import posthog from 'posthog-js';

// Project token is write-only and safe to ship in client code
posthog.init('phc_xMy6TiFiCCT4m3mkowJCEY6oX5d6D8xtork8HGe5nGNx', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  person_profiles: 'identified_only',
});
