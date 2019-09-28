## Classes

<dl>
<dt><a href="#MCLMegacoolConfig">MCLMegacoolConfig</a></dt>
<dd><p>Config</p>
</dd>
<dt><a href="#MCLPreviewConfig">MCLPreviewConfig</a></dt>
<dd><p>Config</p>
</dd>
<dt><a href="#MCLRecordingConfig">MCLRecordingConfig</a></dt>
<dd><p>Config</p>
</dd>
<dt><a href="#MCLShareConfig">MCLShareConfig</a></dt>
<dd><p>Config</p>
</dd>
<dt><a href="#MCLGifPreview">MCLGifPreview</a></dt>
<dd><p>React Native component that can be used to render a preview of a captured gif</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Megacool">Megacool</a></dt>
<dd><p>Megacool</p>
</dd>
</dl>

<a name="MCLMegacoolConfig"></a>

## MCLMegacoolConfig
Config

**Kind**: global class  
<a name="MCLMegacoolConfig+setBaseUrl"></a>

### mclMegacoolConfig.setBaseUrl([baseUrl]) ⇒ [<code>MCLMegacoolConfig</code>](#MCLMegacoolConfig)
The base url to use when building the absolute share urls.
This defaults to mgcl.co/<app-identifier>. The absolute url for a share will be https://<base-url><share-url>?_m=<referral-code>.
The url must have at least a host to be valid.
This is a premium feature that also requires configuration on the dashboard to work properly.

