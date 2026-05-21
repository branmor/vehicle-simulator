# 📋 VEHICLE SIMULATOR - DOCUMENTO MAESTRO DE PROYECTO

**Versión:** 2.0  
**Fecha de creación:** Enero 2025  
**Última actualización:** [Fecha actual]  
**Estado:** Fase de Planificación  
**Framework:** Vue 3 + TypeScript + Vite

---

## 🎯 VISIÓN GENERAL DEL PROYECTO

**Nombre:** Vehicle Simulator Pro (VSP)  
**Tipo:** Aplicación Web Educativa de Ingeniería Automotriz  
**Objetivo:** Plataforma interactiva donde estudiantes puedan configurar virtualmente un vehículo y ver en tiempo real cómo cada componente (neumáticos, diferencial, motor, caja) afecta el rendimiento (velocidad, torque, aceleración, consumo).  
**Público:** Estudiantes de ingeniería mecánica/automotriz (INACAP y otras instituciones)

---

## 🛠️ STACK TECNOLÓGICO DEFINIDO

| Componente | Tecnología | Versión | Estado |
|------------|------------|---------|--------|
| **Framework** | **Vue** | **3.x** | ✅ Definido |
| Lenguaje | TypeScript | 5.x | ✅ Definido |
| Build Tool | Vite | 5.x | ✅ Definido |
| **Estado Global** | **Pinia** | **2.x** | ✅ Definido |
| **Rutas** | **Vue Router** | **4.x** | ✅ Definido |
| UI Framework | Tailwind CSS | 3.x | ✅ Definido |
| Componentes UI | shadcn-vue / PrimeVue | Latest | ✅ Definido |
| Gráficos | Chart.js / Vue-Chartjs | 4.x | ✅ Definido |
| Visualización 2D | Canvas API | Native | ✅ Definido |
| Control Versiones | Git + GitHub | - | ✅ Definido |
| Deploy | Vercel | - | ✅ Definido |

---

## 💰 ANÁLISIS DE COSTOS (100% GRATIS para uso educativo)

| Herramienta | Costo | Detalles |
|-------------|-------|----------|
| Node.js | ✅ Gratis | Open source |
| Vite | ✅ Gratis | Open source |
| Vue 3 + TypeScript | ✅ Gratis | Open source (Evan You) |
| Pinia | ✅ Gratis | Oficial Vue |
| Vue Router | ✅ Gratis | Oficial Vue |
| Tailwind CSS | ✅ Gratis | Open source |
| shadcn-vue / PrimeVue | ✅ Gratis | Open source |
| Chart.js | ✅ Gratis | Open source |
| VS Code | ✅ Gratis | Microsoft |
| Git | ✅ Gratis | Open source |
| GitHub | ✅ Gratis | Repos públicos ilimitados |
| Vercel | ✅ Gratis | Hobby plan (suficiente para proyecto educativo) |
| Dominio personalizado | ❌ Opcional (~$10-15/año) | Solo si quieres tu propio dominio |

**Total necesario: $0 USD**  
**Solo necesitas:** Computador + conexión a internet

---

## 📁 ESTRUCTURA DE ARCHIVOS DEL PROYECTO

/vehicle-simulator/
├── /src/
│ ├── /components/ # Componentes reutilizables
│ │ ├── /ui/ # Botones, inputs, cards (shadcn-vue)
│ │ ├── /vehicle/ # TireSelector.vue, DifferentialSelector.vue, etc.
│ │ └── /charts/ # SpeedChart.vue, TorqueChart.vue
│ │
│ ├── /pages/ # Vistas principales (rutas)
│ │ ├── Dashboard.vue
│ │ ├── Tires.vue
│ │ ├── Differential.vue
│ │ ├── Engine.vue
│ │ ├── Transmission.vue
│ │ ├── Comparison.vue
│ │ └── Report.vue
│ │
│ ├── /stores/ # Estado global (Pinia)
│ │ ├── vehicle.ts # useVehicleStore
│ │ └── settings.ts # useSettingsStore
│ │
│ ├── /engine/ # Motor de cálculo (FÍSICA + FÓRMULAS)
│ │ ├── calculations.ts # Fórmulas de velocidad, torque, etc.
│ │ ├── validations.ts # Validaciones de combinaciones
│ │ └── constants.ts # Constantes físicas
│ │
│ ├── /utils/ # Utilidades
│ │ ├── formatters.ts # Formateo de números, unidades
│ │ └── helpers.ts # Funciones auxiliares
│ │
│ ├── /data/ # Datos estáticos
│ │ ├── tireDatabase.ts # Base de datos de neumáticos
│ │ ├── gearRatios.ts # Relaciones de cajas comunes
│ │ └── vehicles.ts # Vehículos base (presets)
│ │
│ ├── /types/ # Tipos TypeScript
│ │ └── index.ts
│ │
│ ├── App.vue # Layout principal
│ ├── main.ts # Punto de entrada (Pinia + Router)
│ └── index.css # Estilos globales (Tailwind)
│
├── /public/ # Assets estáticos
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
---

