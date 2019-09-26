export class MCLShareConfig {
  /**
   * Which recording to share. Only needed if you set a recordingId during capture
   * @param {string} recordingId
   * @returns {MCLShareConfig}
   */
  setRecordingId(recordingId) {
    this.recordingId = recordingId;
    return this;
  }

  /**
   * Set the predefined message that's used when calling presentShare()
   * @param {string} message
   * @returns {MCLShareConfig}
   */
  setMessage(message) {
    this.message = message;
    return this;
  }

  /**
   * Set the path to the share's fallback image
   * @param fallbackImageUrl
   * @returns {MCLShareConfig}
   */
  setFallbackImageUrl(fallbackImageUrl) {
    this.fallbackImageUrl = fallbackImageUrl;
    return this;
  }

  /**
   * The URL path to share.
   * You can encode any data you want into the URL parameters to ensure they are available to the recipient immediately when they open the app, as getUrl().
   * Note that only the path, query and fragment are used. The absolute share url will be https://<base-url><url>?_m=<referral-code>. The default base url is mgcl.co/<app-identifier>, but can be changed with baseUrl(Uri).
   * @param {string} url
   * @returns {MCLShareConfig}
   */
  setUrl(url) {
    this.url = url;
    return this;
  }

  /**
   * Set extra data to attach to the share.
   * This can be used to include extra, trusted data in the share that is not visible in the URL. Note that even though the data is not immediately visible to the user like the URL is, it is not suitable for storing any sort of secret data, anyone with the URL of a share can get access to its data.
   * @param {*} data
   * @returns {MCLShareConfig}
   */
  setData(data) {
    this.data = data;
    return this;
  }

  /**
   * On iPads, where in the popoverSourceView the popover should be presented
   * @param {Object} popoverSourceRect
   * @param {number} popoverSourceRect.x
   * @param {number} popoverSourceRect.y
   * @param {number} popoverSourceRect.width
   * @param {number} popoverSourceRect.height
   * @returns {MCLShareConfig}
   */
  setPopoverSourceRect(popoverSourceRect) {
    this.popoverSourceRect = popoverSourceRect;
    return this;
  }

  /**
   * On which sides of the popover the source arrow should be placed.
   * This can be used to force the popover to be over or under the popoverSourceRect.
   * Defaults to MCLPopoverArrowDirection.Any
   * @param {MCLPopoverArrowDirection} popoverPermittedArrowDirections
   * @returns {MCLShareConfig}
   */
  setPopoverPermittedArrowDirections(popoverPermittedArrowDirections) {
    this.popoverPermittedArrowDirections = popoverPermittedArrowDirections;
    return this;
  }

  /**
   * When using shareToMessenger, you can force to show the composer view instead of replying directly to a friend.
   * More on Messenger’s reply flow here: https://developers.facebook.com/docs/messenger/ios#handling_calls_messenger
   * @param {boolean} messengerForceCompose
   * @returns {MCLShareConfig}
   */
  setMessengerForceCompose(messengerForceCompose) {
    this.messengerForceCompose = messengerForceCompose;
    return this;
  }

  /**
   * Set the SharingStrategy to be used when sharing to apps that support text or media, but not both.
   * Defaults to MCLSharingStrategy.Link
   * @param {MCLSharingStrategy} strategy
   * @returns {MCLShareConfig}
   */
  setStrategy(strategy) {
    this.strategy = strategy;
    return this;
  }

  /**
   * Set the title of the modal that presents the apps the user can share to.
   * The default is "Share GIF".
   * @param {string} modalTitle
   * @returns {MCLShareConfig}
   */
  setModalTitle(modalTitle) {
    this.modalTitle = modalTitle;
    return this;
  }
}