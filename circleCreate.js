(function () {
  'use strict'
  const canvas = document.getElementById('c1')
  if (canvas.getContext) {
    function circleCreate () {
      const circle = canvas.getContext('2d')
      const xCord = Math.floor(Math.random() * 1351) + 1
      const yCord = Math.floor(Math.random() * 781) + 1
      const radius = Math.floor(Math.random() * 30) + 1
      const startAngle = 0
      const endAngle = Math.PI * 2
      const antiClockWise = false

      circle.beginPath()
      circle.arc(xCord, yCord, radius, startAngle, endAngle, antiClockWise)
      circle.strokeStyle = colorCreateRGB()
      circle.fillStyle = colorCreateRGB()
      circle.fill()
    }

    // RGBでカラーコード生成
    function colorCreateRGB () {
      let color
      const r = Math.round(Math.random() * 255)
      const g = Math.round(Math.random() * 255)
      const b = Math.round(Math.random() * 255)

      color = `rgb(${r}, ${g}, ${b})`

      return color
    }

    // HSLでカラーコード生成
    function colorCreateHSL () {
      let color
      const h = Math.random() * 360

      color = `hsl(${h}, 80%, 60%)`

      return color
    }

    function circleTimer () {
      setTimeout(() => {
        circleCreate()
        circleTimer()
      }, 300);
    }

    circleTimer()
  }
  
}) ()