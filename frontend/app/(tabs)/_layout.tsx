import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A9301E',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            height: 70,
            paddingBottom: 12,
            paddingTop: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 8,
          },
          web: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',
            height: 70,
            paddingBottom: 12,
            paddingTop: 8,
            boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 4,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size + 2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="requests/index"
        options={{
          title: 'Mis Solicitudes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard-outline" size={size + 2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
