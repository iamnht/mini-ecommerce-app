import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CountDownTimer = ({ timeInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(timeInSeconds);

  useEffect(() => {
    setTimeLeft(timeInSeconds);
  }, [timeInSeconds]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countdown}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

export default CountDownTimer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#D6FF4B",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginStart: 8,
  },
  countdown: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
});