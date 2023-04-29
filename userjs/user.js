/****************************
 * Arlinseer' user.js
 * Adapted for Firefox 112.0.
 ****************************/

/**
 * Preferences are denoted by the following numbers:
 * 1: Security
 * 2: Privacy
 * 3: Interface-related
 * 4: Annoyance
 * 5: Miscellany
 * 0: Preference test
 */

user_pref("_here.it", "comes!");

// [Section 1]: Enable internal privacy protection features.
// privacy-rfp(2): Enable Firefox resistFingerprinting feature.
user_pref("privacy.resistFingerprinting", true);
// privacy-qs(2): Enable Firefox query stripping feature.
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);
// privacy-uc(2): Enable user context, and ask for which container to use
// when attempting to open a new tab.
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

// [Section 2]: Stop Firefox from collecting information on users.
// no-toolkit-telemetry(2): Disable toolkit telemetry.
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.dap_enabled", false); // [D]
user_pref("toolkit.telemetry.dap_task1_enabled", false); // [D]
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false); // [D]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false) // [D]
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.dap_helper", "");
user_pref("toolkit.telemetry.dap_helper_owner", "");
user_pref("toolkit.telemetry.dap_leader", "");
user_pref("toolkit.telemetry.dap_leader_owner", "");
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// no-pingcentre-telemetry(2): Disable browser "ping centre" telemetry.
user_pref("browser.ping-centre.telemetry", false);
// no-activitystream-telemetry(2): Disable activity stream telemetry.
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false); // [D]
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false); // [D]
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
// no-dom-telemetry(2): Disable DOM unexpected system load telemetry.
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
// no-trrconfirmation-telemetry(2): Disable network TRR confirmation telemetry.
user_pref("network.trr.confirmation_telemetry_enabled", false);
// no-security-recordeventtelemetry(2): Disable security record event telemetry.
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
// no-crash-reporting(2): Disable crash reporting.
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");
// no-datareporting(2): Disable browser data reporting.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.infoURL", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "");
// no-dom-ipc-reportcrash(2): Do not report crash for DOM IPC.
user_pref("dom.ipc.plugins.reportCrashURL", false);
// no-connectivity-service(2): Disable network connectivity service.
user_pref("network.connectivity-service.enabled", false);

