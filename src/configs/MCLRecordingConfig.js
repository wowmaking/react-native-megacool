export default class MCLRecordingConfig {
  setOverflowStrategy(overflowStrategy) {
    this.overflowStrategy = overflowStrategy;
    return this;
  }
  setRecordingId(recordingId) {
    this.recordingId = recordingId;
    return this;
  }
  setMaxFrames(maxFrames) {
    this.maxFrames = maxFrames;
    return this;
  }
  setFrameRate(frameRate) {
    this.frameRate = frameRate;
    return this;
  }
  setPlaybackFrameRate(playbackFrameRate) {
    this.playbackFrameRate = playbackFrameRate;
    return this;
  }
  setPeakLocation(peakLocation) {
    this.peakLocation = peakLocation;
    return this;
  }
  setLastFrameDelay(lastFrameDelay) {
    this.lastFrameDelay = lastFrameDelay;
    return this;
  }
  setLastFrameOverlayUrl(lastFrameOverlayUrl) {
    this.lastFrameOverlayUrl = lastFrameOverlayUrl;
    return this;
  }
}
