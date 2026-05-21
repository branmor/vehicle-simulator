<script setup lang="ts">
import { useVehicleStore } from '@/stores/vehicle'

const store = useVehicleStore()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-white mb-4">
        {{ store.projectName }}
      </h1>
      <p class="text-blue-100 text-lg">
        Simulador educativo de ingeniería automotriz
      </p>
      
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-800">Neumáticos</h3>
          <p class="text-gray-600 mt-2">Configura llantas y neumáticos</p>
        </div>
        
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-800">Diferencial</h3>
          <p class="text-gray-600 mt-2">Ajusta la relación final</p>
        </div>
        
        <div class="bg-white rounded-lg p-6 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-800">Motor</h3>
          <p class="text-gray-600 mt-2">Configura potencia y torque</p>
        </div>
      </div>
    </div>
  </div>
</template>