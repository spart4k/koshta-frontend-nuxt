const startGyroScope = (world) => {
  function handler() {
    console.log('gyro start')
    if (DeviceMotionEvent) {
      console.log(typeof DeviceMotionEvent.requestPermission)
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        window.addEventListener('devicemotion', handleOrientationIos);
      } else if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        window.addEventListener('devicemotion', handleOrientationIos);
      } else {
        // Handle regular non iOS 13+ devices.
        window.addEventListener('devicemotion', handleOrientationAndroid);
      }
    }
    
  }
  function handleOrientationIos(e) {
    console.log(e)
    world.gravity.x = e.accelerationIncludingGravity.x * 2
    world.gravity.y = -e.accelerationIncludingGravity.y * 2
  }
  function handleOrientationAndroid(e) {
    console.log(e)
    world.gravity.x = -e.accelerationIncludingGravity.x * 2
    world.gravity.y = e.accelerationIncludingGravity.y * 2
  }
  handler()
}
export default startGyroScope