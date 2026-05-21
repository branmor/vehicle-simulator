import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVehicleStore = defineStore('vehicle', () => {
  // Estado base del vehículo
  const projectName = ref('Vehicle Simulator Pro')
  
  return {
    projectName
  }
})