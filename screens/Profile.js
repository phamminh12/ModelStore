import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 30,
                justifyContent: 'space-between',
                width: '92%',
                marginLeft: 20
            }}>
                <Text style={{
                    fontSize: 19,
                    fontWeight: 700,
                }}>
                    Profile
                </Text>
                <View style={{
                    flexDirection:'row'
                }}>
                <TouchableOpacity style={{
                }}>
                    <Ionicons
                        name="notifications-circle-outline"
                        color="#888"
                        size={28}
                        style={{
                            marginRight: 20,
                        }}

                    />
                    
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {()=> navigation.navigate('Cart')}
                    style={{
                }}>                 
                    <Ionicons
                        name="cart-outline"
                        color="#888"
                        size={30}

                    />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{
                height: 50,
            }}>
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image source={require('../assets/img/shirtwomen4.jpg')} style={{
                    resizeMode: 'contain',
                    width: 90,
                    height: 90,
                    marginHorizontal: 20,

                    borderRadius: 20,

                }} />
                <View style={{
                    width: '70%'
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 600,
                        height: 30,
                        marginTop: 10,

                    }}>
                        Karim Sujatmiko
                    </Text>
                    <Text style={{
                        color: '#888',
                        height: 30,
                        marginBottom: 15,
                    }}>
                        Standart Member
                    </Text>

                </View>

            </View>
            <View style={{
                height: 30,
            }}>

            </View>
            <View style={{
                marginLeft: 20,
                width: '90%',
                borderBottomWidth: 2,
                borderBottomColor: '#EFEFF0',
                height: 140,
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: 700,



                }}>
                    Personal Information
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 25,
                }}>
                    <Text style={{
                        color: '#888'
                    }}>
                        Name
                    </Text>
                    <Text style={{
                        color: '#888'
                    }}>
                        Karim Sujatmiko
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 25,
                }}>
                    <Text style={{
                        color: '#888'
                    }}>
                        Phone
                    </Text>
                    <Text style={{
                        color: '#888'
                    }}>
                        (505) 555-0125
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 25,
                }}>
                    <Text style={{
                        color: '#888'
                    }}>
                        Email
                    </Text>
                    <Text style={{
                        color: '#888'
                    }}>
                        karjo@email.me
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 25,
                }}>
                    <Text style={{
                        color: '#888'
                    }}>
                        Address
                    </Text>
                    <Text style={{
                        color: '#888'
                    }}>
                        2464 Royal Ln. Mesa
                        New Jersey 45463
                    </Text>
                </View>
            </View>
            <View style={{
                marginTop: 15,
                width: '100%',
                height: 45,
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFF0'


            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 19,
                        fontWeight: 400,
                    }}>

                        Notification
                    </Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="chevron-forward"
                            color="#c2c2c6"
                            size={36}
                        />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginTop: 15,
                width: '100%',
                height: 90,
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFF0'


            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 19,
                        fontWeight: 400,
                    }}>

                        Find Store  
                    </Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="chevron-forward"
                            color="#c2c2c6"
                            size={36}
                        />

                    </TouchableOpacity>
                    
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 19,
                        fontWeight: 400,
                    }}>

                        Help Center 
                    </Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="chevron-forward"
                            color="#c2c2c6"
                            size={36}
                        />

                    </TouchableOpacity>
                    
                </View>
                
            </View>
            <View style={{
                marginTop: 15,
                width: '100%',
                height: 45,
                borderBottomWidth: 4,
                borderBottomColor: '#EFEFF0'


            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    
                }}>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 19,
                        fontWeight: 400,
                    }}>

                        Settings
                    </Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="chevron-forward"
                            color="#c2c2c6"
                            size={36}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}