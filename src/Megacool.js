import { NativeModules } from 'react-native';

const { RNMegacool } = NativeModules;

export default {
  start(appConfig = 'unset app config key', configBlock = {}) {
    return RNMegacool.start(appConfig, configBlock);
  },
  startRecording(recordingConfig) {
    return RNMegacool.startRecording(recordingConfig);
  },
  pauseRecording() {
    return RNMegacool.pauseRecording();
  },
  stopRecording() {
    return RNMegacool.stopRecording();
  },
  deleteRecording(recordingId) {
    return RNMegacool.deleteRecording(recordingId);
  },
  shareScreenshot(recordingConfig, shareConfig ) {
    return RNMegacool.shareScreenshot(recordingConfig, shareConfig);
  },
  presentShare(shareConfig) {
    return RNMegacool.presentShare(shareConfig);
  },
  presentShareToMessages(shareConfig) {
    return RNMegacool.presentShareToMessages(shareConfig);
  },
  presentShareToMail(shareConfig) {
    return RNMegacool.presentShareToMail(shareConfig);
  },
  captureFrame(recordingConfig, forceAdd = false) {
    return RNMegacool.captureFrame(recordingConfig, forceAdd);
  },
  registerScoreChange(scoreDelta = 0) {
    return RNMegacool.registerScoreChange(scoreDelta);
  },
  getNumberOfFrames() {
    return RNMegacool.getNumberOfFrames();
  },
  getCaptureMethod() {
    return RNMegacool.getCaptureMethod();
  },
  setCaptureMethod(captureMethod, scaleFactor = 0.5) {
    return RNMegacool.setCaptureMethod(captureMethod, scaleFactor);
  },
  getRecordingScore(recordingId) {
    return RNMegacool.getRecordingScore(recordingId);
  },
  getPreview(previewConfig) {
    return RNMegacool.getPreview(previewConfig);
  },
  getShares() {
    return RNMegacool.getShares();
  },
  getUserId() {
    return RNMegacool.getUserId();
  },
  setDefaultShareConfig(shareConfig) {
    return RNMegacool.setDefaultShareConfig(shareConfig);
  },
  setDefaultRecordingConfig(recordingConfig) {
    return RNMegacool.setDefaultRecordingConfig(recordingConfig);
  },
  setGifColorTable(gifColorTable) {
    return RNMegacool.setGifColorTable(gifColorTable);
  },
  setKeepCompletedRecordings(keepCompletedRecordings) {
    return RNMegacool.setKeepCompletedRecordings(keepCompletedRecordings);
  },
  getDebug() {
    return RNMegacool.getDebug();
  },
  setDebug(enabled) {
    return RNMegacool.setDebug(enabled);
  },
  disableFeatures(features) {
    return RNMegacool.disableFeatures(features);
  }
};
