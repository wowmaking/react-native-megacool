import { NativeModules } from 'react-native';

const { RNMegacool } = NativeModules;

import { MCLMegacoolConfig } from './configs/MCLMegacoolConfig';
import { MCLPreviewConfig } from './configs/MCLPreviewConfig';
import { MCLRecordingConfig } from './configs/MCLRecordingConfig';
import { MCLShareConfig } from './configs/MCLShareConfig';

import { MCLCaptureMethod } from './enums/MCLCaptureMethod';
import { MCLFeature } from './enums/MCLFeature';
import { MCLGIFColorTable } from './enums/MCLGIFColorTable';
import { MCLOverflowStrategy } from './enums/MCLOverflowStrategy';
import { MCLSharingStrategy } from './enums/MCLSharingStrategy';

export const Megacool = {
  /**
   * Initialize the SDK singleton. Call this as early as possible in your app startup cycle
   * @param {string} appConfig
   * @param {MCLMegacoolConfig} [configBlock]
   * @returns {*}
   */
  start(appConfig, configBlock) {
    return RNMegacool.start(appConfig, configBlock);
  },
  /**
   * Start a recording of the screen with additional configuration
   * @param {MCLRecordingConfig} [recordingConfig]
   * @returns {*}
   */
  startRecording(recordingConfig) {
    return RNMegacool.startRecording(recordingConfig);
  },
  /**
   * Pauses the current recording for resumption later
   * The frames captured so far will be stored on disk and can be resumed later by calling startRecording() or captureFrame().
   * @returns {*}
   */
  pauseRecording() {
    return RNMegacool.pauseRecording();
  },
  /**
   * Stop a recording of the screen
   * @returns {*}
   */
  stopRecording() {
    return RNMegacool.stopRecording();
  },
  /**
   * Will remove any frames of the recording in memory and on disk. Both completed and incomplete recordings will take
   * space on disk, so if you use multiple recordingIds it's smart to free up space for new recordings
   * @param {string} [recordingId]
   * @returns {*}
   */
  deleteRecording(recordingId) {
    return RNMegacool.deleteRecording(recordingId);
  },
  /**
   * Take a screenshot and share it immediately.
   * 
   * This is a helper around captureFrame() and presentShare() when you only need to share a screenshot
   * and not all the other bells and whistles for recordings.
   * @param {MCLRecordingConfig} [recordingConfig]
   * @param {MCLShareConfig} [shareConfig]
   * @returns {*}
   */
  shareScreenshot(recordingConfig, shareConfig ) {
    return RNMegacool.shareScreenshot(recordingConfig, shareConfig);
  },
  /**
   * Share the recorded GIF with link and text through the default share view with channels like SMS, Twitter, Facebook etc.
   * @param {MCLShareConfig} [shareConfig]
   * @returns {*}
   */
  presentShare(shareConfig) {
    return RNMegacool.presentShare(shareConfig);
  },
  /**
   * Share the recorded GIF through an SMS message
   * Opens the default SMS composer view with a referral link and/or GIF, where the user can compose a message and send it to friends.
   * @param {MCLShareConfig} [shareConfig]
   * @returns {*}
   */
  presentShareToMessages(shareConfig) {
    return RNMegacool.presentShareToMessages(shareConfig);
  },
  /**
   * Share the recorded GIF through a mail message
   * Opens an email composer view with a referral link and/or GIF, where the user can compose an email and send it to friends.
   * @param {MCLShareConfig} [shareConfig]
   * @returns {*}
   */
  presentShareToMail(shareConfig) {
    return RNMegacool.presentShareToMail(shareConfig);
  },
  /**
   * Capture a single frame of the provided View.
   *
   * The captured frame is added to a buffer (default size is 50) and oldest frames will be overwritten if the method
   * gets called more than 50 times. The total number of frames can be set through maxFrames(). To set additional
   * configuration for capturing frames, use captureFrame().
   * @param {MCLRecordingConfig} [recordingConfig] Configure the recording with RecordingConfig
   * @param [forceAdd=false] Override the overflow strategy's normal algorithm for whether a frame should be included in the recording or not. This is useful for crucial moments typically at the end of the recording, to ensure a final result or score is included. Note that this is only used when the recording is using the TIMELAPSE capture method
   * @returns {*}
   */
  captureFrame(recordingConfig, forceAdd = false) {
    return RNMegacool.captureFrame(recordingConfig, forceAdd);
  },
  /**
   * Registers score change on current frame
   * @param {number} [scoreDelta=0]
   * @returns {*}
   */
  registerScoreChange(scoreDelta = 0) {
    return RNMegacool.registerScoreChange(scoreDelta);
  },
  /**
   * Gets current number of frames in a recording
   * @param {string} [recordingId] test desc
   * @returns {Promise<number>} test dec
   */
  getNumberOfFrames(recordingId) {
    return RNMegacool.getNumberOfFrames(recordingId);
  },
  /**
   * Set how screen captures should be performed, using the default scale factor.
   * Call this as soon as possible after start. Calling this more than once leads to undefined behavior
   *
   * The default scale factor is 0.5 for screens whose longest side is < 1500 in length, or 0.25 for anything larger.
   * If the resulting dimensions are less than 200 for either width or height, then the scale factor is increased
   * to ensure a minimum of 200 or more in both dimensions. By passing in a value for ScaleFactor, you override
   * this behavior. It’s important to keep in mind that while a larger scale factor will produce encoded media
   * with a higher resolution, it will make captures and encoding slower, and also increase the size of the encoded
   * media, which will increase both disk and network usage. In any case, we will round up the scaled dimensions
   * to be divisible by 16, as this is a requirement for many MP4 encoders.
   * @param {MCLCaptureMethod} captureMethod
   * @param [scaleFactor=0.5]
   * @returns {*}
   */
  setCaptureMethod(captureMethod, scaleFactor = 0.5) {
    return RNMegacool.setCaptureMethod(captureMethod, scaleFactor);
  },
  /**
   * Get the total score for the given recording.
   * By observing this value you can learn what scores are average and which are good in your game, and use this to only prompt the user to share if it was a high-scoring recording, or promote high-scoring recordings in the game or use it to set the share text.
   * The score will be 0 if the recording doesn't use the highlight overflow strategy, or if registerScoreChange() has never been called.
   * @param {string} [recordingId]
   * @returns {Promise<number>}
   */
  getRecordingScore(recordingId) {
    return RNMegacool.getRecordingScore(recordingId);
  },
  /**
   * Get the 25 most recent shares.
   * Sent share objects are available so you can use their state to perform specific actions, like showing how many shares have been sent by a user and how many that led to INSTALLED. The locally cached shares will be returned immediately and are useful for determining how many shares have been sent. The server will be queried for an updated state of the shares, passing them to the callback if given. This is useful to get the latest ShareState for the shares.
   * Since this causes a network request this method also serves to check for new Events for the user.
   * @returns {Promise<Array>}
   */
  getShares() {
    return RNMegacool.getShares();
  },
  /**
   * Get the inviter id for this user/app
   * @returns {Promise<string>}
   */
  getUserId() {
    return RNMegacool.getUserId();
  },
  /**
   * Set the default share config. This will be merged with the config given to presentShare(MCLShareConfig), if any.
   * @param {MCLShareConfig} shareConfig 
   */
  setDefaultShareConfig(shareConfig) {
    return RNMegacool.setDefaultShareConfig(shareConfig);
  },
  /**
   * Set the default recording config. This will be merged with the config
   * given to startRecording(MCLRecordingConfig) or captureFrame(MCLRecordingConfig), if any
   * @param {MCLRecordingConfig} recordingConfig 
   */
  setDefaultRecordingConfig(recordingConfig) {
    return RNMegacool.setDefaultRecordingConfig(recordingConfig);
  },
  /**
   * Set the color table to be used for the GIFs
   * @param {MCLGIFColorTable} gifColorTable 
   */
  setGifColorTable(gifColorTable) {
    return RNMegacool.setGifColorTable(gifColorTable);
  },
  /**
   * Set whether completed recordings should be kept around for later, default is false.
   * This acts as a regular disk cleanup and slight optimization if you don't intend to keep completed recordings around to be shared later.
   * If you do, set this to true, and use deleteRecording(String) to delete recordings from disk that you don't need anymore.
   * A completed recording will still be overwritten if a new recording is started with the same recordingId.
   * @param {boolean} keepCompletedRecordings 
   */
  setKeepCompletedRecordings(keepCompletedRecordings) {
    return RNMegacool.setKeepCompletedRecordings(keepCompletedRecordings);
  },
  /**
   * Enables writing debug info from Megacool to logcat and saving call traces to submit to the core developers. 
   * @param {boolean} enabled 
   */
  setDebug(enabled) {
    return RNMegacool.setDebug(enabled);
  },
  /**
   * Disable a set of features
   * If something fails or is not desired on a class of devices, some features can be disabled remotely through the dashboard.
   * To be able to test behavior when this is the case, or to always force a given feature to be disabled, you can call this
   * function with a list of the features you want to disable.
   * Features disabled through this call will not be visible or configurable through the dashboard. A feature will be disabled
   * if it’s disabled either through this call or remotely or both.
   * @param {Array<MCLFeature>} features 
   */
  disableFeatures(features) {
    return RNMegacool.disableFeatures(features);
  }
};
