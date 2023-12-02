import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

const images = [
    {
        id: 1,
        image: require('../assets/img/shirtwomen1.jpg'),
    },
    {
        id: 2,
        image: require('../assets/img/shirtwomen2.jpg'),
    },
    {
        id: 3,
        image: require('../assets/img/shirtwomen3.jpg'),
    },
    {
        id: 4,
        image: require('../assets/img/shirtwomen4.jpg'),
    },
]

export default function ProductScreen({ navigation }) {
    const _renderItem = ({ item }) => {
        return (
            <Image
                source={item.image}
                style={{
                    resizeMode: 'cover', width: '100%', height: 400,
                }}
            />
        );
    }
    return (
        <ScrollView>
            <View style={{
                width: '94%',
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                marginTop: 24, marginHorizontal: 12,
                zIndex: 3,
            }}>
                <TouchableOpacity>
                    <Ionicons
                        name="chevron-back"
                        color="#888"
                        size={32}
                    />
                </TouchableOpacity>
                <TextInput style={{
                    paddingHorizontal: 12, paddingVertical: 8,
                    width: 300,
                    backgroundColor: '#ccc', color: '#222',
                    borderRadius: 4,
                }} />
                <TouchableOpacity>
                    <Ionicons
                        name="cart-outline"
                        color="#888"
                        size={32}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name="share-social-outline"
                        color='#888'
                        size={32}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 24,
            }}>
                <AppIntroSlider
                    data={images}
                    renderItem={_renderItem}
                    showNextButton={false}
                    showDoneButton={false}
                />
            </View>
            <View style={{
                marginTop: 12, paddingHorizontal: 20, marginBottom: 12,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18, fontWeight: 'bold',
                            color: '#444',
                        }}>
                            Shirt Women 1
                        </Text>
                        <Text>
                            Limited Edition
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={28} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    marginTop: 4,
                    fontSize: 24, fontWeight: 'bold',
                    color: 'rgba(160, 120, 36, 1)',
                }}>$ 500.000</Text>
                <View>
                    <Text style={{
                        marginTop: 4,
                        color: '#666',
                    }}>
                        <Ionicons name='star' color="rgba(248, 190, 27, 1)" /> 4.9  400 Sold
                    </Text>
                </View>
            </View>
            <View style={{
                paddingHorizontal: 20, marginBottom: 12, paddingTop: 12,
                borderTopWidth: 6, borderColor: "#ccc",
            }}>
                <Text style={{
                    
                }}>Description Product</Text>
            </View>
        </ScrollView>
    );
}