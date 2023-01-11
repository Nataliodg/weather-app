const Icons = (icon) => {
  switch (icon) {
      case 'Thunderstorm':
          icon='Icons/thunderstorms-rain.svg'
          console.log("TORMENTA")
          break;    
      case 'Drizzle':
          icon='Icons/drizzle.svg'
          console.log('LLOVIZNA');
          break;
      case 'Rain':
          icon='Icons/rain.svg'
          console.log('LLUVIA');
          break;
      case 'Snow':
          icon='Icons/snowy.svg'
          console.log('NIEVE');
          break;                        
      case 'Clear':
          icon='Icons/clear-day.svg'
          console.log('DESPEJADO');
          break;
      case 'Atmosphere':
          icon='Icons/weather.svg'
          console.log('ATMOSFERA');
          break;  
      case 'Clouds':
          icon='Icons/fog.svg'
          console.log('NUBES');
          break;  
      case 'Fog':
          icon='Icons/fog.svg'
          console.log('NUBES');
          break;    
      case 'Haze':
          icon='Icons/haze.svg'
          console.log('BRUMAS');
          break;   
      case 'Smoke':
          icon='Icons/smoke.svg'
          console.log('HUMO');
          break;      
      default:
          icon='Icons/clear-day.svg'
          console.log('LIMPIO');    
  }
return icon
}

export default Icons