// [Section 3]: Do not use potential tracking features.
// no-safebrowsing(2): Despite Firefox attempts to prevent Google from tracking
// its users, Google may still track any Safe Browsing users. Disable Safe
// Browsing, which may be unnecessary for advanced users.
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false); // [D]
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
// no-recommend-as-browse(2): Disable recommendations of addons/features as
// one browse.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// no-pocket-extension(2): Disable Pocket extension.
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
// no-discovery-stream(2): Disable browser new tab page discovery stream.
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
// no-merino(2): Disable Firefox Merino.
user_pref("browser.urlbar.merino.enabled", false);
// no-normandy(2): Disable Firefox Normandy recipe server.
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
// no-search-suggestion(2): Disable search suggestion.
user_pref("browser.search.suggest.enabled", false);
// no-topsits-contile(2): Disable browser top sites contile.
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);
// no-activitystream-improvesearch-sc(2): Disable activity stream improve
// search shortcuts.
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
// no-search-update(2): Disable browser search update.
user_pref("browser.search.update", false);
// no-browser-discovery(2): Disable browser discovery.
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.containers.enabled", false);
// no-browser-partnerlink(2): No browser partner link.
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.partnerlink.campaign.topsites", "");
// no-captive(2): Disable captive portal service.
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");
// no-addon-recommendations(2): Disable addons recommendations.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// no-quick-suggestion(2): Disable "quick suggestions."
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// [Section 4]: Clean up mild annoyances.
// no-default-sites(4): Unset default sites for new tab page.
user_pref("browser.newtabpage.activity-stream.default.sites", "");
// no-uitour(4): Disable browser UI tour.
user_pref("browser.uitour.enabled", false);
// no-gtk-theme(4): Disable browser from inheriting GTK theme.
user_pref("widget.non-native-theme.enabled", false);
// no-check-default-browser(4): Do not check for default browser.
user_pref("browser.shell.checkDefaultBrowser", false);
// no-firefox-view(4): Disable Firefox View.
user_pref("browser.tabs.firefox-view", false);
// no-urlbar-topsites(4): Disable top sites suggest.
user_pref("browser.urlbar.suggest.topsites", false);
// no-topsites-feed(4): Disable activity stream top sites feed.
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// no-promo(4): Disable browser promotion.
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
// no-more-from-moz(4): Do not show more from Mozilla on about:preferences page.
user_pref("browser.preferences.moreFromMozilla", false);
// no-middlemouse-opencblink(4): Prevent middle mouse click from opening copied
// link.
user_pref("middlemouse.contentLoadURL", false);
// no-whatsnew(4): Disable what's new panel.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// [Section 5]: Enhance security.
// no-disk-cache(1): Disable disk caching.
user_pref("browser.cache.disk.enable", false);
// https-only(1): Enforce HTTPS for all sites.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
// show-insecure-http-text(1): Show insecure connection text.
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
// https-first(1): Enable HTTPS first.
user_pref("dom.security.https_first", true);
// pki-mitm(1): Enable MITM (man in the middle) detection.
user_pref("security.pki.mitm_detected", true);
// no-mixed-content(1): Try to upgrade mixed content, and block them if failed.
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.upgrade_display_content", true);
// no-tls-0rtt(1): Disable TLS 1.3 no round trip time feature.
user_pref("security.tls.enable_0rtt_data", false);
// no-geo(1): Disable geolocation.
user_pref("geo.enabled", false);
// no-speculative-connections(1): Prevent browser from making speculative
// preconnections, such as prefetches and predictive connections.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enable-prefetch", false); // [D]
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.urlbar.speculativePreconnect.enabled", false);
// peerconnection-modifications(1): Modify peer connection capabilities to
// enhance security.
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.default_address_only", true);
// no-pdfjs-scripting(1): Disable pdf.js scripting.
user_pref("pdfjs.enableScripting", false);
// no-region-network-url(1): Remove region network URL.
user_pref("browser.region.network.url", "");
// no-formfill(1): Disable browser formfill.
user_pref("browser.formfill.enable", false);
// no-formautofill(1): Disable form autofill.
user_pref("extensions.formautofill.addresses.capture.enabled", false); // [D]
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.formautofill.reauth.enabled", false); // [D]
user_pref("extensions.formautofill.section.enabled", false);
// no-signon-autofill(1): Disable signon autofill of passwords.
user_pref("signon.autofillForms", false);
// force-punycode(1): Show punycode for international domain names.
user_pref("network.IDN_show_punycode", true);
// no-ipv6(1): Do not use IPv6. According to arkenfox user.js, IPv6 may
// create security issues.
user_pref("network.dns.disableIPv6", true);
// remote-dns-through-socks(1): Enable SOCKS proxy remote DNS.
user_pref("network.proxy.socks_remote_dns", true);
// disable-gio(1): Disable GIO as a potential proxy bypass.
user_pref("network.gio.supported-protocols", "");
// no-signon-formless-capture(1): Disable formless signon capture.
user_pref("signon.formlessCapture.enabled", false);
// require-safe-negotiation(1): Require safe negotiation.
user_pref("security.ssl.require_safe_negotiation", true);
// treat-unsafe-negotiation-as-broken(1): Treat unsafe negotiation as broken.
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// enforce-ocsp(1): Enforce OCSP fetching to confirm certificates validity.
user_pref("security.OSCP.require", true);
// no-background-http-request(1): Prevent sending HTTP background request.
user_pref("dom.security.https_only_mode_send_http_background_request", false);
// automatically-show-expert-badcert(3): Automatically show bad certificate
// advanced error.
user_pref("browser.xul.error_pages.expert_bad_cert", true);
// no-shortcut-favicon(1): Disable favicon for shortcuts.
user_pref("browser.shell.shortcutFavicons", false);

// [Section 6]: Enable advanced features.
// show-experimental(4): Show experimental features.
user_pref("browser.preferences.experimental", true);
user_pref("browser.preferences.experimental.hidden", true);
// show-viewimageinfo(4): Show "View Image Info" button.
user_pref("browser.menu.showViewImageInfo", true);

// [Section 7]: Further prevent online tracking.
// http-referer-policy(2): Configure HTTP referer policies.
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// [Section 8]: Further hardening.
// no-devtools-remote(2): Disable remote devtools debugging.
user_pref("devtools.debugger.remote-enabled", false);

// pref-test(0): Test preference for syntax error.
user_pref("_hello.world", "It... worked!");