**Kind**: instance method of [<code>MCLMegacoolConfig</code>](#MCLMegacoolConfig)  

| Param | Type |
| --- | --- |
| [baseUrl] | <code>string</code> | 

<a name="MCLPreviewConfig"></a>

## MCLPreviewConfig
Config

**Kind**: global class  

* [MCLPreviewConfig](#MCLPreviewConfig)
    * [.setRecordingId([recordingId])](#MCLPreviewConfig+setRecordingId) ⇒ [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)
    * [.setPreviewFrame(previewFrame)](#MCLPreviewConfig+setPreviewFrame) ⇒ [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)

<a name="MCLPreviewConfig+setRecordingId"></a>

### mclPreviewConfig.setRecordingId([recordingId]) ⇒ [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)
Which recording to create a preview for.
Will use the default recording if undefined.

**Kind**: instance method of [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)  

| Param | Type |
| --- | --- |
| [recordingId] | <code>string</code> | 

<a name="MCLPreviewConfig+setPreviewFrame"></a>

### mclPreviewConfig.setPreviewFrame(previewFrame) ⇒ [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)
Where in the view the preview should be

**Kind**: instance method of [<code>MCLPreviewConfig</code>](#MCLPreviewConfig)  

| Param | Type |
| --- | --- |
| previewFrame | <code>Object</code> | 
| previewFrame.x | <code>number</code> | 
| previewFrame.y | <code>number</code> | 
| previewFrame.width | <code>number</code> | 
| previewFrame.height | <code>number</code> | 

<a name="MCLRecordingConfig"></a>

## MCLRecordingConfig
Config

**Kind**: global class  

* [MCLRecordingConfig](#MCLRecordingConfig)
    * [.setOverflowStrategy(overflowStrategy)](#MCLRecordingConfig+setOverflowStrategy) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setRecordingId(recordingId)](#MCLRecordingConfig+setRecordingId) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setMaxFrames(maxFrames)](#MCLRecordingConfig+setMaxFrames) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setFrameRate(frameRate)](#MCLRecordingConfig+setFrameRate) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setPlaybackFrameRate(playbackFrameRate)](#MCLRecordingConfig+setPlaybackFrameRate) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setPeakLocation(peakLocation)](#MCLRecordingConfig+setPeakLocation) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setLastFrameDelay(lastFrameDelay)](#MCLRecordingConfig+setLastFrameDelay) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
    * [.setLastFrameOverlayUrl(lastFrameOverlayUrl)](#MCLRecordingConfig+setLastFrameOverlayUrl) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)

<a name="MCLRecordingConfig+setOverflowStrategy"></a>

### mclRecordingConfig.setOverflowStrategy(overflowStrategy) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Define how recordings longer than the specified max frames should be compressed.
Note that if maxFrames is set to 1 you cannot use MCLOverflowStrategy.Timeline.
If this combination is set MCLOverflowStrategy.Latest will be used instead.

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| overflowStrategy | [<code>MCLOverflowStrategy</code>](#MCLOverflowStrategy) | 

<a name="MCLRecordingConfig+setRecordingId"></a>

### mclRecordingConfig.setRecordingId(recordingId) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Set an identifier for a recording, to be able to preview or share it again later.
To be able to store multiple completed recordings on disk you must also remember
to set setKeepCompletedRecordings(boolean) to true.

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| recordingId | <code>string</code> | 

<a name="MCLRecordingConfig+setMaxFrames"></a>

### mclRecordingConfig.setMaxFrames(maxFrames) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Set the max number of frames in a recording. If set to 1 the recording will be shared as an image instead of a gif or mp4.
If you set this to 1 you probably also want to use modalTitle(string) to change the default modal title so that
it doesn't say a GIF is about to be shared.
If the overflow strategy is set to MCLOverflowStrategy.Timeline, the resulting GIF might have a frame count
between 1.33x and 0.66x what is set as max.

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| maxFrames | <code>number</code> | 

<a name="MCLRecordingConfig+setFrameRate"></a>

### mclRecordingConfig.setFrameRate(frameRate) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
How often new frames should be recorded, in frames per second.
This is only relevant when you use startRecording(MCLRecordingConfig), as when you use
captureFrame(MCLRecordingConfig) the frames will be captured in the rate you call captureFrame.
The upper limit here will be restricted by how fast captures can occur on the given device, if set too high
we'll just capture as many frames per second as possible, and you'll see highly variable results between devices.
You probably shouldn't set this higher than 15-20 to avoid too much performance impact from the recording.
Calling this method will automatically update the playback frame rate to be 20% more than the value passed in for
frameRate, unless you've previously called setPlaybackFrameRate(number)

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| frameRate | <code>number</code> | 

<a name="MCLRecordingConfig+setPlaybackFrameRate"></a>

### mclRecordingConfig.setPlaybackFrameRate(playbackFrameRate) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
The frame rate the recording will be played back in. Should be identical to the recording frame rate set
with setFrameRate(number) to play back in real time, set higher to speed up the recording or lower to slow it down.
The max is 100fps, but you're unlikely to see browser play it back at that rate, thus you should keep the rate in
the 5-25 range to stay sane.

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| playbackFrameRate | <code>number</code> | 

<a name="MCLRecordingConfig+setPeakLocation"></a>

### mclRecordingConfig.setPeakLocation(peakLocation) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Set the location of the highest scoring moment (the peak) in a highlight recording.
Must be between 0 and 1, the default is 0.7. Set the score throughout the game with registerScoreChange().
The recording must be using the highlight overflow strategy for this to have any effect.
For example, in a recording with 10 frames, a peak location of 0.2 means that the highest scoring frame will occur
near the beginning at frame 2, and a peakLocation of 0.8 means that the peak will occur near the end at frame 8.

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| peakLocation | <code>number</code> | 

<a name="MCLRecordingConfig+setLastFrameDelay"></a>

### mclRecordingConfig.setLastFrameDelay(lastFrameDelay) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Set how long to pause the GIF on the last frame, in ms. Must be a non-negative integer, default is 1000.
If you pass 0, the delay will be the same as the other frames

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| lastFrameDelay | <code>number</code> | 

<a name="MCLRecordingConfig+setLastFrameOverlayUrl"></a>

### mclRecordingConfig.setLastFrameOverlayUrl(lastFrameOverlayUrl) ⇒ [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)
Set the image that will be overlayed on the last frame of the gif

**Kind**: instance method of [<code>MCLRecordingConfig</code>](#MCLRecordingConfig)  

| Param | Type |
| --- | --- |
| lastFrameOverlayUrl | <code>string</code> | 

<a name="MCLShareConfig"></a>

## MCLShareConfig
Config

**Kind**: global class  

* [MCLShareConfig](#MCLShareConfig)
    * [.setRecordingId(recordingId)](#MCLShareConfig+setRecordingId) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setMessage(message)](#MCLShareConfig+setMessage) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setFallbackImageUrl(fallbackImageUrl)](#MCLShareConfig+setFallbackImageUrl) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setUrl(url)](#MCLShareConfig+setUrl) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setData(data)](#MCLShareConfig+setData) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setPopoverSourceRect(popoverSourceRect)](#MCLShareConfig+setPopoverSourceRect) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setPopoverPermittedArrowDirections(popoverPermittedArrowDirections)](#MCLShareConfig+setPopoverPermittedArrowDirections) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setMessengerForceCompose(messengerForceCompose)](#MCLShareConfig+setMessengerForceCompose) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setStrategy(strategy)](#MCLShareConfig+setStrategy) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
    * [.setModalTitle(modalTitle)](#MCLShareConfig+setModalTitle) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)

<a name="MCLShareConfig+setRecordingId"></a>

### mclShareConfig.setRecordingId(recordingId) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Which recording to share. Only needed if you set a recordingId during capture

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| recordingId | <code>string</code> | 

<a name="MCLShareConfig+setMessage"></a>

### mclShareConfig.setMessage(message) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Set the predefined message that's used when calling presentShare()

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| message | <code>string</code> | 

<a name="MCLShareConfig+setFallbackImageUrl"></a>

### mclShareConfig.setFallbackImageUrl(fallbackImageUrl) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Set the path to the share's fallback image

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param |
| --- |
| fallbackImageUrl | 

<a name="MCLShareConfig+setUrl"></a>

### mclShareConfig.setUrl(url) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
The URL path to share.
You can encode any data you want into the URL parameters to ensure they are available to the recipient immediately when they open the app, as getUrl().
Note that only the path, query and fragment are used. The absolute share url will be https://<base-url><url>?_m=<referral-code>. The default base url is mgcl.co/<app-identifier>, but can be changed with baseUrl(Uri).

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="MCLShareConfig+setData"></a>

### mclShareConfig.setData(data) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Set extra data to attach to the share.
This can be used to include extra, trusted data in the share that is not visible in the URL. Note that even though the data is not immediately visible to the user like the URL is, it is not suitable for storing any sort of secret data, anyone with the URL of a share can get access to its data.

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 

<a name="MCLShareConfig+setPopoverSourceRect"></a>

### mclShareConfig.setPopoverSourceRect(popoverSourceRect) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
On iPads, where in the popoverSourceView the popover should be presented

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| popoverSourceRect | <code>Object</code> | 
| popoverSourceRect.x | <code>number</code> | 
| popoverSourceRect.y | <code>number</code> | 
| popoverSourceRect.width | <code>number</code> | 
| popoverSourceRect.height | <code>number</code> | 

<a name="MCLShareConfig+setPopoverPermittedArrowDirections"></a>

### mclShareConfig.setPopoverPermittedArrowDirections(popoverPermittedArrowDirections) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
On which sides of the popover the source arrow should be placed.
This can be used to force the popover to be over or under the popoverSourceRect.
Defaults to MCLPopoverArrowDirection.Any

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| popoverPermittedArrowDirections | [<code>MCLPopoverArrowDirection</code>](#MCLPopoverArrowDirection) | 

<a name="MCLShareConfig+setMessengerForceCompose"></a>

### mclShareConfig.setMessengerForceCompose(messengerForceCompose) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
When using shareToMessenger, you can force to show the composer view instead of replying directly to a friend.
More on Messenger’s reply flow here: https://developers.facebook.com/docs/messenger/ios#handling_calls_messenger

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| messengerForceCompose | <code>boolean</code> | 

<a name="MCLShareConfig+setStrategy"></a>

### mclShareConfig.setStrategy(strategy) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Set the SharingStrategy to be used when sharing to apps that support text or media, but not both.
Defaults to MCLSharingStrategy.Link

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| strategy | [<code>MCLSharingStrategy</code>](#MCLSharingStrategy) | 

<a name="MCLShareConfig+setModalTitle"></a>

### mclShareConfig.setModalTitle(modalTitle) ⇒ [<code>MCLShareConfig</code>](#MCLShareConfig)
Set the title of the modal that presents the apps the user can share to.
The default is "Share GIF".

**Kind**: instance method of [<code>MCLShareConfig</code>](#MCLShareConfig)  

| Param | Type |
| --- | --- |
| modalTitle | <code>string</code> | 

<a name="MCLGifPreview"></a>

## MCLGifPreview
React Native component that can be used to render a preview of a captured gif

**Kind**: global class  
<a name="MCLCaptureMethod"></a>

## MCLCaptureMethod : <code>enum</code>
**Kind**: global enum  
<a name="MCLFeature"></a>

## MCLFeature : <code>enum</code>
**Kind**: global enum  
<a name="MCLGIFColorTable"></a>

## MCLGIFColorTable : <code>enum</code>
**Kind**: global enum  
<a name="MCLOverflowStrategy"></a>

## MCLOverflowStrategy : <code>enum</code>
**Kind**: global enum  
<a name="MCLPopoverArrowDirection"></a>

## MCLPopoverArrowDirection : <code>enum</code>
**Kind**: global enum  
<a name="MCLSharingStrategy"></a>

## MCLSharingStrategy : <code>enum</code>
**Kind**: global enum  
<a name="Megacool"></a>

## Megacool
Megacool

**Kind**: global constant  

* [Megacool](#Megacool)
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
| [configBlock] | [<code>MCLMegacoolConfig</code>](#MCLMegacoolConfig) | 

<a name="Megacool.startRecording"></a>

### Megacool.startRecording([recordingConfig]) ⇒ <code>\*</code>
Start a recording of the screen with additional configuration

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [recordingConfig] | [<code>MCLRecordingConfig</code>](#MCLRecordingConfig) | 

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
| [recordingConfig] | [<code>MCLRecordingConfig</code>](#MCLRecordingConfig) | 
| [shareConfig] | [<code>MCLShareConfig</code>](#MCLShareConfig) | 

<a name="Megacool.presentShare"></a>

### Megacool.presentShare([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF with link and text through the default share view with channels like SMS, Twitter, Facebook etc.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | [<code>MCLShareConfig</code>](#MCLShareConfig) | 

<a name="Megacool.presentShareToMessages"></a>

### Megacool.presentShareToMessages([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF through an SMS message
Opens the default SMS composer view with a referral link and/or GIF, where the user can compose a message and send it to friends.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | [<code>MCLShareConfig</code>](#MCLShareConfig) | 

<a name="Megacool.presentShareToMail"></a>

### Megacool.presentShareToMail([shareConfig]) ⇒ <code>\*</code>
Share the recorded GIF through a mail message
Opens an email composer view with a referral link and/or GIF, where the user can compose an email and send it to friends.

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| [shareConfig] | [<code>MCLShareConfig</code>](#MCLShareConfig) | 

<a name="Megacool.captureFrame"></a>

### Megacool.captureFrame([recordingConfig], [forceAdd]) ⇒ <code>\*</code>
Capture a single frame of the provided View.

The captured frame is added to a buffer (default size is 50) and oldest frames will be overwritten if the method
gets called more than 50 times. The total number of frames can be set through maxFrames(). To set additional
configuration for capturing frames, use captureFrame().

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [recordingConfig] | [<code>MCLRecordingConfig</code>](#MCLRecordingConfig) |  | Configure the recording with RecordingConfig |
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
| captureMethod | [<code>MCLCaptureMethod</code>](#MCLCaptureMethod) |  | 
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
| shareConfig | [<code>MCLShareConfig</code>](#MCLShareConfig) | 

<a name="Megacool.setDefaultRecordingConfig"></a>

### Megacool.setDefaultRecordingConfig(recordingConfig)
Set the default recording config. This will be merged with the config
given to startRecording(MCLRecordingConfig) or captureFrame(MCLRecordingConfig), if any

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| recordingConfig | [<code>MCLRecordingConfig</code>](#MCLRecordingConfig) | 

<a name="Megacool.setGifColorTable"></a>

### Megacool.setGifColorTable(gifColorTable)
Set the color table to be used for the GIFs

**Kind**: static method of [<code>Megacool</code>](#Megacool)  

| Param | Type |
| --- | --- |
| gifColorTable | [<code>MCLGIFColorTable</code>](#MCLGIFColorTable) | 

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
| features | [<code>Array.&lt;MCLFeature&gt;</code>](#MCLFeature) | 

