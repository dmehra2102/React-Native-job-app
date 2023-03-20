import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch.js'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import styles from './popularjobs.style'

const Popularjobs = () => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  const {data,isLoading,error} = useFetch('search', { query: 'Nodejs developer', num_pages: 1});
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ):error ? (
          <Text>Something went wrong...</Text>
        ): (
          <FlatList  
            data={data}
            renderItem = {({item})=>(
              <PopularJobCard item={item} 
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap : SIZES.medium}}
            horizontal
          />
        )}
      </View>

    </View>
  )
}

export default Popularjobs