## 🗺️ ROADMAP DETALLADO CON CHECKLIST

### **FASE 0: PREPARACIÓN (Semana 1)**
- [ ] Crear repositorio GitHub
- [ ] Instalar Node.js LTS (v20+)
- [ ] Instalar VS Code + extensión `Vue - Official (Volar)`
- [ ] Crear proyecto base con `npm create vite@latest vehicle-simulator -- --template vue-ts`
- [ ] Configurar Tailwind CSS
- [ ] Instalar y configurar Pinia + Vue Router
- [ ] Primer commit y push a GitHub
- [ ] Configurar deploy en Vercel (conexión con GitHub)

### **FASE 1: CIMIENTOS (Semana 2)**
- [ ] Crear store base con Pinia (`useVehicleStore`)
- [ ] Definir tipos TypeScript para vehículo completo
- [ ] Implementar motor de cálculo básico (`/engine/calculations.ts`)
- [ ] Crear layout principal con navegación (Vue Router)
- [ ] Configurar rutas básicas (`/dashboard`, `/tires`, etc.)
- [ ] Crear página Dashboard (vista general con métricas placeholder)
- [ ] Implementar sistema de unidades (métrico/imperial)

### **FASE 2: PÁGINAS BASE (Semanas 3-4)**
#### **Módulo Neumáticos:**
- [ ] Crear página `/tires`
- [ ] Selector de llanta (diámetro: 13"-20")
- [ ] Selector de perfil (35-75)
- [ ] Selector de ancho (155-285mm)
- [ ] Cálculo automático de diámetro total
- [ ] Visualización 2D del neumático (Canvas)
- [ ] Base de datos de neumáticos comunes

#### **Módulo Diferencial:**
- [ ] Crear página `/differential`
- [ ] Selector de relación (3.00-5.00)
- [ ] Input de dientes (piñón/corona)
- [ ] Selector de tipo (abierto/LSD/bloqueo)
- [ ] Cálculo de torque en ruedas

#### **Módulo Motor:**
- [ ] Crear página `/engine`
- [ ] Selector de tipo (NA/Turbo/Eléctrico)
- [ ] Input de potencia (kW/HP)
- [ ] Input de torque (Nm)
- [ ] Input de RPM máximas
- [ ] Curva de potencia editable (gráfica)

#### **Módulo Caja de Cambios:**
- [ ] Crear página `/transmission`
- [ ] Selector de número de marchas (3-8)
- [ ] Input de relaciones por marcha
- [ ] Selector de tipo (manual/auto/CVT)
- [ ] Cálculo de velocidad por marcha

### **FASE 3: INTERCONEXIÓN (Semana 5)**
- [ ] Conectar todas las páginas al store Pinia
- [ ] Implementar recálculo automático en tiempo real (reactividad Vue)
- [ ] Crear tabla de velocidades por marcha (actualización live)
- [ ] Gráfico de velocidad vs marcha (Vue-Chartjs)
- [ ] Gráfico de torque en ruedas vs marcha
- [ ] Cálculo de 0-100 km/h estimado
- [ ] Cálculo de velocidad máxima teórica
- [ ] Cálculo de consumo estimado

### **FASE 4: DASHBOARD AVANZADO (Semana 6)**
- [ ] Dashboard con métricas principales (cards)
- [ ] Comparador visual "Antes vs Después"
- [ ] Indicadores de advertencia (rojo/amarillo/verde)
- [ ] Visualización de cadena cinemática animada (Canvas)
- [ ] Panel de especificaciones técnicas completas

### **FASE 5: FUNCIONES AVANZADAS (Semana 7)**
- [ ] Sistema de presets/guardado de configuraciones (localStorage)
- [ ] Exportar configuración a JSON
- [ ] Importar configuración desde JSON
- [ ] Generar reporte PDF (especificaciones + gráficos)
- [ ] Compartir configuración vía URL (query params)
- [ ] Comparador lado a lado (2-3 configuraciones)

### **FASE 6: VALIDACIÓN Y CALIDAD (Semana 8)**
- [ ] Validaciones de combinaciones inviables
- [ ] Mensajes de advertencia (ej: "RPM en carretera muy altas")
- [ ] Tests unitarios del motor de cálculo (Vitest)
- [ ] Accesibilidad (WCAG AA)
- [ ] Responsive design (móvil/tablet/desktop)
- [ ] Optimización de rendimiento (lazy loading, code splitting)
- [ ] Documentación completa (README + comentarios)

