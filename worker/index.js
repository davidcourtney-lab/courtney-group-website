// Sends every visitor (and Google) to one address, https://davidgcourtney.com,
// so search engines see a single copy of each page instead of duplicates on
// www.davidgcourtney.com and the workers.dev address. Everything else is
// served straight from the built site in dist/.
const PRIMARY_HOST = 'davidgcourtney.com';
const REDIRECT_HOSTS = ['www.davidgcourtney.com', 'courtney-group.david-courtney9.workers.dev'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_HOSTS.includes(url.hostname)) {
      url.hostname = PRIMARY_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
