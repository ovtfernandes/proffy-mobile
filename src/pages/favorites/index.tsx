import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/page-header';

import styles from './styles';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />
        </View>
    );
}

export default Favorites;
