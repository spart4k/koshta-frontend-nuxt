const startGyroScope = (world) => {
  function handler() {
    const md = new MobileDetect(window.navigator.userAgent);
    if (!md.mobile()) return false;
    if (DeviceMotionEvent) {
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
    world.gravity.x = e.accelerationIncludingGravity.x
    world.gravity.y = -e.accelerationIncludingGravity.y
  }
  function handleOrientationAndroid(e) {
    console.log(e)
    world.gravity.x = -e.accelerationIncludingGravity.x
    world.gravity.y = e.accelerationIncludingGravity.y
  }
  handler()
}
export default startGyroScope