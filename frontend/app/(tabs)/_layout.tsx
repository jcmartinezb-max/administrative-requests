import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A9301E',
        tabBarInactiveTintColor: '#CBD5E1',
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            height: 80,
            paddingBottom: 16,
            paddingTop: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.12,
            shadowRadius: 12,
            elevation: 12,
          },
          web: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            height: 80,
            paddingBottom: 16,
            paddingTop: 12,
            boxShadow: '0 -4px 12px rgba(0,0,0,0.12)',
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 6,
          letterSpacing: 0.3,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="home" size={size + 3} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="requests/index"
        options={{
          title: 'Solicitudes',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="document-text" size={size + 3} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
});
