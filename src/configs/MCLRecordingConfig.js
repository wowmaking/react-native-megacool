export class MCLRecordingConfig {
  /**
   * Define how recordings longer than the specified max frames should be compressed.
   * Note that if maxFrames is set to 1 you cannot use MCLOverflowStrategy.Timeline.
   * If this combination is set MCLOverflowStrategy.Latest will be used instead.
   * @param {MCLOverflowStrategy} overflowStrategy
   * @returns {MCLRecordingConfig}
   */
  setOverflowStrategy(overflowStrategy) {
    this.overflowStrategy = overflowStrategy;
    return this;
  }
  /**
   * Set an identifier for a recording, to be able to preview or share it again later.
   * To be able to store multiple completed recordings on disk you must also remember
   * to set setKeepCompletedRecordings(boolean) to true.
   * @param {string} recordingId
   * @returns {MCLRecordingConfig}
   */
  setRecordingId(recordingId) {
    this.recordingId = recordingId;
    return this;
  }

  /**
   * Set the max number of frames in a recording. If set to 1 the recording will be shared as an image instead of a gif or mp4.
   * If you set this to 1 you probably also want to use modalTitle(string) to change the default modal title so that
   * it doesn't say a GIF is about to be shared.
   * If the overflow strategy is set to MCLOverflowStrategy.Timeline, the resulting GIF might have a frame count
   * between 1.33x and 0.66x what is set as max.
   * @param {number} maxFrames
   * @returns {MCLRecordingConfig}
   */
  setMaxFrames(maxFrames) {
    this.maxFrames = maxFrames;
    return this;
  }
  /**
   * How often new frames should be recorded, in frames per second.
   * This is only relevant when you use startRecording(MCLRecordingConfig), as when you use
   * captureFrame(MCLRecordingConfig) the frames will be captured in the rate you call captureFrame.
   * The upper limit here will be restricted by how fast captures can occur on the given device, if set too high
   * we'll just capture as many frames per second as possible, and you'll see highly variable results between devices.
   * You probably shouldn't set this higher than 15-20 to avoid too much performance impact from the recording.
   * Calling this method will automatically update the playback frame rate to be 20% more than the value passed in for
   * frameRate, unless you've previously called setPlaybackFrameRate(number)
   * @param {number} frameRate
   * @returns {MCLRecordingConfig}
   */
  setFrameRate(frameRate) {
    this.frameRate = frameRate;
    return this;
  }

  /**
   * The frame rate the recording will be played back in. Should be identical to the recording frame rate set
   * with setFrameRate(number) to play back in real time, set higher to speed up the recording or lower to slow it down.
   * The max is 100fps, but you're unlikely to see browser play it back at that rate, thus you should keep the rate in
   * the 5-25 range to stay sane.
   * @param {number} playbackFrameRate
   * @returns {MCLRecordingConfig}
   */
  setPlaybackFrameRate(playbackFrameRate) {
    this.playbackFrameRate = playbackFrameRate;
    return this;
  }

  /**
   * Set the location of the highest scoring moment (the peak) in a highlight recording.
   * Must be between 0 and 1, the default is 0.7. Set the score throughout the game with registerScoreChange().
   * The recording must be using the highlight overflow strategy for this to have any effect.
   * For example, in a recording with 10 frames, a peak location of 0.2 means that the highest scoring frame will occur
   * near the beginning at frame 2, and a peakLocation of 0.8 means that the peak will occur near the end at frame 8.
   * @param {number} peakLocation
   * @returns {MCLRecordingConfig}
   */
  setPeakLocation(peakLocation) {
    this.peakLocation = peakLocation;
    return this;
  }

  /**
   * Set how long to pause the GIF on the last frame, in ms. Must be a non-negative integer, default is 1000.
   * If you pass 0, the delay will be the same as the other frames
   * @param {number} lastFrameDelay
   * @returns {MCLRecordingConfig}
   */
  setLastFrameDelay(lastFrameDelay) {
    this.lastFrameDelay = lastFrameDelay;
    return this;
  }

  /**
   * Set the image that will be overlayed on the last frame of the gif
   * @param {string} lastFrameOverlayUrl
   * @returns {MCLRecordingConfig}
   */
  setLastFrameOverlayUrl(lastFrameOverlayUrl) {
    this.lastFrameOverlayUrl = lastFrameOverlayUrl;
    return this;
  }
}
