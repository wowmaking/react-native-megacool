/**
 * Config
 */
export class MCLPreviewConfig {
  /**
   * Which recording to create a preview for.
   * Will use the default recording if undefined.
   * @param {string} [recordingId]
   * @returns {MCLPreviewConfig}
   */
  setRecordingId(recordingId) {
    this.recordingId = recordingId;
    return this;
  }
  /**
   * Where in the view the preview should be
   * @param {Object} previewFrame
   * @param {number} previewFrame.x
   * @param {number} previewFrame.y
   * @param {number} previewFrame.width
   * @param {number} previewFrame.height
   * @returns {MCLPreviewConfig}
   */
  setPreviewFrame(previewFrame) {
    this.previewFrame = previewFrame;
    return this;
  }
}