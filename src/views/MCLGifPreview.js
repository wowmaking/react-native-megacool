import React from 'react';
import {
  StyleSheet,
  Dimensions,
  requireNativeComponent
} from 'react-native';

const { width, height } = Dimensions.get('window');

const NativeMCLGifPreview = requireNativeComponent('MCLGifPreview');

export class MCLGifPreview extends React.PureComponent {
  render() {
    return (
      <NativeMCLGifPreview
        {...this.props}
        style={[this.props.style, styles.gif]}
      />
    );
  }
}

const styles = StyleSheet.create({
  gif: {
    aspectRatio: width / height
  }
});
