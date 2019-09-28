import React from 'react';
import {
  StyleSheet,
  Dimensions,
  requireNativeComponent
} from 'react-native';

const { width, height } = Dimensions.get('window');

const NativeMCLGifPreview = requireNativeComponent('MCLGifPreview');

/**
 * React Native component that can be used to render a preview of a captured gif
 */
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
