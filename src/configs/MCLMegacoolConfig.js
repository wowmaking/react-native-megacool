export class MCLMegacoolConfig {
  /**
   * The base url to use when building the absolute share urls.
   * This defaults to mgcl.co/<app-identifier>. The absolute url for a share will be https://<base-url><share-url>?_m=<referral-code>.
   * The url must have at least a host to be valid.
   * This is a premium feature that also requires configuration on the dashboard to work properly.
   * @param {string} [baseUrl]
   * @returns {MCLMegacoolConfig}
   */
  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }
}