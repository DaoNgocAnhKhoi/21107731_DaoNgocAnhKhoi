import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Appbar, Avatar, Text, TextInput, Button, Card, Chip, BottomNavigation } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Electronics() {
  // State để điều khiển điều hướng dưới
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'magnify' },
    { key: 'favorites', title: 'Favorites', icon: 'heart' },
    { key: 'account', title: 'Account', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: ElectronicsContent,
    search: () => <View><Text>Search</Text></View>,
    favorites: () => <View><Text>Favorites</Text></View>,
    account: () => <View><Text>Account</Text></View>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, color }) => (
        <MaterialCommunityIcons name={route.icon} color={color} size={24} />
      )}
    />
  );
}

function ElectronicsContent() {
  const [phoneList, setPhoneList] = React.useState([]);
  const [originalPhoneList, setOriginalPhoneList] = useState([]); 
  const [category, setCategory] = useState('phone');
  const [type, setType] = useState('Best Sales');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (category === 'phone') {
      axios.get('https://6459b04f95624ceb21ed8ca9.mockapi.io/phone')
      .then(response => {
        setPhoneList(response.data);
        setOriginalPhoneList(response.data); 
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [category]);

  useEffect(() => {
      if (type === 'Best Sales') {
        setPhoneList(originalPhoneList.filter((product) => product.type === 'Best Sales'));
      } else if (type === 'Best Matched') {
        setPhoneList(originalPhoneList.filter((product) => product.type === 'Best Matched'));
      } else if (type === 'Popular') {
        setPhoneList(originalPhoneList.filter((product) => product.type === 'Popular'));
      }
      setShowAll(false);
  }, [type]);

  const productsToShow = showAll ? phoneList : phoneList.slice(0, 3);

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {/* Appbar với hình đại diện */}
      <Appbar.Header>
        <Appbar.Content title="Electronics" />
        <Avatar.Image size={36} source={require('../assets/dienthoai-1.jpg')} />
      </Appbar.Header>

      {/* Banner */}
      <Image
        source={require('../assets/banner.jpg')}
        style={{ width: '100%', height: 200, marginBottom: 10 }}
      />

      {/* Thanh tìm kiếm */}
      <TextInput
        mode="outlined"
        placeholder="Search"
        left={<TextInput.Icon icon="magnify" />}
        style={{ marginVertical: 10 }}
      />



      {/* Danh mục với các thẻ (Chips) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <Chip icon="phone" style={{ marginRight: 8 }} onPress={() => {
          setCategory('phone');
        }}>Smartphones</Chip>
        <Chip icon="laptop" style={{ marginRight: 8 }} onPress={() => {
          setCategory('laptop');
        }}>Laptops</Chip>
        <Chip icon="tablet" style={{ marginRight: 8 }} onPress={() => {
          setCategory('tablet');
        }}>Tablets</Chip>
        <Button onPress={() => {}}>See all</Button>
      </ScrollView>

      {/* Tabs cho các sản phẩm phổ biến */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Button mode="contained" style={{ flex: 1, marginHorizontal: 2 }} onPress={() => {
          setType('Best Sales');
        }}>Best Sales</Button>
        <Button mode="outlined" style={{ flex: 1, marginHorizontal: 2 }} onPress={() => {
          setType('Best Matched');
        }}>Best Matched</Button>
        <Button mode="outlined" style={{ flex: 1, marginHorizontal: 2 }} onPress={() => {
          setType('Popular');
        }}>Popular</Button>
      </View>

      {/* Danh sách các sản phẩm */}
      {productsToShow.map((product, index) => (
        <Card key={index} style={{ marginVertical: 8 }}>
          <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{uri: product.image}} style={{ width: 50, height: 50, marginRight: 16 }} />
            <View style={{ flex: 1 }}>
              <Text>{product.name}</Text>
              <Text>{product.rating}</Text>
            </View>
            <Text>${product.price}</Text>
          </Card.Content>
        </Card>
      ))}

      {/* Nút "See All" */}
      {phoneList.length > 3 && (
        <Button
          mode="text"
          onPress={() => setShowAll(!showAll)}
          style={{ marginVertical: 10 }}
        >
          {showAll ? "Collapse" : "See All"}
        </Button>
      )}
    </ScrollView>
  );
}


