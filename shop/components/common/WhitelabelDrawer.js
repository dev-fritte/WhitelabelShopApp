import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, H2, Icon} from 'native-base';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

function WhitelabelDrawer(props) {
    const {navigation} = props;

    return (
        <Container>
            <Container style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AboutUs')}>
                    <Image
                        resizeMode={'center'}
                        source={require('../../whitelabel/banner.jpg')}
                    />
                </TouchableOpacity>
            </Container>
            <DrawerContentScrollView {...props} style={styles.container}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <Container style={styles.cartContainer}>
                <Icon
                    type={'AntDesign'}
                    name={'shoppingcart'}
                    style={styles.cartIcon}
                />
                <H2>Cart</H2>
            </Container>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    links: {
        flex: 0.55,
    },
    cartContainer: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e79544',
    },
    cartIcon: {
        marginRight: 15,
    },
});

export default WhitelabelDrawer;
