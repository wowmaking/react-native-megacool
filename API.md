<a name="Megacool"></a>

## Megacool : <code>Object</code>
**Kind**: global constant  

* [Megacool](#Megacool) : <code>Object</code>
    * [.start(appConfig, [configBlock])](#Megacool.start) ⇒ <code>\*</code>
    * [.startRecording([recordingConfig])](#Megacool.startRecording) ⇒ <code>\*</code>
    * [.pauseRecording()](#Megacool.pauseRecording) ⇒ <code>\*</code>
    * [.stopRecording()](#Megacool.stopRecording) ⇒ <code>\*</code>
    * [.deleteRecording([recordingId])](#Megacool.deleteRecording) ⇒ <code>\*</code>
    * [.shareScreenshot([recordingConfig], [shareConfig])](#Megacool.shareScreenshot) ⇒ <code>\*</code>
    * [.presentShare([shareConfig])](#Megacool.presentShare) ⇒ <code>\*</code>
    * [.presentShareToMessages([shareConfig])](#Megacool.presentShareToMessages) ⇒ <code>\*</code>
    * [.presentShareToMail([shareConfig])](#Megacool.presentShareToMail) ⇒ <code>\*</code>
    * [.captureFrame([recordingConfig], [forceAdd])](#Megacool.captureFrame) ⇒ <code>\*</code>
    * [.registerScoreChange([scoreDelta])](#Megacool.registerScoreChange) ⇒ <code>\*</code>
    * [.getNumberOfFrames([recordingId])](#Megacool.getNumberOfFrames) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.setCaptureMethod(captureMethod, [scaleFactor])](#Megacool.setCaptureMethod) ⇒ <code>\*</code>
    * [.getRecordingScore([recordingId])](#Megacool.getRecordingScore) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.getShares()](#Megacool.getShares) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.getUserId()](#Megacool.getUserId) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.setDefaultShareConfig(shareConfig)](#Megacool.setDefaultShareConfig)
    * [.setDefaultRecordingConfig(recordingConfig)](#Megacool.setDefaultRecordingConfig)
    * [.setGifColorTable(gifColorTable)](#Megacool.setGifColorTable)
    * [.setKeepCompletedRecordings(keepCompletedRecordings)](#Megacool.setKeepCompletedRecordings)
    * [.setDebug(enabled)](#Megacool.setDebug)
    * [.disableFeatures(features)](#Megacool.disableFeatures)

<a name="Megacool.start"></a>

### Megacool.start(appConfig, [configBlock]) ⇒ <code>\*</code>
Initialize the SDK singleton. Call this as early as possible in your app startup cycle

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| appConfig | <code>string</code> | 
| [configBlock] | <code>MCLMegacoolConfig</code> | 

<a name="Megacool.startRecording"></a>

### Megacool.startRecording([recordingConfig]) ⇒ <code>\*</code>
Start a recording of the screen with additional configuration

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [recordingConfig] | <code>MCLRecordingConfig</code> | 

<a name="Megacool.pauseRecording"></a>

### Megacool.pauseRecording() ⇒ <code>\*</code>
Pauses the current recording for resumption later
The frames captured so far will be stored on disk and can be resumed later by calling startRecording() or captureFrame().

**Kind**: static method of [<code>Megacool</code>](#Megacool)  
<a name="Megacool.stopRecording"></a>

### Megacool.stopRecording() ⇒ <code>\*</code>
Stop a recording of the screen

**Kind**: static method of [<code>Megacool</code>](#Megacool)  
<a name="Megacool.deleteRecording"></a>

### Megacool.deleteRecording([recordingId]) ⇒ <code>\*</code>
Will remove any frames of the recording in memory and on disk. Both completed and incomplete recordings will take
space on disk, so if you use multiple recordingIds it's smart to free up space for new recordings

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [recordingId] | <code>string</code> | 

<a name="Megacool.shareScreenshot"></a>

### Megacool.shareScreenshot([recordingConfig], [shareConfig]) ⇒ <code>\*</code>
Take a screenshot and share it immediately.

This is a helper around captureFrame() and presentShare() when you only need to share a screenshot
and not all the other bells and whistles for recordings.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [recordingConfig] | <code>MCLRecordingConfig</code> | 
| [shareConfig] | <code>MCLShareConfig</code> | 

<a name="Megacool.presentShare"></a>

### Megacool.presentShare([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF with link and text through the default share view with channels like SMS, Twitter, Facebook etc.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | <code>MCLShareConfig</code> | 

<a name="Megacool.presentShareToMessages"></a>

### Megacool.presentShareToMessages([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF through an SMS message
Opens the default SMS composer view with a referral link and/or GIF, where the user can compose a message and send it to friends.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | <code>MCLShareConfig</code> | 

<a name="Megacool.presentShareToMail"></a>

### Megacool.presentShareToMail([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF through a mail message
Opens an email composer view with a referral link and/or GIF, where the user can compose an email and send it to friends.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | <code>MCLShareConfig</code> | 

<a name="Megacool.captureFrame"></a>

### Megacool.captureFrame([recordingConfig], [forceAdd]) ⇒ <code>\*</code>
Capture a single frame of the provided View.

The captured frame is added to a buffer (default size is 50) and oldest frames will be overwritten if the method
gets called more than 50 times. The total number of frames can be set through maxFrames(). To set additional
configuration for capturing frames, use captureFrame().

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [recordingConfig] | <code>MCLRecordingConfig</code> |  | Configure the recording with RecordingConfig |
| [forceAdd] |  | <code>false</code> | Override the overflow strategy's normal algorithm for whether a frame should be included in the recording or not. This is useful for crucial moments typically at the end of the recording, to ensure a final result or score is included. Note that this is only used when the recording is using the TIMELAPSE capture method |

<a name="Megacool.registerScoreChange"></a>

### Megacool.registerScoreChange([scoreDelta]) ⇒ <code>\*</code>
Registers score change on current frame

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type | Default |
| --- | --- | --- |
| [scoreDelta] | <code>number</code> | <code>0</code> | 

<a name="Megacool.getNumberOfFrames"></a>

### Megacool.getNumberOfFrames([recordingId]) ⇒ <code>Promise.&lt;number&gt;</code>
Gets current number of frames in a recording

**Kind**: static method of [<code>Megacool</code>](#Megacool)  
**Returns**: <code>Promise.&lt;number&gt;</code> - test dec  

| Param | Type | Description |
| --- | --- | --- |
| [recordingId] | <code>string</code> | test desc |

<a name="Megacool.setCaptureMethod"></a>

### Megacool.setCaptureMethod(captureMethod, [scaleFactor]) ⇒ <code>\*</code>
Set how screen captures should be performed, using the default scale factor.
Call this as soon as possible after start. Calling this more than once leads to undefined behavior

The default scale factor is 0.5 for screens whose longest side is < 1500 in length, or 0.25 for anything larger.
If the resulting dimensions are less than 200 for either width or height, then the scale factor is increased
to ensure a minimum of 200 or more in both dimensions. By passing in a value for ScaleFactor, you override
this behavior. It’s important to keep in mind that while a larger scale factor will produce encoded media
with a higher resolution, it will make captures and encoding slower, and also increase the size of the encoded
media, which will increase both disk and network usage. In any case, we will round up the scaled dimensions
to be divisible by 16, as this is a requirement for many MP4 encoders.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type | Default |
| --- | --- | --- |
| captureMethod | <code>MCLCaptureMethod</code> |  | 
| [scaleFactor] |  | <code>0.5</code> | 

<a name="Megacool.getRecordingScore"></a>

### Megacool.getRecordingScore([recordingId]) ⇒ <code>Promise.&lt;number&gt;</code>
Get the total score for the given recording.
By observing this value you can learn what scores are average and which are good in your game, and use this to only prompt the user to share if it was a high-scoring recording, or promote high-scoring recordings in the game or use it to set the share text.
The score will be 0 if the recording doesn't use the highlight overflow strategy, or if registerScoreChange() has never been called.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [recordingId] | <code>string</code> | 

<a name="Megacool.getShares"></a>

### Megacool.getShares() ⇒ <code>Promise.&lt;Array&gt;</code>
Get the 25 most recent shares.
Sent share objects are available so you can use their state to perform specific actions, like showing how many shares have been sent by a user and how many that led to INSTALLED. The locally cached shares will be returned immediately and are useful for determining how many shares have been sent. The server will be queried for an updated state of the shares, passing them to the callback if given. This is useful to get the latest ShareState for the shares.
Since this causes a network request this method also serves to check for new Events for the user.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  
<a name="Megacool.getUserId"></a>

### Megacool.getUserId() ⇒ <code>Promise.&lt;string&gt;</code>
Get the inviter id for this user/app

**Kind**: static method of [<code>Megacool</code>](#Megacool)  
<a name="Megacool.setDefaultShareConfig"></a>

### Megacool.setDefaultShareConfig(shareConfig)
Set the default share config. This will be merged with the config given to presentShare(MCLShareConfig), if any.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| shareConfig | <code>MCLShareConfig</code> | 

<a name="Megacool.setDefaultRecordingConfig"></a>

### Megacool.setDefaultRecordingConfig(recordingConfig)
Set the default recording config. This will be merged with the config
given to startRecording(MCLRecordingConfig) or captureFrame(MCLRecordingConfig), if any

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| recordingConfig | <code>MCLRecordingConfig</code> | 

<a name="Megacool.setGifColorTable"></a>

### Megacool.setGifColorTable(gifColorTable)
Set the color table to be used for the GIFs

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| gifColorTable | <code>MCLGIFColorTable</code> | 

<a name="Megacool.setKeepCompletedRecordings"></a>

### Megacool.setKeepCompletedRecordings(keepCompletedRecordings)
Set whether completed recordings should be kept around for later, default is false.
This acts as a regular disk cleanup and slight optimization if you don't intend to keep completed recordings around to be shared later.
If you do, set this to true, and use deleteRecording(String) to delete recordings from disk that you don't need anymore.
A completed recording will still be overwritten if a new recording is started with the same recordingId.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| keepCompletedRecordings | <code>boolean</code> | 

<a name="Megacool.setDebug"></a>

### Megacool.setDebug(enabled)
Enables writing debug info from Megacool to logcat and saving call traces to submit to the core developers.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| enabled | <code>boolean</code> | 

<a name="Megacool.disableFeatures"></a>

### Megacool.disableFeatures(features)
Disable a set of features
If something fails or is not desired on a class of devices, some features can be disabled remotely through the dashboard.
To be able to test behavior when this is the case, or to always force a given feature to be disabled, you can call this
function with a list of the features you want to disable.
Features disabled through this call will not be visible or configurable through the dashboard. A feature will be disabled
if it’s disabled either through this call or remotely or both.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| features | <code>Array.&lt;MCLFeature&gt;</code> | 

