import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Megacool, {
  MCLOverflowStrategy,
  MCLCaptureMethod,
  MCLSharingStrategy,
  MCLGIFColorTable,
  MCLFeature,
  MCLPreviewConfig,
  MCLShareConfig,
  MCLRecordingConfig
} from "@wowmaking/react-native-megacool";

const Button = ({ text, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);

const RECORDING_ID = "REC_1";

export default class App extends Component {
  state = {
    shares: [],
    captureMethod: "n/a",
    numberOfFrames: "n/a",
    debugEnabled: "n/a",
    recordingScore: "n/a",
    userId: "n/a"
  };

  componentDidMount() {
    setInterval(() => {
      // Promise.all([
      //   Megacool.getNumberOfFrames(),
      //   Megacool.getCaptureMethod(),
      //   Megacool.getShares(),
      //   Megacool.getDebug(),
      //   Megacool.getRecordingScore(),
      //   Megacool.getUserId()
      // ])
      //   .then(response => {
      //     void response;
      //     debugger;
      //   /*  const [
      //       numberOfFrames,
      //       captureMethod,
      //       shares,
      //       debugEnabled,
      //       userId
      //     ] = response;
      //
      //     debugger;
      //
      //     this.setState({
      //       numberOfFrames,
      //       captureMethod,
      //       shares,
      //       debugEnabled,
      //       userId
      //     });*/
      //   })
      //   .catch(console.error);

      Megacool.getNumberOfFrames().then(numberOfFrames => {
        this.setState({
          numberOfFrames,
        });
      });

      Megacool.getCaptureMethod().then(captureMethod => {
        this.setState({
          captureMethod,
        });
      });


      Megacool.getShares().then(shares => {
        this.setState({
          shares,
        })
      });

      Megacool.getDebug().then(debugEnabled => {
        this.setState({
          debugEnabled: debugEnabled ? 'ON' : 'OFF',
        })
      });

      Megacool.getRecordingScore().then(recordingScore => {
        this.setState({
          recordingScore,
        });
      });


      Megacool.getUserId().then(userId => {
        this.setState({
          userId,
        });
      });
    }, 1000);
  }

  handleStartRecording = () => {
    Megacool.startRecording(
      new MCLRecordingConfig()
        .setRecordingId(RECORDING_ID)
        .setOverflowStrategy(MCLOverflowStrategy.Highlight)
        .setMaxFrames(50)
        .setFrameRate(10)
        .setPlaybackFrameRate(10)
    );
    Megacool.startRecording();
  };

  handlePauseRecording = () => {
    Megacool.pauseRecording();
  };

  handleStopRecording = () => {
    Megacool.stopRecording();
  };

  handleDeleteRecording = () => {
    Megacool.deleteRecording(RECORDING_ID);
  };

  handlePresentShare = () => {
    Megacool.presentShare(
      new MCLShareConfig().setStrategy(MCLSharingStrategy.Media)
    );
  };

  handlePresentShareToMessages = () => {
    Megacool.presentShareToMessages();
  };

  handlePresentShareToMail = () => {
    Megacool.presentShareToMail();
  };

  handleCaptureFrame = () => {
    Megacool.captureFrame(
      {
        overflowStrategy: MCLOverflowStrategy.Latest
      },
      true
    );
  };

  handleRegisterScoreChange0_5 = () => {
    Megacool.registerScoreChange(0.5);
  };

  handleRegisterScoreChange2 = () => {
    Megacool.registerScoreChange(2);
  };

  handleShareScreenshot = () => {
    Megacool.shareScreenshot();
  };

  handleSetCaptureMethodView = () => {
    Megacool.setCaptureMethod(MCLCaptureMethod.View);
  };

  handleSetCaptureMethodMetal = () => {
    Megacool.setCaptureMethod(MCLCaptureMethod.Metal);
  };

  handleSetCaptureMethodOpenGLES2 = () => {
    Megacool.setCaptureMethod(MCLCaptureMethod.OpenGLES2);
  };

  handleSetCaptureMethodOpenGLES3 = () => {
    Megacool.setCaptureMethod(MCLCaptureMethod.OpenGLES3);
  };

  handleGetPreview = () => {
    Megacool.getPreview();
    // Megacool.getPreview(
    //   new MCLPreviewConfig()
    //     .setRecordingId(RECORDING_ID)
    //     .setPreviewFrame({ x: 10, y: 10, width: 300, height: 300 })
    // );
  };

  handleSetDefaultShareConfig = () => {
    Megacool.setDefaultShareConfig(
      new MCLShareConfig().setStrategy(MCLSharingStrategy.Media)
    );
  };

  handleSetDefaultRecordingConfig = () => {
    Megacool.setDefaultRecordingConfig(
      new MCLRecordingConfig().setPeakLocation(0.5)
    );
  };

  handleSetGifColorTableToDynamic = () => {
    Megacool.setGifColorTable(MCLGIFColorTable.Dynamic);
  };
  handleSetGifColorTableToFixed = () => {
    Megacool.setGifColorTable(MCLGIFColorTable.Fixed);
  };
  handleSetGifColorTableToAnalyzeFirst = () => {
    Megacool.setGifColorTable(MCLGIFColorTable.AnalyzeFirst);
  };

  handleSetKeepCompletedRecordingsOn = () => {
    Megacool.setKeepCompletedRecordings(true);
  };
  handleSetKeepCompletedRecordingsOff = () => {
    Megacool.setKeepCompletedRecordings(false);
  };

  handleSetDebugOn = () => {
    Megacool.setDebug(true);
  };
  handleSetDebugOff = () => {
    Megacool.setDebug(false);
  };

  handleDisableFeatureNone = () => {
    Megacool.disableFeatures([MCLFeature.None]);
  };

  handleDisableFeatureAnalytics = () => {
    Megacool.disableFeatures([MCLFeature.Analytics]);
  };

  handleDisableAllFeatures = () => {
    Megacool.disableFeatures([
      MCLFeature.Gifs,
      MCLFeature.Analytics,
      MCLFeature.GifUpload,
      MCLFeature.GifPersistency,
      MCLFeature.ShareNoCopyGif,
      MCLFeature.ShareCopyLink
    ]);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.group}>
            <Text style={styles.title}>Status</Text>
            <View style={styles.textContent}>
              <Text># of frames: {this.state.numberOfFrames}</Text>
              <Text>Shares sent: {this.state.shares.length}</Text>
              <Text>Debug: {this.state.debugEnabled}</Text>
              <Text>Recording score: {this.state.recordingScore}</Text>
              <Text>User ID: {this.state.userId}</Text>
              <Text>Capture method: {this.state.captureMethod}</Text>
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Recording</Text>
            <View style={styles.row}>
              <Button text={"Start"} onPress={this.handleStartRecording} />
              <Button text={"Pause"} onPress={this.handlePauseRecording} />
              <Button text={"Stop"} onPress={this.handleStopRecording} />
              <Button text={"Delete"} onPress={this.handleDeleteRecording} />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Share</Text>
            <View style={styles.row}>
              <Button text={"Default"} onPress={this.handlePresentShare} />
              <Button
                text={"to Messages"}
                onPress={this.handlePresentShareToMessages}
              />
              <Button
                text={"to Mail"}
                onPress={this.handlePresentShareToMail}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>
              Capture method
            </Text>
            <View style={styles.row}>
              <Button text={"View"} onPress={this.handleSetCaptureMethodView} />
              <Button
                text={"Metal"}
                onPress={this.handleSetCaptureMethodMetal}
              />
              <Button
                text={"OpenGLES2"}
                onPress={this.handleSetCaptureMethodOpenGLES2}
              />
              <Button
                text={"OpenGLES3"}
                onPress={this.handleSetCaptureMethodOpenGLES3}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Set default config</Text>
            <View style={styles.row}>
              <Button
                text={"Share"}
                onPress={this.handleSetDefaultShareConfig}
              />
              <Button
                text={"Recording"}
                onPress={this.handleSetDefaultRecordingConfig}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Set GIF color table</Text>
            <View style={styles.row}>
              <Button
                text={"Dynamic"}
                onPress={this.handleSetGifColorTableToDynamic}
              />
              <Button
                text={"Fixed"}
                onPress={this.handleSetGifColorTableToFixed}
              />
              <Button
                text={"AnalyzeFirst"}
                onPress={this.handleSetGifColorTableToAnalyzeFirst}
              />
            </View>
          </View>
          <View style={[styles.group, styles.row]}>
            <Button text={"Capture Frame"} onPress={this.handleCaptureFrame} />
            <Button
              text={"Share screenshot"}
              onPress={this.handleShareScreenshot}
            />
            <Button text={"Get preview"} onPress={this.handleGetPreview} />
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Scoring</Text>
            <View style={styles.row}>
              <Button
                text={"Register score 0.5"}
                onPress={this.handleRegisterScoreChange0_5}
              />
              <Button
                text={"Register score 2"}
                onPress={this.handleRegisterScoreChange2}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Keep completed recordings</Text>
            <View style={styles.row}>
              <Button
                text={"true"}
                onPress={this.handleSetKeepCompletedRecordingsOn}
              />
              <Button
                text={"false"}
                onPress={this.handleSetKeepCompletedRecordingsOff}
              />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Debug</Text>
            <View style={styles.row}>
              <Button text={"ON"} onPress={this.handleSetDebugOn} />
              <Button text={"OFF"} onPress={this.handleSetDebugOff} />
            </View>
          </View>
          <View style={styles.group}>
            <Text style={styles.title}>Disable features</Text>
            <View style={styles.row}>
              <Button text={"None"} onPress={this.handleDisableFeatureNone} />
              <Button
                text={"Analyticss"}
                onPress={this.handleDisableFeatureAnalytics}
              />
              <Button text={"All"} onPress={this.handleDisableAllFeatures} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4fb"
  },
  scrollViewContainer: {
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#ee4395",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 3
  },
  textContent: {
    padding: 3,
    alignItems: "center"
  },
  group: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#ffbad0",
    width: "95%"
  },
  title: {
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "#e6e1e4",
    textAlign: "center",
    padding: 3
  }
});
