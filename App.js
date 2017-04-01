import React from 'react';
import { Button, Text, View } from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

const Landing = props => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      marginTop: 24,
    }}>
    <Button
      onPress={() => props.navigation.navigate('DrawerOpen')}
      title="Open Drawer"
    />
    <Text>or swipe from the edge</Text>
  </View>
);

// const App = DrawerNavigator({ Landing: { screen: Landing } });
class App extends React.Component {
  drawer = null;

  render() {
    return (
      <DrawerLayout
        drawerWidth={300}
        ref={ref => this.drawer = ref}
        renderNavigationView={() => (
          <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <Text>Foo</Text>
          </View>
        )}>
        <Landing navigation={{ navigate: () => this.drawer.openDrawer() }} />
      </DrawerLayout>
    );
  }
}

export default App;
