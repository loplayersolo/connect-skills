import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
// import { styles } from './styles'; 
 
const UserCard = () => ( 
  <View /*style={styles.card}*/> 
    <Text /*style={styles.userName}*/>Usuário Exemplo</Text> 
    <Text /*style={styles.infoText}*/>Aprender: Violão | Ensinar: Inglês</Text> 
  </View> 
); 
 
export function Home() { 
  const [usuarios] = useState([{}, {}, {}]); 
  const swiperRef = useRef(null); 
 
  const handleSwipeRight = () => alert('🎉 Combinação!'); 
  const handleSwipeLeft = () => alert('❌ Rejeitado!'); 
 
  return ( 
    <View /*style={styles.container}*/> 
      <Swiper 
        ref={swiperRef} 
        cards={usuarios} 
        renderCard={() => <UserCard />} 
        onSwipedRight={handleSwipeRight} 
        onSwipedLeft={handleSwipeLeft} 
        backgroundColor="#f3f4f6" 
        stackSize={3} 
      /> 
    </View> 
  ); 
} 