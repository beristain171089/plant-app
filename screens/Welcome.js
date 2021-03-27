import React, { Component } from 'react';
import { Animated, StyleSheet, FlatList, Image, Dimensions, Modal, ScrollView } from 'react-native';

import { Block, Button, Text } from '../components'
import { theme } from '../constants';
import navigation from '../navigation';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    scrollX = new Animated.Value(0);

    state = {

        showTerms: false
    }

    renderTermsService() {
        return (
            <Modal animationType="slide" visible={this.state.showTerms}>
                <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
                    <Text h2 light>Términos de Servicio</Text>
                    <ScrollView style={{ paddingVertical: theme.sizes.padding }}>
                        <Text caption gray height={18}>
                            1. Su uso del Servicio es bajo su propio riesgo. El servicio es
                            proporcionado "tal cual" y "según disponibilidad".
                    </Text>
                        <Text caption gray height={18}>
                            2. El soporte para los servicios de Expo solo está disponible en inglés, a través de
                            correo electrónico.
                    </Text>
                        <Text caption gray height={18}>
                            3. Entiende que Expo utiliza proveedores y hosting de terceros
                            socios para proporcionar el hardware, software, redes,
                            almacenamiento y tecnología relacionada requerida para ejecutar el Servicio.
                    </Text>
                        <Text caption gray height={18}>
                            4. No debe modificar, adaptar o piratear el Servicio o modificar
                            otro sitio web para implicar falsamente que está asociado con
                            el Servicio, Expo o cualquier otro servicio de Expo.
                    </Text>
                        <Text caption gray height={18}>
                            5. Puede utilizar el servicio de alojamiento estático de Expo Pages únicamente como
                            permitido y destinado a alojar las páginas de su organización, personal
                            páginas, o páginas de proyectos, y para ningún otro propósito. No puedes usar
                            Páginas de Expo en violación de la marca registrada de Expo u otros derechos o en
                            violación de la ley aplicable. Expo se reserva el derecho en todo momento
                            para reclamar cualquier subdominio de Expo sin responsabilidad para con usted.
                    </Text>
                        <Text caption gray height={18}>
                            6. Usted acepta no reproducir, duplicar, copiar, vender, revender o
                            explotar cualquier parte del Servicio, uso del Servicio o acceso
                            al Servicio sin el permiso expreso por escrito de Expo.
                    </Text>
                        <Text caption gray height={18}>
                            7. Podemos, pero no tenemos la obligación de, eliminar Contenido y Cuentas
                            El contenido que determinemos a nuestro exclusivo criterio son
                            ilegal, ofensivo, amenazante, calumnioso, difamatorio,
                            pornográfico, obsceno o de otra manera objetable o viola cualquier
                            propiedad intelectual de la parte o estos Términos de servicio.
                    </Text>
                        <Text caption gray height={18}>
                            8. Abuso verbal, físico, escrito o de otro tipo (incluidas amenazas de
                            abuso o retribución) de cualquier cliente, empleado, miembro o miembro de la Expo
                            oficial resultará en la terminación inmediata de la cuenta
                    </Text>
                        <Text caption gray height={18}>
                            9. Entiendes que el procesamiento técnico y la transmisión
                            del Servicio, incluido su Contenido, puede ser transferido
                            sin cifrar e implican (a) transmisiones a través de varias redes;
                            y (b) cambios para cumplir y adaptarse a los requisitos técnicos de
                            Conexión de redes o dispositivos.
                    </Text>
                        <Text caption gray height={18}>
                            10. No debe cargar, publicar, alojar o transmitir no solicitado
                            correo electrónico, SMS o mensajes de "spam".
                    </Text>
                    </ScrollView>
                    <Button
                        gradient
                        onPress={() => this.setState({ showTerms: false })}
                    >
                        <Text center white>Entiendo</Text>
                    </Button>
                </Block>
            </Modal>
        )
    }

    renderIllustrations() {
        const { illustrations } = this.props;

        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraDate={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                        source={item.source}
                        resizeMode="contain"
                        style={{ width, height: height / 2, overflow: "visible" }}
                    />
                )}
                onScroll={
                    Animated.event([{
                        nativeEvent: { contentOffset: { x: this.scrollX } }
                    }])
                }
            />
        );
    }

    renderSteps() {
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
            <Block row center middle style={styles.stepsContainer}>
                {illustrations.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Block
                            animated
                            flex={false}
                            key={`step-${index}`}
                            color="gray"
                            style={[styles.steps, { opacity }]} />
                    )
                })}

            </Block>
        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <Block>
                <Block center middle flex={0.5}>
                    <Text h1 center bold>
                        Tu Hogar.
                        <Text h1 primary>Más Verde.</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding }}>
                        Disfruta la experiencia.</Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => navigation.navigate('Login')}>
                        <Text center semibold white>Iniciar Sesión</Text>
                    </Button>
                    <Button shadow onPress={() => navigation.navigate('Signup')} >
                        <Text center semibold>Regístrate</Text>
                    </Button>
                    <Button onPress={() => this.setState({ showTerms: true })}>
                        <Text center caption gray>Términos de Servicio</Text>
                    </Button>
                </Block>
                {this.renderTermsService()}
            </Block>
        );
    }
}

Welcome.defaultProps = {
    illustrations: [
        { id: 1, source: require("../assets/images/illustration_1.png") },
        { id: 2, source: require("../assets/images/illustration_2.png") },
        { id: 3, source: require("../assets/images/illustration_3.png") }
    ]
};

export default Welcome;

const styles = StyleSheet.create({
    stepsContainer: {
        position: "absolute",
        bottom: theme.sizes.base * 3,
        right: 0,
        left: 0
    },
    steps: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5
    }
});