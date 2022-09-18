import React, { useEffect, useState } from 'react';
import { SafeAreaView, Touchable, TouchableOpacity, View, Image, FlatList, Text } from 'react-native';

import { Background } from '../../components/Background';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Headling } from '../../components/Headling';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { GameCardProps } from '../../components/GameCard';

export function Game() {

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);


  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://172.17.0.1:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right} />


        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Headling
          title={game.title}
          subtitle="Conecte-se e começe a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => {}}
            />
          )}
          horizontal
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          style={styles.containerList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo
            </Text>
          )}
        />


      </SafeAreaView>
    </Background>

  );
}