### **FASE 7: DESPLIEGUE Y DOCUMENTACIÓN (Semana 9)**
- [ ] Deploy en Vercel (producción)
- [ ] Dominio personalizado (opcional)
- [ ] Video tutorial de uso (5-10 min)
- [ ] Guía del estudiante (PDF)
- [ ] Presentación para profesor (PPT)
- [ ] Backup final en GitHub

---

## 📊 ESTADO ACTUAL DEL PROYECTO

**Fase:** 0 - Planificación  
**Progreso:** 0%  
**Último avance:** Documento maestro actualizado a Vue 3  
**Próximo hito:** Fase 0 - Preparación

---

## 📝 CONVENCIONES Y REGLAS DEL PROYECTO

### **Código:**
- ✅ TypeScript estricto (no `any`)
- ✅ `<script setup lang="ts">` en todos los componentes `.vue`
- ✅ Nombres en inglés para código, español para UI
- ✅ Comentarios en español solo para lógica compleja
- ✅ Commits descriptivos (Conventional Commits)

### **UI/UX:**
- ✅ Diseño mobile-first
- ✅ Colores: Azul INACAP (#667eea) como primario
- ✅ Feedback visual inmediato (loading, success, error)
- ✅ Tooltips en términos técnicos

### **Cálculos:**
- ✅ Fórmulas documentadas con referencias
- ✅ Unidades siempre visibles (km/h, Nm, kW)
- ✅ Redondeo inteligente (2 decimales para ratios, 0 para RPM)
- ✅ Validación de rangos realistas

### **Git:**
- ✅ Rama `main` = producción estable
- ✅ Rama `develop` = desarrollo activo
- ✅ Ramas feature: `feature/nombre-funcionalidad`
- ✅ Pull requests obligatorios (aunque seas tú solo)

---

## 🔗 ENLACES IMPORTANTES

| Recurso | URL |
|---------|-----|
| **Repositorio GitHub** | [Por definir - crear en Fase 0] |
| **Deploy en Vercel** | [Por definir - crear en Fase 0] |
| **Documentación Vue** | https://vuejs.org |
| **Documentación Pinia** | https://pinia.vuejs.org |
| **Documentación Vue Router** | https://router.vuejs.org |
| **Documentación Tailwind** | https://tailwindcss.com/docs |
| **Documentación Vite** | https://vitejs.dev |
| **Vue - Official (Volar)** | https://marketplace.visualstudio.com/items?itemName=Vue.volar |

---

## 👥 ROLES Y RESPONSABILIDADES

### **Tú (Jorge Vivanco):**
- ✅ Definir requisitos funcionales
- ✅ Probar funcionalidades
- ✅ Validar cálculos con teoría
- ✅ Feedback de UX/UI
- ✅ Documentación académica

### **Yo (Asistente IA):**
- ✅ Arquitectura del proyecto
- ✅ Desarrollo de código
- ✅ Explicaciones técnicas
- ✅ Resolución de errores
- ✅ Guías paso a paso

---

## 📞 CÓMO CONSULTAR ESTE DOCUMENTO

**Cada vez que me pidas algo, yo revisaré:**
1. ¿En qué fase estamos?
2. ¿Qué checklists están pendientes?
3. ¿Qué convenciones aplican?
4. ¿Hay dependencias con otros módulos?

**Tú también debes:**
- ✅ Actualizar el progreso cuando completemos algo
- ✅ Marcar checklists como completados
- ✅ Agregar notas si cambiamos algo del plan
- ✅ Consultar antes de saltar fases (para evitar caos)

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

1. ✅ Confirmado: **Vue 3 + TypeScript + Vite + Pinia**
2. Crear cuenta en GitHub (si no tienes)
3. Instalar dependencias base (Node.js, VS Code + Volar)
4. Iniciar **Fase 0** (setup del proyecto)

---

## 📌 NOTAS ADICIONALES

- **Presupuesto:** $0 USD (todo gratis)
- **Tiempo estimado:** 9 semanas (1-2 horas/día)
- **Nivel de dificultad:** Intermedio (aprenderás mucho)
- **Resultado final:** Portafolio profesional + herramienta educativa usable

**Documento creado:** [Fecha actual]  
**Próxima revisión:** Al completar Fase 0

---

## ✅ CHECKLIST RÁPIDO DE INICIO

Antes de empezar a codificar, necesitamos:
- [ ] Confirmar que tienes Node.js instalado (o instalarlo)
- [ ] Confirmar que tienes VS Code instalado + extensión `Vue - Official`
- [ ] Crear cuenta en GitHub (si no tienes)
- [ ] Crear cuenta en Vercel (si no tienes)
- [ ] Espacio en disco: ~500MB libres