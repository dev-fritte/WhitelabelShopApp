import React from 'react';
import {StyleSheet} from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    Title,
} from 'native-base';

function CategoryScreen(props) {
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => props.navigation.openDrawer()}>
                        <Icon type="MaterialIcons" name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Categories</Title>
                </Body>
                <Right />
            </Header>
            <Content></Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryScreen;
