import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MatchListStyle } from './MatchListStyle'
const MatchList = () => {
  return (
    <View style={MatchListStyle.card}>
    <View style={MatchListStyle.teamsContainer}>
      <Text style={MatchListStyle.teamText}>{teamA}</Text>
      <Text style={MatchListStyle.vsText}>vs</Text>
      <Text style={MatchListStyle.teamText}>{teamB}</Text>
    </View>
    <View style={MatchListStyle.dateTimeContainer}>
      <Text style={MatchListStyle.dateTimeText}>{dateTime}</Text>
    </View>
  </View>
  )
}

export default MatchList
